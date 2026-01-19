import { beneficiaries } from '~/db/schema'
import type { H3Event } from 'h3'

export default defineEventHandler(async (event: H3Event) => {
  const currencyList = await getCurrency()

  const bankAccounts = await getAccounts(event)

  const beneficiaryList = await db
    .select({
      name: beneficiaries.fullName,
      value: beneficiaries.code,
    })
    .from(beneficiaries)

  return {
    currency: currencyList,
    beneficiary: beneficiaryList,
    account: bankAccounts,
  }
})
