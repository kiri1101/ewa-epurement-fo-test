import type { User } from '~~/shared/utils/model'

export const useAuthStore = defineStore(
  'auth',
  () => {
    const state = ref<User | null>(null)

    const isAuth = computed(() => (state.value ? true : false))

    const update = (user: User) => (state.value = user)

    const reset = () => (state.value = null)

    return {
      state,
      update,
      reset,
      isAuth,
    }
  },
  {
    persist: {
      storage: piniaPluginPersistedstate.cookies(),
    },
  }
)
