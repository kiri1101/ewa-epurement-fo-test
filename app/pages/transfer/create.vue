<script setup lang="ts">
definePageMeta({
  layout: 'connected',
  middleware: ['authenticated'],
})

const config = useRuntimeConfig()
const { t, locale } = useI18n()
const route = useRoute()
const router = useRouter()

useHead({
  title: `${t('meta.title.transfer.new')} - ${config.public.app.name}`,
  meta: [{ name: 'description', content: 'My design project application.' }],
})

const { $apiFetch } = useNuxtApp() as any
const {
  getDomiciliations,
  getTransferTypes,
  getEngagementLetter,
  getBeneficiaryList,
} = useTransfer()
const {
  isDomLoading,
  isTransferTypeLoading,
  isTransferSettingLoading,
  isEngagementLetterLoading,
  isTransferBenefLoading,
} = storeToRefs(useLoadingStore())
const { getCurrencyList, getRatesList } = useCurrency()
const { getEncrypt } = useEncrypt()
const { selectInputPt, buttonPt } = useCustomStyle()
const transferStore = useTransferStore()
const bankStore = useBankStore()
const isLoading = shallowRef(false)
const isRestoringForm = shallowRef(false)
const { e, s } = useNotify()
const transferTypeList = ref<{
  type: any[]
  category: any[]
}>({
  type: [],
  category: [],
})
const filteredTransferTypeList = ref<any[]>([])
const rateList = ref<any[]>([])
const currencyList = ref<any[]>([])
const beneficiaryList = ref<any[]>([])
const domiciliationList = ref<any[]>([])
const fileListByType = ref<TransferTypeFile[]>([])
const engagementLetter = ref({
  name: '',
  link: '',
})
const numUploadedFiles = shallowRef(0)
const totalNumFiles = shallowRef(0)
const activeStep = shallowRef(1)
const showDomiciliationForm = shallowRef(false)
const showDomiciliation = shallowRef(false)
const domiciliationType = shallowRef('')
const chosenRate = ref<Record<string, string>>({})
const requiredFiles = ref<string[]>([])
const convertedAmount = shallowRef(0)
const showAmountConversion = shallowRef('1')
const showDomExtraForm = shallowRef('2')
const chosenOption = shallowRef('')
const form = ref({
  requestId: '',
  type: {} as any,
  motive: {} as any,
  account: {} as AccountModel,
  amount: '',
  currency: '',
  targetDate: null,
  description: '',
  supportFee: '',
  beneficiary: {} as beneficiaryType,
  lang: '',
  files: {} as Record<string, string>,
  engagement: false,
  domNumber: '',
  declareNum: '',
  domUnikCode: {} as any,
})
const validErrorMsg = ref({
  type: '',
  motive: '',
  account: '',
  amount: '',
  currency: '',
  targetDate: '',
  description: '',
  supportFee: '',
  beneficiary: '',
  files: '',
  domNumber: '',
  declareNum: '',
})

const showEngagementNotice = computed(() =>
  form.value.engagement && engagementLetter.value.link.trim().length > 0
    ? '0'
    : '1',
)

const openDomTypeForm = computed(() => (showDomiciliation.value ? '0' : '1'))

const showingLoader = () => (isLoading.value = true)

const hidingLoader = () => (isLoading.value = false)

const stepNavigation = async (
  callback: Function,
  step: number,
  direction: string,
) => {
  let output
  if (direction === 'next') {
    if (step === 2) {
      if (form.value.motive?.code.trim().length > 0) {
        if (showDomiciliationForm.value) {
          transferStore.update(form.value)

          await navigateTo({
            name: 'domiciliation-new',
            query: {
              callbackUrl: '/transfer/create',
            },
          })
        } else {
          setFileListByType(form.value.motive?.code)
          output = callback(step)
        }
      } else {
        output = e('Provide a valid transfer motive')
      }
    } else if (step === 3) {
      submit(callback)
    } else {
      output = callback(step)
    }
  } else if (direction === 'back') {
    output = !showDomiciliationForm.value ? callback(2) : callback(step)
  } else {
    output = callback(step)
  }

  return output
}

const toggleDomExtraForm = (value: string) => {
  chosenOption.value = value
  if (value === 'select') {
    showDomExtraForm.value = '1'
  } else if (value === 'done') {
    showDomExtraForm.value = '0'
  } else {
    showDomExtraForm.value = '2'
  }
  showDomiciliationForm.value = value === 'create' ? true : false
}

const setTypeByCategory = (type: any) => {
  showDomExtraForm.value = '2'
  chosenOption.value = ''
  domiciliationType.value = type.code.toUpperCase().endsWith('BIEN')
    ? 'BIEN'
    : 'SERVICE'
  filteredTransferTypeList.value = transferTypeList.value.type.filter(
    (item: any) => item.category.code === type.code,
  )
}

const canOpenDomAccordion = () => {
  showDomiciliation.value =
    form.value.motive?.activateDom &&
    convertedAmount.value > Number(form.value.motive?.domAmount)
      ? true
      : false
}

const setFileListByType = (code: string) => {
  let reqIds = <string[]>[]
  const type: any = transferTypeList.value.type.find(
    (item: any) => item.code === code,
  )

  if (type) {
    fileListByType.value = type.attachments
    totalNumFiles.value = type.attachments.length

    if (form.value.engagement) {
      fileListByType.value.forEach((file: any) => {
        if (file.forExecution) {
          reqIds.push(file.code)
        }
      })
    } else {
      fileListByType.value.forEach((file: any) => {
        if (file.isRequired || file.forExecution) {
          reqIds.push(file.code)
        }
      })
    }
  } else {
    fileListByType.value = []
    totalNumFiles.value = 0
  }

  canOpenDomAccordion()

  requiredFiles.value = reqIds
}

