import { _ as __nuxt_component_0 } from './AuthNav-eN4PH_ZJ.mjs';
import { _ as __nuxt_component_0$2 } from './nuxt-link-CznM7n7l.mjs';
import { defineComponent, mergeProps, unref, computed, withCtx, createVNode, resolveDynamicComponent, openBlock, createBlock, toDisplayString, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate, ssrRenderVNode } from 'vue/server-renderer';
import { n as navLinkRegistry } from './navlink-CM_94z47.mjs';
import { a as __nuxt_component_0$1 } from './server.mjs';
import { u as useAuthStore } from './auth-uLpXCxdh.mjs';
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

const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "ProfileNavLink",
  __ssrInlineRender: true,
  props: {
    to: {},
    label: {},
    icon: {}
  },
  setup(__props) {
    const routeName = computed(() => __props.to.replaceAll("/", "-"));
    const registry = navLinkRegistry();
    const iconComponent = computed(() => registry[__props.icon]);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_nuxt_link = __nuxt_component_0$2;
      _push(ssrRenderComponent(_component_nuxt_link, mergeProps({
        to: `/${__props.to}`,
        class: [
          "flex items-center space-x-1 group  cursor-pointer py-1 px-5 rounded ",
          {
            "bg-sidebar-active-text text-white": _ctx.$route.name === unref(routeName),
            "hover:bg-sidebar-active-text hover:text-white": _ctx.$route.name !== unref(routeName)
          }
        ]
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            ssrRenderVNode(_push2, createVNode(resolveDynamicComponent(unref(iconComponent)), {
              class: "group-hover:fill-white",
              active: _ctx.$route.name === unref(routeName)
            }, null), _parent2, _scopeId);
            _push2(`<p class="text-xs"${_scopeId}>${ssrInterpolate(__props.label)}</p>`);
          } else {
            return [
              (openBlock(), createBlock(resolveDynamicComponent(unref(iconComponent)), {
                class: "group-hover:fill-white",
                active: _ctx.$route.name === unref(routeName)
              }, null, 8, ["active"])),
              createVNode("p", { class: "text-xs" }, toDisplayString(__props.label), 1)
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Navbar/ProfileNavLink.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_1 = Object.assign(_sfc_main$1, { __name: "NavbarProfileNavLink" });
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "profile",
  __ssrInlineRender: true,
  setup(__props) {
    const auth = useAuthStore();
    return (_ctx, _push, _parent, _attrs) => {
      const _component_navbar_auth_nav = __nuxt_component_0;
      const _component_navbar_profile_nav_link = __nuxt_component_1;
      const _component_NuxtPage = __nuxt_component_0$1;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "text-text-primary" }, _attrs))}>`);
      _push(ssrRenderComponent(_component_navbar_auth_nav, {
        title: _ctx.$t("menu.profile")
      }, null, _parent));
      _push(`<section class="mt-5 flex flex-row space-x-4"><div class="w-44"><div class="h-[calc(100dvh-10rem)] bg-bg-secondary rounded-md border border-border-main" aria-label="User profile menu"><div class="text-center pt-5 pb-3 mx-3 space-y-4 border-b border-border-main"><button type="button" class="rounded-full size-14 text-2xl border border-border-main bg-accent text-white">${ssrInterpolate(unref(auth).state?.firstName?.charAt(0))}</button><p class="text-xs">${ssrInterpolate(unref(auth).state?.firstName)} ${ssrInterpolate(unref(auth).state?.lastName)}</p></div><ul class="flex flex-col justify-center mt-3 px-2 space-y-1.5">`);
      _push(ssrRenderComponent(_component_navbar_profile_nav_link, {
        to: "user/profile/infos",
        label: _ctx.$t("page.profile.menu.infos"),
        icon: "infos"
      }, null, _parent));
      _push(ssrRenderComponent(_component_navbar_profile_nav_link, {
        to: "user/profile/collaborators",
        label: _ctx.$t("page.profile.menu.users"),
        icon: "users"
      }, null, _parent));
      _push(`</ul></div></div><div class="grow">`);
      _push(ssrRenderComponent(_component_NuxtPage, {
        "page-key": (route) => route.fullPath
      }, null, _parent));
      _push(`</div></section></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/user/profile.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=profile-CUxF3t23.mjs.map
