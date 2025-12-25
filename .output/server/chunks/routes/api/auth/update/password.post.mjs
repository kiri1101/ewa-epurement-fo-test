import { d as defineEventHandler, u as useRuntimeConfig, a as authOtp, r as readBody, l as loadLocale, f as fetch, c as readValidatedBody, e as errorMap } from '../../../../_/nitro.mjs';
import * as z from 'zod';
import 'node:http';
import 'node:https';
import 'node:events';
import 'node:buffer';
import 'vue-router';
import 'node:fs';
import 'node:path';
import '@primevue/core/base/style';
import '@primevue/core/basecomponent/style';
import '@primeuix/styles/autocomplete';
import '@primeuix/utils/object';
import '@primeuix/styles/cascadeselect';
import '@primeuix/styles/checkbox';
import '@primeuix/styles/checkboxgroup';
import '@primeuix/styles/colorpicker';
import '@primeuix/styles/datepicker';
import '@primeuix/styles/floatlabel';
import '@primeuix/styles/iconfield';
import '@primeuix/styles/iftalabel';
import '@primeuix/styles/inputchips';
import '@primeuix/styles/inputgroup';
import '@primeuix/styles/inputnumber';
import '@primeuix/styles/inputotp';
import '@primeuix/styles/inputtext';
import '@primeuix/styles/knob';
import '@primeuix/styles/listbox';
import '@primeuix/styles/multiselect';
import '@primeuix/styles/password';
import '@primeuix/styles/radiobutton';
import '@primeuix/styles/radiobuttongroup';
import '@primeuix/styles/rating';
import '@primeuix/styles/select';
import '@primeuix/styles/selectbutton';
import '@primeuix/styles/slider';
import '@primeuix/styles/textarea';
import '@primeuix/styles/togglebutton';
import '@primeuix/styles/toggleswitch';
import '@primeuix/styles/treeselect';
import '@primeuix/styles/button';
import '@primeuix/styles/buttongroup';
import '@primeuix/styles/speeddial';
import '@primeuix/styles/splitbutton';
import '@primeuix/styles/datatable';
import '@primeuix/styles/dataview';
import '@primeuix/styles/orderlist';
import '@primeuix/styles/organizationchart';
import '@primeuix/styles/paginator';
import '@primeuix/styles/picklist';
import '@primeuix/styles/tree';
import '@primeuix/styles/treetable';
import '@primeuix/styles/timeline';
import '@primeuix/styles/virtualscroller';
import '@primeuix/styles/accordion';
import '@primeuix/styles/card';
import '@primeuix/styles/divider';
import '@primeuix/styles/fieldset';
import '@primeuix/styles/panel';
import '@primeuix/styles/scrollpanel';
import '@primeuix/styles/splitter';
import '@primeuix/styles/stepper';
import '@primeuix/styles/tabview';
import '@primeuix/styles/tabs';
import '@primeuix/styles/toolbar';
import '@primeuix/styles/confirmdialog';
import '@primeuix/styles/confirmpopup';
import '@primeuix/styles/dialog';
import '@primeuix/styles/drawer';
import '@primeuix/styles/popover';
import '@primeuix/styles/fileupload';
import '@primeuix/styles/breadcrumb';
import '@primeuix/styles/contextmenu';
import '@primeuix/styles/dock';
import '@primeuix/styles/menu';
import '@primeuix/styles/menubar';
import '@primeuix/styles/megamenu';
import '@primeuix/styles/panelmenu';
import '@primeuix/styles/steps';
import '@primeuix/styles/tabmenu';
import '@primeuix/styles/tieredmenu';
import '@primeuix/styles/message';
import '@primeuix/styles/inlinemessage';
import '@primeuix/styles/toast';
import '@primeuix/styles/carousel';
import '@primeuix/styles/galleria';
import '@primeuix/styles/image';
import '@primeuix/styles/imagecompare';
import '@primeuix/styles/avatar';
import '@primeuix/styles/badge';
import '@primeuix/styles/blockui';
import '@primeuix/styles/chip';
import '@primeuix/styles/inplace';
import '@primeuix/styles/metergroup';
import '@primeuix/styles/overlaybadge';
import '@primeuix/styles/scrolltop';
import '@primeuix/styles/skeleton';
import '@primeuix/styles/progressbar';
import '@primeuix/styles/progressspinner';
import '@primeuix/styles/tag';
import '@primeuix/styles/terminal';
import '@primevue/forms/form/style';
import '@primevue/forms/formfield/style';
import '@primeuix/styles/tooltip';
import '@primeuix/styles/ripple';
import '@primeuix/styled';
import 'node:url';
import 'node:crypto';

const password_post = defineEventHandler(async (event) => {
  const config = useRuntimeConfig(event);
  const otpCookie = authOtp(event);
  const otpSent = otpCookie.getOtpSnapShot();
  const reqBody = await readBody(event);
  const lang = reqBody.lang === "fr" ? "fr" : "en";
  const t = await loadLocale(lang);
  const loginSchema = z.object({
    otp: z.string({
      error: () => ({ message: t.required })
    }).min(Number(config.private.validation.zod.otp), {
      message: String(t.min).replaceAll(
        ":value",
        String(config.private.validation.zod.otp)
      )
    }).refine((val) => Number(val) === Number(otpSent), {
      error: String(t.bad_otp)
    }),
    secret: z.string({
      error: () => ({ message: t.required })
    }).min(Number(config.private.validation.zod.secret_min), {
      message: String(t.min).replaceAll(
        ":value",
        String(config.private.validation.zod.secret_min)
      )
    }),
    secret_confirm: z.string({
      error: () => ({ message: t.required })
    }).min(Number(config.private.validation.zod.secret_min), {
      message: String(t.min).replaceAll(
        ":value",
        String(config.private.validation.zod.secret_min)
      )
    }),
    lang: z.literal(["en", "fr"], {
      error: () => ({ message: t.invalidLang })
    })
  });
  const api = fetch(event);
  const payload = await readValidatedBody(
    event,
    (body) => loginSchema.safeParse(body)
  );
  let respError = {
    response: {},
    code: 0
  };
  const response = payload.success ? await api(config.private.auth.resetPwd, {
    method: "POST",
    body: {
      codeOtp: payload.data.otp.trim(),
      actiontype: 1,
      password: payload.data.secret.trim(),
      confirm_password: payload.data.secret_confirm.trim(),
      lang: payload.data.lang.toUpperCase(),
      origin: config.private.origin.toUpperCase()
    }
  }).catch((error) => {
    respError.response = error.data;
    respError.code = error.status;
    return null;
  }) : null;
  if (!payload.error || respError.code === 0) {
    otpCookie.clear();
  }
  return {
    validError: payload.error ? errorMap(payload.error.issues) : null,
    apiResponse: response,
    errResponse: respError.code !== 0 ? respError : null
  };
});

export { password_post as default };
//# sourceMappingURL=password.post.mjs.map
