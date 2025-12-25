export const useNotify = () => {
  const toast = useToast()
  const config = useRuntimeConfig()

  const s = (message: string, title: string = 'Success') =>
    toast.add({
      severity: 'success',
      summary: title,
      detail: message,
      life: parseInt(config.public.app.toastLife),
    })

  const e = (message: string, title: string = 'Error') =>
    toast.add({
      severity: 'error',
      summary: title,
      detail: message,
      life: parseInt(config.public.app.toastLife),
    })

  const i = (message: string, title: string = 'Info') =>
    toast.add({
      severity: 'info',
      summary: title,
      detail: message,
      life: parseInt(config.public.app.toastLife),
    })

  const w = (message: string, title: string = 'Warning') =>
    toast.add({
      severity: 'warn',
      summary: title,
      detail: message,
      life: parseInt(config.public.app.toastLife),
    })

  return { s, e, i, w }
}
