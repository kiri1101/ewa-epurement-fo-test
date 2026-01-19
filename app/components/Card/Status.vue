<script setup lang="ts">
const { status } = defineProps<{
  status: 'active' | 'block' | 'archive'
}>()

onMounted(() => setLabel())

const { t } = useI18n()
const label = ref('')

const setLabel = () => {
  let output
  switch (status) {
    case 'active':
      output = t('page.beneficiary.status.active')
      break;
    case 'block':
      output = t('page.beneficiary.status.block')
      break;
    case 'archive':
      output = t('page.beneficiary.status.archive')
      break;

    default:
      output = ''
      break;
  }
  label.value = output
}
</script>

<template>
  <span :class="[
    'font-semibold px-5 py-1 rounded-full text-[0.6rem]',
    { 'bg-stat-total-demand text-sidebar-text-active': status === 'active' },
    { 'bg-red-beneficiary-status text-red-beneficiary-status-text': status === 'block' },
    { 'bg-gray-beneficiary-status gray-beneficiary-status-text': status === 'archive' }
  ]">
    {{ label }}
  </span>
</template>