import { ref } from 'vue';
import { k as storages } from './server.mjs';
import { defineStore } from 'pinia';

const useBankStore = defineStore(
  "bank",
  () => {
    const accounts = ref([]);
    const store = (acc) => accounts.value = acc;
    const clear = () => accounts.value = [];
    return {
      accounts,
      store,
      clear
    };
  },
  {
    persist: {
      storage: storages.localStorage(),
      key: "bank"
    }
  }
);

export { useBankStore as u };
//# sourceMappingURL=bank-BwzX4P6l.mjs.map
