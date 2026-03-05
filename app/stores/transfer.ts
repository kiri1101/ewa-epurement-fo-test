export const useTransferStore = defineStore(
  'transfer',
  () => {
    const chosenTransfer = ref<any>({})

    const form = ref({
      requestId: '',
      type: {} as any,
      motive: {} as any,
      account: {} as AccountModel,
      amount: '',
      currency: '',
      targetDate: null,
      description: '',
      supportFee: '',
      beneficiary: {} as beneficiaryType,
      lang: '',
      files: {} as Record<string, string>,
      engagement: false,
      domNumber: '',
      declareNum: '',
      domUnikCode: {} as any,
    })

    const update = (data: any) => (form.value = data)

    const updateChosenTransfer = (transfer: any) =>
      (chosenTransfer.value = transfer)

    const reset = () =>
      (form.value = {
        requestId: '',
        type: {} as any,
        motive: {} as any,
        account: {} as AccountModel,
        amount: '',
        currency: '',
        targetDate: null,
        description: '',
        supportFee: '',
        beneficiary: {} as beneficiaryType,
        lang: '',
        files: {} as Record<string, string>,
        engagement: false,
        domNumber: '',
        declareNum: '',
        domUnikCode: {} as any,
      })

    const resetChosenTransfer = () => (chosenTransfer.value = {})

    const formSnapShot = computed(() => form.value)

    return {
      form,
      update,
      reset,
      chosenTransfer,
      updateChosenTransfer,
      resetChosenTransfer,
      formSnapShot,
    }
  },
  {
    persist: {
      storage: piniaPluginPersistedstate.sessionStorage(),
      key: 'transfer',
    },
  },
)
