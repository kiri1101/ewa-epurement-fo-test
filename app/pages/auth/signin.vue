<script setup lang="ts">
definePageMeta({
  middleware: ['guest'],
})

const config = useRuntimeConfig()
const { $apiFetch } = useNuxtApp() as any
const { t, locale } = useI18n()
const authStore = useAuthStore()
const showPass = ref(false)
const isLoading = ref(false)
const { e } = useNotify()
const validErrorMsg = ref({
  username: '',
  secret: '',
})
const form = ref({
  username: '',
  secret: '',
  lang: locale.value,
})

useHead({
  title: `${t('meta.title.login')} - ${config.public.app.name}`,
  meta: [{ name: 'description', content: 'My design project application.' }],
})

const passwordFieldType = computed(() => (showPass.value ? 'text' : 'password'))

const showingPassword = () => (showPass.value = true)

const hidingPassword = () => (showPass.value = false)

const showLoader = () => (isLoading.value = true)

const hideLoader = () => (isLoading.value = false)

const submit = async () => {
  showLoader()
  form.value.lang = locale.value
  try {
    const { apiResponse, validError } = await $apiFetch(
      config.public.api.login,
      {
        method: 'POST',
        body: form.value,
      }
    )

    if (validError) {
      validError.forEach((err: any) => {
        validErrorMsg.value[err?.name as keyof typeof validErrorMsg.value] =
          err?.message
      })
    } else {
      validErrorMsg.value = {
        username: '',
        secret: '',
      }
    }

    if (apiResponse) {
      authStore.store(apiResponse)

      const redirect = apiResponse.firstAttempt
        ? config.public.page.forgotPwd
        : config.public.page.clientBoard

      navigateTo(redirect)
    }
  } catch (error: any) {
    const errorMsg = handleApiError(error)
    if (errorMsg.length > 0) {
      e(errorMsg)
    }
  } finally {
    hideLoader()
  }
}
</script>

<template>
  <div class="mx-auto w-92">
    <h2
      class="pb-4 text-2xl lg:text-3xl font-bold text-center underline decoration-auth-form-title-decoration decoration-2 underline-offset-10 text-auth-text-primary"
    >
      {{ $t('page.login.form_title') }}
    </h2>

    <p class="text-sm lg:text-base">
      {{ $t('page.login.intro_msg.part1') }}
      <span class="font-semibold">{{ $t('page.login.intro_msg.part2') }}</span>
      {{ $t('page.login.intro_msg.part3') }}
    </p>

    <form @submit.prevent="submit" class="mt-4 space-y-4">
      <div>
        <input-bg-transparent
          identifier="pseudo"
          v-model="form.username"
          :placeholder="$t('placeholder.pseudo')"
        />

        <span
          v-if="validErrorMsg.username.trim().length > 0"
          class="text-xs font-semibold transition duration-200 ease-linear text-validation-error"
        >
          {{ validErrorMsg.username }}
        </span>
      </div>

      <div>
        <input-group>
          <input-bg-transparent
            identifier="password"
            v-model="form.secret"
            :type="passwordFieldType"
            placeholder="********"
          />

          <input-addon-transparent>
            <i
              v-if="showPass"
              @click.prevent="hidingPassword"
              class="text-input-pwd-svg pi pi-eye"
            />

            <i
              v-else
              @click.prevent="showingPassword"
              class="text-input-pwd-svg pi pi-eye-slash"
            />
          </input-addon-transparent>
        </input-group>

        <span
          v-if="validErrorMsg.secret.trim().length > 0"
          class="text-xs font-semibold transition duration-200 ease-linear text-validation-error"
        >
          {{ validErrorMsg.secret }}
        </span>
      </div>

      <button-primary
        type="submit"
        :label="$t('button.login')"
        :loading="isLoading"
      />

      <!-- <p
        class="text-sm text-center underline decoration-link-decoration hover:decoration-link-hover-decoration decoration-1 underline-offset-4 text-link hover:text-link-hover"
      >
        <nuxt-link to="/">
          {{ $t('page.login.forgot_password') }}
        </nuxt-link>
      </p> -->
    </form>
  </div>
</template>
