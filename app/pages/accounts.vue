<script setup lang="ts">
definePageMeta({
  layout: 'connected',
  middleware: ['authenticated'],
})

const config = useRuntimeConfig()
const { t } = useI18n()
const bankStore = useBankStore()

useHead({
  title: `${t('meta.title.account')} - ${config.public.app.name}`,
  meta: [{ name: 'description', content: 'My design project application.' }],
})
</script>

<template>
  <div>
    <navbar-auth-nav :title="$t('menu.account')" />

    <section class="mt-3">
      <gadget-banner>
        <div class="grid grid-cols-[auto_1fr] h-full">
          <div class="text-white grid justify-center ml-2 text-xs lg:text-base">
            <h3 class="translate-y-7">
              <p>{{ $t('page.account.title1') }}</p>

              <p>{{ $t('page.account.title2') }}</p>
            </h3>
          </div>

          <div class="flex justify-end">
            <gadget-image-blur>
              <img
                src="/images/account.png"
                class="object-cover object-center h-26 w-auto z-30"
                alt="Bank Logo"
              />
            </gadget-image-blur>
          </div>
        </div>
      </gadget-banner>
    </section>

    <section class="mt-7">
      <div class="cards">
        <card-visa
          v-for="account in bankStore.accounts"
          :key="account.uuid"
          :account="account"
        />
      </div>
    </section>
  </div>
</template>

<style scoped>
.cards {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(17rem, 1fr));
  gap: 0.75rem;
}
</style>
