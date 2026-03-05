<script setup lang="ts">
definePageMeta({
  layout: 'connected',
  middleware: ['authenticated'],
})

const config = useRuntimeConfig()
const { t, locale } = useI18n()
const { $apiFetch } = useNuxtApp() as any
const { e } = useNotify()
const transferStore = useTransferStore()

useHead({
  title: `${t('meta.title.transfer.view')} - ${config.public.app.name}`,
  meta: [{ name: 'description', content: 'My design project application.' }],
})

onMounted(() => {
  updateFormData()
})

onUnmounted(() => {
  transferStore.resetChosenTransfer()
})

const isFileLoading = shallowRef(false)
const taskOps = ref<Record<string, any>>({})
const fileList = ref<
  {
    uuid: string
    title: string
    originalName: string
    demandCode: string
    fileType: string
    fileCategory: string
    isRequired: boolean
    isUploaded: boolean
    status: string
    canUpdate: boolean
    link: string | null
    boComment: string
    clearanceComment: string
  }[]
>([])
const form = ref({
  type: '',
  code: '',
  beneficiary: '',
  targetDate: '',
  amount: '',
  currency: '',
  accountNum: '',
  costSupport: '',
  description: '',
})

const showFileLoader = () => (isFileLoading.value = true)

const hideFileLoader = () => (isFileLoading.value = false)

const toggleTaskOp = (uuid: string, event: any) => {
  taskOps.value[uuid]?.toggle(event)
}

const setTaskOpRef = (el: any, uuid: string) => {
  if (el) taskOps.value[uuid] = el
}

const setUploadedFile = (uuid: string) => {
  setTimeout(() => {
    taskOps.value[uuid].hide()
  }, 500)
  setTimeout(() => {
    getFiles()
  }, 1000)
}

const updateFormData = () => {
  form.value = {
    type: transferStore.chosenTransfer?.type,
    code: transferStore.chosenTransfer?.code,
    beneficiary: transferStore.chosenTransfer?.beneficiaryName,
    targetDate: transferStore.chosenTransfer?.targetDate
      ? transferStore.chosenTransfer?.targetDate
      : '',
    amount: transferStore.chosenTransfer?.amount,
    currency: transferStore.chosenTransfer?.currency,
    accountNum: transferStore.chosenTransfer?.accountNumber,
    costSupport: transferStore.chosenTransfer?.supportCost,
    description: transferStore.chosenTransfer?.description,
  }
}

const getFiles = async () => {
  showFileLoader()
  try {
    const { apiResponse } = await $apiFetch(
      config.public.api.transfer.demandFile,
      {
        method: 'POST',
        body: {
          demandId: form.value.code,
          lang: locale.value,
        },
      },
    )

    fileList.value = apiResponse
  } catch (error: any) {
    const errorMsg = handleApiError(error)
    if (errorMsg.length > 0) {
      e(errorMsg)
    }
  } finally {
    hideFileLoader()
  }
}
</script>

