<script setup lang="ts">
definePageMeta({
  layout: 'connected',
  middleware: ['authenticated'],
})

const config = useRuntimeConfig()
const { t, locale } = useI18n()
const route = useRoute()

useHead({
  title: `${t('meta.title.beneficiary.edit')} - ${config.public.app.name}`,
  meta: [{ name: 'description', content: 'My design project application.' }],
})

onMounted(() => {
  let benefId: string | undefined = route.params.id as string
  if (benefId && benefId.trim().length > 0) {
    details(benefId)
  }
  getBeneficiarySettings()
})

const { $apiFetch } = useNuxtApp() as any
const { e, s } = useNotify()
const { getBenefDetails } = useBeneficiaries()
const isLoading = shallowRef(false)
const isListLoading = shallowRef(false)
const countryList = ref<CountryItem[]>([])
const form = ref({
  fullName: '',
  country: '',
  bank: '',
  line1: '',
  line2: '',
  mailingAddress: '',
  phone: '',
  countryCode: '',
  city: '',
  state: '',
  postalCode: '',
  nationality: '',
  iban: '',
  swift: '',
  idCode: '',
  lang: locale.value,
})
const validErrorMsg = ref({
  fullName: '',
  country: '',
  bank: '',
  iban: '',
  swift: '',
  line1: '',
  line2: '',
  mailingAddress: '',
  phone: '',
  city: '',
  state: '',
  postalCode: '',
  nationality: '',
})

const resetValidErrorMsg = () => {
  validErrorMsg.value = {
    fullName: '',
    country: '',
    bank: '',
    iban: '',
    swift: '',
    line1: '',
    line2: '',
    mailingAddress: '',
    phone: '',
    city: '',
    state: '',
    postalCode: '',
    nationality: '',
  }
}

const showingLoader = () => (isLoading.value = true)

const hidingLoader = () => (isLoading.value = false)

const showListLoader = () => (isListLoading.value = true)

const hideListLoader = () => (isListLoading.value = false)

const updateFormPhone = (event: TelInputValidate) => {
  form.value.phone = event.valid ? event.nationalNumber : ''
  form.value.countryCode = event.valid ? event.countryCallingCode : ''
}

const details = async (benefId: string) => {
  const res = await getBenefDetails(benefId)

  if (res.validationErr.length > 0) {
    res.validationErr.forEach((err: any) => e(err?.message))
  }
  if (res.error.length > 0) {
    e(res.error)
  }
  if (res.response) {
    form.value.fullName = res.response.fullName
    form.value.country = res.response.country
    form.value.bank = res.response.bankName
    form.value.iban = res.response.iban
    form.value.swift = res.response.swiftBic
    form.value.line1 = res.response.line1
    form.value.line2 = res.response.line2
    form.value.mailingAddress = res.response.email
    form.value.phone = res.response.phoneNumber
    form.value.countryCode = res.response.phoneCode
    form.value.city = res.response.city
    form.value.state = res.response.state
    form.value.postalCode = res.response.postalCode
    form.value.nationality = res.response.nationality
    form.value.idCode = res.response.code
  }
}

const getBeneficiarySettings = async () => {
  showListLoader()
  try {
    const { apiResponse, validError } = await $apiFetch(
      config.public.api.beneficiary.setting,
      {
        method: 'POST',
        body: {
          lang: locale.value,
        },
      },
    )

    if (validError) {
      validError.forEach((err: any) => e(err?.message))
    }

    countryList.value = apiResponse.countries
  } catch (error: any) {
    const errorMsg = handleApiError(error)
    if (errorMsg.length > 0) {
      e(errorMsg)
    }
  } finally {
    hideListLoader()
  }
}

