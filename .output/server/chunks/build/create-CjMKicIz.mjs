import { _ as __nuxt_component_0$1 } from './AuthNav-eN4PH_ZJ.mjs';
import { _ as __nuxt_component_1$1, a as __nuxt_component_2$1 } from './ImageBlur-Cr_DWKbR.mjs';
import { _ as __nuxt_component_0$2 } from './CustomTitle-DhLL5cu9.mjs';
import { _ as __nuxt_component_4$1 } from './ErrorMsg-Cdn_8jsh.mjs';
import { defineComponent, ref, mergeProps, withCtx, createVNode, toDisplayString, unref, shallowRef, computed, provide, reactive, inject, watch, resolveDynamicComponent, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate, ssrRenderAttr, ssrRenderList, ssrRenderClass, ssrGetDirectiveProps, ssrRenderVNode } from 'vue/server-renderer';
import { _ as __nuxt_component_6 } from './BgNormal-WNDX37G3.mjs';
import { _ as __nuxt_component_5 } from './Phone-jhFUo5M2.mjs';
import { _ as __nuxt_component_9 } from './Select-BMmHRGTZ.mjs';
import { _ as __nuxt_component_8 } from './CustomNumber-Bv6OziLi.mjs';
import { _ as __nuxt_component_10 } from './FileUpload-APGyD7h5.mjs';
import { b as useI18n, u as useHead, d as useRuntimeConfig, c as useNuxtApp, n as navigateTo, T as Tooltip } from './server.mjs';
import { _ as _imports_1 } from './virtual_public-DBNNCCD_.mjs';
import { u as useBeneficiaries } from './beneficiary-C9PDOj1m.mjs';
import { _ as __nuxt_component_13 } from './Outline-DW3-Glvz.mjs';
import { _ as __nuxt_component_1$2 } from './Primary-DW1ITzn7.mjs';
import { u as useNotify } from './notify-7jIrthPf.mjs';
import { _ as __nuxt_component_4 } from './NoData-a0CZY--V.mjs';
import { _ as _imports_0 } from './virtual_public-DHzGlWyN.mjs';
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
import 'pinia';
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
import 'libphonenumber-js';
import './index-DeQNdLHz.mjs';
import './index-Bs-6gtw7.mjs';
import './index-jauc-8K8.mjs';
import './index-BKaz9u56.mjs';
import './index-DSaQNc_N.mjs';
import './index-DNiohjxC.mjs';
import './index-CicSKTaH.mjs';
import './index-4S0J0IID.mjs';
import './index-BjkFAZaV.mjs';
import './index-DNErSYKU.mjs';
import './index-DBZjLEmg.mjs';
import 'filepond-plugin-file-validate-type';
import 'filepond-plugin-file-validate-size';
import './auth-uLpXCxdh.mjs';
import './loading-DepoijyK.mjs';
import './index-BlaqzKyH.mjs';
import './index-DORsLxMh.mjs';

