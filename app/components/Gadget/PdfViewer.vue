<script setup lang="ts">
defineProps<{
  url: string
}>()
</script>

<template>
  <embed
    :src="url"
    type="application/pdf"
    height="768px"
    width="100%"
    title="PDF Viewer"
  />
</template>
