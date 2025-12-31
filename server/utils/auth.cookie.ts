import type { H3Event } from 'h3'

export const authCookie = (event: H3Event) => {
  const user = getCookie(event, 'authUser')

  const clear = () => deleteCookie(event, 'authUser')

  const getUserSnapShot = (): AuthData | null =>
    user ? JSON.parse(user).state : null

  return { getUserSnapShot, clear }
}
