<script setup lang="ts">
definePageMeta({
  layout: 'connected',
  middleware: ['authenticated'],
})

type ResponseError = {
  name: string
  message: string
}

const config = useRuntimeConfig()
const { t, locale } = useI18n()
const authStore = useAuthStore()
const route = useRoute()

useHead({
  title: `${t('meta.title.domiciliation.new')} - ${config.public.app.name}`,
  meta: [{ name: 'description', content: 'My design project application.' }],
})

const { $apiFetch } = useNuxtApp() as any
const { e, s } = useNotify()
const beneficiaryList = ref<any[]>([])
const rateList = ref<any[]>([])
const currencyList = ref<any[]>([])
const { getCurrencyList, getRatesList } = useCurrency()
const { currencyLoading } = storeToRefs(useLoadingStore())
const { selectInputPt } = useCustomStyle()
const isLoading = ref(false)
const isBeneficiaryLoading = ref(false)
const isDomAttachmentLoading = ref(false)
const domiciliationFileList = ref<TransferTypeFile[]>([])
const chosenRate = ref<Record<string, string>>({})
const convertedAmount = ref(0)
const showBeneficiaryInfo = ref('1')
const showConfirmationModal = ref(false)
const requiredFiles = ref<string[]>([])
const form = ref({
  beneficiary: {} as any,
  code: '',
  reference: '',
  dateline: null,
  commerceLabel: '',
  quantity: '',
  matricule: '',
  job: '',
  customNum: '',
  checkIn: '',
  fob: '',
  caf: '',
  currency: '',
  amount: '',
  convertedAmount: '',
  service: '',
  chapter: '',
  dImp: '',
  files: {} as Record<string, string>,
})
const validationErrors = ref<Record<string, boolean>>({
  beneficiary: false,
  category: false,
  foreignAmount: false,
  currency: false,
  reference: false,
  customNum: false,
  commerceDesc: false,
  dImp: false,
})

const showBeneficiaryLoader = () => (isBeneficiaryLoading.value = true)

const hideBeneficiaryLoader = () => (isBeneficiaryLoading.value = false)

const showDomAttachmentLoader = () => (isDomAttachmentLoading.value = true)

const hideDomAttachmentLoader = () => (isDomAttachmentLoading.value = false)

const openConfirmationModal = () => (showConfirmationModal.value = true)

const closeConfirmationModal = () => (showConfirmationModal.value = false)

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

const resetValidationErrors = () => {
  validationErrors.value = {
    beneficiary: false,
    category: false,
    foreignAmount: false,
    currency: false,
    reference: false,
    customNum: false,
    commerceDesc: false,
  }
}

const setBeneficiary = (beneficiary: any) => {
  form.value.beneficiary = beneficiary
  showBeneficiaryInfo.value = '0'
}

const setFormCode = (code: string) => {
  form.value.code = code
  getDomAttachments()
}

const setUploadedFile = (code: string, fileId: string) => {
  form.value.files[code] = fileId
}

const clearFile = (code: string) => {
  form.value.files[code] = ''
}

const convertCurrency = (amount: number) => {
  convertedAmount.value = chosenRate.value?.value
    ? formatNumber(amount, chosenRate.value.value)
    : 0
  form.value.convertedAmount = String(convertedAmount.value)
}

const setChosenCurrentRate = () => {
  const rate: any = rateList.value.find(
    (item: any) =>
      item.initCode === form.value.currency && item.finalCode === 'XAF',
  )

  chosenRate.value = rate ? rate : {}
  convertCurrency(Number(form.value.amount))
}

const getBeneficiaryList = async () => {
  showBeneficiaryLoader()
  try {
    const { apiResponse, validError } = await $apiFetch(
      config.public.api.beneficiary.list,
      {
        method: 'POST',
        body: {
          lang: locale.value,
        },
      },
    )

    if (validError) {
      validError.forEach((err: any) => e(err?.message))
    }

    beneficiaryList.value = apiResponse
  } catch (error: any) {
    const errorMsg = handleApiError(error)
    if (errorMsg.length > 0) {
      e(errorMsg)
    }
  } finally {
    hideBeneficiaryLoader()
  }
}

