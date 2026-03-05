export const useBankStore = defineStore(
  'bank',
  () => {
    const accounts = ref<AccountModel[]>([])

    const store = (acc: AccountModel[]) => (accounts.value = acc)

    const clear = () => (accounts.value = [])

    return {
      accounts,
      store,
      clear,
    }
  },
  {
    persist: {
      storage: piniaPluginPersistedstate.localStorage(),
      key: 'bank',
    },
  },
)
