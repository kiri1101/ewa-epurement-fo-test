<script setup lang="ts">
defineProps<{
  identifier: string
}>()
</script>

<template>
  <input-otp :name="identifier" variant="filled" :length="6" />
</template>

<style>
.p-inputtext.p-variant-filled {
  background: var(--color-input) !important;
  border-color: var(--color-input-border) !important;
  color: var(--color-gray-900) !important;

  &:focus {
    background: var(--color-input-focus) !important;
    border-color: var(--color-auth-page) !important;
    box-shadow: 0 0 0 0.2rem #00105135 !important;
    color: var(--color-gray-900) !important;
  }
}

.p-inputtext {
  &:enabled:focus {
    border-color: var(--color-auth-page) !important;
  }
}
</style>