const getDomAttachments = async () => {
  let req: string[] = []
  showDomAttachmentLoader()
  try {
    const { apiResponse, validError } = await $apiFetch(
      config.public.api.domiciliation.attachments,
      {
        method: 'POST',
        body: {
          code: form.value.code,
          lang: locale.value,
        },
      },
    )

    if (validError) {
      validError.forEach((err: any) => e(err?.message))
    }

    domiciliationFileList.value = apiResponse

    if (apiResponse && apiResponse?.length > 0) {
      apiResponse.forEach((item: any) => {
        if (item.isRequired) {
          req.push(item.code)
        }
      })
    }

    requiredFiles.value = req
  } catch (error: any) {
    const errorMsg = handleApiError(error)
    if (errorMsg.length > 0) {
      e(errorMsg)
    }
  } finally {
    hideDomAttachmentLoader()
  }
}

const submit = async () => {
  const proceed = requiredFiles.value.every((key: string) =>
    Object.keys(form.value.files).includes(key),
  )

  if (!proceed) {
    e('Please upload all required files')
  } else {
    isLoading.value = true
    try {
      const { apiResponse, validError } = await $apiFetch(
        config.public.api.domiciliation.create,
        {
          method: 'POST',
          body: {
            beneficiary: form.value.beneficiary?.code,
            category: form.value.code,
            baseAmount: Number(form.value.convertedAmount),
            foreignAmount: Number(form.value.amount),
            quantity: Number(form.value.quantity),
            matricule: form.value.matricule,
            job: form.value.job,
            currency: form.value.currency,
            checkIn: form.value.checkIn,
            reference: form.value.reference,
            fob: Number(form.value.fob),
            caf: Number(form.value.caf),
            customNum: form.value.customNum,
            dImp: form.value.dImp,
            commerceDesc: form.value.commerceLabel,
            paymentDate: form.value.dateline,
            files: form.value.files,
            lang: locale.value,
          },
        },
      )

      if (validError) {
        e('Please provide all required fields')
        validError.forEach((err: ResponseError) => {
          validationErrors.value[err.name] = true
        })
        closeConfirmationModal()
      } else {
        resetValidationErrors()
        s(t('domiciliation_created'))
        closeConfirmationModal()
        Object.keys(route.query).includes('callbackUrl')
          ? navigateTo({
              path: route.query.callbackUrl as string,
              query: {
                domFlag: btoa(JSON.stringify(apiResponse)),
                update: '1',
                currency: form.value.currency,
              },
            })
          : navigateTo('/domiciliation/list')
      }
    } catch (error: any) {
      const errorMsg = handleApiError(error)
      if (errorMsg.length > 0) {
        e(errorMsg)
      }
    } finally {
      isLoading.value = false
    }
  }
}

