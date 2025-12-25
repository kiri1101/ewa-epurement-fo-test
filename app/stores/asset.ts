export const useAssetStore = defineStore(
  'asset',
  () => {
    const list = ref<object>({})

    const hasAssets = computed(() => Object.keys(list.value).length > 0)

    const setAssets = (content: object) => (list.value = content)

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