const fieldRegistry = {
  input: {
    text: __nuxt_component_6,
    phone_number: __nuxt_component_5,
    email: __nuxt_component_6,
    number: __nuxt_component_8
  },
  select: {
    text: __nuxt_component_9
  }
};
const _sfc_main$4 = /* @__PURE__ */ defineComponent({
  __name: "FormFieldRenderer",
  __ssrInlineRender: true,
  props: {
    fieldKey: {},
    schema: {},
    model: {}
  },
  setup(__props) {
    const { validationErrors } = inject("validErrors");
    const component = computed(
      () => fieldRegistry[__props.schema.fieldCate.toLowerCase()][__props.schema.fieldType.toLowerCase()]
    );
    const errorMsg = computed(() => {
      return validationErrors.value?.find(
        (error) => error.name === __props.fieldKey
      );
    });
    const updateFormPhone = (event, fieldKey) => {
      __props.model[fieldKey] = event.valid ? event.nationalNumber : "";
      __props.model[`${fieldKey}_code`] = event.valid ? event.countryCallingCode : "";
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_input_error_msg = __nuxt_component_4$1;
      _push(`<div${ssrRenderAttrs(_attrs)}><label for="country" class="text-xs text-text-secondary">${ssrInterpolate(__props.schema.fieldLibc_lang01)} `);
      if (Boolean(__props.schema.required)) {
        _push(`<span class="text-white font-semibold text-xxs bg-status-error rounded px-1">${ssrInterpolate(_ctx.$t("page.beneficiary.required"))}</span>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</label>`);
      if (__props.schema.fieldCate.toLowerCase() === "select") {
        ssrRenderVNode(_push, createVNode(resolveDynamicComponent(unref(component)), {
          modelValue: __props.model[__props.fieldKey],
          "onUpdate:modelValue": ($event) => __props.model[__props.fieldKey] = $event,
          identifier: __props.schema.fieldCode,
          "name-key": "option_label",
          options: __props.schema.listValue,
          disabled: Boolean(__props.schema.readOnly)
        }, null), _parent);
      } else if (__props.schema.fieldType.toLowerCase() === "phone_number") {
        ssrRenderVNode(_push, createVNode(resolveDynamicComponent(unref(component)), {
          onValidate: ($event) => updateFormPhone($event, __props.fieldKey),
          identifier: __props.schema.fieldCode,
          disabled: Boolean(__props.schema.readOnly)
        }, null), _parent);
      } else if (__props.schema.fieldType.toLowerCase() === "email") {
        ssrRenderVNode(_push, createVNode(resolveDynamicComponent(unref(component)), {
          modelValue: __props.model[__props.fieldKey],
          "onUpdate:modelValue": ($event) => __props.model[__props.fieldKey] = $event,
          identifier: __props.schema.fieldCode,
          disabled: Boolean(__props.schema.readOnly)
        }, null), _parent);
      } else {
        ssrRenderVNode(_push, createVNode(resolveDynamicComponent(unref(component)), {
          modelValue: __props.model[__props.fieldKey],
          "onUpdate:modelValue": ($event) => __props.model[__props.fieldKey] = $event,
          identifier: __props.schema.fieldCode,
          disabled: Boolean(__props.schema.readOnly),
          class: "uppercase"
        }, null), _parent);
      }
      if (unref(errorMsg)) {
        _push(ssrRenderComponent(_component_input_error_msg, {
          label: unref(errorMsg).message
        }, null, _parent));
      } else {
        _push(`<!---->`);
      }
      _push(`</div>`);
    };
  }
});
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Beneficiary/FormFieldRenderer.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const __nuxt_component_0 = Object.assign(_sfc_main$4, { __name: "BeneficiaryFormFieldRenderer" });
const _sfc_main$3 = /* @__PURE__ */ defineComponent({
  __name: "FormLayoutRenderer",
  __ssrInlineRender: true,
  props: {
    layout: {},
    model: {}
  },
  setup(__props) {
    const getColClass = (d) => {
      return [
        `col-span-${d.extraSmall}`,
        `sm:col-span-${d.small}`,
        `md:col-span-${d.medium}`,
        `lg:col-span-${d.large}`,
        `xl:col-span-${d.extraLarge}`
      ].join(" ");
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_beneficiary_form_field_renderer = __nuxt_component_0;
      _push(`<div${ssrRenderAttrs(_attrs)}><!--[-->`);
      ssrRenderList(__props.layout, (block) => {
        _push(`<div class="grid grid-cols-12 gap-4"><!--[-->`);
        ssrRenderList(block.fields, (field, i) => {
          _push(`<div class="${ssrRenderClass(getColClass(field.fieldDisposition))}">`);
          _push(ssrRenderComponent(_component_beneficiary_form_field_renderer, {
            "field-key": field.fieldCode,
            schema: field,
            model: __props.model
          }, null, _parent));
          _push(`</div>`);
        });
        _push(`<!--]--></div>`);
      });
      _push(`<!--]--></div>`);
    };
  }
});
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Beneficiary/FormLayoutRenderer.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const __nuxt_component_1 = Object.assign(_sfc_main$3, { __name: "BeneficiaryFormLayoutRenderer" });
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "FormFileUpload",
  __ssrInlineRender: true,
  props: {
    model: {},
    person: {}
  },
  emits: ["delete:file", "num:files", "uploaded"],
  setup(__props, { emit: __emit }) {
    const emit = __emit;
    const { validationErrors } = inject("validErrors");
    useBeneficiaries();
    const files = ref({
      morale: [],
      physique: []
    });
    const chosenFiles = ref([]);
    const errorMsg = computed(() => {
      return validationErrors.value?.find(
        (error) => error.name === "files"
      );
    });
    const setUploadedFile = (uuid, fileId) => {
      __props.model.files[uuid] = fileId;
      emit("uploaded", true);
    };
    const clearFile = (uuid) => {
      emit("delete:file", uuid);
    };
    watch(
      () => __props.person,
      (newPerson) => {
        if (newPerson) {
          let type = newPerson.toLowerCase();
          chosenFiles.value = files.value[type];
          emit("num:files", files.value[type].length);
        }
      },
      { immediate: true }
    );
    return (_ctx, _push, _parent, _attrs) => {
      const _component_input_error_msg = __nuxt_component_4$1;
      const _component_input_file_upload = __nuxt_component_10;
      const _directive_tooltip = Tooltip;
      let _temp0;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "space-y-3 mt-5" }, _attrs))}>`);
      if (unref(errorMsg)) {
        _push(ssrRenderComponent(_component_input_error_msg, {
          label: unref(errorMsg).message
        }, null, _parent));
      } else {
        _push(`<!---->`);
      }
      if (unref(chosenFiles).length > 0) {
        _push(`<!--[-->`);
        ssrRenderList(unref(chosenFiles), (file) => {
          _push(`<div class="space-y-1 mt-2"><div class="flex items-center space-x-1"><div class="flex items-center space-x-2"><p class="text-xs font-bold">${ssrInterpolate(file.title)}</p>`);
          if (file.required) {
            _push(`<span class="text-white font-semibold text-xxs bg-status-error rounded px-1">${ssrInterpolate(_ctx.$t("page.beneficiary.required"))}</span>`);
          } else {
            _push(`<!---->`);
          }
          _push(`</div><i${ssrRenderAttrs(_temp0 = mergeProps({
            class: "pi pi-info-circle cursor-pointer",
            style: { "font-size": "0.8rem" }
          }, ssrGetDirectiveProps(_ctx, _directive_tooltip, file.tooltip, void 0, { top: true })))}>${"textContent" in _temp0 ? ssrInterpolate(_temp0.textContent) : _temp0.innerHTML ?? ""}</i></div>`);
          _push(ssrRenderComponent(_component_input_file_upload, {
            identifier: file.insertId,
            type: file.insertId,
            category: file.category,
            onUpdateFile: (e) => setUploadedFile(file.insertId, e),
            onRemovefile: ($event) => clearFile(file.insertId)
          }, null, _parent));
          _push(`</div>`);
        });
        _push(`<!--]-->`);
      } else {
        _push(`<div class="grid grid-cols-2 border border-dashed rounded-lg bg-bg-secondary border-primary h-28"><div class="grid items-center justify-center"><img${ssrRenderAttr("src", _imports_1)} class="object-contain object-center size-12" alt="New manager Logo Svg"></div><div class="flex items-center justify-start p-4 text-sm text-right"><p>${ssrInterpolate(_ctx.$t("page.beneficiary.no_file"))}</p></div></div>`);
      }
      _push(`</div>`);
    };
  }
});
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Beneficiary/FormFileUpload.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const __nuxt_component_2 = Object.assign(_sfc_main$2, { __name: "BeneficiaryFormFileUpload" });
const useCreateBenefModel = (sections) => {
  const model = reactive({});
  sections.forEach((section) => {
    section.fields.forEach((field) => {
      model[field.fieldCode] = field.defaultValue ?? "";
      if (field.fieldType.toLowerCase() === "phone_number") {
        model[`${field.fieldCode}_code`] = "";
      }
    });
  });
  model.files = {};
  return model;
};
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "FormRenderer",
  __ssrInlineRender: true,
  props: {
    schema: {}
  },
  setup(__props) {
    const { $apiFetch } = useNuxtApp();
    useNotify();
    const { t, locale } = useI18n();
    const model = useCreateBenefModel(__props.schema.formSectionList);
    const isLoading = ref(false);
    const validationErrors = ref(null);
    const numFiles = shallowRef(0);
    const uploadedFiles = shallowRef(0);
    provide("validErrors", { validationErrors });
    const deleteFile = (uuid) => {
      const { [uuid]: _, ...rest } = model.files;
      model.files = rest;
      uploadedFiles.value--;
    };
    const incrementUploadedFiles = () => {
      uploadedFiles.value++;
    };
    const setFilesNum = (num) => {
      numFiles.value = num;
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_custom_title = __nuxt_component_0$2;
      const _component_beneficiary_form_layout_renderer = __nuxt_component_1;
      const _component_beneficiary_form_file_upload = __nuxt_component_2;
      const _component_button_outline = __nuxt_component_13;
      const _component_button_primary = __nuxt_component_1$2;
      _push(`<form${ssrRenderAttrs(mergeProps({ class: "pb-5" }, _attrs))}>`);
      _push(ssrRenderComponent(_component_custom_title, {
        label: __props.schema.apShortLabel_lang01
      }, null, _parent));
      _push(ssrRenderComponent(_component_beneficiary_form_layout_renderer, {
        layout: __props.schema.formSectionList,
        model: unref(model)
      }, null, _parent));
      _push(ssrRenderComponent(_component_beneficiary_form_file_upload, {
        model: unref(model),
        person: unref(model).benefType,
        "onDelete:file": deleteFile,
        "onNum:files": setFilesNum,
        onUploaded: incrementUploadedFiles
      }, null, _parent));
      _push(`<div class="grid justify-end grid-flow-col gap-3 mt-3 p-2 border-t border-border-main">`);
      _push(ssrRenderComponent(_component_button_outline, {
        label: _ctx.$t("button.cancel"),
        onClick: ($event) => ("navigateTo" in _ctx ? _ctx.navigateTo : unref(navigateTo))("/beneficiary/list")
      }, null, _parent));
      _push(ssrRenderComponent(_component_button_primary, {
        type: "submit",
        loading: unref(isLoading),
        label: _ctx.$t("button.create_benef")
      }, null, _parent));
      _push(`</div></form>`);
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Beneficiary/FormRenderer.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_3 = Object.assign(_sfc_main$1, { __name: "BeneficiaryFormRenderer" });
const useFormBuilder = () => {
  const { $apiFetch } = useNuxtApp();
  const config = useRuntimeConfig();
  const { locale } = useI18n();
  const isLoadingForm = shallowRef(false);
  const isFormLoading = computed(() => isLoadingForm.value);
  const getForm = async (target, mode = "create", identifier = "") => {
    let output = {
      validationErr: [],
      response: null,
      error: ""
    };
    isLoadingForm.value = true;
    try {
      const { apiResponse, validError } = await $apiFetch(
        config.public.api.build.form,
        {
          method: "POST",
          body: {
            target,
            mode,
            identifier,
            lang: locale.value
          }
        }
      );
      if (validError) {
        output.validationErr = validError;
      }
      output.response = apiResponse;
    } catch (error) {
      const errorMsg = handleApiError(error);
      if (errorMsg.length > 0) {
        output.error = errorMsg;
      }
    } finally {
      isLoadingForm.value = false;
    }
    return output;
  };
  return {
    isFormLoading,
    getForm
  };
};
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "create",
  __ssrInlineRender: true,
  setup(__props) {
    const config = useRuntimeConfig();
    const { t } = useI18n();
    useHead({
      title: `${t("meta.title.beneficiary.new")} - ${config.public.app.name}`,
      meta: [{ name: "description", content: "My design project application." }]
    });
    useNotify();
    useFormBuilder();
    const form = ref(null);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_navbar_auth_nav = __nuxt_component_0$1;
      const _component_gadget_banner = __nuxt_component_1$1;
      const _component_gadget_image_blur = __nuxt_component_2$1;
      const _component_beneficiary_form_renderer = __nuxt_component_3;
      const _component_gadget_no_data = __nuxt_component_4;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "pb-5 text-text-primary space-y-5" }, _attrs))}>`);
      _push(ssrRenderComponent(_component_navbar_auth_nav, {
        title: _ctx.$t("menu.beneficiary.new")
      }, null, _parent));
      _push(ssrRenderComponent(_component_gadget_banner, null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="grid grid-cols-[auto_1fr]"${_scopeId}><div class="grid items-center justify-center ml-5 text-sm text-white lg:text-base"${_scopeId}><h3 class="font-semibold -translate-y-4"${_scopeId}>${ssrInterpolate(_ctx.$t("page.beneficiary.new"))}</h3></div><div class="flex justify-end"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_gadget_image_blur, null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<img${ssrRenderAttr("src", _imports_0)} class="z-30 object-cover object-center translate-x-5 translate-y-3 size-18" alt="Create User Logo"${_scopeId2}>`);
                } else {
                  return [
                    createVNode("img", {
                      src: _imports_0,
                      class: "z-30 object-cover object-center translate-x-5 translate-y-3 size-18",
                      alt: "Create User Logo"
                    })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div></div>`);
          } else {
            return [
              createVNode("div", { class: "grid grid-cols-[auto_1fr]" }, [
                createVNode("div", { class: "grid items-center justify-center ml-5 text-sm text-white lg:text-base" }, [
                  createVNode("h3", { class: "font-semibold -translate-y-4" }, toDisplayString(_ctx.$t("page.beneficiary.new")), 1)
                ]),
                createVNode("div", { class: "flex justify-end" }, [
                  createVNode(_component_gadget_image_blur, null, {
                    default: withCtx(() => [
                      createVNode("img", {
                        src: _imports_0,
                        class: "z-30 object-cover object-center translate-x-5 translate-y-3 size-18",
                        alt: "Create User Logo"
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
      if (unref(form)) {
        _push(ssrRenderComponent(_component_beneficiary_form_renderer, { schema: unref(form) }, null, _parent));
      } else {
        _push(ssrRenderComponent(_component_gadget_no_data, null, null, _parent));
      }
      _push(`</div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/beneficiary/create.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=create-CjMKicIz.mjs.map
