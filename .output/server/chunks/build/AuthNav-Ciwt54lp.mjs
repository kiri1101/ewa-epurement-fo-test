import { defineComponent, mergeProps, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderSlot, ssrInterpolate } from 'vue/server-renderer';

const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "PageTitle",
  __ssrInlineRender: true,
  props: {
    label: {}
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<h3${ssrRenderAttrs(mergeProps({ class: "text-page-title-text font-bold" }, _attrs))}>${ssrInterpolate(__props.label)}</h3>`);
    };
  }
});
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Gadget/PageTitle.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const __nuxt_component_0$1 = Object.assign(_sfc_main$2, { __name: "GadgetPageTitle" });
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "Icon",
  __ssrInlineRender: true,
  props: {
    icon: {},
    background: { default: "bg-button-main hover:bg-button-main-hover" }
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<i${ssrRenderAttrs(mergeProps({
        class: [
          "p-1.5 rounded cursor-pointer text-button-main-label hover:text-button-main-hover-label",
          __props.background,
          __props.icon
        ],
        style: { "font-size": "0.9rem" }
      }, _attrs))}></i>`);
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Button/Icon.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_7 = Object.assign(_sfc_main$1, { __name: "ButtonIcon" });
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "AuthNav",
  __ssrInlineRender: true,
  props: {
    title: {}
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_gadget_page_title = __nuxt_component_0$1;
      const _component_button_icon = __nuxt_component_7;
      _push(`<nav${ssrRenderAttrs(mergeProps({
        class: "py-5 px-2 border-b-[1.5px] border-dashboard-nav grid grid-cols-2 items-center w-full",
        "aria-label": "Dashboard navigation bar"
      }, _attrs))}>`);
      _push(ssrRenderComponent(_component_gadget_page_title, { label: __props.title }, null, _parent));
      _push(`<div class="flex items-center justify-end space-x-2">`);
      ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
      _push(ssrRenderComponent(_component_button_icon, { icon: "pi pi-bell" }, null, _parent));
      _push(`<span class="rounded-full bg-button-dashboard-profile hover:bg-button-dashboard-profile/85 text-button-main-label text-xs p-1.5 cursor-pointer"> NC </span></div></nav>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Navbar/AuthNav.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __nuxt_component_0 = Object.assign(_sfc_main, { __name: "NavbarAuthNav" });

export { __nuxt_component_0 as _, __nuxt_component_7 as a };
//# sourceMappingURL=AuthNav-Ciwt54lp.mjs.map
