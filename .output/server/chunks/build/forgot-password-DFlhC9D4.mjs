import script from './index-BRid2hRl.mjs';
import { defineComponent, shallowRef, computed, mergeProps, unref, isRef, toValue, withCtx, createVNode, toHandlers, watch, shallowReadonly, getCurrentScope, onScopeDispose, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrInterpolate, ssrRenderComponent, ssrRenderAttr } from 'vue/server-renderer';
import { _ as __nuxt_component_1 } from './Primary-DW1ITzn7.mjs';
import { _ as __nuxt_component_11 } from './Loader-DBHVb-yz.mjs';
import { e as useRouter, c as useNuxtApp, b as useI18n, u as useHead, d as useRuntimeConfig } from './server.mjs';
import { u as useResetPwdFormStore } from './reset.pwd.form-ChZjfk3l.mjs';
import { u as useNotify } from './notify-7jIrthPf.mjs';
import { u as useAuthStore } from './auth-uLpXCxdh.mjs';
import '@primeuix/utils/dom';
import './index-DhmvckXO.mjs';
import '@primeuix/utils';
import './index-Dh_kTs08.mjs';
import './index-Cv7CEbWD.mjs';
import '@primeuix/styles/inputtext';
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
import '@primeuix/utils/object';
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
import '@primeuix/styles/inputotp';
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
import '@primeuix/styles/button';
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
import '@primeuix/styles/badge';
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
import '@primeuix/utils/uuid';
import '@primeuix/utils/zindex';
import '../routes/renderer.mjs';
import 'vue-bundle-renderer/runtime';
import 'unhead/server';
import 'devalue';
import 'unhead/utils';
import './index-BlaqzKyH.mjs';
import './index-DSaQNc_N.mjs';
import './index-DORsLxMh.mjs';

