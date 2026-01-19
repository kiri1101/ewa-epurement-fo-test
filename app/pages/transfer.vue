<script setup lang="ts">
definePageMeta({
  layout: 'connected',
  middleware: ['authenticated'],
})

const config = useRuntimeConfig()
const { t, locale } = useI18n()
const showLoader = ref(true)
const assetStore = useAssetStore()

useHead({
  title: `${t('meta.title.transfer')} - ${config.public.app.name}`,
  meta: [{ name: 'description', content: 'My design project application.' }],
})

onMounted(() => {
  showLoader.value = assetStore.hasAssets ? false : true
  getBeneficiaryList()
  getTransferTypes()
  getTransferSetting()
})

const { $apiFetch } = useNuxtApp() as any
const isLoading = ref(false)
const isTypeLoading = ref(false)
const isSettingLoading = ref(false)
const isBeneficiaryLoading = ref(false)
const { e, s } = useNotify()
const transferTypeList = ref([])
const accountList = ref([])
const currencyList = ref([])
const beneficiaryList = ref([])
const fileListByType = ref<TransferTypeFile[]>([])
const taskOps = ref<Record<string, any>>({})
const showFileTrashIcon = ref<Record<string, boolean>>({})
const numUploadedFiles = ref(0)
const totalNumFiles = ref(0)

const form = ref({
  type: '',
  account: '',
  amount: '',
  currency: '',
  targetDate: null,
  description: '',
  supportFee: '',
  beneficiaryCode: '',
  lang: locale.value,
  files: {} as Record<string, string>,
  engagement: false,
})
const validErrorMsg = ref({
  type: '',
  account: '',
  amount: '',
  currency: '',
  targetDate: '',
  description: '',
  supportFee: '',
  beneficiaryCode: '',
  files: '',
})

const showingLoader = () => (isLoading.value = true)

const hidingLoader = () => (isLoading.value = false)

const showTypeLoader = () => (isTypeLoading.value = true)

const hideTypeLoader = () => (isTypeLoading.value = false)

const showSettingLoader = () => (isSettingLoading.value = true)

const hideSettingLoader = () => (isSettingLoading.value = false)

const showBeneficiaryLoader = () => (isBeneficiaryLoading.value = true)

const hideBeneficiaryLoader = () => (isBeneficiaryLoading.value = false)

const setFileListByType = (code: string) => {
  const type: any = transferTypeList.value.find(
    (item: any) => item.code === code
  )
  fileListByType.value = type ? type.attachments : []
  totalNumFiles.value = type ? type.attachments.length : 0
}

const setTaskOpRef = (el: any, uuid: string) => {
  if (el) taskOps.value[uuid] = el
}

const toggleTaskOp = (uuid: string, event: any) =>
  taskOps.value[uuid]?.toggle(event)

const canTrashFile = (uuid: string) => {
  const status = form.value.files[uuid] ? true : false
  showFileTrashIcon.value[uuid] = status
}

const clearFile = (uuid: string) => {
  form.value.files[uuid] = ''
  showFileTrashIcon.value[uuid] = false
}

const setUploadedFile = (uuid: string, fileId: string) => {
  form.value.files[uuid] = fileId
  canTrashFile(uuid)
  setTimeout(() => {
    taskOps.value[uuid].hide()
  }, 1000)
}

const resetValidErrorMsg = () => {
  validErrorMsg.value = {
    type: '',
    account: '',
    amount: '',
    currency: '',
    targetDate: '',
    description: '',
    supportFee: '',
    beneficiaryCode: '',
    files: '',
  }
}

const resetForm = () => {
  form.value = {
    type: '',
    account: '',
    amount: '',
    currency: '',
    targetDate: null,
    description: '',
    supportFee: '',
    beneficiaryCode: '',
    lang: locale.value,
    files: {} as Record<string, string>,
    engagement: false,
  }
}

const getTransferTypes = async () => {
  showTypeLoader()
  try {
    const { apiResponse, validError } = await $apiFetch(
      config.public.api.transfer.types,
      {
        method: 'POST',
        body: {
          lang: locale.value,
        },
      }
    )

    if (validError) {
      validError.forEach((err: any) => e(err?.message))
    }

    transferTypeList.value = apiResponse
  } catch (error: any) {
    const errorMsg = handleApiError(error)
    if (errorMsg.length > 0) {
      e(errorMsg)
    }
  } finally {
    hideTypeLoader()
  }
}

const getTransferSetting = async () => {
  showSettingLoader()
  try {
    const apiResponse = await $apiFetch(config.public.api.transfer.setting, {
      method: 'POST',
    })

    currencyList.value = apiResponse.currency
    // beneficiaryList.value = apiResponse.beneficiary
    accountList.value = apiResponse.account
  } catch (error: any) {
  } finally {
    hideSettingLoader()
  }
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
      }
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

