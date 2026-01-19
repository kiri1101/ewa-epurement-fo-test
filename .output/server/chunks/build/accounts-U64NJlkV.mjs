import { _ as __nuxt_component_0 } from './AuthNav-Ciwt54lp.mjs';
import { _ as __nuxt_component_2, a as __nuxt_component_3$1 } from './ImageBlur-DrmSC1oG.mjs';
import { _ as __nuxt_component_5 } from './ActiveSkeleton-CMu-Z4r8.mjs';
import script from './index-BU8y9jdz.mjs';
import { defineComponent, ref, computed, withCtx, unref, createVNode, mergeProps, createBlock, openBlock, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderAttr, ssrRenderStyle } from 'vue/server-renderer';
import { _ as _export_sfc, a as useI18n, b as useAssetStore, u as useHead, e as useRuntimeConfig } from './server.mjs';
import '@primeuix/utils';
import '@primeuix/styles/skeleton';
import '../_/nitro.mjs';
import 'drizzle-orm';
import 'moment';
import 'drizzle-orm/sqlite-core';
import 'drizzle-orm/libsql';
import '@libsql/client';
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
import '@primeuix/utils/uuid';
import '@primeuix/utils/zindex';
import '../routes/renderer.mjs';
import 'vue-bundle-renderer/runtime';
import 'unhead/server';
import 'devalue';
import 'unhead/utils';

