import { defineComponent, mergeProps, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderStyle, ssrRenderSlot } from 'vue/server-renderer';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "ActiveSkeleton",
  __ssrInlineRender: true,
  props: {
    cardStyles: {},
    reverseGradient: { type: Boolean, default: false }
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({
        class: [
          "from-card-from to-card-to rounded-lg border border-card-border shadow shadow-gray-500",
          __props.reverseGradient ? "bg-linear-to-t" : "bg-linear-to-b"
        ]
      }, _attrs))}><div class="px-3 py-3.5 bg-no-repeat bg-position-[top_-1.5rem_right_-1.5rem] bg-contain text-xs" style="${ssrRenderStyle(__props.cardStyles)}">`);
      ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
      _push(`</div></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Card/ActiveSkeleton.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __nuxt_component_5 = Object.assign(_sfc_main, { __name: "CardActiveSkeleton" });

export { __nuxt_component_5 as _ };
//# sourceMappingURL=ActiveSkeleton-CMu-Z4r8.mjs.map
