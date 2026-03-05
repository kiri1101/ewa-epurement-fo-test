import { _ as __nuxt_component_0 } from './AuthNav-eN4PH_ZJ.mjs';
import { _ as __nuxt_component_1, a as __nuxt_component_2 } from './ImageBlur-Cr_DWKbR.mjs';
import { _ as __nuxt_component_0$1 } from './Building-DIKHrDfz.mjs';
import script from './index-CQWGTv9B.mjs';
import { defineComponent, ref, mergeProps, withCtx, createVNode, toDisplayString, unref, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate, ssrRenderAttr, ssrRenderList, ssrRenderStyle } from 'vue/server-renderer';
import { u as useAuthStore } from './auth-uLpXCxdh.mjs';
import { d as formatAmountWithCurrency } from './str.helpers-C9LGWfpH.mjs';
import moment from 'moment';
import { _ as __nuxt_component_0$2 } from './nuxt-link-CznM7n7l.mjs';
import { _ as _imports_0 } from './virtual_public-BaMBbzSe.mjs';
import { x as useRoute, b as useI18n, c as useNuxtApp, u as useHead, d as useRuntimeConfig } from './server.mjs';
import { u as useNotify } from './notify-7jIrthPf.mjs';
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

const _sfc_main$3 = /* @__PURE__ */ defineComponent({
  __name: "Actors",
  __ssrInlineRender: true,
  props: {
    supplier: {}
  },
  setup(__props) {
    const authStore = useAuthStore();
    return (_ctx, _push, _parent, _attrs) => {
      const _component_svg_building = __nuxt_component_0$1;
      const _component_skeleton = script;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "space-y-5" }, _attrs))}><p class="flex items-center gap-2 text-sm">`);
      _push(ssrRenderComponent(_component_svg_building, { class: "stroke-accent" }, null, _parent));
      _push(`<span class="capitalize font-bold">${ssrInterpolate(_ctx.$t("page.domiciliation.edit.party_involved"))}</span></p><ul class="grid grid-cols-2 gap-5 text-xs"><li class="space-y-2 bg-bg-secondary rounded-md p-3"><p class="text-text-secondary font-semibold uppercase">${ssrInterpolate(_ctx.$t("page.domiciliation.edit.import"))}</p><ol class="text-sm"><li class="font-bold">${ssrInterpolate(unref(authStore).state?.firstName)} ${ssrInterpolate(unref(authStore).state?.lastName)}</li><li class="text-text-secondary">${ssrInterpolate(unref(authStore).state?.regCommerce)}</li><li class="text-text-secondary">${ssrInterpolate(unref(authStore).state?.address)}</li></ol></li>`);
      if (__props.supplier) {
        _push(`<li class="space-y-2 bg-accent-muted rounded-md p-3"><p class="text-accent-light font-semibold uppercase">${ssrInterpolate(_ctx.$t("page.domiciliation.edit.supplier"))}</p><ol class="text-sm"><li class="font-bold">${ssrInterpolate(__props.supplier?.name)}</li><li class="text-text-secondary">${ssrInterpolate(__props.supplier?.country)}</li><li class="text-text-secondary">${ssrInterpolate(__props.supplier?.address)}</li></ol></li>`);
      } else {
        _push(ssrRenderComponent(_component_skeleton, {
          width: "100%",
          height: "6.75rem"
        }, null, _parent));
      }
      _push(`</ul></div>`);
    };
  }
});
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Domiciliation/Actors.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const __nuxt_component_3 = Object.assign(_sfc_main$3, { __name: "DomiciliationActors" });
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "Operation",
  __ssrInlineRender: true,
  props: {
    infos: {}
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_svg_building = __nuxt_component_0$1;
      const _component_skeleton = script;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "space-y-5 bg-bg-secondary p-5 rounded-lg" }, _attrs))}><p class="flex items-center gap-2 text-sm">`);
      _push(ssrRenderComponent(_component_svg_building, { class: "stroke-accent" }, null, _parent));
      _push(`<span class="capitalize font-bold">${ssrInterpolate(_ctx.$t("page.domiciliation.edit.operation_details"))}</span></p>`);
      if (__props.infos) {
        _push(`<ul class="grid grid-cols-2 gap-3 text-sm"><li><p class="text-xs text-text-secondary">${ssrInterpolate(_ctx.$t("page.domiciliation.edit.designation"))}</p><p>${ssrInterpolate(__props.infos?.designation)}</p></li>`);
        if (__props.infos?.type.toLowerCase().endsWith("bien")) {
          _push(`<li><p class="text-xs text-text-secondary">${ssrInterpolate(_ctx.$t("page.domiciliation.edit.qty"))}</p><p>${ssrInterpolate(__props.infos?.quantity)}</p></li>`);
        } else {
          _push(`<!---->`);
        }
        if (__props.infos?.type.toLowerCase().endsWith("bien")) {
          _push(`<li><p class="text-xs text-text-secondary">${ssrInterpolate(_ctx.$t("page.domiciliation.edit.office"))}</p><p>${ssrInterpolate(__props.infos?.office)}</p></li>`);
        } else {
          _push(`<!---->`);
        }
        _push(`<li><p class="text-xs text-text-secondary">${ssrInterpolate(_ctx.$t("page.domiciliation.edit.reference"))}</p><p>${ssrInterpolate(__props.infos?.reference)}</p></li>`);
        if (__props.infos?.type.toLowerCase().endsWith("bien")) {
          _push(`<li><p class="text-xs text-text-secondary">${ssrInterpolate(_ctx.$t("page.domiciliation.edit.fob_value"))}</p><p>${ssrInterpolate(("formatAmountWithCurrency" in _ctx ? _ctx.formatAmountWithCurrency : unref(formatAmountWithCurrency))(__props.infos?.fob, __props.infos?.currency))}</p></li>`);
        } else {
          _push(`<!---->`);
        }
        if (__props.infos?.type.toLowerCase().endsWith("bien")) {
          _push(`<li><p class="text-xs text-text-secondary">${ssrInterpolate(_ctx.$t("page.domiciliation.edit.caf_value"))}</p><p>${ssrInterpolate(("formatAmountWithCurrency" in _ctx ? _ctx.formatAmountWithCurrency : unref(formatAmountWithCurrency))(__props.infos?.caf, __props.infos?.currency))}</p></li>`);
        } else {
          _push(`<!---->`);
        }
        _push(`<li><p class="text-xs text-text-secondary">${ssrInterpolate(_ctx.$t("page.domiciliation.edit.payment_deadline"))}</p><p>${ssrInterpolate(unref(moment)(__props.infos?.paymentDeadline).format("DD/MM/YYYY"))}</p></li><li><p class="text-xs text-text-secondary">${ssrInterpolate(_ctx.$t("page.domiciliation.edit.custom_infos"))}</p><p>${ssrInterpolate(__props.infos?.customInfos)}</p></li><li><p class="text-xs text-text-secondary">${ssrInterpolate(_ctx.$t("page.domiciliation.edit.amount"))}</p><p>${ssrInterpolate(("formatAmountWithCurrency" in _ctx ? _ctx.formatAmountWithCurrency : unref(formatAmountWithCurrency))(__props.infos?.amount, __props.infos?.currency))}</p></li>`);
        if (__props.infos?.type.toLowerCase().endsWith("serv")) {
          _push(`<li><p class="text-xs text-text-secondary">${ssrInterpolate(_ctx.$t("page.domiciliation.edit.chapter"))}</p><p>${ssrInterpolate(__props.infos?.chapter)}</p></li>`);
        } else {
          _push(`<!---->`);
        }
        if (__props.infos?.type.toLowerCase().endsWith("serv")) {
          _push(`<li><p class="text-xs text-text-secondary">${ssrInterpolate(_ctx.$t("page.domiciliation.edit.description"))}</p><p>${ssrInterpolate(__props.infos?.description)}</p></li>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</ul>`);
      } else {
        _push(ssrRenderComponent(_component_skeleton, {
          width: "100%",
          height: "7.5rem"
        }, null, _parent));
      }
      _push(`</div>`);
    };
  }
});
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Domiciliation/Operation.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const __nuxt_component_4 = Object.assign(_sfc_main$2, { __name: "DomiciliationOperation" });
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "Files",
  __ssrInlineRender: true,
  props: {
    files: {}
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_svg_building = __nuxt_component_0$1;
      const _component_nuxt_link = __nuxt_component_0$2;
      const _component_skeleton = script;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "space-y-5" }, _attrs))}><p class="flex items-center gap-2 text-sm">`);
      _push(ssrRenderComponent(_component_svg_building, { class: "stroke-accent" }, null, _parent));
      _push(`<span class="capitalize font-bold">${ssrInterpolate(_ctx.$t("page.domiciliation.edit.documents"))}</span></p><ul class="space-y-2">`);
      if (__props.files) {
        _push(`<!--[-->`);
        ssrRenderList(__props.files, (file) => {
          _push(`<li class="flex items-center justify-between p-3 border border-border-main rounded-md"><div class="flex items-center gap-2 text-sm">`);
          _push(ssrRenderComponent(_component_svg_building, { class: "bg-bg-secondary p-1 rounded" }, null, _parent));
          _push(`<p class="flex flex-col"><span class="text-xs">${ssrInterpolate(file.longLabel)}</span><span class="text-xxs">${ssrInterpolate(_ctx.$t("page.domiciliation.edit.created_at"))} ${ssrInterpolate(unref(moment)(file.createdAt).format("DD/MM/YYYY"))}</span></p></div><div class="flex items-center gap-2 text-xs">`);
          _push(ssrRenderComponent(_component_nuxt_link, {
            to: file.url,
            target: "_blank"
          }, {
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(`<i class="pi pi-download cursor-pointer hover:bg-accent-muted text-accent px-2 py-1.5 rounded-sm" style="${ssrRenderStyle({ "font-size": "0.8rem" })}"${_scopeId}></i>`);
              } else {
                return [
                  createVNode("i", {
                    class: "pi pi-download cursor-pointer hover:bg-accent-muted text-accent px-2 py-1.5 rounded-sm",
                    style: { "font-size": "0.8rem" }
                  })
                ];
              }
            }),
            _: 2
          }, _parent));
          _push(`</div></li>`);
        });
        _push(`<!--]-->`);
      } else {
        _push(ssrRenderComponent(_component_skeleton, {
          width: "100%",
          height: "3.5rem"
        }, null, _parent));
      }
      _push(`</ul></div>`);
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Domiciliation/Files.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_5 = Object.assign(_sfc_main$1, { __name: "DomiciliationFiles" });
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "edit",
  __ssrInlineRender: true,
  setup(__props) {
    useRoute();
    const config = useRuntimeConfig();
    const { t, locale } = useI18n();
    const { $apiFetch } = useNuxtApp();
    useNotify();
    useHead({
      title: `${t("meta.title.domiciliation.view")} - ${config.public.app.name}`,
      meta: [{ name: "description", content: "My design project application." }]
    });
    ref(false);
    const domiciliation = ref();
    return (_ctx, _push, _parent, _attrs) => {
      const _component_navbar_auth_nav = __nuxt_component_0;
      const _component_gadget_banner = __nuxt_component_1;
      const _component_gadget_image_blur = __nuxt_component_2;
      const _component_domiciliation_actors = __nuxt_component_3;
      const _component_domiciliation_operation = __nuxt_component_4;
      const _component_domiciliation_files = __nuxt_component_5;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "pb-5 text-text-primary space-y-5" }, _attrs))}>`);
      _push(ssrRenderComponent(_component_navbar_auth_nav, {
        title: _ctx.$t("menu.domiciliation.view")
      }, null, _parent));
      _push(ssrRenderComponent(_component_gadget_banner, null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="grid grid-cols-[auto_1fr] h-full"${_scopeId}><div class="grid justify-center ml-2 text-sm text-white lg:text-base"${_scopeId}><div class="ml-5 translate-y-8"${_scopeId}><h3 class="font-semibold"${_scopeId}>${ssrInterpolate(_ctx.$t("page.domiciliation.edit.title1"))}</h3><h4 class="text-xs"${_scopeId}>${ssrInterpolate(_ctx.$t("page.domiciliation.edit.title2"))}</h4></div></div><div class="flex justify-end"${_scopeId}>`);
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
                    createVNode("h3", { class: "font-semibold" }, toDisplayString(_ctx.$t("page.domiciliation.edit.title1")), 1),
                    createVNode("h4", { class: "text-xs" }, toDisplayString(_ctx.$t("page.domiciliation.edit.title2")), 1)
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
      _push(`<div class="grid grid-cols-[1fr_auto] gap-4"><div class="space-y-7">`);
      _push(ssrRenderComponent(_component_domiciliation_actors, {
        supplier: unref(domiciliation)?.supplier
      }, null, _parent));
      _push(ssrRenderComponent(_component_domiciliation_operation, {
        infos: unref(domiciliation)?.infos
      }, null, _parent));
      _push(ssrRenderComponent(_component_domiciliation_files, {
        files: unref(domiciliation)?.files
      }, null, _parent));
      _push(`</div><div></div></div></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/domiciliation/[id]/edit.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=edit-D1xZn5Il.mjs.map
