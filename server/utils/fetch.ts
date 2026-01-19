import type { H3Event } from 'h3'

export const fetch = (event: H3Event) => {
  const config = useRuntimeConfig(event)
  const auth = authCookie(event)
  const authUser = auth.getUserSnapShot()

  return $fetch.create({
    baseURL: config.private.baseURL as string,
    credentials: 'include',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    timeout: Number(config.public.app.apiTimeout) ?? 10000,
    onRequest({ options }) {
      if (authUser) {
        options.headers.append(
          'Authorization',
          `Bearer ${authUser.token.bearer}`
        )
      }
    },
    onResponseError: async ({ response }) => {},
  })
}
