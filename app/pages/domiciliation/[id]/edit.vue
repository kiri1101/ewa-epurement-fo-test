<script setup lang="ts">
definePageMeta({
  layout: 'connected',
  middleware: ['authenticated'],
})

const route = useRoute()
const config = useRuntimeConfig()
const { t, locale } = useI18n()
const { $apiFetch } = useNuxtApp() as any
const { e } = useNotify()

useHead({
  title: `${t('meta.title.domiciliation.view')} - ${config.public.app.name}`,
  meta: [{ name: 'description', content: 'My design project application.' }],
})

onMounted(() => {
  getDomiciliation()
})

const isLoading = ref(false)
const domiciliation = ref<{
  supplier: {
    name: string
    country: string
    address: string
  }
  infos: {
    designation: string
    office: string
    quantity: string
    fob: string
    caf: string
    reference: string
    paymentDeadline: string
    currency: string
    customInfos: string
    chapter: string
    description: string
    amount: string
    type: string
  }
  files: {
    shortLabel: string
    longLabel: string
    createdAt: string
    canEdit: boolean
    url: string
  }[]
  history: []
}>()

const showingLoader = () => (isLoading.value = true)

const hidingLoader = () => (isLoading.value = false)

const getDomiciliation = async () => {
  showingLoader()
  try {
    const { apiResponse, validError } = await $apiFetch(
      config.public.api.domiciliation.byId,
      {
        method: 'POST',
        body: {
          lang: locale.value,
          id: route.params.id,
        },
      },
    )

    if (validError) {
      validError.forEach((err: any) => e(err?.message))
    }

    domiciliation.value = apiResponse
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
  <div class="pb-5 text-text-primary space-y-5">
    <navbar-auth-nav :title="$t('menu.domiciliation.view')" />

    <gadget-banner>
      <div class="grid grid-cols-[auto_1fr] h-full">
        <div class="grid justify-center ml-2 text-sm text-white lg:text-base">
          <div class="ml-5 translate-y-8">
            <h3 class="font-semibold">
              {{ $t('page.domiciliation.edit.title1') }}
            </h3>

            <h4 class="text-xs">
              {{ $t('page.domiciliation.edit.title2') }}
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

    <div class="grid grid-cols-[1fr_auto] gap-4">
      <div class="space-y-7">
        <domiciliation-actors :supplier="domiciliation?.supplier" />

        <domiciliation-operation :infos="domiciliation?.infos" />

        <domiciliation-files :files="domiciliation?.files" />
      </div>

      <div></div>
    </div>
  </div>
</template>
