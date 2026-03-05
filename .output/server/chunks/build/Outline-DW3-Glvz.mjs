import script from './index-BlaqzKyH.mjs';
import { mergeProps, useSSRContext } from 'vue';
import { ssrRenderComponent } from 'vue/server-renderer';
import { _ as _export_sfc } from './server.mjs';

const _sfc_main = {
  __name: "ButtonOutline",
  __ssrInlineRender: true,
  setup(__props) {
    const pt = {
      root: {
        class: "w-full font-semibold h-8 xl:h-9 rounded-md focus:outline-none focus:ring-2 focus:ring-accent text-accent"
      },
      label: {
        class: "text-xs xl:text-sm text-accent"
      }
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Button = script;
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
const __nuxt_component_13 = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-a1a9605c"]]);

export { __nuxt_component_13 as _ };
//# sourceMappingURL=Outline-DW3-Glvz.mjs.map
