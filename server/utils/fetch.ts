import type { H3Event } from 'h3'

export const fetch = (event: H3Event) => {
  const config = useRuntimeConfig(event)
  const tokenCookie = authTokens(event)
  const tokens = tokenCookie.getTokenSnapShot()

  return $fetch.create({
    baseURL: config.private.baseURL as string,
    credentials: 'include',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    onRequest({ options }) {
      if (tokens) {
        options.headers.append('Authorization', `Bearer ${tokens.token}`)
      }
    },
    onResponseError: async ({ response }) => {},
  })
}
