<script setup lang="ts">
definePageMeta({
  middleware: ['authenticated'],
})

const config = useRuntimeConfig()
const router = useRouter()
const { $apiFetch } = useNuxtApp() as any
const { t, locale } = useI18n()
const resetPwdStore = useResetPwdFormStore()
const { e, s } = useNotify()
const authStore = useAuthStore()
const isLoading = shallowRef(false)
const isResendingOtp = shallowRef(false)
const showResendBtn = shallowRef(false)
const otp = shallowRef('')

useHead({
  title: `${t('meta.title.forgot_password')} - ${config.public.app.name}`,
  meta: [{ name: 'description', content: 'My design project application.' }],
})

const { remaining, start, reset } = useCountdown(200, {
  onComplete() {
    showingResendButton()
  },
  // onTick() {},
})

const formattedTime = computed(() => {
  const m = Math.floor(remaining.value / 60)
  const s = remaining.value % 60
  return `${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`
})

const showResendLoader = () => (isResendingOtp.value = true)

const hideResendLoader = () => (isResendingOtp.value = false)

const showingResendButton = () => (showResendBtn.value = true)

const hidingResendButton = () => (showResendBtn.value = false)

const resendOtp = async () => {
  showResendLoader()
  try {
    const { apiResponse, validError } = await $apiFetch(
      config.public.api.resendOtp,
      {
        method: 'POST',
        body: {
          username: authStore.state?.username,
          lang: locale.value,
        },
      },
    )

    if (validError) {
      validError.forEach((err: ZodValidationError) => e(err.message))
    } else {
      hidingResendButton()
      resetPwdStore.hideResendOtpBtn()
      s(apiResponse)
      start()
    }
  } catch (error: any) {
    const errorMsg = handleApiError(error)
    if (errorMsg.length > 0) {
      e(errorMsg)
    }
  } finally {
    hideResendLoader()
  }
}

const next = async () => {
  if (String(otp.value).trim().length === 6) {
    resetPwdStore.updateOtp(otp.value)
    navigateTo(config.public.page.updatePwd)
  } else {
    e(t('validation.bad_otp'))
  }
}

onMounted(() => {
  router.afterEach((to, from) => {
    if (from.name === 'auth-update-password') {
      reset()
      resetPwdStore.showResendOtpBtn()
    }

    if (to.name === 'auth-signin') {
      reset()
      resetPwdStore.hideResendOtpBtn()
      resetPwdStore.reset()
    }
  })

  if (resetPwdStore.canResendOtpSnapshot) {
    showingResendButton()
  }

  start()
})
</script>

<template>
  <div class="mx-auto w-92">
    <h2
      class="pb-4 text-3xl font-bold text-center underline decoration-accent decoration-2 underline-offset-10 text-white"
    >
      {{ $t('page.forgot_password.form_title') }}
    </h2>

    <p>
      {{ $t('page.forgot_password.intro_msg.part1') }}
      <span class="font-semibold">{{ authStore.state?.emailAddress }}</span
      >.
      {{ $t('page.forgot_password.intro_msg.part2') }}
    </p>

    <form
      @submit.prevent="next"
      class="flex flex-col mt-4 space-y-4"
      autocomplete="off"
    >
      <input-otp-night-variant
        identifier="otp"
        v-model="otp"
        size="large"
        pt:root="mx-auto"
        integerOnly
      />

      <p v-if="!showResendBtn" class="text-sm">
        {{ $t('page.forgot_password.resend_code') }}
        <span class="font-bold text-status-error">{{ formattedTime }}</span>
      </p>

      <button-primary
        type="submit"
        :label="$t('button.verify_code')"
        :loading="isLoading"
        :disabled="showResendBtn"
      />

      <div
        v-if="showResendBtn"
        class="flex justify-center gap-2 text-sm text-center"
      >
        <span>
          {{ $t('page.forgot_password.resend_code_link') }}
        </span>

        <div class="flex items-center">
          <span
            @click.prevent="resendOtp"
            class="ml-2 underline cursor-pointer decoration-accent hover:decoration-accent-light decoration-1 underline-offset-4 text-accent hover:text-accent-light"
          >
            {{ $t('page.forgot_password.resend_code_button') }}
          </span>

          <svg-loader v-if="isResendingOtp" />
        </div>
      </div>
    </form>
  </div>
</template>
