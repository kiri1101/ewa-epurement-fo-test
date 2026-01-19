import {
  users,
  sessions,
  roles,
  bankAcc,
  InsertRole,
  InsertBankAcc,
  InsertUserSession,
} from '~/db/schema'
import { eq, and, lt } from 'drizzle-orm'
import { Role, BankAcc, AuthData } from '~~/shared/utils/model'
import type { H3Event } from 'h3'
import moment from 'moment'

type UserResponse = {
  insertId: string
  id: number
}

const getOtp = async (event: H3Event, otpCode: string) => {
  const auth = authCookie(event)
  const user = auth.getUserSnapShot()
  let response = null

  if (user) {
    let result = await db
      .select({ otp: users.otp })
      .from(users)
      .where(and(eq(users.uuid, user?.id), eq(users.otp, otpCode)))
    response = result.length > 0 ? result[0].otp : null
  }
  return response
}

const saveUser = async (data: AuthResponse): Promise<AuthData> => {
  const uuid = crypto.randomUUID()
  let userData = {
    uuid: uuid,
    username: data.user.userPseudo,
    firstName: data.user.firstName,
    lastName: data.user.lastName,
    email: data.user.email,
    hasCompleteKyc: Boolean(data.user.kycStatus),
    phoneCode: data.user.phoneCode,
    phoneNumber: data.user.phoneNumber,
    status: data.user.status,
    roles: data.user.roles,
    isFirstLogin: Boolean(data.is_first_login),
    otp: String(data.otp),
    bearerToken: data.token,
    refreshToken: data.refreshToken,
    tokenLife: String(data.expired_at),
  }
  let sessionId, output

  return await db.transaction(async tx => {
    try {
      const authUser = await tx.query.users.findFirst({
        columns: {
          uuid: true,
          id: true,
        },
        where: and(
          eq(users.email, data.user.email),
          eq(users.phoneNumber, data.user.phoneNumber)
        ),
        with: {
          sessions: {
            columns: {
              uuid: true,
              userId: true,
              createdAt: true,
              expireAt: true,
            },
            where: lt(
              sessions.expireAt,
              moment().format('YYYY-MM-DDTHH:mm:ss')
            ),
          },
        },
      })

      // define session lifecycle
      const uuid = crypto.randomUUID()
      const now = moment().format('YYYY-MM-DDTHH:mm:ss')
      const expires = moment().add(1, 'hour').format('YYYY-MM-DDTHH:mm:ss')

      // if yes add new session
      if (authUser) {
        // clear all expired sessions for auth user
        if (authUser?.sessions.length > 0) {
          authUser.sessions.forEach(async session => {
            await tx.delete(sessions).where(eq(sessions.uuid, session.uuid))
          })
        }

        sessionId = await createSession(tx, {
          uuid: uuid,
          userId: authUser.id,
          createdAt: now,
          expireAt: expires,
        })

        output = {
          id: authUser.uuid,
          firstName: data.user.firstName,
          lastName: data.user.lastName,
          firstAttempt: Boolean(data.is_first_login),
          emailAddress: data.user.email,
          phoneNumber: `(${data.user.phoneCode}) ${data.user.phoneNumber}`,
          kycStatus: Boolean(data.user.kycStatus),
          token: {
            bearer: data.token,
            refresh: data.refreshToken,
          },
          sessionId: sessionId,
          isValidator: data.user.roles.includes('Validation') ? true : false,
        }
      } else {
        const user: UserResponse[] = await tx
          .insert(users)
          .values(userData)
          .returning({ insertId: users.uuid, id: users.id })

        // create new session
        sessionId = await createSession(tx, {
          uuid: uuid,
          userId: user[0].id,
          createdAt: now,
          expireAt: expires,
        })

        // save user roles
        await createRole(tx, data.roles, user[0])

        // save user bank accounts
        if (data.bankAccounts) {
          await createBankAcc(tx, data.bankAccounts, user[0])
        }

        output = {
          id: user[0].insertId,
          firstName: data.user.firstName,
          lastName: data.user.lastName,
          firstAttempt: Boolean(data.is_first_login),
          emailAddress: data.user.email,
          phoneNumber: `(${data.user.phoneCode}) ${data.user.phoneNumber}`,
          kycStatus: Boolean(data.user.kycStatus),
          token: {
            bearer: data.token,
            refresh: data.refreshToken,
          },
          sessionId: sessionId,
          isValidator: data.user.roles.includes('Validation') ? true : false,
        }
      }

      return output
    } catch (error) {
      throw createError({
        status: 500,
        statusText: 'Failed to create user record',
      })
    }
  })
}

const createSession = async (
  tx: any,
  sessionData: InsertUserSession
): Promise<string> => {
  const newSession = await tx
    .insert(sessions)
    .values(sessionData)
    .returning({ insertId: sessions.uuid })

  return newSession[0].insertId
}

const createRole = async (tx: any, roleData: Role[], user: UserResponse) => {
  const roleMap: InsertRole[] = roleData.map(role => {
    const uuid = crypto.randomUUID()
    return {
      uuid: uuid,
      userId: user.id,
      code: role.roleSlug,
      name: role.roleName,
    }
  })

  await tx.insert(roles).values(roleMap)
}

const createBankAcc = async (
  tx: any,
  bankData: BankAcc[],
  user: UserResponse
) => {
  const bankAccMap: InsertBankAcc[] = bankData.map(acc => {
    const uuid = crypto.randomUUID()
    return {
      uuid: uuid,
      userId: user.id,
      iBan: acc.bankIBAN,
      bank: acc.bankName,
      accRef: acc.acctSlug,
      accType: acc.acctType,
      agency: acc.agenName,
      balance: String(acc.amt),
      clientType: acc.clientType,
    }
  })

  await tx.insert(bankAcc).values(bankAccMap)
}

const deleteUser = async (sessionId: string) => {
  try {
    // get all active sessions for auth user
    const currentSessionWithUser = await db.query.sessions.findFirst({
      columns: {
        uuid: true,
      },
      where: eq(sessions.uuid, sessionId),
      with: {
        user: {
          columns: {
            id: true,
            firstName: true,
            lastName: true,
          },
          with: {
            sessions: {
              columns: {
                uuid: true,
                userId: true,
                createdAt: true,
                expireAt: true,
              },
            },
          },
        },
      },
    })

    if (currentSessionWithUser) {
      if (currentSessionWithUser?.user.sessions.length > 1) {
        await db.delete(sessions).where(eq(sessions.uuid, sessionId))
      } else {
        await db
          .delete(users)
          .where(eq(users.id, currentSessionWithUser.user.id))
      }
    }
  } catch (error) {}
}

export { saveUser, deleteUser, getOtp }
