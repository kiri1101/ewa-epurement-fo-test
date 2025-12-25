import type { PwdResetForm } from '~~/shared/utils/model'

export const useResetPwdFormStore = defineStore(
  'reset.pwd.form',
  () => {
    const form = ref<PwdResetForm>({
      otp: '',
      secret: '',
      secret_confirm: '',
    })

    const updateFormField = (
      key: keyof PwdResetForm,
      value: string | undefined
    ) => {
      if (value) {
        form.value[key] = value
      }
    }

    const reset = () =>
      (form.value = {
        otp: '',
        secret: '',
        secret_confirm: '',
      })

    return {
      form,
      updateFormField,
      reset,
    }
  },
  {
    persist: {
      storage: piniaPluginPersistedstate.localStorage(),
    },
  }
)