<template>
  <div class="pb-5 text-text-primary space-y-5">
    <navbar-auth-nav :title="$t('menu.transfer.view')" />

    <gadget-banner>
      <div class="grid grid-cols-[auto_1fr] h-full">
        <div class="grid justify-center ml-2 text-sm text-white lg:text-base">
          <div class="ml-5 translate-y-8">
            <h3 class="font-semibold">
              {{ $t('page.transfer.details.title1') }}
            </h3>

            <h4 class="text-xs">
              {{ $t('page.transfer.details.title2') }}
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

    <Tabs value="0">
      <TabList style="font-size: 0.8rem">
        <Tab value="0" as="div" class="flex items-center gap-2">
          <i class="pi pi-folder-open" style="font-size: 1.2rem" />

          <span class="font-bold whitespace-nowrap">
            {{ $t('page.transfer.details.request_info') }}
          </span>
        </Tab>
        <Tab
          value="1"
          as="div"
          class="flex items-center gap-2"
          @click.prevent="getFiles"
        >
          <i class="pi pi-paperclip" style="font-size: 1.2rem" />

          <span class="font-bold whitespace-nowrap">
            {{ $t('page.transfer.details.attachments') }}
          </span>
        </Tab>
      </TabList>
      <TabPanels>
        <TabPanel value="0" class="grid grid-cols-2 gap-2 space-y-0.5 m-0">
          <div>
            <label for="type" class="text-xs text-text-secondary">
              {{ $t('page.transfer.details.type') }}
            </label>

            <input-bg-normal identifier="type" v-model="form.type" disabled />
          </div>

          <div>
            <label for="code" class="text-xs text-text-secondary">
              {{ $t('page.transfer.details.code') }}
            </label>

            <input-bg-normal identifier="code" v-model="form.code" disabled />
          </div>

          <div>
            <label for="beneficiary" class="text-xs text-text-secondary">
              {{ $t('page.transfer.details.beneficiary') }}
            </label>

            <input-bg-normal
              identifier="beneficiary"
              v-model="form.beneficiary"
              disabled
            />
          </div>

          <div>
            <label for="targetDate" class="text-xs text-text-secondary">
              {{ $t('page.transfer.details.target_date') }}
            </label>

            <input-bg-normal
              identifier="targetDate"
              v-model="form.targetDate"
              disabled
            />
          </div>

          <div>
            <label for="amount" class="text-xs text-text-secondary">
              {{ $t('page.transfer.details.amount') }}
            </label>

            <input-custom-number
              v-model="form.amount"
              identifier="amount"
              disabled
            />
          </div>

          <div>
            <label for="currency" class="text-xs text-text-secondary">
              {{ $t('page.transfer.details.currency') }}
            </label>

            <input-bg-normal
              v-model="form.currency"
              identifier="currency"
              disabled
            />
          </div>

          <div>
            <label for="accountNum" class="text-xs text-text-secondary">
              {{ $t('page.transfer.details.account_num') }}
            </label>

            <input-bg-normal
              v-model="form.accountNum"
              identifier="accountNum"
              disabled
            />
          </div>

          <div>
            <label for="costSupport" class="text-xs text-text-secondary">
              {{ $t('page.transfer.details.cost_support') }}
            </label>

            <input-bg-normal
              v-model="form.costSupport"
              identifier="costSupport"
              disabled
            />
          </div>

          <div class="col-span-2">
            <label for="description" class="text-xs text-text-secondary">
              {{ $t('page.transfer.details.description') }}
            </label>

            <Textarea
              v-model="form.description"
              rows="5"
              cols="10"
              class="block w-full"
              :style="{
                'border-color': 'var(--color-border-main) !important',
              }"
              disabled
            />
          </div>
        </TabPanel>
        <TabPanel value="1" class="m-0">
          <div v-if="isFileLoading" class="space-y-2">
            <skeleton v-for="i in 6" :key="i" width="100%" height="3.7rem" />
          </div>

          <div v-else>
            <div
              v-if="fileList.length > 0"
              v-for="file in fileList"
              :key="file?.uuid"
            >
              <div
                :class="[
                  'flex items-center justify-between p-2.5  border  rounded mb-2',
                  {
                    'bg-bg-secondary border-border-main':
                      !file.isUploaded || file.canUpdate,
                    ' bg-bg-main border-status-success text-status-success':
                      file.isUploaded && !file.canUpdate,
                    ' bg-bg-main border-status-error text-status-error':
                      file.isUploaded && file.canUpdate,
                  },
                ]"
              >
                <div class="flex items-center space-x-2">
                  <div>
                    <i class="pi pi-file" style="font-size: 1.2rem" />
                  </div>

                  <ul>
                    <li class="flex items-center space-x-2">
                      <p class="text-sm font-bold">{{ file.title }}</p>

                      <span
                        v-if="file.isRequired"
                        class="bg-status-error text-white font-semibold rounded text-xxs px-1 py-0.5"
                      >
                        {{ $t('page.required') }}
                      </span>
                    </li>
                    <li
                      v-if="file.isUploaded && file.canUpdate"
                      class="flex space-x-2 text-xs text-text-secondary mt-2"
                    >
                      <p>{{ $t('page.transfer.details.bo_comment') }}:</p>

                      <p>{{ file.boComment ?? 'N/A' }}</p>
                    </li>
                    <li
                      v-if="file.isUploaded && file.canUpdate"
                      class="flex space-x-2 text-xs mt-1 text-text-secondary"
                    >
                      <p>
                        {{ $t('page.transfer.details.clearance_comment') }}:
                      </p>

                      <p>
                        {{ file.clearanceComment ?? 'N/A' }}
                      </p>
                    </li>
                  </ul>
                </div>

                <div class="space-x-2">
                  <button-icon
                    v-if="!file.isUploaded || file.canUpdate"
                    icon="pi pi-upload"
                    @click.prevent="(e: any) => toggleTaskOp(file.uuid, e)"
                  />
                </div>

                <Popover
                  :ref="el => setTaskOpRef(el, file.uuid)"
                  pt:content="p-2 w-[26rem] h-auto bg-bg-main mt-2 rounded-md"
                >
                  <input-file-upload
                    :identifier="file.uuid"
                    :type="file.fileType"
                    :category="file.fileCategory"
                    :demand-id="form.code"
                    @update-file="e => setUploadedFile(file.uuid)"
                  />
                </Popover>
              </div>
            </div>
          </div>
        </TabPanel>
      </TabPanels>
    </Tabs>
  </div>
</template>

<style>
.p-tab-active {
  border-color: var(--color-accent) !important;
  color: var(--color-accent) !important;
}

.p-tablist-active-bar {
  background: var(--color-accent) !important;
}
</style>
