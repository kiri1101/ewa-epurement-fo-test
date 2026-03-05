<script setup lang="ts">
import moment from 'moment'

const config = useRuntimeConfig()
const { $apiFetch } = useNuxtApp() as any
const { e, s } = useNotify()
const { t, locale } = useI18n()
const router = useRouter()
const transferStore = useTransferStore()
const transferList = ref([])
const filteredTransferList = ref([])
const isSubmitOtp = ref(false)
const isRequestingOtp = ref(false)
const isListLoading = ref(false)
const isSearching = ref(false)
const showOtpModal = ref(false)
const searchIndex = ref('')
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
    engagement: false,
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
      engagement: false,
    },
  }
}

const setEngagementFile = (fileId: string) => {
  validatingOtpForm.value.files.engagement = fileId
}

const clearEngagemenFile = () => {
  validatingOtpForm.value.files.engagement = ''
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
      },
    )

    if (validError) {
      validError.forEach((err: any) => e(err?.message))
    }
  } catch (error: any) {
    const errorMsg = handleApiError(error)
    if (errorMsg.length > 0) {
      e(errorMsg)
    }
  } finally {
    hideOtpRequestLoader()
  }
}

const searchTransfer = () => {
  showSearchLoader()

  filteredTransferList.value = transferList.value.filter((transfer: any) => {
    let index = searchIndex.value.toLowerCase()
    return (
      transfer.code.toLowerCase().includes(index) ||
      transfer.beneficiaryName.toLowerCase().includes(index) ||
      transfer.status.toLowerCase().includes(index) ||
      transfer.amount.toLowerCase().includes(index) ||
      transfer.createdAt.toLowerCase().includes(index) ||
      transfer.type.toLowerCase().includes(index)
    )
  })

  hideSearchLoader()
}

const submitOtpTransfer = async () => {
  resetOtpValidErrorMsg()

  if (
    activeTransfer.value.isEngaged &&
    validatingOtpForm.value.files.engagement.trim().length === 0
  ) {
    validOtpErrorMsg.value.files.engagement = true
    setTimeout(() => {
      validOtpErrorMsg.value.files.engagement = false
    }, 5000)

    e(t('validation.engagement_file'))
  } else {
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
        },
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
}

const showDetails = (uuid: string) => {
  let result = filteredTransferList.value.find(
    (transfer: any) => transfer.uuid === uuid,
  )

  if (result) {
    transferStore.updateChosenTransfer(result)

    router.push(`/transfer/${uuid}/details`)
  } else {
    transferStore.resetChosenTransfer()
  }
}

onMounted(() => {
  list()
})

watch(
  () => searchIndex.value,
  newIndex => {
    clearTimeout(searchTimeout.value)

    if (newIndex.trim().length >= 2) {
      searchTimeout.value = setTimeout(() => {
        searchTransfer()
      }, 500)
    } else {
      filteredTransferList.value = transferList.value
    }
  },
)
</script>

