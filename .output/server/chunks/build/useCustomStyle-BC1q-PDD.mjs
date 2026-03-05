import script from './index-UOnup3Dx.mjs';
import { defineComponent, mergeProps, useSSRContext } from 'vue';
import { ssrRenderComponent } from 'vue/server-renderer';
import { c as useNuxtApp, b as useI18n, _ as _export_sfc, d as useRuntimeConfig } from './server.mjs';
import { u as useLoadingStore } from './loading-DepoijyK.mjs';
import { h as handleApiError } from './api.errors-BfPdMj8S.mjs';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "DatePicker",
  __ssrInlineRender: true,
  props: {
    placeholder: { default: "" }
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_DatePicker = script;
      _push(ssrRenderComponent(_component_DatePicker, mergeProps({
        "input-class": "h-9 px-4 py-2 w-full bg-bg-main shadow border border-primary-light text-text-primary peer",
        "input-style": {
          "font-size": "0.875rem",
          "line-height": "1.25rem",
          "background-color": "var(--color-bg-main) !important",
          "border-color": "var(--color-primary-light) !important",
          "&:focus": {
            "background-color": "var(--color-bg-secondary) !important;",
            "border-color": "var(--color-primary-light) !important;",
            "box-shadow": "0 0 0 0.2rem var(--color-ring-focus) !important",
            color: "var(--color-text-primary) !important"
          }
        },
        placeholder: __props.placeholder
      }, _attrs), null, _parent));
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Input/DatePicker.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __nuxt_component_7 = /* @__PURE__ */ Object.assign(_export_sfc(_sfc_main, [["__scopeId", "data-v-2b491233"]]), { __name: "InputDatePicker" });
const useCurrency = () => {
  const { $apiFetch } = useNuxtApp();
  const config = useRuntimeConfig();
  const { locale } = useI18n();
  const store = useLoadingStore();
  const getCurrencyList = async () => {
    let output = {
      validationErr: [],
      response: [],
      error: ""
    };
    store.showCurrencyLoader();
    try {
      const { apiResponse, validError } = await $apiFetch(
        config.public.api.setting.currency,
        {
          method: "POST",
          body: {
            lang: locale.value
          }
        }
      );
      if (validError) {
        output.validationErr = validError;
      }
      output.response = apiResponse;
    } catch (error) {
      const errorMsg = handleApiError(error);
      if (errorMsg.length > 0) {
        output.error = errorMsg;
      }
    } finally {
      store.hideCurrencyLoader();
    }
    return output;
  };
  const getRatesList = async () => {
    let output = {
      validationErr: [],
      response: [],
      error: ""
    };
    store.showRateLoader();
    try {
      const { apiResponse, validError } = await $apiFetch(
        config.public.api.setting.rates,
        {
          method: "POST",
          body: {
            lang: locale.value
          }
        }
      );
      if (validError) {
        output.validationErr = validError;
      }
      output.response = apiResponse;
    } catch (error) {
      const errorMsg = handleApiError(error);
      if (errorMsg.length > 0) {
        output.error = errorMsg;
      }
    } finally {
      store.hideRateLoader();
    }
    return output;
  };
  return {
    getCurrencyList,
    getRatesList
  };
};
const useCustomStyle = () => {
  const selectInputPt = {
    root: {
      class: "w-full h-9 placeholder-text-muted focus:outline-none focus:ring-2 peer"
    },
    label: {
      style: "font-size: 0.875rem; line-height: 1.25rem;"
    },
    optionLabel: {
      style: "font-size: 0.875rem; line-height: 1.25rem;"
    }
  };
  const buttonPt = {
    root: {
      class: "w-full font-semibold h-8 xl:h-9 rounded-md focus:outline-none focus:ring-2 focus:ring-ring-focus"
    },
    label: {
      class: "text-xs xl:text-sm text-nowrap"
    }
  };
  return {
    selectInputPt,
    buttonPt
  };
};

export { __nuxt_component_7 as _, useCustomStyle as a, useCurrency as u };
//# sourceMappingURL=useCustomStyle-BC1q-PDD.mjs.map