const setUploadedFile = (code: string, fileId: string) => {
  form.value.files[code] = fileId
  numUploadedFiles.value++
}

const clearFile = (code: string) => {
  form.value.files[code] = ''
  numUploadedFiles.value--
}

const setChosenCurrentRate = () => {
  const rate: any = rateList.value.find(
    (item: any) =>
      item.initCode === form.value.currency && item.finalCode === 'XAF',
  )

  chosenRate.value = rate ? rate : {}
  convertCurrency(Number(form.value.amount))
  showAmountConversion.value =
    Number(form.value.amount) > 0 && chosenRate.value ? '0' : '1'
  canOpenDomAccordion()
}

const convertCurrency = (amount: number) => {
  convertedAmount.value = chosenRate.value?.value
    ? formatNumber(amount, chosenRate.value.value)
    : 0

  showAmountConversion.value =
    amount > 0 && Object.values(chosenRate.value).length > 0 ? '0' : '1'
}

const resetValidErrorMsg = () => {
  validErrorMsg.value = {
    type: '',
    motive: '',
    account: '',
    amount: '',
    currency: '',
    targetDate: '',
    description: '',
    supportFee: '',
    beneficiary: '',
    files: '',
    domNumber: '',
    declareNum: '',
  }
}

const domiciliations = async () => {
  const res = await getDomiciliations()

  if (res.validationErr.length > 0) {
    res.validationErr.forEach((err: any) => e(err?.message))
  }
  if (res.error.length > 0) {
    e(res.error)
  }
  if (res.response) {
    let filteredList = res.response

    if (form.value.currency?.trim().length > 0) {
      filteredList = filteredList.filter(
        (item: any) => item.benefCurrency === form.value.currency,
      )
    }

    if (form.value.beneficiary?.code?.trim().length > 0) {
      filteredList = filteredList.filter(
        (item: any) => item.benefCode === form.value.beneficiary.code,
      )
    }

    if (form.value.type?.code?.trim().length > 0) {
      filteredList = filteredList.filter(
        (item: any) => item.natureCode === form.value.type.code,
      )
    }

    if (Number(form.value.amount) > 0) {
      filteredList = filteredList.filter(
        (item: any) => Number(item.balance) > Number(form.value.amount),
      )
    }

    domiciliationList.value = filteredList
  }
}

const transferTypes = async () => {
  const res = await getTransferTypes()

  if (res.validationErr.length > 0) {
    res.validationErr.forEach((err: any) => e(err?.message))
  }
  if (res.error.length > 0) {
    e(res.error)
  }
  if (res.response) {
    transferTypeList.value.category = res.response.category
    transferTypeList.value.type = res.response.type
  }
}

const currency = async () => {
  const res = await getCurrencyList()

  if (res.validationErr.length > 0) {
    res.validationErr.forEach((err: any) => e(err?.message))
  }
  if (res.error.length > 0) {
    e(res.error)
  }
  if (res.response) {
    currencyList.value = res.response
  }
}

const rates = async () => {
  const res = await getRatesList()

  if (res.validationErr.length > 0) {
    res.validationErr.forEach((err: any) => e(err?.message))
  }
  if (res.error.length > 0) {
    e(res.error)
  }
  if (res.response) {
    rateList.value = res.response
  }
}

const beneficiaries = async () => {
  const res = await getBeneficiaryList()

  if (res.validationErr.length > 0) {
    res.validationErr.forEach((err: any) => e(err?.message))
  }
  if (res.error.length > 0) {
    e(res.error)
  }
  if (res.response?.length > 0) {
    beneficiaryList.value = res.response
  }
}

const submit = async (callback: Function) => {
  resetValidErrorMsg()
  const proceed = requiredFiles.value.every((key: string) =>
    Object.keys(form.value.files).includes(key),
  )

  if (!proceed) {
    e('Please upload all required files')
  } else {
    form.value.lang = locale.value

    showingLoader()
    try {
      const { apiResponse, validError } = await $apiFetch(
        config.public.api.transfer.create,
        {
          method: 'POST',
          body: {
            demandId: form.value.requestId,
            type: form.value.motive?.code,
            account: form.value.account?.accRef,
            amount: form.value.amount,
            currency: form.value.currency,
            targetDate: form.value.targetDate,
            description: form.value.description,
            supportFee: form.value.supportFee,
            beneficiaryCode: form.value.beneficiary?.code,
            domNumber: form.value.domNumber,
            declareNum: form.value.declareNum,
            unikCode: form.value.domUnikCode?.code ?? '',
            lang: locale.value,
            files: form.value.files,
            engagement: form.value.engagement,
          },
        },
      )

      if (validError) {
        validError.forEach((err: any) => {
          e(t('validation.empty_form'))
          validErrorMsg.value[err.name as keyof typeof validErrorMsg.value] =
            err.message
        })
      } else {
        form.value.requestId = apiResponse.requestId

        s(apiResponse.message)
        callback(3)
      }
    } catch (error: any) {
      const errorMsg = handleApiError(error)
      if (errorMsg.length > 0) {
        e(errorMsg)
      }
    } finally {
      hidingLoader()
    }
  }
}

const fetchLetter = async () => {
  const res = await getEngagementLetter(form.value.requestId)

  if (res.validationErr.length > 0) {
    res.validationErr.forEach((err: any) => e(err?.message))
  }
  if (res.error.length > 0) {
    e(res.error)
  }
  if (res.response && res.response?.link) {
    engagementLetter.value = res.response
  }
}

const handleCreateTransfer = async () => {
  transferStore.reset()
  await navigateTo({ name: 'dashboard' })
}

