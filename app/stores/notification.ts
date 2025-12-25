export const useNotificationStore = defineStore(
  'notification',
  () => {
    const list = ref<Array<object>>([])

    const setList = (content: Array<object>) => (list.value = content)

    const updateList = (content: object) => list.value.push(content)

    return {
      list,
      setList,
      updateList,
    }
  },
  {
    persist: {
      storage: piniaPluginPersistedstate.localStorage(),
    },
  }
)
