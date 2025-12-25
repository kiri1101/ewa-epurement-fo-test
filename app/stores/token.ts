import type { AuthToken } from '~~/shared/utils/model'

export const useTokenStore = defineStore(
  'token',
  () => {
    const state = ref<AuthToken | null>(null)

    const update = (tokens: AuthToken) => (state.value = tokens)

    const reset = () => (state.value = null)

    return {
      state,
      update,
      reset,
    }
  },
  {
    persist: {
      storage: piniaPluginPersistedstate.cookies(),
    },
  }
)
