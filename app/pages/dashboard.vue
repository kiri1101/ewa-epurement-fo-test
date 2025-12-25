<script setup lang="ts">
const config = useRuntimeConfig()
const { t } = useI18n()

useHead({
  title: `${t('meta.title.dashboard')} - ${config.public.app.name}`,
  meta: [{ name: 'description', content: 'My design project application.' }],
})

definePageMeta({
  layout: 'connected',
})
</script>

<template>
  <div>dashboard</div>
</template>
