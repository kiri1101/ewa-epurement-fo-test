import { _ as __nuxt_component_0 } from './AuthNav-eN4PH_ZJ.mjs';
import { _ as __nuxt_component_1, a as __nuxt_component_2 } from './ImageBlur-Cr_DWKbR.mjs';
import { defineComponent, ref, mergeProps, withCtx, createVNode, toDisplayString, unref, openBlock, createBlock, createCommentVNode, isRef, withModifiers, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate, ssrRenderAttr, ssrRenderClass, ssrRenderStyle, ssrRenderList } from 'vue/server-renderer';
import { _ as __nuxt_component_0$1 } from './Building-DIKHrDfz.mjs';
import { b as useI18n, x as useRoute, u as useHead, c as useNuxtApp, d as useRuntimeConfig, _ as _export_sfc, n as navigateTo } from './server.mjs';
import { _ as __nuxt_component_6 } from './BgNormal-WNDX37G3.mjs';
import { u as useCurrency, _ as __nuxt_component_7, a as useCustomStyle } from './useCustomStyle-BC1q-PDD.mjs';
import { _ as __nuxt_component_8 } from './CustomNumber-Bv6OziLi.mjs';
import { _ as __nuxt_component_9 } from './Select-BMmHRGTZ.mjs';
import { _ as __nuxt_component_10 } from './FileUpload-APGyD7h5.mjs';
import { _ as __nuxt_component_11 } from './Loader-DBHVb-yz.mjs';
import { _ as __nuxt_component_1$1 } from './Primary-DW1ITzn7.mjs';
import { _ as __nuxt_component_13 } from './Outline-DW3-Glvz.mjs';
import { s as sliceIban, c as formatNumber } from './str.helpers-C9LGWfpH.mjs';
import script$6 from './index-B8K62pww.mjs';
import script$5 from './index-CQWGTv9B.mjs';
import script$4 from './index-D-7eZ2tE.mjs';
import script$3 from './index-DpXzVJZp.mjs';
import script$2 from './index-C3bcToRo.mjs';
import script$1 from './index-BSwViqAw.mjs';
import script from './index-DeQNdLHz.mjs';
import { _ as _imports_0 } from './virtual_public-BaMBbzSe.mjs';
import { _ as _imports_1 } from './virtual_public-DBNNCCD_.mjs';
import { u as useAuthStore } from './auth-uLpXCxdh.mjs';
import { u as useNotify } from './notify-7jIrthPf.mjs';
import { storeToRefs } from 'pinia';
import { u as useLoadingStore } from './loading-DepoijyK.mjs';
import { h as handleApiError } from './api.errors-BfPdMj8S.mjs';
import './Translate-C_X9iIzf.mjs';
import './index-DZx4fgBN.mjs';
import '@primeuix/styled';
import '@primeuix/utils/dom';
import '@primeuix/utils/zindex';
import './index-DR3VD1-A.mjs';
import '@primeuix/utils/object';
import './index-rAVNvoJo.mjs';
import '@primeuix/utils/eventbus';
import '@primeuix/styles/popover';
import '../_/nitro.mjs';
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
import 'node:url';
import 'node:crypto';
import '@primeuix/utils';
import '@primeuix/styles/base';
import '@primeuix/utils/uuid';
import '../routes/renderer.mjs';
import 'vue-bundle-renderer/runtime';
import 'unhead/server';
import 'devalue';
import 'unhead/utils';
import './index-DhmvckXO.mjs';
import './index-Dh_kTs08.mjs';
import './index-Cv7CEbWD.mjs';
import './index-UOnup3Dx.mjs';
import './index-jauc-8K8.mjs';
import './index-Cg8Tg0lO.mjs';
import './index-BAEKaTcz.mjs';
import './index-DAocwqNe.mjs';
import './index-BlaqzKyH.mjs';
import './index-DSaQNc_N.mjs';
import './index-DORsLxMh.mjs';
import './index-BjkFAZaV.mjs';
import './index-DNErSYKU.mjs';
import './index-DBZjLEmg.mjs';
import 'filepond-plugin-file-validate-type';
import 'filepond-plugin-file-validate-size';
import 'moment';
import './index-Din928lO.mjs';
import './index-BEnyDPm8.mjs';
import './index-Bs-6gtw7.mjs';
import './index-BKaz9u56.mjs';
import './index-DNiohjxC.mjs';
import './index-CicSKTaH.mjs';
import './index-4S0J0IID.mjs';

