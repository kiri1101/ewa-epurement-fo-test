import type { FetchError } from 'ofetch'

export const handleApiError = (error: unknown) => {
  let output = ''
  if (error && typeof error === 'object' && 'status' in error) {
    const err = error as FetchError<any>

    output = err.data?.statusMessage || err.statusText
  }

  return output
}

export const handleApiErrorWithCode = (error: unknown) => {
  let output = {
    status: 0,
    message: '',
  }
  if (error && typeof error === 'object' && 'status' in error) {
    const err = error as FetchError<any>

    output = {
      status: Number(err.statusCode),
      message: err.data?.statusMessage || err.statusText,
    }
  }

  return output
}
