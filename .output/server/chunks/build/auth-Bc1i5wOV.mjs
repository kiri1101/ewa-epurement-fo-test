import { ref, mergeProps, unref, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderAttr, ssrRenderStyle } from 'vue/server-renderer';
import { a as useAssetStore, b as __nuxt_component_1, _ as _export_sfc } from './server.mjs';
import script from './index-BZaoBW6c.mjs';
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
import '@primeuix/styles/inputtext';
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
import '@primeuix/utils';
import '@primeuix/styles/base';
import '@primeuix/utils/dom';
import '@primeuix/utils/zindex';
import '@primeuix/utils/uuid';
import '../routes/renderer.mjs';
import 'vue-bundle-renderer/runtime';
import 'unhead/server';
import 'devalue';
import 'unhead/utils';

const _sfc_main$1 = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<button${ssrRenderAttrs(mergeProps({
    type: "button",
    class: "text-sm border px-3 py-1 rounded bg-translate text-translate-text border-translate-border cursor-pointer hover:shadow shadow-gray-300 transition duration-200 ease-linear flex items-center gap-1.5"
  }, _attrs))}><span>French</span><i class="pi pi-angle-down" style="${ssrRenderStyle({ "font-size": "0.9rem" })}"></i></button>`);
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Gadget/Translate.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_0 = /* @__PURE__ */ Object.assign(_export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender]]), { __name: "GadgetTranslate" });
const _sfc_main = {
  __name: "auth",
  __ssrInlineRender: true,
  setup(__props) {
    const assetStore = useAssetStore();
    const showLoader = ref({
      logo: true,
      hero: true
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_skeleton = script;
      const _component_gadget_translate = __nuxt_component_0;
      const _component_NuxtPage = __nuxt_component_1;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "grid grid-rows-[auto_1fr]" }, _attrs))}><nav class="grid items-end h-16 grid-cols-2 py-1 border-b-4 border-auth-navbar-border"><div class="flex justify-center"><div class="z-10 flex items-center justify-center translate-y-10 border-b-4 border-x-4 border-auth-navbar-border w-28 h-9 bg-auth-navbar"><div class="-translate-y-4">`);
      if (unref(showLoader).logo) {
        _push(ssrRenderComponent(_component_skeleton, {
          width: "5rem",
          height: "3rem"
        }, null, _parent));
      } else {
        _push(`<img${ssrRenderAttr("src", unref(assetStore).list.logo)} class="object-cover object-center w-20" alt="App Logo">`);
      }
      _push(`</div></div></div><div class="flex justify-center">`);
      _push(ssrRenderComponent(_component_gadget_translate, null, null, _parent));
      _push(`</div></nav><div class="relative grow bg-auth-page h-[calc(100vh-4rem)] flex flex-col justify-center"><div class="bg-radial-[at_50%_85%] from-auth-effect to-transparent h-104 w-72 lg:w-lg blur-xl rounded-full opacity-30 absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none"></div><div class="grid md:grid-cols-[auto_1fr] gap-5 w-full max-w-lg md:max-w-2xl lg:max-w-4xl p-3 mx-auto border-[1.5px] rounded-lg shadow-lg border-auth-form-border backdrop-blur-md"><div class="hidden md:block">`);
      if (unref(showLoader).hero) {
        _push(`<div class="w-64 h-96 lg:w-96 lg:h-96">`);
        _push(ssrRenderComponent(_component_skeleton, {
          width: "100%",
          height: "100%"
        }, null, _parent));
        _push(`</div>`);
      } else {
        _push(`<img${ssrRenderAttr("src", unref(assetStore).list.login_hero)} class="object-cover object-center rounded-lg size-96" alt="Login Hero">`);
      }
      _push(`</div><div class="py-5 text-auth-text-primary">`);
      _push(ssrRenderComponent(_component_NuxtPage, {
        "page-key": (route) => route.fullPath
      }, null, _parent));
      _push(`</div></div></div></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/auth.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=auth-Bc1i5wOV.mjs.map
