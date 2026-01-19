import script from './index-BOZ42SUD.mjs';
import { defineComponent, mergeProps, useSSRContext } from 'vue';
import { ssrRenderComponent } from 'vue/server-renderer';
import { _ as _export_sfc } from './server.mjs';
import script$1 from './index-C3Mb_0hb.mjs';

const handleApiError = (error) => {
  let output = "";
  if (error && typeof error === "object" && "status" in error) {
    const err = error;
    output = err.data?.statusMessage || err.statusText;
  }
  return output;
};
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "Search",
  __ssrInlineRender: true,
  props: {
    identifier: {},
    placeholder: { default: "" }
  },
  setup(__props) {
    const pt = {
      root: {
        class: "w-full px-4 py-2 h-9 focus:border-auth-input-border-focus placeholder-input-placeholder focus:outline-none focus:ring-2 focus:ring-auth-input-ring peer",
        style: "font-size: 0.875rem; line-height: 1.25rem;"
      }
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_InputText = script;
      _push(ssrRenderComponent(_component_InputText, mergeProps({
        id: __props.identifier,
        name: __props.identifier,
        type: "text",
        pt,
        placeholder: __props.placeholder,
        autocomplete: "off"
      }, _attrs), null, _parent));
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Input/Search.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_4 = /* @__PURE__ */ Object.assign(_export_sfc(_sfc_main$1, [["__scopeId", "data-v-b5420456"]]), { __name: "InputSearch" });
const _sfc_main = {
  __name: "ButtonOutline",
  __ssrInlineRender: true,
  setup(__props) {
    const pt = {
      root: {
        class: "w-full font-semibold h-8 xl:h-9 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-ring"
      },
      label: {
        class: "text-xs xl:text-sm text-button-outline-label hover:text-button-outline-hover-label"
      }
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Button = script$1;
      _push(ssrRenderComponent(_component_Button, mergeProps({ pt }, _attrs), null, _parent));
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Button/Outline.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __nuxt_component_12 = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-62ffb3e2"]]);

export { __nuxt_component_4 as _, __nuxt_component_12 as a, handleApiError as h };
//# sourceMappingURL=Outline-DVYwbq83.mjs.map
