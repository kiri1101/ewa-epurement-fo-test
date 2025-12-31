<script setup lang="ts">
const config = useRuntimeConfig()
const { t } = useI18n()
const assetStore = useAssetStore()
const auth = useAuthStore()
const showLoader = ref(true)
const form = ref({
  firstName: '',
  lastName: '',
  email: '',
  phone: '',
  agency: '',
  support: '',
  kyc: false,
})

useHead({
  title: `${t('meta.title.profile.infos')} - ${config.public.app.name}`,
  meta: [{ name: 'description', content: 'My design project application.' }],
})

onMounted(() => {
  showLoader.value = assetStore.hasAssets ? false : true
  form.value.firstName = auth.state ? auth.state?.firstName : ''
  form.value.lastName = auth.state ? auth.state?.lastName : ''
  form.value.email = auth.state ? auth.state?.emailAddress : ''
  form.value.phone = auth.state ? auth.state?.phoneNumber : ''
  form.value.kyc = auth.state ? auth.state?.kycStatus : false
})

const kycLabel = computed(() => (form.value.kyc ? 'Active' : 'Inactive'))
</script>

<template>
  <div>
    <gadget-banner>
      <div class="grid grid-cols-[auto_1fr] h-full">
        <div
          class="grid justify-center ml-2 text-sm text-sidebar-text-primary lg:text-base"
        >
          <h3 class="ml-5 translate-y-8">Information personnelles</h3>
        </div>

        <div class="flex justify-end">
          <gadget-image-blur>
            <img
              :src="assetStore.list.profile"
              class="z-30 object-cover object-center w-auto h-22"
              alt="Bank Logo"
            />
          </gadget-image-blur>
        </div>
      </div>
    </gadget-banner>

    <section class="mt-5 space-y-5">
      <div class="grid grid-cols-2 gap-3">
        <div>
          <label class="text-xs text-input-profile-label">First name</label>

          <input-bg-transparent
            identifier="firstName"
            v-model="form.firstName"
            disabled
          />
        </div>

        <div>
          <label class="text-xs text-input-profile-label">Last name</label>

          <input-bg-transparent
            identifier="lastName"
            v-model="form.lastName"
            disabled
          />
        </div>

        <div>
          <label class="text-xs text-input-profile-label">Email</label>

          <input-bg-transparent
            identifier="email"
            v-model="form.email"
            disabled
          />
        </div>

        <div>
          <label class="text-xs text-input-profile-label">Phone</label>

          <input-bg-transparent
            identifier="phone"
            v-model="form.phone"
            disabled
          />
        </div>

        <div class="col-span-2">
          <label class="text-xs text-input-profile-label">Support</label>

          <input-bg-transparent
            identifier="support"
            v-model="form.support"
            disabled
          />
        </div>

        <div class="col-span-2">
          <label class="text-xs text-input-profile-label">Agency</label>

          <input-bg-transparent
            identifier="agency"
            v-model="form.agency"
            disabled
          />
        </div>
      </div>

      <p class="space-x-2 text-sm text-input-profile-label">
        <span>Kyc status:</span>

        <button-badge :label="kycLabel" />
      </p>

      <p class="flex items-center space-x-1 text-xs">
        <svg-radioactive />

        <span>
          To modifier your personal information, contact support ou your agency
        </span>
      </p>
    </section>
  </div>
</template>

<style scoped></style>
