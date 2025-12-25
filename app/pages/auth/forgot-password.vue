<script setup lang="ts">
const config = useRuntimeConfig()
const { $apiFetch } = useNuxtApp() as any
const { t } = useI18n()
const resetPwdStore = useResetPwdFormStore()
const { e } = useNotify()
const isLoading = ref(false)
const otp = ref('')

useHead({
  title: `${t('meta.title.forgot_password')} - ${config.public.app.name}`,
  meta: [{ name: 'description', content: 'My design project application.' }],
})

onMounted(() => (otp.value = resetPwdStore.form.otp))

const { remaining, start, stop } = useCountdown(200, {
  onComplete() {
    //
  },
  onTick() {},
})

const formattedTime = computed(() => {
  const m = Math.floor(remaining.value / 60)
  const s = remaining.value % 60
  return `${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`
})

const showLoader = () => (isLoading.value = true)

const hideLoader = () => (isLoading.value = false)

const next = async () => {
  if (String(resetPwdStore.form.otp).trim().length > 0) {
    showLoader()
    let output
    try {
      const { apiResponse, validError } = await $apiFetch(
        '/api/auth/validateOtp',
        {
          method: 'POST',
          body: {
            otp: resetPwdStore.form.otp,
          },
        }
      )

      /** flash validation error */
      if (validError) {
        output = validError.forEach((err: ZodValidationError) => e(err.message))
      } else {
        output = !apiResponse
          ? e(t('validation.bad_otp'))
          : navigateTo('/auth/update-password')
      }

      return output
    } catch (error) {
    } finally {
      hideLoader()
    }
  } else {
    e(t('validation.bad_otp'))
  }
}
</script>

<template>
  <div class="mx-auto w-92">
    <h2
      class="pb-4 text-3xl font-bold text-center underline decoration-auth-form-title-decoration decoration-2 underline-offset-10 text-auth-text-primary"
    >
      {{ $t('page.forgot_password.form_title') }}
    </h2>

    <p>
      {{ $t('page.forgot_password.intro_msg.part1') }}
      <span class="font-semibold">ousmane@gmail.com</span>.
      {{ $t('page.forgot_password.intro_msg.part2') }}
    </p>

    <form @submit.prevent="next" class="flex flex-col mt-4 space-y-4">
      <input-otp-variant
        identifier="otp"
        v-model="otp"
        size="large"
        pt:root="mx-auto"
        integerOnly
        @value-change="(e: string | undefined) => resetPwdStore.updateFormField('otp', e)"
      />

      <p class="text-sm">
        {{ $t('page.forgot_password.resend_code') }}
        <span class="font-bold text-auth-countdown">{{ formattedTime }}</span>
      </p>

      <button-primary
        type="submit"
        :label="$t('button.verify_code')"
        :loading="isLoading"
      />

      <p class="text-sm text-center">
        {{ $t('page.forgot_password.resend_code_link') }}
        <span
          class="ml-2 underline cursor-pointer decoration-link-decoration hover:decoration-link-hover-decoration decoration-1 underline-offset-4 text-link hover:text-link-hover"
        >
          {{ $t('page.forgot_password.resend_code_button') }}
        </span>
      </p>
    </form>
  </div>
</template>
