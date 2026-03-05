<script setup lang="ts">
defineProps<{
  account: AccountModel
}>()
</script>

<template>
  <card-active-skeleton>
    <div class="flex items-center justify-between">
      <div class="flex items-center space-x-2">
        <div>
          <img
            src="/images/logo.jpg"
            class="object-cover object-center w-12 bg-bg-main p-1 rounded-sm"
            alt="App Logo"
          />
        </div>

        <div>
          <h3 class="uppercase font-bold">
            {{ account?.bank }}
          </h3>
          <h4>{{ $t('page.account.account') }} {{ account?.accType }}</h4>
        </div>
      </div>

      <!-- <button
        type="button"
        class="border border-status-success text-status-success rounded-lg px-2.5 py-0.5 bg-bg-main font-medium"
      >
        Active
      </button> -->
    </div>

    <div class="mt-1">
      <ul class="flex justify-between py-3 border-b border-primary-light">
        <li>
          <h3 class="font-bold">{{ $t('page.account.agency') }}</h3>
          <h3>{{ account?.agency }}</h3>
        </li>
        <li>
          <h3 class="font-bold">{{ $t('page.account.client') }}</h3>
          <h3>{{ account?.client }}</h3>
        </li>
      </ul>

      <p
        class="py-1.5 border-b border-primary-light text-text-primary font-semibold text-sm"
      >
        {{ formatIban(account?.iBan) }}
      </p>

      <div class="flex justify-between items-center pt-2.5">
        <h3>{{ $t('page.account.available_balance') }}</h3>

        <span class="bg-bg-main py-0.5 px-2.5 font-bold rounded-xl">
          xxx xxx xxx {{ account?.currency }}
        </span>
      </div>
    </div>
  </card-active-skeleton>
</template>