onMounted(() => {
  getBeneficiaryList()
  rates()
  currency()
})
</script>
<template>
  <div class="text-text-primary space-y-5">
    <navbar-auth-nav :title="$t('menu.domiciliation.new')" />

    <gadget-banner>
      <div class="grid grid-cols-[auto_1fr] h-full">
        <div class="grid justify-center ml-2 text-sm text-white lg:text-base">
          <div class="ml-5 translate-y-8">
            <h3 class="font-semibold">
              {{ $t('page.domiciliation.new.title1') }}
            </h3>

            <h4 class="text-xs">{{ $t('page.domiciliation.new.title2') }}</h4>
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

    <div class="space-y-5">
      <h2 class="text-sm font-bold text-primary flex items-center gap-2">
        <span
          class="flex items-center justify-center size-5 rounded-full bg-primary text-white text-xs"
          >1</span
        >
        {{ $t('page.domiciliation.new.infos') }}
      </h2>

      <div
        class="rounded-xl transition-all duration-200 bg-white border border-border-main p-6 text-sm"
      >
        <div class="mb-6">
          <label class="block text-xs font-medium text-text-secondary mb-2">
            {{ $t('page.domiciliation.new.nature_imp') }}

            <badge-required :label="$t('page.beneficiary.required')" />
          </label>

          <div
            :class="[
              'flex gap-4',
              {
                'ring-4 ring-accent-muted ring-offset-2 rounded-md':
                  validationErrors.category,
              },
            ]"
          >
            <button
              type="button"
              :class="[
                'relative flex-1 py-2 px-4 rounded-lg border-2 flex items-center justify-center gap-2 transition-all cursor-pointer',
                {
                  ' border-accent bg-bg-main text-accent font-bold':
                    form.code === 'A01IMPBIEN',
                  ' border-border-main hover:border-accent-light text-text-secondary hover:text-accent-light':
                    form.code !== 'A01IMPBIEN',
                },
              ]"
              @click.prevent="setFormCode('A01IMPBIEN')"
            >
              <svg-building />

              {{ $t('page.domiciliation.new.import_bien') }}
            </button>

            <button
              type="button"
              :class="[
                'flex-1 py-2 px-4 rounded-lg border-2 flex items-center justify-center gap-2 transition-all cursor-pointer',
                {
                  ' border-accent bg-bg-main text-accent font-bold':
                    form.code === 'A01IMPSERV',
                  ' border-border-main hover:border-accent-light text-text-secondary hover:text-accent-light':
                    form.code !== 'A01IMPSERV',
                },
              ]"
              @click.prevent="setFormCode('A01IMPSERV')"
            >
              <svg-document />

              {{ $t('page.domiciliation.new.import_service') }}
            </button>
          </div>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div
            class="space-y-4 p-4 bg-bg-secondary rounded-lg border border-border-main"
          >
            <p
              class="font-semibold text-text-primary border-b border-border-main pb-2"
            >
              {{ $t('page.domiciliation.new.infos_importateur') }}

              <badge-required :label="$t('page.beneficiary.required')" />
            </p>
            <div class="space-y-3 text-sm">
              <div>
                <span class="text-text-secondary block text-xs">
                  {{ $t('page.domiciliation.new.raison_sociale') }}
                </span>
                <span class="font-medium">
                  {{ authStore.state?.firstName }}
                  {{ authStore.state?.lastName }}
                </span>
              </div>
              <div>
                <span class="text-text-secondary block text-xs">
                  {{ $t('page.domiciliation.new.reg_commerce') }}
                </span>
                <span class="font-medium">
                  {{ authStore.state?.regCommerce }}
                </span>
              </div>
              <div>
                <span class="text-text-secondary block text-xs">
                  {{ $t('page.domiciliation.new.addresse') }}
                </span>
                <span class="font-medium">{{ authStore.state?.address }}</span>
              </div>
              <div>
                <span class="text-text-secondary block text-xs">
                  {{ $t('page.domiciliation.new.profession') }}
                </span>
                <input-bg-normal
                  v-model="form.job"
                  identifier="job"
                  class="uppercase"
                />
              </div>
              <div>
                <span class="text-text-secondary block text-xs">
                  {{ $t('page.domiciliation.new.imma_stat') }}
                </span>
                <input-bg-normal
                  v-model="form.matricule"
                  identifier="matricule"
                  class="uppercase"
                />
              </div>
            </div>
          </div>

          <div class="space-y-4 p-4">
            <h3
              class="font-semibold text-text-primary border-b border-border-main pb-2"
            >
              {{ $t('page.domiciliation.new.infos_fournisseur') }}
            </h3>

            <div class="w-full space-y-1.5">
              <label class="block text-sm font-medium text-text-secondary">
                {{ $t('page.domiciliation.new.select_beneficiary') }}

                <badge-required :label="$t('page.beneficiary.required')" />
              </label>

              <div
                :class="[
                  'relative rounded-md',
                  {
                    'ring-4 ring-accent-muted ring-offset-2':
                      validationErrors.beneficiary,
                  },
                ]"
              >
                <Select
                  v-model="form.beneficiary"
                  :options="beneficiaryList"
                  :loading="isBeneficiaryLoading"
                  :placeholder="$t('placeholder.select_beneficiary')"
                  :pt="selectInputPt"
                  @update:modelValue="(e: any) => setBeneficiary(e)"
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
              </div>
            </div>

            <Accordion v-model:value="showBeneficiaryInfo">
              <AccordionPanel value="0">
                <AccordionContent pt:content:style="padding: 0 !important; ">
                  <ul class="text-xs bg-accent-muted p-4 rounded-lg space-y-2">
                    <li>
                      <p class="text-accent-light">
                        {{ $t('page.domiciliation.new.full_name') }}
                      </p>
                      <p class="text-sm font-medium">
                        {{ form.beneficiary?.fullName }}
                      </p>
                    </li>

                    <li>
                      <p class="text-accent-light">
                        {{ $t('page.domiciliation.new.country_origin') }}
                      </p>
                      <p class="text-sm font-medium">
                        {{ form.beneficiary?.country }}
                      </p>
                    </li>
                    <li>
                      <p class="text-accent-light">
                        {{ $t('page.domiciliation.new.addresse') }}
                      </p>
                      <p class="text-sm font-medium">
                        {{ form.beneficiary?.address ?? '' }}
                      </p>
                    </li>
                  </ul>
                </AccordionContent>
              </AccordionPanel>
            </Accordion>
          </div>
        </div>
      </div>
    </div>

    <div class="space-y-5">
      <h2 class="text-sm font-bold text-text-primary flex items-center gap-2">
        <span
          class="flex items-center justify-center size-5 rounded-full bg-primary text-white text-xs"
        >
          2 </span
        >{{ $t('page.domiciliation.new.trans_details') }}
      </h2>

      <form
        class="grid grid-cols-2 gap-4 p-4 bg-bg-main rounded-lg border border-border-main"
      >
        <div>
          <label for="reference" class="text-xs text-text-secondary">
            {{ $t('page.domiciliation.new.reference') }}

            <badge-required :label="$t('page.beneficiary.required')" />
          </label>

          <div
            :class="[
              '',
              {
                'ring-4 ring-accent-muted ring-offset-2 rounded-md':
                  validationErrors.reference,
              },
            ]"
          >
            <input-bg-normal
              v-model="form.reference"
              identifier="reference"
              class="uppercase"
            />
          </div>
        </div>

        <div>
          <label for="dateline" class="text-xs text-text-secondary">
            {{ $t('page.domiciliation.new.payment_due_date') }}
          </label>

          <input-date-picker
            v-model="form.dateline"
            showIcon
            fluid
            icon-display="input"
            :min-date="new Date()"
          />
        </div>

        <div class="col-span-2">
          <label for="commerceLabel" class="text-xs text-text-secondary">
            {{ $t('page.domiciliation.new.commercial_label') }}

            <badge-required :label="$t('page.beneficiary.required')" />
          </label>

          <div
            :class="[
              '',
              {
                'ring-4 ring-accent-muted ring-offset-2 rounded-md':
                  validationErrors.commerceDesc,
              },
            ]"
          >
            <input-bg-normal
              v-model="form.commerceLabel"
              identifier="commerceLabel"
              class="uppercase"
            />
          </div>
        </div>

        <div v-if="form.code === 'A01IMPSERV'">
          <label for="chapter" class="text-xs text-text-secondary">
            {{ $t('page.domiciliation.new.chapter') }}
          </label>

          <input-bg-normal
            v-model="form.chapter"
            identifier="chapter"
            class="uppercase"
          />
        </div>

        <div v-if="form.code === 'A01IMPBIEN'">
          <label for="quantity" class="text-xs text-text-secondary">
            {{ $t('page.domiciliation.new.qty') }}
          </label>

          <input-custom-number
            v-model="form.quantity"
            identifier="quantity"
            :max-fraction-digits="3"
            placeholder="0.000"
            autocomplete="off"
          />
        </div>

        <div>
          <label for="customNum" class="text-xs text-text-secondary">
            {{ $t('page.domiciliation.new.custom_label') }}

            <badge-required :label="$t('page.beneficiary.required')" />
          </label>

          <div
            :class="[
              '',
              {
                'ring-4 ring-accent-muted ring-offset-2 rounded-md':
                  validationErrors.customNum,
              },
            ]"
          >
            <input-bg-normal
              v-model="form.customNum"
              identifier="customNum"
              class="uppercase"
            />
          </div>
        </div>

        <div>
          <label for="dImp" class="text-xs text-text-secondary">
            {{ $t('page.domiciliation.new.declare_import') }}

            <badge-required :label="$t('page.beneficiary.required')" />
          </label>

          <div
            :class="[
              '',
              {
                'ring-4 ring-accent-muted ring-offset-2 rounded-md':
                  validationErrors.dImp,
              },
            ]"
          >
            <input-bg-normal
              v-model="form.dImp"
              identifier="dImp"
              class="uppercase"
            />
          </div>
        </div>

        <div v-if="form.code === 'A01IMPSERV'" class="col-span-2">
          <label for="service" class="text-xs text-text-secondary">
            {{ $t('page.domiciliation.new.service_desc') }}
          </label>

          <Textarea
            v-model="form.service"
            rows="5"
            cols="10"
            class="block w-full"
            pt:root:style="font-size: 0.8rem;"
            placeholder="Detailed description of the service"
            style="border-color: var(--color-border-main) !important"
          />
        </div>

        <div v-if="form.code === 'A01IMPBIEN'">
          <label for="checkIn" class="text-xs text-text-secondary">
            {{ $t('page.domiciliation.new.onboarding_port') }}
          </label>

          <input-bg-normal
            v-model="form.checkIn"
            identifier="checkIn"
            class="uppercase"
          />
        </div>

        <div v-if="form.code === 'A01IMPBIEN'" class="grid grid-cols-2 gap-2">
          <div>
            <label for="fob" class="text-xs text-text-secondary">
              {{ $t('page.domiciliation.new.fob_value') }}
            </label>

            <input-custom-number
              v-model="form.fob"
              identifier="fob"
              :max-fraction-digits="3"
              placeholder="0.000"
              autocomplete="off"
            />
          </div>

          <div>
            <label for="caf" class="text-xs text-text-secondary">
              {{ $t('page.domiciliation.new.caf_value') }}
            </label>

            <input-custom-number
              v-model="form.caf"
              identifier="caf"
              :max-fraction-digits="3"
              placeholder="0.000"
              autocomplete="off"
            />
          </div>
        </div>

        <div class="border-t border-gray-300 pt-4 col-span-2">
          <p class="text-sm font-bold text-text-primary">
            {{ $t('page.domiciliation.new.amount') }}
          </p>

          <div class="grid grid-cols-3 gap-4">
            <div>
              <label for="currency" class="text-xs text-text-secondary">
                {{ $t('page.domiciliation.new.currency') }}

                <badge-required :label="$t('page.beneficiary.required')" />
              </label>

              <div
                :class="[
                  '',
                  {
                    'ring-4 ring-accent-muted ring-offset-2 rounded-md':
                      validationErrors.currency,
                  },
                ]"
              >
                <input-select
                  v-model="form.currency"
                  :options="currencyList"
                  :loading="currencyLoading"
                  filter
                  placeholder="Choose an currency"
                  @update:modelValue="setChosenCurrentRate"
                />
              </div>
            </div>

            <div>
              <label for="quantity" class="text-xs text-text-secondary">
                {{ $t('page.domiciliation.new.foreign_amount') }}

                <badge-required :label="$t('page.beneficiary.required')" />
              </label>

              <input-custom-number
                v-model="form.amount"
                identifier="quantity"
                :max-fraction-digits="3"
                placeholder="0.000"
                autocomplete="off"
                @input="(e: any) => convertCurrency(e.value)"
                :class="[
                  '',
                  {
                    'ring-4 ring-accent-muted ring-offset-2 rounded-md':
                      validationErrors.foreignAmount,
                  },
                ]"
              />
            </div>

            <div>
              <label for="convertedAmount" class="text-xs text-text-secondary">
                {{ $t('page.domiciliation.new.converted_amount') }}
              </label>

              <input-custom-number
                v-model="form.convertedAmount"
                identifier="convertedAmount"
                :max-fraction-digits="3"
                placeholder="0.000"
                disabled
              />
            </div>
          </div>
        </div>
      </form>
    </div>

    <div class="space-y-3">
      <h2 class="text-sm font-bold text-text-primary flex items-center gap-2">
        <span
          class="flex items-center justify-center size-5 rounded-full bg-primary text-white text-xs"
        >
          3 </span
        >{{ $t('page.domiciliation.new.documents') }}
      </h2>

      <div
        v-if="domiciliationFileList.length > 0"
        v-for="file in domiciliationFileList"
        :key="file?.uuid"
        class="bg-bg-main border border-border-main px-2 py-1 rounded-md text-xs space-y-1"
      >
        <div class="flex items-center space-x-2">
          <p class="font-semibold">{{ file.name }}</p>

          <badge-required :label="$t('page.beneficiary.required')" />
        </div>

        <input-file-upload
          :type="file.code"
          :category="file.category"
          @update-file="e => setUploadedFile(file.code, e)"
          @removefile="clearFile(file.code)"
        />
      </div>

      <div v-else>
        <div v-if="isDomAttachmentLoading" class="space-y-2">
          <skeleton v-for="i in 4" :key="i" width="100%" height="4.5rem" />
        </div>

        <div
          v-else
          class="relative grid grid-cols-2 border border-dashed rounded-lg bg-bg-secondary border-primary-dark h-28"
        >
          <div class="grid items-center justify-center">
            <img
              src="/images/greek_house_svg.svg"
              class="object-contain object-center size-12"
              alt="New manager Logo Svg"
            />
          </div>

          <div class="flex items-center justify-start p-4 text-sm text-right">
            <p>{{ $t('page.domiciliation.new.no_file') }}</p>
          </div>

          <svg-loader
            v-if="isDomAttachmentLoading"
            class="absolute right-2 top-1"
          />
        </div>
      </div>
    </div>

    <div class="pb-5 grid justify-end">
      <button-primary
        type="button"
        :label="$t('button.create_dom')"
        @click.prevent="openConfirmationModal"
      />
    </div>

    <Dialog
      v-model:visible="showConfirmationModal"
      modal
      :style="{ width: '22rem' }"
    >
      <template #container="{ closeCallback }">
        <div class="p-2 rounded-xl space-y-5 border-2 border-border-main">
          <p class="text-center font-bold text-xl">
            {{ $t('page.domiciliation.new.confirmation') }}
          </p>

          <p class="text-sm text-center">
            {{ $t('page.domiciliation.new.confirmation_message') }}
          </p>

          <div
            class="grid justify-end grid-flow-col gap-3 border-t border-border-main pt-2"
          >
            <button-outline
              :label="$t('button.cancel')"
              @click.prevent="closeCallback"
            />

            <button-primary
              type="button"
              :label="$t('button.submit')"
              :loading="isLoading"
              @click.prevent="submit"
            />
          </div>
        </div>
      </template>
    </Dialog>
  </div>
</template>

<style>
.p-accordionpanel {
  border-width: 0 !important;
}
.filepond--drop-label {
  font-size: 0.8rem !important;
}
</style>
