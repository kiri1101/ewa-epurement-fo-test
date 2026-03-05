import { _ as __nuxt_component_2 } from './BgTransparent-fWtIQY8n.mjs';
import { _ as __nuxt_component_1 } from './AddonTransparent-BwqrvrG2.mjs';
import { _ as __nuxt_component_1$1 } from './Primary-DW1ITzn7.mjs';
import script from './index-EKFMx5kG.mjs';
import { defineComponent, shallowRef, ref, computed, mergeProps, withCtx, unref, openBlock, createBlock, withModifiers, createVNode, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrInterpolate, ssrRenderComponent } from 'vue/server-renderer';
import { b as useI18n, c as useNuxtApp, u as useHead, d as useRuntimeConfig } from './server.mjs';
import { u as useNotify } from './notify-7jIrthPf.mjs';
import { u as useResetPwdFormStore } from './reset.pwd.form-ChZjfk3l.mjs';
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
import '@primeuix/utils/dom';
import '@primeuix/utils/uuid';
import '@primeuix/utils/zindex';
import '../routes/renderer.mjs';
import 'vue-bundle-renderer/runtime';
import 'unhead/server';
import 'devalue';
import 'unhead/utils';
import './index-DnjRpD5B.mjs';
import './index-BlaqzKyH.mjs';
import './index-DSaQNc_N.mjs';
import './index-DORsLxMh.mjs';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "update-password",
  __ssrInlineRender: true,
  setup(__props) {
    const config = useRuntimeConfig();
    const { t, locale } = useI18n();
    useNotify();
    const { $apiFetch } = useNuxtApp();
    useResetPwdFormStore();
    const isSecretInvalid = shallowRef(false);
    const isLoading = shallowRef(false);
    const showPass = shallowRef(false);
    const showPassConfirm = shallowRef(false);
    const form = ref({
      secret: "",
      secret_confirm: ""
    });
    useHead({
      title: `${t("meta.title.update_password")} - ${config.public.app.name}`,
      meta: [{ name: "description", content: "My design project application." }]
    });
    const passwordFieldType = computed(() => showPass.value ? "text" : "password");
    const passwordConfirmFieldType = computed(
      () => showPassConfirm.value ? "text" : "password"
    );
    const showingPassword = () => showPass.value = true;
    const hidingPassword = () => showPass.value = false;
    const showingPasswordConfirm = () => showPassConfirm.value = true;
    const hidingPasswordConfirm = () => showPassConfirm.value = false;
    return (_ctx, _push, _parent, _attrs) => {
      const _component_input_group = script;
      const _component_input_bg_transparent = __nuxt_component_2;
      const _component_input_addon_transparent = __nuxt_component_1;
      const _component_button_primary = __nuxt_component_1$1;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "w-full mx-auto sm:w-92" }, _attrs))}><h2 class="pb-4 text-3xl font-bold text-center underline decoration-accent decoration-2 underline-offset-10 text-white">${ssrInterpolate(_ctx.$t("page.update_password.form_title"))}</h2><form class="flex flex-col mt-4 space-y-4">`);
      _push(ssrRenderComponent(_component_input_group, null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_input_bg_transparent, {
              identifier: "new_password",
              modelValue: unref(form).secret,
              "onUpdate:modelValue": ($event) => unref(form).secret = $event,
              type: unref(passwordFieldType),
              placeholder: _ctx.$t("placeholder.new_password")
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
                identifier: "new_password",
                modelValue: unref(form).secret,
                "onUpdate:modelValue": ($event) => unref(form).secret = $event,
                type: unref(passwordFieldType),
                placeholder: _ctx.$t("placeholder.new_password")
              }, null, 8, ["modelValue", "onUpdate:modelValue", "type", "placeholder"]),
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
      _push(`<div>`);
      _push(ssrRenderComponent(_component_input_group, null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_input_bg_transparent, {
              identifier: "confirm_new_password",
              modelValue: unref(form).secret_confirm,
              "onUpdate:modelValue": ($event) => unref(form).secret_confirm = $event,
              type: unref(passwordConfirmFieldType),
              placeholder: _ctx.$t("placeholder.confirm_new_password")
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_input_addon_transparent, null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  if (unref(showPassConfirm)) {
                    _push3(`<i class="text-text-secondary pi pi-eye"${_scopeId2}></i>`);
                  } else {
                    _push3(`<i class="text-text-secondary pi pi-eye-slash"${_scopeId2}></i>`);
                  }
                } else {
                  return [
                    unref(showPassConfirm) ? (openBlock(), createBlock("i", {
                      key: 0,
                      onClick: withModifiers(hidingPasswordConfirm, ["prevent"]),
                      class: "text-text-secondary pi pi-eye"
                    })) : (openBlock(), createBlock("i", {
                      key: 1,
                      onClick: withModifiers(showingPasswordConfirm, ["prevent"]),
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
                identifier: "confirm_new_password",
                modelValue: unref(form).secret_confirm,
                "onUpdate:modelValue": ($event) => unref(form).secret_confirm = $event,
                type: unref(passwordConfirmFieldType),
                placeholder: _ctx.$t("placeholder.confirm_new_password")
              }, null, 8, ["modelValue", "onUpdate:modelValue", "type", "placeholder"]),
              createVNode(_component_input_addon_transparent, null, {
                default: withCtx(() => [
                  unref(showPassConfirm) ? (openBlock(), createBlock("i", {
                    key: 0,
                    onClick: withModifiers(hidingPasswordConfirm, ["prevent"]),
                    class: "text-text-secondary pi pi-eye"
                  })) : (openBlock(), createBlock("i", {
                    key: 1,
                    onClick: withModifiers(showingPasswordConfirm, ["prevent"]),
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
      if (unref(isSecretInvalid)) {
        _push(`<span class="text-xs text-status-error font-semibold transition duration-200 ease-linear">${ssrInterpolate(_ctx.$t("validation.pwd_confirm_failed"))}</span>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div>`);
      _push(ssrRenderComponent(_component_button_primary, {
        type: _ctx.$t("button.submit"),
        label: _ctx.$t("button.update_password"),
        loading: unref(isLoading)
      }, null, _parent));
      _push(`</form></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/auth/update-password.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=update-password-DE5R3aqW.mjs.map
