import type { AuthData } from '~~/shared/utils/model'

export default defineNuxtRouteMiddleware(async to => {
  const config = useRuntimeConfig()
  const authStoreRef = useCookie<{ state: AuthData }>('authUser')

  if (!authStoreRef.value) {
    return navigateTo(config.public.page.login)
  }

  if (to.name === 'dashboard' && authStoreRef.value) {
    if (authStoreRef.value.state.firstAttempt) {
      await $fetch(config.public.api.logout, {
        baseURL: config.public.baseUrl,
        method: 'POST',
      })

      return navigateTo(config.public.page.login)
    }
  }
})
