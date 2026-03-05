import script from './index-BjkFAZaV.mjs';
import { defineComponent, mergeProps, useSSRContext } from 'vue';
import { ssrRenderComponent } from 'vue/server-renderer';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "CustomNumber",
  __ssrInlineRender: true,
  props: {
    identifier: {},
    placeholder: { default: "" }
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_InputNumber = script;
      _push(ssrRenderComponent(_component_InputNumber, mergeProps({
        id: __props.identifier,
        name: __props.identifier,
        placeholder: __props.placeholder,
        autocomplete: "off",
        minFractionDigits: 2,
        inputId: "integeronly",
        fluid: "",
        "input-class": "h-9 px-4 py-2 w-full bg-bg-main shadow border border-primary-light text-text-primary peer",
        "input-style": {
          "font-size": "0.875rem",
          "line-height": "1.25rem",
          "background-color": "var(--color-bg-main) !important",
          "border-color": "var(--color-primary-light) !important",
          color: "var(--color-text-primary) !important",
          "&:focus": {
            "background-color": "var(--color-bg-secondary) !important;",
            "border-color": "var(--color-primary-light) !important;",
            "box-shadow": "0 0 0 0.2rem var(--color-ring-focus) !important",
            color: "var(--color-text-primary) !important"
          }
        }
      }, _attrs), null, _parent));
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Input/CustomNumber.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __nuxt_component_8 = Object.assign(_sfc_main, { __name: "InputCustomNumber" });

export { __nuxt_component_8 as _ };
//# sourceMappingURL=CustomNumber-Bv6OziLi.mjs.map
