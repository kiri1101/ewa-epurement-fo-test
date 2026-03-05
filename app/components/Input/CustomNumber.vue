<script setup lang="ts">
const { placeholder = '' } = defineProps<{
  identifier: string
  placeholder?: string
}>()
</script>

<template>
  <InputNumber
    :id="identifier"
    :name="identifier"
    :placeholder="placeholder"
    autocomplete="off"
    :minFractionDigits="2"
    inputId="integeronly"
    fluid
    input-class="h-9 px-4 py-2 w-full bg-bg-main shadow border border-primary-light text-text-primary peer"
    :input-style="{
      'font-size': '0.875rem',
      'line-height': '1.25rem',
      'background-color': 'var(--color-bg-main) !important',
      'border-color': 'var(--color-primary-light) !important',
      color: 'var(--color-text-primary) !important',
      '&:focus': {
        'background-color': 'var(--color-bg-secondary) !important;',
        'border-color': 'var(--color-primary-light) !important;',
        'box-shadow': '0 0 0 0.2rem var(--color-ring-focus) !important',
        color: 'var(--color-text-primary) !important',
      },
    }"
  />
</template>

<style>
.p-inputtext:disabled {
  background: var(--color-bg-secondary) !important;
  color: var(--color-text-muted) !important;
}
</style>
