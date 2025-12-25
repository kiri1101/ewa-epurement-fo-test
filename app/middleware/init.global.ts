export default defineNuxtRouteMiddleware(async (to, from) => {
  if (import.meta.client) {
    const config = useRuntimeConfig()
    const assetStore = useAssetStore()

    try {
      const response = await $fetch<object>('/assets', {
        baseURL: config.public.fsUrl,
        headers: {
          'x-client-id': config.public.app.assets.id,
          'x-client-secret': config.public.app.assets.secret,
        },
      })

      if (process.env.NODE_ENV !== 'production') {
        console.log('get assets response ssr: ', response)
      }
      assetStore.setAssets(response)
    } catch (error) {
      if (process.env.NODE_ENV !== 'production') {
        console.log('get assets error ssr: ', error)
      }
    }
  }

  if (to.path === '/') {
    return navigateTo('/auth/signin')
  }
})
