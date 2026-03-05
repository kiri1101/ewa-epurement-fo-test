export const useResetPwdFormStore = defineStore(
  'reset.pwd.form',
  () => {
    const otp = shallowRef<string>('')

    const canResendOtp = shallowRef<boolean>(false)

    const updateOtp = (value: string) => (otp.value = value)

    const showResendOtpBtn = () => (canResendOtp.value = true)

    const hideResendOtpBtn = () => (canResendOtp.value = false)

    const reset = () => (otp.value = '')

    const canResendOtpSnapshot = computed(() => canResendOtp.value)

    const otpSnapshot = computed(() => otp.value)

    return {
      otpSnapshot,
      updateOtp,
      reset,
      canResendOtpSnapshot,
      showResendOtpBtn,
      hideResendOtpBtn,
    }
  },
  {
    persist: {
      storage: piniaPluginPersistedstate.localStorage(),
      key: 'reset.pwd.form',
    },
  },
)
