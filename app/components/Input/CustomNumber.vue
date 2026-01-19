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
    input-class="h-9 px-4 py-2 w-full bg-input shadow border border-border-dark-brown text-input-focus-text peer"
    :input-style="{
      'font-size': '0.875rem',
      'line-height': '1.25rem',
      'border-color': 'var(--color-border-dark-brown) !important',
      color: 'var(--color-input-focus-text) !important',
      '&:focus': {
        'background-color': 'var(--color-input-focus) !important;',
        'border-color': 'var(--color-border-brown) !important;',
        'box-shadow': '0 0 0 0.2rem var(--color-border-focus-brown) !important',
        color: 'var(--color-input-focus-text) !important',
      },
    }"
  />
</template>

<style scoped>
.p-inputtext:disabled {
  background: var(--color-input-disabled) !important;
  color: var(--color-input-disabled-text) !important;
}
</style>
