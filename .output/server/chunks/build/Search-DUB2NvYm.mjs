import script from './index-DhmvckXO.mjs';
import { defineComponent, computed, mergeProps, isRef, unref, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderStyle } from 'vue/server-renderer';
import { _ as _export_sfc } from './server.mjs';

const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "Search",
  __ssrInlineRender: true,
  props: {
    identifier: {},
    placeholder: { default: "" }
  },
  setup(__props) {
    const pt = {
      root: {
        class: "w-full px-4 py-2 h-9 placeholder-text-muted focus:outline-none focus:ring-2 peer",
        style: "font-size: 0.875rem; line-height: 1.25rem;"
      }
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_InputText = script;
      _push(ssrRenderComponent(_component_InputText, mergeProps({
        id: __props.identifier,
        name: __props.identifier,
        type: "text",
        pt,
        placeholder: __props.placeholder,
        autocomplete: "off"
      }, _attrs), null, _parent));
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Input/Search.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_0$1 = /* @__PURE__ */ Object.assign(_export_sfc(_sfc_main$1, [["__scopeId", "data-v-c7cfab2e"]]), { __name: "InputSearch" });
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "Search",
  __ssrInlineRender: true,
  props: {
    modelValue: {},
    isLoading: { type: Boolean, default: false }
  },
  emits: ["update:modelValue", "search"],
  setup(__props, { emit: __emit }) {
    const emit = __emit;
    const searchIndex = computed({
      get: () => __props.modelValue,
      set: (value) => emit("update:modelValue", value)
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_input_search = __nuxt_component_0$1;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "flex relative grow" }, _attrs))}>`);
      _push(ssrRenderComponent(_component_input_search, {
        modelValue: unref(searchIndex),
        "onUpdate:modelValue": ($event) => isRef(searchIndex) ? searchIndex.value = $event : null,
        identifier: "search",
        placeholder: _ctx.$t("placeholder.find_transfer")
      }, null, _parent));
      _push(`<div class="flex items-center space-x-1 absolute right-0 z-50 -translate-x-1 translate-y-[0.17rem]">`);
      if (__props.isLoading) {
        _push(`<i class="pi pi-spinner text-accent animate-spin"></i>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<i class="pi pi-search p-2 bg-accent hover:bg-accent-light text-white rounded-full cursor-pointer" style="${ssrRenderStyle({ "font-size": "0.9rem" })}"></i></div></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Gadget/Search.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __nuxt_component_0 = Object.assign(_sfc_main, { __name: "GadgetSearch" });

export { __nuxt_component_0 as _ };
//# sourceMappingURL=Search-DUB2NvYm.mjs.map
