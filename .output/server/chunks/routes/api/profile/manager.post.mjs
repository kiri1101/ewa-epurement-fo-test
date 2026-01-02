import { d as defineEventHandler, u as useRuntimeConfig, r as readBody, l as loadLocale, f as fetch, a as readValidatedBody, c as createError, s as saveUser, e as errorMap } from '../../../_/nitro.mjs';
import * as z from 'zod';
import 'drizzle-orm';
import 'drizzle-orm/sqlite-core';
import 'drizzle-orm/libsql';
import '@libsql/client';
import 'moment';
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

const manager_post = defineEventHandler(async (event) => {
  const config = useRuntimeConfig(event);
  const reqBody = await readBody(event);
  const lang = reqBody.lang === "fr" ? "fr" : "en";
  const t = await loadLocale(lang);
  let output = null;
  const loginSchema = z.object({
    pseudo: z.string({
      error: () => ({ message: t.required })
    }).min(Number(config.private.validation.zod.min), {
      message: String(t.min).replaceAll(
        ":value",
        String(config.private.validation.zod.min)
      )
    }),
    firstName: z.string({
      error: () => ({ message: t.required })
    }).min(Number(config.private.validation.zod.min), {
      message: String(t.min).replaceAll(
        ":value",
        String(config.private.validation.zod.min)
      )
    }),
    lastName: z.string({
      error: () => ({ message: t.required })
    }).min(Number(config.private.validation.zod.min), {
      message: String(t.min).replaceAll(
        ":value",
        String(config.private.validation.zod.min)
      )
    }),
    mailingAddress: z.email({
      error: () => ({ message: t.email })
    }),
    phone: z.string({
      error: () => ({ message: t.required })
    }).refine((val) => val.trim().length > 8, {
      error: t.phone
    }),
    countryCode: z.string({
      error: () => ({ message: t.required })
    }),
    lang: z.literal(["en", "fr"], {
      error: () => ({ message: t.invalidLang })
    }),
    accounts: z.custom(
      (val) => {
        const account = val;
        return Object.keys(account).length > 0 && Object.values(account).filter(
          (acc) => acc.role.trim().length === 0 || acc.bank.trim().length === 0
        ).length === 0;
      },
      {
        error: () => ({ message: t.client_user_account })
      }
    )
  });
  const api = fetch(event);
  const payload = await readValidatedBody(
    event,
    (body) => loginSchema.safeParse(body)
  );
  console.log("payload data: ", payload.data);
  const response = payload.success ? await api(config.private.api.auth.clientUser.create, {
    method: "POST",
    body: {
      pseudo: payload.data.pseudo,
      firstName: payload.data.firstName,
      lastName: payload.data.lastName,
      email: payload.data.mailingAddress,
      phoneCode: payload.data.countryCode,
      phone: payload.data.phone,
      accountDetails: Object.values(payload.data.accounts).map((acc) => {
        return {
          accBankSlug: acc.bank,
          roleSlug: acc.role === "1" ? "VA" : "SA"
        };
      }),
      lang: payload.data.lang.toUpperCase(),
      origin: config.private.origin.toUpperCase()
    }
  }).catch((error) => {
    throw createError({
      statusCode: 500,
      statusText: t.server_api_failed
    });
  }) : null;
  if (response) {
    if (String(response == null ? void 0 : response.pesake.code).length > 0) {
      throw createError({
        statusCode: 500,
        statusText: response == null ? void 0 : response.pesake.details.pesakeDetail
      });
    } else {
      output = await saveUser(response == null ? void 0 : response.data);
    }
  }
  return {
    validError: payload.error ? errorMap(payload.error.issues) : null,
    apiResponse: output
  };
});

export { manager_post as default };
//# sourceMappingURL=manager.post.mjs.map
