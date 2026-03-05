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
    id: z.string({
      error: () => ({ message: t.invalidId }),
    }),
    lang: z.literal(['en', 'fr'], {
      error: () => ({ message: t.invalidLang }),
    }),
  })

  const api = fetch(event)

  const payload = await readValidatedBody(event, body =>
    loginSchema.safeParse(body)
  )

  const response = payload.success
    ? ((await api(config.private.api.domiciliation.detail, {
        method: 'POST',
        body: {
          workFlowUniqueCode: payload.data.id,
          lang: payload.data.lang.toUpperCase(),
          origin: config.private.origin.toUpperCase(),
        },
      }).catch(error => {
        throw createError({
          statusCode: 500,
          statusText: t.server_api_failed,
        })
      })) as DomiciliationDetailsResponse | null)
    : null

  if (response) {
    if (String(response?.pesake.code).length > 0) {
      throw createError({
        statusCode: 500,
        statusText: response?.pesake.details.pesakeDetail,
      })
    }

    output = {
      supplier: {
        name: response.data.domiciliationInfo.supplierFullName,
        country: response.data.domiciliationInfo.supplierCountry,
        address: response.data.domiciliationInfo.supplierFullAdress,
      },
      infos: {
        designation: response.data.domiciliationInfo.goodsCommercialLabel,
        office: response.data.domiciliationInfo.bureauEmbarquement,
        quantity: Number(response.data.domiciliationInfo.quantity),
        fob: Number(response.data.domiciliationInfo.fobValue),
        caf: Number(response.data.domiciliationInfo.cafValue),
        reference: response.data.domiciliationInfo.referenceNumber,
        paymentDeadline: response.data.domiciliationInfo.echeanceDePaiement,
        currency: response.data.domiciliationInfo.supplierCurrency,
        customInfos: response.data.domiciliationInfo.goodsDouaneName,
        chapter: response.data.domiciliationInfo.goodsChapitre,
        description: response.data.domiciliationInfo.goodsServiceLabel,
        amount: response.data.domiciliationInfo.supplierAmount,
        type: response.data.domiciliationInfo.natureOfImport,
      },
      files: response.data.detailUpload.map(
        (file: DomiciliationDetailFile) => ({
          shortLabel: file.fileTypeLibc,
          longLabel: file.fileTypeLiba,
          createdAt: file.createdAt,
          canEdit: file.canEditFile,
          url: file.shortLink,
        })
      ),
      history: response.data.requestHistry.map(
        (history: DomiciliationDetailReqHistory) => ({
          nodeLabel: history.nodeLabel,
          createAt: history.createAt,
          roleLabel: history.roleLabel,
        })
      ),
    }
  }

  return {
    validError: payload.error ? errorMap(payload.error.issues) : null,
    apiResponse: output,
  }
})
