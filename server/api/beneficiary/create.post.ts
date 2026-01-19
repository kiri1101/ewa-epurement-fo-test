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
    event: H3Event
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
            String(config.private.validation.zod.min)
          ),
        }),
      country: z
        .string({
          error: () => ({ message: t.required }),
        })
        .min(Number(config.private.validation.zod.min), {
          message: String(t.min).replaceAll(
            ':value',
            String(config.private.validation.zod.min)
          ),
        }),
      type: z.literal(['individual', 'company'], {
        error: () => ({ message: t.invalidType }),
      }),
      bank: z
        .string({
          error: () => ({ message: t.required }),
        })
        .min(Number(config.private.validation.zod.min), {
          message: String(t.min).replaceAll(
            ':value',
            String(config.private.validation.zod.min)
          ),
        }),
      iban: z
        .string({
          error: () => ({ message: t.required }),
        })
        .min(Number(config.private.validation.zod.min), {
          message: String(t.min).replaceAll(
            ':value',
            String(config.private.validation.zod.min)
          ),
        }),
      swift: z
        .string({
          error: () => ({ message: t.required }),
        })
        .min(Number(config.private.validation.zod.min), {
          message: String(t.min).replaceAll(
            ':value',
            String(config.private.validation.zod.min)
          ),
        }),
      files: z
        .record(
          z
            .string({
              error: () => ({ message: t.required }),
            })
            .min(Number(config.private.validation.zod.min), {
              message: String(t.min).replaceAll(
                ':value',
                String(config.private.validation.zod.min)
              ),
            }),
          z
            .string({
              error: () => ({ message: t.required }),
            })
            .min(Number(config.private.validation.zod.min), {
              message: String(t.min).replaceAll(
                ':value',
                String(config.private.validation.zod.min)
              ),
            }),
          {
            error: () => ({ message: t.required }),
          }
        )
        .refine(value => Object.values(value).length > 0, {
          message: t.required,
        }),
      lang: z.literal(['en', 'fr'], {
        error: () => ({ message: t.invalidLang }),
      }),
    })

    const api = fetch(event)

    const payload = await readValidatedBody(event, body =>
      loginSchema.safeParse(body)
    )

    const response: Response | null = payload.success
      ? ((await api(config.private.api.beneficiary.create, {
          method: 'POST',
          body: {
            benefType:
              payload.data.type === 'individual' ? 'physique' : 'morale',
            fullName: payload.data.fullName,
            country: payload.data.country,
            bankName: payload.data.bank,
            swiftBic: payload.data.swift,
            iban: payload.data.iban,
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
  }
)
