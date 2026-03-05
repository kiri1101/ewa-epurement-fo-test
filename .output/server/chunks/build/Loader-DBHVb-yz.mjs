import { defineComponent, mergeProps, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderAttr } from 'vue/server-renderer';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "Loader",
  __ssrInlineRender: true,
  props: {
    width: { default: "h-5" },
    height: { default: "h-5" },
    fill: { default: "#00A651" }
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<svg${ssrRenderAttrs(mergeProps({
        viewBox: "0 0 24 24",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        class: ["animate-spin", [__props.width, __props.height]]
      }, _attrs))}><path d="M12 21a9 9 0 1 1 6.18-15.55.75.75 0 0 1 0 1.06.74.74 0 0 1-1.06 0A7.51 7.51 0 1 0 19.5 12a.75.75 0 1 1 1.5 0 9 9 0 0 1-9 9"${ssrRenderAttr("fill", __props.fill)}></path></svg>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Svg/Loader.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __nuxt_component_11 = Object.assign(_sfc_main, { __name: "SvgLoader" });

export { __nuxt_component_11 as _ };
//# sourceMappingURL=Loader-DBHVb-yz.mjs.map
