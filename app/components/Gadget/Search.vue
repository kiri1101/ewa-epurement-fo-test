<script setup lang="ts">
const { modelValue, isLoading = false } = defineProps<{
  modelValue: string
  isLoading: boolean
}>()

const emit = defineEmits(['update:modelValue', 'search'])

const searchIndex = computed({
  get: () => modelValue,
  set: (value: string) => emit('update:modelValue', value),
})
</script>

<template>
  <div class="flex relative grow">
    <input-search
      v-model="searchIndex"
      identifier="search"
      :placeholder="$t('placeholder.find_transfer')"
    />

    <div
      class="flex items-center space-x-1 absolute right-0 z-50 -translate-x-1 translate-y-[0.17rem]"
    >
      <i v-if="isLoading" class="pi pi-spinner text-accent animate-spin" />

      <i
        class="pi pi-search p-2 bg-accent hover:bg-accent-light text-white rounded-full cursor-pointer"
        style="font-size: 0.9rem"
        @click.prevent="$emit('search', true)"
      />
    </div>
  </div>
</template>
