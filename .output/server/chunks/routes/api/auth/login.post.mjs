import { d as defineEventHandler, u as useRuntimeConfig, r as readBody, l as loadLocale, f as fetch, a as readValidatedBody, c as createError, e as errorMap } from '../../../_/nitro.mjs';
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

const login_post = defineEventHandler(
  async (event) => {
    var _a, _b, _c, _d, _e, _f, _g, _h, _i;
    const config = useRuntimeConfig(event);
    const reqBody = await readBody(event);
    const lang = reqBody.lang === "fr" ? "fr" : "en";
    const t = await loadLocale(lang);
    let output = null;
    const loginSchema = z.object({
      username: z.string({
        error: () => ({ message: t.required })
      }).min(Number(config.private.validation.zod.min), {
        message: String(t.min).replaceAll(
          ":value",
          String(config.private.validation.zod.min)
        )
      }),
      secret: z.string({
        error: () => ({ message: t.required })
      }).min(Number(config.private.validation.zod.min), {
        message: String(t.min).replaceAll(
          ":value",
          String(config.private.validation.zod.min)
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
    const response = payload.success ? await api(config.private.api.auth.login, {
      method: "POST",
      body: {
        pseudo: payload.data.username.trim(),
        password: payload.data.secret.trim(),
        lang: payload.data.lang.toUpperCase(),
        origin: config.private.origin.toUpperCase()
      }
    }).catch(() => {
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
        output = {
          user: {
            id: crypto.randomUUID(),
            username: response == null ? void 0 : response.data.user.userPseudo,
            firstName: response == null ? void 0 : response.data.user.firstName,
            lastName: response == null ? void 0 : response.data.user.lastName,
            firstAttempt: Boolean(response == null ? void 0 : response.data.is_first_login),
            emailAddress: response == null ? void 0 : response.data.user.email,
            phoneNumber: `(${response == null ? void 0 : response.data.user.phoneCode}) ${response == null ? void 0 : response.data.user.phoneNumber}`,
            kycStatus: Boolean(response == null ? void 0 : response.data.user.kycStatus),
            token: {
              bearer: response == null ? void 0 : response.data.token,
              refresh: response == null ? void 0 : response.data.refreshToken
            },
            isValidator: (response == null ? void 0 : response.data.user.roles.includes("Validation")) ? true : false,
            regCommerce: (_a = response == null ? void 0 : response.data.user.registerDeCommerce) != null ? _a : "",
            address: (_b = response == null ? void 0 : response.data.user.addresse1) != null ? _b : "",
            address2: (_c = response == null ? void 0 : response.data.user.address2) != null ? _c : "",
            country: (_d = response == null ? void 0 : response.data.user.country) != null ? _d : "",
            poBox: (_e = response == null ? void 0 : response.data.user.codePostale) != null ? _e : "",
            city: (_f = response == null ? void 0 : response.data.user.town) != null ? _f : "",
            state: (_g = response == null ? void 0 : response.data.user.region) != null ? _g : "",
            nationality: (_h = response == null ? void 0 : response.data.user.nationality) != null ? _h : "",
            isResident: Boolean(response == null ? void 0 : response.data.user.resisdent)
          },
          accounts: ((_i = response == null ? void 0 : response.data.bankAccounts) != null ? _i : []).map((acc) => ({
            uuid: crypto.randomUUID(),
            iBan: acc.bankIBAN,
            bank: acc.bankName,
            accRef: acc.acctSlug,
            accType: acc.acctType,
            agency: acc.agenName,
            balance: String(acc.amt),
            clientType: acc.clientType,
            currency: acc.bankCurrency,
            client: acc.clientName
          }))
        };
      }
    }
    return {
      validError: payload.error ? errorMap(payload.error.issues) : null,
      apiResponse: output
    };
  }
);

export { login_post as default };
//# sourceMappingURL=login.post.mjs.map
