import script from './index-BOZ42SUD.mjs';
import { defineComponent, mergeProps, useSSRContext } from 'vue';
import { ssrRenderComponent } from 'vue/server-renderer';
import { _ as _export_sfc } from './server.mjs';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "BgNormal",
  __ssrInlineRender: true,
  props: {
    identifier: {},
    placeholder: { default: "" },
    type: { default: "text" }
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
        type: __props.type,
        pt,
        placeholder: __props.placeholder,
        autocomplete: "off"
      }, _attrs), null, _parent));
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Input/BgNormal.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __nuxt_component_8 = /* @__PURE__ */ Object.assign(_export_sfc(_sfc_main, [["__scopeId", "data-v-85399106"]]), { __name: "InputBgNormal" });

export { __nuxt_component_8 as _ };
//# sourceMappingURL=BgNormal-CJc5HbqV.mjs.map
