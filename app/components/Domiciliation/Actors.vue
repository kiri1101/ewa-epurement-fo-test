<script setup lang="ts">
defineProps<{
  supplier:
    | {
        name: string
        country: string
        address: string
      }
    | undefined
}>()

const authStore = useAuthStore()
</script>

<template>
  <div class="space-y-5">
    <p class="flex items-center gap-2 text-sm">
      <svg-building class="stroke-accent" />

      <span class="capitalize font-bold">
        {{ $t('page.domiciliation.edit.party_involved') }}
      </span>
    </p>

    <ul class="grid grid-cols-2 gap-5 text-xs">
      <li class="space-y-2 bg-bg-secondary rounded-md p-3">
        <p class="text-text-secondary font-semibold uppercase">
          {{ $t('page.domiciliation.edit.import') }}
        </p>

        <ol class="text-sm">
          <li class="font-bold">
            {{ authStore.state?.firstName }} {{ authStore.state?.lastName }}
          </li>
          <li class="text-text-secondary">
            {{ authStore.state?.regCommerce }}
          </li>
          <li class="text-text-secondary">{{ authStore.state?.address }}</li>
        </ol>
      </li>
      <li v-if="supplier" class="space-y-2 bg-accent-muted rounded-md p-3">
        <p class="text-accent-light font-semibold uppercase">
          {{ $t('page.domiciliation.edit.supplier') }}
        </p>

        <ol class="text-sm">
          <li class="font-bold">{{ supplier?.name }}</li>
          <li class="text-text-secondary">{{ supplier?.country }}</li>
          <li class="text-text-secondary">{{ supplier?.address }}</li>
        </ol>
      </li>

      <skeleton v-else width="100%" height="6.75rem" />
    </ul>
  </div>
</template>
