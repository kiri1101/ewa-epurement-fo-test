<script setup lang="ts">
const props = defineProps<{
  layout: BuildFormSection[]
  model: any
}>()

const getColClass = (
  d: BuildFormSection['fields'][number]['fieldDisposition'],
) => {
  return [
    `col-span-${d.extraSmall}`,
    `sm:col-span-${d.small}`,
    `md:col-span-${d.medium}`,
    `lg:col-span-${d.large}`,
    `xl:col-span-${d.extraLarge}`,
  ].join(' ')
}
</script>

<template>
  <div>
    <template v-for="block in layout" :key="block.sectCode">
      <div class="grid grid-cols-12 gap-4">
        <div
          v-for="(field, i) in block.fields"
          :key="i"
          :class="getColClass(field.fieldDisposition)"
        >
          <beneficiary-form-field-renderer
            :field-key="field.fieldCode"
            :schema="field"
            :model="model"
          />
        </div>
      </div>
    </template>
  </div>
</template>
