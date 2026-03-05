export const useCurrency = () => {
  const { $apiFetch } = useNuxtApp() as any
  const config = useRuntimeConfig()
  const { locale } = useI18n()
  const store = useLoadingStore()

  const getCurrencyList = async () => {
    let output = {
      validationErr: [] as any[],
      response: <any[]>[],
      error: '',
    }

    store.showCurrencyLoader()

    try {
      const { apiResponse, validError } = await $apiFetch(
        config.public.api.setting.currency,
        {
          method: 'POST',
          body: {
            lang: locale.value,
          },
        }
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
      store.hideCurrencyLoader()
    }

    return output
  }

  const getRatesList = async () => {
    let output = {
      validationErr: [] as any[],
      response: <any[]>[],
      error: '',
    }

    store.showRateLoader()

    try {
      const { apiResponse, validError } = await $apiFetch(
        config.public.api.setting.rates,
        {
          method: 'POST',
          body: {
            lang: locale.value,
          },
        }
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
      store.hideRateLoader()
    }

    return output
  }

  return {
    getCurrencyList,
    getRatesList,
  }
}
