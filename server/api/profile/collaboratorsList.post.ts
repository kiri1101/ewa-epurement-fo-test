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
    loginSchema.safeParse(body)
  )

  const response: UserCollaboratorResponse | null = payload.success
    ? ((await api(config.private.api.auth.clientUser.list, {
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
      })) as UserCollaboratorResponse | null)
    : null

  if (response) {
    if (String(response?.pesake.code).length > 0) {
      throw createError({
        statusCode: 500,
        statusText: response?.pesake.details.pesakeDetail,
      })
    } else {
      output = response?.data.users.map((user: CollaboratorList) => {
        return {
          uuid: crypto.randomUUID(),
          username: user.userPseudo,
          firstName: user.firstName,
          lastName: user.lastName,
          email: user.email,
          phoneCode: user.phoneCode,
          phoneNumber: user.phoneNumber,
          roles: user.bankinfo.roles,
          bankName: user.bankinfo.bankName,
          accountNumber: user.bankinfo.accountNumber,
          accountBalance: user.bankinfo.bankBalance,
          accountType: user.bankinfo.accountType,
          createdAt: user.createdDate,
          isActive: Boolean(user.isActive),
        }
      })
    }
  }

  return {
    validError: payload.error ? errorMap(payload.error.issues) : null,
    apiResponse: output,
  }
})
