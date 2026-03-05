import { mergeProps, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderStyle, ssrInterpolate } from 'vue/server-renderer';
import { _ as _export_sfc } from './server.mjs';

const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "grid items-center h-64 border-2 border-dashed border-gray-100 text-text-secondary text-center rounded-lg" }, _attrs))}><p class="flex flex-col space-y-1"><i class="pi pi-inbox" style="${ssrRenderStyle({ "font-size": "2rem" })}"></i><span class="font-semibold">${ssrInterpolate(_ctx.$t("table.empty"))}</span></p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Gadget/NoData.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __nuxt_component_4 = /* @__PURE__ */ Object.assign(_export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]), { __name: "GadgetNoData" });

export { __nuxt_component_4 as _ };
//# sourceMappingURL=NoData-a0CZY--V.mjs.map
