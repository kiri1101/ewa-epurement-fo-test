<script setup lang="ts">
definePageMeta({
  layout: 'connected',
  middleware: ['authenticated'],
})

const config = useRuntimeConfig()
const { t } = useI18n()
const assetStore = useAssetStore()
const showLoader = ref(true)

useHead({
  title: `${t('meta.title.account')} - ${config.public.app.name}`,
  meta: [{ name: 'description', content: 'My design project application.' }],
})

onMounted(() => {
  showLoader.value = assetStore.hasAssets ? false : true
})

const cardStyles = computed(() => ({
  backgroundImage: showLoader.value ? '' : `url(${assetStore.list.account_bg})`,
}))
</script>

<template>
  <div>
    <navbar-auth-nav :title="$t('menu.account')" />

    <section class="mt-3">
      <gadget-banner>
        <div class="grid grid-cols-[auto_1fr] h-full">
          <div class="text-sidebar-text-primary grid justify-center ml-2 text-xs lg:text-base">
            <h3 class="translate-y-7">
              <p>Voici la liste des comptes bancaires liés à ton compte.</p>

              <p>Gérez vos comptes de débit</p>
            </h3>
          </div>

          <div class="flex justify-end">
            <gadget-image-blur>
              <img :src="assetStore.list.account" class="object-cover object-center h-26 w-auto z-30" alt="Bank Logo" />
            </gadget-image-blur>
          </div>
        </div>
      </gadget-banner>
    </section>

    <section class="mt-7">
      <div class="cards">
        <card-visa />

        <card-disabled />
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
