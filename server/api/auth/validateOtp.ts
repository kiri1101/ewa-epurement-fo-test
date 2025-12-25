import type { H3Event } from 'h3'
import { z, errorMap } from '~~/server/utils/zod'
import { loadLocale } from '~~/server/utils/locale'

export default defineEventHandler(async (event: H3Event) => {
  const config = useRuntimeConfig(event)
  const otpCookie = authOtp(event)
  const otpSent = otpCookie.getOtpSnapShot()

  const reqBody = await readBody(event)
  const lang = (reqBody.lang === 'fr' ? 'fr' : 'en') as 'en' | 'fr'
  const t = await loadLocale(lang)

  const OtpSchema = z.object({
    otp: z
      .string({
        error: () => ({ message: t.required }),
      })
      .min(Number(config.private.validation.zod.otp), {
        message: String(t.min).replaceAll(
          ':value',
          String(config.private.validation.zod.otp)
        ),
      }),
  })

  const payload = await readValidatedBody(event, body =>
    OtpSchema.safeParse(body)
  )

  const response = payload.success
    ? Number(payload.data.otp) === Number(otpSent)
    : null

  return {
    validError: payload.error ? errorMap(payload.error.issues) : null,
    apiResponse: response,
  }
})
