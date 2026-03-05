import { shallowRef, computed } from 'vue';
import { k as storages } from './server.mjs';
import { defineStore } from 'pinia';

const useResetPwdFormStore = defineStore(
  "reset.pwd.form",
  () => {
    const otp = shallowRef("");
    const canResendOtp = shallowRef(false);
    const updateOtp = (value) => otp.value = value;
    const showResendOtpBtn = () => canResendOtp.value = true;
    const hideResendOtpBtn = () => canResendOtp.value = false;
    const reset = () => otp.value = "";
    const canResendOtpSnapshot = computed(() => canResendOtp.value);
    const otpSnapshot = computed(() => otp.value);
    return {
      otpSnapshot,
      updateOtp,
      reset,
      canResendOtpSnapshot,
      showResendOtpBtn,
      hideResendOtpBtn
    };
  },
  {
    persist: {
      storage: storages.localStorage(),
      key: "reset.pwd.form"
    }
  }
);

export { useResetPwdFormStore as u };
//# sourceMappingURL=reset.pwd.form-ChZjfk3l.mjs.map
