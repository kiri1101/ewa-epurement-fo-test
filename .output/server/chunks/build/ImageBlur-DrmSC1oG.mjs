import script from './index-BU8y9jdz.mjs';
import { defineComponent, ref, computed, unref, mergeProps, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderStyle, ssrRenderSlot, ssrRenderComponent } from 'vue/server-renderer';
import { _ as _export_sfc, b as useAssetStore } from './server.mjs';

const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "Banner",
  __ssrInlineRender: true,
  setup(__props) {
    const assetStore = useAssetStore();
    const showBanner = ref(false);
    const bannerStyles = computed(() => ({
      backgroundImage: showBanner.value ? `url(${assetStore.list.banner_bg})` : `url('')`
    }));
    return (_ctx, _push, _parent, _attrs) => {
      const _component_skeleton = script;
      _push(`<div${ssrRenderAttrs(_attrs)}>`);
      if (unref(showBanner)) {
        _push(`<div class="bg-sidebar-menu rounded-md overflow-clip"><div class="relative bg-contain bg-no-repeat bg-left h-28 w-full" style="${ssrRenderStyle(unref(bannerStyles))}">`);
        ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
        _push(`</div></div>`);
      } else {
        _push(ssrRenderComponent(_component_skeleton, {
          width: "100%",
          height: "7rem"
        }, null, _parent));
      }
      _push(`</div>`);
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Gadget/Banner.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_2 = Object.assign(_sfc_main$1, { __name: "GadgetBanner" });
const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "relative" }, _attrs))}><div class="bg-radial from-white to-transparent size-38 blur-xl rounded-full opacity-40 pointer-events-none -translate-y-5" aria-label="Bank Logo Shadow"></div><div class="absolute top-3 left-5.5">`);
  ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
  _push(`</div></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Gadget/ImageBlur.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __nuxt_component_3 = /* @__PURE__ */ Object.assign(_export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]), { __name: "GadgetImageBlur" });

export { __nuxt_component_2 as _, __nuxt_component_3 as a };
//# sourceMappingURL=ImageBlur-DrmSC1oG.mjs.map
