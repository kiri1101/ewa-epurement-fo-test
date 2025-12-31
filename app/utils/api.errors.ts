import type { FetchError } from 'ofetch'

export const handleApiError = (error: unknown) => {
  let output = ''
  if (error && typeof error === 'object' && 'status' in error) {
    const err = error as FetchError<any>

    output = err.data?.statusMessage || err.statusText
  }

  return output
}
