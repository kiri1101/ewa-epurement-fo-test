import { fetch } from '~~/server/utils/fetch'
import { z } from '~~/server/utils/zod'
import { loadLocale } from '~~/server/utils/locale'
import type { H3Event } from 'h3'
import moment from 'moment'

type Response = {
  pesake: Pesake
  data: {
    domiciliationInfo: Domiciliation
  }
}

export default defineEventHandler(async (event: H3Event) => {
  const config = useRuntimeConfig(event)
  const reqBody = await readBody(event)
  const lang = (reqBody.lang === 'fr' ? 'fr' : 'en') as 'en' | 'fr'
  const t = await loadLocale(lang)
  let output = null

  const loginSchema = z.object({
    beneficiary: z
      .string({
        error: () => ({ message: t.required }),
      })
      .min(Number(config.private.validation.zod.min), {
        message: String(t.min).replaceAll(
          ':value',
          String(config.private.validation.zod.min),
        ),
      }),
    category: z
      .string({
        error: () => ({ message: t.required }),
      })
      .min(Number(config.private.validation.zod.min), {
        message: String(t.min).replaceAll(
          ':value',
          String(config.private.validation.zod.min),
        ),
      }),
    foreignAmount: z
      .number({
        error: () => ({ message: t.required }),
      })
      .min(Number(config.private.validation.zod.min), {
        message: String(t.min).replaceAll(
          ':value',
          String(config.private.validation.zod.min),
        ),
      }),
    quantity: z.number({
      error: () => ({ message: t.required }),
    }),
    matricule: z.string({
      error: () => ({ message: t.required }),
    }),
    job: z.string({
      error: () => ({ message: t.required }),
    }),
    currency: z
      .string({
        error: () => ({ message: t.required }),
      })
      .min(Number(config.private.validation.zod.min), {
        message: String(t.min).replaceAll(
          ':value',
          String(config.private.validation.zod.min),
        ),
      }),
    checkIn: z.string({
      error: () => ({ message: t.required }),
    }),
    reference: z
      .string({
        error: () => ({ message: t.required }),
      })
      .min(Number(config.private.validation.zod.min), {
        message: String(t.min).replaceAll(
          ':value',
          String(config.private.validation.zod.min),
        ),
      }),
    fob: z.number({
      error: () => ({ message: t.required }),
    }),
    caf: z.number({
      error: () => ({ message: t.required }),
    }),
    customNum: z
      .string({
        error: () => ({ message: t.required }),
      })
      .min(Number(config.private.validation.zod.min), {
        message: String(t.min).replaceAll(
          ':value',
          String(config.private.validation.zod.min),
        ),
      }),
    dImp: z
      .string({
        error: () => ({ message: t.required }),
      })
      .min(Number(config.private.validation.zod.min), {
        message: String(t.min).replaceAll(
          ':value',
          String(config.private.validation.zod.min),
        ),
      }),
    commerceDesc: z
      .string({
        error: () => ({ message: t.required }),
      })
      .min(Number(config.private.validation.zod.min), {
        message: String(t.min).replaceAll(
          ':value',
          String(config.private.validation.zod.min),
        ),
      }),
    paymentDate: reqBody.paymentDate
      ? z.iso.datetime({
          error: () => ({ message: t.date }),
        })
      : z.nullable(z.literal(null)),
    files: z
      .record(
        z.string({
          error: () => ({ message: 'Provide a valid file' }),
        }),
        z.string({
          error: () => ({ message: 'Provide a valid file' }),
        }),
      )
      .refine(value => Object.values(value).length > 0, {
        message: 'Provide a valid file',
      }),
    lang: z.literal(['en', 'fr'], {
      error: () => ({ message: t.invalidLang }),
    }),
  })

  const api = fetch(event)

  const payload = await readValidatedBody(event, body =>
    loginSchema.safeParse(body),
  )

  const response: Response | null = payload.success
    ? ((await api(config.private.api.domiciliation.create, {
        method: 'POST',
        body: {
          demandeSlug: '',
          clientSlug: '',
          supplierSlug: payload.data.beneficiary,
          requestCategory: payload.data.category,
          supplierAmount: payload.data.foreignAmount,
          goodsQuantity:
            payload.data.quantity === 0 ? null : payload.data.quantity,
          profession: payload.data.job,
          immatriculation: payload.data.matricule,
          supplierCurrency: payload.data.currency,
          bureauEmbarquement: payload.data.checkIn,
          factureRef: payload.data.reference,
          fobCode: payload.data.fob === 0 ? null : payload.data.fob,
          cafCode: payload.data.caf === 0 ? null : payload.data.caf,
          douaneNomenclature: payload.data.customNum,
          declarationImportation: payload.data.dImp,
          commercialDescription: payload.data.commerceDesc,
          serviceDescription: '',
          chapitre: '',
          paymentDate: payload.data.paymentDate
            ? moment(payload.data.paymentDate).format('YYYY-MM-DD')
            : null,
          uploadedFiles: Object.values(payload.data.files),
          lang: payload.data.lang.toUpperCase(),
          origin: config.private.origin.toUpperCase(),
        },
      }).catch(error => {
        throw createError({
          statusCode: 500,
          statusText: t.server_api_failed,
        })
      })) as Response | null)
    : null

  if (response) {
    if (String(response?.pesake.code).length > 0) {
      throw createError({
        statusCode: 500,
        statusText: response?.pesake.details.pesakeDetail,
      })
    } else {
      output = {
        id: crypto.randomUUID(),
        code: response?.data.domiciliationInfo.unikCode,
        clientName: response?.data.domiciliationInfo.clientFullName,
        clientRegCom: response?.data.domiciliationInfo.clientRegistreCommerce,
        clientAddress: response?.data.domiciliationInfo.clientFullAdress,
        profession: response?.data.domiciliationInfo.profession,
        matricule: response?.data.domiciliationInfo.immatriculation,
        benefCode: response?.data.domiciliationInfo.supplierSlug,
        beneficiary: response?.data.domiciliationInfo.supplierFullName,
        benefCountry: response?.data.domiciliationInfo.supplierCountry,
        benefAddress: response?.data.domiciliationInfo.supplierFullAdress,
        serviceLabel: response?.data.domiciliationInfo.goodsServiceLabel,
        serviceChapter: response?.data.domiciliationInfo.goodsChapitre,
        customLabel: response?.data.domiciliationInfo.goodsDouaneName,
        ref: response?.data.domiciliationInfo.referenceNumber,
        baseAmount: response?.data.domiciliationInfo.clientAmount,
        baseCurrency: response?.data.domiciliationInfo.clientCurrency,
        benefAmount: response?.data.domiciliationInfo.supplierAmount,
        benefCurrency: response?.data.domiciliationInfo.supplierCurrency,
        balance: response?.data.domiciliationInfo.domiciliationBalance,
        paymentLimit: String(
          response?.data.domiciliationInfo.domiciliationOverdraftLimit,
        ),
        nature: response?.data.domiciliationInfo.natureOfImportLabel,
        natureCode: response?.data.domiciliationInfo.natureOfImport,
        createdAt: response?.data.domiciliationInfo.createAt,
        flowCode: response?.data.domiciliationInfo.workFlowUniqueCode,
        status: response?.data.domiciliationInfo.domiciliationStatus,
      }
    }
  }

  return {
    validError: payload.error ? errorMap(payload.error.issues) : null,
    apiResponse: output,
  }
})
