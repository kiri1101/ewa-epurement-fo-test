import { users, bankAcc } from '~/db/schema'
import { eq } from 'drizzle-orm'
import type { H3Event } from 'h3'

const getAccounts = async (event: H3Event) => {
  const auth = authCookie(event)
  const user = auth.getUserSnapShot()
  let response = null

  if (user) {
    // get auth user id
    let authUser = await db
      .select({ id: users.id })
      .from(users)
      .where(eq(users.uuid, user?.id))

    // get auth user bank accounts
    let result = await db
      .select({ id: bankAcc.uuid, name: bankAcc.bank, value: bankAcc.accRef })
      .from(bankAcc)
      .where(eq(bankAcc.userId, authUser[0].id))

    response = result.length > 0 ? result : null
  }
  return response
}

export { getAccounts }
