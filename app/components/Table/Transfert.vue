<script setup lang="ts">
import moment from 'moment'

const config = useRuntimeConfig()
const { t, locale } = useI18n()
const showLoader = ref(true)
const assetStore = useAssetStore()
const auth = useAuthStore()

onMounted(() => {
  showLoader.value = assetStore.hasAssets ? false : true
  list()
})

const { $apiFetch } = useNuxtApp() as any
const { e, s } = useNotify()
const transferList = ref([])
const filteredTransferList = ref([])
const isSubmitOtp = ref(false)
const isRequestingOtp = ref(false)
const isListLoading = ref(false)
const isSearching = ref(false)
const showOtpModal = ref(false)
const searchIndex = ref('')
const engagement = ref()
const searchTimeout = ref()
const activeTransfer = ref({
  amount: '',
  beneficiaryName: '',
  code: '',
  isEngaged: false,
})
const validatingOtpForm = ref({
  otp: '',
  lang: locale.value,
  files: {
    engagement: '',
  },
})
const validOtpErrorMsg = ref({
  otp: '',
  files: {
    engagement: '',
  },
})

const showListLoader = () => (isListLoading.value = true)

const hideListLoader = () => (isListLoading.value = false)

const showOtpRequestLoader = () => (isRequestingOtp.value = true)

const hideOtpRequestLoader = () => (isRequestingOtp.value = false)

const showSearchLoader = () => (isSearching.value = true)

const hideSearchLoader = () => (isSearching.value = false)

const showSubmitOtpLoader = () => (isSubmitOtp.value = true)

const hideSubmitOtpLoader = () => (isSubmitOtp.value = false)

const openOtpModal = () => {
  showOtpModal.value = true
}

const closingOtpModal = () => {
  validatingOtpForm.value = {
    otp: '',
    lang: locale.value,
    files: {
      engagement: '',
    },
  }
  resetOtpValidErrorMsg()
  showOtpModal.value = false
  list()
}

const resetOtpValidErrorMsg = () => {
  validOtpErrorMsg.value = {
    otp: '',
    files: {
      engagement: '',
    },
  }
}

const clearEngagemmentFile = () => {
  validatingOtpForm.value.files.engagement = ''
}

const setEngagementFile = (fileId: string) => {
  validatingOtpForm.value.files.engagement = fileId
  setTimeout(() => {
    engagement.value.hide()
  }, 1000)
}

const toggleEngagement = (event: any) => {
  engagement.value.toggle(event)
}

const list = async () => {
  showListLoader()
  try {
    const { apiResponse } = await $apiFetch(config.public.api.transfer.list, {
      method: 'POST',
      body: {
        lang: locale.value,
      },
    })

    transferList.value = apiResponse
    filteredTransferList.value = apiResponse
  } catch (error: any) {
    const errorMsg = handleApiError(error)
    if (errorMsg.length > 0) {
      e(errorMsg)
    }
  } finally {
    hideListLoader()
  }
}

const sendTransfer = async (transfer: any) => {
  console.log(transfer)
  activeTransfer.value = {
    amount: transfer.amount,
    beneficiaryName: transfer.beneficiaryName,
    code: transfer.code,
    isEngaged: transfer.isEngaged,
  }
  openOtpModal()
  showOtpRequestLoader()
  try {
    const { apiResponse, validError } = await $apiFetch(
      config.public.api.transfer.otp.request,
      {
        method: 'POST',
        body: {
          fileCode: transfer.code,
          lang: locale.value,
        },
      }
    )
  } catch (error: any) {
    const errorMsg = handleApiError(error)
    if (errorMsg.length > 0) {
      e(errorMsg)
    }
  } finally {
    hideOtpRequestLoader()
  }
}

const searchTransfer = async () => {
  showSearchLoader()
  try {
    const { apiResponse, validError } = await $apiFetch(
      config.public.api.transfer.search,
      {
        method: 'POST',
        body: {
          searchIndex: searchIndex.value,
          lang: locale.value,
        },
      }
    )
    if (validError) {
      validError.forEach((err: any) => e(err?.message))
    }
    filteredTransferList.value = apiResponse
  } catch (error: any) {
    const errorMsg = handleApiError(error)
    if (errorMsg.length > 0) {
      e(errorMsg)
    }
  } finally {
    hideSearchLoader()
  }
}

const submitOtpTransfer = async () => {
  resetOtpValidErrorMsg()

  showSubmitOtpLoader()
  try {
    const { apiResponse, validError } = await $apiFetch(
      config.public.api.transfer.otp.validate,
      {
        method: 'POST',
        body: {
          demandCode: activeTransfer.value.code,
          fileCode: validatingOtpForm.value.files.engagement,
          otp: validatingOtpForm.value.otp,
          lang: locale.value,
        },
      }
    )

    if (validError) {
      validError.forEach((err: any) => e(err?.message))
    } else {
      s(apiResponse)
      closingOtpModal()
    }
  } catch (error: any) {
    const errorMsg = handleApiError(error)
    if (errorMsg.length > 0) {
      e(errorMsg)
    }
  } finally {
    hideSubmitOtpLoader()
  }
}