<template>
  <div class="space-y-6">
    <div class="flex flex-row space-x-6">
      <gadget-search
        v-model="searchIndex"
        :is-loading="isSearching"
        @search="searchTransfer"
      />

      <div />
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
          headerRow: 'bg-border-main',
        },
      }"
      resizableColumns
      columnResizeMode="fit"
      showGridlines
    >
      <Column
        :header="t('table.date_time')"
        :pt="{
          columnTitle: 'text-xs',
          columnHeaderContent: 'flex justify-center',
        }"
        style="border-right: 1px solid var(--color-border-main)"
      >
        <template #body="slotProps">
          <div class="text-left w-full">
            {{ moment(slotProps.data.createdAt).format('YYYY-MM-DD') }}
          </div>
        </template>
      </Column>
      <Column
        :header="t('table.transaction_id')"
        :pt="{
          columnTitle: 'text-xs',
          columnHeaderContent: 'flex justify-center',
        }"
        style="border-right: 1px solid var(--color-border-main)"
      >
        <template #body="slotProps">
          {{ slotProps.data.code }}
        </template>
      </Column>
      <Column
        :header="t('table.beneficiary')"
        :pt="{
          columnTitle: 'text-xs',
          headerCell: 'bg-border-main',
          columnHeaderContent: 'flex justify-center',
        }"
        style="border-right: 1px solid var(--color-border-main)"
      >
        <template #body="slotProps">
          {{ slotProps.data.beneficiaryName }}
        </template>
      </Column>
      <Column
        :header="t('table.type')"
        :pt="{
          columnTitle: 'text-xs',
          columnHeaderContent: 'flex justify-center',
        }"
        style="border-right: 1px solid var(--color-border-main)"
      >
        <template #body="slotProps">
          <div class="w-52 text-wrap">
            {{ slotProps.data.type }}
          </div>
        </template>
      </Column>
      <Column
        :header="t('table.amount')"
        :pt="{
          columnTitle: 'text-xs',
          headerCell: 'bg-border-main',
          columnHeaderContent: 'flex justify-center',
        }"
        style="border-right: 1px solid var(--color-border-main)"
      >
        <template #body="slotProps">
          {{
            Intl.NumberFormat('en-US', {
              style: 'currency',
              currency: slotProps.data.currency,
            }).format(Number(slotProps.data.amount))
          }}
        </template>
      </Column>
      <Column
        :header="t('table.status')"
        :pt="{
          columnTitle: 'text-xs',
          columnHeaderContent: 'flex justify-center',
        }"
        style="border-right: 1px solid var(--color-border-main)"
      >
        <template #body="slotProps">
          <div class="flex justify-center">
            <div
              class="inline-flex w-full items-center justify-self-center rounded-md border px-2.5 py-0.5 space-x-1.5 bg-primary text-white"
              style="font-size: 0.7rem"
            >
              <button
                type="button"
                class="rounded-full bg-accent-light size-1.5"
              />

              <span>{{ slotProps.data.status }}</span>
            </div>
          </div>
        </template>
      </Column>
      <Column :header="t('table.action')">
        <template #body="slotProps">
          <div class="flex items-center gap-2">
            <i
              v-tooltip.left="'View Details'"
              class="pi pi-eye cursor-pointer hover:scale-110 hover:text-accent-light transition-transform duration-200 ease-linear"
              style="font-size: 1rem"
              @click.prevent="showDetails(slotProps.data.uuid)"
            />

            <i
              v-if="slotProps.data.canValidate"
              v-tooltip.left="'Send'"
              class="pi pi-send hover:text-accent-light cursor-pointer hover:scale-110 transition-transform duration-200 ease-linear"
              @click.prevent="sendTransfer(slotProps.data)"
            />
          </div>
        </template>
      </Column>

      <template #empty>
        <div class="grid items-center h-40 text-text-secondary text-center">
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
                class="grid justify-center ml-2 text-sm text-white lg:text-base"
              >
                <div class="ml-5 space-y-1 translate-y-6">
                  <h3 class="font-semibold">
                    {{ $t('page.transfer.send.title1') }}
                  </h3>

                  <h4 class="text-xs">
                    {{ $t('page.transfer.send.title2') }}
                  </h4>
                </div>
              </div>

              <div class="flex justify-end">
                <gadget-image-blur>
                  <img
                    src="/images/create_manager.png"
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

                <p class="text-xs text-text-secondary mt-2.5">
                  {{ $t('page.transfer.send.otp_message') }}
                </p>
              </div>

              <div v-if="activeTransfer.isEngaged" class="mt-5 col-span-2">
                <div
                  :class="[
                    'bg-bg-main border px-2 py-1 rounded-md text-xs space-y-1',
                    {
                      'border-border-main': !validOtpErrorMsg.files.engagement,
                      'border-accent-muted ring-4 ring-accent-muted ring-offset-2':
                        validOtpErrorMsg.files.engagement,
                    },
                  ]"
                >
                  <div class="flex items-center space-x-2">
                    <p
                      :class="[
                        'font-semibold',
                        {
                          'text-accent': validOtpErrorMsg.files.engagement,
                        },
                      ]"
                    >
                      {{ $t('page.transfer.send.file') }}
                    </p>

                    <span
                      class="font-semibold rounded-xs text-[0.5rem] px-1.5 py-[0.05rem] uppercase bg-status-error text-white"
                    >
                      {{ $t('page.required') }}
                    </span>
                  </div>

                  <input-file-upload
                    :type="activeTransfer.code"
                    category="DEMANDE-ENG"
                    @update-file="e => setEngagementFile(e)"
                    @removefile="clearEngagemenFile"
                  />
                </div>
              </div>
            </div>

            <div
              class="grid justify-end grid-flow-col gap-3 p-2 border-t border-border-main"
            >
              <button-outline
                :label="t('button.cancel')"
                @click.prevent="closeCallback"
              />

              <button-primary
                type="submit"
                :label="t('button.send_request')"
                :loading="isSubmitOtp"
              />
            </div>
          </form>
        </div>
      </template>
    </Dialog>
  </div>
</template>
