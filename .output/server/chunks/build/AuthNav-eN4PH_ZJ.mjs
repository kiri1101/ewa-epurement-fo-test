import { defineComponent, mergeProps, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderSlot, ssrInterpolate } from 'vue/server-renderer';
import { _ as __nuxt_component_1 } from './Translate-C_X9iIzf.mjs';

const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "PageTitle",
  __ssrInlineRender: true,
  props: {
    label: {}
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<h3${ssrRenderAttrs(mergeProps({ class: "text-text-primary font-bold" }, _attrs))}>${ssrInterpolate(__props.label)}</h3>`);
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Gadget/PageTitle.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_0$1 = Object.assign(_sfc_main$1, { __name: "GadgetPageTitle" });
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "AuthNav",
  __ssrInlineRender: true,
  props: {
    title: {}
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_gadget_page_title = __nuxt_component_0$1;
      const _component_gadget_translate = __nuxt_component_1;
      _push(`<nav${ssrRenderAttrs(mergeProps({
        class: "py-5 px-2 border-b-[1.5px] border-sidebar-bg grid grid-cols-2 items-center w-full",
        "aria-label": "Dashboard navigation bar"
      }, _attrs))}>`);
      _push(ssrRenderComponent(_component_gadget_page_title, { label: __props.title }, null, _parent));
      _push(`<div class="flex items-center justify-end space-x-2">`);
      ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
      _push(ssrRenderComponent(_component_gadget_translate, null, null, _parent));
      _push(`</div></nav>`);
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

export { __nuxt_component_0 as _ };
//# sourceMappingURL=AuthNav-eN4PH_ZJ.mjs.map
