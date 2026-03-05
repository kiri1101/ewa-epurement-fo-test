<script setup lang="ts">
definePageMeta({
  layout: 'connected',
  middleware: ['authenticated'],
})

const route = useRoute()
const { getEncrypt } = useEncrypt()
const { e } = useNotify()
const config = useRuntimeConfig()
const { t } = useI18n()
const docUrl = shallowRef('')
const callbackUrl = shallowRef('')

useHead({
  title: `${t('meta.title.doc_viewer.pdf')} - ${config.public.app.name}`,
  meta: [{ name: 'description', content: 'My design project application.' }],
})

const showViewer = computed(() => docUrl.value.length > 0)

const openPdf = async (encodedString: string) => {
  const res = await getEncrypt(encodedString, 'divide')

  if (res.validationErr.length > 0) {
    res.validationErr.forEach((err: any) => e(err?.message))
  }
  if (res.error.length > 0) {
    e(res.error)
  }
  if (res.response && res.response?.url) {
    docUrl.value = res.response?.url
  }
}

onMounted(async () => {
  const b64String = route.query.url as string
  callbackUrl.value = route.query.page
    ? (route.query.page as string)
    : '/dashboard'
  await openPdf(b64String)
})
</script>

<template>
  <div class="h-full">
    <navbar-auth-nav :title="$t('menu.doc_viewer.pdf')" />

    <div
      class="bg-primary text-white text-xs p-2 hover:font-semibold"
      @click="$router.push(callbackUrl)"
    >
      <p class="flex items-center gap-1 cursor-pointer">
        <i class="pi pi-arrow-circle-left" style="font-size: 0.7rem" />

        <span class="hover:underline">back</span>
      </p>
    </div>

    <div>
      <gadget-pdf-viewer v-if="showViewer" :url="docUrl" />
    </div>
  </div>
</template>
