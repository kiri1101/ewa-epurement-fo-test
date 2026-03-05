<script setup lang="ts">
definePageMeta({
  layout: 'connected',
  middleware: ['authenticated'],
})

const config = useRuntimeConfig()
const { t } = useI18n()

useHead({
  title: `${t('meta.title.beneficiary.show')} - ${config.public.app.name}`,
  meta: [{ name: 'description', content: 'My design project application.' }],
})

const isSearching = shallowRef(false)
const searchIndex = shallowRef('')
const { e, s } = useNotify()
const searchTimeout = shallowRef()
const BeneficiaryList = ref<BeneficiaryData[]>([])
const SearchList = ref<BeneficiaryData[]>([])
const { getBeneficiaries, deleteBenef } = useBeneficiaries()
const { isDeletingBenef, isBenefLoading } = storeToRefs(useLoadingStore())
const showConfirmationModal = shallowRef(false)
const beneficiaryCode = shallowRef('')

const openConfirmationModal = (code: string) => {
  beneficiaryCode.value = code
  showConfirmationModal.value = true
}

const closingConfirmationModal = (callback: Function | null = null) => {
  beneficiaryCode.value = ''
  showConfirmationModal.value = false
  if (callback) {
    callback()
  }
}

const beneficiaries = async () => {
  const res = await getBeneficiaries()

  if (res.validationErr.length > 0) {
    res.validationErr.forEach((err: any) => e(err?.message))
  }
  if (res.error.length > 0) {
    e(res.error)
  }
  if (res.response) {
    BeneficiaryList.value = res.response
    SearchList.value = res.response
  }
}

const deletingBenef = async (code: string) => {
  const res = await deleteBenef(code)

  if (res.validationErr.length > 0) {
    res.validationErr.forEach((err: any) => e(err?.message))
  }
  if (res.error.length > 0) {
    e(res.error)
  }
  if (res.response) {
    closingConfirmationModal()
    s(res.response)
    beneficiaries()
  }
}

const search = async () => {
  if (searchIndex.value.length > 0) {
    const res = SearchList.value.filter((beneficiary: any) => {
      return (
        beneficiary.fullName
          .toLowerCase()
          .includes(searchIndex.value.toLowerCase()) ||
        beneficiary.bankName
          .toLowerCase()
          .includes(searchIndex.value.toLowerCase()) ||
        beneficiary.country
          .toLowerCase()
          .includes(searchIndex.value.toLowerCase()) ||
        beneficiary.iban
          .toLowerCase()
          .includes(searchIndex.value.toLowerCase()) ||
        beneficiary.status
          .toLowerCase()
          .includes(searchIndex.value.toLowerCase()) ||
        beneficiary.address
          .toLowerCase()
          .includes(searchIndex.value.toLowerCase())
      )
    })

    SearchList.value = res.length > 0 ? res : BeneficiaryList.value
  }
}

const editBeneficiary = (code: string) => {
  return navigateTo(`/beneficiary/${code}/edit`)
}

onMounted(() => {
  beneficiaries()
})

watch(
  () => searchIndex.value,
  newIndex => {
    clearTimeout(searchTimeout.value)

    if (newIndex.trim().length >= 2) {
      searchTimeout.value = setTimeout(() => {
        search()
      }, 500)
    } else {
      SearchList.value = BeneficiaryList.value
    }
  },
)
</script>

