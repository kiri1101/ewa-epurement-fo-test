import { ref } from 'vue';
import { s as storages } from './server.mjs';
import { defineStore } from 'pinia';

const useResetPwdFormStore = defineStore(
  "reset.pwd.form",
  () => {
    const form = ref({
      otp: "",
      secret: "",
      secret_confirm: ""
    });
    const updateFormField = (key, value) => {
      if (value) {
        form.value[key] = value;
      }
    };
    const reset = () => form.value = {
      otp: "",
      secret: "",
      secret_confirm: ""
    };
    return {
      form,
      updateFormField,
      reset
    };
  },
  {
    persist: {
      storage: storages.localStorage()
    }
  }
);

export { useResetPwdFormStore as u };
//# sourceMappingURL=reset.pwd.form-CHIpEOgY.mjs.map
