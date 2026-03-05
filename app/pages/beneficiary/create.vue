<script setup lang="ts">
definePageMeta({
  layout: 'connected',
  middleware: ['authenticated'],
})

const config = useRuntimeConfig()
const { t } = useI18n()

useHead({
  title: `${t('meta.title.beneficiary.new')} - ${config.public.app.name}`,
  meta: [{ name: 'description', content: 'My design project application.' }],
})

onMounted(() => {
  getFormData()
})

const { e } = useNotify()
const { getForm } = useFormBuilder()
const form = ref<BuildFormResponse | null>(null)

const getFormData = async () => {
  const res = await getForm('beneficiary', 'create')

  if (res.validationErr.length > 0) {
    res.validationErr.forEach((err: any) => e(err?.message))
  }
  if (res.error.length > 0) {
    e(res.error)
  }
  if (res.response) {
    form.value = res.response
  }
}
</script>

<template>
  <div class="pb-5 text-text-primary space-y-5">
    <navbar-auth-nav :title="$t('menu.beneficiary.new')" />

    <gadget-banner>
      <div class="grid grid-cols-[auto_1fr]">
        <div
          class="grid items-center justify-center ml-5 text-sm text-white lg:text-base"
        >
          <h3 class="font-semibold -translate-y-4">
            {{ $t('page.beneficiary.new') }}
          </h3>
        </div>

        <div class="flex justify-end">
          <gadget-image-blur>
            <img
              src="/images/beneficiaries.png"
              class="z-30 object-cover object-center translate-x-5 translate-y-3 size-18"
              alt="Create User Logo"
            />
          </gadget-image-blur>
        </div>
      </div>
    </gadget-banner>

    <beneficiary-form-renderer v-if="form" :schema="form" />

    <gadget-no-data v-else />
  </div>
</template>
