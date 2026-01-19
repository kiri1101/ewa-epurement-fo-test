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
  title: `${t('meta.title.beneficiary')} - ${config.public.app.name}`,
  meta: [{ name: 'description', content: 'My design project application.' }],
})

onMounted(() => {
  showLoader.value = assetStore.hasAssets ? false : true
  getBeneficiaryList()
})

const { $apiFetch } = useNuxtApp() as any
const isLoading = ref(false)
const isListLoading = ref(false)
const isSearching = ref(false)
const searchIndex = ref('')
const showModal = ref(false)
const { e, s } = useNotify()
const filesList = ref<BeneficiaryFile[]>([])
const countryList = ref<CountryItem[]>([])
const BeneficiaryList = ref<CustomInsertBeneficiary[]>([])
const fileListByType = ref<BeneficiaryFile[]>([])
const taskOps = ref<Record<string, any>>({})
const showFileTrashIcon = ref<Record<string, boolean>>({})
const form = ref({
  fullName: '',
  country: '',
  type: '',
  bank: '',
  iban: '',
  swift: '',
  lang: locale.value,
  files: {} as Record<string, string>,
})
const validErrorMsg = ref({
  fullName: '',
  country: '',
  type: '',
  bank: '',
  iban: '',
  swift: '',
  files: '',
})
const beneficiaryType = ref([
  { name: 'Individual', value: 'individual' },
  { name: 'Company', value: 'company' },
])

const cardStyles = computed(() => ({
  backgroundImage: showLoader.value ? '' : `url(${assetStore.list.account_bg})`,
  'min-height': '13rem',
}))

const showSearchLoader = () => (isSearching.value = true)

const hideSearchLoader = () => (isSearching.value = false)

const showingLoader = () => (isLoading.value = true)

const hidingLoader = () => (isLoading.value = false)

const showListLoader = () => (isListLoading.value = true)

const hideListLoader = () => (isListLoading.value = false)

const openModal = () => {
  showModal.value = true
  getBeneficiarySettings()
}

const closingModal = () => {
  form.value = {
    fullName: '',
    country: '',
    type: '',
    bank: '',
    iban: '',
    swift: '',
    lang: locale.value,
    files: {} as Record<string, string>,
  }
  resetValidErrorMsg()
  fileListByType.value = []
  showModal.value = false
  getBeneficiaryList()
}

const resetValidErrorMsg = () => {
  validErrorMsg.value = {
    fullName: '',
    country: '',
    type: '',
    bank: '',
    iban: '',
    swift: '',
    files: '',
  }
}

const setTaskOpRef = (el: any, uuid: string) => {
  if (el) taskOps.value[uuid] = el
}

const toggleTaskOp = (uuid: string, event: any) =>
  taskOps.value[uuid]?.toggle(event)

const setUploadedFile = (uuid: string, fileId: string) => {
  form.value.files[uuid] = fileId
  canTrashFile(uuid)
  setTimeout(() => {
    taskOps.value[uuid].hide()
  }, 1000)
}

const setBeneficiaryType = (type: string) => {
  form.value.type = type
  fileListByType.value = filesList.value.filter(file => file.type === type)
}

const canTrashFile = (uuid: string) => {
  const status = form.value.files[uuid] ? true : false
  showFileTrashIcon.value[uuid] = status
}

const clearFile = (uuid: string) => {
  form.value.files[uuid] = ''
  showFileTrashIcon.value[uuid] = false
}

const getBeneficiarySettings = async () => {
  showListLoader()
  try {
    const { apiResponse, validError } = await $apiFetch(
      config.public.api.beneficiary.setting,
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

    countryList.value = apiResponse.countries
    filesList.value = apiResponse.files
  } catch (error: any) {
    const errorMsg = handleApiError(error)
    if (errorMsg.length > 0) {
      e(errorMsg)
    }
  } finally {
    hideListLoader()
  }
}

const getBeneficiaryList = async () => {
  showListLoader()
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

    BeneficiaryList.value = apiResponse
  } catch (error: any) {
    const errorMsg = handleApiError(error)
    if (errorMsg.length > 0) {
      e(errorMsg)
    }
  } finally {
    hideListLoader()
  }
}

const searchBeneficiaries = async () => {}

