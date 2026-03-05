import { defineNuxtPlugin } from '#app'

export default defineNuxtPlugin(nuxtApp => {
  const config = useRuntimeConfig()

  nuxtApp.provide(
    'apiFetch',
    $fetch.create({
      baseURL: config.public.baseUrl,
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      timeout: Number(config.public.app.apiTimeout) ?? 10000,
      onRequest() {
        const authStoreRef = useCookie<{ state: AuthData }>('authUser')

        if (!authStoreRef.value) {
          navigateTo(config.public.page.login)
        }
      },
      onResponse() {
        const authStoreRef = useCookie<{ state: AuthData }>('authUser')

        if (!authStoreRef.value) {
          navigateTo(config.public.page.login)
        }
      },
    })
  )
})