const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "Required",
  __ssrInlineRender: true,
  props: {
    label: {}
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<span${ssrRenderAttrs(mergeProps({ class: "text-white font-semibold text-xxs bg-status-error rounded-md px-1.5 py-px" }, _attrs))}>${ssrInterpolate(__props.label)}</span>`);
    };
  }
});
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Badge/Required.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const __nuxt_component_3 = Object.assign(_sfc_main$2, { __name: "BadgeRequired" });
const _sfc_main$1 = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<svg${ssrRenderAttrs(mergeProps({
    xmlns: "http://www.w3.org/2000/svg",
    width: "20",
    height: "20",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    "stroke-width": "2",
    "stroke-linecap": "round",
    "stroke-linejoin": "round",
    "aria-hidden": "true",
    "data-id": "element-1710"
  }, _attrs))}><path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"></path><path d="M14 2v4a2 2 0 0 0 2 2h4"></path><path d="M10 9H8"></path><path d="M16 13H8"></path><path d="M16 17H8"></path></svg>`);
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Svg/Document.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_5 = /* @__PURE__ */ Object.assign(_export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender]]), { __name: "SvgDocument" });
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "new",
  __ssrInlineRender: true,
  setup(__props) {
    const config = useRuntimeConfig();
    const { t, locale } = useI18n();
    const authStore = useAuthStore();
    const route = useRoute();
    useHead({
      title: `${t("meta.title.domiciliation.new")} - ${config.public.app.name}`,
      meta: [{ name: "description", content: "My design project application." }]
    });
    const { $apiFetch } = useNuxtApp();
    const { e, s } = useNotify();
    const beneficiaryList = ref([]);
    const rateList = ref([]);
    const currencyList = ref([]);
    useCurrency();
    const { currencyLoading } = storeToRefs(useLoadingStore());
    const { selectInputPt } = useCustomStyle();
    const isLoading = ref(false);
    const isBeneficiaryLoading = ref(false);
    const isDomAttachmentLoading = ref(false);
    const domiciliationFileList = ref([]);
    const chosenRate = ref({});
    const convertedAmount = ref(0);
    const showBeneficiaryInfo = ref("1");
    const showConfirmationModal = ref(false);
    const requiredFiles = ref([]);
    const form = ref({
      beneficiary: {},
      code: "",
      reference: "",
      dateline: null,
      commerceLabel: "",
      quantity: "",
      matricule: "",
      job: "",
      customNum: "",
      checkIn: "",
      fob: "",
      caf: "",
      currency: "",
      amount: "",
      convertedAmount: "",
      service: "",
      chapter: "",
      dImp: "",
      files: {}
    });
    const validationErrors = ref({
      beneficiary: false,
      category: false,
      foreignAmount: false,
      currency: false,
      reference: false,
      customNum: false,
      commerceDesc: false,
      dImp: false
    });
    const openConfirmationModal = () => showConfirmationModal.value = true;
    const closeConfirmationModal = () => showConfirmationModal.value = false;
    const resetValidationErrors = () => {
      validationErrors.value = {
        beneficiary: false,
        category: false,
        foreignAmount: false,
        currency: false,
        reference: false,
        customNum: false,
        commerceDesc: false
      };
    };
    const setBeneficiary = (beneficiary) => {
      form.value.beneficiary = beneficiary;
      showBeneficiaryInfo.value = "0";
    };
    const setUploadedFile = (code, fileId) => {
      form.value.files[code] = fileId;
    };
    const clearFile = (code) => {
      form.value.files[code] = "";
    };
    const convertCurrency = (amount) => {
      convertedAmount.value = chosenRate.value?.value ? formatNumber(amount, chosenRate.value.value) : 0;
      form.value.convertedAmount = String(convertedAmount.value);
    };
    const setChosenCurrentRate = () => {
      const rate = rateList.value.find(
        (item) => item.initCode === form.value.currency && item.finalCode === "XAF"
      );
      chosenRate.value = rate ? rate : {};
      convertCurrency(Number(form.value.amount));
    };
    const submit = async () => {
      const proceed = requiredFiles.value.every(
        (key) => Object.keys(form.value.files).includes(key)
      );
      if (!proceed) {
        e("Please upload all required files");
      } else {
        isLoading.value = true;
        try {
          const { apiResponse, validError } = await $apiFetch(
            config.public.api.domiciliation.create,
            {
              method: "POST",
              body: {
                beneficiary: form.value.beneficiary?.code,
                category: form.value.code,
                baseAmount: Number(form.value.convertedAmount),
                foreignAmount: Number(form.value.amount),
                quantity: Number(form.value.quantity),
                matricule: form.value.matricule,
                job: form.value.job,
                currency: form.value.currency,
                checkIn: form.value.checkIn,
                reference: form.value.reference,
                fob: Number(form.value.fob),
                caf: Number(form.value.caf),
                customNum: form.value.customNum,
                dImp: form.value.dImp,
                commerceDesc: form.value.commerceLabel,
                paymentDate: form.value.dateline,
                files: form.value.files,
                lang: locale.value
              }
            }
          );
          if (validError) {
            e("Please provide all required fields");
            validError.forEach((err) => {
              validationErrors.value[err.name] = true;
            });
            closeConfirmationModal();
          } else {
            resetValidationErrors();
            s(t("domiciliation_created"));
            closeConfirmationModal();
            Object.keys(route.query).includes("callbackUrl") ? navigateTo({
              path: route.query.callbackUrl,
              query: {
                domFlag: btoa(JSON.stringify(apiResponse)),
                update: "1",
                currency: form.value.currency
              }
            }) : navigateTo("/domiciliation/list");
          }
        } catch (error) {
          const errorMsg = handleApiError(error);
          if (errorMsg.length > 0) {
            e(errorMsg);
          }
        } finally {
          isLoading.value = false;
        }
      }
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_navbar_auth_nav = __nuxt_component_0;
      const _component_gadget_banner = __nuxt_component_1;
      const _component_gadget_image_blur = __nuxt_component_2;
      const _component_badge_required = __nuxt_component_3;
      const _component_svg_building = __nuxt_component_0$1;
      const _component_svg_document = __nuxt_component_5;
      const _component_input_bg_normal = __nuxt_component_6;
      const _component_Select = script;
      const _component_Accordion = script$1;
      const _component_AccordionPanel = script$2;
      const _component_AccordionContent = script$3;
      const _component_input_date_picker = __nuxt_component_7;
      const _component_input_custom_number = __nuxt_component_8;
      const _component_Textarea = script$4;
      const _component_input_select = __nuxt_component_9;
      const _component_input_file_upload = __nuxt_component_10;
      const _component_skeleton = script$5;
      const _component_svg_loader = __nuxt_component_11;
      const _component_button_primary = __nuxt_component_1$1;
      const _component_Dialog = script$6;
      const _component_button_outline = __nuxt_component_13;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "text-text-primary space-y-5" }, _attrs))}>`);
      _push(ssrRenderComponent(_component_navbar_auth_nav, {
        title: _ctx.$t("menu.domiciliation.new")
      }, null, _parent));
      _push(ssrRenderComponent(_component_gadget_banner, null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="grid grid-cols-[auto_1fr] h-full"${_scopeId}><div class="grid justify-center ml-2 text-sm text-white lg:text-base"${_scopeId}><div class="ml-5 translate-y-8"${_scopeId}><h3 class="font-semibold"${_scopeId}>${ssrInterpolate(_ctx.$t("page.domiciliation.new.title1"))}</h3><h4 class="text-xs"${_scopeId}>${ssrInterpolate(_ctx.$t("page.domiciliation.new.title2"))}</h4></div></div><div class="flex justify-end"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_gadget_image_blur, null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<img${ssrRenderAttr("src", _imports_0)} class="z-30 object-cover object-center w-auto h-22" alt="Bank Logo"${_scopeId2}>`);
                } else {
                  return [
                    createVNode("img", {
                      src: _imports_0,
                      class: "z-30 object-cover object-center w-auto h-22",
                      alt: "Bank Logo"
                    })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div></div>`);
          } else {
            return [
              createVNode("div", { class: "grid grid-cols-[auto_1fr] h-full" }, [
                createVNode("div", { class: "grid justify-center ml-2 text-sm text-white lg:text-base" }, [
                  createVNode("div", { class: "ml-5 translate-y-8" }, [
                    createVNode("h3", { class: "font-semibold" }, toDisplayString(_ctx.$t("page.domiciliation.new.title1")), 1),
                    createVNode("h4", { class: "text-xs" }, toDisplayString(_ctx.$t("page.domiciliation.new.title2")), 1)
                  ])
                ]),
                createVNode("div", { class: "flex justify-end" }, [
                  createVNode(_component_gadget_image_blur, null, {
                    default: withCtx(() => [
                      createVNode("img", {
                        src: _imports_0,
                        class: "z-30 object-cover object-center w-auto h-22",
                        alt: "Bank Logo"
                      })
                    ]),
                    _: 1
                  })
                ])
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<div class="space-y-5"><h2 class="text-sm font-bold text-primary flex items-center gap-2"><span class="flex items-center justify-center size-5 rounded-full bg-primary text-white text-xs">1</span> ${ssrInterpolate(_ctx.$t("page.domiciliation.new.infos"))}</h2><div class="rounded-xl transition-all duration-200 bg-white border border-border-main p-6 text-sm"><div class="mb-6"><label class="block text-xs font-medium text-text-secondary mb-2">${ssrInterpolate(_ctx.$t("page.domiciliation.new.nature_imp"))} `);
      _push(ssrRenderComponent(_component_badge_required, {
        label: _ctx.$t("page.beneficiary.required")
      }, null, _parent));
      _push(`</label><div class="${ssrRenderClass([
        "flex gap-4",
        {
          "ring-4 ring-accent-muted ring-offset-2 rounded-md": unref(validationErrors).category
        }
      ])}"><button type="button" class="${ssrRenderClass([
        "relative flex-1 py-2 px-4 rounded-lg border-2 flex items-center justify-center gap-2 transition-all cursor-pointer",
        {
          " border-accent bg-bg-main text-accent font-bold": unref(form).code === "A01IMPBIEN",
          " border-border-main hover:border-accent-light text-text-secondary hover:text-accent-light": unref(form).code !== "A01IMPBIEN"
        }
      ])}">`);
      _push(ssrRenderComponent(_component_svg_building, null, null, _parent));
      _push(` ${ssrInterpolate(_ctx.$t("page.domiciliation.new.import_bien"))}</button><button type="button" class="${ssrRenderClass([
        "flex-1 py-2 px-4 rounded-lg border-2 flex items-center justify-center gap-2 transition-all cursor-pointer",
        {
          " border-accent bg-bg-main text-accent font-bold": unref(form).code === "A01IMPSERV",
          " border-border-main hover:border-accent-light text-text-secondary hover:text-accent-light": unref(form).code !== "A01IMPSERV"
        }
      ])}">`);
      _push(ssrRenderComponent(_component_svg_document, null, null, _parent));
      _push(` ${ssrInterpolate(_ctx.$t("page.domiciliation.new.import_service"))}</button></div></div><div class="grid grid-cols-1 md:grid-cols-2 gap-8"><div class="space-y-4 p-4 bg-bg-secondary rounded-lg border border-border-main"><p class="font-semibold text-text-primary border-b border-border-main pb-2">${ssrInterpolate(_ctx.$t("page.domiciliation.new.infos_importateur"))} `);
      _push(ssrRenderComponent(_component_badge_required, {
        label: _ctx.$t("page.beneficiary.required")
      }, null, _parent));
      _push(`</p><div class="space-y-3 text-sm"><div><span class="text-text-secondary block text-xs">${ssrInterpolate(_ctx.$t("page.domiciliation.new.raison_sociale"))}</span><span class="font-medium">${ssrInterpolate(unref(authStore).state?.firstName)} ${ssrInterpolate(unref(authStore).state?.lastName)}</span></div><div><span class="text-text-secondary block text-xs">${ssrInterpolate(_ctx.$t("page.domiciliation.new.reg_commerce"))}</span><span class="font-medium">${ssrInterpolate(unref(authStore).state?.regCommerce)}</span></div><div><span class="text-text-secondary block text-xs">${ssrInterpolate(_ctx.$t("page.domiciliation.new.addresse"))}</span><span class="font-medium">${ssrInterpolate(unref(authStore).state?.address)}</span></div><div><span class="text-text-secondary block text-xs">${ssrInterpolate(_ctx.$t("page.domiciliation.new.profession"))}</span>`);
      _push(ssrRenderComponent(_component_input_bg_normal, {
        modelValue: unref(form).job,
        "onUpdate:modelValue": ($event) => unref(form).job = $event,
        identifier: "job",
        class: "uppercase"
      }, null, _parent));
      _push(`</div><div><span class="text-text-secondary block text-xs">${ssrInterpolate(_ctx.$t("page.domiciliation.new.imma_stat"))}</span>`);
      _push(ssrRenderComponent(_component_input_bg_normal, {
        modelValue: unref(form).matricule,
        "onUpdate:modelValue": ($event) => unref(form).matricule = $event,
        identifier: "matricule",
        class: "uppercase"
      }, null, _parent));
      _push(`</div></div></div><div class="space-y-4 p-4"><h3 class="font-semibold text-text-primary border-b border-border-main pb-2">${ssrInterpolate(_ctx.$t("page.domiciliation.new.infos_fournisseur"))}</h3><div class="w-full space-y-1.5"><label class="block text-sm font-medium text-text-secondary">${ssrInterpolate(_ctx.$t("page.domiciliation.new.select_beneficiary"))} `);
      _push(ssrRenderComponent(_component_badge_required, {
        label: _ctx.$t("page.beneficiary.required")
      }, null, _parent));
      _push(`</label><div class="${ssrRenderClass([
        "relative rounded-md",
        {
          "ring-4 ring-accent-muted ring-offset-2": unref(validationErrors).beneficiary
        }
      ])}">`);
      _push(ssrRenderComponent(_component_Select, {
        modelValue: unref(form).beneficiary,
        "onUpdate:modelValue": [($event) => unref(form).beneficiary = $event, (e2) => setBeneficiary(e2)],
        options: unref(beneficiaryList),
        loading: unref(isBeneficiaryLoading),
        placeholder: _ctx.$t("placeholder.select_beneficiary"),
        pt: unref(selectInputPt)
      }, {
        value: withCtx((slotProps, _push2, _parent2, _scopeId) => {
          if (_push2) {
            if (slotProps.value) {
              _push2(`<div${_scopeId}><span class="text-sm"${_scopeId}>${ssrInterpolate(slotProps.value.fullName)} - </span><span class="text-sm"${_scopeId}>${ssrInterpolate(("sliceIban" in _ctx ? _ctx.sliceIban : unref(sliceIban))(slotProps.value.iban))}</span></div>`);
            } else {
              _push2(`<span${_scopeId}>${ssrInterpolate(slotProps.placeholder)}</span>`);
            }
          } else {
            return [
              slotProps.value ? (openBlock(), createBlock("div", { key: 0 }, [
                createVNode("span", { class: "text-sm" }, toDisplayString(slotProps.value.fullName) + " - ", 1),
                createVNode("span", { class: "text-sm" }, toDisplayString(("sliceIban" in _ctx ? _ctx.sliceIban : unref(sliceIban))(slotProps.value.iban)), 1)
              ])) : (openBlock(), createBlock("span", { key: 1 }, toDisplayString(slotProps.placeholder), 1))
            ];
          }
        }),
        option: withCtx((slotProps, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="flex items-center gap-2"${_scopeId}>`);
            if (slotProps.option) {
              _push2(`<i class="pi pi-building-columns" style="${ssrRenderStyle({ "font-size": "1.3rem" })}"${_scopeId}></i>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`<div${_scopeId}><p class="text-sm"${_scopeId}>${ssrInterpolate(slotProps.option.fullName)}</p><p class="text-xs"${_scopeId}>${ssrInterpolate(slotProps.option.iban)}</p></div></div>`);
          } else {
            return [
              createVNode("div", { class: "flex items-center gap-2" }, [
                slotProps.option ? (openBlock(), createBlock("i", {
                  key: 0,
                  class: "pi pi-building-columns",
                  style: { "font-size": "1.3rem" }
                })) : createCommentVNode("", true),
                createVNode("div", null, [
                  createVNode("p", { class: "text-sm" }, toDisplayString(slotProps.option.fullName), 1),
                  createVNode("p", { class: "text-xs" }, toDisplayString(slotProps.option.iban), 1)
                ])
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div>`);
      _push(ssrRenderComponent(_component_Accordion, {
        value: unref(showBeneficiaryInfo),
        "onUpdate:value": ($event) => isRef(showBeneficiaryInfo) ? showBeneficiaryInfo.value = $event : null
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_AccordionPanel, { value: "0" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_AccordionContent, { "pt:content:style": "padding: 0 !important; " }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<ul class="text-xs bg-accent-muted p-4 rounded-lg space-y-2"${_scopeId3}><li${_scopeId3}><p class="text-accent-light"${_scopeId3}>${ssrInterpolate(_ctx.$t("page.domiciliation.new.full_name"))}</p><p class="text-sm font-medium"${_scopeId3}>${ssrInterpolate(unref(form).beneficiary?.fullName)}</p></li><li${_scopeId3}><p class="text-accent-light"${_scopeId3}>${ssrInterpolate(_ctx.$t("page.domiciliation.new.country_origin"))}</p><p class="text-sm font-medium"${_scopeId3}>${ssrInterpolate(unref(form).beneficiary?.country)}</p></li><li${_scopeId3}><p class="text-accent-light"${_scopeId3}>${ssrInterpolate(_ctx.$t("page.domiciliation.new.addresse"))}</p><p class="text-sm font-medium"${_scopeId3}>${ssrInterpolate(unref(form).beneficiary?.address ?? "")}</p></li></ul>`);
                      } else {
                        return [
                          createVNode("ul", { class: "text-xs bg-accent-muted p-4 rounded-lg space-y-2" }, [
                            createVNode("li", null, [
                              createVNode("p", { class: "text-accent-light" }, toDisplayString(_ctx.$t("page.domiciliation.new.full_name")), 1),
                              createVNode("p", { class: "text-sm font-medium" }, toDisplayString(unref(form).beneficiary?.fullName), 1)
                            ]),
                            createVNode("li", null, [
                              createVNode("p", { class: "text-accent-light" }, toDisplayString(_ctx.$t("page.domiciliation.new.country_origin")), 1),
                              createVNode("p", { class: "text-sm font-medium" }, toDisplayString(unref(form).beneficiary?.country), 1)
                            ]),
                            createVNode("li", null, [
                              createVNode("p", { class: "text-accent-light" }, toDisplayString(_ctx.$t("page.domiciliation.new.addresse")), 1),
                              createVNode("p", { class: "text-sm font-medium" }, toDisplayString(unref(form).beneficiary?.address ?? ""), 1)
                            ])
                          ])
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_AccordionContent, { "pt:content:style": "padding: 0 !important; " }, {
                      default: withCtx(() => [
                        createVNode("ul", { class: "text-xs bg-accent-muted p-4 rounded-lg space-y-2" }, [
                          createVNode("li", null, [
                            createVNode("p", { class: "text-accent-light" }, toDisplayString(_ctx.$t("page.domiciliation.new.full_name")), 1),
                            createVNode("p", { class: "text-sm font-medium" }, toDisplayString(unref(form).beneficiary?.fullName), 1)
                          ]),
                          createVNode("li", null, [
                            createVNode("p", { class: "text-accent-light" }, toDisplayString(_ctx.$t("page.domiciliation.new.country_origin")), 1),
                            createVNode("p", { class: "text-sm font-medium" }, toDisplayString(unref(form).beneficiary?.country), 1)
                          ]),
                          createVNode("li", null, [
                            createVNode("p", { class: "text-accent-light" }, toDisplayString(_ctx.$t("page.domiciliation.new.addresse")), 1),
                            createVNode("p", { class: "text-sm font-medium" }, toDisplayString(unref(form).beneficiary?.address ?? ""), 1)
                          ])
                        ])
                      ]),
                      _: 1
                    })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_AccordionPanel, { value: "0" }, {
                default: withCtx(() => [
                  createVNode(_component_AccordionContent, { "pt:content:style": "padding: 0 !important; " }, {
                    default: withCtx(() => [
                      createVNode("ul", { class: "text-xs bg-accent-muted p-4 rounded-lg space-y-2" }, [
                        createVNode("li", null, [
                          createVNode("p", { class: "text-accent-light" }, toDisplayString(_ctx.$t("page.domiciliation.new.full_name")), 1),
                          createVNode("p", { class: "text-sm font-medium" }, toDisplayString(unref(form).beneficiary?.fullName), 1)
                        ]),
                        createVNode("li", null, [
                          createVNode("p", { class: "text-accent-light" }, toDisplayString(_ctx.$t("page.domiciliation.new.country_origin")), 1),
                          createVNode("p", { class: "text-sm font-medium" }, toDisplayString(unref(form).beneficiary?.country), 1)
                        ]),
                        createVNode("li", null, [
                          createVNode("p", { class: "text-accent-light" }, toDisplayString(_ctx.$t("page.domiciliation.new.addresse")), 1),
                          createVNode("p", { class: "text-sm font-medium" }, toDisplayString(unref(form).beneficiary?.address ?? ""), 1)
                        ])
                      ])
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div></div></div><div class="space-y-5"><h2 class="text-sm font-bold text-text-primary flex items-center gap-2"><span class="flex items-center justify-center size-5 rounded-full bg-primary text-white text-xs"> 2 </span>${ssrInterpolate(_ctx.$t("page.domiciliation.new.trans_details"))}</h2><form class="grid grid-cols-2 gap-4 p-4 bg-bg-main rounded-lg border border-border-main"><div><label for="reference" class="text-xs text-text-secondary">${ssrInterpolate(_ctx.$t("page.domiciliation.new.reference"))} `);
      _push(ssrRenderComponent(_component_badge_required, {
        label: _ctx.$t("page.beneficiary.required")
      }, null, _parent));
      _push(`</label><div class="${ssrRenderClass([
        "",
        {
          "ring-4 ring-accent-muted ring-offset-2 rounded-md": unref(validationErrors).reference
        }
      ])}">`);
      _push(ssrRenderComponent(_component_input_bg_normal, {
        modelValue: unref(form).reference,
        "onUpdate:modelValue": ($event) => unref(form).reference = $event,
        identifier: "reference",
        class: "uppercase"
      }, null, _parent));
      _push(`</div></div><div><label for="dateline" class="text-xs text-text-secondary">${ssrInterpolate(_ctx.$t("page.domiciliation.new.payment_due_date"))}</label>`);
      _push(ssrRenderComponent(_component_input_date_picker, {
        modelValue: unref(form).dateline,
        "onUpdate:modelValue": ($event) => unref(form).dateline = $event,
        showIcon: "",
        fluid: "",
        "icon-display": "input",
        "min-date": /* @__PURE__ */ new Date()
      }, null, _parent));
      _push(`</div><div class="col-span-2"><label for="commerceLabel" class="text-xs text-text-secondary">${ssrInterpolate(_ctx.$t("page.domiciliation.new.commercial_label"))} `);
      _push(ssrRenderComponent(_component_badge_required, {
        label: _ctx.$t("page.beneficiary.required")
      }, null, _parent));
      _push(`</label><div class="${ssrRenderClass([
        "",
        {
          "ring-4 ring-accent-muted ring-offset-2 rounded-md": unref(validationErrors).commerceDesc
        }
      ])}">`);
      _push(ssrRenderComponent(_component_input_bg_normal, {
        modelValue: unref(form).commerceLabel,
        "onUpdate:modelValue": ($event) => unref(form).commerceLabel = $event,
        identifier: "commerceLabel",
        class: "uppercase"
      }, null, _parent));
      _push(`</div></div>`);
      if (unref(form).code === "A01IMPSERV") {
        _push(`<div><label for="chapter" class="text-xs text-text-secondary">${ssrInterpolate(_ctx.$t("page.domiciliation.new.chapter"))}</label>`);
        _push(ssrRenderComponent(_component_input_bg_normal, {
          modelValue: unref(form).chapter,
          "onUpdate:modelValue": ($event) => unref(form).chapter = $event,
          identifier: "chapter",
          class: "uppercase"
        }, null, _parent));
        _push(`</div>`);
      } else {
        _push(`<!---->`);
      }
      if (unref(form).code === "A01IMPBIEN") {
        _push(`<div><label for="quantity" class="text-xs text-text-secondary">${ssrInterpolate(_ctx.$t("page.domiciliation.new.qty"))}</label>`);
        _push(ssrRenderComponent(_component_input_custom_number, {
          modelValue: unref(form).quantity,
          "onUpdate:modelValue": ($event) => unref(form).quantity = $event,
          identifier: "quantity",
          "max-fraction-digits": 3,
          placeholder: "0.000",
          autocomplete: "off"
        }, null, _parent));
        _push(`</div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<div><label for="customNum" class="text-xs text-text-secondary">${ssrInterpolate(_ctx.$t("page.domiciliation.new.custom_label"))} `);
      _push(ssrRenderComponent(_component_badge_required, {
        label: _ctx.$t("page.beneficiary.required")
      }, null, _parent));
      _push(`</label><div class="${ssrRenderClass([
        "",
        {
          "ring-4 ring-accent-muted ring-offset-2 rounded-md": unref(validationErrors).customNum
        }
      ])}">`);
      _push(ssrRenderComponent(_component_input_bg_normal, {
        modelValue: unref(form).customNum,
        "onUpdate:modelValue": ($event) => unref(form).customNum = $event,
        identifier: "customNum",
        class: "uppercase"
      }, null, _parent));
      _push(`</div></div><div><label for="dImp" class="text-xs text-text-secondary">${ssrInterpolate(_ctx.$t("page.domiciliation.new.declare_import"))} `);
      _push(ssrRenderComponent(_component_badge_required, {
        label: _ctx.$t("page.beneficiary.required")
      }, null, _parent));
      _push(`</label><div class="${ssrRenderClass([
        "",
        {
          "ring-4 ring-accent-muted ring-offset-2 rounded-md": unref(validationErrors).dImp
        }
      ])}">`);
      _push(ssrRenderComponent(_component_input_bg_normal, {
        modelValue: unref(form).dImp,
        "onUpdate:modelValue": ($event) => unref(form).dImp = $event,
        identifier: "dImp",
        class: "uppercase"
      }, null, _parent));
      _push(`</div></div>`);
      if (unref(form).code === "A01IMPSERV") {
        _push(`<div class="col-span-2"><label for="service" class="text-xs text-text-secondary">${ssrInterpolate(_ctx.$t("page.domiciliation.new.service_desc"))}</label>`);
        _push(ssrRenderComponent(_component_Textarea, {
          modelValue: unref(form).service,
          "onUpdate:modelValue": ($event) => unref(form).service = $event,
          rows: "5",
          cols: "10",
          class: "block w-full",
          "pt:root:style": "font-size: 0.8rem;",
          placeholder: "Detailed description of the service",
          style: { "border-color": "var(--color-border-main) !important" }
        }, null, _parent));
        _push(`</div>`);
      } else {
        _push(`<!---->`);
      }
      if (unref(form).code === "A01IMPBIEN") {
        _push(`<div><label for="checkIn" class="text-xs text-text-secondary">${ssrInterpolate(_ctx.$t("page.domiciliation.new.onboarding_port"))}</label>`);
        _push(ssrRenderComponent(_component_input_bg_normal, {
          modelValue: unref(form).checkIn,
          "onUpdate:modelValue": ($event) => unref(form).checkIn = $event,
          identifier: "checkIn",
          class: "uppercase"
        }, null, _parent));
        _push(`</div>`);
      } else {
        _push(`<!---->`);
      }
      if (unref(form).code === "A01IMPBIEN") {
        _push(`<div class="grid grid-cols-2 gap-2"><div><label for="fob" class="text-xs text-text-secondary">${ssrInterpolate(_ctx.$t("page.domiciliation.new.fob_value"))}</label>`);
        _push(ssrRenderComponent(_component_input_custom_number, {
          modelValue: unref(form).fob,
          "onUpdate:modelValue": ($event) => unref(form).fob = $event,
          identifier: "fob",
          "max-fraction-digits": 3,
          placeholder: "0.000",
          autocomplete: "off"
        }, null, _parent));
        _push(`</div><div><label for="caf" class="text-xs text-text-secondary">${ssrInterpolate(_ctx.$t("page.domiciliation.new.caf_value"))}</label>`);
        _push(ssrRenderComponent(_component_input_custom_number, {
          modelValue: unref(form).caf,
          "onUpdate:modelValue": ($event) => unref(form).caf = $event,
          identifier: "caf",
          "max-fraction-digits": 3,
          placeholder: "0.000",
          autocomplete: "off"
        }, null, _parent));
        _push(`</div></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<div class="border-t border-gray-300 pt-4 col-span-2"><p class="text-sm font-bold text-text-primary">${ssrInterpolate(_ctx.$t("page.domiciliation.new.amount"))}</p><div class="grid grid-cols-3 gap-4"><div><label for="currency" class="text-xs text-text-secondary">${ssrInterpolate(_ctx.$t("page.domiciliation.new.currency"))} `);
      _push(ssrRenderComponent(_component_badge_required, {
        label: _ctx.$t("page.beneficiary.required")
      }, null, _parent));
      _push(`</label><div class="${ssrRenderClass([
        "",
        {
          "ring-4 ring-accent-muted ring-offset-2 rounded-md": unref(validationErrors).currency
        }
      ])}">`);
      _push(ssrRenderComponent(_component_input_select, {
        modelValue: unref(form).currency,
        "onUpdate:modelValue": [($event) => unref(form).currency = $event, setChosenCurrentRate],
        options: unref(currencyList),
        loading: unref(currencyLoading),
        filter: "",
        placeholder: "Choose an currency"
      }, null, _parent));
      _push(`</div></div><div><label for="quantity" class="text-xs text-text-secondary">${ssrInterpolate(_ctx.$t("page.domiciliation.new.foreign_amount"))} `);
      _push(ssrRenderComponent(_component_badge_required, {
        label: _ctx.$t("page.beneficiary.required")
      }, null, _parent));
      _push(`</label>`);
      _push(ssrRenderComponent(_component_input_custom_number, {
        modelValue: unref(form).amount,
        "onUpdate:modelValue": ($event) => unref(form).amount = $event,
        identifier: "quantity",
        "max-fraction-digits": 3,
        placeholder: "0.000",
        autocomplete: "off",
        onInput: (e2) => convertCurrency(e2.value),
        class: [
          "",
          {
            "ring-4 ring-accent-muted ring-offset-2 rounded-md": unref(validationErrors).foreignAmount
          }
        ]
      }, null, _parent));
      _push(`</div><div><label for="convertedAmount" class="text-xs text-text-secondary">${ssrInterpolate(_ctx.$t("page.domiciliation.new.converted_amount"))}</label>`);
      _push(ssrRenderComponent(_component_input_custom_number, {
        modelValue: unref(form).convertedAmount,
        "onUpdate:modelValue": ($event) => unref(form).convertedAmount = $event,
        identifier: "convertedAmount",
        "max-fraction-digits": 3,
        placeholder: "0.000",
        disabled: ""
      }, null, _parent));
      _push(`</div></div></div></form></div><div class="space-y-3"><h2 class="text-sm font-bold text-text-primary flex items-center gap-2"><span class="flex items-center justify-center size-5 rounded-full bg-primary text-white text-xs"> 3 </span>${ssrInterpolate(_ctx.$t("page.domiciliation.new.documents"))}</h2>`);
      if (unref(domiciliationFileList).length > 0) {
        _push(`<!--[-->`);
        ssrRenderList(unref(domiciliationFileList), (file) => {
          _push(`<div class="bg-bg-main border border-border-main px-2 py-1 rounded-md text-xs space-y-1"><div class="flex items-center space-x-2"><p class="font-semibold">${ssrInterpolate(file.name)}</p>`);
          _push(ssrRenderComponent(_component_badge_required, {
            label: _ctx.$t("page.beneficiary.required")
          }, null, _parent));
          _push(`</div>`);
          _push(ssrRenderComponent(_component_input_file_upload, {
            type: file.code,
            category: file.category,
            onUpdateFile: (e2) => setUploadedFile(file.code, e2),
            onRemovefile: ($event) => clearFile(file.code)
          }, null, _parent));
          _push(`</div>`);
        });
        _push(`<!--]-->`);
      } else {
        _push(`<div>`);
        if (unref(isDomAttachmentLoading)) {
          _push(`<div class="space-y-2"><!--[-->`);
          ssrRenderList(4, (i) => {
            _push(ssrRenderComponent(_component_skeleton, {
              key: i,
              width: "100%",
              height: "4.5rem"
            }, null, _parent));
          });
          _push(`<!--]--></div>`);
        } else {
          _push(`<div class="relative grid grid-cols-2 border border-dashed rounded-lg bg-bg-secondary border-primary-dark h-28"><div class="grid items-center justify-center"><img${ssrRenderAttr("src", _imports_1)} class="object-contain object-center size-12" alt="New manager Logo Svg"></div><div class="flex items-center justify-start p-4 text-sm text-right"><p>${ssrInterpolate(_ctx.$t("page.domiciliation.new.no_file"))}</p></div>`);
          if (unref(isDomAttachmentLoading)) {
            _push(ssrRenderComponent(_component_svg_loader, { class: "absolute right-2 top-1" }, null, _parent));
          } else {
            _push(`<!---->`);
          }
          _push(`</div>`);
        }
        _push(`</div>`);
      }
      _push(`</div><div class="pb-5 grid justify-end">`);
      _push(ssrRenderComponent(_component_button_primary, {
        type: "button",
        label: _ctx.$t("button.create_dom"),
        onClick: openConfirmationModal
      }, null, _parent));
      _push(`</div>`);
      _push(ssrRenderComponent(_component_Dialog, {
        visible: unref(showConfirmationModal),
        "onUpdate:visible": ($event) => isRef(showConfirmationModal) ? showConfirmationModal.value = $event : null,
        modal: "",
        style: { width: "22rem" }
      }, {
        container: withCtx(({ closeCallback }, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="p-2 rounded-xl space-y-5 border-2 border-border-main"${_scopeId}><p class="text-center font-bold text-xl"${_scopeId}>${ssrInterpolate(_ctx.$t("page.domiciliation.new.confirmation"))}</p><p class="text-sm text-center"${_scopeId}>${ssrInterpolate(_ctx.$t("page.domiciliation.new.confirmation_message"))}</p><div class="grid justify-end grid-flow-col gap-3 border-t border-border-main pt-2"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_button_outline, {
              label: _ctx.$t("button.cancel"),
              onClick: closeCallback
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_button_primary, {
              type: "button",
              label: _ctx.$t("button.submit"),
              loading: unref(isLoading),
              onClick: submit
            }, null, _parent2, _scopeId));
            _push2(`</div></div>`);
          } else {
            return [
              createVNode("div", { class: "p-2 rounded-xl space-y-5 border-2 border-border-main" }, [
                createVNode("p", { class: "text-center font-bold text-xl" }, toDisplayString(_ctx.$t("page.domiciliation.new.confirmation")), 1),
                createVNode("p", { class: "text-sm text-center" }, toDisplayString(_ctx.$t("page.domiciliation.new.confirmation_message")), 1),
                createVNode("div", { class: "grid justify-end grid-flow-col gap-3 border-t border-border-main pt-2" }, [
                  createVNode(_component_button_outline, {
                    label: _ctx.$t("button.cancel"),
                    onClick: withModifiers(closeCallback, ["prevent"])
                  }, null, 8, ["label", "onClick"]),
                  createVNode(_component_button_primary, {
                    type: "button",
                    label: _ctx.$t("button.submit"),
                    loading: unref(isLoading),
                    onClick: withModifiers(submit, ["prevent"])
                  }, null, 8, ["label", "loading"])
                ])
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/domiciliation/new.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=new-XLPEgEyI.mjs.map
