<script setup lang="ts">
import type { ZodValidationError } from '~~/shared/utils/model'

definePageMeta({
  middleware: ['authenticated'],
})

const config = useRuntimeConfig()
const { t, locale } = useI18n()
const { e } = useNotify()
const { $apiFetch } = useNuxtApp() as any
const resetPwdStore = useResetPwdFormStore()
const isSecretInvalid = shallowRef(false)
const isLoading = shallowRef(false)
const showPass = shallowRef(false)
const showPassConfirm = shallowRef(false)
const form = ref({
  secret: '',
  secret_confirm: '',
})

useHead({
  title: `${t('meta.title.update_password')} - ${config.public.app.name}`,
  meta: [{ name: 'description', content: 'My design project application.' }],
})

const passwordFieldType = computed(() => (showPass.value ? 'text' : 'password'))

const passwordConfirmFieldType = computed(() =>
  showPassConfirm.value ? 'text' : 'password',
)

const showingPassword = () => (showPass.value = true)

const hidingPassword = () => (showPass.value = false)

const showingPasswordConfirm = () => (showPassConfirm.value = true)

const hidingPasswordConfirm = () => (showPassConfirm.value = false)

const showLoader = () => (isLoading.value = true)

const hideLoader = () => (isLoading.value = false)

const submit = async () => {
  isSecretInvalid.value =
    form.value.secret !== form.value.secret_confirm ? true : false

  if (!isSecretInvalid.value) {
    showLoader()
    try {
      const { apiResponse, validError } = await $apiFetch(
        config.public.api.updatePwd,
        {
          method: 'POST',
          body: {
            otp: resetPwdStore.otpSnapshot,
            secret: form.value.secret,
            secret_confirm: form.value.secret_confirm,
            lang: locale.value,
          },
        },
      )

      /** flash validation error */
      if (validError) {
        validError.forEach((err: ZodValidationError) => e(err.message))
      }

      /** handle api response */
      if (apiResponse) {
        let output
        if (String(apiResponse.pesake.code).length > 0) {
          output = e(apiResponse.pesake.details.pesakeDetail)
        } else {
          // flush reset password form store
          resetPwdStore.reset()
          //redirect to dashboard
          output = navigateTo(config.public.page.clientBoard)
        }
        return output
      }
    } catch (error) {
      const err = handleApiErrorWithCode(error)

      if (err.status > 0) {
        e(err.message)
        if (String(err.status) === '30125') {
          navigateTo(config.public.page.forgotPwd)
        }
      }
    } finally {
      hideLoader()
    }
  }
}
</script>

<template>
  <div class="w-full mx-auto sm:w-92">
    <h2
      class="pb-4 text-3xl font-bold text-center underline decoration-accent decoration-2 underline-offset-10 text-white"
    >
      {{ $t('page.update_password.form_title') }}
    </h2>

    <form @submit.prevent="submit" class="flex flex-col mt-4 space-y-4">
      <input-group>
        <input-bg-transparent
          identifier="new_password"
          v-model="form.secret"
          :type="passwordFieldType"
          :placeholder="$t('placeholder.new_password')"
        />

        <input-addon-transparent>
          <i
            v-if="showPass"
            @click.prevent="hidingPassword"
            class="text-text-secondary pi pi-eye"
          />

          <i
            v-else
            @click.prevent="showingPassword"
            class="text-text-secondary pi pi-eye-slash"
          />
        </input-addon-transparent>
      </input-group>

      <div>
        <input-group>
          <input-bg-transparent
            identifier="confirm_new_password"
            v-model="form.secret_confirm"
            :type="passwordConfirmFieldType"
            :placeholder="$t('placeholder.confirm_new_password')"
          />

          <input-addon-transparent>
            <i
              v-if="showPassConfirm"
              @click.prevent="hidingPasswordConfirm"
              class="text-text-secondary pi pi-eye"
            />

            <i
              v-else
              @click.prevent="showingPasswordConfirm"
              class="text-text-secondary pi pi-eye-slash"
            />
          </input-addon-transparent>
        </input-group>

        <span
          v-if="isSecretInvalid"
          class="text-xs text-status-error font-semibold transition duration-200 ease-linear"
        >
          {{ $t('validation.pwd_confirm_failed') }}
        </span>
      </div>

      <button-primary
        :type="$t('button.submit')"
        :label="$t('button.update_password')"
        :loading="isLoading"
      />
    </form>
  </div>
</template>
