<script setup lang="ts">
definePageMeta({
  layout: 'connected',
  middleware: ['authenticated'],
})

const config = useRuntimeConfig()
const { t } = useI18n()

useHead({
  title: `${t('meta.title.transfer.show')} - ${config.public.app.name}`,
  meta: [{ name: 'description', content: 'My design project application.' }],
})
</script>

<template>
  <div class="text-text-primary space-y-5">
    <navbar-auth-nav :title="$t('menu.transfer.show')">
      <nuxt-link to="/transfer/create" class="max-w-xs">
        <button-primary
          :label="$t('button.new_transfer')"
          icon="pi pi-plus-circle"
        />
      </nuxt-link>
    </navbar-auth-nav>

    <gadget-banner>
      <div class="grid grid-cols-[auto_1fr] h-full">
        <div class="grid justify-center ml-2 text-sm text-white lg:text-base">
          <div class="ml-5 translate-y-8">
            <h3 class="font-semibold">{{ $t('menu.transfer.show') }}</h3>

            <h4 class="text-xs">
              {{ $t('page.transfer.title') }}
            </h4>
          </div>
        </div>

        <div class="flex justify-end">
          <gadget-image-blur>
            <img
              src="/images/beneficiaries.png"
              class="z-30 object-cover object-center w-auto h-22"
              alt="Bank Logo"
            />
          </gadget-image-blur>
        </div>
      </div>
    </gadget-banner>

    <section class="py-5">
      <p
        class="border-l-4 border-primary-light bg-bg-secondary pl-5 py-1.5 mb-5 text-base text-text-secondary font-normal"
      >
        {{ $t('page.transfer.history') }}
      </p>

      <table-transfert />
    </section>
  </div>
</template>
