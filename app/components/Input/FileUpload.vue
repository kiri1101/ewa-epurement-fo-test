<script setup lang="ts">
import vueFilePond from 'vue-filepond'
import { setOptions } from 'filepond'
import 'filepond/dist/filepond.min.css'
import 'filepond-plugin-image-preview/dist/filepond-plugin-image-preview.min.css'
import FilePondPluginFileValidateType from 'filepond-plugin-file-validate-type'
import FilePondPluginImagePreview from 'filepond-plugin-image-preview'
import FilePondPluginFileValidateSize from 'filepond-plugin-file-validate-size'

const FilePond = vueFilePond(
  FilePondPluginFileValidateType,
  FilePondPluginImagePreview,
  FilePondPluginFileValidateSize
)

const { identifier, category, type } = defineProps<{
  identifier: string
  category: string
  type: string
}>()

const emit = defineEmits(['updateFile'])

const config = useRuntimeConfig()
const myFiles = ref([])
const { t } = useI18n()
const { s, e } = useNotify()
const authStore = useAuthStore()
const snapshot = authStore.getUserSnapShot()

const fileUploaded = (jsonResp: string) => {
  const response = JSON.parse(jsonResp)

  if (String(response.pesake.code).length > 0) {
    e(response.pesake.details.pesakeDetail)
  } else {
    s(t('success.file_uploaded'))
    emit('updateFile', response.data.fileId)
  }

  return 'okay'
}

const handleFilePondInit = () => {
  const uploadPath = `${config.public.fileUrl}${config.public.api.fileUpload}`
  setOptions({
    server: {
      process: {
        url: uploadPath,
        method: 'POST',
        headers: {
          Authorization: `Bearer ${snapshot?.token.bearer}`,
        },
        onload: fileUploaded,
        ondata: formData => {
          const files = formData.getAll('file')
          formData.delete('file')
          files.forEach(file => {
            if (file instanceof Blob) {
              formData.append('file', file)
            }
          })

          formData.append('docType', type)
          formData.append('category', category)
          formData.append('origin', config.public.origin.toUpperCase())
          return formData
        },
        onerror: errors => {
          e(JSON.parse(errors).message.error[0])
        },
      },
    },
  })
}
</script>

<template>
  <file-pond
    name="file"
    :ref="`pond-${identifier}`"
    label-idle="Drop file here..."
    v-bind:allow-multiple="false"
    v-bind:files="myFiles"
    v-on:init="handleFilePondInit"
    min-file-size="0.1MB"
    max-file-size="5MB"
    :accepted-file-types="['image/*', 'application/pdf']"
  />
</template>
