<script lang="ts" setup>
import momenet from 'moment'

defineProps<{
  files:
    | {
        shortLabel: string
        longLabel: string
        createdAt: string
        canEdit: boolean
        url: string
      }[]
    | undefined
}>()
</script>

<template>
  <div class="space-y-5">
    <p class="flex items-center gap-2 text-sm">
      <svg-building class="stroke-accent" />

      <span class="capitalize font-bold">
        {{ $t('page.domiciliation.edit.documents') }}
      </span>
    </p>

    <ul class="space-y-2">
      <li
        v-if="files"
        v-for="file in files"
        class="flex items-center justify-between p-3 border border-border-main rounded-md"
      >
        <div class="flex items-center gap-2 text-sm">
          <svg-building class="bg-bg-secondary p-1 rounded" />

          <p class="flex flex-col">
            <span class="text-xs">{{ file.longLabel }}</span>
            <span class="text-xxs">
              {{ $t('page.domiciliation.edit.created_at') }}
              {{ momenet(file.createdAt).format('DD/MM/YYYY') }}
            </span>
          </p>
        </div>

        <div class="flex items-center gap-2 text-xs">
          <nuxt-link :to="file.url" target="_blank">
            <i
              class="pi pi-download cursor-pointer hover:bg-accent-muted text-accent px-2 py-1.5 rounded-sm"
              style="font-size: 0.8rem"
            />
          </nuxt-link>
        </div>
      </li>

      <skeleton v-else width="100%" height="3.5rem" />
    </ul>
  </div>
</template>
