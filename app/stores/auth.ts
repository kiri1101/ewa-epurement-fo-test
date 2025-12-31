export const useAuthStore = defineStore(
  'authUser',
  () => {
    const state = ref<AuthData | null>(null)

    const getUserSnapShot = (): AuthData | null =>
      state.value ? state.value : null

    const store = (user: AuthData) => (state.value = user)

    const clear = () => (state.value = null)

    return {
      state,
      getUserSnapShot,
      store,
      clear,
    }
  },
  {
    persist: {
      storage: piniaPluginPersistedstate.cookies(),
    },
  }
)
