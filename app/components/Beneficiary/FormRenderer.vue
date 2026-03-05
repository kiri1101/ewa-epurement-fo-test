<script setup lang="ts">
const { schema } = defineProps<{
  schema: BuildFormResponse
}>()

const { $apiFetch } = useNuxtApp() as any
const { e, s } = useNotify()
const { t, locale } = useI18n()
const config = useRuntimeConfig()
const model = useCreateBenefModel(schema.formSectionList)
const isLoading = ref(false)
const validationErrors = ref<Record<string, string> | null>(null)
const numFiles = shallowRef(0)
const uploadedFiles = shallowRef(0)

provide('validErrors', { validationErrors })

const deleteFile = (uuid: string) => {
  const { [uuid]: _, ...rest } = model.files
  model.files = rest
  uploadedFiles.value--
}

const incrementUploadedFiles = () => {
  uploadedFiles.value++
}

const setFilesNum = (num: number) => {
  numFiles.value = num
}

const submit = async () => {
  isLoading.value = true

  if (numFiles.value !== uploadedFiles.value) {
    e(t('validation.files_required'))
    return
  }

  try {
    let data = { ...model, lang: locale.value }

    const { apiResponse, validError } = await $apiFetch(
      config.public.api.beneficiary.create,
      {
        method: 'POST',
        body: data,
      },
    )

    if (validError) {
      e(t('validation.fill_all_required_fields'))
      validationErrors.value = validError
    } else {
      s(apiResponse.message)
      return navigateTo('/beneficiary/list')
    }
  } catch (error: any) {
    const errorMsg = handleApiError(error)
    if (errorMsg.length > 0) {
      e(errorMsg)
    }
  } finally {
    isLoading.value = false
  }
}
</script>

<template>
  <form @submit.prevent="submit" class="pb-5">
    <custom-title :label="schema.apShortLabel_lang01" />

    <beneficiary-form-layout-renderer
      :layout="schema.formSectionList"
      :model="model"
    />

    <beneficiary-form-file-upload
      :model="model"
      :person="model.benefType"
      @delete:file="deleteFile"
      @num:files="setFilesNum"
      @uploaded="incrementUploadedFiles"
    />

    <div
      class="grid justify-end grid-flow-col gap-3 mt-3 p-2 border-t border-border-main"
    >
      <button-outline
        :label="$t('button.cancel')"
        @click.prevent="navigateTo('/beneficiary/list')"
      />

      <button-primary
        type="submit"
        :loading="isLoading"
        :label="$t('button.create_benef')"
      />
    </div>
  </form>
</template>
