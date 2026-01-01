import type { H3Event } from 'h3'

export default defineEventHandler(async (event: H3Event) => {
  const auth = authCookie(event)
  const authUser = auth.getUserSnapShot()

  if (authUser) {
    await deleteUser(authUser.sessionId)
    auth.clear()
  }

  return {
    apiResponse: true,
  }
})
