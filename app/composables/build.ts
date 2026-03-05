export const useFormBuilder = () => {
  const { $apiFetch } = useNuxtApp() as any
  const config = useRuntimeConfig()
  const { locale } = useI18n()
  const isLoadingForm = shallowRef(false)

  const isFormLoading = computed(() => isLoadingForm.value)

  const getForm = async (
    target: string,
    mode: string = 'create',
    identifier: string = '',
  ) => {
    let output = {
      validationErr: [] as any[],
      response: null as BuildFormResponse | null,
      error: '',
    }

    isLoadingForm.value = true
    try {
      const { apiResponse, validError } = await $apiFetch(
        config.public.api.build.form,
        {
          method: 'POST',
          body: {
            target: target,
            mode: mode,
            identifier: identifier,
            lang: locale.value,
          },
        },
      )

      if (validError) {
        output.validationErr = validError
      }

      output.response = apiResponse
    } catch (error: any) {
      const errorMsg = handleApiError(error)

      if (errorMsg.length > 0) {
        output.error = errorMsg
      }
    } finally {
      isLoadingForm.value = false
    }

    return output
  }

  return {
    isFormLoading,
    getForm,
  }
}
