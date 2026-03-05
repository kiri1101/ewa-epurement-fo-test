export const useLoadingStore = defineStore('loading', () => {
  const isBALoading = ref<boolean>(false)

  const isBenefLoading = ref<boolean>(false)

  const isSearchingBenef = ref<boolean>(false)

  const isDeletingBenef = ref<boolean>(false)

  const isDomLoading = ref<boolean>(false)

  const isTransferTypeLoading = ref<boolean>(false)

  const isTransferSettingLoading = ref<boolean>(false)

  const isEngagementLetterLoading = ref<boolean>(false)

  const isTransferBenefLoading = ref<boolean>(false)

  const isCurrencyLoading = ref<boolean>(false)

  const isRateLoading = ref<boolean>(false)

  const showBALoader = () => (isBALoading.value = true)

  const hideBALoader = () => (isBALoading.value = false)

  const showBenefLoader = () => (isBenefLoading.value = true)

  const hideBenefLoader = () => (isBenefLoading.value = false)

  const showDeletingBenef = () => (isDeletingBenef.value = true)

  const hideDeletingBenef = () => (isDeletingBenef.value = false)

  const showSearchingBenef = () => (isSearchingBenef.value = true)

  const hideSearchingBenef = () => (isSearchingBenef.value = false)

  const showDomLoader = () => (isDomLoading.value = true)

  const hideDomLoader = () => (isDomLoading.value = false)

  const showTransferTypeLoader = () => (isTransferTypeLoading.value = true)

  const hideTransferTypeLoader = () => (isTransferTypeLoading.value = false)

  const showTransferSettingLoader = () =>
    (isTransferSettingLoading.value = true)

  const hideTransferSettingLoader = () =>
    (isTransferSettingLoading.value = false)

  const showEngagementLetterLoader = () =>
    (isEngagementLetterLoading.value = true)

  const hideEngagementLetterLoader = () =>
    (isEngagementLetterLoading.value = false)

  const showTransferBenefLoader = () => (isTransferBenefLoading.value = true)

  const hideTransferBenefLoader = () => (isTransferBenefLoading.value = false)

  const showCurrencyLoader = () => (isCurrencyLoading.value = true)

  const hideCurrencyLoader = () => (isCurrencyLoading.value = false)

  const showRateLoader = () => (isRateLoading.value = true)

  const hideRateLoader = () => (isRateLoading.value = false)

  const currencyLoading = computed(() => isCurrencyLoading.value)

  const rateLoading = computed(() => isRateLoading.value)

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
    hideRateLoader,
  }
})
