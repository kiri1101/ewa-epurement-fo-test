<script setup lang="ts">
import { fieldRegistry } from '@/components/registry'

const { fieldKey, schema, model } = defineProps<{
  fieldKey: string
  schema: BuildFormField
  model: any
}>()

const { validationErrors } = inject('validErrors') as any

const component = computed(
  () =>
    fieldRegistry[schema.fieldCate.toLowerCase()][
      schema.fieldType.toLowerCase()
    ],
)

const errorMsg = computed(() => {
  return validationErrors.value?.find(
    (error: ZodValidationError) => error.name === fieldKey,
  )
})

const updateFormPhone = (event: TelInputValidate, fieldKey: string) => {
  model[fieldKey] = event.valid ? event.nationalNumber : ''
  model[`${fieldKey}_code`] = event.valid ? event.countryCallingCode : ''
}
</script>

<template>
  <div>
    <label for="country" class="text-xs text-text-secondary">
      {{ schema.fieldLibc_lang01 }}

      <span
        v-if="Boolean(schema.required)"
        class="text-white font-semibold text-xxs bg-status-error rounded px-1"
      >
        {{ $t('page.beneficiary.required') }}
      </span>
    </label>

    <component
      v-if="schema.fieldCate.toLowerCase() === 'select'"
      :is="component"
      v-model="model[fieldKey]"
      :identifier="schema.fieldCode"
      name-key="option_label"
      :options="schema.listValue"
      :disabled="Boolean(schema.readOnly)"
    />

    <component
      v-else-if="schema.fieldType.toLowerCase() === 'phone_number'"
      :is="component"
      @validate="updateFormPhone($event, fieldKey)"
      :identifier="schema.fieldCode"
      :disabled="Boolean(schema.readOnly)"
    />

    <component
      v-else-if="schema.fieldType.toLowerCase() === 'email'"
      :is="component"
      v-model="model[fieldKey]"
      :identifier="schema.fieldCode"
      :disabled="Boolean(schema.readOnly)"
    />

    <component
      v-else
      :is="component"
      v-model="model[fieldKey]"
      :identifier="schema.fieldCode"
      :disabled="Boolean(schema.readOnly)"
      class="uppercase"
    />

    <input-error-msg v-if="errorMsg" :label="errorMsg.message" />
  </div>
</template>