const openPdf = async (fileUrl: string) => {
  const res = await getEncrypt(fileUrl, 'multiply')

  if (res.validationErr.length > 0) {
    res.validationErr.forEach((err: any) => e(err?.message))
  }
  if (res.error.length > 0) {
    e(res.error)
  }
  if (res.response && res.response?.url) {
    router.push({
      path: '/viewer/document',
      query: {
        page: `${router.currentRoute.value.fullPath}&step=3`,
        url: res.response?.url,
      },
    })
  }
}

const resumeAfterDomCreation = async (domiciliationFlag: string) => {
  let res = JSON.parse(atob(domiciliationFlag))

  const snapshot = transferStore.formSnapShot
  isRestoringForm.value = true

  const matchedType = transferTypeList.value.category.find(
    (item: any) => item.code === snapshot.type?.code,
  )
  form.value.type = matchedType || snapshot.type

  if (matchedType) {
    filteredTransferTypeList.value = transferTypeList.value.type.filter(
      (item: any) => item.category.code === matchedType.code,
    )
  }

  const matchedMotive = filteredTransferTypeList.value.find(
    (item: any) => item.code === snapshot.motive?.code,
  )

  form.value.motive = matchedMotive || snapshot.motive
  form.value.account = snapshot.account
  form.value.amount = snapshot.amount
  form.value.currency = snapshot.currency
  form.value.targetDate = snapshot.targetDate
  form.value.description = snapshot.description
  form.value.supportFee = snapshot.supportFee
  form.value.beneficiary = snapshot.beneficiary
  form.value.lang = snapshot.lang
  form.value.files = snapshot.files
  form.value.engagement = snapshot.engagement
  form.value.domNumber = snapshot.domNumber
  form.value.declareNum = snapshot.declareNum
  form.value.domUnikCode = res

  // Allow the watcher to behave normally again on next tick
  nextTick(() => {
    let step = (route.query.step as string) ?? null
    if (step) activeStep.value = Number(step)
    isRestoringForm.value = false
    setChosenCurrentRate()
    toggleDomExtraForm('select')
  })
}

onMounted(async () => {
  let update = (route.query?.update as string) ?? null
  beneficiaries()
  await transferTypes()
  await currency()
  await rates()
  if (Object.keys(route.query).includes('domFlag') && update) {
    let flag = route.query.domFlag as string
    await resumeAfterDomCreation(flag)
  } else {
    transferStore.reset()
  }
})

onUnmounted(() => {
  transferStore.resetChosenTransfer()
})

watch(
  () => chosenOption.value,
  val => {
    if (
      val === 'select' &&
      form.value.currency.length > 0 &&
      Object.keys(form.value.beneficiary).length > 0 &&
      Object.keys(form.value.type).length > 0
    ) {
      domiciliations()
    }
  },
)

watch(
  () => form.value.amount,
  () => {
    if (chosenOption.value === 'select') {
      domiciliations()
    }
  },
)

watch(
  () => form.value.currency,
  () => {
    if (chosenOption.value === 'select') {
      domiciliations()
    }
  },
)

watch(
  () => form.value.beneficiary,
  () => {
    if (chosenOption.value === 'select') {
      domiciliations()
    }
  },
)

watch(
  () => form.value.type,
  () => {
    showDomiciliation.value = false
    showDomiciliationForm.value = false

    if (!isRestoringForm.value) {
      form.value.motive = {}
    }
    if (chosenOption.value === 'select') {
      domiciliations()
    }
  },
)
</script>

