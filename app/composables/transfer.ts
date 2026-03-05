type TransferType = {
  type: any[]
  category: any[]
}

type TransferSetting = {
  rates: any[]
  currency: any[]
  beneficiary: any[]
  account: any[]
}

type EngagementLetter = {
  name: string
  link: string
}

export const useTransfer = () => {
  const { $apiFetch } = useNuxtApp() as any
  const config = useRuntimeConfig()
  const { locale } = useI18n()
  const store = useLoadingStore()

  const getDomiciliations = async () => {
    let output = {
      validationErr: [] as any[],
      response: null as any[] | null,
      error: '',
    }

    store.showDomLoader()
    try {
      const { apiResponse, validError } = await $apiFetch(
        config.public.api.domiciliation.list,
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
      store.hideDomLoader()
    }

    return output
  }

  const getTransferTypes = async () => {
    let output = {
      validationErr: [] as any[],
      response: <TransferType | null>{
        type: [] as any[],
        category: [] as any[],
      },
      error: '',
    }

    store.showTransferTypeLoader()
    try {
      const { apiResponse, validError } = await $apiFetch(
        config.public.api.transfer.types,
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
      store.hideTransferTypeLoader()
    }

    return output
  }

  const getEngagementLetter = async (demandId: string) => {
    let output = {
      validationErr: [] as any[],
      response: <EngagementLetter | null>{
        name: '',
        link: '',
      },
      error: '',
    }

    store.showEngagementLetterLoader()
    try {
      const { apiResponse, validError } = await $apiFetch(
        config.public.api.transfer.engagement,
        {
          method: 'POST',
          body: {
            demandId: demandId,
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
      store.hideEngagementLetterLoader()
    }

    return output
  }

  const getBeneficiaryList = async () => {
    let output = {
      validationErr: [] as any[],
      response: <any[]>[],
      error: '',
    }

    store.showTransferBenefLoader()

    try {
      const { apiResponse, validError } = await $apiFetch(
        config.public.api.beneficiary.list,
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
      store.hideTransferBenefLoader()
    }

    return output
  }

  return {
    getDomiciliations,
    getTransferTypes,
    getEngagementLetter,
    getBeneficiaryList,
  }
}
