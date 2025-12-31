import { users, roles, bankAcc, InsertRole, InsertBankAcc } from '~/db/schema'
import { eq, and } from 'drizzle-orm'
import { Role, BankAcc, AuthData } from '~~/shared/utils/model'
import type { H3Event } from 'h3'

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
      .where(and(eq(users.uuid, user?.id), eq(users.otp, Number(otpCode))))
    response = result.length > 0 ? result[0].otp : null
  }
  return response
}

const saveUser = async (
  event: H3Event,
  data: AuthResponse
): Promise<AuthData> => {
  try {
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
      otp: data.otp,
      bearerToken: data.token,
      refreshToken: data.refreshToken,
      tokenLife: String(data.expired_at),
    }

    const user: UserResponse[] = await db
      .insert(users)
      .values(userData)
      .returning({ insertId: users.uuid, id: users.id })

    // save user roles
    createRole(data.roles, user[0])
    // save user bank accounts
    if (data.bankAccounts) {
      createBankAcc(data.bankAccounts, user[0])
    }
    // return user instance
    return {
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
    }
  } catch (error) {
    throw createError({
      status: 500,
      statusText: 'Failed to create user record',
    })
  }
}

const createRole = async (roleData: Role[], user: UserResponse) => {
  try {
    const roleMap: InsertRole[] = roleData.map(role => {
      const uuid = crypto.randomUUID()
      return {
        uuid: uuid,
        userId: user.id,
        code: role.roleSlug,
        name: role.roleName,
      }
    })

    await db.insert(roles).values(roleMap)
  } catch (error) {
    console.log(error)
    throw createError({
      status: 500,
      statusText: 'Failed to create user role',
    })
  }
}

const createBankAcc = async (bankData: BankAcc[], user: UserResponse) => {
  try {
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

    await db.insert(bankAcc).values(bankAccMap)
  } catch (error) {
    console.log('create bank account: ', error)
    throw createError({
      status: 500,
      statusText: 'Failed to create user bank accounts',
    })
  }
}

const deleteUser = async (userId: string) => {
  let output
  try {
    const user: { deletedId: string }[] = await db
      .delete(users)
      .where(eq(users.uuid, userId))
      .returning({ deletedId: users.uuid })

    output = user[0].deletedId
  } catch (error) {
    console.log('save user error: ', error)
    output = null
  }
  return output
}

export { saveUser, deleteUser, getOtp }
