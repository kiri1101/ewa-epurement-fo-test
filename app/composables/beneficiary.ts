export const useBeneficiaries = () => {
  const { $apiFetch } = useNuxtApp() as any
  const config = useRuntimeConfig()
  const { locale } = useI18n()
  const store = useLoadingStore()
  const { e } = useNotify()

  const getBeneficiaries = async () => {
    let output = {
      validationErr: [] as any[],
      response: null as any,
      error: '',
    }

    store.showBenefLoader()
    try {
      const { apiResponse, validError } = await $apiFetch(
        config.public.api.beneficiary.list,
        {
          method: 'POST',
          body: {
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
      store.hideBenefLoader()
    }

    return output
  }

  const deleteBenef = async (index: string) => {
    let output = {
      validationErr: [] as any[],
      response: null as any,
      error: '',
    }

    store.showDeletingBenef()
    try {
      const { apiResponse, validError } = await $apiFetch(
        config.public.api.beneficiary.delete,
        {
          method: 'POST',
          body: {
            id: index,
            lang: locale.value,
          },
        },
      )

      if (validError) {
        validError.forEach((err: any) => e(err?.message))
      }

      output.response = apiResponse
    } catch (error: any) {
      const errorMsg = handleApiError(error)

      if (errorMsg.length > 0) {
        e(errorMsg)
      }
    } finally {
      store.hideDeletingBenef()
    }

    return output
  }

  const getBenefDetails = async (id: string) => {
    let output = {
      validationErr: [] as any[],
      response: null as any,
      error: '',
    }

    store.showSearchingBenef()
    try {
      const { apiResponse, validError } = await $apiFetch(
        config.public.api.beneficiary.search,
        {
          method: 'POST',
          body: {
            searchIndex: id,
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
      store.hideSearchingBenef()
    }

    return output
  }

  const getBenefSettings = async () => {
    let output = {
      validationErr: [] as any[],
      response: null as any,
      error: '',
    }

    try {
      const { apiResponse, validError } = await $apiFetch(
        config.public.api.beneficiary.setting,
        {
          method: 'POST',
          body: {
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
    }

    return output
  }

  return {
    getBeneficiaries,
    deleteBenef,
    getBenefDetails,
    getBenefSettings,
  }
}
