import { _ as __nuxt_component_2 } from './BgTransparent-fWtIQY8n.mjs';
import { _ as __nuxt_component_1 } from './AddonTransparent-BwqrvrG2.mjs';
import { _ as __nuxt_component_1$1 } from './Primary-DW1ITzn7.mjs';
import script from './index-EKFMx5kG.mjs';
import { defineComponent, ref, computed, mergeProps, unref, withCtx, openBlock, createBlock, withModifiers, createVNode, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrInterpolate, ssrRenderComponent } from 'vue/server-renderer';
import { b as useI18n, u as useHead, c as useNuxtApp, d as useRuntimeConfig } from './server.mjs';
import { u as useNotify } from './notify-7jIrthPf.mjs';
import { u as useAuthStore } from './auth-uLpXCxdh.mjs';
import { u as useBankStore } from './bank-BwzX4P6l.mjs';
import './index-DhmvckXO.mjs';
import '@primeuix/utils';
import './index-Dh_kTs08.mjs';
import './index-Cv7CEbWD.mjs';
import '@primeuix/styles/inputtext';
import './index-DnjRpD5B.mjs';
import './index-BlaqzKyH.mjs';
import '@primeuix/utils/object';
import './index-DSaQNc_N.mjs';
import './index-DORsLxMh.mjs';
import '@primeuix/styles/badge';
import '@primeuix/styles/button';
import '@primeuix/styles/inputgroup';
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
import '@primeuix/utils/dom';
import '@primeuix/utils/uuid';
import '@primeuix/utils/zindex';
import '../routes/renderer.mjs';
import 'vue-bundle-renderer/runtime';
import 'unhead/server';
import 'devalue';
import 'unhead/utils';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "signin",
  __ssrInlineRender: true,
  setup(__props) {
    const config = useRuntimeConfig();
    const { t, locale } = useI18n();
    useNotify();
    useHead({
      title: `${t("meta.title.login")} - ${config.public.app.name}`,
      meta: [{ name: "description", content: "My design project application." }]
    });
    const { $apiFetch } = useNuxtApp();
    useAuthStore();
    useBankStore();
    const showPass = ref(false);
    const isLoading = ref(false);
    const validErrorMsg = ref({
      username: "",
      secret: ""
    });
    const form = ref({
      username: "",
      secret: "",
      lang: locale.value
    });
    const passwordFieldType = computed(() => showPass.value ? "text" : "password");
    const showingPassword = () => showPass.value = true;
    const hidingPassword = () => showPass.value = false;
    return (_ctx, _push, _parent, _attrs) => {
      const _component_input_bg_transparent = __nuxt_component_2;
      const _component_input_group = script;
      const _component_input_addon_transparent = __nuxt_component_1;
      const _component_button_primary = __nuxt_component_1$1;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "mx-auto w-92" }, _attrs))}><h2 class="pb-4 text-2xl lg:text-3xl font-bold text-center underline decoration-accent decoration-2 underline-offset-10 text-white">${ssrInterpolate(_ctx.$t("page.login.form_title"))}</h2><p class="text-sm lg:text-base">${ssrInterpolate(_ctx.$t("page.login.intro_msg.part1"))} <span class="font-semibold">${ssrInterpolate(_ctx.$t("page.login.intro_msg.part2"))}</span> ${ssrInterpolate(_ctx.$t("page.login.intro_msg.part3"))}</p><form class="mt-4 space-y-4"><div>`);
      _push(ssrRenderComponent(_component_input_bg_transparent, {
        identifier: "pseudo",
        modelValue: unref(form).username,
        "onUpdate:modelValue": ($event) => unref(form).username = $event,
        placeholder: _ctx.$t("placeholder.pseudo")
      }, null, _parent));
      if (unref(validErrorMsg).username.trim().length > 0) {
        _push(`<span class="text-xs font-semibold transition duration-200 ease-linear text-status-error">${ssrInterpolate(unref(validErrorMsg).username)}</span>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div><div>`);
      _push(ssrRenderComponent(_component_input_group, null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_input_bg_transparent, {
              identifier: "password",
              modelValue: unref(form).secret,
              "onUpdate:modelValue": ($event) => unref(form).secret = $event,
              type: unref(passwordFieldType),
              placeholder: "********"
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_input_addon_transparent, null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  if (unref(showPass)) {
                    _push3(`<i class="text-text-secondary pi pi-eye"${_scopeId2}></i>`);
                  } else {
                    _push3(`<i class="text-text-secondary pi pi-eye-slash"${_scopeId2}></i>`);
                  }
                } else {
                  return [
                    unref(showPass) ? (openBlock(), createBlock("i", {
                      key: 0,
                      onClick: withModifiers(hidingPassword, ["prevent"]),
                      class: "text-text-secondary pi pi-eye"
                    })) : (openBlock(), createBlock("i", {
                      key: 1,
                      onClick: withModifiers(showingPassword, ["prevent"]),
                      class: "text-text-secondary pi pi-eye-slash"
                    }))
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_input_bg_transparent, {
                identifier: "password",
                modelValue: unref(form).secret,
                "onUpdate:modelValue": ($event) => unref(form).secret = $event,
                type: unref(passwordFieldType),
                placeholder: "********"
              }, null, 8, ["modelValue", "onUpdate:modelValue", "type"]),
              createVNode(_component_input_addon_transparent, null, {
                default: withCtx(() => [
                  unref(showPass) ? (openBlock(), createBlock("i", {
                    key: 0,
                    onClick: withModifiers(hidingPassword, ["prevent"]),
                    class: "text-text-secondary pi pi-eye"
                  })) : (openBlock(), createBlock("i", {
                    key: 1,
                    onClick: withModifiers(showingPassword, ["prevent"]),
                    class: "text-text-secondary pi pi-eye-slash"
                  }))
                ]),
                _: 1
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      if (unref(validErrorMsg).secret.trim().length > 0) {
        _push(`<span class="text-xs font-semibold transition duration-200 ease-linear text-status-error">${ssrInterpolate(unref(validErrorMsg).secret)}</span>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div>`);
      _push(ssrRenderComponent(_component_button_primary, {
        type: _ctx.$t("button.submit"),
        label: _ctx.$t("button.login"),
        loading: unref(isLoading)
      }, null, _parent));
      _push(`</form></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/auth/signin.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=signin-BfSF6Ohs.mjs.map