const submit = async () => {
  resetValidErrorMsg()
  form.value.lang = locale.value

  showingLoader()
  try {
    const { apiResponse, validError } = await $apiFetch(
      config.public.api.beneficiary.update,
      {
        method: 'POST',
        body: form.value,
      },
    )

    if (validError) {
      validError.forEach((err: any) => {
        validErrorMsg.value[err.name as keyof typeof validErrorMsg.value] =
          err.message
      })
    }

    s(apiResponse.message)
    return navigateTo('/beneficiary/list')
  } catch (error: any) {
    const errorMsg = handleApiError(error)
    if (errorMsg.length > 0) {
      e(errorMsg)
    }
  } finally {
    hidingLoader()
  }
}
</script>

<template>
  <div class="pb-5 text-text-primary space-y-5">
    <navbar-auth-nav :title="$t('menu.beneficiary.edit')" />

    <gadget-banner>
      <div class="grid grid-cols-[auto_1fr]">
        <div
          class="grid items-center justify-center ml-5 text-sm text-white lg:text-base"
        >
          <h3 class="font-semibold -translate-y-4">
            {{ $t('page.beneficiary.edit') }}
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

    <form @submit.prevent="submit">
      <div class="grid grid-cols-2 gap-2 px-3 pt-3 pb-5">
        <div>
          <label class="text-xs text-text-secondary">
            {{ $t('page.beneficiary.id_code') }}
          </label>

          <input-bg-normal
            identifier="idCode"
            v-model="form.idCode"
            class="uppercase"
            disabled
          />
        </div>

        <div>
          <label for="fullName" class="text-xs text-text-secondary">
            {{ $t('page.beneficiary.name') }}

            <span
              class="text-white font-semibold text-xxs bg-accent rounded px-1"
            >
              {{ $t('page.beneficiary.required') }}
            </span>
          </label>

          <input-bg-normal
            v-model="form.fullName"
            identifier="fullName"
            class="uppercase"
          />

          <input-error-msg
            v-if="validErrorMsg.fullName.trim().length > 0"
            :label="validErrorMsg.fullName"
          />
        </div>

        <div>
          <label for="email" class="text-xs text-text-secondary">
            {{ $t('page.beneficiary.phone') }}
          </label>

          <input-phone @validate="updateFormPhone" />

          <input-error-msg
            v-if="validErrorMsg.phone.trim().length > 0"
            :label="validErrorMsg.phone"
          />
        </div>

        <div>
          <label for="email" class="text-xs text-text-secondary">
            {{ $t('page.beneficiary.email') }}
          </label>

          <input-group>
            <input-group-addon pt:root="border-dark-brown">
              <img
                src="/images/email_svg.svg"
                class="object-center object-contain size-4.5"
                alt="Email Logo Svg"
              />
            </input-group-addon>

            <input-bg-normal
              type="email"
              v-model="form.mailingAddress"
              identifier="email"
              placeholder="email@gmail.com"
            />
          </input-group>

          <input-error-msg
            v-if="validErrorMsg.mailingAddress.trim().length > 0"
            :label="validErrorMsg.mailingAddress"
          />
        </div>

        <div>
          <label class="text-xs text-text-secondary">
            {{ $t('page.beneficiary.address1') }}
          </label>

          <input-bg-normal
            identifier="line1"
            v-model="form.line1"
            class="uppercase"
          />

          <input-error-msg
            v-if="validErrorMsg.line1.trim().length > 0"
            :label="validErrorMsg.line1"
          />
        </div>

        <div>
          <label class="text-xs text-text-secondary">
            {{ $t('page.beneficiary.address2') }}
          </label>

          <input-bg-normal
            identifier="line2"
            v-model="form.line2"
            class="uppercase"
          />

          <input-error-msg
            v-if="validErrorMsg.line2.trim().length > 0"
            :label="validErrorMsg.line2"
          />
        </div>

        <div class="col-span-2">
          <label for="bank" class="text-xs text-text-secondary">
            {{ $t('page.beneficiary.bank_name') }}

            <span
              class="text-white font-semibold text-xxs bg-accent rounded px-1"
            >
              {{ $t('page.beneficiary.required') }}
            </span>
          </label>

          <input-bg-normal
            v-model="form.bank"
            identifier="bank"
            class="uppercase"
          />

          <input-error-msg
            v-if="validErrorMsg.bank.trim().length > 0"
            :label="validErrorMsg.bank"
          />
        </div>

        <div>
          <label class="text-xs text-text-secondary">
            {{ $t('page.beneficiary.city') }}
          </label>

          <input-bg-normal
            identifier="city"
            v-model="form.city"
            class="uppercase"
          />

          <input-error-msg
            v-if="validErrorMsg.city.trim().length > 0"
            :label="validErrorMsg.city"
          />
        </div>

        <div>
          <label class="text-xs text-text-secondary">
            {{ $t('page.beneficiary.town') }}
          </label>

          <input-bg-normal
            identifier="state"
            v-model="form.state"
            class="uppercase"
          />

          <input-error-msg
            v-if="validErrorMsg.state.trim().length > 0"
            :label="validErrorMsg.state"
          />
        </div>

        <div>
          <label class="text-xs text-text-secondary">
            {{ $t('page.beneficiary.postal') }}
          </label>

          <input-bg-normal
            identifier="postalCode"
            v-model="form.postalCode"
            class="uppercase"
          />

          <input-error-msg
            v-if="validErrorMsg.postalCode.trim().length > 0"
            :label="validErrorMsg.postalCode"
          />
        </div>

        <div>
          <label class="text-xs text-text-secondary">
            {{ $t('page.beneficiary.nationality') }}
          </label>

          <input-bg-normal
            identifier="nationality"
            v-model="form.nationality"
            class="uppercase"
          />

          <input-error-msg
            v-if="validErrorMsg.nationality.trim().length > 0"
            :label="validErrorMsg.nationality"
          />
        </div>

        <div>
          <label for="country" class="text-xs text-text-secondary">
            {{ $t('page.beneficiary.country') }}

            <span
              class="text-white font-semibold text-xxs bg-accent rounded px-1"
            >
              {{ $t('page.beneficiary.required') }}
            </span>
          </label>

          <input-select
            v-model="form.country"
            :options="countryList"
            :loading="isListLoading"
            placeholder="Choose a country"
            @update:modelValue="(e: string) => (form.country = e)"
            class="uppercase"
          />

          <input-error-msg
            v-if="validErrorMsg.country.trim().length > 0"
            :label="validErrorMsg.country"
          />
        </div>

        <div
          class="w-full bg-bg-secondary border border-border-main col-span-2 p-4 rounded-lg mt-2"
        >
          <div>
            <label for="iban" class="text-xs text-text-secondary">
              {{ $t('page.beneficiary.iban') }}

              <span
                class="text-white font-semibold text-xxs bg-accent rounded px-1"
              >
                {{ $t('page.beneficiary.required') }}
              </span>
            </label>

            <input-bg-normal v-model="form.iban" identifier="iban" />

            <input-error-msg
              v-if="validErrorMsg.iban.trim().length > 0"
              :label="validErrorMsg.iban"
            />
          </div>

          <div>
            <label for="swift" class="text-xs text-text-secondary">
              {{ $t('page.beneficiary.swift') }}

              <span
                class="text-white font-semibold text-xxs bg-accent rounded px-1"
              >
                {{ $t('page.beneficiary.required') }}
              </span>
            </label>

            <input-bg-normal v-model="form.swift" identifier="swift" />

            <input-error-msg
              v-if="validErrorMsg.swift.trim().length > 0"
              :label="validErrorMsg.swift"
            />
          </div>
        </div>
      </div>

      <div
        class="grid justify-end grid-flow-col gap-3 p-2 border-t border-border-main"
      >
        <button-outline
          :label="$t('button.cancel')"
          @click.prevent="navigateTo('/beneficiary/list')"
        />

        <button-primary
          type="submit"
          :label="$t('button.submit')"
          :loading="isLoading"
        />
      </div>
    </form>
  </div>
</template>
