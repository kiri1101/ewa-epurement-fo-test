import script from './index-BHmMo8J5.mjs';
import { defineComponent, ref, computed, mergeProps, unref, isRef, shallowRef, toValue, watch, shallowReadonly, getCurrentScope, onScopeDispose, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrInterpolate, ssrRenderComponent } from 'vue/server-renderer';
import { u as useNotify, _ as __nuxt_component_1 } from './notify-DR5Lek54.mjs';
import { c as useNuxtApp, d as useI18n, u as useHead, e as useRuntimeConfig } from './server.mjs';
import { u as useResetPwdFormStore } from './reset.pwd.form-CHIpEOgY.mjs';
import '@primeuix/utils/dom';
import './index-BPlHOqVl.mjs';
import '@primeuix/utils';
import './index-KxuA-H6z.mjs';
import './index-BTsexa2i.mjs';
import '@primeuix/styles/inputtext';
import '@primeuix/styles/inputotp';
import './index-kp6_zy_p.mjs';
import '@primeuix/utils/object';
import './index-CpDyk3Lr.mjs';
import './index-DjRzXBG3.mjs';
import '@primeuix/styles/badge';
import '@primeuix/styles/button';
import '../_/nitro.mjs';
import 'node:http';
import 'node:https';
import 'node:events';
import 'node:buffer';
import 'vue-router';
import 'node:fs';
import 'node:path';
import '@primevue/core/base/style';
import '@primevue/core/basecomponent/style';
import '@primeuix/styles/autocomplete';
import '@primeuix/styles/cascadeselect';
import '@primeuix/styles/checkbox';
import '@primeuix/styles/checkboxgroup';
import '@primeuix/styles/colorpicker';
import '@primeuix/styles/datepicker';
import '@primeuix/styles/floatlabel';
import '@primeuix/styles/iconfield';
import '@primeuix/styles/iftalabel';
import '@primeuix/styles/inputchips';
import '@primeuix/styles/inputgroup';
import '@primeuix/styles/inputnumber';
import '@primeuix/styles/knob';
import '@primeuix/styles/listbox';
import '@primeuix/styles/multiselect';
import '@primeuix/styles/password';
import '@primeuix/styles/radiobutton';
import '@primeuix/styles/radiobuttongroup';
import '@primeuix/styles/rating';
import '@primeuix/styles/select';
import '@primeuix/styles/selectbutton';
import '@primeuix/styles/slider';
import '@primeuix/styles/textarea';
import '@primeuix/styles/togglebutton';
import '@primeuix/styles/toggleswitch';
import '@primeuix/styles/treeselect';
import '@primeuix/styles/buttongroup';
import '@primeuix/styles/speeddial';
import '@primeuix/styles/splitbutton';
import '@primeuix/styles/datatable';
import '@primeuix/styles/dataview';
import '@primeuix/styles/orderlist';
import '@primeuix/styles/organizationchart';
import '@primeuix/styles/paginator';
import '@primeuix/styles/picklist';
import '@primeuix/styles/tree';
import '@primeuix/styles/treetable';
import '@primeuix/styles/timeline';
import '@primeuix/styles/virtualscroller';
import '@primeuix/styles/accordion';
import '@primeuix/styles/card';
import '@primeuix/styles/divider';
import '@primeuix/styles/fieldset';
import '@primeuix/styles/panel';
import '@primeuix/styles/scrollpanel';
import '@primeuix/styles/splitter';
import '@primeuix/styles/stepper';
import '@primeuix/styles/tabview';
import '@primeuix/styles/tabs';
import '@primeuix/styles/toolbar';
import '@primeuix/styles/confirmdialog';
import '@primeuix/styles/confirmpopup';
import '@primeuix/styles/dialog';
import '@primeuix/styles/drawer';
import '@primeuix/styles/popover';
import '@primeuix/styles/fileupload';
import '@primeuix/styles/breadcrumb';
import '@primeuix/styles/contextmenu';
import '@primeuix/styles/dock';
import '@primeuix/styles/menu';
import '@primeuix/styles/menubar';
import '@primeuix/styles/megamenu';
import '@primeuix/styles/panelmenu';
import '@primeuix/styles/steps';
import '@primeuix/styles/tabmenu';
import '@primeuix/styles/tieredmenu';
import '@primeuix/styles/message';
import '@primeuix/styles/inlinemessage';
import '@primeuix/styles/toast';
import '@primeuix/styles/carousel';
import '@primeuix/styles/galleria';
import '@primeuix/styles/image';
import '@primeuix/styles/imagecompare';
import '@primeuix/styles/avatar';
import '@primeuix/styles/blockui';
import '@primeuix/styles/chip';
import '@primeuix/styles/inplace';
import '@primeuix/styles/metergroup';
import '@primeuix/styles/overlaybadge';
import '@primeuix/styles/scrolltop';
import '@primeuix/styles/skeleton';
import '@primeuix/styles/progressbar';
import '@primeuix/styles/progressspinner';
import '@primeuix/styles/tag';
import '@primeuix/styles/terminal';
import '@primevue/forms/form/style';
import '@primevue/forms/formfield/style';
import '@primeuix/styles/tooltip';
import '@primeuix/styles/ripple';
import '@primeuix/styled';
import 'node:url';
import 'node:crypto';
import 'pinia';
import '@primeuix/utils/eventbus';
import '@primeuix/styles/base';
import '@primeuix/utils/zindex';
import '@primeuix/utils/uuid';
import '../routes/renderer.mjs';
import 'vue-bundle-renderer/runtime';
import 'unhead/server';
import 'devalue';
import 'unhead/utils';

