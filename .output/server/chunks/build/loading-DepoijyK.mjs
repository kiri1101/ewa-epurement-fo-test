import { ref, computed } from 'vue';
import { defineStore } from 'pinia';

const useLoadingStore = defineStore("loading", () => {
  const isBALoading = ref(false);
  const isBenefLoading = ref(false);
  const isSearchingBenef = ref(false);
  const isDeletingBenef = ref(false);
  const isDomLoading = ref(false);
  const isTransferTypeLoading = ref(false);
  const isTransferSettingLoading = ref(false);
  const isEngagementLetterLoading = ref(false);
  const isTransferBenefLoading = ref(false);
  const isCurrencyLoading = ref(false);
  const isRateLoading = ref(false);
  const showBALoader = () => isBALoading.value = true;
  const hideBALoader = () => isBALoading.value = false;
  const showBenefLoader = () => isBenefLoading.value = true;
  const hideBenefLoader = () => isBenefLoading.value = false;
  const showDeletingBenef = () => isDeletingBenef.value = true;
  const hideDeletingBenef = () => isDeletingBenef.value = false;
  const showSearchingBenef = () => isSearchingBenef.value = true;
  const hideSearchingBenef = () => isSearchingBenef.value = false;
  const showDomLoader = () => isDomLoading.value = true;
  const hideDomLoader = () => isDomLoading.value = false;
  const showTransferTypeLoader = () => isTransferTypeLoading.value = true;
  const hideTransferTypeLoader = () => isTransferTypeLoading.value = false;
  const showTransferSettingLoader = () => isTransferSettingLoading.value = true;
  const hideTransferSettingLoader = () => isTransferSettingLoading.value = false;
  const showEngagementLetterLoader = () => isEngagementLetterLoading.value = true;
  const hideEngagementLetterLoader = () => isEngagementLetterLoading.value = false;
  const showTransferBenefLoader = () => isTransferBenefLoading.value = true;
  const hideTransferBenefLoader = () => isTransferBenefLoading.value = false;
  const showCurrencyLoader = () => isCurrencyLoading.value = true;
  const hideCurrencyLoader = () => isCurrencyLoading.value = false;
  const showRateLoader = () => isRateLoading.value = true;
  const hideRateLoader = () => isRateLoading.value = false;
  const currencyLoading = computed(() => isCurrencyLoading.value);
  const rateLoading = computed(() => isRateLoading.value);
  return {
    isBALoading,
    showBALoader,
    hideBALoader,
    isBenefLoading,
    showBenefLoader,
    hideBenefLoader,
    isDeletingBenef,
    showDeletingBenef,
    hideDeletingBenef,
    isSearchingBenef,
    showSearchingBenef,
    hideSearchingBenef,
    isDomLoading,
    showDomLoader,
    hideDomLoader,
    isTransferTypeLoading,
    showTransferTypeLoader,
    hideTransferTypeLoader,
    isTransferSettingLoading,
    showTransferSettingLoader,
    hideTransferSettingLoader,
    isEngagementLetterLoading,
    showEngagementLetterLoader,
    hideEngagementLetterLoader,
    isTransferBenefLoading,
    showTransferBenefLoader,
    hideTransferBenefLoader,
    currencyLoading,
    showCurrencyLoader,
    hideCurrencyLoader,
    rateLoading,
    showRateLoader,
    hideRateLoader
  };
});

export { useLoadingStore as u };
//# sourceMappingURL=loading-DepoijyK.mjs.map
