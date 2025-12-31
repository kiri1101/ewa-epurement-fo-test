import { _ as __nuxt_component_3$1, a as __nuxt_component_4$1 } from './ImageBlur-Ii21mxbA.mjs';
import { _ as __nuxt_component_2 } from './BgTransparent-2nQ6GXol.mjs';
import { defineComponent, ref, computed, withCtx, unref, createVNode, mergeProps, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderAttr, ssrInterpolate } from 'vue/server-renderer';
import { d as useI18n, a as useAssetStore, e as useAuthStore, u as useHead, f as useRuntimeConfig } from './server.mjs';
import './index-BZaoBW6c.mjs';
import '@primeuix/utils';
import '@primeuix/styles/skeleton';
import './index-BPlHOqVl.mjs';
import './index-KxuA-H6z.mjs';
import './index-BTsexa2i.mjs';
import '@primeuix/styles/inputtext';
import '../_/nitro.mjs';
import 'drizzle-orm';
import 'drizzle-orm/libsql';
import '@libsql/client';
import 'drizzle-orm/sqlite-core';
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
import 'pinia';
import '@primeuix/utils/eventbus';
import '@primeuix/styles/base';
import '@primeuix/utils/dom';
import '@primeuix/utils/zindex';
import '@primeuix/utils/uuid';
import '../routes/renderer.mjs';
import 'vue-bundle-renderer/runtime';
import 'unhead/server';
import 'devalue';
import 'unhead/utils';

