<script setup lang="ts">
const config = useRuntimeConfig()
const { t } = useI18n()
const auth = useAuthStore()
const form = ref({
  firstName: '',
  lastName: '',
  email: '',
  phone: '',
  agency: '',
  support: '',
  idCode: '',
  line1: '',
  line2: '',
  city: '',
  state: '',
  postalCode: '',
  country: '',
  nationality: '',
  kyc: false,
  isResident: false,
})

useHead({
  title: `${t('meta.title.profile.infos')} - ${config.public.app.name}`,
  meta: [{ name: 'description', content: 'My design project application.' }],
})

onMounted(() => {
  updateInfos()
})

const kycLabel = computed(() => (form.value.kyc ? 'Active' : 'Inactive'))

const updateInfos = () => {
  form.value.firstName = auth.state?.firstName ?? ''
  form.value.lastName = auth.state?.lastName ?? ''
  form.value.email = auth.state?.emailAddress ?? ''
  form.value.phone = auth.state?.phoneNumber ?? ''
  form.value.kyc = auth.state?.kycStatus ?? false
  form.value.line1 = auth.state?.address ?? ''
  form.value.line2 = auth.state?.address2 ?? ''
  form.value.city = auth.state?.city ?? ''
  form.value.state = auth.state?.state ?? ''
  form.value.postalCode = auth.state?.poBox ?? ''
  form.value.country = auth.state?.country ?? ''
  form.value.nationality = auth.state?.nationality ?? ''
}
</script>

<template>
  <div>
    <gadget-banner>
      <div class="grid grid-cols-[auto_1fr] h-full">
        <div class="grid justify-center ml-2 text-sm text-white lg:text-base">
          <h3 class="ml-5 translate-y-8">
            {{ $t('page.profile.infos.title') }}
          </h3>
        </div>

        <div class="flex justify-end">
          <gadget-image-blur>
            <img
              src="/images/profile.png"
              class="z-30 object-cover object-center w-auto h-22"
              alt="Bank Logo"
            />
          </gadget-image-blur>
        </div>
      </div>
    </gadget-banner>

    <section class="mt-5 space-y-5">
      <div class="grid grid-cols-3 gap-3">
        <div>
          <label class="text-xs text-text-secondary">
            {{ $t('page.profile.infos.id_code') }}
          </label>

          <input-bg-transparent
            identifier="idCode"
            v-model="form.idCode"
            disabled
          />
        </div>

        <div>
          <label class="text-xs text-text-secondary">
            {{ $t('page.profile.infos.first_name') }}
          </label>

          <input-bg-transparent
            identifier="firstName"
            v-model="form.firstName"
            disabled
          />
        </div>

        <div>
          <label class="text-xs text-text-secondary">
            {{ $t('page.profile.infos.last_name') }}
          </label>

          <input-bg-transparent
            identifier="lastName"
            v-model="form.lastName"
            disabled
          />
        </div>

        <div>
          <label class="text-xs text-text-secondary">
            {{ $t('page.profile.infos.email') }}
          </label>

          <input-bg-transparent
            identifier="email"
            v-model="form.email"
            disabled
          />
        </div>

        <div>
          <label class="text-xs text-text-secondary">
            {{ $t('page.profile.infos.phone') }}
          </label>

          <input-bg-transparent
            identifier="phone"
            v-model="form.phone"
            disabled
          />
        </div>

        <div>
          <label class="text-xs text-text-secondary">
            {{ $t('page.profile.infos.support') }}
          </label>

          <input-bg-transparent
            identifier="support"
            v-model="form.support"
            disabled
          />
        </div>

        <div>
          <label class="text-xs text-text-secondary">
            {{ $t('page.profile.infos.agency') }}
          </label>

          <input-bg-transparent
            identifier="agency"
            v-model="form.agency"
            disabled
          />
        </div>

        <div>
          <label class="text-xs text-text-secondary">
            {{ $t('page.profile.infos.address1') }}
          </label>

          <input-bg-transparent
            identifier="line1"
            v-model="form.line1"
            disabled
          />
        </div>

        <div>
          <label class="text-xs text-text-secondary">
            {{ $t('page.profile.infos.address2') }}
          </label>

          <input-bg-transparent
            identifier="line2"
            v-model="form.line2"
            disabled
          />
        </div>

        <div>
          <label class="text-xs text-text-secondary">
            {{ $t('page.profile.infos.city') }}
          </label>

          <input-bg-transparent
            identifier="city"
            v-model="form.city"
            disabled
          />
        </div>

        <div>
          <label class="text-xs text-text-secondary">
            {{ $t('page.profile.infos.state') }}
          </label>

          <input-bg-transparent
            identifier="state"
            v-model="form.state"
            disabled
          />
        </div>

        <div>
          <label class="text-xs text-text-secondary">
            {{ $t('page.profile.infos.postal') }}
          </label>

          <input-bg-transparent
            identifier="postalCode"
            v-model="form.postalCode"
            disabled
          />
        </div>

        <div>
          <label class="text-xs text-text-secondary">
            {{ $t('page.profile.infos.country') }}
          </label>

          <input-bg-transparent
            identifier="country"
            v-model="form.country"
            disabled
          />
        </div>

        <div>
          <label class="text-xs text-text-secondary">
            {{ $t('page.profile.infos.nationality') }}
          </label>

          <input-bg-transparent
            identifier="nationality"
            v-model="form.nationality"
            disabled
          />
        </div>
      </div>

      <p class="space-x-2 text-sm text-text-secondary">
        <span> {{ $t('page.profile.infos.kyc_status') }}:</span>

        <badge-success :label="kycLabel" />
      </p>

      <p class="flex items-center space-x-1 text-xs">
        <svg-radioactive />

        <span>
          {{ $t('page.profile.infos.information') }}
        </span>
      </p>
    </section>
  </div>
</template>
