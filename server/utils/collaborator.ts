import { collaborators, bankAcc, users } from '~/db/schema'
import type { InsertCollaboratorSession } from '~/db/schema'
import { eq, like, or } from 'drizzle-orm'
import type { H3Event } from 'h3'

export const saveCollaborators = async (
  event: H3Event,
  response: CollaboratorList[]
) => {
  const auth = authCookie(event)
  const authUser = auth.getUserSnapShot()
  let output

  if (authUser) {
    // get auth user data from DB
    const user = await db
      .select({ userId: users.id })
      .from(users)
      .where(eq(users.uuid, authUser.id))

    // get auth user collaborators
    const authUserCol = await db.query.collaborators.findMany({
      columns: {
        firstName: true,
        lastName: true,
        roles: true,
        createdAt: true,
        isActive: true,
      },
      where: eq(collaborators.userId, user[0].userId),
    })

    // check if response collaborator count > local count
    if (response.length > authUserCol.length) {
      output = await db.transaction(async tx => {
        // flush auth user collaborators data from DB
        await tx
          .delete(collaborators)
          .where(eq(collaborators.userId, user[0].userId))

        // save new collaborators data for auth user
        return createCollaborators(tx, response, user)
      })
    } else {
      output = authUserCol
    }
  }

  return output
}

export const createCollaborators = async (
  tx: any,
  response: CollaboratorList[],
  user: {
    userId: number
  }[]
) => {
  const collaboratorMap: InsertCollaboratorSession[] = await Promise.all(
    response.map(async res => {
      const uuid = crypto.randomUUID()
      const bankAccount = await tx
        .select({ accountId: bankAcc.id })
        .from(bankAcc)
        .where(eq(bankAcc.iBan, res.bankinfo.accountNumber))

      return {
        uuid: uuid,
        username: res.userPseudo,
        firstName: res.firstName,
        lastName: res.lastName,
        email: res.email,
        phoneCode: res.phoneCode,
        phoneNumber: res.phoneNumber,
        roles: res.bankinfo.roles,
        userId: user[0]?.userId,
        accId: bankAccount[0]?.accountId,
        createdAt: res.createdDate,
        isActive: Boolean(res.isActive),
      }
    })
  )

  return await tx.insert(collaborators).values(collaboratorMap).returning({
    firstName: collaborators.firstName,
    lastName: collaborators.lastName,
    roles: collaborators.roles,
    createdAt: collaborators.createdAt,
    isActive: collaborators.isActive,
  })
}

export const searchCollaborators = async (index: string) => {
  return await db
    .select({
      firstName: collaborators.firstName,
      lastName: collaborators.lastName,
      roles: collaborators.roles,
      createdAt: collaborators.createdAt,
      isActive: collaborators.isActive,
    })
    .from(collaborators)
    .where(
      or(
        like(collaborators.firstName, `%${index}%`),
        like(collaborators.lastName, `%${index}%`)
      )
    )
    .limit(10)
}