<template>
  <div class="pb-5 text-text-primary space-y-5">
    <navbar-auth-nav :title="$t('menu.transfer.new')" />

    <gadget-banner>
      <div class="grid grid-cols-[auto_1fr] h-full">
        <div class="grid justify-center ml-2 text-sm text-white lg:text-base">
          <div class="ml-5 translate-y-8">
            <h3 class="font-semibold">
              {{ $t('page.transfer.new.title1') }}
            </h3>

            <h4 class="text-xs">
              {{ $t('page.transfer.new.title2') }}
            </h4>
          </div>
        </div>

        <div class="flex justify-end">
          <gadget-image-blur>
            <img
              src="/images/profile.png"
              class="z-30 object-cover object-center w-auto h-22"
              alt="Bank Logo"
            />
          </gadget-image-blur>
        </div>
      </div>
    </gadget-banner>

    <form>
      <Stepper v-model:value="activeStep" linear>
        <StepList>
          <Step
            v-slot="{ activateCallback, value, a11yAttrs }"
            asChild
            :value="1"
          >
            <div class="flex flex-row flex-auto gap-2" v-bind="a11yAttrs.root">
              <table-transfert-step
                :value="value"
                :activeStep="activeStep"
                :activateCallback="activateCallback"
                :icon="'pi pi-user'"
                v-bind="a11yAttrs.header"
              />

              <Divider />
            </div>
          </Step>

          <Step
            v-slot="{ activateCallback, value, a11yAttrs }"
            asChild
            :value="2"
          >
            <div
              class="flex flex-row flex-auto gap-2 pl-2"
              v-bind="a11yAttrs.root"
            >
              <table-transfert-step
                :value="value"
                :activeStep="activeStep"
                :activateCallback="activateCallback"
                :icon="'pi pi-upload'"
                v-bind="a11yAttrs.header"
              />
              <Divider />
            </div>
          </Step>

          <Step
            v-slot="{ activateCallback, value, a11yAttrs }"
            asChild
            :value="3"
          >
            <div class="flex flex-row pl-2" v-bind="a11yAttrs.root">
              <table-transfert-step
                :value="value"
                :activeStep="activeStep"
                :activateCallback="activateCallback"
                :icon="'pi pi-book'"
                v-bind="a11yAttrs.header"
              />
            </div>
          </Step>
        </StepList>
        <StepPanels>
          <StepPanel v-slot="{ activateCallback }" :value="1">
            <div class="grid grid-cols-2 gap-3">
              <div>
                <label for="type" class="text-xs text-text-secondary">
                  {{ $t('page.transfer.new.type') }}

                  <span
                    class="text-white font-semibold text-xxs bg-status-error rounded px-1"
                  >
                    {{ $t('page.required') }}
                  </span>
                </label>

                <input-select
                  name="type"
                  v-model="form.type"
                  :options="transferTypeList.category"
                  :loading="isTransferTypeLoading"
                  :value-key="null"
                  filter
                  placeholder="Choose a transfer type"
                  @update:modelValue="(e: any) => setTypeByCategory(e)"
                />

                <input-error-msg
                  v-if="validErrorMsg.type.trim().length > 0"
                  :label="validErrorMsg.type"
                />
              </div>

              <div>
                <label for="motive" class="text-xs text-text-secondary">
                  {{ $t('page.transfer.new.motive') }}

                  <span
                    class="text-white font-semibold text-xxs bg-status-error rounded px-1"
                  >
                    {{ $t('page.required') }}
                  </span>
                </label>

                <input-select
                  name="motive"
                  v-model="form.motive"
                  :options="filteredTransferTypeList"
                  :loading="isTransferTypeLoading"
                  :value-key="null"
                  filter
                  placeholder="Choose a transfer motive"
                />

                <input-error-msg
                  v-if="validErrorMsg.type.trim().length > 0"
                  :label="validErrorMsg.type"
                />
              </div>

              <div>
                <label for="amount" class="text-xs text-text-secondary">
                  {{ $t('page.transfer.new.amount') }}

                  <span
                    class="text-white font-semibold text-xxs bg-status-error rounded px-1"
                  >
                    {{ $t('page.required') }}
                  </span>
                </label>

                <input-custom-number
                  v-model="form.amount"
                  identifier="amount"
                  :max-fraction-digits="3"
                  placeholder="0.000"
                  autocomplete="off"
                  @input="(e: any) => convertCurrency(e.value)"
                  @blur="canOpenDomAccordion"
                />

                <input-error-msg
                  v-if="validErrorMsg.amount.trim().length > 0"
                  :label="validErrorMsg.amount"
                />
              </div>

              <div>
                <label for="currency" class="text-xs text-text-secondary">
                  {{ $t('page.transfer.new.currency') }}

                  <span
                    class="text-white font-semibold text-xxs bg-status-error rounded px-1"
                  >
                    {{ $t('page.required') }}
                  </span>
                </label>

                <input-select
                  v-model="form.currency"
                  :options="currencyList"
                  :loading="isTransferSettingLoading"
                  filter
                  placeholder="Choose an currency"
                  @update:modelValue="setChosenCurrentRate"
                />

                <input-error-msg
                  v-if="validErrorMsg.currency.trim().length > 0"
                  :label="validErrorMsg.currency"
                />
              </div>

              <Accordion
                v-model:value="showAmountConversion"
                class="col-span-2"
              >
                <AccordionPanel value="0">
                  <AccordionContent pt:content:style="padding: 0 !important">
                    <ul class="m-0 py-3 bg-bg-secondary px-2">
                      <li class="flex items-center justify-between">
                        <p>{{ $t('page.transfer.new.rate') }}:</p>
                        <p>
                          1 {{ chosenRate?.initCode }} = {{ chosenRate?.value }}
                          {{ chosenRate?.finalCode }}
                        </p>
                      </li>
                      <li class="flex items-center justify-between">
                        <p>{{ $t('page.transfer.new.total_amount') }}:</p>
                        <p>
                          {{
                            Intl.NumberFormat('en-US').format(convertedAmount)
                          }}
                          {{ chosenRate?.finalCode }}
                        </p>
                      </li>
                    </ul>
                  </AccordionContent>
                </AccordionPanel>
              </Accordion>

              <div>
                <label for="account" class="text-xs text-text-secondary">
                  {{ $t('page.transfer.new.account_num') }}

                  <span
                    class="text-white font-semibold text-xxs bg-status-error rounded px-1"
                  >
                    {{ $t('page.required') }}
                  </span>
                </label>

                <Select
                  v-model="form.account"
                  :options="bankStore.accounts"
                  :loading="isTransferSettingLoading"
                  :placeholder="$t('placeholder.select_account')"
                  :pt="selectInputPt"
                  @update:modelValue="(e: any) => (form.account = e)"
                >
                  <!-- form.account = e -->
                  <template #value="slotProps">
                    <div v-if="slotProps.value">
                      <span class="text-sm">{{ slotProps.value.iBan }} - </span>
                      <span class="text-sm">
                        {{ slotProps.value.accType }}
                      </span>
                    </div>
                    <span v-else>
                      {{ slotProps.placeholder }}
                    </span>
                  </template>
                  <template #option="slotProps">
                    <div class="flex items-center gap-2">
                      <i
                        v-if="slotProps.option"
                        class="pi pi-building-columns"
                        style="font-size: 1.3rem"
                      />

                      <div>
                        <p class="text-sm">{{ slotProps.option.iBan }}</p>

                        <div class="text-xs">
                          <span>{{ slotProps.option.agency }} - </span>
                          <span>{{ slotProps.option.accType }}</span>
                        </div>
                      </div>
                    </div>
                  </template>
                </Select>

                <input-error-msg
                  v-if="validErrorMsg.account.trim().length > 0"
                  :label="validErrorMsg.account"
                />
              </div>

              <div>
                <label for="targetDate" class="text-xs text-text-secondary">
                  {{ $t('page.transfer.new.target_date') }}
                </label>

                <input-date-picker
                  v-model="form.targetDate"
                  showIcon
                  fluid
                  icon-display="input"
                  :min-date="new Date()"
                />

                <input-error-msg
                  v-if="validErrorMsg.targetDate.trim().length > 0"
                  :label="validErrorMsg.targetDate"
                />
              </div>

              <div>
                <label for="beneficiary" class="text-xs text-text-secondary">
                  {{ $t('page.transfer.new.beneficiary') }}

                  <span
                    class="text-white font-semibold text-xxs bg-status-error rounded px-1"
                  >
                    {{ $t('page.required') }}
                  </span>
                </label>

                <Select
                  v-model="form.beneficiary"
                  :options="beneficiaryList"
                  :loading="isTransferBenefLoading"
                  :placeholder="$t('placeholder.select_beneficiary')"
                  :pt="selectInputPt"
                  @update:modelValue="(e: any) => (form.beneficiary = e)"
                >
                  <template #value="slotProps">
                    <div v-if="slotProps.value">
                      <span class="text-sm"
                        >{{ slotProps.value.fullName }} -
                      </span>
                      <span class="text-sm">
                        {{ sliceIban(slotProps.value.iban) }}
                      </span>
                    </div>
                    <span v-else>
                      {{ slotProps.placeholder }}
                    </span>
                  </template>
                  <template #option="slotProps">
                    <div class="flex items-center gap-2">
                      <i
                        v-if="slotProps.option"
                        class="pi pi-building-columns"
                        style="font-size: 1.3rem"
                      />

                      <div>
                        <p class="text-sm">{{ slotProps.option.fullName }}</p>

                        <p class="text-xs">
                          {{ slotProps.option.iban }}
                        </p>
                      </div>
                    </div>
                  </template>
                </Select>

                <input-error-msg
                  v-if="validErrorMsg.beneficiary.trim().length > 0"
                  :label="validErrorMsg.beneficiary"
                />
              </div>

              <Accordion v-model:value="openDomTypeForm" class="col-span-2">
                <AccordionPanel value="0">
                  <AccordionContent pt:content:style="padding: 0 !important;">
                    <p class="text-xs text-text-secondary mb-0.5">
                      {{ $t('page.transfer.new.domiciliation') }}

                      <span
                        class="text-white font-semibold text-xxs bg-status-error rounded px-1"
                      >
                        {{ $t('page.required') }}
                      </span>
                    </p>

                    <ul class="grid grid-cols-3 gap-3">
                      <li
                        :class="[
                          'flex items-center text-sm gap-2 py-2.5 px-4 rounded-md cursor-pointer border transition-colors ease-linear duration-200',
                          {
                            'border-accent bg-accent-muted':
                              chosenOption === 'create',
                            'border-primary-light hover:bg-bg-secondary':
                              chosenOption !== 'create',
                          },
                        ]"
                        @click.prevent="toggleDomExtraForm('create')"
                      >
                        <input-radio
                          v-model="chosenOption"
                          inputId="create"
                          name="fee"
                          value="create"
                          size="small"
                        />

                        <div>
                          <label for="create" class="font-semibold uppercase">
                            {{
                              $t('page.transfer.new.dom_options.create.title')
                            }}
                          </label>

                          <p class="text-xs text-text-secondary">
                            {{
                              $t(
                                'page.transfer.new.dom_options.create.description',
                              )
                            }}
                          </p>
                        </div>
                      </li>

                      <li
                        :class="[
                          'flex items-center text-sm gap-2 py-2.5 px-4 rounded-md cursor-pointer border transition-colors ease-linear duration-200',
                          {
                            'border-accent bg-accent-muted':
                              chosenOption === 'select',
                            'border-primary-light hover:bg-bg-secondary':
                              chosenOption !== 'select',
                          },
                        ]"
                        @click.prevent="toggleDomExtraForm('select')"
                      >
                        <input-radio
                          v-model="chosenOption"
                          inputId="select"
                          name="fee"
                          value="select"
                          size="small"
                        />

                        <div>
                          <label for="select" class="font-semibold uppercase">
                            {{
                              $t('page.transfer.new.dom_options.select.title')
                            }}
                          </label>

                          <p class="text-xs text-text-secondary">
                            {{
                              $t(
                                'page.transfer.new.dom_options.select.description',
                              )
                            }}
                          </p>
                        </div>
                      </li>

                      <li
                        :class="[
                          'flex items-center text-sm gap-2 py-2.5 px-4 rounded-md cursor-pointer border transition-colors ease-linear duration-200',
                          {
                            'border-accent bg-accent-muted':
                              chosenOption === 'done',
                            'border-primary-light hover:bg-bg-secondary':
                              chosenOption !== 'done',
                          },
                        ]"
                        @click.prevent="toggleDomExtraForm('done')"
                      >
                        <input-radio
                          v-model="chosenOption"
                          inputId="done"
                          name="fee"
                          value="done"
                          size="small"
                        />

                        <div>
                          <label for="done" class="font-semibold uppercase">
                            {{ $t('page.transfer.new.dom_options.done.title') }}
                          </label>

                          <p class="text-xs text-text-secondary">
                            {{
                              $t(
                                'page.transfer.new.dom_options.done.description',
                              )
                            }}
                          </p>
                        </div>
                      </li>
                    </ul>
                  </AccordionContent>
                </AccordionPanel>
              </Accordion>

              <Accordion v-model:value="showDomExtraForm" class="col-span-2">
                <AccordionPanel value="0">
                  <AccordionContent
                    pt:content:style="padding: 0 !important; "
                    pt:content:class="grid grid-cols-2 gap-2"
                  >
                    <div>
                      <label
                        for="domNumber"
                        class="text-xs text-text-secondary"
                      >
                        {{ $t('page.transfer.new.dom_number') }}
                      </label>

                      <input-bg-normal
                        v-model="form.domNumber"
                        identifier="domNumber"
                        class="uppercase"
                      />

                      <input-error-msg
                        v-if="validErrorMsg.domNumber.trim().length > 0"
                        :label="validErrorMsg.domNumber"
                      />
                    </div>

                    <div>
                      <label
                        for="declareNum"
                        class="text-xs text-text-secondary"
                      >
                        {{ $t('page.transfer.new.declare_num') }}
                      </label>

                      <input-bg-normal
                        v-model="form.declareNum"
                        identifier="declareNum"
                        class="uppercase"
                      />

                      <input-error-msg
                        v-if="validErrorMsg.declareNum.trim().length > 0"
                        :label="validErrorMsg.declareNum"
                      />
                    </div>
                  </AccordionContent>
                </AccordionPanel>
                <AccordionPanel value="1">
                  <AccordionContent pt:content:style="padding: 0 !important;">
                    <div>
                      <label
                        for="domNumber"
                        class="text-xs text-text-secondary mb-0.5"
                      >
                        {{ $t('page.transfer.new.domiciliation') }}
                      </label>

                      <Select
                        v-model="form.domUnikCode"
                        :options="domiciliationList"
                        :loading="isDomLoading"
                        :placeholder="$t('placeholder.select_domiciliation')"
                        :pt="selectInputPt"
                        @update:modelValue="(e: any) => (form.domUnikCode = e)"
                      >
                        <template #value="slotProps">
                          <div v-if="slotProps.value">
                            <span class="text-sm">
                              {{ slotProps.value.beneficiary }} -
                            </span>
                            <span class="text-sm font-semibold">
                              {{
                                Intl.NumberFormat('en-US', {
                                  style: 'currency',
                                  currency: slotProps.value.benefCurrency,
                                }).format(Number(slotProps.value.balance))
                              }}
                            </span>
                          </div>
                          <span v-else>
                            {{ slotProps.placeholder }}
                          </span>
                        </template>
                        <template #option="slotProps">
                          <div class="flex items-center gap-2">
                            <i
                              v-if="slotProps.option"
                              class="pi pi-id-card"
                              style="font-size: 1.3rem"
                            />

                            <div>
                              <p class="text-sm">
                                {{ slotProps.option.beneficiary }}
                              </p>

                              <p class="text-xs font-bold">
                                {{
                                  Intl.NumberFormat('en-US', {
                                    style: 'currency',
                                    currency: slotProps.option.benefCurrency,
                                  }).format(Number(slotProps.option.balance))
                                }}
                              </p>
                            </div>
                          </div>
                        </template>
                      </Select>

                      <input-error-msg
                        v-if="validErrorMsg.domNumber.trim().length > 0"
                        :label="validErrorMsg.domNumber"
                      />
                    </div>
                  </AccordionContent>
                </AccordionPanel>
              </Accordion>

              <div class="col-span-2">
                <label for="description" class="text-xs text-text-secondary">
                  {{ $t('page.transfer.new.remittance_info') }}
                </label>

                <Textarea
                  v-model="form.description"
                  rows="5"
                  cols="10"
                  class="block w-full placeholder-accent-muted bg-bg-secondary"
                  placeholder="State the reason for the transfer"
                />

                <input-error-msg
                  v-if="validErrorMsg.description.trim().length > 0"
                  :label="validErrorMsg.description"
                />
              </div>

              <div class="col-span-2">
                <label for="handleCost" class="text-xs text-text-secondary">
                  {{ $t('page.transfer.new.handle_cost') }}

                  <span
                    class="text-white font-semibold text-xxs bg-status-error rounded px-1"
                  >
                    {{ $t('page.required') }}
                  </span>
                </label>

                <ul class="grid grid-cols-3 gap-3">
                  <li
                    :class="[
                      'flex items-center text-sm gap-2 py-2.5 px-4 rounded-md cursor-pointer border transition-colors ease-linear duration-200',
                      {
                        'border-accent bg-accent-muted':
                          form.supportFee === 'client',
                        'border-primary-light hover:bg-bg-secondary':
                          form.supportFee !== 'client',
                      },
                    ]"
                    @click.prevent="() => (form.supportFee = 'client')"
                  >
                    <input-radio
                      v-model="form.supportFee"
                      inputId="client"
                      name="fee"
                      value="client"
                      size="small"
                    />

                    <div>
                      <label for="client" class="font-semibold"> OUR </label>

                      <p class="text-xs text-text-secondary">
                        {{ $t('page.transfer.new.cover_cost.our') }}
                      </p>
                    </div>
                  </li>

                  <li
                    :class="[
                      'flex items-center text-sm gap-2 py-2.5 px-4 rounded-md cursor-pointer border transition-colors ease-linear duration-200',
                      {
                        'border-accent bg-accent-muted':
                          form.supportFee === 'beneficiary',
                        'border-primary-light hover:bg-bg-secondary':
                          form.supportFee !== 'beneficiary',
                      },
                    ]"
                    @click.prevent="() => (form.supportFee = 'beneficiary')"
                  >
                    <input-radio
                      v-model="form.supportFee"
                      inputId="beneficiary"
                      name="fee"
                      value="beneficiary"
                      size="small"
                    />

                    <div>
                      <label for="beneficiary" class="font-semibold">
                        BEN
                      </label>

                      <p class="text-xs text-text-secondary">
                        {{ $t('page.transfer.new.cover_cost.ben') }}
                      </p>
                    </div>
                  </li>

                  <li
                    :class="[
                      'flex items-center text-sm gap-2 py-2.5 px-4 rounded-md cursor-pointer border transition-colors ease-linear duration-200',
                      {
                        'border-accent bg-accent-muted':
                          form.supportFee === 'both',
                        'border-primary-light hover:bg-bg-secondary':
                          form.supportFee !== 'both',
                      },
                    ]"
                    @click.prevent="() => (form.supportFee = 'both')"
                  >
                    <input-radio
                      v-model="form.supportFee"
                      inputId="both"
                      name="fee"
                      value="both"
                      size="small"
                    />

                    <div>
                      <label for="both" class="font-semibold"> SHA </label>

                      <p class="text-xs text-text-secondary">
                        {{ $t('page.transfer.new.cover_cost.sha') }}
                      </p>
                    </div>
                  </li>
                </ul>

                <input-error-msg
                  v-if="validErrorMsg.supportFee.trim().length > 0"
                  :label="validErrorMsg.supportFee"
                />
              </div>

              <div class="col-span-2 mt-2 pt-4 border-t border-border-main">
                <div
                  class="flex items-center text-sm gap-4 py-2.5 px-4 rounded-lg cursor-pointer border border-primary-light hover:bg-bg-secondary transition-colors ease-linear duration-200"
                >
                  <div>
                    <input-toggle v-model="form.engagement" />
                  </div>

                  <div class="space-y-1">
                    <p class="font-semibold">
                      {{ $t('page.transfer.new.doc_undertake') }}
                    </p>

                    <p class="text-xs text-text-secondary">
                      {{ $t('page.transfer.new.doc_undertake_note') }}
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div class="grid pt-6 justify-end">
              <button-primary
                :label="$t('button.next')"
                icon="pi pi-arrow-right"
                @click="stepNavigation(activateCallback, 2, 'next')"
              />
            </div>
          </StepPanel>

          <StepPanel v-slot="{ activateCallback }" :value="2">
            <div class="flex flex-col mt-5 mb-7 col-span-2">
              <div class="flex justify-between items-center mb-4">
                <p
                  class="text-sm border-l-4 bg-accent-light pl-2 font-semibold"
                >
                  {{ $t('page.transfer.new.doc_submit') }}

                  <span
                    v-if="!form.engagement"
                    class="text-white font-semibold text-xxs rounded px-1"
                  >
                    {{ $t('page.required') }}
                  </span>
                </p>

                <p class="text-xs text-text-secondary">
                  {{ numUploadedFiles }}/{{ totalNumFiles }}
                  {{ $t('page.transfer.new.uploaded') }}
                </p>
              </div>

              <input-error-msg
                v-if="validErrorMsg.files.trim().length > 0"
                :label="validErrorMsg.files"
                class="mb-2"
              />

              <div class="space-y-3">
                <div
                  v-if="fileListByType.length > 0"
                  v-for="file in fileListByType"
                  :key="file?.uuid"
                  class="bg-bg-main border border-border-main px-2 py-1 rounded-md text-xs space-y-1"
                >
                  <div class="flex items-center space-x-2">
                    <p class="font-semibold">{{ file.name }}</p>

                    <span
                      v-if="
                        (file.isRequired && !form.engagement) ||
                        file.forExecution
                      "
                      class="text-white font-semibold text-xxs bg-accent-light rounded px-1"
                    >
                      {{ $t('page.required') }}
                    </span>
                  </div>

                  <input-file-upload
                    :type="file.code"
                    :category="file.category"
                    @update-file="e => setUploadedFile(file.code, e)"
                    @removefile="clearFile(file.code)"
                  />
                </div>

                <div
                  v-else
                  class="grid grid-cols-2 border border-dashed rounded-lg bg-bg-main border-primary-dark h-28"
                >
                  <div class="grid items-center justify-center">
                    <img
                      src="/images/greek_house_svg.svg"
                      class="object-contain object-center size-12"
                      alt="New manager Logo Svg"
                    />
                  </div>

                  <div
                    class="flex items-center justify-start p-4 text-sm text-right"
                  >
                    <p>{{ $t('page.transfer.new.no_file') }}</p>
                  </div>
                </div>
              </div>
            </div>

            <div
              class="grid grid-flow-row grid-cols-2 items-center pt-6 justify-between"
            >
              <div class="grid justify-start">
                <Button
                  label="Back"
                  severity="secondary"
                  icon="pi pi-arrow-left"
                  :pt="buttonPt"
                  @click="activateCallback(1)"
                />
              </div>

              <div class="grid justify-end">
                <button-primary
                  :label="$t('button.next')"
                  icon="pi pi-arrow-right"
                  iconPos="right"
                  :loading="isLoading"
                  @click="stepNavigation(activateCallback, 3, 'next')"
                />
              </div>
            </div>
          </StepPanel>

          <StepPanel v-slot="{ activateCallback }" :value="3">
            <div class="mt-2">
              <div
                class="flex flex-row items-center space-x-5 bg-accent-muted px-5 py-3 rounded-lg border-l-4 border-accent"
              >
                <i class="pi pi-check-circle text-accent" />

                <div class="text-sm">
                  <p class="text-accent font-semibold">
                    {{ $t('page.transfer.new.ready') }}
                  </p>

                  <p class="text-xs text-accent-dark">
                    {{ $t('page.transfer.new.review') }}
                  </p>
                </div>
              </div>

              <div class="grid xl:grid-cols-[1fr_auto] gap-5">
                <div class="space-y-5">
                  <div class="bg-bg-main p-5 rounded-lg mt-5">
                    <div class="pt-2 pb-5 border-b border-border-main">
                      <p class="flex items-center gap-2">
                        <i class="pi pi-send text-accent" />
                        <span class="font-semibold text-primary">
                          {{ $t('page.transfer.new.infos') }}
                        </span>
                      </p>
                    </div>

                    <ul class="text-xs grid grid-cols-2 gap-5 mt-5">
                      <li class="flex flex-col space-y-1">
                        <p>{{ $t('page.transfer.new.debit_account') }}</p>

                        <p class="flex flex-col">
                          <span class="text-sm font-bold">
                            {{ form.account?.iBan }}
                          </span>
                          <span>
                            {{ $t('page.transfer.new.account_num') }}
                            {{ form.account?.accType }} -
                            {{ $t('page.transfer.new.agency') }}
                            {{ form.account?.agency }}
                          </span>
                        </p>
                      </li>
                      <li class="flex flex-col space-y-1">
                        <span> {{ $t('page.transfer.new.beneficiary') }} </span>

                        <p class="flex flex-col">
                          <span class="text-sm font-bold">
                            {{ form.beneficiary?.fullName }}
                          </span>
                          <span>
                            {{ $t('page.transfer.new.iban') }} :
                            {{ form.beneficiary?.iban }}</span
                          >
                          <span>{{ form.beneficiary?.bankName }}</span>
                        </p>
                      </li>
                      <li class="flex flex-col space-y-1">
                        <p>{{ $t('page.transfer.new.amount') }}</p>

                        <p class="text-sm font-bold space-x-1">
                          <span>
                            {{
                              Intl.NumberFormat('en-US').format(
                                Number(form.amount),
                              )
                            }}
                          </span>

                          <span>{{ form.currency }}</span>
                        </p>
                      </li>
                      <li class="flex flex-col space-y-1">
                        <p>{{ $t('page.transfer.new.execution_date') }}</p>

                        <p class="text-sm font-bold">
                          {{ formatDate(form.targetDate) }}
                        </p>
                      </li>
                      <li class="flex flex-col space-y-1">
                        <p>{{ $t('page.transfer.new.bank_fee') }}</p>

                        <p class="text-sm font-bold">
                          {{ feeLabel(form.supportFee) }} -
                          {{ $t('page.transfer.new.shared_fee') }}
                        </p>
                      </li>
                      <li class="flex flex-col space-y-1">
                        <p>{{ $t('page.transfer.new.transfer_type') }}</p>

                        <p class="text-sm font-bold">
                          {{ form.type?.name }}
                        </p>
                      </li>
                      <li class="flex flex-col space-y-1">
                        <p>{{ $t('page.transfer.new.motive') }}</p>

                        <p class="text-sm font-bold">
                          {{ form.motive?.name }}
                        </p>
                      </li>
                      <li class="flex flex-col col-span-2 space-y-1">
                        <p>{{ $t('page.transfer.new.description') }}</p>

                        <p class="max-w-1/2">
                          {{ form.description }}
                        </p>
                      </li>
                    </ul>
                  </div>

                  <Accordion
                    v-model:value="showEngagementNotice"
                    class="col-span-2"
                  >
                    <AccordionPanel value="0">
                      <AccordionContent
                        pt:content:style="padding: 0 !important; "
                        pt:content:class="grid grid-cols-2 gap-2"
                      >
                        <p
                          class="text-xs text-text-secondary col-span-2 py-4 bg-accent-muted px-3 border border-accent-light rounded-lg"
                        >
                          <i
                            class="pi pi-check text-accent"
                            style="font-size: 0.8rem"
                          />
                          <span class="text-accent font-bold ml-1">
                            {{ $t('page.transfer.engagement.title') }}
                          </span>
                          {{ $t('page.transfer.engagement.message_01') }}
                          <span
                            @click="openPdf(engagementLetter.link)"
                            class="text-accent underline font-normal hover:font-semibold transition-all ease-linear duration-100 cursor-pointer lowercase"
                          >
                            {{ engagementLetter.name }}
                          </span>
                          {{ $t('page.transfer.engagement.message_02') }}
                        </p>
                      </AccordionContent>
                    </AccordionPanel>
                  </Accordion>
                </div>

                <div class="xl:w-64 space-y-5">
                  <div class="mt-5 bg-bg-main p-5 rounded-lg space-y-5">
                    <p class="pb-2 border-b border-border-main">
                      {{ $t('button.action') }}
                    </p>

                    <div class="flex flex-col space-y-3">
                      <button-secondary
                        v-if="showEngagementNotice === '1' && form.engagement"
                        type="button"
                        :label="$t('button.engagement_letter')"
                        icon="pi pi-cloud-download"
                        iconPos="left"
                        :loading="isEngagementLetterLoading"
                        @click.prevent="fetchLetter"
                      />

                      <button-primary
                        type="button"
                        :label="$t('button.save')"
                        icon="pi pi-save"
                        iconPos="left"
                        @click.prevent="handleCreateTransfer"
                      />
                    </div>
                  </div>

                  <div
                    class="flex items-center gap-2 text-xxs bg-bg-main p-3 rounded-lg"
                  >
                    <i
                      class="pi pi-info-circle text-accent-dark"
                      style="font-size: 0.8rem"
                    />

                    <p class="text-accent-dark">
                      {{ $t('page.transfer.new.submit_confirm') }}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div
              class="pt-6 grid justify-between grid-flow-col gap-3 mt-5 border-t border-border-main"
            >
              <Button
                :label="$t('button.back')"
                severity="secondary"
                icon="pi pi-arrow-left"
                :pt="buttonPt"
                @click="stepNavigation(activateCallback, 4, 'back')"
              />

              <div />
            </div>
          </StepPanel>
        </StepPanels>
      </Stepper>
    </form>
  </div>
</template>

<style>
.p-inputgroupaddon {
  background: var(--color-bg-secondary) !important;
  border: 1px solid var(--color-border-main) !important;
}

.p-step-active .p-step-number {
  color: var(--color-accent) !important;
  font-size: 1rem !important;
}

.p-accordionpanel {
  border-width: 0 !important;
}

.filepond--drop-label {
  font-size: 0.8rem !important;
}
</style>
