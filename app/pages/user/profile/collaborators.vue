<script setup lang="ts">
import moment from 'moment'

const config = useRuntimeConfig()
const { t, locale } = useI18n()
const bankStore = useBankStore()
const { $apiFetch } = useNuxtApp() as any
const isLoading = ref(false)
const isListLoading = ref(false)
const isSearching = ref(false)
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
const filteredCollaboratorList = ref()
const searchTimeout = ref()
const searchIndex = ref('')

useHead({
  title: `${t('meta.title.profile.users')} - ${config.public.app.name}`,
  meta: [{ name: 'description', content: 'My design project application.' }],
})

onMounted(() => {
  list()
})

const showManagers = computed(
  () => Object.values(form.value.accounts).length > 0,
)

const accountList = computed(() =>
  bankStore.accounts.map((account: AccountModel) => {
    return {
      id: account.uuid,
      agency: account.agency,
      value: account.accRef,
      iban: account.iBan,
      type: account.accType,
    }
  }),
)

const openModal = () => {
  showModal.value = true
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
  filteredCollaboratorList.value = collaboratorList.value.filter(
    (collaborator: any) => {
      return (
        collaborator.firstName
          .trim()
          .toLowerCase()
          .includes(searchIndex.value.trim().toLowerCase()) ||
        collaborator.lastName
          .trim()
          .toLowerCase()
          .includes(searchIndex.value.trim().toLowerCase())
      )
    },
  )
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
      },
    )

    collaboratorList.value = apiResponse
    filteredCollaboratorList.value = apiResponse
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
      },
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

watch(
  () => searchIndex.value,
  newIndex => {
    clearTimeout(searchTimeout.value)

    if (newIndex.trim().length >= 2) {
      searchTimeout.value = setTimeout(() => {
        searchCollaborator()
      }, 500)
    } else {
      filteredCollaboratorList.value = collaboratorList.value
    }
  },
)
</script>

