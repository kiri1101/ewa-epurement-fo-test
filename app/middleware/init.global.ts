export default defineNuxtRouteMiddleware(async (to, from) => {
  const config = useRuntimeConfig()

  if (import.meta.client) {
    const assetStore = useAssetStore()

    try {
      const response = await $fetch<object>('/assets', {
        baseURL: config.public.fsUrl,
        headers: {
          'x-client-id': config.public.app.assets.id,
          'x-client-secret': config.public.app.assets.secret,
        },
      })

      assetStore.setAssets(response)
    } catch (error) {}
  }

  if (import.meta.server) {
    await $fetch('/api/seed/currency', {
      baseURL: config.public.baseUrl,
      method: 'POST',
    })
  }

  if (to.path === '/') {
    return navigateTo(config.public.page.login)
  }
})
