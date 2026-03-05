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

const create_post = defineEventHandler(async (event) => {
  const config = useRuntimeConfig(event);
  const reqBody = await readBody(event);
  const lang = reqBody.lang === "fr" ? "fr" : "en";
  const t = await loadLocale(lang);
  let output = null;
  const loginSchema = z.object({
    beneficiary: z.string({
      error: () => ({ message: t.required })
    }).min(Number(config.private.validation.zod.min), {
      message: String(t.min).replaceAll(
        ":value",
        String(config.private.validation.zod.min)
      )
    }),
    category: z.string({
      error: () => ({ message: t.required })
    }).min(Number(config.private.validation.zod.min), {
      message: String(t.min).replaceAll(
        ":value",
        String(config.private.validation.zod.min)
      )
    }),
    foreignAmount: z.number({
      error: () => ({ message: t.required })
    }).min(Number(config.private.validation.zod.min), {
      message: String(t.min).replaceAll(
        ":value",
        String(config.private.validation.zod.min)
      )
    }),
    quantity: z.number({
      error: () => ({ message: t.required })
    }),
    matricule: z.string({
      error: () => ({ message: t.required })
    }),
    job: z.string({
      error: () => ({ message: t.required })
    }),
    currency: z.string({
      error: () => ({ message: t.required })
    }).min(Number(config.private.validation.zod.min), {
      message: String(t.min).replaceAll(
        ":value",
        String(config.private.validation.zod.min)
      )
    }),
    checkIn: z.string({
      error: () => ({ message: t.required })
    }),
    reference: z.string({
      error: () => ({ message: t.required })
    }).min(Number(config.private.validation.zod.min), {
      message: String(t.min).replaceAll(
        ":value",
        String(config.private.validation.zod.min)
      )
    }),
    fob: z.number({
      error: () => ({ message: t.required })
    }),
    caf: z.number({
      error: () => ({ message: t.required })
    }),
    customNum: z.string({
      error: () => ({ message: t.required })
    }).min(Number(config.private.validation.zod.min), {
      message: String(t.min).replaceAll(
        ":value",
        String(config.private.validation.zod.min)
      )
    }),
    dImp: z.string({
      error: () => ({ message: t.required })
    }).min(Number(config.private.validation.zod.min), {
      message: String(t.min).replaceAll(
        ":value",
        String(config.private.validation.zod.min)
      )
    }),
    commerceDesc: z.string({
      error: () => ({ message: t.required })
    }).min(Number(config.private.validation.zod.min), {
      message: String(t.min).replaceAll(
        ":value",
        String(config.private.validation.zod.min)
      )
    }),
    paymentDate: reqBody.paymentDate ? z.iso.datetime({
      error: () => ({ message: t.date })
    }) : z.nullable(z.literal(null)),
    files: z.record(
      z.string({
        error: () => ({ message: "Provide a valid file" })
      }),
      z.string({
        error: () => ({ message: "Provide a valid file" })
      })
    ).refine((value) => Object.values(value).length > 0, {
      message: "Provide a valid file"
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
  const response = payload.success ? await api(config.private.api.domiciliation.create, {
    method: "POST",
    body: {
      demandeSlug: "",
      clientSlug: "",
      supplierSlug: payload.data.beneficiary,
      requestCategory: payload.data.category,
      supplierAmount: payload.data.foreignAmount,
      goodsQuantity: payload.data.quantity === 0 ? null : payload.data.quantity,
      profession: payload.data.job,
      immatriculation: payload.data.matricule,
      supplierCurrency: payload.data.currency,
      bureauEmbarquement: payload.data.checkIn,
      factureRef: payload.data.reference,
      fobCode: payload.data.fob === 0 ? null : payload.data.fob,
      cafCode: payload.data.caf === 0 ? null : payload.data.caf,
      douaneNomenclature: payload.data.customNum,
      declarationImportation: payload.data.dImp,
      commercialDescription: payload.data.commerceDesc,
      serviceDescription: "",
      chapitre: "",
      paymentDate: payload.data.paymentDate ? moment(payload.data.paymentDate).format("YYYY-MM-DD") : null,
      uploadedFiles: Object.values(payload.data.files),
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
      output = {
        id: crypto.randomUUID(),
        code: response == null ? void 0 : response.data.domiciliationInfo.unikCode,
        clientName: response == null ? void 0 : response.data.domiciliationInfo.clientFullName,
        clientRegCom: response == null ? void 0 : response.data.domiciliationInfo.clientRegistreCommerce,
        clientAddress: response == null ? void 0 : response.data.domiciliationInfo.clientFullAdress,
        profession: response == null ? void 0 : response.data.domiciliationInfo.profession,
        matricule: response == null ? void 0 : response.data.domiciliationInfo.immatriculation,
        benefCode: response == null ? void 0 : response.data.domiciliationInfo.supplierSlug,
        beneficiary: response == null ? void 0 : response.data.domiciliationInfo.supplierFullName,
        benefCountry: response == null ? void 0 : response.data.domiciliationInfo.supplierCountry,
        benefAddress: response == null ? void 0 : response.data.domiciliationInfo.supplierFullAdress,
        serviceLabel: response == null ? void 0 : response.data.domiciliationInfo.goodsServiceLabel,
        serviceChapter: response == null ? void 0 : response.data.domiciliationInfo.goodsChapitre,
        customLabel: response == null ? void 0 : response.data.domiciliationInfo.goodsDouaneName,
        ref: response == null ? void 0 : response.data.domiciliationInfo.referenceNumber,
        baseAmount: response == null ? void 0 : response.data.domiciliationInfo.clientAmount,
        baseCurrency: response == null ? void 0 : response.data.domiciliationInfo.clientCurrency,
        benefAmount: response == null ? void 0 : response.data.domiciliationInfo.supplierAmount,
        benefCurrency: response == null ? void 0 : response.data.domiciliationInfo.supplierCurrency,
        balance: response == null ? void 0 : response.data.domiciliationInfo.domiciliationBalance,
        paymentLimit: String(
          response == null ? void 0 : response.data.domiciliationInfo.domiciliationOverdraftLimit
        ),
        nature: response == null ? void 0 : response.data.domiciliationInfo.natureOfImportLabel,
        natureCode: response == null ? void 0 : response.data.domiciliationInfo.natureOfImport,
        createdAt: response == null ? void 0 : response.data.domiciliationInfo.createAt,
        flowCode: response == null ? void 0 : response.data.domiciliationInfo.workFlowUniqueCode,
        status: response == null ? void 0 : response.data.domiciliationInfo.domiciliationStatus
      };
    }
  }
  return {
    validError: payload.error ? errorMap(payload.error.issues) : null,
    apiResponse: output
  };
});

export { create_post as default };
//# sourceMappingURL=create.post.mjs.map
