<script setup lang="ts">
const { t } = useI18n()

const { type = 'text', placeholder = '' } = defineProps<{
  identifier: string
  type?: string
  placeholder?: string
}>()

const pt = {
  root: {
    class:
      'w-full px-4 py-2 rounded-md h-9 focus:border-auth-input-border-focus placeholder-input-placeholder focus:outline-none focus:ring-2 focus:ring-auth-input-ring peer',
    style: 'font-size: 0.875rem; line-height: 1.25rem;',
  },
}
</script>

<template>
  <InputText
    :id="identifier"
    :name="identifier"
    :type="type"
    :pt="pt"
    :placeholder="placeholder"
    autocomplete="off"
  />
</template>

<style>
.p-inputtext.p-variant-filled {
  background-color: var(--color-input) !important;
  border-color: var(--color-input-border) !important;
  color: var(--color-input-text) !important;

  &:focus {
    background-color: var(--color-input-focus) !important;
    border-color: var(--color-input-border-focus) !important;
    box-shadow: 0 0 0 0.2rem var(--color-input-focus-ring) !important;
    color: var(--color-input-focus-text) !important;
  }
}
</style>