<template>
  <div class="pb-5">
    <gadget-banner>
      <div class="grid grid-cols-[auto_1fr] h-full">
        <div class="grid justify-center ml-2 text-sm text-white lg:text-base">
          <div class="ml-5 translate-y-8">
            <h3 class="font-semibold">
              {{ $t('page.profile.collaborator.title1') }}
            </h3>

            <h4 class="text-xs">
              {{ $t('page.profile.collaborator.title2') }}
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

    <section class="mt-5 space-y-5">
      <div class="flex flex-row space-x-4">
        <gadget-search
          v-model="searchIndex"
          :is-loading="isSearching"
          @search="searchCollaborator"
        />

        <div>
          <button-primary
            @click.prevent="openModal"
            :label="$t('button.add_user')"
            icon="pi pi-plus-circle"
          />
        </div>
      </div>

      <div>
        <DataTable
          :value="filteredCollaboratorList"
          :loading="isListLoading"
          paginator
          :rows="5"
          :rowsPerPageOptions="[5, 10, 20]"
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
            :header="$t('page.profile.collaborator.full_name')"
            :pt="{
              columnTitle: 'text-xs',
              columnHeaderContent: 'flex justify-center',
            }"
          >
            <template #body="slotProps">
              <div class="text-left w-full">
                {{ slotProps.data.firstName }} {{ slotProps.data.lastName }}
              </div>
            </template>
          </Column>
          <Column
            :header="$t('page.profile.collaborator.role')"
            :pt="{
              columnTitle: 'text-xs',
              columnHeaderContent: 'flex justify-center',
            }"
          >
            <template #body="slotProps">
              {{ slotProps.data.roles[0] }}
            </template>
          </Column>
          <Column
            :header="$t('page.profile.collaborator.created_at')"
            :pt="{
              columnTitle: 'text-xs',
              headerCell: 'bg-border-main',
              columnHeaderContent: 'flex justify-center',
            }"
          >
            <template #body="slotProps">
              {{ moment(slotProps.data.createdAt).format('Do MMM YYYY') }}
            </template>
          </Column>
          <Column
            :header="$t('page.profile.collaborator.status')"
            :pt="{
              columnTitle: 'text-xs',
              columnHeaderContent: 'flex justify-center',
            }"
          >
            <template #body="slotProps">
              <div class="flex justify-center">
                <span
                  :class="[
                    'inline-flex items-center justify-self-center rounded-md border px-2.5 py-0.5 space-x-1.5 bg-bg-secondary',
                    {
                      'text-status-success border-status-success ':
                        slotProps.data.isActive,
                      'text-status-error border-status-error':
                        !slotProps.data.isActive,
                    },
                  ]"
                  style="font-size: 0.7rem"
                >
                  <button
                    type="button"
                    class="rounded-full bg-status-success size-1.5"
                  />

                  <span>{{ $t('page.profile.status.active') }}</span>
                </span>
              </div>
            </template>
          </Column>
          <Column :header="$t('page.profile.collaborator.action')"></Column>

          <template #empty>
            <div class="grid items-center h-40 text-text-secondary text-center">
              <p class="flex flex-col space-y-1">
                <i class="pi pi-inbox" style="font-size: 2rem" />
                <span class="font-semibold">
                  {{ $t('table.empty') }}
                </span>
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
                  class="grid justify-center ml-2 text-sm text-white lg:text-base"
                >
                  <div class="ml-5 space-y-1 translate-y-6">
                    <h3 class="font-semibold">
                      {{ $t('page.profile.new.title1') }}
                    </h3>

                    <h4 class="text-xs">
                      {{ $t('page.profile.new.title2') }}
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

            <form @submit.prevent="submit">
              <div
                class="grid grid-cols-2 gap-2 p-3 space-y-0.5 h-72 overflow-auto"
              >
                <div>
                  <label for="firstName" class="text-xs text-text-secondary">
                    {{ $t('page.profile.new.first_name') }}
                  </label>

                  <input-bg-normal
                    v-model="form.firstName"
                    identifier="firstName"
                    placeholder="John"
                    class="uppercase"
                  />

                  <input-error-msg
                    v-if="validErrorMsg.firstName.trim().length > 0"
                    :label="validErrorMsg.firstName"
                  />
                </div>

                <div>
                  <label for="lastName" class="text-xs text-text-secondary">
                    {{ $t('page.profile.new.last_name') }}
                  </label>

                  <input-bg-normal
                    v-model="form.lastName"
                    identifier="lastName"
                    placeholder="Doe"
                    class="uppercase"
                  />

                  <input-error-msg
                    v-if="validErrorMsg.lastName.trim().length > 0"
                    :label="validErrorMsg.lastName"
                  />
                </div>

                <div>
                  <label for="pseudo" class="text-xs text-text-secondary">
                    {{ $t('page.profile.new.pseudo') }}
                  </label>

                  <input-bg-normal
                    v-model="form.pseudo"
                    identifier="pseudo"
                    placeholder="J.Doe"
                    class="uppercase"
                  />

                  <input-error-msg
                    v-if="validErrorMsg.pseudo.trim().length > 0"
                    :label="validErrorMsg.pseudo"
                  />
                </div>

                <div>
                  <label for="email" class="text-xs text-text-secondary">
                    {{ $t('page.profile.new.mailing_address') }}
                  </label>

                  <input-group>
                    <input-group-addon pt:root="border-dark-brown">
                      <img
                        src="/images/email_svg.svg"
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
                  <label for="email" class="text-xs text-text-secondary">
                    {{ $t('page.profile.new.phone') }}
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
                        <h3 class="text-sm font-bold">
                          {{ $t('page.profile.new.accounts') }}
                        </h3>
                      </li>
                      <li>
                        <button-primary
                          :label="$t('button.add_account')"
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
                      @bank="e => updateBank(e.value, acc.id)"
                    />
                  </div>

                  <div
                    v-else
                    class="grid grid-cols-2 border border-dashed rounded-lg bg-bg-secondary border-primary-light h-28"
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
                      <p>{{ $t('page.profile.new.no_accounts') }}</p>
                    </div>
                  </div>
                </div>
              </div>

              <div
                class="grid justify-end grid-flow-col gap-3 p-2 border-t border-primary-light"
              >
                <button-outline
                  :label="$t('button.cancel')"
                  @click.prevent="closeCallback"
                />

                <button-primary
                  type="submit"
                  :label="$t('button.create_user')"
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
  background: var(--color-bg-secondary) !important;
  border: 1px solid var(--color-primary-light) !important;
}
</style>
