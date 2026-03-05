import { ref, computed } from 'vue';
import { k as storages } from './server.mjs';
import { defineStore } from 'pinia';

const useTransferStore = defineStore(
  "transfer",
  () => {
    const chosenTransfer = ref({});
    const form = ref({
      requestId: "",
      type: {},
      motive: {},
      account: {},
      amount: "",
      currency: "",
      targetDate: null,
      description: "",
      supportFee: "",
      beneficiary: {},
      lang: "",
      files: {},
      engagement: false,
      domNumber: "",
      declareNum: "",
      domUnikCode: {}
    });
    const update = (data) => form.value = data;
    const updateChosenTransfer = (transfer) => chosenTransfer.value = transfer;
    const reset = () => form.value = {
      requestId: "",
      type: {},
      motive: {},
      account: {},
      amount: "",
      currency: "",
      targetDate: null,
      description: "",
      supportFee: "",
      beneficiary: {},
      lang: "",
      files: {},
      engagement: false,
      domNumber: "",
      declareNum: "",
      domUnikCode: {}
    };
    const resetChosenTransfer = () => chosenTransfer.value = {};
    const formSnapShot = computed(() => form.value);
    return {
      form,
      update,
      reset,
      chosenTransfer,
      updateChosenTransfer,
      resetChosenTransfer,
      formSnapShot
    };
  },
  {
    persist: {
      storage: storages.sessionStorage(),
      key: "transfer"
    }
  }
);

export { useTransferStore as u };
//# sourceMappingURL=transfer-BhCiLivd.mjs.map
