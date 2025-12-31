import script from './index-DJWB-g9Z.mjs';
import { defineComponent, mergeProps, useSSRContext } from 'vue';
import { ssrRenderComponent } from 'vue/server-renderer';
import { _ as _export_sfc } from './server.mjs';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "Primary",
  __ssrInlineRender: true,
  setup(__props) {
    const pt = {
      root: {
        class: "w-full font-semibold h-8 xl:h-9 rounded-md hover:bg-primary-hover focus:outline-none focus:ring-2 focus:ring-primary-ring"
      },
      label: {
        class: "text-xs xl:text-sm text-button-main-label hover:text-button-main-hover-label text-nowrap"
      }
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Button = script;
      _push(ssrRenderComponent(_component_Button, mergeProps({ pt }, _attrs), null, _parent));
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Button/Primary.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __nuxt_component_7 = /* @__PURE__ */ Object.assign(_export_sfc(_sfc_main, [["__scopeId", "data-v-6f332556"]]), { __name: "ButtonPrimary" });

export { __nuxt_component_7 as _ };
//# sourceMappingURL=Primary-TsiIkHTo.mjs.map
