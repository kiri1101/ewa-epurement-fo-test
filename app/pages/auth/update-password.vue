<script setup lang="ts">
import type { ZodValidationError } from '~~/shared/utils/model'

const config = useRuntimeConfig()
const { t, locale } = useI18n()
const { e, s } = useNotify()
const { $apiFetch } = useNuxtApp() as any
const authStore = useAuthStore()
const resetPwdStore = useResetPwdFormStore()
const isSecretInvalid = ref(false)
const isLoading = ref(false)
const form = ref({
  secret: '',
  secret_confirm: '',
})

useHead({
  title: `${t('meta.title.update_password')} - ${config.public.app.name}`,
  meta: [{ name: 'description', content: 'My design project application.' }],
})

onMounted(() => (form.value = resetPwdStore.form))

const showLoader = () => (isLoading.value = true)

const hideLoader = () => (isLoading.value = false)

const submit = async () => {
  isSecretInvalid.value =
    resetPwdStore.form.secret !== resetPwdStore.form.secret_confirm
      ? true
      : false

  if (!isSecretInvalid.value) {
    showLoader()
    try {
      const { apiResponse, errResponse, validError } = await $apiFetch(
        '/api/auth/update/password',
        {
          method: 'POST',
          body: {
            otp: resetPwdStore.form.otp,
            secret: resetPwdStore.form.secret,
            secret_confirm: resetPwdStore.form.secret_confirm,
            lang: locale.value,
          },
        }
      )

      /** flash validation error */
      if (validError) {
        validError.forEach((err: ZodValidationError) => e(err.message))
      }

      /** handle api response */
      if (apiResponse) {
        let output
        if (String(apiResponse.pesake.detail).trim().length > 0) {
          output = e(apiResponse.pesake.detail)
        } else {
          // flush reset password form store
          resetPwdStore.reset()
          //redirect to dashboard
          output = navigateTo('/dashboard')
        }
        return output
      }
    } catch (error) {
    } finally {
      hideLoader()
    }
  }
  // await navigateTo('/dashboard')
}
</script>

<template>
  <div class="w-full mx-auto sm:w-92">
    <h2
      class="pb-4 text-3xl font-bold text-center underline decoration-auth-form-title-decoration decoration-2 underline-offset-10 text-auth-text-primary"
    >
      {{ $t('page.update_password.form_title') }}
    </h2>

    <form @submit.prevent="submit" class="flex flex-col mt-4 space-y-4">
      <input-bg-transparent
        identifier="new_password"
        v-model="form.secret"
        :placeholder="$t('placeholder.new_password')"
        @value-change="(e: string | undefined) => resetPwdStore.updateFormField('secret', e)"
      />

      <div>
        <input-bg-transparent
          identifier="confirm_new_password"
          v-model="form.secret_confirm"
          :placeholder="$t('placeholder.confirm_new_password')"
          @value-change="(e: string | undefined) => resetPwdStore.updateFormField('secret_confirm', e)"
        />

        <span
          v-if="isSecretInvalid"
          class="text-xs text-validation-error font-semibold transition duration-200 ease-linear"
        >
          {{ $t('validation.pwd_confirm_failed') }}
        </span>
      </div>

      <button-primary
        type="submit"
        :label="$t('button.update_password')"
        :loading="isLoading"
      />
    </form>
  </div>
</template>