watch(
  () => searchIndex.value,
  newIndex => {
    clearTimeout(searchTimeout.value)

    if (newIndex.trim().length >= 3) {
      searchTimeout.value = setTimeout(() => {
        searchTransfer()
      }, 500)
    } else {
      filteredTransferList.value = transferList.value
    }
  }
)
</script>

<template>
  <div class="space-y-6">
    <div class="flex flex-row space-x-6">
      <div class="flex relative grow">
        <input-search
          v-model="searchIndex"
          identifier="search"
          placeholder="Find a transfer"
        />

        <div
          class="flex items-center space-x-1 absolute right-0 z-50 -translate-x-1 translate-y-[0.17rem]"
        >
          <i
            v-if="isSearching"
            class="pi pi-spinner text-button-main animate-spin"
          />

          <i
            class="pi pi-search p-2 bg-button-main hover:bg-button-main-hover text-input-text rounded-full cursor-pointer"
            style="font-size: 0.9rem"
            @click.prevent="searchTransfer"
          />
        </div>
      </div>

      <div>
        <!-- <button-primary
            @click.prevent="openModal"
            label="Add user"
            icon="pi pi-plus-circle"
          /> -->
      </div>
    </div>

    <DataTable
      :value="filteredTransferList"
      :loading="isListLoading"
      paginator
      :rows="10"
      :rowsPerPageOptions="[10, 20, 50]"
      :pt="{
        root: 'text-xs',
        row: {
          headerRow: 'bg-profile',
        },
      }"
      resizableColumns
      columnResizeMode="fit"
      showGridlines
    >
      <Column
        header="Date / Time"
        :pt="{
          columnTitle: 'text-xs',
          columnHeaderContent: 'flex justify-center',
        }"
        style="border-right: 1px solid var(--color-border-brown)"
      >
        <template #body="slotProps">
          <div class="text-left w-full">
            {{ moment(slotProps.data.createdAt).format('Do MMM YYYY') }}
          </div>
        </template>
      </Column>
      <Column
        header="Transaction ID"
        :pt="{
          columnTitle: 'text-xs',
          columnHeaderContent: 'flex justify-center',
        }"
        style="border-right: 1px solid var(--color-border-brown)"
      >
        <template #body="slotProps">
          {{ slotProps.data.code }}
        </template>
      </Column>
      <Column
        header="Beneficiary"
        :pt="{
          columnTitle: 'text-xs',
          headerCell: 'bg-profile',
          columnHeaderContent: 'flex justify-center',
        }"
        style="border-right: 1px solid var(--color-border-brown)"
      >
        <template #body="slotProps">
          {{ slotProps.data.beneficiaryName }}
        </template>
      </Column>
      <Column
        header="Type"
        :pt="{
          columnTitle: 'text-xs',
          columnHeaderContent: 'flex justify-center',
        }"
        style="border-right: 1px solid var(--color-border-brown)"
      >
        <template #body="slotProps">
          <div class="flex justify-center">
            <span
              :class="[
                'inline-flex items-center justify-self-center rounded-md border px-2.5 py-0.5 space-x-1.5',
                {
                  'text-auth-text-secondary border-border-green bg-stat-total-demand':
                    slotProps.data.status.toLowerCase() === 'submitted',
                  'text-input-profile-label border-dark-brown bg-stat-pending-demand':
                    slotProps.data.status.toLowerCase() !== 'submitted',
                },
              ]"
              style="font-size: 0.7rem"
            >
              <button
                type="button"
                class="rounded-full bg-border-green size-1.5"
              />

              <span>{{ slotProps.data.status }}</span>
            </span>
          </div>
        </template>
      </Column>
      <Column
        header="Amount"
        :pt="{
          columnTitle: 'text-xs',
          headerCell: 'bg-profile',
          columnHeaderContent: 'flex justify-center',
        }"
        style="border-right: 1px solid var(--color-border-brown)"
      >
        <template #body="slotProps">
          {{
            Intl.NumberFormat('fr-CA', {
              style: 'currency',
              currency: 'XAF',
            }).format(Number(slotProps.data.amount))
          }}
        </template>
      </Column>
      <Column
        header="Status"
        :pt="{
          columnTitle: 'text-xs',
          columnHeaderContent: 'flex justify-center',
        }"
        style="border-right: 1px solid var(--color-border-brown)"
      >
        <template #body="slotProps">
          <div class="flex justify-center">
            <span
              :class="[
                'inline-flex items-center justify-self-center rounded-md border px-2.5 py-0.5 space-x-1.5',
                {
                  'text-auth-text-secondary border-border-green bg-stat-total-demand':
                    slotProps.data.status.toLowerCase() === 'submitted',
                  'text-input-profile-label border-dark-brown bg-stat-pending-demand':
                    slotProps.data.status.toLowerCase() !== 'submitted',
                },
              ]"
              style="font-size: 0.7rem"
            >
              <button
                type="button"
                class="rounded-full bg-border-green size-1.5"
              />

              <span>{{ slotProps.data.status }}</span>
            </span>
          </div>
        </template>
      </Column>
      <Column header="Action">
        <template #body="slotProps">
          <div class="flex items-center gap-2">
            <i
              class="pi pi-eye cursor-pointer hover:scale-110 transition-transform duration-200 ease-linear"
              style="font-size: 1rem"
            />

            <i
              v-if="
                slotProps.data.status === 'DRAFT' && auth.state?.isValidator
              "
              v-tooltip.left="'Send'"
              class="pi pi-send hover:text-blue-600 cursor-pointer hover:scale-110 transition-transform duration-200 ease-linear"
              @click.prevent="sendTransfer(slotProps.data)"
            />
          </div>
        </template>
      </Column>

      <template #empty>
        <div class="grid items-center h-40 text-border-brown/70 text-center">
          <p class="flex flex-col space-y-1">
            <i class="pi pi-inbox" style="font-size: 2rem" />
            <span class="font-semibold">No data</span>
          </p>
        </div>
      </template>
    </DataTable>

    <Dialog
      v-model:visible="showOtpModal"
      modal
      :style="{ width: '30rem' }"
      @hide="closingOtpModal"
    >
      <template #container="{ closeCallback }">
        <div class="p-1 rounded-xl">
          <gadget-banner>
            <div class="grid grid-cols-[auto_1fr]">
              <div
                class="grid justify-center ml-2 text-sm text-sidebar-text-primary lg:text-base"
              >
                <div class="ml-5 space-y-1 translate-y-6">
                  <h3 class="font-semibold">Initiate a cash transfer</h3>

                  <h4 class="text-xs">
                    Move forware with your transfer request once you fell
                    comfortable
                  </h4>
                </div>
              </div>

              <div class="flex justify-end">
                <gadget-image-blur>
                  <img
                    :src="assetStore.list.create_manager"
                    class="z-30 object-cover object-center translate-x-5 translate-y-3 size-18"
                    alt="Create User Logo"
                  />
                </gadget-image-blur>
              </div>
            </div>
          </gadget-banner>

          <form @submit.prevent="submitOtpTransfer">
            <div class="space-y-4 px-3 py-5 h-auto">
              <div class="col-span-2">
                <div class="flex justify-center p-2 rounded-lg w-86 mx-auto">
                  <input-otp-light-variant
                    identifier="otp"
                    v-model="validatingOtpForm.otp"
                    size="large"
                    pt:root="mx-auto"
                    integerOnly
                  />
                </div>

                <p class="text-xs text-gray-500 text-center mt-2.5">
                  An OTP code has been sent to you via mail. Please enter the
                  code to proceed
                </p>
              </div>

              <div v-if="activeTransfer.isEngaged" class="mt-5 col-span-2">
                <p
                  class="text-sm border-l-4 border-auth-page bg-gray-100 pl-5 py-1 mb-3 text-gray-500"
                >
                  Upload engagement letter
                </p>

                <div class="space-y-3">
                  <div
                    class="grid grid-cols-[1fr_auto] items-center justify-between p-2.5 bg-account-manager-block border border-border-light-brown rounded mb-2"
                  >
                    <div class="flex items-center space-x-2">
                      <i class="pi pi-file" style="font-size: 1.2rem" />

                      <p class="text-sm font-semibold">Engagement file</p>
                    </div>

                    <div class="space-x-2 pl-5">
                      <button-icon
                        v-if="validatingOtpForm.files.engagement"
                        icon="pi pi-trash"
                        background="bg-red-600 text-gray-100"
                        @click.prevent="clearEngagemmentFile"
                      />

                      <button-icon
                        v-else
                        icon="pi pi-upload"
                        @click.prevent="(e:any) => toggleEngagement(e)"
                      />
                    </div>

                    <Popover
                      ref="engagement"
                      pt:content="p-2 w-[26rem] min-h-24 bg-white my-2 rounded-md"
                    >
                      <input-file-upload
                        identifier="engagement"
                        :type="activeTransfer.code"
                        category="DEMANDE"
                        @update-file="e => setEngagementFile(e)"
                      />
                    </Popover>
                  </div>
                </div>
              </div>
            </div>

            <div
              class="grid justify-end grid-flow-col gap-3 p-2 border-t border-border-dark-brown/30"
            >
              <button-outline label="Cancel" @click.prevent="closeCallback" />

              <button-primary
                type="submit"
                label="send request"
                :loading="isSubmitOtp"
              />
            </div>
          </form>
        </div>
      </template>
    </Dialog>
  </div>
</template>
