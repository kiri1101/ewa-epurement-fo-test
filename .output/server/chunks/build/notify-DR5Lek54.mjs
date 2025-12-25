import script from './index-kp6_zy_p.mjs';
import { mergeProps, useSSRContext } from 'vue';
import { ssrRenderComponent } from 'vue/server-renderer';
import { _ as _export_sfc, i as useToast, e as useRuntimeConfig } from './server.mjs';

const _sfc_main = {
  __name: "ButtonPrimary",
  __ssrInlineRender: true,
  setup(__props) {
    const pt = {
      root: {
        class: "w-full font-semibold h-9 rounded-md hover:bg-primary-hover focus:outline-none focus:ring-2 focus:ring-primary-ring"
      },
      label: {
        class: "text-sm text-button-main-label hover:text-button-main-hover-label"
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Button/Primary.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __nuxt_component_1 = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-b55168b0"]]);
const useNotify = () => {
  const toast = useToast();
  const config = useRuntimeConfig();
  const s = (message, title = "Success") => toast.add({
    severity: "success",
    summary: title,
    detail: message,
    life: parseInt(config.public.app.toastLife)
  });
  const e = (message, title = "Error") => toast.add({
    severity: "error",
    summary: title,
    detail: message,
    life: parseInt(config.public.app.toastLife)
  });
  const i = (message, title = "Info") => toast.add({
    severity: "info",
    summary: title,
    detail: message,
    life: parseInt(config.public.app.toastLife)
  });
  const w = (message, title = "Warning") => toast.add({
    severity: "warn",
    summary: title,
    detail: message,
    life: parseInt(config.public.app.toastLife)
  });
  return { s, e, i, w };
};

export { __nuxt_component_1 as _, useNotify as u };
//# sourceMappingURL=notify-DR5Lek54.mjs.map
