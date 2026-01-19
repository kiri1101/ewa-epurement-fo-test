import { k as useToast, e as useRuntimeConfig } from './server.mjs';

const useNotify = () => {
  const toast = useToast();
  const config = useRuntimeConfig();
  const s = (message, title = "Success") => toast.add({
    severity: "success",
    summary: title,
    detail: message,
    life: parseInt(config.public.app.toastLife)
  });
  const e = (message, title = "Error") => toast.add({
    severity: "error",
    summary: title,
    detail: message,
    life: parseInt(config.public.app.toastLife)
  });
  const i = (message, title = "Info") => toast.add({
    severity: "info",
    summary: title,
    detail: message,
    life: parseInt(config.public.app.toastLife)
  });
  const w = (message, title = "Warning") => toast.add({
    severity: "warn",
    summary: title,
    detail: message,
    life: parseInt(config.public.app.toastLife)
  });
  return { s, e, i, w };
};

export { useNotify as u };
//# sourceMappingURL=notify-ERv49H4P.mjs.map
