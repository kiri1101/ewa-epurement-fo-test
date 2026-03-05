import script from './index-DeQNdLHz.mjs';
import { defineComponent, mergeProps, useSSRContext } from 'vue';
import { ssrRenderComponent } from 'vue/server-renderer';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "Select",
  __ssrInlineRender: true,
  props: {
    placeholder: { default: "" },
    nameKey: { default: "name" },
    valueKey: { default: "value" }
  },
  setup(__props) {
    const pt = {
      root: {
        class: "w-full h-9 placeholder-text-muted focus:outline-none focus:ring-2 peer"
      },
      label: {
        style: "font-size: 0.875rem; line-height: 1.25rem;"
      },
      optionLabel: {
        style: "font-size: 0.875rem; line-height: 1.25rem;"
      }
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Select = script;
      _push(ssrRenderComponent(_component_Select, mergeProps({
        "option-label": __props.nameKey,
        "option-value": __props.valueKey,
        placeholder: __props.placeholder,
        pt,
        filter: ""
      }, _attrs), null, _parent));
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Input/Select.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __nuxt_component_9 = Object.assign(_sfc_main, { __name: "InputSelect" });

export { __nuxt_component_9 as _ };
//# sourceMappingURL=Select-BMmHRGTZ.mjs.map