<template>
  <div class="text-text-primary space-y-5">
    <navbar-auth-nav :title="$t('menu.beneficiary.show')">
      <nuxt-link to="/beneficiary/create" class="max-w-xs">
        <button-primary
          :label="$t('button.new_beneficiary')"
          icon="pi pi-plus-circle"
        />
      </nuxt-link>
    </navbar-auth-nav>

    <gadget-banner>
      <div class="grid grid-cols-[auto_1fr] h-full">
        <div class="grid justify-center ml-2 text-sm text-white lg:text-base">
          <div class="ml-5 translate-y-8">
            <h3 class="font-semibold">{{ $t('menu.beneficiary.show') }}</h3>

            <h4 class="text-xs">
              {{ $t('page.beneficiary.title') }}
            </h4>
          </div>
        </div>

        <div class="flex justify-end">
          <gadget-image-blur>
            <img
              src="/images/beneficiaries.png"
              class="z-30 object-cover object-center w-auto h-22"
              alt="Bank Logo"
            />
          </gadget-image-blur>
        </div>
      </div>
    </gadget-banner>

    <section class="mt-5 space-y-5">
      <div class="flex flex-row space-x-6 w-full">
        <gadget-search
          v-model="searchIndex"
          :is-loading="isSearching"
          @search="search"
        />

        <div />
      </div>

      <div class="cards text-xs">
        <div v-if="isBenefLoading" v-for="i in 10" :key="i" class="cards">
          <skeleton width="100%" height="12rem" />
        </div>

        <template v-else>
          <card-active-skeleton
            v-if="SearchList.length > 0"
            v-for="beneficiary in SearchList"
            :key="beneficiary.code"
            reverse-gradient
            class="min-h-52"
          >
            <div class="flex items-center space-x-2">
              <div
                class="inline-flex p-2.5 rounded-full bg-bg-main border border-border-main"
              >
                <svg-profile-pic class="size-3" />
              </div>

              <h3>{{ beneficiary.fullName }}</h3>
            </div>

            <ul class="mt-2 space-y-1">
              <li class="flex space-x-1">
                <span>{{ $t('page.beneficiary.card.country') }}:</span>
                <span class="font-semibold">
                  {{ beneficiary.country }}
                </span>
              </li>
              <li class="flex space-x-1">
                <span>{{ $t('page.beneficiary.card.bank') }}:</span>
                <p class="font-semibold line-clamp-1">
                  {{ beneficiary.bankName }}
                </p>
              </li>
              <li class="flex space-x-1">
                <span>{{ $t('page.beneficiary.card.iban') }}:</span>
                <span class="font-semibold">
                  XXXXX{{ beneficiary.iban.slice(-5) }}
                </span>
              </li>
            </ul>

            <div class="mt-4 flex justify-between items-center">
              <span>{{ $t('page.beneficiary.card.status') }}:</span>
            </div>

            <div
              class="border-t border-border-main mt-2 pt-3 flex self-end justify-between items-center"
            >
              <button
                @click.prevent="editBeneficiary(beneficiary.code)"
                type="button"
                class="h-6.5 px-3.5 space-x-1 border bg-transparent hover:bg-accent hover:text-white border-accent text-accent rounded-md font-semibold cursor-pointer transition duration-200 ease-linear"
              >
                <i
                  class="pi pi-pen-to-square"
                  style="font-size: 0.7rem; font-weight: 500"
                />

                <span>{{ $t('page.beneficiary.card.edit') }}</span>
              </button>

              <div class="flex space-x-0.5 items-center">
                <button-icon
                  icon="pi pi-trash"
                  @click="openConfirmationModal(beneficiary.code)"
                />
              </div>
            </div>
          </card-active-skeleton>
        </template>
      </div>

      <gadget-no-data v-if="!isBenefLoading && SearchList.length === 0" />
    </section>

    <Dialog
      v-model:visible="showConfirmationModal"
      modal
      :style="{ width: '22rem' }"
    >
      <template #container="{ closeCallback }">
        <div class="p-2 rounded-xl space-y-5 border-2 border-gray-500">
          <p class="text-center font-bold text-xl">
            {{ $t('page.beneficiary.delete.modal_title') }}
          </p>

          <p class="text-sm text-center">
            {{ $t('page.beneficiary.delete.modal_message') }}
          </p>

          <div
            class="grid justify-end grid-flow-col gap-3 border-t border-gray-300 pt-2"
          >
            <button-outline
              :label="$t('page.beneficiary.delete.cancel')"
              @click.prevent="closingConfirmationModal(closeCallback)"
            />

            <button-primary
              type="button"
              :label="$t('page.beneficiary.delete.confirm')"
              :loading="isDeletingBenef"
              @click="deletingBenef(beneficiaryCode)"
            />
          </div>
        </div>
      </template>
    </Dialog>
  </div>
</template>

<style scoped>
.cards {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(12rem, 1fr));
  gap: 0.9rem;
}
</style>
