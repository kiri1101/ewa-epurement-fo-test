<script setup lang="ts">
defineProps<{
  title: string
}>()
</script>

<template>
  <nav
    class="py-5 px-2 border-b-[1.5px] border-dashboard-nav grid grid-cols-2 items-center w-full"
    aria-label="Dashboard navigation bar"
  >
    <gadget-page-title :label="title" />

    <div class="flex items-center justify-end space-x-2">
      <slot />

      <button-icon icon="pi pi-bell" />

      <span
        class="rounded-full bg-button-dashboard-profile hover:bg-button-dashboard-profile/85 text-button-main-label text-xs p-1.5 cursor-pointer"
      >
        NC
      </span>
    </div>
  </nav>
</template>
