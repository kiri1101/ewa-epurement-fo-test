import script from './index-DZx4fgBN.mjs';
import { defineComponent, ref, computed, unref, withCtx, createVNode, openBlock, createBlock, Fragment, renderList, withModifiers, toDisplayString, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrInterpolate, ssrRenderStyle, ssrRenderComponent, ssrRenderList } from 'vue/server-renderer';
import { b as useI18n } from './server.mjs';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "Translate",
  __ssrInlineRender: true,
  setup(__props) {
    const { locale, locales, setLocale } = useI18n();
    const translate = ref();
    const pt = {
      root: "",
      content: "rounded-md w-44"
    };
    const availableLocales = computed(() => {
      return locales.value.filter((i) => i.code !== locale.value);
    });
    const chosenLocale = computed(
      () => locales.value.find((i) => i.code === locale.value)
    );
    const switchLang = (locale2) => setLocale(locale2);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Popover = script;
      _push(`<div${ssrRenderAttrs(_attrs)}><button type="button" class="text-sm border px-3 py-1 rounded bg-bg-main text-text-primary border-border-main cursor-pointer hover:shadow shadow-gray-300 transition duration-200 ease-linear flex items-center gap-1.5"><span>${ssrInterpolate(unref(chosenLocale)?.name)}</span><i class="pi pi-angle-down" style="${ssrRenderStyle({ "font-size": "0.9rem" })}"></i></button>`);
      _push(ssrRenderComponent(_component_Popover, {
        ref_key: "translate",
        ref: translate,
        pt
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<ul class="flex"${_scopeId}><!--[-->`);
            ssrRenderList(unref(availableLocales), (locale2) => {
              _push2(`<li class="grow w-full rounded hover:bg-accent hover:text-white px-3 py-1 cursor-pointer"${_scopeId}>${ssrInterpolate(locale2.name)}</li>`);
            });
            _push2(`<!--]--></ul>`);
          } else {
            return [
              createVNode("ul", { class: "flex" }, [
                (openBlock(true), createBlock(Fragment, null, renderList(unref(availableLocales), (locale2) => {
                  return openBlock(), createBlock("li", {
                    key: locale2.code,
                    class: "grow w-full rounded hover:bg-accent hover:text-white px-3 py-1 cursor-pointer",
                    onClick: withModifiers(($event) => switchLang(locale2.code), ["prevent"])
                  }, toDisplayString(locale2.name), 9, ["onClick"]);
                }), 128))
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Gadget/Translate.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __nuxt_component_1 = Object.assign(_sfc_main, { __name: "GadgetTranslate" });

export { __nuxt_component_1 as _ };
//# sourceMappingURL=Translate-C_X9iIzf.mjs.map