const submit = async () => {
  resetValidErrorMsg()
  form.value.lang = locale.value

  showingLoader()
  try {
    const { apiResponse, validError } = await $apiFetch(
      config.public.api.transfer.create,
      {
        method: 'POST',
        body: form.value,
      }
    )

    console.log(apiResponse, validError)

    if (validError) {
      validError.forEach((err: any) => {
        validErrorMsg.value[err.name as keyof typeof validErrorMsg.value] =
          err.message
      })
    } else {
      s(apiResponse.data[0].message)
      resetValidErrorMsg()
      resetForm()
      return navigateTo('/dashboard')
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
</script>

<template>
  <div class="pb-5 text-page-title-text space-y-5">
    <navbar-auth-nav :title="$t('menu.transfer')" />

    <gadget-banner>
      <div class="grid grid-cols-[auto_1fr] h-full">
        <div
          class="grid justify-center ml-2 text-sm text-sidebar-text-primary lg:text-base"
        >
          <div class="ml-5 translate-y-8">
            <h3 class="font-semibold">Transfers management</h3>

            <h4 class="text-xs">Create a new request for funds transfer.</h4>
          </div>
        </div>

        <div class="flex justify-end">
          <gadget-image-blur>
            <img
              :src="assetStore.list.profile"
              class="z-30 object-cover object-center w-auto h-22"
              alt="Bank Logo"
            />
          </gadget-image-blur>
        </div>
      </div>
    </gadget-banner>

    <form @submit.prevent="submit">
      <div class="grid grid-cols-2 gap-2 space-y-0.5">
        <div>
          <label for="type" class="text-xs text-input-profile-label">
            Transfer Type
          </label>

          <input-select
            v-model="form.type"
            :options="transferTypeList"
            :loading="isTypeLoading"
            value-key="code"
            placeholder="Choose a transfer type"
            @update:modelValue="(e: string) => setFileListByType(e)"
          />

          <input-error-msg
            v-if="validErrorMsg.type.trim().length > 0"
            :label="validErrorMsg.type"
          />
        </div>

        <div>
          <label for="account" class="text-xs text-input-profile-label">
            Account
          </label>

          <input-select
            v-model="form.account"
            :options="accountList"
            :loading="isSettingLoading"
            placeholder="Choose an account"
            @update:modelValue="(e: string) => form.account = e"
          />

          <input-error-msg
            v-if="validErrorMsg.account.trim().length > 0"
            :label="validErrorMsg.account"
          />
        </div>

        <div>
          <label for="amount" class="text-xs text-input-profile-label">
            Amount
          </label>

          <input-custom-number
            v-model="form.amount"
            identifier="amount"
            placeholder="0.00"
          />

          <input-error-msg
            v-if="validErrorMsg.amount.trim().length > 0"
            :label="validErrorMsg.amount"
          />
        </div>

        <div>
          <label for="currency" class="text-xs text-input-profile-label">
            Currency
          </label>

          <input-select
            v-model="form.currency"
            :options="currencyList"
            :loading="isSettingLoading"
            :name-key="`name.${locale}`"
            placeholder="Choose an currency"
            @update:modelValue="(e: string) => form.currency = e"
          />

          <input-error-msg
            v-if="validErrorMsg.currency.trim().length > 0"
            :label="validErrorMsg.currency"
          />
        </div>

        <div>
          <label for="targetDate" class="text-xs text-input-profile-label">
            Target Date
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
          <label for="beneficiary" class="text-xs text-input-profile-label">
            Beneficiary
          </label>

          <input-select
            v-model="form.beneficiaryCode"
            :options="beneficiaryList"
            :loading="isBeneficiaryLoading"
            name-key="fullName"
            value-key="code"
            placeholder="Choose a beneficiary"
            @update:modelValue="(e: string) => form.beneficiaryCode = e"
          />

          <input-error-msg
            v-if="validErrorMsg.beneficiaryCode.trim().length > 0"
            :label="validErrorMsg.beneficiaryCode"
          />
        </div>

        <div class="col-span-2">
          <label for="description" class="text-xs text-input-profile-label">
            Description
          </label>

          <Textarea
            v-model="form.description"
            rows="5"
            cols="10"
            class="block w-full"
            placeholder="State the reason for the transfer"
            style="border-color: var(--color-border-dark-brown) !important"
          />

          <input-error-msg
            v-if="validErrorMsg.description.trim().length > 0"
            :label="validErrorMsg.description"
          />
        </div>

        <div class="col-span-2">
          <label for="handleCost" class="text-xs text-input-profile-label">
            Covers the cost
          </label>

          <ul class="grid grid-cols-3 gap-2">
            <li
              class="flex items-center text-sm gap-2 py-2.5 px-4 rounded-lg cursor-pointer border border-border-dark-brown hover:bg-gray-100 transition-colors ease-linear duration-200"
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
                <label for="beneficiary"> Beneficiary </label>

                <p class="text-xs text-input-profile-label">
                  The beneficiary handles all transfer cost
                </p>
              </div>
            </li>

            <li
              class="flex items-center text-sm gap-2 py-2.5 px-4 rounded-lg cursor-pointer border border-border-dark-brown hover:bg-gray-100 transition-colors ease-linear duration-200"
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
                <label for="client"> Client </label>

                <p class="text-xs text-input-profile-label">
                  The client handles all transfer cost
                </p>
              </div>
            </li>

            <li
              class="flex items-center text-sm gap-2 py-2.5 px-4 rounded-lg cursor-pointer border border-border-dark-brown hover:bg-gray-100 transition-colors ease-linear duration-200"
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
                <label for="both"> Both </label>

                <p class="text-xs text-input-profile-label">
                  Both parties share transfer cost
                </p>
              </div>
            </li>
          </ul>

          <input-error-msg
            v-if="validErrorMsg.supportFee.trim().length > 0"
            :label="validErrorMsg.supportFee"
          />
        </div>

        <div class="mt-5 col-span-2">
          <div class="flex justify-between items-center mb-4">
            <p class="text-sm border-l-4 border-orange-500 pl-2 font-semibold">
              Documents to submit
            </p>

            <p class="text-xs text-input-profile-label">
              {{ numUploadedFiles }}/{{ totalNumFiles }} uploaded
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
            >
              <div
                class="grid grid-cols-[1fr_auto] items-center justify-between p-2.5 bg-account-manager-block border border-border-light-brown rounded mb-2"
              >
                <div class="flex items-center space-x-2">
                  <div>
                    <i class="pi pi-file" style="font-size: 1.2rem" />
                  </div>

                  <div class="flex items-center space-x-2">
                    <p class="text-sm font-bold">{{ file.name }}</p>

                    <span
                      v-if="file.isRequired"
                      class="bg-red-300 text-red-500 font-semibold rounded text-[0.6rem] px-2 py-0.5"
                    >
                      REQUIRED
                    </span>
                  </div>
                </div>

                <div class="space-x-2 pl-5">
                  <button-icon
                    v-if="showFileTrashIcon[file.uuid]"
                    icon="pi pi-trash"
                    background="bg-red-600 text-gray-100"
                    @click.prevent="clearFile(file.uuid)"
                  />

                  <button-icon
                    v-else
                    icon="pi pi-upload"
                    @click.prevent="(e:any) => toggleTaskOp(file.uuid, e)"
                  />
                </div>

                <Popover
                  :ref="el => setTaskOpRef(el, file.uuid)"
                  pt:content="p-2 w-[26rem] min-h-24 bg-white my-2 rounded-md"
                >
                  <input-file-upload
                    :identifier="file.uuid"
                    :type="file.code"
                    :category="file.category"
                    @update-file="e => setUploadedFile(file.uuid, e)"
                  />
                </Popover>
              </div>
            </div>

            <div
              v-else
              class="grid grid-cols-2 border border-dashed rounded-lg bg-profile-manager border-border-dark-blue h-28"
            >
              <div class="grid items-center justify-center">
                <skeleton v-if="showLoader" width="100%" height="3rem" />

                <img
                  v-else
                  :src="assetStore.list.greek_house_svg"
                  class="object-contain object-center size-12"
                  alt="New manager Logo Svg"
                />
              </div>

              <div
                class="flex items-center justify-start p-4 text-sm text-right"
              >
                <p>No files have been assigned yet.</p>
              </div>
            </div>
          </div>
        </div>

        <div class="col-span-2 mt-2 pt-4 border-t border-gray-300">
          <div
            class="flex items-center text-sm gap-4 py-2.5 px-4 rounded-lg cursor-pointer border border-border-dark-brown hover:bg-gray-100 transition-colors ease-linear duration-200"
          >
            <div>
              <input-toggle v-model="form.engagement" />
            </div>

            <div class="space-y-1">
              <p class="font-semibold">
                I undertake to provide all documents before the end of the
                regulatory deadlines.
              </p>

              <p class="text-xs text-input-profile-label">
                By checking this box, you acknowledge that all required
                documents must be submitted within the regulatory deadlines to
                avoid penalties or rejection of the transfer.
              </p>
            </div>
          </div>
        </div>

        <p
          v-if="form.engagement"
          class="text-sm text-input-profile-label col-span-2 py-4 bg-emerald-50 px-3 border border-emerald-200 rounded-lg"
        >
          Please click on the link to download the
          <nuxt-link
            to="https://dshortlink-ewa.adwa.world/MAF_LETTRE_DENGAGEMENT_TRANSFERT.pdf"
            target="_blank"
            class="text-emerald-500 underline font-normal hover:font-semibold transition-all ease-linear duration-100 cursor-pointer"
            >engagement letter</nuxt-link
          >
        </p>
      </div>

      <div
        class="grid justify-end grid-flow-col gap-3 mt-5 pt-5 border-t border-border-dark-brown/30"
      >
        <!-- <button-outline label="Cancel" /> -->

        <button-primary
          type="submit"
          label="Create a transfer"
          :loading="isLoading"
        />
      </div>
    </form>
  </div>
</template>

<style>
.p-inputgroupaddon {
  background: var(--color-input) !important;
  border: 1px solid var(--color-border-dark-brown) !important;
}

.p-datatable-header-cell {
  background: var(--color-sidebar) !important;
}
</style>
