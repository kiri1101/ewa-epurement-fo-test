import { ref } from 'vue';
import { k as storages } from './server.mjs';
import { defineStore } from 'pinia';

const useAuthStore = defineStore(
  "authUser",
  () => {
    const state = ref(null);
    const getUserSnapShot = () => state.value ? state.value : null;
    const store = (user) => state.value = user;
    const clear = () => state.value = null;
    return {
      state,
      getUserSnapShot,
      store,
      clear
    };
  },
  {
    persist: {
      storage: storages.cookies()
    }
  }
);

export { useAuthStore as u };
//# sourceMappingURL=auth-uLpXCxdh.mjs.map
