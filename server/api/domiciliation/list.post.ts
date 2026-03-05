import { fetch } from '~~/server/utils/fetch'
import { z, errorMap } from '~~/server/utils/zod'
import { loadLocale } from '~~/server/utils/locale'
import type { H3Event } from 'h3'

export default defineEventHandler(async (event: H3Event) => {
  const config = useRuntimeConfig(event)
  const reqBody = await readBody(event)
  const lang = (reqBody.lang === 'fr' ? 'fr' : 'en') as 'en' | 'fr'
  const t = await loadLocale(lang)
  let output = null

  const loginSchema = z.object({
    lang: z.literal(['en', 'fr'], {
      error: () => ({ message: t.invalidLang }),
    }),
  })

  const api = fetch(event)

  const payload = await readValidatedBody(event, body =>
    loginSchema.safeParse(body),
  )

  const response: DomiciliationResponse | null = payload.success
    ? ((await api(config.private.api.domiciliation.list, {
        method: 'POST',
        body: {
          lang: payload.data.lang.toUpperCase(),
          origin: config.private.origin.toUpperCase(),
        },
      }).catch(error => {
        throw createError({
          statusCode: 500,
          statusText: t.server_api_failed,
        })
      })) as DomiciliationResponse | null)
    : null

  if (response) {
    if (String(response?.pesake.code).length > 0) {
      throw createError({
        statusCode: 500,
        statusText: response?.pesake.details.pesakeDetail,
      })
    } else {
      output = response?.data.map((domiciliation: Domiciliation) => {
        return {
          id: crypto.randomUUID(),
          code: domiciliation.unikCode,
          clientName: domiciliation.clientFullName,
          clientRegCom: domiciliation.clientRegistreCommerce,
          clientAddress: domiciliation.clientFullAdress,
          profession: domiciliation.profession,
          matricule: domiciliation.immatriculation,
          benefCode: domiciliation.supplierSlug,
          beneficiary: domiciliation.supplierFullName,
          benefCountry: domiciliation.supplierCountry,
          benefAddress: domiciliation.supplierFullAdress,
          serviceLabel: domiciliation.goodsServiceLabel,
          serviceChapter: domiciliation.goodsChapitre,
          customLabel: domiciliation.goodsDouaneName,
          ref: domiciliation.referenceNumber,
          baseAmount: domiciliation.clientAmount,
          baseCurrency: domiciliation.clientCurrency,
          benefAmount: domiciliation.supplierAmount,
          benefCurrency: domiciliation.supplierCurrency,
          balance: domiciliation.domiciliationBalance,
          paymentLimit: String(domiciliation.domiciliationOverdraftLimit),
          nature: domiciliation.natureOfImportLabel,
          natureCode: domiciliation.natureOfImport,
          createdAt: domiciliation.createAt,
          flowCode: domiciliation.workFlowUniqueCode,
          status: domiciliation.domiciliationStatus,
          importDeclaration: domiciliation.declarationImportation,
        }
      })
    }
  }

  return {
    validError: payload.error ? errorMap(payload.error.issues) : null,
    apiResponse: output,
  }
})
