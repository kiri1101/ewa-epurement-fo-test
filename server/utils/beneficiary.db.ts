import { beneficiaries, users } from '~/db/schema'
import type { InsertBeneficiary } from '~/db/schema'
import { eq, like, or } from 'drizzle-orm'
import type { H3Event } from 'h3'
import moment from 'moment'

export const saveBeneficiary = async (
  event: H3Event,
  response: BeneficiaryResponse[]
): Promise<CustomInsertBeneficiary[]> => {
  const auth = authCookie(event)
  const authUser = auth.getUserSnapShot()
  let output

  if (authUser) {
    // get auth user data from DB
    const user = await db
      .select({ userId: users.id })
      .from(users)
      .where(eq(users.uuid, authUser.id))

    const authUserBeneficiary = await db.query.beneficiaries.findMany({
      columns: {
        code: true,
        fullName: true,
        country: true,
        bankName: true,
        iban: true,
        status: true,
      },
      where: eq(beneficiaries.userId, user[0].userId),
    })

    // check if response beneficiary count > local count
    if (response.length > authUserBeneficiary.length) {
      output = await db.transaction(async tx => {
        // flush auth user beneficiaries data from DB
        await tx
          .delete(beneficiaries)
          .where(eq(beneficiaries.userId, user[0].userId))

        // save new collaborators data for auth user
        return await createBeneficiary(tx, response, user)
      })
    } else {
      output = authUserBeneficiary
    }
  }

  return output
}

const createBeneficiary = async (
  tx: any,
  response: BeneficiaryResponse[],
  user: {
    userId: number
  }[]
) => {
  const beneficiaryMap: InsertBeneficiary[] = response.map(
    (data: BeneficiaryResponse) => {
      const uuid = crypto.randomUUID()

      return {
        uuid: uuid,
        userId: user[0]?.userId,
        code: data.benefSlug,
        type: data.benefType,
        fullName: data.fullName,
        country: data.country,
        email: data.email,
        phoneCode: data.phoneCode,
        phoneNumber: data.phoneNumber,
        address: data.address,
        status: data.status,
        bankName: data.bankDetails.bankName,
        swiftBic: data.bankDetails.swiftBic,
        iban: data.bankDetails.iban,
        createdAt: moment(data.createdAt).format('YYYY-MM-DD'),
      }
    }
  )

  return await tx.insert(beneficiaries).values(beneficiaryMap).returning({
    code: beneficiaries.code,
    fullName: beneficiaries.fullName,
    country: beneficiaries.country,
    bankName: beneficiaries.bankName,
    iban: beneficiaries.iban,
    status: beneficiaries.status,
  })
}

export const searchBeneficiaries = async (index: string) => {
  return await db
    .select({
      code: beneficiaries.code,
      fullName: beneficiaries.fullName,
      country: beneficiaries.country,
      bankName: beneficiaries.bankName,
      iban: beneficiaries.iban,
      status: beneficiaries.status,
    })
    .from(beneficiaries)
    .where(
      or(
        like(beneficiaries.fullName, `%${index}%`),
        like(beneficiaries.bankName, `%${index}%`)
      )
    )
    .limit(10)
}
