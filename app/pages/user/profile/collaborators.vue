<script setup lang="ts">
import moment from 'moment'

const config = useRuntimeConfig()
const { t, locale } = useI18n()
const assetStore = useAssetStore()
const { $apiFetch } = useNuxtApp() as any
const isLoading = ref(false)
const isListLoading = ref(false)
const isSearching = ref(false)
const showLoader = ref(true)
const showModal = ref(false)
const { e, s } = useNotify()
const validErrorMsg = ref({
  pseudo: '',
  firstName: '',
  lastName: '',
  mailingAddress: '',
  phone: '',
  countryCode: '',
  accounts: '',
})
const accountList = ref<UserAccount[] | any[]>([])
const form = ref<UserCollaboratorForm>({
  pseudo: '',
  firstName: '',
  lastName: '',
  mailingAddress: '',
  phone: '',
  countryCode: '',
  lang: locale.value,
  accounts: {},
})
const collaboratorList = ref()
const searchIndex = ref('')

useHead({
  title: `${t('meta.title.profile.users')} - ${config.public.app.name}`,
  meta: [{ name: 'description', content: 'My design project application.' }],
})

onMounted(() => {
  showLoader.value = assetStore.hasAssets ? false : true
  list()
})

const showManagers = computed(
  () => Object.values(form.value.accounts).length > 0
)

const openModal = () => {
  showModal.value = true
  getAccountList()
}

const closingModal = () => {
  form.value = {
    pseudo: '',
    firstName: '',
    lastName: '',
    mailingAddress: '',
    phone: '',
    countryCode: '',
    lang: locale.value,
    accounts: {},
  }
  showModal.value = false
}

const updateFormPhone = (event: TelInputValidate) => {
  form.value.phone = event.valid ? event.nationalNumber : ''
  form.value.countryCode = event.valid ? event.countryCallingCode : ''
}

const updateRole = (role: string, id: string) => {
  if (form.value.accounts[id]) {
    form.value.accounts[id].role = role
  }
}

const updateBank = (bank: string, id: string) => {
  if (form.value.accounts[id]) {
    form.value.accounts[id].bank = bank
  }
}

const addManager = () => {
  let uuid = crypto.randomUUID()
  form.value.accounts[uuid] = {
    id: uuid,
    role: '',
    bank: '',
  }
}

const removeManager = (id: string) => delete form.value.accounts[id]

const getAccountList = async () => {
  const { apiResponse } = await $apiFetch('/api/profile/accounts')

  if (apiResponse) {
    accountList.value = apiResponse
  }
}

const showSearchLoader = () => (isSearching.value = true)

const hideSearchLoader = () => (isSearching.value = false)

const showSubmitLoader = () => (isLoading.value = true)

const hideSubmitLoader = () => (isLoading.value = false)

const showListLoader = () => (isListLoading.value = true)

const hideListLoader = () => (isListLoading.value = false)

const resetValidMsg = () => {
  validErrorMsg.value = {
    pseudo: '',
    firstName: '',
    lastName: '',
    mailingAddress: '',
    phone: '',
    countryCode: '',
    accounts: '',
  }
}

const searchCollaborator = async () => {
  showSearchLoader()
  try {
    const { apiResponse, validError } = await $apiFetch(
      config.public.api.collaborator.search,
      {
        method: 'POST',
        body: {
          searchIndex: searchIndex.value,
        },
      }
    )

    if (validError) {
      validError.forEach((err: any) => e(err?.message))
    }

    collaboratorList.value = apiResponse
  } catch (error: any) {
    const errorMsg = handleApiError(error)
    if (errorMsg.length > 0) {
      e(errorMsg)
    }
  } finally {
    hideSearchLoader()
  }
}

const list = async () => {
  showListLoader()
  try {
    const { apiResponse, validError } = await $apiFetch(
      config.public.api.managerList,
      {
        method: 'POST',
        body: {
          lang: locale.value,
        },
      }
    )

    collaboratorList.value = apiResponse
  } catch (error: any) {
    const errorMsg = handleApiError(error)
    if (errorMsg.length > 0) {
      e(errorMsg)
    }
  } finally {
    hideListLoader()
  }
}

