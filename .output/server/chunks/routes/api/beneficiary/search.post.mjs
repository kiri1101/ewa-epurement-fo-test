import { d as defineEventHandler, u as useRuntimeConfig, r as readBody, l as loadLocale, f as fetch, a as readValidatedBody, c as createError, e as errorMap } from '../../../_/nitro.mjs';
import moment from 'moment';
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

const search_post = defineEventHandler(async (event) => {
  var _a, _b, _c, _d, _e, _f, _g, _h, _i, _j, _k;
  const config = useRuntimeConfig(event);
  const reqBody = await readBody(event);
  const lang = reqBody.lang === "fr" ? "fr" : "en";
  const t = await loadLocale(lang);
  let output = null;
  const loginSchema = z.object({
    searchIndex: z.string({
      error: () => ({ message: t.required })
    }).refine(
      (val) => val.trim().length >= Number(config.private.validation.zod.min),
      {
        error: () => ({
          message: String(t.min).replaceAll(
            ":value",
            String(config.private.validation.zod.min)
          )
        })
      }
    ),
    lang: z.literal(["en", "fr"], {
      error: () => ({ message: t.invalidLang })
    })
  });
  const api = fetch(event);
  const payload = await readValidatedBody(
    event,
    (body) => loginSchema.safeParse(body)
  );
  const response = payload.success ? await api(config.private.api.beneficiary.search, {
    method: "POST",
    body: {
      benefSlug: payload.data.searchIndex,
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
      let custonType;
      switch (response == null ? void 0 : response.data.benefType.toLowerCase()) {
        case "physique":
          custonType = "individual";
          break;
        case "moral":
          custonType = "company";
          break;
        default:
          custonType = "none";
      }
      output = {
        uuid: crypto.randomUUID(),
        code: response == null ? void 0 : response.data.benefSlug,
        type: custonType,
        fullName: response == null ? void 0 : response.data.fullName,
        country: response == null ? void 0 : response.data.country,
        email: (_a = response == null ? void 0 : response.data.email) != null ? _a : "",
        phoneCode: (_b = response == null ? void 0 : response.data.phoneCode) != null ? _b : "",
        phoneNumber: (_c = response == null ? void 0 : response.data.phoneNumber) != null ? _c : "",
        address: (_d = response == null ? void 0 : response.data.address) != null ? _d : "",
        status: response == null ? void 0 : response.data.status,
        bankName: response == null ? void 0 : response.data.bankDetails.bankName,
        swiftBic: response == null ? void 0 : response.data.bankDetails.swiftBic,
        iban: response == null ? void 0 : response.data.bankDetails.iban,
        line1: (_e = response == null ? void 0 : response.data.benefAddress1) != null ? _e : "",
        line2: (_f = response == null ? void 0 : response.data.benefAddress2) != null ? _f : "",
        nationality: (_g = response == null ? void 0 : response.data.benefNationality) != null ? _g : "",
        postalCode: (_h = response == null ? void 0 : response.data.benefPostalCode) != null ? _h : "",
        city: (_i = response == null ? void 0 : response.data.benefTown) != null ? _i : "",
        state: (_j = response == null ? void 0 : response.data.benefRegion) != null ? _j : "",
        createdAt: moment(response == null ? void 0 : response.data.createdAt).format("YYYY-MM-DD"),
        files: ((_k = response == null ? void 0 : response.data.pjList) != null ? _k : []).map((file) => {
          return {
            code: file.fileSlug,
            title: file.fileType,
            filename: file.fileName,
            url: file.filePath,
            createdAt: file.uploadedAt
          };
        })
      };
    }
  }
  return {
    validError: payload.error ? errorMap(payload.error.issues) : null,
    apiResponse: output
  };
});

export { search_post as default };
//# sourceMappingURL=search.post.mjs.map
