import script from './index-DhmvckXO.mjs';
import { defineComponent, mergeProps, useSSRContext } from 'vue';
import { ssrRenderComponent } from 'vue/server-renderer';
import { _ as _export_sfc } from './server.mjs';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "BgTransparent",
  __ssrInlineRender: true,
  props: {
    identifier: {},
    type: { default: "text" },
    placeholder: { default: "" }
  },
  setup(__props) {
    const pt = {
      root: {
        class: "w-full px-4 py-2 rounded-md h-9 placeholder-text-muted focus:outline-none peer",
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Input/BgTransparent.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __nuxt_component_2 = /* @__PURE__ */ Object.assign(_export_sfc(_sfc_main, [["__scopeId", "data-v-f0d4dbc8"]]), { __name: "InputBgTransparent" });

export { __nuxt_component_2 as _ };
//# sourceMappingURL=BgTransparent-fWtIQY8n.mjs.map