const submit = async () => {
  resetValidMsg()
  showSubmitLoader()
  try {
    const { apiResponse, validError } = await $apiFetch(
      config.public.api.createManage,
      {
        method: 'POST',
        body: form.value,
      }
    )

    if (validError) {
      validError.forEach((err: any) => {
        validErrorMsg.value[err?.name as keyof typeof validErrorMsg.value] =
          err?.message
      })
    } else {
      resetValidMsg()
    }

    if (apiResponse) {
      s(t('success.collaborator_created'))
      closingModal()
      list()
    }
  } catch (error: any) {
    const errorMsg = handleApiError(error)
    if (errorMsg.length > 0) {
      e(errorMsg)
    }
  } finally {
    hideSubmitLoader()
  }
}
</script>

<template>
  <div class="pb-5">
    <gadget-banner>
      <div class="grid grid-cols-[auto_1fr] h-full">
        <div
          class="grid justify-center ml-2 text-sm text-sidebar-text-primary lg:text-base"
        >
          <div class="ml-5 translate-y-8">
            <h3 class="font-semibold">Users management</h3>

            <h4 class="text-xs">
              Manage system access and user roles across all bank accounts.
            </h4>
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

    <section class="mt-5 space-y-5">
      <div class="flex flex-row space-x-6">
        <div class="flex relative grow">
          <input-search
            v-model="searchIndex"
            identifier="search"
            placeholder="Find a manager"
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
              @click.prevent="searchCollaborator"
            />
          </div>
        </div>

        <div>
          <button-primary
            @click.prevent="openModal"
            label="Add user"
            icon="pi pi-plus-circle"
          />
        </div>
      </div>

      <div>
        <DataTable
          :value="collaboratorList"
          tableStyle="max-width: 50rem;"
          :loading="isListLoading"
          :pt="{
            root: 'text-xs',
            row: {
              headerRow: 'bg-profile',
            },
          }"
        >
          <Column
            header="Name"
            :pt="{
              columnTitle: 'text-xs',
              columnHeaderContent: 'flex justify-center',
            }"
            style="
              border-top-left-radius: var(--radius-lg) !important;
              border-right: 1px solid var(--color-border-brown);
            "
          >
            <template #body="slotProps">
              <div class="text-left w-full">
                {{ slotProps.data.firstName }} {{ slotProps.data.lastName }}
              </div>
            </template>
          </Column>
          <Column
            header="Role"
            :pt="{
              columnTitle: 'text-xs',
              columnHeaderContent: 'flex justify-center',
            }"
            style="border-right: 1px solid var(--color-border-brown)"
          >
            <template #body="slotProps">
              {{ slotProps.data.roles[0] }}
            </template>
          </Column>
          <Column
            header="Created At"
            :pt="{
              columnTitle: 'text-xs',
              headerCell: 'bg-profile',
              columnHeaderContent: 'flex justify-center',
            }"
            style="border-right: 1px solid var(--color-border-brown)"
          >
            <template #body="slotProps">
              {{ moment(slotProps.data.createdAt).format('Do MMM YYYY') }}
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
                        slotProps.data.isActive,
                      'text-input-profile-label border-dark-brown bg-stat-pending-demand':
                        !slotProps.data.isActive,
                    },
                  ]"
                  style="font-size: 0.7rem"
                >
                  <button
                    type="button"
                    class="rounded-full bg-border-green size-1.5"
                  />

                  <span>Active</span>
                </span>
              </div>
            </template>
          </Column>
          <Column
            header="Action"
            style="border-top-right-radius: var(--radius-lg) !important"
          ></Column>

          <template #empty>
            <div
              class="grid items-center h-40 text-border-brown/70 text-center"
            >
              <p class="flex flex-col space-y-1">
                <i class="pi pi-inbox" style="font-size: 2rem" />
                <span class="font-semibold">No data</span>
              </p>
            </div>
          </template>
        </DataTable>
      </div>

      <Dialog
        v-model:visible="showModal"
        modal
        :style="{ width: '32rem' }"
        @hide="closingModal"
      >
        <template #container="{ closeCallback }">
          <div class="p-1 rounded-xl">
            <gadget-banner>
              <div class="grid grid-cols-[auto_1fr]">
                <div
                  class="grid justify-center ml-2 text-sm text-sidebar-text-primary lg:text-base"
                >
                  <div class="ml-5 space-y-1 translate-y-6">
                    <h3 class="font-semibold">Add a new manager</h3>

                    <h4 class="text-xs">
                      Create a new manager with access to your accounts
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

            <form @submit.prevent="submit">
              <div
                class="grid grid-cols-2 gap-2 p-3 space-y-0.5 h-72 overflow-auto"
              >
                <div>
                  <label
                    for="firstName"
                    class="text-xs text-input-profile-label"
                  >
                    Nom
                  </label>

                  <input-bg-normal
                    v-model="form.firstName"
                    identifier="firstName"
                    placeholder="John"
                  />

                  <input-error-msg
                    v-if="validErrorMsg.firstName.trim().length > 0"
                    :label="validErrorMsg.firstName"
                  />
                </div>

                <div>
                  <label
                    for="lastName"
                    class="text-xs text-input-profile-label"
                  >
                    Prénom
                  </label>

                  <input-bg-normal
                    v-model="form.lastName"
                    identifier="lastName"
                    placeholder="Doe"
                  />

                  <input-error-msg
                    v-if="validErrorMsg.lastName.trim().length > 0"
                    :label="validErrorMsg.lastName"
                  />
                </div>

                <div>
                  <label for="pseudo" class="text-xs text-input-profile-label">
                    Pseudo
                  </label>

                  <input-bg-normal
                    v-model="form.pseudo"
                    identifier="pseudo"
                    placeholder="J.Doe"
                  />

                  <input-error-msg
                    v-if="validErrorMsg.pseudo.trim().length > 0"
                    :label="validErrorMsg.pseudo"
                  />
                </div>

                <div>
                  <label for="email" class="text-xs text-input-profile-label">
                    Email
                  </label>

                  <input-group>
                    <input-group-addon pt:root="border-dark-brown">
                      <skeleton
                        v-if="showLoader"
                        width="100%"
                        height="1.125rem"
                      />

                      <img
                        v-else
                        :src="assetStore.list.email_svg"
                        class="object-center object-contain size-4.5"
                        alt="Email Logo Svg"
                      />
                    </input-group-addon>

                    <input-bg-normal
                      type="email"
                      v-model="form.mailingAddress"
                      identifier="email"
                      placeholder="email@gmail.com"
                    />
                  </input-group>

                  <input-error-msg
                    v-if="validErrorMsg.mailingAddress.trim().length > 0"
                    :label="validErrorMsg.mailingAddress"
                  />
                </div>

                <div class="col-span-2">
                  <label for="email" class="text-xs text-input-profile-label">
                    Téléphone
                  </label>

                  <input-phone @validate="updateFormPhone" />

                  <input-error-msg
                    v-if="validErrorMsg.phone.trim().length > 0"
                    :label="validErrorMsg.phone"
                  />
                </div>

                <div class="my-5 space-y-5 col-span-2">
                  <div>
                    <ul class="grid items-center grid-cols-2">
                      <li>
                        <h3 class="text-sm font-bold">Bank account access</h3>
                      </li>
                      <li>
                        <button-primary
                          label="Add an account"
                          icon="pi pi-plus-circle"
                          @click.prevent="addManager"
                        />
                      </li>
                    </ul>

                    <input-error-msg
                      v-if="validErrorMsg.accounts.trim().length > 0"
                      :label="validErrorMsg.accounts"
                    />
                  </div>

                  <div v-if="showManagers" class="space-y-2">
                    <pages-manager-role
                      v-for="acc in Object.values(form.accounts).reverse()"
                      :key="acc.id"
                      :data="accountList"
                      @delete="removeManager(acc.id)"
                      @role="e => updateRole(e, acc.id)"
                      @bank="e => updateBank(e, acc.id)"
                    />
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
                      <p>No bank account has been assigned yet.</p>
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
                  label="Create a user"
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

<style>
.p-inputgroupaddon {
  background: var(--color-input) !important;
  border: 1px solid var(--color-border-dark-brown) !important;
}

.p-datatable-header-cell {
  background: var(--color-sidebar) !important;
}
</style>
