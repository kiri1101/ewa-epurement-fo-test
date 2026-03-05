<script setup lang="ts">
import FilePondPluginFileValidateType from 'filepond-plugin-file-validate-type'
import FilePondPluginFileValidateSize from 'filepond-plugin-file-validate-size'

const emit = defineEmits(['updateFile'])
const { $filePond } = useNuxtApp() as any

const FilePond = $filePond(
  FilePondPluginFileValidateType,
  FilePondPluginFileValidateSize,
)

const { category, type, demandId } = defineProps<{
  category: string
  type: string
  demandId?: string
}>()

const config = useRuntimeConfig()
const myFiles = ref([])
const { t } = useI18n()
const { s, e } = useNotify()
const authStore = useAuthStore()
const snapshot = authStore.getUserSnapShot()

const fileUploaded = (jsonResp: string) => {
  const response = JSON.parse(jsonResp)

  if (response.pesake?.code) {
    const message = response.pesake.details?.pesakeDetail ?? t('error.unknown')
    e(message)
    throw new Error(message)
  }

  s(t('success.file_uploaded'))
  emit('updateFile', response.data.fileId)
  return response.data.fileId
}

const handleFilePondInit = async () => {
  const authStoreRef = useCookie<{ state: AuthData }>('authUser')

  if (!authStoreRef.value) {
    navigateTo(config.public.page.login)
  }
}

const serverOptions = computed(() => {
  const uploadPath = `${config.public.fileUrl}${config.public.api.fileUpload}`
  return {
    process: {
      url: uploadPath,
      method: 'POST',
      headers: {
        Authorization: `Bearer ${snapshot?.token.bearer}`,
      },
      onload: fileUploaded,
      ondata: (formData: any) => {
        const files = formData.getAll('file')
        formData.delete('file')
        files.forEach((file: any) => {
          if (file instanceof Blob) {
            formData.append('file', file)
          }
        })

        if (demandId) {
          formData.append('dmdeSlug', demandId)
        }

        formData.append('docType', type)
        formData.append('category', category)
        formData.append('origin', config.public.origin.toUpperCase())
        return formData
      },
      onerror: (rawResponse: any) => {
        try {
          const parsed = JSON.parse(rawResponse)

          if (parsed.pesake?.code) {
            e(parsed.pesake.details?.pesakeDetail ?? t('error.unknown'))
          } else if (parsed.message?.error?.[0]) {
            e(parsed.message.error[0])
          } else {
            e(t('error.unknown'))
          }
        } catch {
          e(t('error.unknown'))
        }
      },
    },
  }
})
</script>

<template>
  <file-pond
    name="file"
    ref="pond"
    :label-idle="$t('placeholder.upload')"
    v-bind:allow-multiple="false"
    v-bind:files="myFiles"
    v-on:init="handleFilePondInit"
    :server="serverOptions"
    min-file-size="0.1MB"
    max-file-size="5MB"
    :accepted-file-types="['application/pdf', 'image/*']"
  />
</template>

<style>
.filepond--drop-label {
  font-size: 0.9rem !important;
}
.filepond--credits {
  display: none !important;
}
</style>
