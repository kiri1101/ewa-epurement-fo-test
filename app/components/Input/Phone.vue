<script setup lang="ts">
import { VueTelInput } from 'vue-tel-input'
import 'vue-tel-input/vue-tel-input.css'

const defaultCountry = 'CM'

const telOption = {
  placeholder: '',
}

const dropDownOptions = {
  showDialCodeInSelection: true,
  showFlags: true,
}
</script>

<template>
  <vue-tel-input
    mode="international"
    :defaultCountry="defaultCountry"
    :inputOptions="telOption"
    :autoDefaultCountry="false"
    :dropdownOptions="dropDownOptions"
    class="text-text-primary text-sm h-9 py-2"
  />
</template>

<style>
.vue-tel-input {
  border: 1px solid var(--color-primary);
  border-radius: 0.4rem;
}

.vue-tel-input:focus-within {
  outline: none;
  background-color: var(--color-bg-secondary) !important;
  box-shadow:
    var(--tw-ring-offset-shadow), var(--tw-ring-shadow),
    var(--tw-shadow, 0 0 #0000);
  --tw-ring-offset-width: 2px;
  --tw-ring-opacity: 1;
  --tw-ring-color: var(--color-ring-focus);
  border: 1px solid var(--color-primary-light);
}

.vti__input {
  border-top-right-radius: 0.5rem;
  border-bottom-right-radius: 0.5rem;
  &:focus {
    outline: none;
    background-color: var(--color-bg-secondary) !important;
    border-width: 1px;
    border-color: var(--color-primary-light);
    --tw-ring-color: var(--color-ring-focus);
  }
}

.vti__dropdown {
  background-color: transparent;
  border-top-left-radius: 0.4rem;
  border-bottom-left-radius: 0.4rem;
  border-right: 1px solid var(--color-border-main);
  z-index: 100;
}

.vti__dropdown:hover {
  background-color: transparent;
  border-top-left-radius: 0.4rem;
  border-bottom-left-radius: 0.4rem;
}

.vti__dropdown.open {
  background-color: transparent;
}

.vti__selection .vti__country-code {
  color: var(--color-text-primary);
}
</style>
