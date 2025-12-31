export const useAssetStore = defineStore(
  'asset',
  () => {
    const list = ref<any>({})

    const hasAssets = computed(() => Object.keys(list.value).length > 0)

    const setAssets = (content: any) => (list.value = content)

    const resetAssets = () => (list.value = {})

    return {
      list,
      hasAssets,
      setAssets,
      resetAssets,
    }
  },
  {
    persist: {
      storage: piniaPluginPersistedstate.localStorage(),
    },
  }
)
