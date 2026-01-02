import { fetch } from '~~/server/utils/fetch'
import { z, errorMap } from '~~/server/utils/zod'
import { loadLocale } from '~~/server/utils/locale'
import type { ApiResponse } from '~~/shared/utils/model'
import type { H3Event } from 'h3'

export default defineEventHandler(async (event: H3Event) => {
  const config = useRuntimeConfig(event)
  const reqBody = await readBody(event)
  const lang = (reqBody.lang === 'fr' ? 'fr' : 'en') as 'en' | 'fr'
  const t = await loadLocale(lang)
  let output = null

  const loginSchema = z.object({
    pseudo: z
      .string({
        error: () => ({ message: t.required }),
      })
      .min(Number(config.private.validation.zod.min), {
        message: String(t.min).replaceAll(
          ':value',
          String(config.private.validation.zod.min)
        ),
      }),
    firstName: z
      .string({
        error: () => ({ message: t.required }),
      })
      .min(Number(config.private.validation.zod.min), {
        message: String(t.min).replaceAll(
          ':value',
          String(config.private.validation.zod.min)
        ),
      }),
    lastName: z
      .string({
        error: () => ({ message: t.required }),
      })
      .min(Number(config.private.validation.zod.min), {
        message: String(t.min).replaceAll(
          ':value',
          String(config.private.validation.zod.min)
        ),
      }),
    mailingAddress: z.email({
      error: () => ({ message: t.email }),
    }),
    phone: z
      .string({
        error: () => ({ message: t.required }),
      })
      .refine(val => val.trim().length > 8, {
        error: t.phone,
      }),
    countryCode: z.string({
      error: () => ({ message: t.required }),
    }),
    lang: z.literal(['en', 'fr'], {
      error: () => ({ message: t.invalidLang }),
    }),
    accounts: z.custom<ClientUserAccount>(
      (val: unknown) => {
        const account = val as ClientUserAccount
        return (
          Object.keys(account).length > 0 &&
          Object.values(account).filter(
            acc => acc.role.trim().length === 0 || acc.bank.trim().length === 0
          ).length === 0
        )
      },
      {
        error: () => ({ message: t.client_user_account }),
      }
    ),
  })

  const api = fetch(event)

  const payload = await readValidatedBody(event, body =>
    loginSchema.safeParse(body)
  )

  console.log('payload data: ', payload.data)

  const response: ApiResponse | null = payload.success
    ? ((await api(config.private.api.auth.clientUser.create, {
        method: 'POST',
        body: {
          pseudo: payload.data.pseudo,
          firstName: payload.data.firstName,
          lastName: payload.data.lastName,
          email: payload.data.mailingAddress,
          phoneCode: payload.data.countryCode,
          phone: payload.data.phone,
          accountDetails: Object.values(payload.data.accounts).map(acc => {
            return {
              accBankSlug: acc.bank,
              roleSlug: acc.role === '1' ? 'VA' : 'SA',
            }
          }),
          lang: payload.data.lang.toUpperCase(),
          origin: config.private.origin.toUpperCase(),
        },
      }).catch(error => {
        throw createError({
          statusCode: 500,
          statusText: t.server_api_failed,
        })
      })) as ApiResponse | null)
    : null

  if (response) {
    if (String(response?.pesake.code).length > 0) {
      throw createError({
        statusCode: 500,
        statusText: response?.pesake.details.pesakeDetail,
      })
    } else {
      output = await saveUser(response?.data)
    }
  }

  return {
    validError: payload.error ? errorMap(payload.error.issues) : null,
    apiResponse: output,
  }
})
