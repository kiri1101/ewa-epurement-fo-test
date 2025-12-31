import { _ as __nuxt_component_0 } from './AuthNav-CN5sGpg2.mjs';
import { _ as __nuxt_component_7 } from './Primary-GSdyTMtL.mjs';
import { _ as __nuxt_component_2 } from './Outline-DXMI3Xfg.mjs';
import { _ as __nuxt_component_3, a as __nuxt_component_4 } from './ImageBlur-QX4hZV8L.mjs';
import script from './index-BJEB6ErB.mjs';
import { defineComponent, ref, withCtx, createVNode, unref, createTextVNode, toDisplayString, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderAttr, ssrInterpolate } from 'vue/server-renderer';
import { _ as _export_sfc, d as useI18n, a as useAssetStore, u as useHead, e as useRuntimeConfig } from './server.mjs';
import { u as useAuthStore } from './auth-D4AyDg5h.mjs';
import './index-0sFHYNVU.mjs';
import '@primeuix/utils';
import '@primeuix/utils/object';
import './index-CDGxmnMC.mjs';
import './index-gCQLKvjl.mjs';
import '@primeuix/styles/badge';
import '@primeuix/styles/button';
import '@primeuix/styles/skeleton';
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

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "dashboard",
  __ssrInlineRender: true,
  setup(__props) {
    const config = useRuntimeConfig();
    const { t } = useI18n();
    const assetStore = useAssetStore();
    const auth = useAuthStore();
    const showLoader = ref({
      banner: false
    });
    useHead({
      title: `${t("meta.title.dashboard")} - ${config.public.app.name}`,
      meta: [{ name: "description", content: "My design project application." }]
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_navbar_auth_nav = __nuxt_component_0;
      const _component_button_primary = __nuxt_component_7;
      const _component_button_outline = __nuxt_component_2;
      const _component_gadget_banner = __nuxt_component_3;
      const _component_gadget_image_blur = __nuxt_component_4;
      const _component_skeleton = script;
      _push(`<div${ssrRenderAttrs(_attrs)} data-v-66c9215f>`);
      _push(ssrRenderComponent(_component_navbar_auth_nav, {
        title: _ctx.$t("menu.dashboard")
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_button_primary, {
              label: "New transfer",
              icon: "pi pi-plus-circle"
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_button_outline, { label: "Simulator" }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_button_primary, {
                label: "New transfer",
                icon: "pi pi-plus-circle"
              }),
              createVNode(_component_button_outline, { label: "Simulator" })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<section class="mt-3" aria-label="Dashboard banner component" data-v-66c9215f>`);
      _push(ssrRenderComponent(_component_gadget_banner, null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<img${ssrRenderAttr("src", unref(assetStore).list.spline)} class="object-cover object-center w-28 right-0 top-0 absolute" alt="Spline" data-v-66c9215f${_scopeId}><div class="grid grid-cols-2 h-full" data-v-66c9215f${_scopeId}><div class="text-sidebar-text-primary grid justify-center ml-2 text-sm lg:text-base" data-v-66c9215f${_scopeId}><h3 class="translate-y-7" data-v-66c9215f${_scopeId}><p data-v-66c9215f${_scopeId}> Welcome, <span class="font-bold ml-1" data-v-66c9215f${_scopeId}>${ssrInterpolate(unref(auth).state?.firstName)}! </span></p><p data-v-66c9215f${_scopeId}>Manage your international transfers with ease</p></h3></div><div class="flex justify-end" data-v-66c9215f${_scopeId}>`);
            _push2(ssrRenderComponent(_component_gadget_image_blur, null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<img${ssrRenderAttr("src", unref(assetStore).list.bank)} class="object-cover object-center size-24 rounded-3xl z-30" alt="Bank Logo" data-v-66c9215f${_scopeId2}>`);
                } else {
                  return [
                    createVNode("img", {
                      src: unref(assetStore).list.bank,
                      class: "object-cover object-center size-24 rounded-3xl z-30",
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
              createVNode("img", {
                src: unref(assetStore).list.spline,
                class: "object-cover object-center w-28 right-0 top-0 absolute",
                alt: "Spline"
              }, null, 8, ["src"]),
              createVNode("div", { class: "grid grid-cols-2 h-full" }, [
                createVNode("div", { class: "text-sidebar-text-primary grid justify-center ml-2 text-sm lg:text-base" }, [
                  createVNode("h3", { class: "translate-y-7" }, [
                    createVNode("p", null, [
                      createTextVNode(" Welcome, "),
                      createVNode("span", { class: "font-bold ml-1" }, toDisplayString(unref(auth).state?.firstName) + "! ", 1)
                    ]),
                    createVNode("p", null, "Manage your international transfers with ease")
                  ])
                ]),
                createVNode("div", { class: "flex justify-end" }, [
                  createVNode(_component_gadget_image_blur, null, {
                    default: withCtx(() => [
                      createVNode("img", {
                        src: unref(assetStore).list.bank,
                        class: "object-cover object-center size-24 rounded-3xl z-30",
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
      _push(`</section><section class="mt-7" data-v-66c9215f><ul class="grid grid-cols-2 lg:grid-cols-4 gap-3" data-v-66c9215f><li class="flex justify-between bg-stat-total-demand py-1.5 px-3 rounded-lg" data-v-66c9215f><div class="self-center" data-v-66c9215f>`);
      if (unref(showLoader).banner) {
        _push(`<img${ssrRenderAttr("src", unref(assetStore).list.stats_file)} class="object-cover object-center size-14" alt="File Stats Logo" data-v-66c9215f>`);
      } else {
        _push(ssrRenderComponent(_component_skeleton, {
          width: "4rem",
          height: "4rem"
        }, null, _parent));
      }
      _push(`</div><div class="text-right" data-v-66c9215f><div class="justify-self-end" data-v-66c9215f>`);
      if (unref(showLoader).banner) {
        _push(`<img${ssrRenderAttr("src", unref(assetStore).list.stat_arrow_up)} class="object-cover object-center size-7" alt="File Stats Logo" data-v-66c9215f>`);
      } else {
        _push(ssrRenderComponent(_component_skeleton, {
          width: "1.75rem",
          height: "1.75rem"
        }, null, _parent));
      }
      _push(`</div><h3 class="text-xs xl:text-sm font-medium" data-v-66c9215f> Total <span class="font-bold" data-v-66c9215f>requests</span></h3><h2 class="text-2xl xl:text-3xl font-semibold" data-v-66c9215f>20</h2></div></li><li class="flex justify-between bg-stat-pending-demand py-1.5 px-3 rounded-lg" data-v-66c9215f><div class="self-center" data-v-66c9215f>`);
      if (unref(showLoader).banner) {
        _push(`<img${ssrRenderAttr("src", unref(assetStore).list.stats_pending)} class="object-cover object-center size-14" alt="File Stats Logo" data-v-66c9215f>`);
      } else {
        _push(ssrRenderComponent(_component_skeleton, {
          width: "4rem",
          height: "4rem"
        }, null, _parent));
      }
      _push(`</div><div class="text-right" data-v-66c9215f><div class="justify-self-end" data-v-66c9215f>`);
      if (unref(showLoader).banner) {
        _push(`<img${ssrRenderAttr("src", unref(assetStore).list.stat_arrow_up)} class="object-cover object-center size-7" alt="File Stats Logo" data-v-66c9215f>`);
      } else {
        _push(ssrRenderComponent(_component_skeleton, {
          width: "1.75rem",
          height: "1.75rem"
        }, null, _parent));
      }
      _push(`</div><h3 class="text-xs xl:text-sm font-medium" data-v-66c9215f> Pending <span class="font-bold" data-v-66c9215f>requests</span></h3><h2 class="text-2xl xl:text-3xl font-semibold" data-v-66c9215f>20</h2></div></li><li class="flex justify-between bg-stat-closed-demand py-1.5 px-3 rounded-lg" data-v-66c9215f><div class="self-center" data-v-66c9215f>`);
      if (unref(showLoader).banner) {
        _push(`<img${ssrRenderAttr("src", unref(assetStore).list.stats_closed)} class="object-cover object-center size-14" alt="File Stats Logo" data-v-66c9215f>`);
      } else {
        _push(ssrRenderComponent(_component_skeleton, {
          width: "4rem",
          height: "4rem"
        }, null, _parent));
      }
      _push(`</div><div class="text-right" data-v-66c9215f><div class="justify-self-end" data-v-66c9215f>`);
      if (unref(showLoader).banner) {
        _push(`<img${ssrRenderAttr("src", unref(assetStore).list.stat_arrow_up)} class="object-cover object-center size-7" alt="File Stats Logo" data-v-66c9215f>`);
      } else {
        _push(ssrRenderComponent(_component_skeleton, {
          width: "1.75rem",
          height: "1.75rem"
        }, null, _parent));
      }
      _push(`</div><h3 class="text-xs xl:text-sm font-medium" data-v-66c9215f> CLosed <span class="font-bold" data-v-66c9215f>requests</span></h3><h2 class="text-2xl xl:text-3xl font-semibold" data-v-66c9215f>20</h2></div></li><li class="flex justify-between bg-stat-required-action py-1.5 px-3 rounded-lg" data-v-66c9215f><div class="self-center" data-v-66c9215f>`);
      if (unref(showLoader).banner) {
        _push(`<img${ssrRenderAttr("src", unref(assetStore).list.stats_action_req)} class="object-cover object-center size-14" alt="File Stats Logo" data-v-66c9215f>`);
      } else {
        _push(ssrRenderComponent(_component_skeleton, {
          width: "4rem",
          height: "4rem"
        }, null, _parent));
      }
      _push(`</div><div class="text-right" data-v-66c9215f><div class="justify-self-end" data-v-66c9215f>`);
      if (unref(showLoader).banner) {
        _push(`<img${ssrRenderAttr("src", unref(assetStore).list.stat_arrow_up)} class="object-cover object-center size-7" alt="File Stats Logo" data-v-66c9215f>`);
      } else {
        _push(ssrRenderComponent(_component_skeleton, {
          width: "1.75rem",
          height: "1.75rem"
        }, null, _parent));
      }
      _push(`</div><h3 class="text-xs xl:text-sm font-medium" data-v-66c9215f> Action <span class="font-bold" data-v-66c9215f>required</span></h3><h2 class="text-2xl xl:text-3xl font-semibold" data-v-66c9215f>20</h2></div></li></ul></section></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/dashboard.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const dashboard = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-66c9215f"]]);

export { dashboard as default };
//# sourceMappingURL=dashboard-DFTOpBNU.mjs.map