const submit = async () => {
  resetValidErrorMsg()
  form.value.lang = locale.value

  showingLoader()
  try {
    const { apiResponse, validError } = await $apiFetch(
      config.public.api.beneficiary.create,
      {
        method: 'POST',
        body: form.value,
      }
    )

    if (validError) {
      validError.forEach((err: any) => {
        validErrorMsg.value[err.name as keyof typeof validErrorMsg.value] =
          err.message
      })
    }

    s(apiResponse.message)
    closingModal()
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
  <div class="text-page-title-text space-y-5">
    <navbar-auth-nav :title="$t('menu.beneficiary')">
      <div class="max-w-xs">
        <button-primary
          label="New beneficiary"
          icon="pi pi-plus-circle"
          @click.prevent="openModal"
        />
      </div>
    </navbar-auth-nav>

    <gadget-banner>
      <div class="grid grid-cols-[auto_1fr] h-full">
        <div
          class="grid justify-center ml-2 text-sm text-sidebar-text-primary lg:text-base"
        >
          <div class="ml-5 translate-y-8">
            <h3 class="font-semibold">{{ $t('menu.beneficiary') }}</h3>

            <h4 class="text-xs">
              {{ $t('page.beneficiary.title') }}
            </h4>
          </div>
        </div>

        <div class="flex justify-end">
          <gadget-image-blur>
            <img
              :src="assetStore.list.beneficiaries"
              class="z-30 object-cover object-center w-auto h-22"
              alt="Bank Logo"
            />
          </gadget-image-blur>
        </div>
      </div>
    </gadget-banner>

    <section class="mt-5 space-y-5">
      <div class="flex flex-row space-x-6 w-full">
        <div class="flex relative grow">
          <input-search
            v-model="searchIndex"
            identifier="search"
            placeholder="Find a beneficiary"
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
              @click.prevent="searchBeneficiaries"
            />
          </div>
        </div>

        <div>
          <!-- <button-primary @click.prevent="openModal" label="Add user" icon="pi pi-plus-circle" /> -->
        </div>
      </div>

      <div class="cards text-xs">
        <card-active-skeleton
          v-if="BeneficiaryList.length > 0"
          v-for="beneficiary in BeneficiaryList"
          :key="beneficiary.code"
          :card-styles="cardStyles"
          reverse-gradient
        >
          <div class="flex items-center space-x-2">
            <div
              class="inline-flex p-2.5 rounded-full bg-white border border-border-dark-brown"
            >
              <svg-profile-pic class="size-3" />
            </div>

            <h3>{{ beneficiary.fullName }}</h3>
          </div>

          <ul class="mt-2 space-y-1">
            <li class="flex space-x-1">
              <span>Country:</span>
              <span class="font-semibold">
                {{ beneficiary.country }}
              </span>
            </li>
            <li class="flex space-x-1">
              <span>Bank:</span>
              <span class="font-semibold">
                {{ beneficiary.bankName }}
              </span>
            </li>
            <li class="flex space-x-1">
              <span>IBAN:</span>
              <span class="font-semibold">
                XXXXX{{ beneficiary.iban.slice(-5) }}
              </span>
            </li>
          </ul>

          <div class="mt-4 flex justify-between items-center">
            <span>Status:</span>
            <!-- <card-status :status="beneficiary.status" /> -->
          </div>

          <div
            class="border-t border-border-dark mt-2 pt-3 flex justify-between items-center"
          >
            <button
              type="button"
              class="h-6.5 px-3.5 space-x-1 border bg-transparent hover:bg-button-main hover:text-button-main-label border-button-main-border text-button-outline-label rounded-md font-semibold cursor-pointer transition duration-200 ease-linear"
            >
              <i
                class="pi pi-pen-to-square"
                style="font-size: 0.7rem; font-weight: 500"
              />

              <span>Edit</span>
            </button>

            <button-icon
              icon="pi pi-trash"
              background="bg-red-600 text-gray-100"
            />
          </div>
        </card-active-skeleton>

        <div v-else v-for="i in 10" :key="i" class="cards">
          <skeleton width="100%" height="12rem" />
        </div>
      </div>

      <Dialog
        v-model:visible="showModal"
        modal
        :style="{ width: '32rem' }"
        @hide="() => closingModal()"
      >
        <template #container="{ closeCallback }">
          <div class="p-1 rounded-xl">
            <gadget-banner>
              <div class="grid grid-cols-[auto_1fr]">
                <div
                  class="grid items-center justify-center ml-5 text-sm text-sidebar-text-primary lg:text-base"
                >
                  <h3 class="font-semibold -translate-y-4">
                    Add a new beneficiary
                  </h3>
                </div>

                <div class="flex justify-end">
                  <gadget-image-blur>
                    <img
                      :src="assetStore.list.beneficiaries"
                      class="z-30 object-cover object-center translate-x-5 translate-y-3 size-18"
                      alt="Create User Logo"
                    />
                  </gadget-image-blur>
                </div>
              </div>
            </gadget-banner>

            <form @submit.prevent="submit">
              <div
                class="grid grid-cols-2 gap-2 p-3 space-y-0.5 h-72 overflow-auto"
              >
                <div class="col-span-2">
                  <label
                    for="fullName"
                    class="text-xs text-input-profile-label"
                  >
                    Nom et Prénom
                  </label>

                  <input-bg-normal
                    v-model="form.fullName"
                    identifier="fullName"
                  />

                  <input-error-msg
                    v-if="validErrorMsg.fullName.trim().length > 0"
                    :label="validErrorMsg.fullName"
                  />
                </div>

                <div>
                  <label for="country" class="text-xs text-input-profile-label">
                    Country
                  </label>

                  <input-select
                    v-model="form.country"
                    :options="countryList"
                    :loading="isListLoading"
                    placeholder="Choose a country"
                    @update:modelValue="(e: string) => form.country = e"
                  />

                  <input-error-msg
                    v-if="validErrorMsg.country.trim().length > 0"
                    :label="validErrorMsg.country"
                  />
                </div>

                <div>
                  <label
                    for="benefType"
                    class="text-xs text-input-profile-label"
                  >
                    Type of beneficiary
                  </label>

                  <input-select
                    v-model="form.type"
                    :options="beneficiaryType"
                    placeholder="Choose a beneficiary type"
                    @update:modelValue="setBeneficiaryType"
                  />

                  <input-error-msg
                    v-if="validErrorMsg.type.trim().length > 0"
                    :label="validErrorMsg.type"
                  />
                </div>

                <div class="col-span-2">
                  <label for="bank" class="text-xs text-input-profile-label">
                    Bank
                  </label>

                  <input-bg-normal v-model="form.bank" identifier="bank" />

                  <input-error-msg
                    v-if="validErrorMsg.bank.trim().length > 0"
                    :label="validErrorMsg.bank"
                  />
                </div>

                <div
                  class="w-full bg-account-manager-block border border-card-border col-span-2 px-4 py-1.5 rounded-lg"
                >
                  <div>
                    <label for="iban" class="text-xs text-input-profile-label">
                      IBAN
                    </label>

                    <input-bg-normal v-model="form.iban" identifier="iban" />

                    <input-error-msg
                      v-if="validErrorMsg.iban.trim().length > 0"
                      :label="validErrorMsg.iban"
                    />
                  </div>

                  <div>
                    <label for="swift" class="text-xs text-input-profile-label">
                      SWIFT
                    </label>

                    <input-bg-normal v-model="form.swift" identifier="swift" />

                    <input-error-msg
                      v-if="validErrorMsg.swift.trim().length > 0"
                      :label="validErrorMsg.swift"
                    />
                  </div>
                </div>

                <div class="mt-5 col-span-2">
                  <div class="flex justify-between items-center mb-4">
                    <p
                      class="text-sm border-l-4 border-orange-500 pl-2 font-semibold"
                    >
                      Documents to submit
                    </p>

                    <p class="text-xs text-input-profile-label">0/2 uploaded</p>
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
                      :key="file?.insertId"
                    >
                      <div
                        class="flex items-center justify-between p-2.5 bg-account-manager-block border border-border-light-brown rounded mb-2"
                      >
                        <div class="flex items-center space-x-2">
                          <div>
                            <i class="pi pi-file" style="font-size: 1.2rem" />
                          </div>

                          <ul>
                            <li class="flex items-center space-x-2">
                              <p class="text-sm font-bold">{{ file.title }}</p>

                              <span
                                v-if="file.required"
                                class="bg-red-300 text-red-500 font-semibold rounded text-[0.6rem] px-2 py-0.5"
                              >
                                REQUIRED
                              </span>
                            </li>
                            <li class="text-input-profile-label text-xs">
                              {{ file.type }}
                            </li>
                          </ul>
                        </div>

                        <div class="space-x-2">
                          <i
                            v-tooltip.top="file.tooltip"
                            class="pi pi-info-circle cursor-pointer"
                          />

                          <button-icon
                            v-if="showFileTrashIcon[file.insertId]"
                            icon="pi pi-trash"
                            background="bg-red-600 text-gray-100"
                            @click.prevent="clearFile(file.insertId)"
                          />

                          <button-icon
                            v-else
                            icon="pi pi-upload"
                            @click.prevent="(e:any) => toggleTaskOp(file.insertId, e)"
                          />
                        </div>

                        <!-- <input-error-msg v-if="validErrorMsg.accounts.trim().length > 0" :label="validErrorMsg.accounts" /> -->
                        <Popover
                          :ref="el => setTaskOpRef(el, file.insertId)"
                          pt:content="p-2 w-[26rem] min-h-24 bg-white my-2 rounded-md"
                        >
                          <input-file-upload
                            :identifier="file.insertId"
                            :type="file.fileType"
                            :category="file.category"
                            @update-file="
                              e => setUploadedFile(file.insertId, e)
                            "
                          />
                        </Popover>
                      </div>
                    </div>

                    <div
                      v-else
                      class="grid grid-cols-2 border border-dashed rounded-lg bg-profile-manager border-border-dark-blue h-28"
                    >
                      <div class="grid items-center justify-center">
                        <skeleton
                          v-if="showLoader"
                          width="100%"
                          height="3rem"
                        />

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
              </div>

              <div
                class="grid justify-end grid-flow-col gap-3 p-2 border-t border-border-dark-brown/30"
              >
                <button-outline label="Cancel" @click.prevent="closeCallback" />

                <button-primary
                  type="submit"
                  label="Create a beneficiary"
                  :loading="isLoading"
                />
              </div>
            </form>
          </div>
        </template>
      </Dialog>
    </section>
  </div>
</template>

<style scoped>
.cards {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(12rem, 1fr));
  gap: 0.9rem;
}
</style>