const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "Visa",
  __ssrInlineRender: true,
  setup(__props) {
    const assetStore = useAssetStore();
    const showLoader = ref(true);
    const cardStyles = computed(() => ({
      backgroundImage: showLoader.value ? "" : `url(${assetStore.list.account_bg})`
    }));
    return (_ctx, _push, _parent, _attrs) => {
      const _component_card_active_skeleton = __nuxt_component_5;
      const _component_skeleton = script;
      _push(ssrRenderComponent(_component_card_active_skeleton, mergeProps({ "card-styles": unref(cardStyles) }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="flex items-center justify-between"${_scopeId}><div class="flex items-center space-x-2"${_scopeId}><div${_scopeId}>`);
            if (unref(showLoader)) {
              _push2(ssrRenderComponent(_component_skeleton, {
                width: "3.5rem",
                height: "2.1rem"
              }, null, _parent2, _scopeId));
            } else {
              _push2(`<img${ssrRenderAttr("src", unref(assetStore).list.logo)} class="object-cover object-center w-14 bg-white p-2 rounded-md" alt="App Logo"${_scopeId}>`);
            }
            _push2(`</div><div${_scopeId}><h3 class="uppercase font-bold"${_scopeId}>AFG Bank</h3><h4${_scopeId}>Compte courant</h4></div></div><button type="button" class="border border-[#00741D] bg-[#DDF8E5] text-[#00741D] rounded-xl px-2.5 py-0.5"${_scopeId}> Active </button></div><div class="mt-1"${_scopeId}><ul class="flex justify-between py-3 border-b border-black/20"${_scopeId}><li${_scopeId}><h3 class="font-bold"${_scopeId}>Agence</h3><h3${_scopeId}>Agence Paris Centre</h3></li><li${_scopeId}><h3 class="font-bold"${_scopeId}>Conseiller</h3><h3${_scopeId}>Marie Martin</h3></li></ul><p class="py-1.5 border-b border-black/20 text-input-disabled-text font-semibold text-sm"${_scopeId}> FR76 1234 5678 9012 3456 7890 123 </p><div class="flex justify-between items-center pt-2.5"${_scopeId}><h3${_scopeId}>Solde disponible</h3><span class="bg-white py-0.5 px-2.5 font-bold rounded-xl"${_scopeId}> 20.000.000 XFA </span></div></div>`);
          } else {
            return [
              createVNode("div", { class: "flex items-center justify-between" }, [
                createVNode("div", { class: "flex items-center space-x-2" }, [
                  createVNode("div", null, [
                    unref(showLoader) ? (openBlock(), createBlock(_component_skeleton, {
                      key: 0,
                      width: "3.5rem",
                      height: "2.1rem"
                    })) : (openBlock(), createBlock("img", {
                      key: 1,
                      src: unref(assetStore).list.logo,
                      class: "object-cover object-center w-14 bg-white p-2 rounded-md",
                      alt: "App Logo"
                    }, null, 8, ["src"]))
                  ]),
                  createVNode("div", null, [
                    createVNode("h3", { class: "uppercase font-bold" }, "AFG Bank"),
                    createVNode("h4", null, "Compte courant")
                  ])
                ]),
                createVNode("button", {
                  type: "button",
                  class: "border border-[#00741D] bg-[#DDF8E5] text-[#00741D] rounded-xl px-2.5 py-0.5"
                }, " Active ")
              ]),
              createVNode("div", { class: "mt-1" }, [
                createVNode("ul", { class: "flex justify-between py-3 border-b border-black/20" }, [
                  createVNode("li", null, [
                    createVNode("h3", { class: "font-bold" }, "Agence"),
                    createVNode("h3", null, "Agence Paris Centre")
                  ]),
                  createVNode("li", null, [
                    createVNode("h3", { class: "font-bold" }, "Conseiller"),
                    createVNode("h3", null, "Marie Martin")
                  ])
                ]),
                createVNode("p", { class: "py-1.5 border-b border-black/20 text-input-disabled-text font-semibold text-sm" }, " FR76 1234 5678 9012 3456 7890 123 "),
                createVNode("div", { class: "flex justify-between items-center pt-2.5" }, [
                  createVNode("h3", null, "Solde disponible"),
                  createVNode("span", { class: "bg-white py-0.5 px-2.5 font-bold rounded-xl" }, " 20.000.000 XFA ")
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
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Card/Visa.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const __nuxt_component_3 = Object.assign(_sfc_main$2, { __name: "CardVisa" });
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "Disabled",
  __ssrInlineRender: true,
  setup(__props) {
    const assetStore = useAssetStore();
    const showLoader = ref(true);
    const cardStyles = computed(() => ({
      backgroundImage: showLoader.value ? "" : `url(${assetStore.list.account_bg})`
    }));
    return (_ctx, _push, _parent, _attrs) => {
      const _component_skeleton = script;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "bg-[#E9E9E9] rounded-lg border border-[#868686] shadow shadow-gray-500" }, _attrs))}><div class="p-5 bg-no-repeat bg-position-[top_-1.5rem_right_-1.5rem] bg-contain text-xs" style="${ssrRenderStyle(unref(cardStyles))}"><div class="flex items-center justify-between"><div class="flex items-center space-x-2"><div>`);
      if (unref(showLoader)) {
        _push(ssrRenderComponent(_component_skeleton, {
          width: "3.5rem",
          height: "2.1rem"
        }, null, _parent));
      } else {
        _push(`<img${ssrRenderAttr("src", unref(assetStore).list.disable_logo)} class="object-cover object-center w-14 bg-white p-2 rounded-md" alt="App Logo">`);
      }
      _push(`</div><div><h3 class="uppercase font-bold">AFG Bank</h3><h4>Compte courant</h4></div></div><button type="button" class="border border-[#797171] bg-[#fff] text-[#797171] rounded-xl px-2.5 py-0.5"> Inactive </button></div><div class="mt-1"><ul class="flex justify-between py-3 border-b border-black/20"><li><h3 class="font-bold">Agence</h3><h3>Agence Paris Centre</h3></li><li><h3 class="font-bold">Conseiller</h3><h3>Marie Martin</h3></li></ul><p class="py-1.5 border-b border-black/20 text-input-disabled-text font-semibold text-base"> FR76 1234 5678 9012 3456 7890 123 </p><div class="flex justify-between items-center pt-2.5"><h3>Solde disponible</h3><span class="bg-white py-0.5 px-2.5 font-bold rounded-xl"> 20.000.000 XFA </span></div></div></div></div>`);
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Card/Disabled.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_4 = Object.assign(_sfc_main$1, { __name: "CardDisabled" });
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "accounts",
  __ssrInlineRender: true,
  setup(__props) {
    const config = useRuntimeConfig();
    const { t } = useI18n();
    const assetStore = useAssetStore();
    const showLoader = ref(true);
    useHead({
      title: `${t("meta.title.account")} - ${config.public.app.name}`,
      meta: [{ name: "description", content: "My design project application." }]
    });
    computed(() => ({
      backgroundImage: showLoader.value ? "" : `url(${assetStore.list.account_bg})`
    }));
    return (_ctx, _push, _parent, _attrs) => {
      const _component_navbar_auth_nav = __nuxt_component_0;
      const _component_gadget_banner = __nuxt_component_2;
      const _component_gadget_image_blur = __nuxt_component_3$1;
      const _component_card_visa = __nuxt_component_3;
      const _component_card_disabled = __nuxt_component_4;
      _push(`<div${ssrRenderAttrs(_attrs)} data-v-670b009d>`);
      _push(ssrRenderComponent(_component_navbar_auth_nav, {
        title: _ctx.$t("menu.account")
      }, null, _parent));
      _push(`<section class="mt-3" data-v-670b009d>`);
      _push(ssrRenderComponent(_component_gadget_banner, null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="grid grid-cols-[auto_1fr] h-full" data-v-670b009d${_scopeId}><div class="text-sidebar-text-primary grid justify-center ml-2 text-xs lg:text-base" data-v-670b009d${_scopeId}><h3 class="translate-y-7" data-v-670b009d${_scopeId}><p data-v-670b009d${_scopeId}>Voici la liste des comptes bancaires liés à ton compte.</p><p data-v-670b009d${_scopeId}>Gérez vos comptes de débit</p></h3></div><div class="flex justify-end" data-v-670b009d${_scopeId}>`);
            _push2(ssrRenderComponent(_component_gadget_image_blur, null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<img${ssrRenderAttr("src", unref(assetStore).list.account)} class="object-cover object-center h-26 w-auto z-30" alt="Bank Logo" data-v-670b009d${_scopeId2}>`);
                } else {
                  return [
                    createVNode("img", {
                      src: unref(assetStore).list.account,
                      class: "object-cover object-center h-26 w-auto z-30",
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
                createVNode("div", { class: "text-sidebar-text-primary grid justify-center ml-2 text-xs lg:text-base" }, [
                  createVNode("h3", { class: "translate-y-7" }, [
                    createVNode("p", null, "Voici la liste des comptes bancaires liés à ton compte."),
                    createVNode("p", null, "Gérez vos comptes de débit")
                  ])
                ]),
                createVNode("div", { class: "flex justify-end" }, [
                  createVNode(_component_gadget_image_blur, null, {
                    default: withCtx(() => [
                      createVNode("img", {
                        src: unref(assetStore).list.account,
                        class: "object-cover object-center h-26 w-auto z-30",
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
      _push(`</section><section class="mt-7" data-v-670b009d><div class="cards" data-v-670b009d>`);
      _push(ssrRenderComponent(_component_card_visa, null, null, _parent));
      _push(ssrRenderComponent(_component_card_disabled, null, null, _parent));
      _push(`</div></section></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/user/accounts.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const accounts = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-670b009d"]]);

export { accounts as default };
//# sourceMappingURL=accounts-U64NJlkV.mjs.map