const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "OtpVariant",
  __ssrInlineRender: true,
  props: {
    identifier: {}
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_input_otp = script;
      _push(ssrRenderComponent(_component_input_otp, mergeProps({
        name: __props.identifier,
        variant: "filled",
        length: 6
      }, _attrs), null, _parent));
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Input/OtpVariant.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_0 = Object.assign(_sfc_main$1, { __name: "InputOtpVariant" });
function tryOnScopeDispose(fn, failSilently) {
  if (getCurrentScope()) {
    onScopeDispose(fn, failSilently);
    return true;
  }
  return false;
}
const isClient = false;
typeof WorkerGlobalScope !== "undefined" && globalThis instanceof WorkerGlobalScope;
function useIntervalFn(cb, interval = 1e3, options = {}) {
  const { immediate = true, immediateCallback = false } = options;
  let timer = null;
  const isActive = shallowRef(false);
  function clean() {
    if (timer) {
      clearInterval(timer);
      timer = null;
    }
  }
  function pause() {
    isActive.value = false;
    clean();
  }
  function resume() {
    const intervalValue = toValue(interval);
    if (intervalValue <= 0) return;
    isActive.value = true;
    if (immediateCallback) cb();
    clean();
    if (isActive.value) timer = setInterval(cb, intervalValue);
  }
  if (isRef(interval) || typeof interval === "function") tryOnScopeDispose(watch(interval, () => {
    if (isActive.value && isClient) ;
  }));
  tryOnScopeDispose(pause);
  return {
    isActive: shallowReadonly(isActive),
    pause,
    resume
  };
}
function useCountdown(initialCountdown, options) {
  var _options$interval, _options$immediate;
  const remaining = shallowRef(toValue(initialCountdown));
  const intervalController = useIntervalFn(() => {
    var _options$onTick;
    const value = remaining.value - 1;
    remaining.value = value < 0 ? 0 : value;
    options === null || options === void 0 || (_options$onTick = options.onTick) === null || _options$onTick === void 0 || _options$onTick.call(options);
    if (remaining.value <= 0) {
      var _options$onComplete;
      intervalController.pause();
      options === null || options === void 0 || (_options$onComplete = options.onComplete) === null || _options$onComplete === void 0 || _options$onComplete.call(options);
    }
  }, (_options$interval = options === null || options === void 0 ? void 0 : options.interval) !== null && _options$interval !== void 0 ? _options$interval : 1e3, { immediate: (_options$immediate = options === null || options === void 0 ? void 0 : options.immediate) !== null && _options$immediate !== void 0 ? _options$immediate : false });
  const reset = (countdown) => {
    var _toValue;
    remaining.value = (_toValue = toValue(countdown)) !== null && _toValue !== void 0 ? _toValue : toValue(initialCountdown);
  };
  const stop = () => {
    intervalController.pause();
    reset();
  };
  const resume = () => {
    if (!intervalController.isActive.value) {
      if (remaining.value > 0) intervalController.resume();
    }
  };
  const start = (countdown) => {
    reset(countdown);
    intervalController.resume();
  };
  return {
    remaining,
    reset,
    stop,
    start,
    pause: intervalController.pause,
    resume,
    isActive: intervalController.isActive
  };
}
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "forgot-password",
  __ssrInlineRender: true,
  setup(__props) {
    const config = useRuntimeConfig();
    const { $apiFetch } = useNuxtApp();
    const { t } = useI18n();
    const resetPwdStore = useResetPwdFormStore();
    useNotify();
    const isLoading = ref(false);
    const otp = ref("");
    useHead({
      title: `${t("meta.title.forgot_password")} - ${config.public.app.name}`,
      meta: [{ name: "description", content: "My design project application." }]
    });
    const { remaining } = useCountdown(200, {
      onComplete() {
      },
      onTick() {
      }
    });
    const formattedTime = computed(() => {
      const m = Math.floor(remaining.value / 60);
      const s = remaining.value % 60;
      return `${m.toString().padStart(2, "0")}:${s.toString().padStart(2, "0")}`;
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_input_otp_variant = __nuxt_component_0;
      const _component_button_primary = __nuxt_component_1;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "mx-auto w-92" }, _attrs))}><h2 class="pb-4 text-3xl font-bold text-center underline decoration-auth-form-title-decoration decoration-2 underline-offset-10 text-auth-text-primary">${ssrInterpolate(_ctx.$t("page.forgot_password.form_title"))}</h2><p>${ssrInterpolate(_ctx.$t("page.forgot_password.intro_msg.part1"))} <span class="font-semibold">ousmane@gmail.com</span>. ${ssrInterpolate(_ctx.$t("page.forgot_password.intro_msg.part2"))}</p><form class="flex flex-col mt-4 space-y-4">`);
      _push(ssrRenderComponent(_component_input_otp_variant, {
        identifier: "otp",
        modelValue: unref(otp),
        "onUpdate:modelValue": ($event) => isRef(otp) ? otp.value = $event : null,
        size: "large",
        "pt:root": "mx-auto",
        integerOnly: "",
        onValueChange: (e2) => unref(resetPwdStore).updateFormField("otp", e2)
      }, null, _parent));
      _push(`<p class="text-sm">${ssrInterpolate(_ctx.$t("page.forgot_password.resend_code"))} <span class="font-bold text-auth-countdown">${ssrInterpolate(unref(formattedTime))}</span></p>`);
      _push(ssrRenderComponent(_component_button_primary, {
        type: "submit",
        label: _ctx.$t("button.verify_code"),
        loading: unref(isLoading)
      }, null, _parent));
      _push(`<p class="text-sm text-center">${ssrInterpolate(_ctx.$t("page.forgot_password.resend_code_link"))} <span class="ml-2 underline cursor-pointer decoration-link-decoration hover:decoration-link-hover-decoration decoration-1 underline-offset-4 text-link hover:text-link-hover">${ssrInterpolate(_ctx.$t("page.forgot_password.resend_code_button"))}</span></p></form></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/auth/forgot-password.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=forgot-password-DuV52gTl.mjs.map
