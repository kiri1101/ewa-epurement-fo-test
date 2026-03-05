<script setup lang="ts">
const { model, person } = defineProps<{
  model: Record<string, any>
  person: 'morale' | 'physique' | null
}>()

const emit = defineEmits(['delete:file', 'num:files', 'uploaded'])

const { validationErrors } = inject('validErrors') as any

const { getBenefSettings } = useBeneficiaries()
const files = ref({
  morale: [] as BeneficiaryFile[],
  physique: [] as BeneficiaryFile[],
})
const chosenFiles = ref<BeneficiaryFile[]>([])

onMounted(() => {
  getSettings()
})

const errorMsg = computed(() => {
  return validationErrors.value?.find(
    (error: ZodValidationError) => error.name === 'files',
  )
})

const getSettings = async () => {
  const res = await getBenefSettings()

  if (res.response) {
    files.value.morale = res.response.files.company
    files.value.physique = res.response.files.individual
  }
}

const setUploadedFile = (uuid: string, fileId: string) => {
  model.files[uuid] = fileId
  emit('uploaded', true)
}

const clearFile = (uuid: string) => {
  emit('delete:file', uuid)
}

watch(
  () => person,
  newPerson => {
    if (newPerson) {
      let type = newPerson.toLowerCase() as 'morale' | 'physique'
      chosenFiles.value = files.value[type]
      emit('num:files', files.value[type].length)
    }
  },
  { immediate: true },
)
</script>

<template>
  <div class="space-y-3 mt-5">
    <input-error-msg v-if="errorMsg" :label="errorMsg.message" />

    <div
      v-if="chosenFiles.length > 0"
      v-for="file in chosenFiles"
      :key="file?.insertId"
      class="space-y-1 mt-2"
    >
      <div class="flex items-center space-x-1">
        <div class="flex items-center space-x-2">
          <p class="text-xs font-bold">{{ file.title }}</p>

          <span
            v-if="file.required"
            class="text-white font-semibold text-xxs bg-status-error rounded px-1"
          >
            {{ $t('page.beneficiary.required') }}
          </span>
        </div>

        <i
          v-tooltip.top="file.tooltip"
          class="pi pi-info-circle cursor-pointer"
          style="font-size: 0.8rem"
        />
      </div>

      <input-file-upload
        :identifier="file.insertId"
        :type="file.insertId"
        :category="file.category"
        @update-file="(e: string) => setUploadedFile(file.insertId, e)"
        @removefile="clearFile(file.insertId)"
      />
    </div>

    <div
      v-else
      class="grid grid-cols-2 border border-dashed rounded-lg bg-bg-secondary border-primary h-28"
    >
      <div class="grid items-center justify-center">
        <img
          src="/images/greek_house_svg.svg"
          class="object-contain object-center size-12"
          alt="New manager Logo Svg"
        />
      </div>

      <div class="flex items-center justify-start p-4 text-sm text-right">
        <p>{{ $t('page.beneficiary.no_file') }}</p>
      </div>
    </div>
  </div>
</template>
