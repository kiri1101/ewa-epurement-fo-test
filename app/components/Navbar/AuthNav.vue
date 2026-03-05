<script setup lang="ts">
defineProps<{
  title: string
}>()
</script>

<template>
  <nav
    class="py-5 px-2 border-b-[1.5px] border-sidebar-bg grid grid-cols-2 items-center w-full"
    aria-label="Dashboard navigation bar"
  >
    <gadget-page-title :label="title" />

    <div class="flex items-center justify-end space-x-2">
      <slot />

      <!-- <button-icon icon="pi pi-bell" />

      <span
        class="rounded-full bg-primary hover:bg-primary-light text-white text-xs p-1.5 cursor-pointer"
      >
        NC
      </span> -->

      <gadget-translate />
    </div>
  </nav>
</template>