const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "NightVariant",
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
      }, _attrs), {
        default: withCtx(({ attrs, events }, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<input type="text"${ssrRenderAttr("value", attrs.value)} class="p-inputtext p-variant-filled p-inputotp-input" inputmode="numeric" maxlength="1" autocomplete="one-time-code" data-lpignore="true" data-1p-ignore data-form-type="other"${_scopeId}>`);
          } else {
            return [
              createVNode("input", mergeProps({ type: "text" }, toHandlers(events, true), {
                value: attrs.value,
                class: "p-inputtext p-variant-filled p-inputotp-input",
                inputmode: "numeric",
                maxlength: "1",
                autocomplete: "one-time-code",
                "data-lpignore": "true",
                "data-1p-ignore": "",
                "data-form-type": "other"
              }), null, 16, ["value"])
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Input/Otp/NightVariant.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_0 = Object.assign(_sfc_main$1, { __name: "InputOtpNightVariant" });
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
function getDefaultScheduler$8(options) {
  if ("interval" in options || "immediate" in options) {
    const { interval = 1e3, immediate = false } = options;
    return (cb) => useIntervalFn(cb, interval, { immediate });
  }
  return (cb) => useIntervalFn(cb, 1e3, { immediate: false });
}
function useCountdown(initialCountdown, options = {}) {
  const remaining = shallowRef(toValue(initialCountdown));
  const { scheduler = getDefaultScheduler$8(options), onTick, onComplete } = options;
  const controls = scheduler(() => {
    const value = remaining.value - 1;
    remaining.value = value < 0 ? 0 : value;
    onTick === null || onTick === void 0 || onTick();
    if (remaining.value <= 0) {
      controls.pause();
      onComplete === null || onComplete === void 0 || onComplete();
    }
  });
  const reset = (countdown) => {
    var _toValue;
    remaining.value = (_toValue = toValue(countdown)) !== null && _toValue !== void 0 ? _toValue : toValue(initialCountdown);
  };
  const stop = () => {
    controls.pause();
    reset();
  };
  const resume = () => {
    if (!controls.isActive.value) {
      if (remaining.value > 0) controls.resume();
    }
  };
  const start = (countdown) => {
    reset(countdown);
    controls.resume();
  };
  return {
    remaining,
    reset,
    stop,
    start,
    pause: controls.pause,
    resume,
    isActive: controls.isActive
  };
}
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "forgot-password",
  __ssrInlineRender: true,
  setup(__props) {
    const config = useRuntimeConfig();
    useRouter();
    const { $apiFetch } = useNuxtApp();
    const { t, locale } = useI18n();
    useResetPwdFormStore();
    useNotify();
    const authStore = useAuthStore();
    const isLoading = shallowRef(false);
    const isResendingOtp = shallowRef(false);
    const showResendBtn = shallowRef(false);
    const otp = shallowRef("");
    useHead({
      title: `${t("meta.title.forgot_password")} - ${config.public.app.name}`,
      meta: [{ name: "description", content: "My design project application." }]
    });
    const { remaining } = useCountdown(200, {
      onComplete() {
        showingResendButton();
      }
      // onTick() {},
    });
    const formattedTime = computed(() => {
      const m = Math.floor(remaining.value / 60);
      const s2 = remaining.value % 60;
      return `${m.toString().padStart(2, "0")}:${s2.toString().padStart(2, "0")}`;
    });
    const showingResendButton = () => showResendBtn.value = true;
    return (_ctx, _push, _parent, _attrs) => {
      const _component_input_otp_night_variant = __nuxt_component_0;
      const _component_button_primary = __nuxt_component_1;
      const _component_svg_loader = __nuxt_component_11;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "mx-auto w-92" }, _attrs))}><h2 class="pb-4 text-3xl font-bold text-center underline decoration-accent decoration-2 underline-offset-10 text-white">${ssrInterpolate(_ctx.$t("page.forgot_password.form_title"))}</h2><p>${ssrInterpolate(_ctx.$t("page.forgot_password.intro_msg.part1"))} <span class="font-semibold">${ssrInterpolate(unref(authStore).state?.emailAddress)}</span>. ${ssrInterpolate(_ctx.$t("page.forgot_password.intro_msg.part2"))}</p><form class="flex flex-col mt-4 space-y-4" autocomplete="off">`);
      _push(ssrRenderComponent(_component_input_otp_night_variant, {
        identifier: "otp",
        modelValue: unref(otp),
        "onUpdate:modelValue": ($event) => isRef(otp) ? otp.value = $event : null,
        size: "large",
        "pt:root": "mx-auto",
        integerOnly: ""
      }, null, _parent));
      if (!unref(showResendBtn)) {
        _push(`<p class="text-sm">${ssrInterpolate(_ctx.$t("page.forgot_password.resend_code"))} <span class="font-bold text-status-error">${ssrInterpolate(unref(formattedTime))}</span></p>`);
      } else {
        _push(`<!---->`);
      }
      _push(ssrRenderComponent(_component_button_primary, {
        type: "submit",
        label: _ctx.$t("button.verify_code"),
        loading: unref(isLoading),
        disabled: unref(showResendBtn)
      }, null, _parent));
      if (unref(showResendBtn)) {
        _push(`<div class="flex justify-center gap-2 text-sm text-center"><span>${ssrInterpolate(_ctx.$t("page.forgot_password.resend_code_link"))}</span><div class="flex items-center"><span class="ml-2 underline cursor-pointer decoration-accent hover:decoration-accent-light decoration-1 underline-offset-4 text-accent hover:text-accent-light">${ssrInterpolate(_ctx.$t("page.forgot_password.resend_code_button"))}</span>`);
        if (unref(isResendingOtp)) {
          _push(ssrRenderComponent(_component_svg_loader, null, null, _parent));
        } else {
          _push(`<!---->`);
        }
        _push(`</div></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</form></div>`);
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
//# sourceMappingURL=forgot-password-DFlhC9D4.mjs.map
