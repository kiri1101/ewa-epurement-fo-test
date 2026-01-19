import { defineComponent, mergeProps, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrInterpolate, ssrRenderComponent } from 'vue/server-renderer';
import script from './index-BxTKnz5t.mjs';
import { _ as _export_sfc } from './server.mjs';

const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "ErrorMsg",
  __ssrInlineRender: true,
  props: {
    label: {}
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<p${ssrRenderAttrs(mergeProps({ class: "text-xs font-semibold transition duration-200 ease-linear text-validation-error leading-3.5" }, _attrs))}>${ssrInterpolate(__props.label)}</p>`);
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Input/ErrorMsg.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_9 = Object.assign(_sfc_main$1, { __name: "InputErrorMsg" });
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
        class: "w-full h-9 focus:border-auth-input-border-focus placeholder-input-placeholder focus:outline-none focus:ring-2 focus:ring-auth-input-ring peer"
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
        pt
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
const __nuxt_component_10 = /* @__PURE__ */ Object.assign(_export_sfc(_sfc_main, [["__scopeId", "data-v-19274906"]]), { __name: "InputSelect" });

export { __nuxt_component_9 as _, __nuxt_component_10 as a };
//# sourceMappingURL=Select-Bt6M__ww.mjs.map
