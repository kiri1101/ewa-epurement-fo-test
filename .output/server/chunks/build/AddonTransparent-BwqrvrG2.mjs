import script from './index-DnjRpD5B.mjs';
import { mergeProps, withCtx, renderSlot, useSSRContext } from 'vue';
import { ssrRenderComponent, ssrRenderSlot } from 'vue/server-renderer';
import { _ as _export_sfc } from './server.mjs';

const _sfc_main = {
  __name: "InputAddonTransparent",
  __ssrInlineRender: true,
  setup(__props) {
    const pt = {
      root: {
        class: "h-9 cursor-pointer"
      }
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_input_group_addon = script;
      _push(ssrRenderComponent(_component_input_group_addon, mergeProps({ pt }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            ssrRenderSlot(_ctx.$slots, "default", {}, null, _push2, _parent2, _scopeId);
          } else {
            return [
              renderSlot(_ctx.$slots, "default", {}, void 0, true)
            ];
          }
        }),
        _: 3
      }, _parent));
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Input/AddonTransparent.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __nuxt_component_1 = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-cf0274d1"]]);

export { __nuxt_component_1 as _ };
//# sourceMappingURL=AddonTransparent-BwqrvrG2.mjs.map
