import type { H3Event } from 'h3'
import { AuthToken } from '~~/shared/utils/model'

export const authTokens = (event: H3Event) => {
  const tokens = getCookie(event, 'authTokens')

  const save = (tokens: AuthToken) =>
    setCookie(event, 'authTokens', JSON.stringify(tokens), {
      httpOnly: true,
      secure: Boolean(process.env.APP_PRODUCTION),
      maxAge: 60 * 60 * 24,
    })

  const clear = () => deleteCookie(event, 'authTokens')

  const getTokenSnapShot = (): AuthToken | null =>
    tokens ? JSON.parse(tokens) : null

  return { getTokenSnapShot, save, clear }
}