const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "Badge",
  __ssrInlineRender: true,
  props: {
    state: { default: "success" },
    label: {}
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<button${ssrRenderAttrs(mergeProps({
        type: "button",
        class: [
          "border py-0.5 text-xs max-w-28 w-full rounded-md",
          { "bg-button-green border-border-green": __props.state === "success" }
        ]
      }, _attrs))}>${ssrInterpolate(__props.label)}</button>`);
    };
  }
});
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Button/Badge.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const __nuxt_component_3 = Object.assign(_sfc_main$2, { __name: "ButtonBadge" });
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "Radioactive",
  __ssrInlineRender: true,
  props: {
    color: { default: "#001051" }
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<svg${ssrRenderAttrs(mergeProps({
        class: "size-4",
        viewBox: "0 0 21 19",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg"
      }, _attrs))}><path d="M19.9672 16.5967L11.4814 0.837975C10.88 -0.279325 9.27769 -0.279325 8.67572 0.837975L0.190414 16.5967C0.0598196 16.8392 -0.00565443 17.1115 0.000382738 17.3869C0.00641991 17.6623 0.0837621 17.9315 0.22486 18.1681C0.365958 18.4047 0.56599 18.6007 0.805432 18.7369C1.04487 18.8731 1.31554 18.9449 1.59102 18.9453H18.5641C18.8398 18.9453 19.1108 18.8739 19.3506 18.7378C19.5904 18.6018 19.7908 18.4058 19.9321 18.1692C20.0735 17.9325 20.1511 17.6632 20.1572 17.3876C20.1634 17.1119 20.0979 16.8394 19.9672 16.5967ZM10.0788 16.5056C9.88187 16.5056 9.68934 16.4472 9.52558 16.3377C9.36182 16.2283 9.23418 16.0728 9.15881 15.8908C9.08344 15.7089 9.06372 15.5087 9.10214 15.3155C9.14057 15.1223 9.23541 14.9449 9.37468 14.8056C9.51394 14.6664 9.69138 14.5715 9.88455 14.5331C10.0777 14.4947 10.2779 14.5144 10.4599 14.5898C10.6419 14.6651 10.7974 14.7928 10.9068 14.9565C11.0162 15.1203 11.0746 15.3128 11.0746 15.5098C11.0746 15.7739 10.9697 16.0272 10.783 16.2139C10.5962 16.4007 10.3429 16.5056 10.0788 16.5056ZM11.1603 6.4902L10.8745 12.5647C10.8745 12.7759 10.7905 12.9786 10.6411 13.128C10.4917 13.2774 10.2891 13.3613 10.0778 13.3613C9.86654 13.3613 9.66391 13.2774 9.51451 13.128C9.36511 12.9786 9.28118 12.7759 9.28118 12.5647L8.99538 6.49269C8.98896 6.3476 9.01181 6.20269 9.06258 6.06662C9.11335 5.93054 9.191 5.80609 9.2909 5.70066C9.39079 5.59523 9.51089 5.511 9.64404 5.45298C9.77718 5.39496 9.92065 5.36434 10.0659 5.36294H10.0763C10.2226 5.36287 10.3673 5.39242 10.5018 5.44981C10.6362 5.5072 10.7577 5.59125 10.8588 5.69687C10.9599 5.8025 11.0386 5.92751 11.0901 6.06438C11.1415 6.20124 11.1647 6.34711 11.1583 6.49319L11.1603 6.4902Z"${ssrRenderAttr("fill", __props.color)}></path></svg>`);
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Svg/Radioactive.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_4 = Object.assign(_sfc_main$1, { __name: "SvgRadioactive" });
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "infos",
  __ssrInlineRender: true,
  setup(__props) {
    const config = useRuntimeConfig();
    const { t } = useI18n();
    const assetStore = useAssetStore();
    useAuthStore();
    ref(true);
    const form = ref({
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      agency: "",
      support: "",
      kyc: false
    });
    useHead({
      title: `${t("meta.title.profile.infos")} - ${config.public.app.name}`,
      meta: [{ name: "description", content: "My design project application." }]
    });
    const kycLabel = computed(() => form.value.kyc ? "Active" : "Inactive");
    return (_ctx, _push, _parent, _attrs) => {
      const _component_gadget_banner = __nuxt_component_3$1;
      const _component_gadget_image_blur = __nuxt_component_4$1;
      const _component_input_bg_transparent = __nuxt_component_2;
      const _component_button_badge = __nuxt_component_3;
      const _component_svg_radioactive = __nuxt_component_4;
      _push(`<div${ssrRenderAttrs(_attrs)}>`);
      _push(ssrRenderComponent(_component_gadget_banner, null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="grid grid-cols-[auto_1fr] h-full"${_scopeId}><div class="grid justify-center ml-2 text-sm text-sidebar-text-primary lg:text-base"${_scopeId}><h3 class="ml-5 translate-y-8"${_scopeId}>Information personnelles</h3></div><div class="flex justify-end"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_gadget_image_blur, null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<img${ssrRenderAttr("src", unref(assetStore).list.profile)} class="z-30 object-cover object-center w-auto h-22" alt="Bank Logo"${_scopeId2}>`);
                } else {
                  return [
                    createVNode("img", {
                      src: unref(assetStore).list.profile,
                      class: "z-30 object-cover object-center w-auto h-22",
                      alt: "Bank Logo"
                    }, null, 8, ["src"])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div></div>`);
          } else {
            return [
              createVNode("div", { class: "grid grid-cols-[auto_1fr] h-full" }, [
                createVNode("div", { class: "grid justify-center ml-2 text-sm text-sidebar-text-primary lg:text-base" }, [
                  createVNode("h3", { class: "ml-5 translate-y-8" }, "Information personnelles")
                ]),
                createVNode("div", { class: "flex justify-end" }, [
                  createVNode(_component_gadget_image_blur, null, {
                    default: withCtx(() => [
                      createVNode("img", {
                        src: unref(assetStore).list.profile,
                        class: "z-30 object-cover object-center w-auto h-22",
                        alt: "Bank Logo"
                      }, null, 8, ["src"])
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
      _push(`<section class="mt-5 space-y-5"><div class="grid grid-cols-2 gap-3"><div><label class="text-xs text-input-profile-label">First name</label>`);
      _push(ssrRenderComponent(_component_input_bg_transparent, {
        identifier: "firstName",
        modelValue: unref(form).firstName,
        "onUpdate:modelValue": ($event) => unref(form).firstName = $event,
        disabled: ""
      }, null, _parent));
      _push(`</div><div><label class="text-xs text-input-profile-label">Last name</label>`);
      _push(ssrRenderComponent(_component_input_bg_transparent, {
        identifier: "lastName",
        modelValue: unref(form).lastName,
        "onUpdate:modelValue": ($event) => unref(form).lastName = $event,
        disabled: ""
      }, null, _parent));
      _push(`</div><div><label class="text-xs text-input-profile-label">Email</label>`);
      _push(ssrRenderComponent(_component_input_bg_transparent, {
        identifier: "email",
        modelValue: unref(form).email,
        "onUpdate:modelValue": ($event) => unref(form).email = $event,
        disabled: ""
      }, null, _parent));
      _push(`</div><div><label class="text-xs text-input-profile-label">Phone</label>`);
      _push(ssrRenderComponent(_component_input_bg_transparent, {
        identifier: "phone",
        modelValue: unref(form).phone,
        "onUpdate:modelValue": ($event) => unref(form).phone = $event,
        disabled: ""
      }, null, _parent));
      _push(`</div><div class="col-span-2"><label class="text-xs text-input-profile-label">Support</label>`);
      _push(ssrRenderComponent(_component_input_bg_transparent, {
        identifier: "support",
        modelValue: unref(form).support,
        "onUpdate:modelValue": ($event) => unref(form).support = $event,
        disabled: ""
      }, null, _parent));
      _push(`</div><div class="col-span-2"><label class="text-xs text-input-profile-label">Agency</label>`);
      _push(ssrRenderComponent(_component_input_bg_transparent, {
        identifier: "agency",
        modelValue: unref(form).agency,
        "onUpdate:modelValue": ($event) => unref(form).agency = $event,
        disabled: ""
      }, null, _parent));
      _push(`</div></div><p class="space-x-2 text-sm text-input-profile-label"><span>Kyc status:</span>`);
      _push(ssrRenderComponent(_component_button_badge, { label: unref(kycLabel) }, null, _parent));
      _push(`</p><p class="flex items-center space-x-1 text-xs">`);
      _push(ssrRenderComponent(_component_svg_radioactive, null, null, _parent));
      _push(`<span> To modifier your personal information, contact support ou your agency </span></p></section></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/user/profile/infos.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=infos-DCsnHBiI.mjs.map
