import { _ as __nuxt_component_0 } from './AuthNav-eN4PH_ZJ.mjs';
import { _ as __nuxt_component_1, a as __nuxt_component_2 } from './ImageBlur-Cr_DWKbR.mjs';
import { _ as __nuxt_component_6 } from './ActiveSkeleton-DQWbUIWJ.mjs';
import { f as formatIban } from './str.helpers-C9LGWfpH.mjs';
import { defineComponent, withCtx, createVNode, toDisplayString, unref, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate, ssrRenderAttr, ssrRenderList } from 'vue/server-renderer';
import { _ as _imports_0$1 } from './virtual_public-C97_4EVg.mjs';
import { p as publicAssetsURL } from '../_/nitro.mjs';
import { _ as _export_sfc, b as useI18n, u as useHead, d as useRuntimeConfig } from './server.mjs';
import { u as useBankStore } from './bank-BwzX4P6l.mjs';
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
import 'moment';

const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "Visa",
  __ssrInlineRender: true,
  props: {
    account: {}
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_card_active_skeleton = __nuxt_component_6;
      _push(ssrRenderComponent(_component_card_active_skeleton, _attrs, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="flex items-center justify-between"${_scopeId}><div class="flex items-center space-x-2"${_scopeId}><div${_scopeId}><img${ssrRenderAttr("src", _imports_0$1)} class="object-cover object-center w-12 bg-bg-main p-1 rounded-sm" alt="App Logo"${_scopeId}></div><div${_scopeId}><h3 class="uppercase font-bold"${_scopeId}>${ssrInterpolate(__props.account?.bank)}</h3><h4${_scopeId}>${ssrInterpolate(_ctx.$t("page.account.account"))} ${ssrInterpolate(__props.account?.accType)}</h4></div></div></div><div class="mt-1"${_scopeId}><ul class="flex justify-between py-3 border-b border-primary-light"${_scopeId}><li${_scopeId}><h3 class="font-bold"${_scopeId}>${ssrInterpolate(_ctx.$t("page.account.agency"))}</h3><h3${_scopeId}>${ssrInterpolate(__props.account?.agency)}</h3></li><li${_scopeId}><h3 class="font-bold"${_scopeId}>${ssrInterpolate(_ctx.$t("page.account.client"))}</h3><h3${_scopeId}>${ssrInterpolate(__props.account?.client)}</h3></li></ul><p class="py-1.5 border-b border-primary-light text-text-primary font-semibold text-sm"${_scopeId}>${ssrInterpolate(("formatIban" in _ctx ? _ctx.formatIban : unref(formatIban))(__props.account?.iBan))}</p><div class="flex justify-between items-center pt-2.5"${_scopeId}><h3${_scopeId}>${ssrInterpolate(_ctx.$t("page.account.available_balance"))}</h3><span class="bg-bg-main py-0.5 px-2.5 font-bold rounded-xl"${_scopeId}> xxx xxx xxx ${ssrInterpolate(__props.account?.currency)}</span></div></div>`);
          } else {
            return [
              createVNode("div", { class: "flex items-center justify-between" }, [
                createVNode("div", { class: "flex items-center space-x-2" }, [
                  createVNode("div", null, [
                    createVNode("img", {
                      src: _imports_0$1,
                      class: "object-cover object-center w-12 bg-bg-main p-1 rounded-sm",
                      alt: "App Logo"
                    })
                  ]),
                  createVNode("div", null, [
                    createVNode("h3", { class: "uppercase font-bold" }, toDisplayString(__props.account?.bank), 1),
                    createVNode("h4", null, toDisplayString(_ctx.$t("page.account.account")) + " " + toDisplayString(__props.account?.accType), 1)
                  ])
                ])
              ]),
              createVNode("div", { class: "mt-1" }, [
                createVNode("ul", { class: "flex justify-between py-3 border-b border-primary-light" }, [
                  createVNode("li", null, [
                    createVNode("h3", { class: "font-bold" }, toDisplayString(_ctx.$t("page.account.agency")), 1),
                    createVNode("h3", null, toDisplayString(__props.account?.agency), 1)
                  ]),
                  createVNode("li", null, [
                    createVNode("h3", { class: "font-bold" }, toDisplayString(_ctx.$t("page.account.client")), 1),
                    createVNode("h3", null, toDisplayString(__props.account?.client), 1)
                  ])
                ]),
                createVNode("p", { class: "py-1.5 border-b border-primary-light text-text-primary font-semibold text-sm" }, toDisplayString(("formatIban" in _ctx ? _ctx.formatIban : unref(formatIban))(__props.account?.iBan)), 1),
                createVNode("div", { class: "flex justify-between items-center pt-2.5" }, [
                  createVNode("h3", null, toDisplayString(_ctx.$t("page.account.available_balance")), 1),
                  createVNode("span", { class: "bg-bg-main py-0.5 px-2.5 font-bold rounded-xl" }, " xxx xxx xxx " + toDisplayString(__props.account?.currency), 1)
                ])
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Card/Visa.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_3 = Object.assign(_sfc_main$1, { __name: "CardVisa" });
const _imports_0 = publicAssetsURL("/images/account.png");
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "accounts",
  __ssrInlineRender: true,
  setup(__props) {
    const config = useRuntimeConfig();
    const { t } = useI18n();
    const bankStore = useBankStore();
    useHead({
      title: `${t("meta.title.account")} - ${config.public.app.name}`,
      meta: [{ name: "description", content: "My design project application." }]
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_navbar_auth_nav = __nuxt_component_0;
      const _component_gadget_banner = __nuxt_component_1;
      const _component_gadget_image_blur = __nuxt_component_2;
      const _component_card_visa = __nuxt_component_3;
      _push(`<div${ssrRenderAttrs(_attrs)} data-v-fc73086c>`);
      _push(ssrRenderComponent(_component_navbar_auth_nav, {
        title: _ctx.$t("menu.account")
      }, null, _parent));
      _push(`<section class="mt-3" data-v-fc73086c>`);
      _push(ssrRenderComponent(_component_gadget_banner, null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="grid grid-cols-[auto_1fr] h-full" data-v-fc73086c${_scopeId}><div class="text-white grid justify-center ml-2 text-xs lg:text-base" data-v-fc73086c${_scopeId}><h3 class="translate-y-7" data-v-fc73086c${_scopeId}><p data-v-fc73086c${_scopeId}>${ssrInterpolate(_ctx.$t("page.account.title1"))}</p><p data-v-fc73086c${_scopeId}>${ssrInterpolate(_ctx.$t("page.account.title2"))}</p></h3></div><div class="flex justify-end" data-v-fc73086c${_scopeId}>`);
            _push2(ssrRenderComponent(_component_gadget_image_blur, null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<img${ssrRenderAttr("src", _imports_0)} class="object-cover object-center h-26 w-auto z-30" alt="Bank Logo" data-v-fc73086c${_scopeId2}>`);
                } else {
                  return [
                    createVNode("img", {
                      src: _imports_0,
                      class: "object-cover object-center h-26 w-auto z-30",
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
                createVNode("div", { class: "text-white grid justify-center ml-2 text-xs lg:text-base" }, [
                  createVNode("h3", { class: "translate-y-7" }, [
                    createVNode("p", null, toDisplayString(_ctx.$t("page.account.title1")), 1),
                    createVNode("p", null, toDisplayString(_ctx.$t("page.account.title2")), 1)
                  ])
                ]),
                createVNode("div", { class: "flex justify-end" }, [
                  createVNode(_component_gadget_image_blur, null, {
                    default: withCtx(() => [
                      createVNode("img", {
                        src: _imports_0,
                        class: "object-cover object-center h-26 w-auto z-30",
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
      _push(`</section><section class="mt-7" data-v-fc73086c><div class="cards" data-v-fc73086c><!--[-->`);
      ssrRenderList(unref(bankStore).accounts, (account) => {
        _push(ssrRenderComponent(_component_card_visa, {
          key: account.uuid,
          account
        }, null, _parent));
      });
      _push(`<!--]--></div></section></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/accounts.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const accounts = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-fc73086c"]]);

export { accounts as default };
//# sourceMappingURL=accounts-G_mSZtNC.mjs.map
