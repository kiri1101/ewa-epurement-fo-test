<script setup lang="ts">
import moment from 'moment'

defineProps<{
  infos:
    | {
        designation: string
        office: string
        quantity: number | string
        fob: number | string
        caf: number | string
        reference: string
        paymentDeadline: string
        currency: string
        customInfos: string
        chapter: string
        description: string
        amount: string
        type: string
      }
    | undefined
}>()
</script>

<template>
  <div class="space-y-5 bg-bg-secondary p-5 rounded-lg">
    <p class="flex items-center gap-2 text-sm">
      <svg-building class="stroke-accent" />

      <span class="capitalize font-bold">
        {{ $t('page.domiciliation.edit.operation_details') }}
      </span>
    </p>

    <ul v-if="infos" class="grid grid-cols-2 gap-3 text-sm">
      <li>
        <p class="text-xs text-text-secondary">
          {{ $t('page.domiciliation.edit.designation') }}
        </p>

        <p>{{ infos?.designation }}</p>
      </li>
      <li v-if="infos?.type.toLowerCase().endsWith('bien')">
        <p class="text-xs text-text-secondary">
          {{ $t('page.domiciliation.edit.qty') }}
        </p>

        <p>{{ infos?.quantity }}</p>
      </li>
      <li v-if="infos?.type.toLowerCase().endsWith('bien')">
        <p class="text-xs text-text-secondary">
          {{ $t('page.domiciliation.edit.office') }}
        </p>

        <p>{{ infos?.office }}</p>
      </li>
      <li>
        <p class="text-xs text-text-secondary">
          {{ $t('page.domiciliation.edit.reference') }}
        </p>

        <p>{{ infos?.reference }}</p>
      </li>
      <li v-if="infos?.type.toLowerCase().endsWith('bien')">
        <p class="text-xs text-text-secondary">
          {{ $t('page.domiciliation.edit.fob_value') }}
        </p>

        <p>{{ formatAmountWithCurrency(infos?.fob, infos?.currency) }}</p>
      </li>
      <li v-if="infos?.type.toLowerCase().endsWith('bien')">
        <p class="text-xs text-text-secondary">
          {{ $t('page.domiciliation.edit.caf_value') }}
        </p>

        <p>{{ formatAmountWithCurrency(infos?.caf, infos?.currency) }}</p>
      </li>
      <li>
        <p class="text-xs text-text-secondary">
          {{ $t('page.domiciliation.edit.payment_deadline') }}
        </p>

        <p>{{ moment(infos?.paymentDeadline).format('DD/MM/YYYY') }}</p>
      </li>
      <li>
        <p class="text-xs text-text-secondary">
          {{ $t('page.domiciliation.edit.custom_infos') }}
        </p>

        <p>{{ infos?.customInfos }}</p>
      </li>
      <li>
        <p class="text-xs text-text-secondary">
          {{ $t('page.domiciliation.edit.amount') }}
        </p>

        <p>{{ formatAmountWithCurrency(infos?.amount, infos?.currency) }}</p>
      </li>
      <li v-if="infos?.type.toLowerCase().endsWith('serv')">
        <p class="text-xs text-text-secondary">
          {{ $t('page.domiciliation.edit.chapter') }}
        </p>

        <p>{{ infos?.chapter }}</p>
      </li>
      <li v-if="infos?.type.toLowerCase().endsWith('serv')">
        <p class="text-xs text-text-secondary">
          {{ $t('page.domiciliation.edit.description') }}
        </p>

        <p>{{ infos?.description }}</p>
      </li>
    </ul>

    <skeleton v-else width="100%" height="7.5rem" />
  </div>
</template>
