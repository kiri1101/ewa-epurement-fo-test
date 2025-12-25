import type { accMap } from '~~/shared/utils/model'

export const useBankStore = defineStore(
  'bank',
  () => {
    const state = ref<accMap | null>(null)

    const update = (bank: accMap) => (state.value = bank)

    const reset = () => (state.value = null)

    return {
      state,
      update,
      reset,
    }
  },
  {
    persist: {
      storage: piniaPluginPersistedstate.localStorage(),
    },
  }
)
