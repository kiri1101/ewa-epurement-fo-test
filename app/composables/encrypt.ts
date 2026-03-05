export const useEncrypt = () => {
  const { $apiFetch } = useNuxtApp() as any
  const config = useRuntimeConfig()
  const { locale } = useI18n()
  const isEncrypting = shallowRef(false)

  const encryptStatus = computed(() => isEncrypting.value)

  const getEncrypt = async (url: string, type: 'multiply' | 'divide') => {
    let output = {
      validationErr: [] as any[],
      response: <Record<string, string | null> | null>null,
      error: '',
    }

    isEncrypting.value = true

    try {
      const { apiResponse, validError } = await $apiFetch(
        config.public.api.encrypt,
        {
          method: 'POST',
          body: {
            key: {
              url: url,
            },
            branch: type,
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
      isEncrypting.value = false
    }

    return output
  }

  return {
    encryptStatus,
    getEncrypt,
  }
}
