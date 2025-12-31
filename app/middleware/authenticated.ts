export default defineNuxtRouteMiddleware(async (to, from) => {
  const config = useRuntimeConfig()
  const authJson = useCookie('authUser')

  if (!authJson.value) {
    return navigateTo(config.public.page.login)
  }
})
