import { fetch } from '~~/server/utils/fetch'
import { z, errorMap } from '~~/server/utils/zod'
import { loadLocale } from '~~/server/utils/locale'
import type { H3Event } from 'h3'

type Response = {
  pesake: Pesake
  data: {
    status: string
    message: string
    userCreatedId: string
    benefSlug: string
    benefEtat: string
    benefName: string
    benefType: string
    iban: string
    clientCode: string
    clientKYCStatus: string
    docsRequis: number
    dossierComplet: number
    createdAt: string
  }
}

export default defineEventHandler(
  async (
    event: H3Event,
  ): Promise<{
    validError: ZodErrorMap[] | null
    apiResponse: {
      fullName: string
      message: string
      iban: string
      status: string
    } | null
  }> => {
    const config = useRuntimeConfig(event)
    const reqBody = await readBody(event)
    const lang = (reqBody.lang === 'fr' ? 'fr' : 'en') as 'en' | 'fr'
    const t = await loadLocale(lang)
    let output = null

    const loginSchema = z.object({
      fullName: z
        .string({
          error: () => ({ message: t.required }),
        })
        .min(Number(config.private.validation.zod.min), {
          message: String(t.min).replaceAll(
            ':value',
            String(config.private.validation.zod.min),
          ),
        }),
      mailingAddress:
        reqBody.mailingAddress.trim().length > 0
          ? z.email({
              error: () => ({ message: t.email }),
            })
          : z.string().optional(),
      phone:
        reqBody.phone.trim().length > 0
          ? z.string({
              error: () => ({ message: t.required }),
            })
          : z.string().optional(),
      countryCode:
        reqBody.countryCode.trim().length > 0
          ? z.string({
              error: () => ({ message: t.required }),
            })
          : z.string().optional(),
      country: z
        .string({
          error: () => ({ message: t.required }),
        })
        .min(Number(config.private.validation.zod.min), {
          message: String(t.min).replaceAll(
            ':value',
            String(config.private.validation.zod.min),
          ),
        }),
      bank: z
        .string({
          error: () => ({ message: t.required }),
        })
        .min(Number(config.private.validation.zod.min), {
          message: String(t.min).replaceAll(
            ':value',
            String(config.private.validation.zod.min),
          ),
        }),
      iban: z
        .string({
          error: () => ({ message: t.required }),
        })
        .min(Number(config.private.validation.zod.iban.min), {
          message: String(t.min).replaceAll(
            ':value',
            String(config.private.validation.zod.iban.min),
          ),
        })
        .max(Number(config.private.validation.zod.iban.max), {
          message: String(t.max).replaceAll(
            ':value',
            String(config.private.validation.zod.iban.max),
          ),
        }),
      swift: z
        .string({
          error: () => ({ message: t.required }),
        })
        .min(Number(config.private.validation.zod.min), {
          message: String(t.min).replaceAll(
            ':value',
            String(config.private.validation.zod.min),
          ),
        }),
      lang: z.literal(['en', 'fr'], {
        error: () => ({ message: t.invalidLang }),
      }),
      idCode: z.string({
        error: () => ({ message: t.required }),
      }),
      line1: z.string({
        error: () => ({ message: t.required }),
      }),
      line2: z.string({
        error: () => ({ message: t.required }),
      }),
      city: z.string({
        error: () => ({ message: t.required }),
      }),
      state: z.string({
        error: () => ({ message: t.required }),
      }),
      postalCode: z.string({
        error: () => ({ message: t.required }),
      }),
      nationality: z.string({
        error: () => ({ message: t.required }),
      }),
    })

    const api = fetch(event)

    const payload = await readValidatedBody(event, body =>
      loginSchema.safeParse(body),
    )

    const response: Response | null = payload.success
      ? ((await api(config.private.api.beneficiary.update, {
          method: 'POST',
          body: {
            benefSlug: payload.data.idCode,
            fullName: payload.data.fullName,
            country: payload.data.country,
            bankName: payload.data.bank,
            swiftBic: payload.data.swift,
            iban: payload.data.iban,
            address1: payload.data.line1,
            address2: payload.data.line2,
            codeIdentify: payload.data.idCode,
            postalCode: payload.data.postalCode,
            town: payload.data.city,
            region: payload.data.state,
            nationality: payload.data.nationality,
            email: payload.data.mailingAddress,
            phoneNumber: payload.data.phone,
            phoneCode: payload.data.countryCode,
            lang: payload.data.lang.toUpperCase(),
            origin: config.private.origin.toUpperCase(),
          },
        }).catch(() => {
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
          fullName: response?.data.benefName,
          message: response?.data.message,
          iban: response?.data.iban,
          status: response?.data.benefEtat,
        }
      }
    }

    return {
      validError: payload.error ? errorMap(payload.error.issues) : null,
      apiResponse: output,
    }
  },
)
