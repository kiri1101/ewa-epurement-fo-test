<script setup lang="ts">
const config = useRuntimeConfig()
const { t } = useI18n()
const assetStore = useAssetStore()
const auth = useAuthStore()
const { $apiFetch } = useNuxtApp() as any
const showLoader = ref(true)
const showModal = ref(false)
const accountList = ref<UserAccount[] | any[]>([])
const form = ref<{
  pseudo: string
  name: string
  mailingAddress: string
  phone: string
  accounts: {
    [key: string]: {
      id: string
      role: string
      bank: string
    }
  }
}>({
  pseudo: '',
  name: '',
  mailingAddress: '',
  phone: '',
  accounts: {},
})

useHead({
  title: `${t('meta.title.profile.users')} - ${config.public.app.name}`,
  meta: [{ name: 'description', content: 'My design project application.' }],
})

onMounted(() => {
  showLoader.value = assetStore.hasAssets ? false : true
})

const showManagers = computed(
  () => Object.values(form.value.accounts).length > 0
)

const openModal = () => {
  showModal.value = true
  getAccountList()
}

const closingModal = () => (form.value.accounts = {})

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
</script>

<template>
  <div>
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
        <div class="relative grow">
          <input-search identifier="search" placeholder="Find a manager" />

          <i
            class="absolute right-0 z-50 -translate-x-1 translate-y-[0.17rem] pi pi-search p-2 bg-button-main hover:bg-button-main-hover text-input-text rounded-full cursor-pointer"
            style="font-size: 0.9rem"
          />
        </div>

        <div>
          <button-primary
            @click.prevent="openModal"
            label="Add user"
            icon="pi pi-plus-circle"
          />
        </div>
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

            <form>
              <div
                class="grid grid-cols-2 gap-2 p-3 space-y-0.5 h-96 overflow-auto"
              >
                <div class="col-span-2">
                  <label for="pseudo" class="text-xs text-input-profile-label">
                    Pseudo
                  </label>

                  <input-bg-normal
                    v-model="form.pseudo"
                    identifier="pseudo"
                    placeholder="J.Doe"
                  />
                </div>

                <div class="col-span-2">
                  <label for="name" class="text-xs text-input-profile-label">
                    Nom et prénom
                  </label>

                  <input-bg-normal
                    v-model="form.name"
                    identifier="name"
                    placeholder="J.Doe"
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
                </div>

                <div>
                  <label for="email" class="text-xs text-input-profile-label">
                    Téléphone
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
                        :src="assetStore.list.phone_svg"
                        class="object-center object-contain size-4.5"
                        alt="Email Logo Svg"
                      />
                    </input-group-addon>

                    <input-bg-normal
                      v-model="form.phone"
                      identifier="phone"
                      placeholder="+237 6 90 00 00 00 00"
                    />
                  </input-group>
                </div>

                <div class="col-span-2 my-5 space-y-5">
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

                  <div v-if="showManagers" class="space-y-2">
                    <pages-manager-role
                      v-for="acc in Object.values(form.accounts)"
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

              <div class="grid justify-end grid-flow-col gap-3 py-2">
                <button-outline label="Cancel" @click.prevent="closeCallback" />

                <button-primary label="Create a user" />
              </div>
            </form>
          </div>
        </template>
      </Dialog>
    </section>
  </div>
</template>

<style scoped>
.p-inputgroupaddon {
  background: var(--color-input) !important;
  border: 1px solid var(--color-border-dark-brown) !important;
}
</style>
