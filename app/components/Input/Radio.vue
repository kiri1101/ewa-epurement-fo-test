<template>
  <RadioButton
    :input-style="{
      '&:checked': {
        color: '#ff0000 !important',
      },
    }"
  />
</template>

<style>
.p-radiobutton.p-variant-filled.p-radiobutton-checked .p-radiobutton-box {
  background: var(--color-red-600) !important;
}

.p-radiobutton.p-variant-filled.p-radiobutton-checked .p-radiobutton-box {
  background: var(--color-red-600) !important;
}

.p-radiobutton-checked .p-radiobutton-box {
  border-color: var(--color-red-500) !important;
}
</style>
