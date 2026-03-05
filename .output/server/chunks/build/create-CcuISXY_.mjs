import { _ as __nuxt_component_0 } from './AuthNav-eN4PH_ZJ.mjs';
import { _ as __nuxt_component_1, a as __nuxt_component_2 } from './ImageBlur-Cr_DWKbR.mjs';
import { defineComponent, shallowRef, ref, computed, watch, mergeProps, withCtx, createVNode, toDisplayString, isRef, unref, openBlock, createBlock, createCommentVNode, createTextVNode, withModifiers, Fragment, renderList, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate, ssrRenderAttr, ssrRenderStyle, ssrRenderClass, ssrRenderList } from 'vue/server-renderer';
import { _ as __nuxt_component_9 } from './Select-BMmHRGTZ.mjs';
import { _ as __nuxt_component_4 } from './ErrorMsg-Cdn_8jsh.mjs';
import { _ as __nuxt_component_8$1 } from './CustomNumber-Bv6OziLi.mjs';
import { u as useCurrency, _ as __nuxt_component_7, a as useCustomStyle } from './useCustomStyle-BC1q-PDD.mjs';
import script$c from './index-fnL5HE8b.mjs';
import { b as useI18n, x as useRoute, e as useRouter, u as useHead, c as useNuxtApp, d as useRuntimeConfig, _ as _export_sfc, n as navigateTo } from './server.mjs';
import { _ as __nuxt_component_6 } from './BgNormal-WNDX37G3.mjs';
import script$d from './index-BwXbREkD.mjs';
import { _ as __nuxt_component_1$1 } from './Primary-DW1ITzn7.mjs';
import { _ as __nuxt_component_10$1 } from './FileUpload-APGyD7h5.mjs';
import script$b from './index-BlaqzKyH.mjs';
import { s as sliceIban, a as formatDate, b as feeLabel, c as formatNumber } from './str.helpers-C9LGWfpH.mjs';
import script$a from './index-D-7eZ2tE.mjs';
import script$9 from './index-DeQNdLHz.mjs';
import script$8 from './index-DpXzVJZp.mjs';
import script$7 from './index-C3bcToRo.mjs';
import script$6 from './index-BSwViqAw.mjs';
import script$5 from './index-BDwPQNYa.mjs';
import script$4 from './index-CyD91S4n.mjs';
import script$3 from './index-Cevj7xo8.mjs';
import script$2 from './index-uxD-cfiy.mjs';
import script$1 from './index-EYKzgVRv.mjs';
import script from './index-B_MGwOy2.mjs';
import { _ as _imports_0 } from './virtual_public-BaMBbzSe.mjs';
import { _ as _imports_1 } from './virtual_public-DBNNCCD_.mjs';
import { u as useLoadingStore } from './loading-DepoijyK.mjs';
import { h as handleApiError } from './api.errors-BfPdMj8S.mjs';
import { storeToRefs } from 'pinia';
import { u as useEncrypt } from './encrypt-DrRgFiWK.mjs';
import { u as useTransferStore } from './transfer-BhCiLivd.mjs';
import { u as useBankStore } from './bank-BwzX4P6l.mjs';
import { u as useNotify } from './notify-7jIrthPf.mjs';
import './Translate-C_X9iIzf.mjs';
import './index-DZx4fgBN.mjs';
import '@primeuix/styled';
import '@primeuix/utils/dom';
import '@primeuix/utils/zindex';
import './index-DR3VD1-A.mjs';
import '@primeuix/utils/object';
import './index-rAVNvoJo.mjs';
import '@primeuix/utils/eventbus';
import '@primeuix/styles/popover';
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
import 'node:url';
import 'node:crypto';
import '@primeuix/utils';
import '@primeuix/styles/base';
import '@primeuix/utils/uuid';
import '../routes/renderer.mjs';
import 'vue-bundle-renderer/runtime';
import 'unhead/server';
import 'devalue';
import 'unhead/utils';
import './index-BjkFAZaV.mjs';
import './index-DNErSYKU.mjs';
import './index-DBZjLEmg.mjs';
import './index-DhmvckXO.mjs';
import './index-Dh_kTs08.mjs';
import './index-Cv7CEbWD.mjs';
import './index-UOnup3Dx.mjs';
import './index-jauc-8K8.mjs';
import './index-Cg8Tg0lO.mjs';
import './index-BAEKaTcz.mjs';
import './index-DAocwqNe.mjs';
import 'filepond-plugin-file-validate-type';
import 'filepond-plugin-file-validate-size';
import './auth-uLpXCxdh.mjs';
import './index-DSaQNc_N.mjs';
import './index-DORsLxMh.mjs';
import 'moment';
import './index-Bs-6gtw7.mjs';
import './index-BKaz9u56.mjs';
import './index-DNiohjxC.mjs';
import './index-CicSKTaH.mjs';
import './index-4S0J0IID.mjs';
import './index-BEnyDPm8.mjs';

const _sfc_main$4 = /* @__PURE__ */ defineComponent({
  __name: "TransfertStep",
  __ssrInlineRender: true,
  props: {
    value: {},
    activeStep: {},
    activateCallback: { type: Function },
    icon: {}
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<button${ssrRenderAttrs(mergeProps({
        type: "button",
        class: "bg-transparent border-0 inline-flex flex-col gap-2"
      }, _attrs))}><span class="${ssrRenderClass([
        "rounded-full border-2 size-9 inline-flex items-center justify-center",
        {
          "bg-accent text-white border-accent": Number(__props.value) <= Number(__props.activeStep),
          "border-border-main": Number(__props.value) > Number(__props.activeStep)
        }
      ])}"><i class="${ssrRenderClass(__props.icon)}" style="${ssrRenderStyle({ "font-size": "0.9rem" })}"></i></span></button>`);
    };
  }
});
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Table/TransfertStep.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const __nuxt_component_3 = Object.assign(_sfc_main$4, { __name: "TableTransfertStep" });
const _sfc_main$3 = {};
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs) {
  const _component_RadioButton = script$c;
  _push(ssrRenderComponent(_component_RadioButton, mergeProps({ "input-style": {
    "&:checked": {
      color: "#ff0000 !important"
    }
  } }, _attrs), null, _parent));
}
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Input/Radio.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const __nuxt_component_8 = /* @__PURE__ */ Object.assign(_export_sfc(_sfc_main$3, [["ssrRender", _sfc_ssrRender$1]]), { __name: "InputRadio" });
const _sfc_main$2 = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_ToggleSwitch = script$d;
  _push(ssrRenderComponent(_component_ToggleSwitch, _attrs, null, _parent));
}
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Input/Toggle.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const __nuxt_component_10 = /* @__PURE__ */ Object.assign(_export_sfc(_sfc_main$2, [["ssrRender", _sfc_ssrRender]]), { __name: "InputToggle" });
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "Secondary",
  __ssrInlineRender: true,
  setup(__props) {
    const pt = {
      root: {
        class: "w-full font-semibold h-8 xl:h-9 rounded-md hover:bg-primary-light focus:outline-none focus:ring-2 focus:ring-primary-light"
      },
      label: {
        class: "text-xs xl:text-sm text-white text-nowrap"
      }
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Button = script$b;
      _push(ssrRenderComponent(_component_Button, mergeProps({ pt }, _attrs), null, _parent));
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Button/Secondary.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_13 = /* @__PURE__ */ Object.assign(_export_sfc(_sfc_main$1, [["__scopeId", "data-v-6ee6a870"]]), { __name: "ButtonSecondary" });
const useTransfer = () => {
  const { $apiFetch } = useNuxtApp();
  const config = useRuntimeConfig();
  const { locale } = useI18n();
  const store = useLoadingStore();
  const getDomiciliations = async () => {
    let output = {
      validationErr: [],
      response: null,
      error: ""
    };
    store.showDomLoader();
    try {
      const { apiResponse, validError } = await $apiFetch(
        config.public.api.domiciliation.list,
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
      store.hideDomLoader();
    }
    return output;
  };
  const getTransferTypes = async () => {
    let output = {
      validationErr: [],
      response: {
        type: [],
        category: []
      },
      error: ""
    };
    store.showTransferTypeLoader();
    try {
      const { apiResponse, validError } = await $apiFetch(
        config.public.api.transfer.types,
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
      store.hideTransferTypeLoader();
    }
    return output;
  };
  const getEngagementLetter = async (demandId) => {
    let output = {
      validationErr: [],
      response: {
        name: "",
        link: ""
      },
      error: ""
    };
    store.showEngagementLetterLoader();
    try {
      const { apiResponse, validError } = await $apiFetch(
        config.public.api.transfer.engagement,
        {
          method: "POST",
          body: {
            demandId,
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
      store.hideEngagementLetterLoader();
    }
    return output;
  };
  const getBeneficiaryList = async () => {
    let output = {
      validationErr: [],
      response: [],
      error: ""
    };
    store.showTransferBenefLoader();
    try {
      const { apiResponse, validError } = await $apiFetch(
        config.public.api.beneficiary.list,
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
      store.hideTransferBenefLoader();
    }
    return output;
  };
  return {
    getDomiciliations,
    getTransferTypes,
    getEngagementLetter,
    getBeneficiaryList
  };
};
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "create",
  __ssrInlineRender: true,
  setup(__props) {
    const config = useRuntimeConfig();
    const { t, locale } = useI18n();
    useRoute();
    const router = useRouter();
    useHead({
      title: `${t("meta.title.transfer.new")} - ${config.public.app.name}`,
      meta: [{ name: "description", content: "My design project application." }]
    });
    const { $apiFetch } = useNuxtApp();
    const {
      getDomiciliations,
      getEngagementLetter
    } = useTransfer();
    const {
      isDomLoading,
      isTransferTypeLoading,
      isTransferSettingLoading,
      isEngagementLetterLoading,
      isTransferBenefLoading
    } = storeToRefs(useLoadingStore());
    useCurrency();
    const { getEncrypt } = useEncrypt();
    const { selectInputPt, buttonPt } = useCustomStyle();
    const transferStore = useTransferStore();
    const bankStore = useBankStore();
    const isLoading = shallowRef(false);
    const isRestoringForm = shallowRef(false);
    const { e, s } = useNotify();
    const transferTypeList = ref({
      type: [],
      category: []
    });
    const filteredTransferTypeList = ref([]);
    const rateList = ref([]);
    const currencyList = ref([]);
    const beneficiaryList = ref([]);
    const domiciliationList = ref([]);
    const fileListByType = ref([]);
    const engagementLetter = ref({
      name: "",
      link: ""
    });
    const numUploadedFiles = shallowRef(0);
    const totalNumFiles = shallowRef(0);
    const activeStep = shallowRef(1);
    const showDomiciliationForm = shallowRef(false);
    const showDomiciliation = shallowRef(false);
    const domiciliationType = shallowRef("");
    const chosenRate = ref({});
    const requiredFiles = ref([]);
    const convertedAmount = shallowRef(0);
    const showAmountConversion = shallowRef("1");
    const showDomExtraForm = shallowRef("2");
    const chosenOption = shallowRef("");
    const form = ref({
      requestId: "",
      type: {},
      motive: {},
      account: {},
      amount: "",
      currency: "",
      targetDate: null,
      description: "",
      supportFee: "",
      beneficiary: {},
      lang: "",
      files: {},
      engagement: false,
      domNumber: "",
      declareNum: "",
      domUnikCode: {}
    });
    const validErrorMsg = ref({
      type: "",
      motive: "",
      account: "",
      amount: "",
      currency: "",
      targetDate: "",
      description: "",
      supportFee: "",
      beneficiary: "",
      files: "",
      domNumber: "",
      declareNum: ""
    });
    const showEngagementNotice = computed(
      () => form.value.engagement && engagementLetter.value.link.trim().length > 0 ? "0" : "1"
    );
    const openDomTypeForm = computed(() => showDomiciliation.value ? "0" : "1");
    const showingLoader = () => isLoading.value = true;
    const hidingLoader = () => isLoading.value = false;
    const stepNavigation = async (callback, step, direction) => {
      let output;
      if (direction === "next") {
        if (step === 2) {
          if (form.value.motive?.code.trim().length > 0) {
            if (showDomiciliationForm.value) {
              transferStore.update(form.value);
              await navigateTo({
                name: "domiciliation-new",
                query: {
                  callbackUrl: "/transfer/create"
                }
              });
            } else {
              setFileListByType(form.value.motive?.code);
              output = callback(step);
            }
          } else {
            output = e("Provide a valid transfer motive");
          }
        } else if (step === 3) {
          submit(callback);
        } else {
          output = callback(step);
        }
      } else if (direction === "back") {
        output = !showDomiciliationForm.value ? callback(2) : callback(step);
      } else {
        output = callback(step);
      }
      return output;
    };
    const toggleDomExtraForm = (value) => {
      chosenOption.value = value;
      if (value === "select") {
        showDomExtraForm.value = "1";
      } else if (value === "done") {
        showDomExtraForm.value = "0";
      } else {
        showDomExtraForm.value = "2";
      }
      showDomiciliationForm.value = value === "create" ? true : false;
    };
    const setTypeByCategory = (type) => {
      showDomExtraForm.value = "2";
      chosenOption.value = "";
      domiciliationType.value = type.code.toUpperCase().endsWith("BIEN") ? "BIEN" : "SERVICE";
      filteredTransferTypeList.value = transferTypeList.value.type.filter(
        (item) => item.category.code === type.code
      );
    };
    const canOpenDomAccordion = () => {
      showDomiciliation.value = form.value.motive?.activateDom && convertedAmount.value > Number(form.value.motive?.domAmount) ? true : false;
    };
    const setFileListByType = (code) => {
      let reqIds = [];
      const type = transferTypeList.value.type.find(
        (item) => item.code === code
      );
      if (type) {
        fileListByType.value = type.attachments;
        totalNumFiles.value = type.attachments.length;
        if (form.value.engagement) {
          fileListByType.value.forEach((file) => {
            if (file.forExecution) {
              reqIds.push(file.code);
            }
          });
        } else {
          fileListByType.value.forEach((file) => {
            if (file.isRequired || file.forExecution) {
              reqIds.push(file.code);
            }
          });
        }
      } else {
        fileListByType.value = [];
        totalNumFiles.value = 0;
      }
      canOpenDomAccordion();
      requiredFiles.value = reqIds;
    };
    const setUploadedFile = (code, fileId) => {
      form.value.files[code] = fileId;
      numUploadedFiles.value++;
    };
    const clearFile = (code) => {
      form.value.files[code] = "";
      numUploadedFiles.value--;
    };
    const setChosenCurrentRate = () => {
      const rate = rateList.value.find(
        (item) => item.initCode === form.value.currency && item.finalCode === "XAF"
      );
      chosenRate.value = rate ? rate : {};
      convertCurrency(Number(form.value.amount));
      showAmountConversion.value = Number(form.value.amount) > 0 && chosenRate.value ? "0" : "1";
      canOpenDomAccordion();
    };
    const convertCurrency = (amount) => {
      convertedAmount.value = chosenRate.value?.value ? formatNumber(amount, chosenRate.value.value) : 0;
      showAmountConversion.value = amount > 0 && Object.values(chosenRate.value).length > 0 ? "0" : "1";
    };
    const resetValidErrorMsg = () => {
      validErrorMsg.value = {
        type: "",
        motive: "",
        account: "",
        amount: "",
        currency: "",
        targetDate: "",
        description: "",
        supportFee: "",
        beneficiary: "",
        files: "",
        domNumber: "",
        declareNum: ""
      };
    };
    const domiciliations = async () => {
      const res = await getDomiciliations();
      if (res.validationErr.length > 0) {
        res.validationErr.forEach((err) => e(err?.message));
      }
      if (res.error.length > 0) {
        e(res.error);
      }
      if (res.response) {
        let filteredList = res.response;
        if (form.value.currency?.trim().length > 0) {
          filteredList = filteredList.filter(
            (item) => item.benefCurrency === form.value.currency
          );
        }
        if (form.value.beneficiary?.code?.trim().length > 0) {
          filteredList = filteredList.filter(
            (item) => item.benefCode === form.value.beneficiary.code
          );
        }
        if (form.value.type?.code?.trim().length > 0) {
          filteredList = filteredList.filter(
            (item) => item.natureCode === form.value.type.code
          );
        }
        if (Number(form.value.amount) > 0) {
          filteredList = filteredList.filter(
            (item) => Number(item.balance) > Number(form.value.amount)
          );
        }
        domiciliationList.value = filteredList;
      }
    };
    const submit = async (callback) => {
      resetValidErrorMsg();
      const proceed = requiredFiles.value.every(
        (key) => Object.keys(form.value.files).includes(key)
      );
      if (!proceed) {
        e("Please upload all required files");
      } else {
        form.value.lang = locale.value;
        showingLoader();
        try {
          const { apiResponse, validError } = await $apiFetch(
            config.public.api.transfer.create,
            {
              method: "POST",
              body: {
                demandId: form.value.requestId,
                type: form.value.motive?.code,
                account: form.value.account?.accRef,
                amount: form.value.amount,
                currency: form.value.currency,
                targetDate: form.value.targetDate,
                description: form.value.description,
                supportFee: form.value.supportFee,
                beneficiaryCode: form.value.beneficiary?.code,
                domNumber: form.value.domNumber,
                declareNum: form.value.declareNum,
                unikCode: form.value.domUnikCode?.code ?? "",
                lang: locale.value,
                files: form.value.files,
                engagement: form.value.engagement
              }
            }
          );
          if (validError) {
            validError.forEach((err) => {
              e(t("validation.empty_form"));
              validErrorMsg.value[err.name] = err.message;
            });
          } else {
            form.value.requestId = apiResponse.requestId;
            s(apiResponse.message);
            callback(3);
          }
        } catch (error) {
          const errorMsg = handleApiError(error);
          if (errorMsg.length > 0) {
            e(errorMsg);
          }
        } finally {
          hidingLoader();
        }
      }
    };
    const fetchLetter = async () => {
      const res = await getEngagementLetter(form.value.requestId);
      if (res.validationErr.length > 0) {
        res.validationErr.forEach((err) => e(err?.message));
      }
      if (res.error.length > 0) {
        e(res.error);
      }
      if (res.response && res.response?.link) {
        engagementLetter.value = res.response;
      }
    };
    const handleCreateTransfer = async () => {
      transferStore.reset();
      await navigateTo({ name: "dashboard" });
    };
    const openPdf = async (fileUrl) => {
      const res = await getEncrypt(fileUrl, "multiply");
      if (res.validationErr.length > 0) {
        res.validationErr.forEach((err) => e(err?.message));
      }
      if (res.error.length > 0) {
        e(res.error);
      }
      if (res.response && res.response?.url) {
        router.push({
          path: "/viewer/document",
          query: {
            page: `${router.currentRoute.value.fullPath}&step=3`,
            url: res.response?.url
          }
        });
      }
    };
    watch(
      () => chosenOption.value,
      (val) => {
        if (val === "select" && form.value.currency.length > 0 && Object.keys(form.value.beneficiary).length > 0 && Object.keys(form.value.type).length > 0) {
          domiciliations();
        }
      }
    );
    watch(
      () => form.value.amount,
      () => {
        if (chosenOption.value === "select") {
          domiciliations();
        }
      }
    );
    watch(
      () => form.value.currency,
      () => {
        if (chosenOption.value === "select") {
          domiciliations();
        }
      }
    );
    watch(
      () => form.value.beneficiary,
      () => {
        if (chosenOption.value === "select") {
          domiciliations();
        }
      }
    );
    watch(
      () => form.value.type,
      () => {
        showDomiciliation.value = false;
        showDomiciliationForm.value = false;
        if (!isRestoringForm.value) {
          form.value.motive = {};
        }
        if (chosenOption.value === "select") {
          domiciliations();
        }
      }
    );
    return (_ctx, _push, _parent, _attrs) => {
      const _component_navbar_auth_nav = __nuxt_component_0;
      const _component_gadget_banner = __nuxt_component_1;
      const _component_gadget_image_blur = __nuxt_component_2;
      const _component_Stepper = script;
      const _component_StepList = script$1;
      const _component_Step = script$2;
      const _component_table_transfert_step = __nuxt_component_3;
      const _component_Divider = script$3;
      const _component_StepPanels = script$4;
      const _component_StepPanel = script$5;
      const _component_input_select = __nuxt_component_9;
      const _component_input_error_msg = __nuxt_component_4;
      const _component_input_custom_number = __nuxt_component_8$1;
      const _component_Accordion = script$6;
      const _component_AccordionPanel = script$7;
      const _component_AccordionContent = script$8;
      const _component_Select = script$9;
      const _component_input_date_picker = __nuxt_component_7;
      const _component_input_radio = __nuxt_component_8;
      const _component_input_bg_normal = __nuxt_component_6;
      const _component_Textarea = script$a;
      const _component_input_toggle = __nuxt_component_10;
      const _component_button_primary = __nuxt_component_1$1;
      const _component_input_file_upload = __nuxt_component_10$1;
      const _component_Button = script$b;
      const _component_button_secondary = __nuxt_component_13;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "pb-5 text-text-primary space-y-5" }, _attrs))}>`);
      _push(ssrRenderComponent(_component_navbar_auth_nav, {
        title: _ctx.$t("menu.transfer.new")
      }, null, _parent));
      _push(ssrRenderComponent(_component_gadget_banner, null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="grid grid-cols-[auto_1fr] h-full"${_scopeId}><div class="grid justify-center ml-2 text-sm text-white lg:text-base"${_scopeId}><div class="ml-5 translate-y-8"${_scopeId}><h3 class="font-semibold"${_scopeId}>${ssrInterpolate(_ctx.$t("page.transfer.new.title1"))}</h3><h4 class="text-xs"${_scopeId}>${ssrInterpolate(_ctx.$t("page.transfer.new.title2"))}</h4></div></div><div class="flex justify-end"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_gadget_image_blur, null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<img${ssrRenderAttr("src", _imports_0)} class="z-30 object-cover object-center w-auto h-22" alt="Bank Logo"${_scopeId2}>`);
                } else {
                  return [
                    createVNode("img", {
                      src: _imports_0,
                      class: "z-30 object-cover object-center w-auto h-22",
                      alt: "Bank Logo"
                    })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div></div>`);
          } else {
            return [
              createVNode("div", { class: "grid grid-cols-[auto_1fr] h-full" }, [
                createVNode("div", { class: "grid justify-center ml-2 text-sm text-white lg:text-base" }, [
                  createVNode("div", { class: "ml-5 translate-y-8" }, [
                    createVNode("h3", { class: "font-semibold" }, toDisplayString(_ctx.$t("page.transfer.new.title1")), 1),
                    createVNode("h4", { class: "text-xs" }, toDisplayString(_ctx.$t("page.transfer.new.title2")), 1)
                  ])
                ]),
                createVNode("div", { class: "flex justify-end" }, [
                  createVNode(_component_gadget_image_blur, null, {
                    default: withCtx(() => [
                      createVNode("img", {
                        src: _imports_0,
                        class: "z-30 object-cover object-center w-auto h-22",
                        alt: "Bank Logo"
                      })
                    ]),
                    _: 1
                  })
                ])
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<form>`);
      _push(ssrRenderComponent(_component_Stepper, {
        value: unref(activeStep),
        "onUpdate:value": ($event) => isRef(activeStep) ? activeStep.value = $event : null,
        linear: ""
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_StepList, null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_Step, {
                    asChild: "",
                    value: 1
                  }, {
                    default: withCtx(({ activateCallback, value, a11yAttrs }, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<div${ssrRenderAttrs(mergeProps({ class: "flex flex-row flex-auto gap-2" }, a11yAttrs.root))}${_scopeId3}>`);
                        _push4(ssrRenderComponent(_component_table_transfert_step, mergeProps({
                          value,
                          activeStep: unref(activeStep),
                          activateCallback,
                          icon: "pi pi-user"
                        }, a11yAttrs.header), null, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(_component_Divider, null, null, _parent4, _scopeId3));
                        _push4(`</div>`);
                      } else {
                        return [
                          createVNode("div", mergeProps({ class: "flex flex-row flex-auto gap-2" }, a11yAttrs.root), [
                            createVNode(_component_table_transfert_step, mergeProps({
                              value,
                              activeStep: unref(activeStep),
                              activateCallback,
                              icon: "pi pi-user"
                            }, a11yAttrs.header), null, 16, ["value", "activeStep", "activateCallback"]),
                            createVNode(_component_Divider)
                          ], 16)
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_Step, {
                    asChild: "",
                    value: 2
                  }, {
                    default: withCtx(({ activateCallback, value, a11yAttrs }, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<div${ssrRenderAttrs(mergeProps({ class: "flex flex-row flex-auto gap-2 pl-2" }, a11yAttrs.root))}${_scopeId3}>`);
                        _push4(ssrRenderComponent(_component_table_transfert_step, mergeProps({
                          value,
                          activeStep: unref(activeStep),
                          activateCallback,
                          icon: "pi pi-upload"
                        }, a11yAttrs.header), null, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(_component_Divider, null, null, _parent4, _scopeId3));
                        _push4(`</div>`);
                      } else {
                        return [
                          createVNode("div", mergeProps({ class: "flex flex-row flex-auto gap-2 pl-2" }, a11yAttrs.root), [
                            createVNode(_component_table_transfert_step, mergeProps({
                              value,
                              activeStep: unref(activeStep),
                              activateCallback,
                              icon: "pi pi-upload"
                            }, a11yAttrs.header), null, 16, ["value", "activeStep", "activateCallback"]),
                            createVNode(_component_Divider)
                          ], 16)
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_Step, {
                    asChild: "",
                    value: 3
                  }, {
                    default: withCtx(({ activateCallback, value, a11yAttrs }, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<div${ssrRenderAttrs(mergeProps({ class: "flex flex-row pl-2" }, a11yAttrs.root))}${_scopeId3}>`);
                        _push4(ssrRenderComponent(_component_table_transfert_step, mergeProps({
                          value,
                          activeStep: unref(activeStep),
                          activateCallback,
                          icon: "pi pi-book"
                        }, a11yAttrs.header), null, _parent4, _scopeId3));
                        _push4(`</div>`);
                      } else {
                        return [
                          createVNode("div", mergeProps({ class: "flex flex-row pl-2" }, a11yAttrs.root), [
                            createVNode(_component_table_transfert_step, mergeProps({
                              value,
                              activeStep: unref(activeStep),
                              activateCallback,
                              icon: "pi pi-book"
                            }, a11yAttrs.header), null, 16, ["value", "activeStep", "activateCallback"])
                          ], 16)
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_Step, {
                      asChild: "",
                      value: 1
                    }, {
                      default: withCtx(({ activateCallback, value, a11yAttrs }) => [
                        createVNode("div", mergeProps({ class: "flex flex-row flex-auto gap-2" }, a11yAttrs.root), [
                          createVNode(_component_table_transfert_step, mergeProps({
                            value,
                            activeStep: unref(activeStep),
                            activateCallback,
                            icon: "pi pi-user"
                          }, a11yAttrs.header), null, 16, ["value", "activeStep", "activateCallback"]),
                          createVNode(_component_Divider)
                        ], 16)
                      ]),
                      _: 1
                    }),
                    createVNode(_component_Step, {
                      asChild: "",
                      value: 2
                    }, {
                      default: withCtx(({ activateCallback, value, a11yAttrs }) => [
                        createVNode("div", mergeProps({ class: "flex flex-row flex-auto gap-2 pl-2" }, a11yAttrs.root), [
                          createVNode(_component_table_transfert_step, mergeProps({
                            value,
                            activeStep: unref(activeStep),
                            activateCallback,
                            icon: "pi pi-upload"
                          }, a11yAttrs.header), null, 16, ["value", "activeStep", "activateCallback"]),
                          createVNode(_component_Divider)
                        ], 16)
                      ]),
                      _: 1
                    }),
                    createVNode(_component_Step, {
                      asChild: "",
                      value: 3
                    }, {
                      default: withCtx(({ activateCallback, value, a11yAttrs }) => [
                        createVNode("div", mergeProps({ class: "flex flex-row pl-2" }, a11yAttrs.root), [
                          createVNode(_component_table_transfert_step, mergeProps({
                            value,
                            activeStep: unref(activeStep),
                            activateCallback,
                            icon: "pi pi-book"
                          }, a11yAttrs.header), null, 16, ["value", "activeStep", "activateCallback"])
                        ], 16)
                      ]),
                      _: 1
                    })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_StepPanels, null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_StepPanel, { value: 1 }, {
                    default: withCtx(({ activateCallback }, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<div class="grid grid-cols-2 gap-3"${_scopeId3}><div${_scopeId3}><label for="type" class="text-xs text-text-secondary"${_scopeId3}>${ssrInterpolate(_ctx.$t("page.transfer.new.type"))} <span class="text-white font-semibold text-xxs bg-status-error rounded px-1"${_scopeId3}>${ssrInterpolate(_ctx.$t("page.required"))}</span></label>`);
                        _push4(ssrRenderComponent(_component_input_select, {
                          name: "type",
                          modelValue: unref(form).type,
                          "onUpdate:modelValue": [($event) => unref(form).type = $event, (e2) => setTypeByCategory(e2)],
                          options: unref(transferTypeList).category,
                          loading: unref(isTransferTypeLoading),
                          "value-key": null,
                          filter: "",
                          placeholder: "Choose a transfer type"
                        }, null, _parent4, _scopeId3));
                        if (unref(validErrorMsg).type.trim().length > 0) {
                          _push4(ssrRenderComponent(_component_input_error_msg, {
                            label: unref(validErrorMsg).type
                          }, null, _parent4, _scopeId3));
                        } else {
                          _push4(`<!---->`);
                        }
                        _push4(`</div><div${_scopeId3}><label for="motive" class="text-xs text-text-secondary"${_scopeId3}>${ssrInterpolate(_ctx.$t("page.transfer.new.motive"))} <span class="text-white font-semibold text-xxs bg-status-error rounded px-1"${_scopeId3}>${ssrInterpolate(_ctx.$t("page.required"))}</span></label>`);
                        _push4(ssrRenderComponent(_component_input_select, {
                          name: "motive",
                          modelValue: unref(form).motive,
                          "onUpdate:modelValue": ($event) => unref(form).motive = $event,
                          options: unref(filteredTransferTypeList),
                          loading: unref(isTransferTypeLoading),
                          "value-key": null,
                          filter: "",
                          placeholder: "Choose a transfer motive"
                        }, null, _parent4, _scopeId3));
                        if (unref(validErrorMsg).type.trim().length > 0) {
                          _push4(ssrRenderComponent(_component_input_error_msg, {
                            label: unref(validErrorMsg).type
                          }, null, _parent4, _scopeId3));
                        } else {
                          _push4(`<!---->`);
                        }
                        _push4(`</div><div${_scopeId3}><label for="amount" class="text-xs text-text-secondary"${_scopeId3}>${ssrInterpolate(_ctx.$t("page.transfer.new.amount"))} <span class="text-white font-semibold text-xxs bg-status-error rounded px-1"${_scopeId3}>${ssrInterpolate(_ctx.$t("page.required"))}</span></label>`);
                        _push4(ssrRenderComponent(_component_input_custom_number, {
                          modelValue: unref(form).amount,
                          "onUpdate:modelValue": ($event) => unref(form).amount = $event,
                          identifier: "amount",
                          "max-fraction-digits": 3,
                          placeholder: "0.000",
                          autocomplete: "off",
                          onInput: (e2) => convertCurrency(e2.value),
                          onBlur: canOpenDomAccordion
                        }, null, _parent4, _scopeId3));
                        if (unref(validErrorMsg).amount.trim().length > 0) {
                          _push4(ssrRenderComponent(_component_input_error_msg, {
                            label: unref(validErrorMsg).amount
                          }, null, _parent4, _scopeId3));
                        } else {
                          _push4(`<!---->`);
                        }
                        _push4(`</div><div${_scopeId3}><label for="currency" class="text-xs text-text-secondary"${_scopeId3}>${ssrInterpolate(_ctx.$t("page.transfer.new.currency"))} <span class="text-white font-semibold text-xxs bg-status-error rounded px-1"${_scopeId3}>${ssrInterpolate(_ctx.$t("page.required"))}</span></label>`);
                        _push4(ssrRenderComponent(_component_input_select, {
                          modelValue: unref(form).currency,
                          "onUpdate:modelValue": [($event) => unref(form).currency = $event, setChosenCurrentRate],
                          options: unref(currencyList),
                          loading: unref(isTransferSettingLoading),
                          filter: "",
                          placeholder: "Choose an currency"
                        }, null, _parent4, _scopeId3));
                        if (unref(validErrorMsg).currency.trim().length > 0) {
                          _push4(ssrRenderComponent(_component_input_error_msg, {
                            label: unref(validErrorMsg).currency
                          }, null, _parent4, _scopeId3));
                        } else {
                          _push4(`<!---->`);
                        }
                        _push4(`</div>`);
                        _push4(ssrRenderComponent(_component_Accordion, {
                          value: unref(showAmountConversion),
                          "onUpdate:value": ($event) => isRef(showAmountConversion) ? showAmountConversion.value = $event : null,
                          class: "col-span-2"
                        }, {
                          default: withCtx((_3, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(_component_AccordionPanel, { value: "0" }, {
                                default: withCtx((_4, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(ssrRenderComponent(_component_AccordionContent, { "pt:content:style": "padding: 0 !important" }, {
                                      default: withCtx((_5, _push7, _parent7, _scopeId6) => {
                                        if (_push7) {
                                          _push7(`<ul class="m-0 py-3 bg-bg-secondary px-2"${_scopeId6}><li class="flex items-center justify-between"${_scopeId6}><p${_scopeId6}>${ssrInterpolate(_ctx.$t("page.transfer.new.rate"))}:</p><p${_scopeId6}> 1 ${ssrInterpolate(unref(chosenRate)?.initCode)} = ${ssrInterpolate(unref(chosenRate)?.value)} ${ssrInterpolate(unref(chosenRate)?.finalCode)}</p></li><li class="flex items-center justify-between"${_scopeId6}><p${_scopeId6}>${ssrInterpolate(_ctx.$t("page.transfer.new.total_amount"))}:</p><p${_scopeId6}>${ssrInterpolate(Intl.NumberFormat("en-US").format(unref(convertedAmount)))} ${ssrInterpolate(unref(chosenRate)?.finalCode)}</p></li></ul>`);
                                        } else {
                                          return [
                                            createVNode("ul", { class: "m-0 py-3 bg-bg-secondary px-2" }, [
                                              createVNode("li", { class: "flex items-center justify-between" }, [
                                                createVNode("p", null, toDisplayString(_ctx.$t("page.transfer.new.rate")) + ":", 1),
                                                createVNode("p", null, " 1 " + toDisplayString(unref(chosenRate)?.initCode) + " = " + toDisplayString(unref(chosenRate)?.value) + " " + toDisplayString(unref(chosenRate)?.finalCode), 1)
                                              ]),
                                              createVNode("li", { class: "flex items-center justify-between" }, [
                                                createVNode("p", null, toDisplayString(_ctx.$t("page.transfer.new.total_amount")) + ":", 1),
                                                createVNode("p", null, toDisplayString(Intl.NumberFormat("en-US").format(unref(convertedAmount))) + " " + toDisplayString(unref(chosenRate)?.finalCode), 1)
                                              ])
                                            ])
                                          ];
                                        }
                                      }),
                                      _: 2
                                    }, _parent6, _scopeId5));
                                  } else {
                                    return [
                                      createVNode(_component_AccordionContent, { "pt:content:style": "padding: 0 !important" }, {
                                        default: withCtx(() => [
                                          createVNode("ul", { class: "m-0 py-3 bg-bg-secondary px-2" }, [
                                            createVNode("li", { class: "flex items-center justify-between" }, [
                                              createVNode("p", null, toDisplayString(_ctx.$t("page.transfer.new.rate")) + ":", 1),
                                              createVNode("p", null, " 1 " + toDisplayString(unref(chosenRate)?.initCode) + " = " + toDisplayString(unref(chosenRate)?.value) + " " + toDisplayString(unref(chosenRate)?.finalCode), 1)
                                            ]),
                                            createVNode("li", { class: "flex items-center justify-between" }, [
                                              createVNode("p", null, toDisplayString(_ctx.$t("page.transfer.new.total_amount")) + ":", 1),
                                              createVNode("p", null, toDisplayString(Intl.NumberFormat("en-US").format(unref(convertedAmount))) + " " + toDisplayString(unref(chosenRate)?.finalCode), 1)
                                            ])
                                          ])
                                        ]),
                                        _: 1
                                      })
                                    ];
                                  }
                                }),
                                _: 2
                              }, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(_component_AccordionPanel, { value: "0" }, {
                                  default: withCtx(() => [
                                    createVNode(_component_AccordionContent, { "pt:content:style": "padding: 0 !important" }, {
                                      default: withCtx(() => [
                                        createVNode("ul", { class: "m-0 py-3 bg-bg-secondary px-2" }, [
                                          createVNode("li", { class: "flex items-center justify-between" }, [
                                            createVNode("p", null, toDisplayString(_ctx.$t("page.transfer.new.rate")) + ":", 1),
                                            createVNode("p", null, " 1 " + toDisplayString(unref(chosenRate)?.initCode) + " = " + toDisplayString(unref(chosenRate)?.value) + " " + toDisplayString(unref(chosenRate)?.finalCode), 1)
                                          ]),
                                          createVNode("li", { class: "flex items-center justify-between" }, [
                                            createVNode("p", null, toDisplayString(_ctx.$t("page.transfer.new.total_amount")) + ":", 1),
                                            createVNode("p", null, toDisplayString(Intl.NumberFormat("en-US").format(unref(convertedAmount))) + " " + toDisplayString(unref(chosenRate)?.finalCode), 1)
                                          ])
                                        ])
                                      ]),
                                      _: 1
                                    })
                                  ]),
                                  _: 1
                                })
                              ];
                            }
                          }),
                          _: 2
                        }, _parent4, _scopeId3));
                        _push4(`<div${_scopeId3}><label for="account" class="text-xs text-text-secondary"${_scopeId3}>${ssrInterpolate(_ctx.$t("page.transfer.new.account_num"))} <span class="text-white font-semibold text-xxs bg-status-error rounded px-1"${_scopeId3}>${ssrInterpolate(_ctx.$t("page.required"))}</span></label>`);
                        _push4(ssrRenderComponent(_component_Select, {
                          modelValue: unref(form).account,
                          "onUpdate:modelValue": [($event) => unref(form).account = $event, (e2) => unref(form).account = e2],
                          options: unref(bankStore).accounts,
                          loading: unref(isTransferSettingLoading),
                          placeholder: _ctx.$t("placeholder.select_account"),
                          pt: unref(selectInputPt)
                        }, {
                          value: withCtx((slotProps, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              if (slotProps.value) {
                                _push5(`<div${_scopeId4}><span class="text-sm"${_scopeId4}>${ssrInterpolate(slotProps.value.iBan)} - </span><span class="text-sm"${_scopeId4}>${ssrInterpolate(slotProps.value.accType)}</span></div>`);
                              } else {
                                _push5(`<span${_scopeId4}>${ssrInterpolate(slotProps.placeholder)}</span>`);
                              }
                            } else {
                              return [
                                slotProps.value ? (openBlock(), createBlock("div", { key: 0 }, [
                                  createVNode("span", { class: "text-sm" }, toDisplayString(slotProps.value.iBan) + " - ", 1),
                                  createVNode("span", { class: "text-sm" }, toDisplayString(slotProps.value.accType), 1)
                                ])) : (openBlock(), createBlock("span", { key: 1 }, toDisplayString(slotProps.placeholder), 1))
                              ];
                            }
                          }),
                          option: withCtx((slotProps, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`<div class="flex items-center gap-2"${_scopeId4}>`);
                              if (slotProps.option) {
                                _push5(`<i class="pi pi-building-columns" style="${ssrRenderStyle({ "font-size": "1.3rem" })}"${_scopeId4}></i>`);
                              } else {
                                _push5(`<!---->`);
                              }
                              _push5(`<div${_scopeId4}><p class="text-sm"${_scopeId4}>${ssrInterpolate(slotProps.option.iBan)}</p><div class="text-xs"${_scopeId4}><span${_scopeId4}>${ssrInterpolate(slotProps.option.agency)} - </span><span${_scopeId4}>${ssrInterpolate(slotProps.option.accType)}</span></div></div></div>`);
                            } else {
                              return [
                                createVNode("div", { class: "flex items-center gap-2" }, [
                                  slotProps.option ? (openBlock(), createBlock("i", {
                                    key: 0,
                                    class: "pi pi-building-columns",
                                    style: { "font-size": "1.3rem" }
                                  })) : createCommentVNode("", true),
                                  createVNode("div", null, [
                                    createVNode("p", { class: "text-sm" }, toDisplayString(slotProps.option.iBan), 1),
                                    createVNode("div", { class: "text-xs" }, [
                                      createVNode("span", null, toDisplayString(slotProps.option.agency) + " - ", 1),
                                      createVNode("span", null, toDisplayString(slotProps.option.accType), 1)
                                    ])
                                  ])
                                ])
                              ];
                            }
                          }),
                          _: 2
                        }, _parent4, _scopeId3));
                        if (unref(validErrorMsg).account.trim().length > 0) {
                          _push4(ssrRenderComponent(_component_input_error_msg, {
                            label: unref(validErrorMsg).account
                          }, null, _parent4, _scopeId3));
                        } else {
                          _push4(`<!---->`);
                        }
                        _push4(`</div><div${_scopeId3}><label for="targetDate" class="text-xs text-text-secondary"${_scopeId3}>${ssrInterpolate(_ctx.$t("page.transfer.new.target_date"))}</label>`);
                        _push4(ssrRenderComponent(_component_input_date_picker, {
                          modelValue: unref(form).targetDate,
                          "onUpdate:modelValue": ($event) => unref(form).targetDate = $event,
                          showIcon: "",
                          fluid: "",
                          "icon-display": "input",
                          "min-date": /* @__PURE__ */ new Date()
                        }, null, _parent4, _scopeId3));
                        if (unref(validErrorMsg).targetDate.trim().length > 0) {
                          _push4(ssrRenderComponent(_component_input_error_msg, {
                            label: unref(validErrorMsg).targetDate
                          }, null, _parent4, _scopeId3));
                        } else {
                          _push4(`<!---->`);
                        }
                        _push4(`</div><div${_scopeId3}><label for="beneficiary" class="text-xs text-text-secondary"${_scopeId3}>${ssrInterpolate(_ctx.$t("page.transfer.new.beneficiary"))} <span class="text-white font-semibold text-xxs bg-status-error rounded px-1"${_scopeId3}>${ssrInterpolate(_ctx.$t("page.required"))}</span></label>`);
                        _push4(ssrRenderComponent(_component_Select, {
                          modelValue: unref(form).beneficiary,
                          "onUpdate:modelValue": [($event) => unref(form).beneficiary = $event, (e2) => unref(form).beneficiary = e2],
                          options: unref(beneficiaryList),
                          loading: unref(isTransferBenefLoading),
                          placeholder: _ctx.$t("placeholder.select_beneficiary"),
                          pt: unref(selectInputPt)
                        }, {
                          value: withCtx((slotProps, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              if (slotProps.value) {
                                _push5(`<div${_scopeId4}><span class="text-sm"${_scopeId4}>${ssrInterpolate(slotProps.value.fullName)} - </span><span class="text-sm"${_scopeId4}>${ssrInterpolate(("sliceIban" in _ctx ? _ctx.sliceIban : unref(sliceIban))(slotProps.value.iban))}</span></div>`);
                              } else {
                                _push5(`<span${_scopeId4}>${ssrInterpolate(slotProps.placeholder)}</span>`);
                              }
                            } else {
                              return [
                                slotProps.value ? (openBlock(), createBlock("div", { key: 0 }, [
                                  createVNode("span", { class: "text-sm" }, toDisplayString(slotProps.value.fullName) + " - ", 1),
                                  createVNode("span", { class: "text-sm" }, toDisplayString(("sliceIban" in _ctx ? _ctx.sliceIban : unref(sliceIban))(slotProps.value.iban)), 1)
                                ])) : (openBlock(), createBlock("span", { key: 1 }, toDisplayString(slotProps.placeholder), 1))
                              ];
                            }
                          }),
                          option: withCtx((slotProps, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`<div class="flex items-center gap-2"${_scopeId4}>`);
                              if (slotProps.option) {
                                _push5(`<i class="pi pi-building-columns" style="${ssrRenderStyle({ "font-size": "1.3rem" })}"${_scopeId4}></i>`);
                              } else {
                                _push5(`<!---->`);
                              }
                              _push5(`<div${_scopeId4}><p class="text-sm"${_scopeId4}>${ssrInterpolate(slotProps.option.fullName)}</p><p class="text-xs"${_scopeId4}>${ssrInterpolate(slotProps.option.iban)}</p></div></div>`);
                            } else {
                              return [
                                createVNode("div", { class: "flex items-center gap-2" }, [
                                  slotProps.option ? (openBlock(), createBlock("i", {
                                    key: 0,
                                    class: "pi pi-building-columns",
                                    style: { "font-size": "1.3rem" }
                                  })) : createCommentVNode("", true),
                                  createVNode("div", null, [
                                    createVNode("p", { class: "text-sm" }, toDisplayString(slotProps.option.fullName), 1),
                                    createVNode("p", { class: "text-xs" }, toDisplayString(slotProps.option.iban), 1)
                                  ])
                                ])
                              ];
                            }
                          }),
                          _: 2
                        }, _parent4, _scopeId3));
                        if (unref(validErrorMsg).beneficiary.trim().length > 0) {
                          _push4(ssrRenderComponent(_component_input_error_msg, {
                            label: unref(validErrorMsg).beneficiary
                          }, null, _parent4, _scopeId3));
                        } else {
                          _push4(`<!---->`);
                        }
                        _push4(`</div>`);
                        _push4(ssrRenderComponent(_component_Accordion, {
                          value: unref(openDomTypeForm),
                          "onUpdate:value": ($event) => isRef(openDomTypeForm) ? openDomTypeForm.value = $event : null,
                          class: "col-span-2"
                        }, {
                          default: withCtx((_3, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(_component_AccordionPanel, { value: "0" }, {
                                default: withCtx((_4, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(ssrRenderComponent(_component_AccordionContent, { "pt:content:style": "padding: 0 !important;" }, {
                                      default: withCtx((_5, _push7, _parent7, _scopeId6) => {
                                        if (_push7) {
                                          _push7(`<p class="text-xs text-text-secondary mb-0.5"${_scopeId6}>${ssrInterpolate(_ctx.$t("page.transfer.new.domiciliation"))} <span class="text-white font-semibold text-xxs bg-status-error rounded px-1"${_scopeId6}>${ssrInterpolate(_ctx.$t("page.required"))}</span></p><ul class="grid grid-cols-3 gap-3"${_scopeId6}><li class="${ssrRenderClass([
                                            "flex items-center text-sm gap-2 py-2.5 px-4 rounded-md cursor-pointer border transition-colors ease-linear duration-200",
                                            {
                                              "border-accent bg-accent-muted": unref(chosenOption) === "create",
                                              "border-primary-light hover:bg-bg-secondary": unref(chosenOption) !== "create"
                                            }
                                          ])}"${_scopeId6}>`);
                                          _push7(ssrRenderComponent(_component_input_radio, {
                                            modelValue: unref(chosenOption),
                                            "onUpdate:modelValue": ($event) => isRef(chosenOption) ? chosenOption.value = $event : null,
                                            inputId: "create",
                                            name: "fee",
                                            value: "create",
                                            size: "small"
                                          }, null, _parent7, _scopeId6));
                                          _push7(`<div${_scopeId6}><label for="create" class="font-semibold uppercase"${_scopeId6}>${ssrInterpolate(_ctx.$t("page.transfer.new.dom_options.create.title"))}</label><p class="text-xs text-text-secondary"${_scopeId6}>${ssrInterpolate(_ctx.$t(
                                            "page.transfer.new.dom_options.create.description"
                                          ))}</p></div></li><li class="${ssrRenderClass([
                                            "flex items-center text-sm gap-2 py-2.5 px-4 rounded-md cursor-pointer border transition-colors ease-linear duration-200",
                                            {
                                              "border-accent bg-accent-muted": unref(chosenOption) === "select",
                                              "border-primary-light hover:bg-bg-secondary": unref(chosenOption) !== "select"
                                            }
                                          ])}"${_scopeId6}>`);
                                          _push7(ssrRenderComponent(_component_input_radio, {
                                            modelValue: unref(chosenOption),
                                            "onUpdate:modelValue": ($event) => isRef(chosenOption) ? chosenOption.value = $event : null,
                                            inputId: "select",
                                            name: "fee",
                                            value: "select",
                                            size: "small"
                                          }, null, _parent7, _scopeId6));
                                          _push7(`<div${_scopeId6}><label for="select" class="font-semibold uppercase"${_scopeId6}>${ssrInterpolate(_ctx.$t("page.transfer.new.dom_options.select.title"))}</label><p class="text-xs text-text-secondary"${_scopeId6}>${ssrInterpolate(_ctx.$t(
                                            "page.transfer.new.dom_options.select.description"
                                          ))}</p></div></li><li class="${ssrRenderClass([
                                            "flex items-center text-sm gap-2 py-2.5 px-4 rounded-md cursor-pointer border transition-colors ease-linear duration-200",
                                            {
                                              "border-accent bg-accent-muted": unref(chosenOption) === "done",
                                              "border-primary-light hover:bg-bg-secondary": unref(chosenOption) !== "done"
                                            }
                                          ])}"${_scopeId6}>`);
                                          _push7(ssrRenderComponent(_component_input_radio, {
                                            modelValue: unref(chosenOption),
                                            "onUpdate:modelValue": ($event) => isRef(chosenOption) ? chosenOption.value = $event : null,
                                            inputId: "done",
                                            name: "fee",
                                            value: "done",
                                            size: "small"
                                          }, null, _parent7, _scopeId6));
                                          _push7(`<div${_scopeId6}><label for="done" class="font-semibold uppercase"${_scopeId6}>${ssrInterpolate(_ctx.$t("page.transfer.new.dom_options.done.title"))}</label><p class="text-xs text-text-secondary"${_scopeId6}>${ssrInterpolate(_ctx.$t(
                                            "page.transfer.new.dom_options.done.description"
                                          ))}</p></div></li></ul>`);
                                        } else {
                                          return [
                                            createVNode("p", { class: "text-xs text-text-secondary mb-0.5" }, [
                                              createTextVNode(toDisplayString(_ctx.$t("page.transfer.new.domiciliation")) + " ", 1),
                                              createVNode("span", { class: "text-white font-semibold text-xxs bg-status-error rounded px-1" }, toDisplayString(_ctx.$t("page.required")), 1)
                                            ]),
                                            createVNode("ul", { class: "grid grid-cols-3 gap-3" }, [
                                              createVNode("li", {
                                                class: [
                                                  "flex items-center text-sm gap-2 py-2.5 px-4 rounded-md cursor-pointer border transition-colors ease-linear duration-200",
                                                  {
                                                    "border-accent bg-accent-muted": unref(chosenOption) === "create",
                                                    "border-primary-light hover:bg-bg-secondary": unref(chosenOption) !== "create"
                                                  }
                                                ],
                                                onClick: withModifiers(($event) => toggleDomExtraForm("create"), ["prevent"])
                                              }, [
                                                createVNode(_component_input_radio, {
                                                  modelValue: unref(chosenOption),
                                                  "onUpdate:modelValue": ($event) => isRef(chosenOption) ? chosenOption.value = $event : null,
                                                  inputId: "create",
                                                  name: "fee",
                                                  value: "create",
                                                  size: "small"
                                                }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                                createVNode("div", null, [
                                                  createVNode("label", {
                                                    for: "create",
                                                    class: "font-semibold uppercase"
                                                  }, toDisplayString(_ctx.$t("page.transfer.new.dom_options.create.title")), 1),
                                                  createVNode("p", { class: "text-xs text-text-secondary" }, toDisplayString(_ctx.$t(
                                                    "page.transfer.new.dom_options.create.description"
                                                  )), 1)
                                                ])
                                              ], 10, ["onClick"]),
                                              createVNode("li", {
                                                class: [
                                                  "flex items-center text-sm gap-2 py-2.5 px-4 rounded-md cursor-pointer border transition-colors ease-linear duration-200",
                                                  {
                                                    "border-accent bg-accent-muted": unref(chosenOption) === "select",
                                                    "border-primary-light hover:bg-bg-secondary": unref(chosenOption) !== "select"
                                                  }
                                                ],
                                                onClick: withModifiers(($event) => toggleDomExtraForm("select"), ["prevent"])
                                              }, [
                                                createVNode(_component_input_radio, {
                                                  modelValue: unref(chosenOption),
                                                  "onUpdate:modelValue": ($event) => isRef(chosenOption) ? chosenOption.value = $event : null,
                                                  inputId: "select",
                                                  name: "fee",
                                                  value: "select",
                                                  size: "small"
                                                }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                                createVNode("div", null, [
                                                  createVNode("label", {
                                                    for: "select",
                                                    class: "font-semibold uppercase"
                                                  }, toDisplayString(_ctx.$t("page.transfer.new.dom_options.select.title")), 1),
                                                  createVNode("p", { class: "text-xs text-text-secondary" }, toDisplayString(_ctx.$t(
                                                    "page.transfer.new.dom_options.select.description"
                                                  )), 1)
                                                ])
                                              ], 10, ["onClick"]),
                                              createVNode("li", {
                                                class: [
                                                  "flex items-center text-sm gap-2 py-2.5 px-4 rounded-md cursor-pointer border transition-colors ease-linear duration-200",
                                                  {
                                                    "border-accent bg-accent-muted": unref(chosenOption) === "done",
                                                    "border-primary-light hover:bg-bg-secondary": unref(chosenOption) !== "done"
                                                  }
                                                ],
                                                onClick: withModifiers(($event) => toggleDomExtraForm("done"), ["prevent"])
                                              }, [
                                                createVNode(_component_input_radio, {
                                                  modelValue: unref(chosenOption),
                                                  "onUpdate:modelValue": ($event) => isRef(chosenOption) ? chosenOption.value = $event : null,
                                                  inputId: "done",
                                                  name: "fee",
                                                  value: "done",
                                                  size: "small"
                                                }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                                createVNode("div", null, [
                                                  createVNode("label", {
                                                    for: "done",
                                                    class: "font-semibold uppercase"
                                                  }, toDisplayString(_ctx.$t("page.transfer.new.dom_options.done.title")), 1),
                                                  createVNode("p", { class: "text-xs text-text-secondary" }, toDisplayString(_ctx.$t(
                                                    "page.transfer.new.dom_options.done.description"
                                                  )), 1)
                                                ])
                                              ], 10, ["onClick"])
                                            ])
                                          ];
                                        }
                                      }),
                                      _: 2
                                    }, _parent6, _scopeId5));
                                  } else {
                                    return [
                                      createVNode(_component_AccordionContent, { "pt:content:style": "padding: 0 !important;" }, {
                                        default: withCtx(() => [
                                          createVNode("p", { class: "text-xs text-text-secondary mb-0.5" }, [
                                            createTextVNode(toDisplayString(_ctx.$t("page.transfer.new.domiciliation")) + " ", 1),
                                            createVNode("span", { class: "text-white font-semibold text-xxs bg-status-error rounded px-1" }, toDisplayString(_ctx.$t("page.required")), 1)
                                          ]),
                                          createVNode("ul", { class: "grid grid-cols-3 gap-3" }, [
                                            createVNode("li", {
                                              class: [
                                                "flex items-center text-sm gap-2 py-2.5 px-4 rounded-md cursor-pointer border transition-colors ease-linear duration-200",
                                                {
                                                  "border-accent bg-accent-muted": unref(chosenOption) === "create",
                                                  "border-primary-light hover:bg-bg-secondary": unref(chosenOption) !== "create"
                                                }
                                              ],
                                              onClick: withModifiers(($event) => toggleDomExtraForm("create"), ["prevent"])
                                            }, [
                                              createVNode(_component_input_radio, {
                                                modelValue: unref(chosenOption),
                                                "onUpdate:modelValue": ($event) => isRef(chosenOption) ? chosenOption.value = $event : null,
                                                inputId: "create",
                                                name: "fee",
                                                value: "create",
                                                size: "small"
                                              }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                              createVNode("div", null, [
                                                createVNode("label", {
                                                  for: "create",
                                                  class: "font-semibold uppercase"
                                                }, toDisplayString(_ctx.$t("page.transfer.new.dom_options.create.title")), 1),
                                                createVNode("p", { class: "text-xs text-text-secondary" }, toDisplayString(_ctx.$t(
                                                  "page.transfer.new.dom_options.create.description"
                                                )), 1)
                                              ])
                                            ], 10, ["onClick"]),
                                            createVNode("li", {
                                              class: [
                                                "flex items-center text-sm gap-2 py-2.5 px-4 rounded-md cursor-pointer border transition-colors ease-linear duration-200",
                                                {
                                                  "border-accent bg-accent-muted": unref(chosenOption) === "select",
                                                  "border-primary-light hover:bg-bg-secondary": unref(chosenOption) !== "select"
                                                }
                                              ],
                                              onClick: withModifiers(($event) => toggleDomExtraForm("select"), ["prevent"])
                                            }, [
                                              createVNode(_component_input_radio, {
                                                modelValue: unref(chosenOption),
                                                "onUpdate:modelValue": ($event) => isRef(chosenOption) ? chosenOption.value = $event : null,
                                                inputId: "select",
                                                name: "fee",
                                                value: "select",
                                                size: "small"
                                              }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                              createVNode("div", null, [
                                                createVNode("label", {
                                                  for: "select",
                                                  class: "font-semibold uppercase"
                                                }, toDisplayString(_ctx.$t("page.transfer.new.dom_options.select.title")), 1),
                                                createVNode("p", { class: "text-xs text-text-secondary" }, toDisplayString(_ctx.$t(
                                                  "page.transfer.new.dom_options.select.description"
                                                )), 1)
                                              ])
                                            ], 10, ["onClick"]),
                                            createVNode("li", {
                                              class: [
                                                "flex items-center text-sm gap-2 py-2.5 px-4 rounded-md cursor-pointer border transition-colors ease-linear duration-200",
                                                {
                                                  "border-accent bg-accent-muted": unref(chosenOption) === "done",
                                                  "border-primary-light hover:bg-bg-secondary": unref(chosenOption) !== "done"
                                                }
                                              ],
                                              onClick: withModifiers(($event) => toggleDomExtraForm("done"), ["prevent"])
                                            }, [
                                              createVNode(_component_input_radio, {
                                                modelValue: unref(chosenOption),
                                                "onUpdate:modelValue": ($event) => isRef(chosenOption) ? chosenOption.value = $event : null,
                                                inputId: "done",
                                                name: "fee",
                                                value: "done",
                                                size: "small"
                                              }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                              createVNode("div", null, [
                                                createVNode("label", {
                                                  for: "done",
                                                  class: "font-semibold uppercase"
                                                }, toDisplayString(_ctx.$t("page.transfer.new.dom_options.done.title")), 1),
                                                createVNode("p", { class: "text-xs text-text-secondary" }, toDisplayString(_ctx.$t(
                                                  "page.transfer.new.dom_options.done.description"
                                                )), 1)
                                              ])
                                            ], 10, ["onClick"])
                                          ])
                                        ]),
                                        _: 1
                                      })
                                    ];
                                  }
                                }),
                                _: 2
                              }, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(_component_AccordionPanel, { value: "0" }, {
                                  default: withCtx(() => [
                                    createVNode(_component_AccordionContent, { "pt:content:style": "padding: 0 !important;" }, {
                                      default: withCtx(() => [
                                        createVNode("p", { class: "text-xs text-text-secondary mb-0.5" }, [
                                          createTextVNode(toDisplayString(_ctx.$t("page.transfer.new.domiciliation")) + " ", 1),
                                          createVNode("span", { class: "text-white font-semibold text-xxs bg-status-error rounded px-1" }, toDisplayString(_ctx.$t("page.required")), 1)
                                        ]),
                                        createVNode("ul", { class: "grid grid-cols-3 gap-3" }, [
                                          createVNode("li", {
                                            class: [
                                              "flex items-center text-sm gap-2 py-2.5 px-4 rounded-md cursor-pointer border transition-colors ease-linear duration-200",
                                              {
                                                "border-accent bg-accent-muted": unref(chosenOption) === "create",
                                                "border-primary-light hover:bg-bg-secondary": unref(chosenOption) !== "create"
                                              }
                                            ],
                                            onClick: withModifiers(($event) => toggleDomExtraForm("create"), ["prevent"])
                                          }, [
                                            createVNode(_component_input_radio, {
                                              modelValue: unref(chosenOption),
                                              "onUpdate:modelValue": ($event) => isRef(chosenOption) ? chosenOption.value = $event : null,
                                              inputId: "create",
                                              name: "fee",
                                              value: "create",
                                              size: "small"
                                            }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                            createVNode("div", null, [
                                              createVNode("label", {
                                                for: "create",
                                                class: "font-semibold uppercase"
                                              }, toDisplayString(_ctx.$t("page.transfer.new.dom_options.create.title")), 1),
                                              createVNode("p", { class: "text-xs text-text-secondary" }, toDisplayString(_ctx.$t(
                                                "page.transfer.new.dom_options.create.description"
                                              )), 1)
                                            ])
                                          ], 10, ["onClick"]),
                                          createVNode("li", {
                                            class: [
                                              "flex items-center text-sm gap-2 py-2.5 px-4 rounded-md cursor-pointer border transition-colors ease-linear duration-200",
                                              {
                                                "border-accent bg-accent-muted": unref(chosenOption) === "select",
                                                "border-primary-light hover:bg-bg-secondary": unref(chosenOption) !== "select"
                                              }
                                            ],
                                            onClick: withModifiers(($event) => toggleDomExtraForm("select"), ["prevent"])
                                          }, [
                                            createVNode(_component_input_radio, {
                                              modelValue: unref(chosenOption),
                                              "onUpdate:modelValue": ($event) => isRef(chosenOption) ? chosenOption.value = $event : null,
                                              inputId: "select",
                                              name: "fee",
                                              value: "select",
                                              size: "small"
                                            }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                            createVNode("div", null, [
                                              createVNode("label", {
                                                for: "select",
                                                class: "font-semibold uppercase"
                                              }, toDisplayString(_ctx.$t("page.transfer.new.dom_options.select.title")), 1),
                                              createVNode("p", { class: "text-xs text-text-secondary" }, toDisplayString(_ctx.$t(
                                                "page.transfer.new.dom_options.select.description"
                                              )), 1)
                                            ])
                                          ], 10, ["onClick"]),
                                          createVNode("li", {
                                            class: [
                                              "flex items-center text-sm gap-2 py-2.5 px-4 rounded-md cursor-pointer border transition-colors ease-linear duration-200",
                                              {
                                                "border-accent bg-accent-muted": unref(chosenOption) === "done",
                                                "border-primary-light hover:bg-bg-secondary": unref(chosenOption) !== "done"
                                              }
                                            ],
                                            onClick: withModifiers(($event) => toggleDomExtraForm("done"), ["prevent"])
                                          }, [
                                            createVNode(_component_input_radio, {
                                              modelValue: unref(chosenOption),
                                              "onUpdate:modelValue": ($event) => isRef(chosenOption) ? chosenOption.value = $event : null,
                                              inputId: "done",
                                              name: "fee",
                                              value: "done",
                                              size: "small"
                                            }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                            createVNode("div", null, [
                                              createVNode("label", {
                                                for: "done",
                                                class: "font-semibold uppercase"
                                              }, toDisplayString(_ctx.$t("page.transfer.new.dom_options.done.title")), 1),
                                              createVNode("p", { class: "text-xs text-text-secondary" }, toDisplayString(_ctx.$t(
                                                "page.transfer.new.dom_options.done.description"
                                              )), 1)
                                            ])
                                          ], 10, ["onClick"])
                                        ])
                                      ]),
                                      _: 1
                                    })
                                  ]),
                                  _: 1
                                })
                              ];
                            }
                          }),
                          _: 2
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(_component_Accordion, {
                          value: unref(showDomExtraForm),
                          "onUpdate:value": ($event) => isRef(showDomExtraForm) ? showDomExtraForm.value = $event : null,
                          class: "col-span-2"
                        }, {
                          default: withCtx((_3, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(_component_AccordionPanel, { value: "0" }, {
                                default: withCtx((_4, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(ssrRenderComponent(_component_AccordionContent, {
                                      "pt:content:style": "padding: 0 !important; ",
                                      "pt:content:class": "grid grid-cols-2 gap-2"
                                    }, {
                                      default: withCtx((_5, _push7, _parent7, _scopeId6) => {
                                        if (_push7) {
                                          _push7(`<div${_scopeId6}><label for="domNumber" class="text-xs text-text-secondary"${_scopeId6}>${ssrInterpolate(_ctx.$t("page.transfer.new.dom_number"))}</label>`);
                                          _push7(ssrRenderComponent(_component_input_bg_normal, {
                                            modelValue: unref(form).domNumber,
                                            "onUpdate:modelValue": ($event) => unref(form).domNumber = $event,
                                            identifier: "domNumber",
                                            class: "uppercase"
                                          }, null, _parent7, _scopeId6));
                                          if (unref(validErrorMsg).domNumber.trim().length > 0) {
                                            _push7(ssrRenderComponent(_component_input_error_msg, {
                                              label: unref(validErrorMsg).domNumber
                                            }, null, _parent7, _scopeId6));
                                          } else {
                                            _push7(`<!---->`);
                                          }
                                          _push7(`</div><div${_scopeId6}><label for="declareNum" class="text-xs text-text-secondary"${_scopeId6}>${ssrInterpolate(_ctx.$t("page.transfer.new.declare_num"))}</label>`);
                                          _push7(ssrRenderComponent(_component_input_bg_normal, {
                                            modelValue: unref(form).declareNum,
                                            "onUpdate:modelValue": ($event) => unref(form).declareNum = $event,
                                            identifier: "declareNum",
                                            class: "uppercase"
                                          }, null, _parent7, _scopeId6));
                                          if (unref(validErrorMsg).declareNum.trim().length > 0) {
                                            _push7(ssrRenderComponent(_component_input_error_msg, {
                                              label: unref(validErrorMsg).declareNum
                                            }, null, _parent7, _scopeId6));
                                          } else {
                                            _push7(`<!---->`);
                                          }
                                          _push7(`</div>`);
                                        } else {
                                          return [
                                            createVNode("div", null, [
                                              createVNode("label", {
                                                for: "domNumber",
                                                class: "text-xs text-text-secondary"
                                              }, toDisplayString(_ctx.$t("page.transfer.new.dom_number")), 1),
                                              createVNode(_component_input_bg_normal, {
                                                modelValue: unref(form).domNumber,
                                                "onUpdate:modelValue": ($event) => unref(form).domNumber = $event,
                                                identifier: "domNumber",
                                                class: "uppercase"
                                              }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                              unref(validErrorMsg).domNumber.trim().length > 0 ? (openBlock(), createBlock(_component_input_error_msg, {
                                                key: 0,
                                                label: unref(validErrorMsg).domNumber
                                              }, null, 8, ["label"])) : createCommentVNode("", true)
                                            ]),
                                            createVNode("div", null, [
                                              createVNode("label", {
                                                for: "declareNum",
                                                class: "text-xs text-text-secondary"
                                              }, toDisplayString(_ctx.$t("page.transfer.new.declare_num")), 1),
                                              createVNode(_component_input_bg_normal, {
                                                modelValue: unref(form).declareNum,
                                                "onUpdate:modelValue": ($event) => unref(form).declareNum = $event,
                                                identifier: "declareNum",
                                                class: "uppercase"
                                              }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                              unref(validErrorMsg).declareNum.trim().length > 0 ? (openBlock(), createBlock(_component_input_error_msg, {
                                                key: 0,
                                                label: unref(validErrorMsg).declareNum
                                              }, null, 8, ["label"])) : createCommentVNode("", true)
                                            ])
                                          ];
                                        }
                                      }),
                                      _: 2
                                    }, _parent6, _scopeId5));
                                  } else {
                                    return [
                                      createVNode(_component_AccordionContent, {
                                        "pt:content:style": "padding: 0 !important; ",
                                        "pt:content:class": "grid grid-cols-2 gap-2"
                                      }, {
                                        default: withCtx(() => [
                                          createVNode("div", null, [
                                            createVNode("label", {
                                              for: "domNumber",
                                              class: "text-xs text-text-secondary"
                                            }, toDisplayString(_ctx.$t("page.transfer.new.dom_number")), 1),
                                            createVNode(_component_input_bg_normal, {
                                              modelValue: unref(form).domNumber,
                                              "onUpdate:modelValue": ($event) => unref(form).domNumber = $event,
                                              identifier: "domNumber",
                                              class: "uppercase"
                                            }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                            unref(validErrorMsg).domNumber.trim().length > 0 ? (openBlock(), createBlock(_component_input_error_msg, {
                                              key: 0,
                                              label: unref(validErrorMsg).domNumber
                                            }, null, 8, ["label"])) : createCommentVNode("", true)
                                          ]),
                                          createVNode("div", null, [
                                            createVNode("label", {
                                              for: "declareNum",
                                              class: "text-xs text-text-secondary"
                                            }, toDisplayString(_ctx.$t("page.transfer.new.declare_num")), 1),
                                            createVNode(_component_input_bg_normal, {
                                              modelValue: unref(form).declareNum,
                                              "onUpdate:modelValue": ($event) => unref(form).declareNum = $event,
                                              identifier: "declareNum",
                                              class: "uppercase"
                                            }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                            unref(validErrorMsg).declareNum.trim().length > 0 ? (openBlock(), createBlock(_component_input_error_msg, {
                                              key: 0,
                                              label: unref(validErrorMsg).declareNum
                                            }, null, 8, ["label"])) : createCommentVNode("", true)
                                          ])
                                        ]),
                                        _: 1
                                      })
                                    ];
                                  }
                                }),
                                _: 2
                              }, _parent5, _scopeId4));
                              _push5(ssrRenderComponent(_component_AccordionPanel, { value: "1" }, {
                                default: withCtx((_4, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(ssrRenderComponent(_component_AccordionContent, { "pt:content:style": "padding: 0 !important;" }, {
                                      default: withCtx((_5, _push7, _parent7, _scopeId6) => {
                                        if (_push7) {
                                          _push7(`<div${_scopeId6}><label for="domNumber" class="text-xs text-text-secondary mb-0.5"${_scopeId6}>${ssrInterpolate(_ctx.$t("page.transfer.new.domiciliation"))}</label>`);
                                          _push7(ssrRenderComponent(_component_Select, {
                                            modelValue: unref(form).domUnikCode,
                                            "onUpdate:modelValue": [($event) => unref(form).domUnikCode = $event, (e2) => unref(form).domUnikCode = e2],
                                            options: unref(domiciliationList),
                                            loading: unref(isDomLoading),
                                            placeholder: _ctx.$t("placeholder.select_domiciliation"),
                                            pt: unref(selectInputPt)
                                          }, {
                                            value: withCtx((slotProps, _push8, _parent8, _scopeId7) => {
                                              if (_push8) {
                                                if (slotProps.value) {
                                                  _push8(`<div${_scopeId7}><span class="text-sm"${_scopeId7}>${ssrInterpolate(slotProps.value.beneficiary)} - </span><span class="text-sm font-semibold"${_scopeId7}>${ssrInterpolate(Intl.NumberFormat("en-US", {
                                                    style: "currency",
                                                    currency: slotProps.value.benefCurrency
                                                  }).format(Number(slotProps.value.balance)))}</span></div>`);
                                                } else {
                                                  _push8(`<span${_scopeId7}>${ssrInterpolate(slotProps.placeholder)}</span>`);
                                                }
                                              } else {
                                                return [
                                                  slotProps.value ? (openBlock(), createBlock("div", { key: 0 }, [
                                                    createVNode("span", { class: "text-sm" }, toDisplayString(slotProps.value.beneficiary) + " - ", 1),
                                                    createVNode("span", { class: "text-sm font-semibold" }, toDisplayString(Intl.NumberFormat("en-US", {
                                                      style: "currency",
                                                      currency: slotProps.value.benefCurrency
                                                    }).format(Number(slotProps.value.balance))), 1)
                                                  ])) : (openBlock(), createBlock("span", { key: 1 }, toDisplayString(slotProps.placeholder), 1))
                                                ];
                                              }
                                            }),
                                            option: withCtx((slotProps, _push8, _parent8, _scopeId7) => {
                                              if (_push8) {
                                                _push8(`<div class="flex items-center gap-2"${_scopeId7}>`);
                                                if (slotProps.option) {
                                                  _push8(`<i class="pi pi-id-card" style="${ssrRenderStyle({ "font-size": "1.3rem" })}"${_scopeId7}></i>`);
                                                } else {
                                                  _push8(`<!---->`);
                                                }
                                                _push8(`<div${_scopeId7}><p class="text-sm"${_scopeId7}>${ssrInterpolate(slotProps.option.beneficiary)}</p><p class="text-xs font-bold"${_scopeId7}>${ssrInterpolate(Intl.NumberFormat("en-US", {
                                                  style: "currency",
                                                  currency: slotProps.option.benefCurrency
                                                }).format(Number(slotProps.option.balance)))}</p></div></div>`);
                                              } else {
                                                return [
                                                  createVNode("div", { class: "flex items-center gap-2" }, [
                                                    slotProps.option ? (openBlock(), createBlock("i", {
                                                      key: 0,
                                                      class: "pi pi-id-card",
                                                      style: { "font-size": "1.3rem" }
                                                    })) : createCommentVNode("", true),
                                                    createVNode("div", null, [
                                                      createVNode("p", { class: "text-sm" }, toDisplayString(slotProps.option.beneficiary), 1),
                                                      createVNode("p", { class: "text-xs font-bold" }, toDisplayString(Intl.NumberFormat("en-US", {
                                                        style: "currency",
                                                        currency: slotProps.option.benefCurrency
                                                      }).format(Number(slotProps.option.balance))), 1)
                                                    ])
                                                  ])
                                                ];
                                              }
                                            }),
                                            _: 2
                                          }, _parent7, _scopeId6));
                                          if (unref(validErrorMsg).domNumber.trim().length > 0) {
                                            _push7(ssrRenderComponent(_component_input_error_msg, {
                                              label: unref(validErrorMsg).domNumber
                                            }, null, _parent7, _scopeId6));
                                          } else {
                                            _push7(`<!---->`);
                                          }
                                          _push7(`</div>`);
                                        } else {
                                          return [
                                            createVNode("div", null, [
                                              createVNode("label", {
                                                for: "domNumber",
                                                class: "text-xs text-text-secondary mb-0.5"
                                              }, toDisplayString(_ctx.$t("page.transfer.new.domiciliation")), 1),
                                              createVNode(_component_Select, {
                                                modelValue: unref(form).domUnikCode,
                                                "onUpdate:modelValue": [($event) => unref(form).domUnikCode = $event, (e2) => unref(form).domUnikCode = e2],
                                                options: unref(domiciliationList),
                                                loading: unref(isDomLoading),
                                                placeholder: _ctx.$t("placeholder.select_domiciliation"),
                                                pt: unref(selectInputPt)
                                              }, {
                                                value: withCtx((slotProps) => [
                                                  slotProps.value ? (openBlock(), createBlock("div", { key: 0 }, [
                                                    createVNode("span", { class: "text-sm" }, toDisplayString(slotProps.value.beneficiary) + " - ", 1),
                                                    createVNode("span", { class: "text-sm font-semibold" }, toDisplayString(Intl.NumberFormat("en-US", {
                                                      style: "currency",
                                                      currency: slotProps.value.benefCurrency
                                                    }).format(Number(slotProps.value.balance))), 1)
                                                  ])) : (openBlock(), createBlock("span", { key: 1 }, toDisplayString(slotProps.placeholder), 1))
                                                ]),
                                                option: withCtx((slotProps) => [
                                                  createVNode("div", { class: "flex items-center gap-2" }, [
                                                    slotProps.option ? (openBlock(), createBlock("i", {
                                                      key: 0,
                                                      class: "pi pi-id-card",
                                                      style: { "font-size": "1.3rem" }
                                                    })) : createCommentVNode("", true),
                                                    createVNode("div", null, [
                                                      createVNode("p", { class: "text-sm" }, toDisplayString(slotProps.option.beneficiary), 1),
                                                      createVNode("p", { class: "text-xs font-bold" }, toDisplayString(Intl.NumberFormat("en-US", {
                                                        style: "currency",
                                                        currency: slotProps.option.benefCurrency
                                                      }).format(Number(slotProps.option.balance))), 1)
                                                    ])
                                                  ])
                                                ]),
                                                _: 1
                                              }, 8, ["modelValue", "onUpdate:modelValue", "options", "loading", "placeholder", "pt"]),
                                              unref(validErrorMsg).domNumber.trim().length > 0 ? (openBlock(), createBlock(_component_input_error_msg, {
                                                key: 0,
                                                label: unref(validErrorMsg).domNumber
                                              }, null, 8, ["label"])) : createCommentVNode("", true)
                                            ])
                                          ];
                                        }
                                      }),
                                      _: 2
                                    }, _parent6, _scopeId5));
                                  } else {
                                    return [
                                      createVNode(_component_AccordionContent, { "pt:content:style": "padding: 0 !important;" }, {
                                        default: withCtx(() => [
                                          createVNode("div", null, [
                                            createVNode("label", {
                                              for: "domNumber",
                                              class: "text-xs text-text-secondary mb-0.5"
                                            }, toDisplayString(_ctx.$t("page.transfer.new.domiciliation")), 1),
                                            createVNode(_component_Select, {
                                              modelValue: unref(form).domUnikCode,
                                              "onUpdate:modelValue": [($event) => unref(form).domUnikCode = $event, (e2) => unref(form).domUnikCode = e2],
                                              options: unref(domiciliationList),
                                              loading: unref(isDomLoading),
                                              placeholder: _ctx.$t("placeholder.select_domiciliation"),
                                              pt: unref(selectInputPt)
                                            }, {
                                              value: withCtx((slotProps) => [
                                                slotProps.value ? (openBlock(), createBlock("div", { key: 0 }, [
                                                  createVNode("span", { class: "text-sm" }, toDisplayString(slotProps.value.beneficiary) + " - ", 1),
                                                  createVNode("span", { class: "text-sm font-semibold" }, toDisplayString(Intl.NumberFormat("en-US", {
                                                    style: "currency",
                                                    currency: slotProps.value.benefCurrency
                                                  }).format(Number(slotProps.value.balance))), 1)
                                                ])) : (openBlock(), createBlock("span", { key: 1 }, toDisplayString(slotProps.placeholder), 1))
                                              ]),
                                              option: withCtx((slotProps) => [
                                                createVNode("div", { class: "flex items-center gap-2" }, [
                                                  slotProps.option ? (openBlock(), createBlock("i", {
                                                    key: 0,
                                                    class: "pi pi-id-card",
                                                    style: { "font-size": "1.3rem" }
                                                  })) : createCommentVNode("", true),
                                                  createVNode("div", null, [
                                                    createVNode("p", { class: "text-sm" }, toDisplayString(slotProps.option.beneficiary), 1),
                                                    createVNode("p", { class: "text-xs font-bold" }, toDisplayString(Intl.NumberFormat("en-US", {
                                                      style: "currency",
                                                      currency: slotProps.option.benefCurrency
                                                    }).format(Number(slotProps.option.balance))), 1)
                                                  ])
                                                ])
                                              ]),
                                              _: 1
                                            }, 8, ["modelValue", "onUpdate:modelValue", "options", "loading", "placeholder", "pt"]),
                                            unref(validErrorMsg).domNumber.trim().length > 0 ? (openBlock(), createBlock(_component_input_error_msg, {
                                              key: 0,
                                              label: unref(validErrorMsg).domNumber
                                            }, null, 8, ["label"])) : createCommentVNode("", true)
                                          ])
                                        ]),
                                        _: 1
                                      })
                                    ];
                                  }
                                }),
                                _: 2
                              }, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(_component_AccordionPanel, { value: "0" }, {
                                  default: withCtx(() => [
                                    createVNode(_component_AccordionContent, {
                                      "pt:content:style": "padding: 0 !important; ",
                                      "pt:content:class": "grid grid-cols-2 gap-2"
                                    }, {
                                      default: withCtx(() => [
                                        createVNode("div", null, [
                                          createVNode("label", {
                                            for: "domNumber",
                                            class: "text-xs text-text-secondary"
                                          }, toDisplayString(_ctx.$t("page.transfer.new.dom_number")), 1),
                                          createVNode(_component_input_bg_normal, {
                                            modelValue: unref(form).domNumber,
                                            "onUpdate:modelValue": ($event) => unref(form).domNumber = $event,
                                            identifier: "domNumber",
                                            class: "uppercase"
                                          }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                          unref(validErrorMsg).domNumber.trim().length > 0 ? (openBlock(), createBlock(_component_input_error_msg, {
                                            key: 0,
                                            label: unref(validErrorMsg).domNumber
                                          }, null, 8, ["label"])) : createCommentVNode("", true)
                                        ]),
                                        createVNode("div", null, [
                                          createVNode("label", {
                                            for: "declareNum",
                                            class: "text-xs text-text-secondary"
                                          }, toDisplayString(_ctx.$t("page.transfer.new.declare_num")), 1),
                                          createVNode(_component_input_bg_normal, {
                                            modelValue: unref(form).declareNum,
                                            "onUpdate:modelValue": ($event) => unref(form).declareNum = $event,
                                            identifier: "declareNum",
                                            class: "uppercase"
                                          }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                          unref(validErrorMsg).declareNum.trim().length > 0 ? (openBlock(), createBlock(_component_input_error_msg, {
                                            key: 0,
                                            label: unref(validErrorMsg).declareNum
                                          }, null, 8, ["label"])) : createCommentVNode("", true)
                                        ])
                                      ]),
                                      _: 1
                                    })
                                  ]),
                                  _: 1
                                }),
                                createVNode(_component_AccordionPanel, { value: "1" }, {
                                  default: withCtx(() => [
                                    createVNode(_component_AccordionContent, { "pt:content:style": "padding: 0 !important;" }, {
                                      default: withCtx(() => [
                                        createVNode("div", null, [
                                          createVNode("label", {
                                            for: "domNumber",
                                            class: "text-xs text-text-secondary mb-0.5"
                                          }, toDisplayString(_ctx.$t("page.transfer.new.domiciliation")), 1),
                                          createVNode(_component_Select, {
                                            modelValue: unref(form).domUnikCode,
                                            "onUpdate:modelValue": [($event) => unref(form).domUnikCode = $event, (e2) => unref(form).domUnikCode = e2],
                                            options: unref(domiciliationList),
                                            loading: unref(isDomLoading),
                                            placeholder: _ctx.$t("placeholder.select_domiciliation"),
                                            pt: unref(selectInputPt)
                                          }, {
                                            value: withCtx((slotProps) => [
                                              slotProps.value ? (openBlock(), createBlock("div", { key: 0 }, [
                                                createVNode("span", { class: "text-sm" }, toDisplayString(slotProps.value.beneficiary) + " - ", 1),
                                                createVNode("span", { class: "text-sm font-semibold" }, toDisplayString(Intl.NumberFormat("en-US", {
                                                  style: "currency",
                                                  currency: slotProps.value.benefCurrency
                                                }).format(Number(slotProps.value.balance))), 1)
                                              ])) : (openBlock(), createBlock("span", { key: 1 }, toDisplayString(slotProps.placeholder), 1))
                                            ]),
                                            option: withCtx((slotProps) => [
                                              createVNode("div", { class: "flex items-center gap-2" }, [
                                                slotProps.option ? (openBlock(), createBlock("i", {
                                                  key: 0,
                                                  class: "pi pi-id-card",
                                                  style: { "font-size": "1.3rem" }
                                                })) : createCommentVNode("", true),
                                                createVNode("div", null, [
                                                  createVNode("p", { class: "text-sm" }, toDisplayString(slotProps.option.beneficiary), 1),
                                                  createVNode("p", { class: "text-xs font-bold" }, toDisplayString(Intl.NumberFormat("en-US", {
                                                    style: "currency",
                                                    currency: slotProps.option.benefCurrency
                                                  }).format(Number(slotProps.option.balance))), 1)
                                                ])
                                              ])
                                            ]),
                                            _: 1
                                          }, 8, ["modelValue", "onUpdate:modelValue", "options", "loading", "placeholder", "pt"]),
                                          unref(validErrorMsg).domNumber.trim().length > 0 ? (openBlock(), createBlock(_component_input_error_msg, {
                                            key: 0,
                                            label: unref(validErrorMsg).domNumber
                                          }, null, 8, ["label"])) : createCommentVNode("", true)
                                        ])
                                      ]),
                                      _: 1
                                    })
                                  ]),
                                  _: 1
                                })
                              ];
                            }
                          }),
                          _: 2
                        }, _parent4, _scopeId3));
                        _push4(`<div class="col-span-2"${_scopeId3}><label for="description" class="text-xs text-text-secondary"${_scopeId3}>${ssrInterpolate(_ctx.$t("page.transfer.new.remittance_info"))}</label>`);
                        _push4(ssrRenderComponent(_component_Textarea, {
                          modelValue: unref(form).description,
                          "onUpdate:modelValue": ($event) => unref(form).description = $event,
                          rows: "5",
                          cols: "10",
                          class: "block w-full placeholder-accent-muted bg-bg-secondary",
                          placeholder: "State the reason for the transfer"
                        }, null, _parent4, _scopeId3));
                        if (unref(validErrorMsg).description.trim().length > 0) {
                          _push4(ssrRenderComponent(_component_input_error_msg, {
                            label: unref(validErrorMsg).description
                          }, null, _parent4, _scopeId3));
                        } else {
                          _push4(`<!---->`);
                        }
                        _push4(`</div><div class="col-span-2"${_scopeId3}><label for="handleCost" class="text-xs text-text-secondary"${_scopeId3}>${ssrInterpolate(_ctx.$t("page.transfer.new.handle_cost"))} <span class="text-white font-semibold text-xxs bg-status-error rounded px-1"${_scopeId3}>${ssrInterpolate(_ctx.$t("page.required"))}</span></label><ul class="grid grid-cols-3 gap-3"${_scopeId3}><li class="${ssrRenderClass([
                          "flex items-center text-sm gap-2 py-2.5 px-4 rounded-md cursor-pointer border transition-colors ease-linear duration-200",
                          {
                            "border-accent bg-accent-muted": unref(form).supportFee === "client",
                            "border-primary-light hover:bg-bg-secondary": unref(form).supportFee !== "client"
                          }
                        ])}"${_scopeId3}>`);
                        _push4(ssrRenderComponent(_component_input_radio, {
                          modelValue: unref(form).supportFee,
                          "onUpdate:modelValue": ($event) => unref(form).supportFee = $event,
                          inputId: "client",
                          name: "fee",
                          value: "client",
                          size: "small"
                        }, null, _parent4, _scopeId3));
                        _push4(`<div${_scopeId3}><label for="client" class="font-semibold"${_scopeId3}> OUR </label><p class="text-xs text-text-secondary"${_scopeId3}>${ssrInterpolate(_ctx.$t("page.transfer.new.cover_cost.our"))}</p></div></li><li class="${ssrRenderClass([
                          "flex items-center text-sm gap-2 py-2.5 px-4 rounded-md cursor-pointer border transition-colors ease-linear duration-200",
                          {
                            "border-accent bg-accent-muted": unref(form).supportFee === "beneficiary",
                            "border-primary-light hover:bg-bg-secondary": unref(form).supportFee !== "beneficiary"
                          }
                        ])}"${_scopeId3}>`);
                        _push4(ssrRenderComponent(_component_input_radio, {
                          modelValue: unref(form).supportFee,
                          "onUpdate:modelValue": ($event) => unref(form).supportFee = $event,
                          inputId: "beneficiary",
                          name: "fee",
                          value: "beneficiary",
                          size: "small"
                        }, null, _parent4, _scopeId3));
                        _push4(`<div${_scopeId3}><label for="beneficiary" class="font-semibold"${_scopeId3}> BEN </label><p class="text-xs text-text-secondary"${_scopeId3}>${ssrInterpolate(_ctx.$t("page.transfer.new.cover_cost.ben"))}</p></div></li><li class="${ssrRenderClass([
                          "flex items-center text-sm gap-2 py-2.5 px-4 rounded-md cursor-pointer border transition-colors ease-linear duration-200",
                          {
                            "border-accent bg-accent-muted": unref(form).supportFee === "both",
                            "border-primary-light hover:bg-bg-secondary": unref(form).supportFee !== "both"
                          }
                        ])}"${_scopeId3}>`);
                        _push4(ssrRenderComponent(_component_input_radio, {
                          modelValue: unref(form).supportFee,
                          "onUpdate:modelValue": ($event) => unref(form).supportFee = $event,
                          inputId: "both",
                          name: "fee",
                          value: "both",
                          size: "small"
                        }, null, _parent4, _scopeId3));
                        _push4(`<div${_scopeId3}><label for="both" class="font-semibold"${_scopeId3}> SHA </label><p class="text-xs text-text-secondary"${_scopeId3}>${ssrInterpolate(_ctx.$t("page.transfer.new.cover_cost.sha"))}</p></div></li></ul>`);
                        if (unref(validErrorMsg).supportFee.trim().length > 0) {
                          _push4(ssrRenderComponent(_component_input_error_msg, {
                            label: unref(validErrorMsg).supportFee
                          }, null, _parent4, _scopeId3));
                        } else {
                          _push4(`<!---->`);
                        }
                        _push4(`</div><div class="col-span-2 mt-2 pt-4 border-t border-border-main"${_scopeId3}><div class="flex items-center text-sm gap-4 py-2.5 px-4 rounded-lg cursor-pointer border border-primary-light hover:bg-bg-secondary transition-colors ease-linear duration-200"${_scopeId3}><div${_scopeId3}>`);
                        _push4(ssrRenderComponent(_component_input_toggle, {
                          modelValue: unref(form).engagement,
                          "onUpdate:modelValue": ($event) => unref(form).engagement = $event
                        }, null, _parent4, _scopeId3));
                        _push4(`</div><div class="space-y-1"${_scopeId3}><p class="font-semibold"${_scopeId3}>${ssrInterpolate(_ctx.$t("page.transfer.new.doc_undertake"))}</p><p class="text-xs text-text-secondary"${_scopeId3}>${ssrInterpolate(_ctx.$t("page.transfer.new.doc_undertake_note"))}</p></div></div></div></div><div class="grid pt-6 justify-end"${_scopeId3}>`);
                        _push4(ssrRenderComponent(_component_button_primary, {
                          label: _ctx.$t("button.next"),
                          icon: "pi pi-arrow-right",
                          onClick: ($event) => stepNavigation(activateCallback, 2, "next")
                        }, null, _parent4, _scopeId3));
                        _push4(`</div>`);
                      } else {
                        return [
                          createVNode("div", { class: "grid grid-cols-2 gap-3" }, [
                            createVNode("div", null, [
                              createVNode("label", {
                                for: "type",
                                class: "text-xs text-text-secondary"
                              }, [
                                createTextVNode(toDisplayString(_ctx.$t("page.transfer.new.type")) + " ", 1),
                                createVNode("span", { class: "text-white font-semibold text-xxs bg-status-error rounded px-1" }, toDisplayString(_ctx.$t("page.required")), 1)
                              ]),
                              createVNode(_component_input_select, {
                                name: "type",
                                modelValue: unref(form).type,
                                "onUpdate:modelValue": [($event) => unref(form).type = $event, (e2) => setTypeByCategory(e2)],
                                options: unref(transferTypeList).category,
                                loading: unref(isTransferTypeLoading),
                                "value-key": null,
                                filter: "",
                                placeholder: "Choose a transfer type"
                              }, null, 8, ["modelValue", "onUpdate:modelValue", "options", "loading"]),
                              unref(validErrorMsg).type.trim().length > 0 ? (openBlock(), createBlock(_component_input_error_msg, {
                                key: 0,
                                label: unref(validErrorMsg).type
                              }, null, 8, ["label"])) : createCommentVNode("", true)
                            ]),
                            createVNode("div", null, [
                              createVNode("label", {
                                for: "motive",
                                class: "text-xs text-text-secondary"
                              }, [
                                createTextVNode(toDisplayString(_ctx.$t("page.transfer.new.motive")) + " ", 1),
                                createVNode("span", { class: "text-white font-semibold text-xxs bg-status-error rounded px-1" }, toDisplayString(_ctx.$t("page.required")), 1)
                              ]),
                              createVNode(_component_input_select, {
                                name: "motive",
                                modelValue: unref(form).motive,
                                "onUpdate:modelValue": ($event) => unref(form).motive = $event,
                                options: unref(filteredTransferTypeList),
                                loading: unref(isTransferTypeLoading),
                                "value-key": null,
                                filter: "",
                                placeholder: "Choose a transfer motive"
                              }, null, 8, ["modelValue", "onUpdate:modelValue", "options", "loading"]),
                              unref(validErrorMsg).type.trim().length > 0 ? (openBlock(), createBlock(_component_input_error_msg, {
                                key: 0,
                                label: unref(validErrorMsg).type
                              }, null, 8, ["label"])) : createCommentVNode("", true)
                            ]),
                            createVNode("div", null, [
                              createVNode("label", {
                                for: "amount",
                                class: "text-xs text-text-secondary"
                              }, [
                                createTextVNode(toDisplayString(_ctx.$t("page.transfer.new.amount")) + " ", 1),
                                createVNode("span", { class: "text-white font-semibold text-xxs bg-status-error rounded px-1" }, toDisplayString(_ctx.$t("page.required")), 1)
                              ]),
                              createVNode(_component_input_custom_number, {
                                modelValue: unref(form).amount,
                                "onUpdate:modelValue": ($event) => unref(form).amount = $event,
                                identifier: "amount",
                                "max-fraction-digits": 3,
                                placeholder: "0.000",
                                autocomplete: "off",
                                onInput: (e2) => convertCurrency(e2.value),
                                onBlur: canOpenDomAccordion
                              }, null, 8, ["modelValue", "onUpdate:modelValue", "onInput"]),
                              unref(validErrorMsg).amount.trim().length > 0 ? (openBlock(), createBlock(_component_input_error_msg, {
                                key: 0,
                                label: unref(validErrorMsg).amount
                              }, null, 8, ["label"])) : createCommentVNode("", true)
                            ]),
                            createVNode("div", null, [
                              createVNode("label", {
                                for: "currency",
                                class: "text-xs text-text-secondary"
                              }, [
                                createTextVNode(toDisplayString(_ctx.$t("page.transfer.new.currency")) + " ", 1),
                                createVNode("span", { class: "text-white font-semibold text-xxs bg-status-error rounded px-1" }, toDisplayString(_ctx.$t("page.required")), 1)
                              ]),
                              createVNode(_component_input_select, {
                                modelValue: unref(form).currency,
                                "onUpdate:modelValue": [($event) => unref(form).currency = $event, setChosenCurrentRate],
                                options: unref(currencyList),
                                loading: unref(isTransferSettingLoading),
                                filter: "",
                                placeholder: "Choose an currency"
                              }, null, 8, ["modelValue", "onUpdate:modelValue", "options", "loading"]),
                              unref(validErrorMsg).currency.trim().length > 0 ? (openBlock(), createBlock(_component_input_error_msg, {
                                key: 0,
                                label: unref(validErrorMsg).currency
                              }, null, 8, ["label"])) : createCommentVNode("", true)
                            ]),
                            createVNode(_component_Accordion, {
                              value: unref(showAmountConversion),
                              "onUpdate:value": ($event) => isRef(showAmountConversion) ? showAmountConversion.value = $event : null,
                              class: "col-span-2"
                            }, {
                              default: withCtx(() => [
                                createVNode(_component_AccordionPanel, { value: "0" }, {
                                  default: withCtx(() => [
                                    createVNode(_component_AccordionContent, { "pt:content:style": "padding: 0 !important" }, {
                                      default: withCtx(() => [
                                        createVNode("ul", { class: "m-0 py-3 bg-bg-secondary px-2" }, [
                                          createVNode("li", { class: "flex items-center justify-between" }, [
                                            createVNode("p", null, toDisplayString(_ctx.$t("page.transfer.new.rate")) + ":", 1),
                                            createVNode("p", null, " 1 " + toDisplayString(unref(chosenRate)?.initCode) + " = " + toDisplayString(unref(chosenRate)?.value) + " " + toDisplayString(unref(chosenRate)?.finalCode), 1)
                                          ]),
                                          createVNode("li", { class: "flex items-center justify-between" }, [
                                            createVNode("p", null, toDisplayString(_ctx.$t("page.transfer.new.total_amount")) + ":", 1),
                                            createVNode("p", null, toDisplayString(Intl.NumberFormat("en-US").format(unref(convertedAmount))) + " " + toDisplayString(unref(chosenRate)?.finalCode), 1)
                                          ])
                                        ])
                                      ]),
                                      _: 1
                                    })
                                  ]),
                                  _: 1
                                })
                              ]),
                              _: 1
                            }, 8, ["value", "onUpdate:value"]),
                            createVNode("div", null, [
                              createVNode("label", {
                                for: "account",
                                class: "text-xs text-text-secondary"
                              }, [
                                createTextVNode(toDisplayString(_ctx.$t("page.transfer.new.account_num")) + " ", 1),
                                createVNode("span", { class: "text-white font-semibold text-xxs bg-status-error rounded px-1" }, toDisplayString(_ctx.$t("page.required")), 1)
                              ]),
                              createVNode(_component_Select, {
                                modelValue: unref(form).account,
                                "onUpdate:modelValue": [($event) => unref(form).account = $event, (e2) => unref(form).account = e2],
                                options: unref(bankStore).accounts,
                                loading: unref(isTransferSettingLoading),
                                placeholder: _ctx.$t("placeholder.select_account"),
                                pt: unref(selectInputPt)
                              }, {
                                value: withCtx((slotProps) => [
                                  slotProps.value ? (openBlock(), createBlock("div", { key: 0 }, [
                                    createVNode("span", { class: "text-sm" }, toDisplayString(slotProps.value.iBan) + " - ", 1),
                                    createVNode("span", { class: "text-sm" }, toDisplayString(slotProps.value.accType), 1)
                                  ])) : (openBlock(), createBlock("span", { key: 1 }, toDisplayString(slotProps.placeholder), 1))
                                ]),
                                option: withCtx((slotProps) => [
                                  createVNode("div", { class: "flex items-center gap-2" }, [
                                    slotProps.option ? (openBlock(), createBlock("i", {
                                      key: 0,
                                      class: "pi pi-building-columns",
                                      style: { "font-size": "1.3rem" }
                                    })) : createCommentVNode("", true),
                                    createVNode("div", null, [
                                      createVNode("p", { class: "text-sm" }, toDisplayString(slotProps.option.iBan), 1),
                                      createVNode("div", { class: "text-xs" }, [
                                        createVNode("span", null, toDisplayString(slotProps.option.agency) + " - ", 1),
                                        createVNode("span", null, toDisplayString(slotProps.option.accType), 1)
                                      ])
                                    ])
                                  ])
                                ]),
                                _: 1
                              }, 8, ["modelValue", "onUpdate:modelValue", "options", "loading", "placeholder", "pt"]),
                              unref(validErrorMsg).account.trim().length > 0 ? (openBlock(), createBlock(_component_input_error_msg, {
                                key: 0,
                                label: unref(validErrorMsg).account
                              }, null, 8, ["label"])) : createCommentVNode("", true)
                            ]),
                            createVNode("div", null, [
                              createVNode("label", {
                                for: "targetDate",
                                class: "text-xs text-text-secondary"
                              }, toDisplayString(_ctx.$t("page.transfer.new.target_date")), 1),
                              createVNode(_component_input_date_picker, {
                                modelValue: unref(form).targetDate,
                                "onUpdate:modelValue": ($event) => unref(form).targetDate = $event,
                                showIcon: "",
                                fluid: "",
                                "icon-display": "input",
                                "min-date": /* @__PURE__ */ new Date()
                              }, null, 8, ["modelValue", "onUpdate:modelValue", "min-date"]),
                              unref(validErrorMsg).targetDate.trim().length > 0 ? (openBlock(), createBlock(_component_input_error_msg, {
                                key: 0,
                                label: unref(validErrorMsg).targetDate
                              }, null, 8, ["label"])) : createCommentVNode("", true)
                            ]),
                            createVNode("div", null, [
                              createVNode("label", {
                                for: "beneficiary",
                                class: "text-xs text-text-secondary"
                              }, [
                                createTextVNode(toDisplayString(_ctx.$t("page.transfer.new.beneficiary")) + " ", 1),
                                createVNode("span", { class: "text-white font-semibold text-xxs bg-status-error rounded px-1" }, toDisplayString(_ctx.$t("page.required")), 1)
                              ]),
                              createVNode(_component_Select, {
                                modelValue: unref(form).beneficiary,
                                "onUpdate:modelValue": [($event) => unref(form).beneficiary = $event, (e2) => unref(form).beneficiary = e2],
                                options: unref(beneficiaryList),
                                loading: unref(isTransferBenefLoading),
                                placeholder: _ctx.$t("placeholder.select_beneficiary"),
                                pt: unref(selectInputPt)
                              }, {
                                value: withCtx((slotProps) => [
                                  slotProps.value ? (openBlock(), createBlock("div", { key: 0 }, [
                                    createVNode("span", { class: "text-sm" }, toDisplayString(slotProps.value.fullName) + " - ", 1),
                                    createVNode("span", { class: "text-sm" }, toDisplayString(("sliceIban" in _ctx ? _ctx.sliceIban : unref(sliceIban))(slotProps.value.iban)), 1)
                                  ])) : (openBlock(), createBlock("span", { key: 1 }, toDisplayString(slotProps.placeholder), 1))
                                ]),
                                option: withCtx((slotProps) => [
                                  createVNode("div", { class: "flex items-center gap-2" }, [
                                    slotProps.option ? (openBlock(), createBlock("i", {
                                      key: 0,
                                      class: "pi pi-building-columns",
                                      style: { "font-size": "1.3rem" }
                                    })) : createCommentVNode("", true),
                                    createVNode("div", null, [
                                      createVNode("p", { class: "text-sm" }, toDisplayString(slotProps.option.fullName), 1),
                                      createVNode("p", { class: "text-xs" }, toDisplayString(slotProps.option.iban), 1)
                                    ])
                                  ])
                                ]),
                                _: 1
                              }, 8, ["modelValue", "onUpdate:modelValue", "options", "loading", "placeholder", "pt"]),
                              unref(validErrorMsg).beneficiary.trim().length > 0 ? (openBlock(), createBlock(_component_input_error_msg, {
                                key: 0,
                                label: unref(validErrorMsg).beneficiary
                              }, null, 8, ["label"])) : createCommentVNode("", true)
                            ]),
                            createVNode(_component_Accordion, {
                              value: unref(openDomTypeForm),
                              "onUpdate:value": ($event) => isRef(openDomTypeForm) ? openDomTypeForm.value = $event : null,
                              class: "col-span-2"
                            }, {
                              default: withCtx(() => [
                                createVNode(_component_AccordionPanel, { value: "0" }, {
                                  default: withCtx(() => [
                                    createVNode(_component_AccordionContent, { "pt:content:style": "padding: 0 !important;" }, {
                                      default: withCtx(() => [
                                        createVNode("p", { class: "text-xs text-text-secondary mb-0.5" }, [
                                          createTextVNode(toDisplayString(_ctx.$t("page.transfer.new.domiciliation")) + " ", 1),
                                          createVNode("span", { class: "text-white font-semibold text-xxs bg-status-error rounded px-1" }, toDisplayString(_ctx.$t("page.required")), 1)
                                        ]),
                                        createVNode("ul", { class: "grid grid-cols-3 gap-3" }, [
                                          createVNode("li", {
                                            class: [
                                              "flex items-center text-sm gap-2 py-2.5 px-4 rounded-md cursor-pointer border transition-colors ease-linear duration-200",
                                              {
                                                "border-accent bg-accent-muted": unref(chosenOption) === "create",
                                                "border-primary-light hover:bg-bg-secondary": unref(chosenOption) !== "create"
                                              }
                                            ],
                                            onClick: withModifiers(($event) => toggleDomExtraForm("create"), ["prevent"])
                                          }, [
                                            createVNode(_component_input_radio, {
                                              modelValue: unref(chosenOption),
                                              "onUpdate:modelValue": ($event) => isRef(chosenOption) ? chosenOption.value = $event : null,
                                              inputId: "create",
                                              name: "fee",
                                              value: "create",
                                              size: "small"
                                            }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                            createVNode("div", null, [
                                              createVNode("label", {
                                                for: "create",
                                                class: "font-semibold uppercase"
                                              }, toDisplayString(_ctx.$t("page.transfer.new.dom_options.create.title")), 1),
                                              createVNode("p", { class: "text-xs text-text-secondary" }, toDisplayString(_ctx.$t(
                                                "page.transfer.new.dom_options.create.description"
                                              )), 1)
                                            ])
                                          ], 10, ["onClick"]),
                                          createVNode("li", {
                                            class: [
                                              "flex items-center text-sm gap-2 py-2.5 px-4 rounded-md cursor-pointer border transition-colors ease-linear duration-200",
                                              {
                                                "border-accent bg-accent-muted": unref(chosenOption) === "select",
                                                "border-primary-light hover:bg-bg-secondary": unref(chosenOption) !== "select"
                                              }
                                            ],
                                            onClick: withModifiers(($event) => toggleDomExtraForm("select"), ["prevent"])
                                          }, [
                                            createVNode(_component_input_radio, {
                                              modelValue: unref(chosenOption),
                                              "onUpdate:modelValue": ($event) => isRef(chosenOption) ? chosenOption.value = $event : null,
                                              inputId: "select",
                                              name: "fee",
                                              value: "select",
                                              size: "small"
                                            }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                            createVNode("div", null, [
                                              createVNode("label", {
                                                for: "select",
                                                class: "font-semibold uppercase"
                                              }, toDisplayString(_ctx.$t("page.transfer.new.dom_options.select.title")), 1),
                                              createVNode("p", { class: "text-xs text-text-secondary" }, toDisplayString(_ctx.$t(
                                                "page.transfer.new.dom_options.select.description"
                                              )), 1)
                                            ])
                                          ], 10, ["onClick"]),
                                          createVNode("li", {
                                            class: [
                                              "flex items-center text-sm gap-2 py-2.5 px-4 rounded-md cursor-pointer border transition-colors ease-linear duration-200",
                                              {
                                                "border-accent bg-accent-muted": unref(chosenOption) === "done",
                                                "border-primary-light hover:bg-bg-secondary": unref(chosenOption) !== "done"
                                              }
                                            ],
                                            onClick: withModifiers(($event) => toggleDomExtraForm("done"), ["prevent"])
                                          }, [
                                            createVNode(_component_input_radio, {
                                              modelValue: unref(chosenOption),
                                              "onUpdate:modelValue": ($event) => isRef(chosenOption) ? chosenOption.value = $event : null,
                                              inputId: "done",
                                              name: "fee",
                                              value: "done",
                                              size: "small"
                                            }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                            createVNode("div", null, [
                                              createVNode("label", {
                                                for: "done",
                                                class: "font-semibold uppercase"
                                              }, toDisplayString(_ctx.$t("page.transfer.new.dom_options.done.title")), 1),
                                              createVNode("p", { class: "text-xs text-text-secondary" }, toDisplayString(_ctx.$t(
                                                "page.transfer.new.dom_options.done.description"
                                              )), 1)
                                            ])
                                          ], 10, ["onClick"])
                                        ])
                                      ]),
                                      _: 1
                                    })
                                  ]),
                                  _: 1
                                })
                              ]),
                              _: 1
                            }, 8, ["value", "onUpdate:value"]),
                            createVNode(_component_Accordion, {
                              value: unref(showDomExtraForm),
                              "onUpdate:value": ($event) => isRef(showDomExtraForm) ? showDomExtraForm.value = $event : null,
                              class: "col-span-2"
                            }, {
                              default: withCtx(() => [
                                createVNode(_component_AccordionPanel, { value: "0" }, {
                                  default: withCtx(() => [
                                    createVNode(_component_AccordionContent, {
                                      "pt:content:style": "padding: 0 !important; ",
                                      "pt:content:class": "grid grid-cols-2 gap-2"
                                    }, {
                                      default: withCtx(() => [
                                        createVNode("div", null, [
                                          createVNode("label", {
                                            for: "domNumber",
                                            class: "text-xs text-text-secondary"
                                          }, toDisplayString(_ctx.$t("page.transfer.new.dom_number")), 1),
                                          createVNode(_component_input_bg_normal, {
                                            modelValue: unref(form).domNumber,
                                            "onUpdate:modelValue": ($event) => unref(form).domNumber = $event,
                                            identifier: "domNumber",
                                            class: "uppercase"
                                          }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                          unref(validErrorMsg).domNumber.trim().length > 0 ? (openBlock(), createBlock(_component_input_error_msg, {
                                            key: 0,
                                            label: unref(validErrorMsg).domNumber
                                          }, null, 8, ["label"])) : createCommentVNode("", true)
                                        ]),
                                        createVNode("div", null, [
                                          createVNode("label", {
                                            for: "declareNum",
                                            class: "text-xs text-text-secondary"
                                          }, toDisplayString(_ctx.$t("page.transfer.new.declare_num")), 1),
                                          createVNode(_component_input_bg_normal, {
                                            modelValue: unref(form).declareNum,
                                            "onUpdate:modelValue": ($event) => unref(form).declareNum = $event,
                                            identifier: "declareNum",
                                            class: "uppercase"
                                          }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                          unref(validErrorMsg).declareNum.trim().length > 0 ? (openBlock(), createBlock(_component_input_error_msg, {
                                            key: 0,
                                            label: unref(validErrorMsg).declareNum
                                          }, null, 8, ["label"])) : createCommentVNode("", true)
                                        ])
                                      ]),
                                      _: 1
                                    })
                                  ]),
                                  _: 1
                                }),
                                createVNode(_component_AccordionPanel, { value: "1" }, {
                                  default: withCtx(() => [
                                    createVNode(_component_AccordionContent, { "pt:content:style": "padding: 0 !important;" }, {
                                      default: withCtx(() => [
                                        createVNode("div", null, [
                                          createVNode("label", {
                                            for: "domNumber",
                                            class: "text-xs text-text-secondary mb-0.5"
                                          }, toDisplayString(_ctx.$t("page.transfer.new.domiciliation")), 1),
                                          createVNode(_component_Select, {
                                            modelValue: unref(form).domUnikCode,
                                            "onUpdate:modelValue": [($event) => unref(form).domUnikCode = $event, (e2) => unref(form).domUnikCode = e2],
                                            options: unref(domiciliationList),
                                            loading: unref(isDomLoading),
                                            placeholder: _ctx.$t("placeholder.select_domiciliation"),
                                            pt: unref(selectInputPt)
                                          }, {
                                            value: withCtx((slotProps) => [
                                              slotProps.value ? (openBlock(), createBlock("div", { key: 0 }, [
                                                createVNode("span", { class: "text-sm" }, toDisplayString(slotProps.value.beneficiary) + " - ", 1),
                                                createVNode("span", { class: "text-sm font-semibold" }, toDisplayString(Intl.NumberFormat("en-US", {
                                                  style: "currency",
                                                  currency: slotProps.value.benefCurrency
                                                }).format(Number(slotProps.value.balance))), 1)
                                              ])) : (openBlock(), createBlock("span", { key: 1 }, toDisplayString(slotProps.placeholder), 1))
                                            ]),
                                            option: withCtx((slotProps) => [
                                              createVNode("div", { class: "flex items-center gap-2" }, [
                                                slotProps.option ? (openBlock(), createBlock("i", {
                                                  key: 0,
                                                  class: "pi pi-id-card",
                                                  style: { "font-size": "1.3rem" }
                                                })) : createCommentVNode("", true),
                                                createVNode("div", null, [
                                                  createVNode("p", { class: "text-sm" }, toDisplayString(slotProps.option.beneficiary), 1),
                                                  createVNode("p", { class: "text-xs font-bold" }, toDisplayString(Intl.NumberFormat("en-US", {
                                                    style: "currency",
                                                    currency: slotProps.option.benefCurrency
                                                  }).format(Number(slotProps.option.balance))), 1)
                                                ])
                                              ])
                                            ]),
                                            _: 1
                                          }, 8, ["modelValue", "onUpdate:modelValue", "options", "loading", "placeholder", "pt"]),
                                          unref(validErrorMsg).domNumber.trim().length > 0 ? (openBlock(), createBlock(_component_input_error_msg, {
                                            key: 0,
                                            label: unref(validErrorMsg).domNumber
                                          }, null, 8, ["label"])) : createCommentVNode("", true)
                                        ])
                                      ]),
                                      _: 1
                                    })
                                  ]),
                                  _: 1
                                })
                              ]),
                              _: 1
                            }, 8, ["value", "onUpdate:value"]),
                            createVNode("div", { class: "col-span-2" }, [
                              createVNode("label", {
                                for: "description",
                                class: "text-xs text-text-secondary"
                              }, toDisplayString(_ctx.$t("page.transfer.new.remittance_info")), 1),
                              createVNode(_component_Textarea, {
                                modelValue: unref(form).description,
                                "onUpdate:modelValue": ($event) => unref(form).description = $event,
                                rows: "5",
                                cols: "10",
                                class: "block w-full placeholder-accent-muted bg-bg-secondary",
                                placeholder: "State the reason for the transfer"
                              }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                              unref(validErrorMsg).description.trim().length > 0 ? (openBlock(), createBlock(_component_input_error_msg, {
                                key: 0,
                                label: unref(validErrorMsg).description
                              }, null, 8, ["label"])) : createCommentVNode("", true)
                            ]),
                            createVNode("div", { class: "col-span-2" }, [
                              createVNode("label", {
                                for: "handleCost",
                                class: "text-xs text-text-secondary"
                              }, [
                                createTextVNode(toDisplayString(_ctx.$t("page.transfer.new.handle_cost")) + " ", 1),
                                createVNode("span", { class: "text-white font-semibold text-xxs bg-status-error rounded px-1" }, toDisplayString(_ctx.$t("page.required")), 1)
                              ]),
                              createVNode("ul", { class: "grid grid-cols-3 gap-3" }, [
                                createVNode("li", {
                                  class: [
                                    "flex items-center text-sm gap-2 py-2.5 px-4 rounded-md cursor-pointer border transition-colors ease-linear duration-200",
                                    {
                                      "border-accent bg-accent-muted": unref(form).supportFee === "client",
                                      "border-primary-light hover:bg-bg-secondary": unref(form).supportFee !== "client"
                                    }
                                  ],
                                  onClick: withModifiers(() => unref(form).supportFee = "client", ["prevent"])
                                }, [
                                  createVNode(_component_input_radio, {
                                    modelValue: unref(form).supportFee,
                                    "onUpdate:modelValue": ($event) => unref(form).supportFee = $event,
                                    inputId: "client",
                                    name: "fee",
                                    value: "client",
                                    size: "small"
                                  }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                  createVNode("div", null, [
                                    createVNode("label", {
                                      for: "client",
                                      class: "font-semibold"
                                    }, " OUR "),
                                    createVNode("p", { class: "text-xs text-text-secondary" }, toDisplayString(_ctx.$t("page.transfer.new.cover_cost.our")), 1)
                                  ])
                                ], 10, ["onClick"]),
                                createVNode("li", {
                                  class: [
                                    "flex items-center text-sm gap-2 py-2.5 px-4 rounded-md cursor-pointer border transition-colors ease-linear duration-200",
                                    {
                                      "border-accent bg-accent-muted": unref(form).supportFee === "beneficiary",
                                      "border-primary-light hover:bg-bg-secondary": unref(form).supportFee !== "beneficiary"
                                    }
                                  ],
                                  onClick: withModifiers(() => unref(form).supportFee = "beneficiary", ["prevent"])
                                }, [
                                  createVNode(_component_input_radio, {
                                    modelValue: unref(form).supportFee,
                                    "onUpdate:modelValue": ($event) => unref(form).supportFee = $event,
                                    inputId: "beneficiary",
                                    name: "fee",
                                    value: "beneficiary",
                                    size: "small"
                                  }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                  createVNode("div", null, [
                                    createVNode("label", {
                                      for: "beneficiary",
                                      class: "font-semibold"
                                    }, " BEN "),
                                    createVNode("p", { class: "text-xs text-text-secondary" }, toDisplayString(_ctx.$t("page.transfer.new.cover_cost.ben")), 1)
                                  ])
                                ], 10, ["onClick"]),
                                createVNode("li", {
                                  class: [
                                    "flex items-center text-sm gap-2 py-2.5 px-4 rounded-md cursor-pointer border transition-colors ease-linear duration-200",
                                    {
                                      "border-accent bg-accent-muted": unref(form).supportFee === "both",
                                      "border-primary-light hover:bg-bg-secondary": unref(form).supportFee !== "both"
                                    }
                                  ],
                                  onClick: withModifiers(() => unref(form).supportFee = "both", ["prevent"])
                                }, [
                                  createVNode(_component_input_radio, {
                                    modelValue: unref(form).supportFee,
                                    "onUpdate:modelValue": ($event) => unref(form).supportFee = $event,
                                    inputId: "both",
                                    name: "fee",
                                    value: "both",
                                    size: "small"
                                  }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                  createVNode("div", null, [
                                    createVNode("label", {
                                      for: "both",
                                      class: "font-semibold"
                                    }, " SHA "),
                                    createVNode("p", { class: "text-xs text-text-secondary" }, toDisplayString(_ctx.$t("page.transfer.new.cover_cost.sha")), 1)
                                  ])
                                ], 10, ["onClick"])
                              ]),
                              unref(validErrorMsg).supportFee.trim().length > 0 ? (openBlock(), createBlock(_component_input_error_msg, {
                                key: 0,
                                label: unref(validErrorMsg).supportFee
                              }, null, 8, ["label"])) : createCommentVNode("", true)
                            ]),
                            createVNode("div", { class: "col-span-2 mt-2 pt-4 border-t border-border-main" }, [
                              createVNode("div", { class: "flex items-center text-sm gap-4 py-2.5 px-4 rounded-lg cursor-pointer border border-primary-light hover:bg-bg-secondary transition-colors ease-linear duration-200" }, [
                                createVNode("div", null, [
                                  createVNode(_component_input_toggle, {
                                    modelValue: unref(form).engagement,
                                    "onUpdate:modelValue": ($event) => unref(form).engagement = $event
                                  }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                ]),
                                createVNode("div", { class: "space-y-1" }, [
                                  createVNode("p", { class: "font-semibold" }, toDisplayString(_ctx.$t("page.transfer.new.doc_undertake")), 1),
                                  createVNode("p", { class: "text-xs text-text-secondary" }, toDisplayString(_ctx.$t("page.transfer.new.doc_undertake_note")), 1)
                                ])
                              ])
                            ])
                          ]),
                          createVNode("div", { class: "grid pt-6 justify-end" }, [
                            createVNode(_component_button_primary, {
                              label: _ctx.$t("button.next"),
                              icon: "pi pi-arrow-right",
                              onClick: ($event) => stepNavigation(activateCallback, 2, "next")
                            }, null, 8, ["label", "onClick"])
                          ])
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_StepPanel, { value: 2 }, {
                    default: withCtx(({ activateCallback }, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<div class="flex flex-col mt-5 mb-7 col-span-2"${_scopeId3}><div class="flex justify-between items-center mb-4"${_scopeId3}><p class="text-sm border-l-4 bg-accent-light pl-2 font-semibold"${_scopeId3}>${ssrInterpolate(_ctx.$t("page.transfer.new.doc_submit"))} `);
                        if (!unref(form).engagement) {
                          _push4(`<span class="text-white font-semibold text-xxs rounded px-1"${_scopeId3}>${ssrInterpolate(_ctx.$t("page.required"))}</span>`);
                        } else {
                          _push4(`<!---->`);
                        }
                        _push4(`</p><p class="text-xs text-text-secondary"${_scopeId3}>${ssrInterpolate(unref(numUploadedFiles))}/${ssrInterpolate(unref(totalNumFiles))} ${ssrInterpolate(_ctx.$t("page.transfer.new.uploaded"))}</p></div>`);
                        if (unref(validErrorMsg).files.trim().length > 0) {
                          _push4(ssrRenderComponent(_component_input_error_msg, {
                            label: unref(validErrorMsg).files,
                            class: "mb-2"
                          }, null, _parent4, _scopeId3));
                        } else {
                          _push4(`<!---->`);
                        }
                        _push4(`<div class="space-y-3"${_scopeId3}>`);
                        if (unref(fileListByType).length > 0) {
                          _push4(`<!--[-->`);
                          ssrRenderList(unref(fileListByType), (file) => {
                            _push4(`<div class="bg-bg-main border border-border-main px-2 py-1 rounded-md text-xs space-y-1"${_scopeId3}><div class="flex items-center space-x-2"${_scopeId3}><p class="font-semibold"${_scopeId3}>${ssrInterpolate(file.name)}</p>`);
                            if (file.isRequired && !unref(form).engagement || file.forExecution) {
                              _push4(`<span class="text-white font-semibold text-xxs bg-accent-light rounded px-1"${_scopeId3}>${ssrInterpolate(_ctx.$t("page.required"))}</span>`);
                            } else {
                              _push4(`<!---->`);
                            }
                            _push4(`</div>`);
                            _push4(ssrRenderComponent(_component_input_file_upload, {
                              type: file.code,
                              category: file.category,
                              onUpdateFile: (e2) => setUploadedFile(file.code, e2),
                              onRemovefile: ($event) => clearFile(file.code)
                            }, null, _parent4, _scopeId3));
                            _push4(`</div>`);
                          });
                          _push4(`<!--]-->`);
                        } else {
                          _push4(`<div class="grid grid-cols-2 border border-dashed rounded-lg bg-bg-main border-primary-dark h-28"${_scopeId3}><div class="grid items-center justify-center"${_scopeId3}><img${ssrRenderAttr("src", _imports_1)} class="object-contain object-center size-12" alt="New manager Logo Svg"${_scopeId3}></div><div class="flex items-center justify-start p-4 text-sm text-right"${_scopeId3}><p${_scopeId3}>${ssrInterpolate(_ctx.$t("page.transfer.new.no_file"))}</p></div></div>`);
                        }
                        _push4(`</div></div><div class="grid grid-flow-row grid-cols-2 items-center pt-6 justify-between"${_scopeId3}><div class="grid justify-start"${_scopeId3}>`);
                        _push4(ssrRenderComponent(_component_Button, {
                          label: "Back",
                          severity: "secondary",
                          icon: "pi pi-arrow-left",
                          pt: unref(buttonPt),
                          onClick: ($event) => activateCallback(1)
                        }, null, _parent4, _scopeId3));
                        _push4(`</div><div class="grid justify-end"${_scopeId3}>`);
                        _push4(ssrRenderComponent(_component_button_primary, {
                          label: _ctx.$t("button.next"),
                          icon: "pi pi-arrow-right",
                          iconPos: "right",
                          loading: unref(isLoading),
                          onClick: ($event) => stepNavigation(activateCallback, 3, "next")
                        }, null, _parent4, _scopeId3));
                        _push4(`</div></div>`);
                      } else {
                        return [
                          createVNode("div", { class: "flex flex-col mt-5 mb-7 col-span-2" }, [
                            createVNode("div", { class: "flex justify-between items-center mb-4" }, [
                              createVNode("p", { class: "text-sm border-l-4 bg-accent-light pl-2 font-semibold" }, [
                                createTextVNode(toDisplayString(_ctx.$t("page.transfer.new.doc_submit")) + " ", 1),
                                !unref(form).engagement ? (openBlock(), createBlock("span", {
                                  key: 0,
                                  class: "text-white font-semibold text-xxs rounded px-1"
                                }, toDisplayString(_ctx.$t("page.required")), 1)) : createCommentVNode("", true)
                              ]),
                              createVNode("p", { class: "text-xs text-text-secondary" }, toDisplayString(unref(numUploadedFiles)) + "/" + toDisplayString(unref(totalNumFiles)) + " " + toDisplayString(_ctx.$t("page.transfer.new.uploaded")), 1)
                            ]),
                            unref(validErrorMsg).files.trim().length > 0 ? (openBlock(), createBlock(_component_input_error_msg, {
                              key: 0,
                              label: unref(validErrorMsg).files,
                              class: "mb-2"
                            }, null, 8, ["label"])) : createCommentVNode("", true),
                            createVNode("div", { class: "space-y-3" }, [
                              unref(fileListByType).length > 0 ? (openBlock(true), createBlock(Fragment, { key: 0 }, renderList(unref(fileListByType), (file) => {
                                return openBlock(), createBlock("div", {
                                  key: file?.uuid,
                                  class: "bg-bg-main border border-border-main px-2 py-1 rounded-md text-xs space-y-1"
                                }, [
                                  createVNode("div", { class: "flex items-center space-x-2" }, [
                                    createVNode("p", { class: "font-semibold" }, toDisplayString(file.name), 1),
                                    file.isRequired && !unref(form).engagement || file.forExecution ? (openBlock(), createBlock("span", {
                                      key: 0,
                                      class: "text-white font-semibold text-xxs bg-accent-light rounded px-1"
                                    }, toDisplayString(_ctx.$t("page.required")), 1)) : createCommentVNode("", true)
                                  ]),
                                  createVNode(_component_input_file_upload, {
                                    type: file.code,
                                    category: file.category,
                                    onUpdateFile: (e2) => setUploadedFile(file.code, e2),
                                    onRemovefile: ($event) => clearFile(file.code)
                                  }, null, 8, ["type", "category", "onUpdateFile", "onRemovefile"])
                                ]);
                              }), 128)) : (openBlock(), createBlock("div", {
                                key: 1,
                                class: "grid grid-cols-2 border border-dashed rounded-lg bg-bg-main border-primary-dark h-28"
                              }, [
                                createVNode("div", { class: "grid items-center justify-center" }, [
                                  createVNode("img", {
                                    src: _imports_1,
                                    class: "object-contain object-center size-12",
                                    alt: "New manager Logo Svg"
                                  })
                                ]),
                                createVNode("div", { class: "flex items-center justify-start p-4 text-sm text-right" }, [
                                  createVNode("p", null, toDisplayString(_ctx.$t("page.transfer.new.no_file")), 1)
                                ])
                              ]))
                            ])
                          ]),
                          createVNode("div", { class: "grid grid-flow-row grid-cols-2 items-center pt-6 justify-between" }, [
                            createVNode("div", { class: "grid justify-start" }, [
                              createVNode(_component_Button, {
                                label: "Back",
                                severity: "secondary",
                                icon: "pi pi-arrow-left",
                                pt: unref(buttonPt),
                                onClick: ($event) => activateCallback(1)
                              }, null, 8, ["pt", "onClick"])
                            ]),
                            createVNode("div", { class: "grid justify-end" }, [
                              createVNode(_component_button_primary, {
                                label: _ctx.$t("button.next"),
                                icon: "pi pi-arrow-right",
                                iconPos: "right",
                                loading: unref(isLoading),
                                onClick: ($event) => stepNavigation(activateCallback, 3, "next")
                              }, null, 8, ["label", "loading", "onClick"])
                            ])
                          ])
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_StepPanel, { value: 3 }, {
                    default: withCtx(({ activateCallback }, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<div class="mt-2"${_scopeId3}><div class="flex flex-row items-center space-x-5 bg-accent-muted px-5 py-3 rounded-lg border-l-4 border-accent"${_scopeId3}><i class="pi pi-check-circle text-accent"${_scopeId3}></i><div class="text-sm"${_scopeId3}><p class="text-accent font-semibold"${_scopeId3}>${ssrInterpolate(_ctx.$t("page.transfer.new.ready"))}</p><p class="text-xs text-accent-dark"${_scopeId3}>${ssrInterpolate(_ctx.$t("page.transfer.new.review"))}</p></div></div><div class="grid xl:grid-cols-[1fr_auto] gap-5"${_scopeId3}><div class="space-y-5"${_scopeId3}><div class="bg-bg-main p-5 rounded-lg mt-5"${_scopeId3}><div class="pt-2 pb-5 border-b border-border-main"${_scopeId3}><p class="flex items-center gap-2"${_scopeId3}><i class="pi pi-send text-accent"${_scopeId3}></i><span class="font-semibold text-primary"${_scopeId3}>${ssrInterpolate(_ctx.$t("page.transfer.new.infos"))}</span></p></div><ul class="text-xs grid grid-cols-2 gap-5 mt-5"${_scopeId3}><li class="flex flex-col space-y-1"${_scopeId3}><p${_scopeId3}>${ssrInterpolate(_ctx.$t("page.transfer.new.debit_account"))}</p><p class="flex flex-col"${_scopeId3}><span class="text-sm font-bold"${_scopeId3}>${ssrInterpolate(unref(form).account?.iBan)}</span><span${_scopeId3}>${ssrInterpolate(_ctx.$t("page.transfer.new.account_num"))} ${ssrInterpolate(unref(form).account?.accType)} - ${ssrInterpolate(_ctx.$t("page.transfer.new.agency"))} ${ssrInterpolate(unref(form).account?.agency)}</span></p></li><li class="flex flex-col space-y-1"${_scopeId3}><span${_scopeId3}>${ssrInterpolate(_ctx.$t("page.transfer.new.beneficiary"))}</span><p class="flex flex-col"${_scopeId3}><span class="text-sm font-bold"${_scopeId3}>${ssrInterpolate(unref(form).beneficiary?.fullName)}</span><span${_scopeId3}>${ssrInterpolate(_ctx.$t("page.transfer.new.iban"))} : ${ssrInterpolate(unref(form).beneficiary?.iban)}</span><span${_scopeId3}>${ssrInterpolate(unref(form).beneficiary?.bankName)}</span></p></li><li class="flex flex-col space-y-1"${_scopeId3}><p${_scopeId3}>${ssrInterpolate(_ctx.$t("page.transfer.new.amount"))}</p><p class="text-sm font-bold space-x-1"${_scopeId3}><span${_scopeId3}>${ssrInterpolate(Intl.NumberFormat("en-US").format(
                          Number(unref(form).amount)
                        ))}</span><span${_scopeId3}>${ssrInterpolate(unref(form).currency)}</span></p></li><li class="flex flex-col space-y-1"${_scopeId3}><p${_scopeId3}>${ssrInterpolate(_ctx.$t("page.transfer.new.execution_date"))}</p><p class="text-sm font-bold"${_scopeId3}>${ssrInterpolate(("formatDate" in _ctx ? _ctx.formatDate : unref(formatDate))(unref(form).targetDate))}</p></li><li class="flex flex-col space-y-1"${_scopeId3}><p${_scopeId3}>${ssrInterpolate(_ctx.$t("page.transfer.new.bank_fee"))}</p><p class="text-sm font-bold"${_scopeId3}>${ssrInterpolate(("feeLabel" in _ctx ? _ctx.feeLabel : unref(feeLabel))(unref(form).supportFee))} - ${ssrInterpolate(_ctx.$t("page.transfer.new.shared_fee"))}</p></li><li class="flex flex-col space-y-1"${_scopeId3}><p${_scopeId3}>${ssrInterpolate(_ctx.$t("page.transfer.new.transfer_type"))}</p><p class="text-sm font-bold"${_scopeId3}>${ssrInterpolate(unref(form).type?.name)}</p></li><li class="flex flex-col space-y-1"${_scopeId3}><p${_scopeId3}>${ssrInterpolate(_ctx.$t("page.transfer.new.motive"))}</p><p class="text-sm font-bold"${_scopeId3}>${ssrInterpolate(unref(form).motive?.name)}</p></li><li class="flex flex-col col-span-2 space-y-1"${_scopeId3}><p${_scopeId3}>${ssrInterpolate(_ctx.$t("page.transfer.new.description"))}</p><p class="max-w-1/2"${_scopeId3}>${ssrInterpolate(unref(form).description)}</p></li></ul></div>`);
                        _push4(ssrRenderComponent(_component_Accordion, {
                          value: unref(showEngagementNotice),
                          "onUpdate:value": ($event) => isRef(showEngagementNotice) ? showEngagementNotice.value = $event : null,
                          class: "col-span-2"
                        }, {
                          default: withCtx((_3, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(_component_AccordionPanel, { value: "0" }, {
                                default: withCtx((_4, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(ssrRenderComponent(_component_AccordionContent, {
                                      "pt:content:style": "padding: 0 !important; ",
                                      "pt:content:class": "grid grid-cols-2 gap-2"
                                    }, {
                                      default: withCtx((_5, _push7, _parent7, _scopeId6) => {
                                        if (_push7) {
                                          _push7(`<p class="text-xs text-text-secondary col-span-2 py-4 bg-accent-muted px-3 border border-accent-light rounded-lg"${_scopeId6}><i class="pi pi-check text-accent" style="${ssrRenderStyle({ "font-size": "0.8rem" })}"${_scopeId6}></i><span class="text-accent font-bold ml-1"${_scopeId6}>${ssrInterpolate(_ctx.$t("page.transfer.engagement.title"))}</span> ${ssrInterpolate(_ctx.$t("page.transfer.engagement.message_01"))} <span class="text-accent underline font-normal hover:font-semibold transition-all ease-linear duration-100 cursor-pointer lowercase"${_scopeId6}>${ssrInterpolate(unref(engagementLetter).name)}</span> ${ssrInterpolate(_ctx.$t("page.transfer.engagement.message_02"))}</p>`);
                                        } else {
                                          return [
                                            createVNode("p", { class: "text-xs text-text-secondary col-span-2 py-4 bg-accent-muted px-3 border border-accent-light rounded-lg" }, [
                                              createVNode("i", {
                                                class: "pi pi-check text-accent",
                                                style: { "font-size": "0.8rem" }
                                              }),
                                              createVNode("span", { class: "text-accent font-bold ml-1" }, toDisplayString(_ctx.$t("page.transfer.engagement.title")), 1),
                                              createTextVNode(" " + toDisplayString(_ctx.$t("page.transfer.engagement.message_01")) + " ", 1),
                                              createVNode("span", {
                                                onClick: ($event) => openPdf(unref(engagementLetter).link),
                                                class: "text-accent underline font-normal hover:font-semibold transition-all ease-linear duration-100 cursor-pointer lowercase"
                                              }, toDisplayString(unref(engagementLetter).name), 9, ["onClick"]),
                                              createTextVNode(" " + toDisplayString(_ctx.$t("page.transfer.engagement.message_02")), 1)
                                            ])
                                          ];
                                        }
                                      }),
                                      _: 2
                                    }, _parent6, _scopeId5));
                                  } else {
                                    return [
                                      createVNode(_component_AccordionContent, {
                                        "pt:content:style": "padding: 0 !important; ",
                                        "pt:content:class": "grid grid-cols-2 gap-2"
                                      }, {
                                        default: withCtx(() => [
                                          createVNode("p", { class: "text-xs text-text-secondary col-span-2 py-4 bg-accent-muted px-3 border border-accent-light rounded-lg" }, [
                                            createVNode("i", {
                                              class: "pi pi-check text-accent",
                                              style: { "font-size": "0.8rem" }
                                            }),
                                            createVNode("span", { class: "text-accent font-bold ml-1" }, toDisplayString(_ctx.$t("page.transfer.engagement.title")), 1),
                                            createTextVNode(" " + toDisplayString(_ctx.$t("page.transfer.engagement.message_01")) + " ", 1),
                                            createVNode("span", {
                                              onClick: ($event) => openPdf(unref(engagementLetter).link),
                                              class: "text-accent underline font-normal hover:font-semibold transition-all ease-linear duration-100 cursor-pointer lowercase"
                                            }, toDisplayString(unref(engagementLetter).name), 9, ["onClick"]),
                                            createTextVNode(" " + toDisplayString(_ctx.$t("page.transfer.engagement.message_02")), 1)
                                          ])
                                        ]),
                                        _: 1
                                      })
                                    ];
                                  }
                                }),
                                _: 2
                              }, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(_component_AccordionPanel, { value: "0" }, {
                                  default: withCtx(() => [
                                    createVNode(_component_AccordionContent, {
                                      "pt:content:style": "padding: 0 !important; ",
                                      "pt:content:class": "grid grid-cols-2 gap-2"
                                    }, {
                                      default: withCtx(() => [
                                        createVNode("p", { class: "text-xs text-text-secondary col-span-2 py-4 bg-accent-muted px-3 border border-accent-light rounded-lg" }, [
                                          createVNode("i", {
                                            class: "pi pi-check text-accent",
                                            style: { "font-size": "0.8rem" }
                                          }),
                                          createVNode("span", { class: "text-accent font-bold ml-1" }, toDisplayString(_ctx.$t("page.transfer.engagement.title")), 1),
                                          createTextVNode(" " + toDisplayString(_ctx.$t("page.transfer.engagement.message_01")) + " ", 1),
                                          createVNode("span", {
                                            onClick: ($event) => openPdf(unref(engagementLetter).link),
                                            class: "text-accent underline font-normal hover:font-semibold transition-all ease-linear duration-100 cursor-pointer lowercase"
                                          }, toDisplayString(unref(engagementLetter).name), 9, ["onClick"]),
                                          createTextVNode(" " + toDisplayString(_ctx.$t("page.transfer.engagement.message_02")), 1)
                                        ])
                                      ]),
                                      _: 1
                                    })
                                  ]),
                                  _: 1
                                })
                              ];
                            }
                          }),
                          _: 2
                        }, _parent4, _scopeId3));
                        _push4(`</div><div class="xl:w-64 space-y-5"${_scopeId3}><div class="mt-5 bg-bg-main p-5 rounded-lg space-y-5"${_scopeId3}><p class="pb-2 border-b border-border-main"${_scopeId3}>${ssrInterpolate(_ctx.$t("button.action"))}</p><div class="flex flex-col space-y-3"${_scopeId3}>`);
                        if (unref(showEngagementNotice) === "1" && unref(form).engagement) {
                          _push4(ssrRenderComponent(_component_button_secondary, {
                            type: "button",
                            label: _ctx.$t("button.engagement_letter"),
                            icon: "pi pi-cloud-download",
                            iconPos: "left",
                            loading: unref(isEngagementLetterLoading),
                            onClick: fetchLetter
                          }, null, _parent4, _scopeId3));
                        } else {
                          _push4(`<!---->`);
                        }
                        _push4(ssrRenderComponent(_component_button_primary, {
                          type: "button",
                          label: _ctx.$t("button.save"),
                          icon: "pi pi-save",
                          iconPos: "left",
                          onClick: handleCreateTransfer
                        }, null, _parent4, _scopeId3));
                        _push4(`</div></div><div class="flex items-center gap-2 text-xxs bg-bg-main p-3 rounded-lg"${_scopeId3}><i class="pi pi-info-circle text-accent-dark" style="${ssrRenderStyle({ "font-size": "0.8rem" })}"${_scopeId3}></i><p class="text-accent-dark"${_scopeId3}>${ssrInterpolate(_ctx.$t("page.transfer.new.submit_confirm"))}</p></div></div></div></div><div class="pt-6 grid justify-between grid-flow-col gap-3 mt-5 border-t border-border-main"${_scopeId3}>`);
                        _push4(ssrRenderComponent(_component_Button, {
                          label: _ctx.$t("button.back"),
                          severity: "secondary",
                          icon: "pi pi-arrow-left",
                          pt: unref(buttonPt),
                          onClick: ($event) => stepNavigation(activateCallback, 4, "back")
                        }, null, _parent4, _scopeId3));
                        _push4(`<div${_scopeId3}></div></div>`);
                      } else {
                        return [
                          createVNode("div", { class: "mt-2" }, [
                            createVNode("div", { class: "flex flex-row items-center space-x-5 bg-accent-muted px-5 py-3 rounded-lg border-l-4 border-accent" }, [
                              createVNode("i", { class: "pi pi-check-circle text-accent" }),
                              createVNode("div", { class: "text-sm" }, [
                                createVNode("p", { class: "text-accent font-semibold" }, toDisplayString(_ctx.$t("page.transfer.new.ready")), 1),
                                createVNode("p", { class: "text-xs text-accent-dark" }, toDisplayString(_ctx.$t("page.transfer.new.review")), 1)
                              ])
                            ]),
                            createVNode("div", { class: "grid xl:grid-cols-[1fr_auto] gap-5" }, [
                              createVNode("div", { class: "space-y-5" }, [
                                createVNode("div", { class: "bg-bg-main p-5 rounded-lg mt-5" }, [
                                  createVNode("div", { class: "pt-2 pb-5 border-b border-border-main" }, [
                                    createVNode("p", { class: "flex items-center gap-2" }, [
                                      createVNode("i", { class: "pi pi-send text-accent" }),
                                      createVNode("span", { class: "font-semibold text-primary" }, toDisplayString(_ctx.$t("page.transfer.new.infos")), 1)
                                    ])
                                  ]),
                                  createVNode("ul", { class: "text-xs grid grid-cols-2 gap-5 mt-5" }, [
                                    createVNode("li", { class: "flex flex-col space-y-1" }, [
                                      createVNode("p", null, toDisplayString(_ctx.$t("page.transfer.new.debit_account")), 1),
                                      createVNode("p", { class: "flex flex-col" }, [
                                        createVNode("span", { class: "text-sm font-bold" }, toDisplayString(unref(form).account?.iBan), 1),
                                        createVNode("span", null, toDisplayString(_ctx.$t("page.transfer.new.account_num")) + " " + toDisplayString(unref(form).account?.accType) + " - " + toDisplayString(_ctx.$t("page.transfer.new.agency")) + " " + toDisplayString(unref(form).account?.agency), 1)
                                      ])
                                    ]),
                                    createVNode("li", { class: "flex flex-col space-y-1" }, [
                                      createVNode("span", null, toDisplayString(_ctx.$t("page.transfer.new.beneficiary")), 1),
                                      createVNode("p", { class: "flex flex-col" }, [
                                        createVNode("span", { class: "text-sm font-bold" }, toDisplayString(unref(form).beneficiary?.fullName), 1),
                                        createVNode("span", null, toDisplayString(_ctx.$t("page.transfer.new.iban")) + " : " + toDisplayString(unref(form).beneficiary?.iban), 1),
                                        createVNode("span", null, toDisplayString(unref(form).beneficiary?.bankName), 1)
                                      ])
                                    ]),
                                    createVNode("li", { class: "flex flex-col space-y-1" }, [
                                      createVNode("p", null, toDisplayString(_ctx.$t("page.transfer.new.amount")), 1),
                                      createVNode("p", { class: "text-sm font-bold space-x-1" }, [
                                        createVNode("span", null, toDisplayString(Intl.NumberFormat("en-US").format(
                                          Number(unref(form).amount)
                                        )), 1),
                                        createVNode("span", null, toDisplayString(unref(form).currency), 1)
                                      ])
                                    ]),
                                    createVNode("li", { class: "flex flex-col space-y-1" }, [
                                      createVNode("p", null, toDisplayString(_ctx.$t("page.transfer.new.execution_date")), 1),
                                      createVNode("p", { class: "text-sm font-bold" }, toDisplayString(("formatDate" in _ctx ? _ctx.formatDate : unref(formatDate))(unref(form).targetDate)), 1)
                                    ]),
                                    createVNode("li", { class: "flex flex-col space-y-1" }, [
                                      createVNode("p", null, toDisplayString(_ctx.$t("page.transfer.new.bank_fee")), 1),
                                      createVNode("p", { class: "text-sm font-bold" }, toDisplayString(("feeLabel" in _ctx ? _ctx.feeLabel : unref(feeLabel))(unref(form).supportFee)) + " - " + toDisplayString(_ctx.$t("page.transfer.new.shared_fee")), 1)
                                    ]),
                                    createVNode("li", { class: "flex flex-col space-y-1" }, [
                                      createVNode("p", null, toDisplayString(_ctx.$t("page.transfer.new.transfer_type")), 1),
                                      createVNode("p", { class: "text-sm font-bold" }, toDisplayString(unref(form).type?.name), 1)
                                    ]),
                                    createVNode("li", { class: "flex flex-col space-y-1" }, [
                                      createVNode("p", null, toDisplayString(_ctx.$t("page.transfer.new.motive")), 1),
                                      createVNode("p", { class: "text-sm font-bold" }, toDisplayString(unref(form).motive?.name), 1)
                                    ]),
                                    createVNode("li", { class: "flex flex-col col-span-2 space-y-1" }, [
                                      createVNode("p", null, toDisplayString(_ctx.$t("page.transfer.new.description")), 1),
                                      createVNode("p", { class: "max-w-1/2" }, toDisplayString(unref(form).description), 1)
                                    ])
                                  ])
                                ]),
                                createVNode(_component_Accordion, {
                                  value: unref(showEngagementNotice),
                                  "onUpdate:value": ($event) => isRef(showEngagementNotice) ? showEngagementNotice.value = $event : null,
                                  class: "col-span-2"
                                }, {
                                  default: withCtx(() => [
                                    createVNode(_component_AccordionPanel, { value: "0" }, {
                                      default: withCtx(() => [
                                        createVNode(_component_AccordionContent, {
                                          "pt:content:style": "padding: 0 !important; ",
                                          "pt:content:class": "grid grid-cols-2 gap-2"
                                        }, {
                                          default: withCtx(() => [
                                            createVNode("p", { class: "text-xs text-text-secondary col-span-2 py-4 bg-accent-muted px-3 border border-accent-light rounded-lg" }, [
                                              createVNode("i", {
                                                class: "pi pi-check text-accent",
                                                style: { "font-size": "0.8rem" }
                                              }),
                                              createVNode("span", { class: "text-accent font-bold ml-1" }, toDisplayString(_ctx.$t("page.transfer.engagement.title")), 1),
                                              createTextVNode(" " + toDisplayString(_ctx.$t("page.transfer.engagement.message_01")) + " ", 1),
                                              createVNode("span", {
                                                onClick: ($event) => openPdf(unref(engagementLetter).link),
                                                class: "text-accent underline font-normal hover:font-semibold transition-all ease-linear duration-100 cursor-pointer lowercase"
                                              }, toDisplayString(unref(engagementLetter).name), 9, ["onClick"]),
                                              createTextVNode(" " + toDisplayString(_ctx.$t("page.transfer.engagement.message_02")), 1)
                                            ])
                                          ]),
                                          _: 1
                                        })
                                      ]),
                                      _: 1
                                    })
                                  ]),
                                  _: 1
                                }, 8, ["value", "onUpdate:value"])
                              ]),
                              createVNode("div", { class: "xl:w-64 space-y-5" }, [
                                createVNode("div", { class: "mt-5 bg-bg-main p-5 rounded-lg space-y-5" }, [
                                  createVNode("p", { class: "pb-2 border-b border-border-main" }, toDisplayString(_ctx.$t("button.action")), 1),
                                  createVNode("div", { class: "flex flex-col space-y-3" }, [
                                    unref(showEngagementNotice) === "1" && unref(form).engagement ? (openBlock(), createBlock(_component_button_secondary, {
                                      key: 0,
                                      type: "button",
                                      label: _ctx.$t("button.engagement_letter"),
                                      icon: "pi pi-cloud-download",
                                      iconPos: "left",
                                      loading: unref(isEngagementLetterLoading),
                                      onClick: withModifiers(fetchLetter, ["prevent"])
                                    }, null, 8, ["label", "loading"])) : createCommentVNode("", true),
                                    createVNode(_component_button_primary, {
                                      type: "button",
                                      label: _ctx.$t("button.save"),
                                      icon: "pi pi-save",
                                      iconPos: "left",
                                      onClick: withModifiers(handleCreateTransfer, ["prevent"])
                                    }, null, 8, ["label"])
                                  ])
                                ]),
                                createVNode("div", { class: "flex items-center gap-2 text-xxs bg-bg-main p-3 rounded-lg" }, [
                                  createVNode("i", {
                                    class: "pi pi-info-circle text-accent-dark",
                                    style: { "font-size": "0.8rem" }
                                  }),
                                  createVNode("p", { class: "text-accent-dark" }, toDisplayString(_ctx.$t("page.transfer.new.submit_confirm")), 1)
                                ])
                              ])
                            ])
                          ]),
                          createVNode("div", { class: "pt-6 grid justify-between grid-flow-col gap-3 mt-5 border-t border-border-main" }, [
                            createVNode(_component_Button, {
                              label: _ctx.$t("button.back"),
                              severity: "secondary",
                              icon: "pi pi-arrow-left",
                              pt: unref(buttonPt),
                              onClick: ($event) => stepNavigation(activateCallback, 4, "back")
                            }, null, 8, ["label", "pt", "onClick"]),
                            createVNode("div")
                          ])
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_StepPanel, { value: 1 }, {
                      default: withCtx(({ activateCallback }) => [
                        createVNode("div", { class: "grid grid-cols-2 gap-3" }, [
                          createVNode("div", null, [
                            createVNode("label", {
                              for: "type",
                              class: "text-xs text-text-secondary"
                            }, [
                              createTextVNode(toDisplayString(_ctx.$t("page.transfer.new.type")) + " ", 1),
                              createVNode("span", { class: "text-white font-semibold text-xxs bg-status-error rounded px-1" }, toDisplayString(_ctx.$t("page.required")), 1)
                            ]),
                            createVNode(_component_input_select, {
                              name: "type",
                              modelValue: unref(form).type,
                              "onUpdate:modelValue": [($event) => unref(form).type = $event, (e2) => setTypeByCategory(e2)],
                              options: unref(transferTypeList).category,
                              loading: unref(isTransferTypeLoading),
                              "value-key": null,
                              filter: "",
                              placeholder: "Choose a transfer type"
                            }, null, 8, ["modelValue", "onUpdate:modelValue", "options", "loading"]),
                            unref(validErrorMsg).type.trim().length > 0 ? (openBlock(), createBlock(_component_input_error_msg, {
                              key: 0,
                              label: unref(validErrorMsg).type
                            }, null, 8, ["label"])) : createCommentVNode("", true)
                          ]),
                          createVNode("div", null, [
                            createVNode("label", {
                              for: "motive",
                              class: "text-xs text-text-secondary"
                            }, [
                              createTextVNode(toDisplayString(_ctx.$t("page.transfer.new.motive")) + " ", 1),
                              createVNode("span", { class: "text-white font-semibold text-xxs bg-status-error rounded px-1" }, toDisplayString(_ctx.$t("page.required")), 1)
                            ]),
                            createVNode(_component_input_select, {
                              name: "motive",
                              modelValue: unref(form).motive,
                              "onUpdate:modelValue": ($event) => unref(form).motive = $event,
                              options: unref(filteredTransferTypeList),
                              loading: unref(isTransferTypeLoading),
                              "value-key": null,
                              filter: "",
                              placeholder: "Choose a transfer motive"
                            }, null, 8, ["modelValue", "onUpdate:modelValue", "options", "loading"]),
                            unref(validErrorMsg).type.trim().length > 0 ? (openBlock(), createBlock(_component_input_error_msg, {
                              key: 0,
                              label: unref(validErrorMsg).type
                            }, null, 8, ["label"])) : createCommentVNode("", true)
                          ]),
                          createVNode("div", null, [
                            createVNode("label", {
                              for: "amount",
                              class: "text-xs text-text-secondary"
                            }, [
                              createTextVNode(toDisplayString(_ctx.$t("page.transfer.new.amount")) + " ", 1),
                              createVNode("span", { class: "text-white font-semibold text-xxs bg-status-error rounded px-1" }, toDisplayString(_ctx.$t("page.required")), 1)
                            ]),
                            createVNode(_component_input_custom_number, {
                              modelValue: unref(form).amount,
                              "onUpdate:modelValue": ($event) => unref(form).amount = $event,
                              identifier: "amount",
                              "max-fraction-digits": 3,
                              placeholder: "0.000",
                              autocomplete: "off",
                              onInput: (e2) => convertCurrency(e2.value),
                              onBlur: canOpenDomAccordion
                            }, null, 8, ["modelValue", "onUpdate:modelValue", "onInput"]),
                            unref(validErrorMsg).amount.trim().length > 0 ? (openBlock(), createBlock(_component_input_error_msg, {
                              key: 0,
                              label: unref(validErrorMsg).amount
                            }, null, 8, ["label"])) : createCommentVNode("", true)
                          ]),
                          createVNode("div", null, [
                            createVNode("label", {
                              for: "currency",
                              class: "text-xs text-text-secondary"
                            }, [
                              createTextVNode(toDisplayString(_ctx.$t("page.transfer.new.currency")) + " ", 1),
                              createVNode("span", { class: "text-white font-semibold text-xxs bg-status-error rounded px-1" }, toDisplayString(_ctx.$t("page.required")), 1)
                            ]),
                            createVNode(_component_input_select, {
                              modelValue: unref(form).currency,
                              "onUpdate:modelValue": [($event) => unref(form).currency = $event, setChosenCurrentRate],
                              options: unref(currencyList),
                              loading: unref(isTransferSettingLoading),
                              filter: "",
                              placeholder: "Choose an currency"
                            }, null, 8, ["modelValue", "onUpdate:modelValue", "options", "loading"]),
                            unref(validErrorMsg).currency.trim().length > 0 ? (openBlock(), createBlock(_component_input_error_msg, {
                              key: 0,
                              label: unref(validErrorMsg).currency
                            }, null, 8, ["label"])) : createCommentVNode("", true)
                          ]),
                          createVNode(_component_Accordion, {
                            value: unref(showAmountConversion),
                            "onUpdate:value": ($event) => isRef(showAmountConversion) ? showAmountConversion.value = $event : null,
                            class: "col-span-2"
                          }, {
                            default: withCtx(() => [
                              createVNode(_component_AccordionPanel, { value: "0" }, {
                                default: withCtx(() => [
                                  createVNode(_component_AccordionContent, { "pt:content:style": "padding: 0 !important" }, {
                                    default: withCtx(() => [
                                      createVNode("ul", { class: "m-0 py-3 bg-bg-secondary px-2" }, [
                                        createVNode("li", { class: "flex items-center justify-between" }, [
                                          createVNode("p", null, toDisplayString(_ctx.$t("page.transfer.new.rate")) + ":", 1),
                                          createVNode("p", null, " 1 " + toDisplayString(unref(chosenRate)?.initCode) + " = " + toDisplayString(unref(chosenRate)?.value) + " " + toDisplayString(unref(chosenRate)?.finalCode), 1)
                                        ]),
                                        createVNode("li", { class: "flex items-center justify-between" }, [
                                          createVNode("p", null, toDisplayString(_ctx.$t("page.transfer.new.total_amount")) + ":", 1),
                                          createVNode("p", null, toDisplayString(Intl.NumberFormat("en-US").format(unref(convertedAmount))) + " " + toDisplayString(unref(chosenRate)?.finalCode), 1)
                                        ])
                                      ])
                                    ]),
                                    _: 1
                                  })
                                ]),
                                _: 1
                              })
                            ]),
                            _: 1
                          }, 8, ["value", "onUpdate:value"]),
                          createVNode("div", null, [
                            createVNode("label", {
                              for: "account",
                              class: "text-xs text-text-secondary"
                            }, [
                              createTextVNode(toDisplayString(_ctx.$t("page.transfer.new.account_num")) + " ", 1),
                              createVNode("span", { class: "text-white font-semibold text-xxs bg-status-error rounded px-1" }, toDisplayString(_ctx.$t("page.required")), 1)
                            ]),
                            createVNode(_component_Select, {
                              modelValue: unref(form).account,
                              "onUpdate:modelValue": [($event) => unref(form).account = $event, (e2) => unref(form).account = e2],
                              options: unref(bankStore).accounts,
                              loading: unref(isTransferSettingLoading),
                              placeholder: _ctx.$t("placeholder.select_account"),
                              pt: unref(selectInputPt)
                            }, {
                              value: withCtx((slotProps) => [
                                slotProps.value ? (openBlock(), createBlock("div", { key: 0 }, [
                                  createVNode("span", { class: "text-sm" }, toDisplayString(slotProps.value.iBan) + " - ", 1),
                                  createVNode("span", { class: "text-sm" }, toDisplayString(slotProps.value.accType), 1)
                                ])) : (openBlock(), createBlock("span", { key: 1 }, toDisplayString(slotProps.placeholder), 1))
                              ]),
                              option: withCtx((slotProps) => [
                                createVNode("div", { class: "flex items-center gap-2" }, [
                                  slotProps.option ? (openBlock(), createBlock("i", {
                                    key: 0,
                                    class: "pi pi-building-columns",
                                    style: { "font-size": "1.3rem" }
                                  })) : createCommentVNode("", true),
                                  createVNode("div", null, [
                                    createVNode("p", { class: "text-sm" }, toDisplayString(slotProps.option.iBan), 1),
                                    createVNode("div", { class: "text-xs" }, [
                                      createVNode("span", null, toDisplayString(slotProps.option.agency) + " - ", 1),
                                      createVNode("span", null, toDisplayString(slotProps.option.accType), 1)
                                    ])
                                  ])
                                ])
                              ]),
                              _: 1
                            }, 8, ["modelValue", "onUpdate:modelValue", "options", "loading", "placeholder", "pt"]),
                            unref(validErrorMsg).account.trim().length > 0 ? (openBlock(), createBlock(_component_input_error_msg, {
                              key: 0,
                              label: unref(validErrorMsg).account
                            }, null, 8, ["label"])) : createCommentVNode("", true)
                          ]),
                          createVNode("div", null, [
                            createVNode("label", {
                              for: "targetDate",
                              class: "text-xs text-text-secondary"
                            }, toDisplayString(_ctx.$t("page.transfer.new.target_date")), 1),
                            createVNode(_component_input_date_picker, {
                              modelValue: unref(form).targetDate,
                              "onUpdate:modelValue": ($event) => unref(form).targetDate = $event,
                              showIcon: "",
                              fluid: "",
                              "icon-display": "input",
                              "min-date": /* @__PURE__ */ new Date()
                            }, null, 8, ["modelValue", "onUpdate:modelValue", "min-date"]),
                            unref(validErrorMsg).targetDate.trim().length > 0 ? (openBlock(), createBlock(_component_input_error_msg, {
                              key: 0,
                              label: unref(validErrorMsg).targetDate
                            }, null, 8, ["label"])) : createCommentVNode("", true)
                          ]),
                          createVNode("div", null, [
                            createVNode("label", {
                              for: "beneficiary",
                              class: "text-xs text-text-secondary"
                            }, [
                              createTextVNode(toDisplayString(_ctx.$t("page.transfer.new.beneficiary")) + " ", 1),
                              createVNode("span", { class: "text-white font-semibold text-xxs bg-status-error rounded px-1" }, toDisplayString(_ctx.$t("page.required")), 1)
                            ]),
                            createVNode(_component_Select, {
                              modelValue: unref(form).beneficiary,
                              "onUpdate:modelValue": [($event) => unref(form).beneficiary = $event, (e2) => unref(form).beneficiary = e2],
                              options: unref(beneficiaryList),
                              loading: unref(isTransferBenefLoading),
                              placeholder: _ctx.$t("placeholder.select_beneficiary"),
                              pt: unref(selectInputPt)
                            }, {
                              value: withCtx((slotProps) => [
                                slotProps.value ? (openBlock(), createBlock("div", { key: 0 }, [
                                  createVNode("span", { class: "text-sm" }, toDisplayString(slotProps.value.fullName) + " - ", 1),
                                  createVNode("span", { class: "text-sm" }, toDisplayString(("sliceIban" in _ctx ? _ctx.sliceIban : unref(sliceIban))(slotProps.value.iban)), 1)
                                ])) : (openBlock(), createBlock("span", { key: 1 }, toDisplayString(slotProps.placeholder), 1))
                              ]),
                              option: withCtx((slotProps) => [
                                createVNode("div", { class: "flex items-center gap-2" }, [
                                  slotProps.option ? (openBlock(), createBlock("i", {
                                    key: 0,
                                    class: "pi pi-building-columns",
                                    style: { "font-size": "1.3rem" }
                                  })) : createCommentVNode("", true),
                                  createVNode("div", null, [
                                    createVNode("p", { class: "text-sm" }, toDisplayString(slotProps.option.fullName), 1),
                                    createVNode("p", { class: "text-xs" }, toDisplayString(slotProps.option.iban), 1)
                                  ])
                                ])
                              ]),
                              _: 1
                            }, 8, ["modelValue", "onUpdate:modelValue", "options", "loading", "placeholder", "pt"]),
                            unref(validErrorMsg).beneficiary.trim().length > 0 ? (openBlock(), createBlock(_component_input_error_msg, {
                              key: 0,
                              label: unref(validErrorMsg).beneficiary
                            }, null, 8, ["label"])) : createCommentVNode("", true)
                          ]),
                          createVNode(_component_Accordion, {
                            value: unref(openDomTypeForm),
                            "onUpdate:value": ($event) => isRef(openDomTypeForm) ? openDomTypeForm.value = $event : null,
                            class: "col-span-2"
                          }, {
                            default: withCtx(() => [
                              createVNode(_component_AccordionPanel, { value: "0" }, {
                                default: withCtx(() => [
                                  createVNode(_component_AccordionContent, { "pt:content:style": "padding: 0 !important;" }, {
                                    default: withCtx(() => [
                                      createVNode("p", { class: "text-xs text-text-secondary mb-0.5" }, [
                                        createTextVNode(toDisplayString(_ctx.$t("page.transfer.new.domiciliation")) + " ", 1),
                                        createVNode("span", { class: "text-white font-semibold text-xxs bg-status-error rounded px-1" }, toDisplayString(_ctx.$t("page.required")), 1)
                                      ]),
                                      createVNode("ul", { class: "grid grid-cols-3 gap-3" }, [
                                        createVNode("li", {
                                          class: [
                                            "flex items-center text-sm gap-2 py-2.5 px-4 rounded-md cursor-pointer border transition-colors ease-linear duration-200",
                                            {
                                              "border-accent bg-accent-muted": unref(chosenOption) === "create",
                                              "border-primary-light hover:bg-bg-secondary": unref(chosenOption) !== "create"
                                            }
                                          ],
                                          onClick: withModifiers(($event) => toggleDomExtraForm("create"), ["prevent"])
                                        }, [
                                          createVNode(_component_input_radio, {
                                            modelValue: unref(chosenOption),
                                            "onUpdate:modelValue": ($event) => isRef(chosenOption) ? chosenOption.value = $event : null,
                                            inputId: "create",
                                            name: "fee",
                                            value: "create",
                                            size: "small"
                                          }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                          createVNode("div", null, [
                                            createVNode("label", {
                                              for: "create",
                                              class: "font-semibold uppercase"
                                            }, toDisplayString(_ctx.$t("page.transfer.new.dom_options.create.title")), 1),
                                            createVNode("p", { class: "text-xs text-text-secondary" }, toDisplayString(_ctx.$t(
                                              "page.transfer.new.dom_options.create.description"
                                            )), 1)
                                          ])
                                        ], 10, ["onClick"]),
                                        createVNode("li", {
                                          class: [
                                            "flex items-center text-sm gap-2 py-2.5 px-4 rounded-md cursor-pointer border transition-colors ease-linear duration-200",
                                            {
                                              "border-accent bg-accent-muted": unref(chosenOption) === "select",
                                              "border-primary-light hover:bg-bg-secondary": unref(chosenOption) !== "select"
                                            }
                                          ],
                                          onClick: withModifiers(($event) => toggleDomExtraForm("select"), ["prevent"])
                                        }, [
                                          createVNode(_component_input_radio, {
                                            modelValue: unref(chosenOption),
                                            "onUpdate:modelValue": ($event) => isRef(chosenOption) ? chosenOption.value = $event : null,
                                            inputId: "select",
                                            name: "fee",
                                            value: "select",
                                            size: "small"
                                          }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                          createVNode("div", null, [
                                            createVNode("label", {
                                              for: "select",
                                              class: "font-semibold uppercase"
                                            }, toDisplayString(_ctx.$t("page.transfer.new.dom_options.select.title")), 1),
                                            createVNode("p", { class: "text-xs text-text-secondary" }, toDisplayString(_ctx.$t(
                                              "page.transfer.new.dom_options.select.description"
                                            )), 1)
                                          ])
                                        ], 10, ["onClick"]),
                                        createVNode("li", {
                                          class: [
                                            "flex items-center text-sm gap-2 py-2.5 px-4 rounded-md cursor-pointer border transition-colors ease-linear duration-200",
                                            {
                                              "border-accent bg-accent-muted": unref(chosenOption) === "done",
                                              "border-primary-light hover:bg-bg-secondary": unref(chosenOption) !== "done"
                                            }
                                          ],
                                          onClick: withModifiers(($event) => toggleDomExtraForm("done"), ["prevent"])
                                        }, [
                                          createVNode(_component_input_radio, {
                                            modelValue: unref(chosenOption),
                                            "onUpdate:modelValue": ($event) => isRef(chosenOption) ? chosenOption.value = $event : null,
                                            inputId: "done",
                                            name: "fee",
                                            value: "done",
                                            size: "small"
                                          }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                          createVNode("div", null, [
                                            createVNode("label", {
                                              for: "done",
                                              class: "font-semibold uppercase"
                                            }, toDisplayString(_ctx.$t("page.transfer.new.dom_options.done.title")), 1),
                                            createVNode("p", { class: "text-xs text-text-secondary" }, toDisplayString(_ctx.$t(
                                              "page.transfer.new.dom_options.done.description"
                                            )), 1)
                                          ])
                                        ], 10, ["onClick"])
                                      ])
                                    ]),
                                    _: 1
                                  })
                                ]),
                                _: 1
                              })
                            ]),
                            _: 1
                          }, 8, ["value", "onUpdate:value"]),
                          createVNode(_component_Accordion, {
                            value: unref(showDomExtraForm),
                            "onUpdate:value": ($event) => isRef(showDomExtraForm) ? showDomExtraForm.value = $event : null,
                            class: "col-span-2"
                          }, {
                            default: withCtx(() => [
                              createVNode(_component_AccordionPanel, { value: "0" }, {
                                default: withCtx(() => [
                                  createVNode(_component_AccordionContent, {
                                    "pt:content:style": "padding: 0 !important; ",
                                    "pt:content:class": "grid grid-cols-2 gap-2"
                                  }, {
                                    default: withCtx(() => [
                                      createVNode("div", null, [
                                        createVNode("label", {
                                          for: "domNumber",
                                          class: "text-xs text-text-secondary"
                                        }, toDisplayString(_ctx.$t("page.transfer.new.dom_number")), 1),
                                        createVNode(_component_input_bg_normal, {
                                          modelValue: unref(form).domNumber,
                                          "onUpdate:modelValue": ($event) => unref(form).domNumber = $event,
                                          identifier: "domNumber",
                                          class: "uppercase"
                                        }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                        unref(validErrorMsg).domNumber.trim().length > 0 ? (openBlock(), createBlock(_component_input_error_msg, {
                                          key: 0,
                                          label: unref(validErrorMsg).domNumber
                                        }, null, 8, ["label"])) : createCommentVNode("", true)
                                      ]),
                                      createVNode("div", null, [
                                        createVNode("label", {
                                          for: "declareNum",
                                          class: "text-xs text-text-secondary"
                                        }, toDisplayString(_ctx.$t("page.transfer.new.declare_num")), 1),
                                        createVNode(_component_input_bg_normal, {
                                          modelValue: unref(form).declareNum,
                                          "onUpdate:modelValue": ($event) => unref(form).declareNum = $event,
                                          identifier: "declareNum",
                                          class: "uppercase"
                                        }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                        unref(validErrorMsg).declareNum.trim().length > 0 ? (openBlock(), createBlock(_component_input_error_msg, {
                                          key: 0,
                                          label: unref(validErrorMsg).declareNum
                                        }, null, 8, ["label"])) : createCommentVNode("", true)
                                      ])
                                    ]),
                                    _: 1
                                  })
                                ]),
                                _: 1
                              }),
                              createVNode(_component_AccordionPanel, { value: "1" }, {
                                default: withCtx(() => [
                                  createVNode(_component_AccordionContent, { "pt:content:style": "padding: 0 !important;" }, {
                                    default: withCtx(() => [
                                      createVNode("div", null, [
                                        createVNode("label", {
                                          for: "domNumber",
                                          class: "text-xs text-text-secondary mb-0.5"
                                        }, toDisplayString(_ctx.$t("page.transfer.new.domiciliation")), 1),
                                        createVNode(_component_Select, {
                                          modelValue: unref(form).domUnikCode,
                                          "onUpdate:modelValue": [($event) => unref(form).domUnikCode = $event, (e2) => unref(form).domUnikCode = e2],
                                          options: unref(domiciliationList),
                                          loading: unref(isDomLoading),
                                          placeholder: _ctx.$t("placeholder.select_domiciliation"),
                                          pt: unref(selectInputPt)
                                        }, {
                                          value: withCtx((slotProps) => [
                                            slotProps.value ? (openBlock(), createBlock("div", { key: 0 }, [
                                              createVNode("span", { class: "text-sm" }, toDisplayString(slotProps.value.beneficiary) + " - ", 1),
                                              createVNode("span", { class: "text-sm font-semibold" }, toDisplayString(Intl.NumberFormat("en-US", {
                                                style: "currency",
                                                currency: slotProps.value.benefCurrency
                                              }).format(Number(slotProps.value.balance))), 1)
                                            ])) : (openBlock(), createBlock("span", { key: 1 }, toDisplayString(slotProps.placeholder), 1))
                                          ]),
                                          option: withCtx((slotProps) => [
                                            createVNode("div", { class: "flex items-center gap-2" }, [
                                              slotProps.option ? (openBlock(), createBlock("i", {
                                                key: 0,
                                                class: "pi pi-id-card",
                                                style: { "font-size": "1.3rem" }
                                              })) : createCommentVNode("", true),
                                              createVNode("div", null, [
                                                createVNode("p", { class: "text-sm" }, toDisplayString(slotProps.option.beneficiary), 1),
                                                createVNode("p", { class: "text-xs font-bold" }, toDisplayString(Intl.NumberFormat("en-US", {
                                                  style: "currency",
                                                  currency: slotProps.option.benefCurrency
                                                }).format(Number(slotProps.option.balance))), 1)
                                              ])
                                            ])
                                          ]),
                                          _: 1
                                        }, 8, ["modelValue", "onUpdate:modelValue", "options", "loading", "placeholder", "pt"]),
                                        unref(validErrorMsg).domNumber.trim().length > 0 ? (openBlock(), createBlock(_component_input_error_msg, {
                                          key: 0,
                                          label: unref(validErrorMsg).domNumber
                                        }, null, 8, ["label"])) : createCommentVNode("", true)
                                      ])
                                    ]),
                                    _: 1
                                  })
                                ]),
                                _: 1
                              })
                            ]),
                            _: 1
                          }, 8, ["value", "onUpdate:value"]),
                          createVNode("div", { class: "col-span-2" }, [
                            createVNode("label", {
                              for: "description",
                              class: "text-xs text-text-secondary"
                            }, toDisplayString(_ctx.$t("page.transfer.new.remittance_info")), 1),
                            createVNode(_component_Textarea, {
                              modelValue: unref(form).description,
                              "onUpdate:modelValue": ($event) => unref(form).description = $event,
                              rows: "5",
                              cols: "10",
                              class: "block w-full placeholder-accent-muted bg-bg-secondary",
                              placeholder: "State the reason for the transfer"
                            }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                            unref(validErrorMsg).description.trim().length > 0 ? (openBlock(), createBlock(_component_input_error_msg, {
                              key: 0,
                              label: unref(validErrorMsg).description
                            }, null, 8, ["label"])) : createCommentVNode("", true)
                          ]),
                          createVNode("div", { class: "col-span-2" }, [
                            createVNode("label", {
                              for: "handleCost",
                              class: "text-xs text-text-secondary"
                            }, [
                              createTextVNode(toDisplayString(_ctx.$t("page.transfer.new.handle_cost")) + " ", 1),
                              createVNode("span", { class: "text-white font-semibold text-xxs bg-status-error rounded px-1" }, toDisplayString(_ctx.$t("page.required")), 1)
                            ]),
                            createVNode("ul", { class: "grid grid-cols-3 gap-3" }, [
                              createVNode("li", {
                                class: [
                                  "flex items-center text-sm gap-2 py-2.5 px-4 rounded-md cursor-pointer border transition-colors ease-linear duration-200",
                                  {
                                    "border-accent bg-accent-muted": unref(form).supportFee === "client",
                                    "border-primary-light hover:bg-bg-secondary": unref(form).supportFee !== "client"
                                  }
                                ],
                                onClick: withModifiers(() => unref(form).supportFee = "client", ["prevent"])
                              }, [
                                createVNode(_component_input_radio, {
                                  modelValue: unref(form).supportFee,
                                  "onUpdate:modelValue": ($event) => unref(form).supportFee = $event,
                                  inputId: "client",
                                  name: "fee",
                                  value: "client",
                                  size: "small"
                                }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                createVNode("div", null, [
                                  createVNode("label", {
                                    for: "client",
                                    class: "font-semibold"
                                  }, " OUR "),
                                  createVNode("p", { class: "text-xs text-text-secondary" }, toDisplayString(_ctx.$t("page.transfer.new.cover_cost.our")), 1)
                                ])
                              ], 10, ["onClick"]),
                              createVNode("li", {
                                class: [
                                  "flex items-center text-sm gap-2 py-2.5 px-4 rounded-md cursor-pointer border transition-colors ease-linear duration-200",
                                  {
                                    "border-accent bg-accent-muted": unref(form).supportFee === "beneficiary",
                                    "border-primary-light hover:bg-bg-secondary": unref(form).supportFee !== "beneficiary"
                                  }
                                ],
                                onClick: withModifiers(() => unref(form).supportFee = "beneficiary", ["prevent"])
                              }, [
                                createVNode(_component_input_radio, {
                                  modelValue: unref(form).supportFee,
                                  "onUpdate:modelValue": ($event) => unref(form).supportFee = $event,
                                  inputId: "beneficiary",
                                  name: "fee",
                                  value: "beneficiary",
                                  size: "small"
                                }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                createVNode("div", null, [
                                  createVNode("label", {
                                    for: "beneficiary",
                                    class: "font-semibold"
                                  }, " BEN "),
                                  createVNode("p", { class: "text-xs text-text-secondary" }, toDisplayString(_ctx.$t("page.transfer.new.cover_cost.ben")), 1)
                                ])
                              ], 10, ["onClick"]),
                              createVNode("li", {
                                class: [
                                  "flex items-center text-sm gap-2 py-2.5 px-4 rounded-md cursor-pointer border transition-colors ease-linear duration-200",
                                  {
                                    "border-accent bg-accent-muted": unref(form).supportFee === "both",
                                    "border-primary-light hover:bg-bg-secondary": unref(form).supportFee !== "both"
                                  }
                                ],
                                onClick: withModifiers(() => unref(form).supportFee = "both", ["prevent"])
                              }, [
                                createVNode(_component_input_radio, {
                                  modelValue: unref(form).supportFee,
                                  "onUpdate:modelValue": ($event) => unref(form).supportFee = $event,
                                  inputId: "both",
                                  name: "fee",
                                  value: "both",
                                  size: "small"
                                }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                createVNode("div", null, [
                                  createVNode("label", {
                                    for: "both",
                                    class: "font-semibold"
                                  }, " SHA "),
                                  createVNode("p", { class: "text-xs text-text-secondary" }, toDisplayString(_ctx.$t("page.transfer.new.cover_cost.sha")), 1)
                                ])
                              ], 10, ["onClick"])
                            ]),
                            unref(validErrorMsg).supportFee.trim().length > 0 ? (openBlock(), createBlock(_component_input_error_msg, {
                              key: 0,
                              label: unref(validErrorMsg).supportFee
                            }, null, 8, ["label"])) : createCommentVNode("", true)
                          ]),
                          createVNode("div", { class: "col-span-2 mt-2 pt-4 border-t border-border-main" }, [
                            createVNode("div", { class: "flex items-center text-sm gap-4 py-2.5 px-4 rounded-lg cursor-pointer border border-primary-light hover:bg-bg-secondary transition-colors ease-linear duration-200" }, [
                              createVNode("div", null, [
                                createVNode(_component_input_toggle, {
                                  modelValue: unref(form).engagement,
                                  "onUpdate:modelValue": ($event) => unref(form).engagement = $event
                                }, null, 8, ["modelValue", "onUpdate:modelValue"])
                              ]),
                              createVNode("div", { class: "space-y-1" }, [
                                createVNode("p", { class: "font-semibold" }, toDisplayString(_ctx.$t("page.transfer.new.doc_undertake")), 1),
                                createVNode("p", { class: "text-xs text-text-secondary" }, toDisplayString(_ctx.$t("page.transfer.new.doc_undertake_note")), 1)
                              ])
                            ])
                          ])
                        ]),
                        createVNode("div", { class: "grid pt-6 justify-end" }, [
                          createVNode(_component_button_primary, {
                            label: _ctx.$t("button.next"),
                            icon: "pi pi-arrow-right",
                            onClick: ($event) => stepNavigation(activateCallback, 2, "next")
                          }, null, 8, ["label", "onClick"])
                        ])
                      ]),
                      _: 1
                    }),
                    createVNode(_component_StepPanel, { value: 2 }, {
                      default: withCtx(({ activateCallback }) => [
                        createVNode("div", { class: "flex flex-col mt-5 mb-7 col-span-2" }, [
                          createVNode("div", { class: "flex justify-between items-center mb-4" }, [
                            createVNode("p", { class: "text-sm border-l-4 bg-accent-light pl-2 font-semibold" }, [
                              createTextVNode(toDisplayString(_ctx.$t("page.transfer.new.doc_submit")) + " ", 1),
                              !unref(form).engagement ? (openBlock(), createBlock("span", {
                                key: 0,
                                class: "text-white font-semibold text-xxs rounded px-1"
                              }, toDisplayString(_ctx.$t("page.required")), 1)) : createCommentVNode("", true)
                            ]),
                            createVNode("p", { class: "text-xs text-text-secondary" }, toDisplayString(unref(numUploadedFiles)) + "/" + toDisplayString(unref(totalNumFiles)) + " " + toDisplayString(_ctx.$t("page.transfer.new.uploaded")), 1)
                          ]),
                          unref(validErrorMsg).files.trim().length > 0 ? (openBlock(), createBlock(_component_input_error_msg, {
                            key: 0,
                            label: unref(validErrorMsg).files,
                            class: "mb-2"
                          }, null, 8, ["label"])) : createCommentVNode("", true),
                          createVNode("div", { class: "space-y-3" }, [
                            unref(fileListByType).length > 0 ? (openBlock(true), createBlock(Fragment, { key: 0 }, renderList(unref(fileListByType), (file) => {
                              return openBlock(), createBlock("div", {
                                key: file?.uuid,
                                class: "bg-bg-main border border-border-main px-2 py-1 rounded-md text-xs space-y-1"
                              }, [
                                createVNode("div", { class: "flex items-center space-x-2" }, [
                                  createVNode("p", { class: "font-semibold" }, toDisplayString(file.name), 1),
                                  file.isRequired && !unref(form).engagement || file.forExecution ? (openBlock(), createBlock("span", {
                                    key: 0,
                                    class: "text-white font-semibold text-xxs bg-accent-light rounded px-1"
                                  }, toDisplayString(_ctx.$t("page.required")), 1)) : createCommentVNode("", true)
                                ]),
                                createVNode(_component_input_file_upload, {
                                  type: file.code,
                                  category: file.category,
                                  onUpdateFile: (e2) => setUploadedFile(file.code, e2),
                                  onRemovefile: ($event) => clearFile(file.code)
                                }, null, 8, ["type", "category", "onUpdateFile", "onRemovefile"])
                              ]);
                            }), 128)) : (openBlock(), createBlock("div", {
                              key: 1,
                              class: "grid grid-cols-2 border border-dashed rounded-lg bg-bg-main border-primary-dark h-28"
                            }, [
                              createVNode("div", { class: "grid items-center justify-center" }, [
                                createVNode("img", {
                                  src: _imports_1,
                                  class: "object-contain object-center size-12",
                                  alt: "New manager Logo Svg"
                                })
                              ]),
                              createVNode("div", { class: "flex items-center justify-start p-4 text-sm text-right" }, [
                                createVNode("p", null, toDisplayString(_ctx.$t("page.transfer.new.no_file")), 1)
                              ])
                            ]))
                          ])
                        ]),
                        createVNode("div", { class: "grid grid-flow-row grid-cols-2 items-center pt-6 justify-between" }, [
                          createVNode("div", { class: "grid justify-start" }, [
                            createVNode(_component_Button, {
                              label: "Back",
                              severity: "secondary",
                              icon: "pi pi-arrow-left",
                              pt: unref(buttonPt),
                              onClick: ($event) => activateCallback(1)
                            }, null, 8, ["pt", "onClick"])
                          ]),
                          createVNode("div", { class: "grid justify-end" }, [
                            createVNode(_component_button_primary, {
                              label: _ctx.$t("button.next"),
                              icon: "pi pi-arrow-right",
                              iconPos: "right",
                              loading: unref(isLoading),
                              onClick: ($event) => stepNavigation(activateCallback, 3, "next")
                            }, null, 8, ["label", "loading", "onClick"])
                          ])
                        ])
                      ]),
                      _: 1
                    }),
                    createVNode(_component_StepPanel, { value: 3 }, {
                      default: withCtx(({ activateCallback }) => [
                        createVNode("div", { class: "mt-2" }, [
                          createVNode("div", { class: "flex flex-row items-center space-x-5 bg-accent-muted px-5 py-3 rounded-lg border-l-4 border-accent" }, [
                            createVNode("i", { class: "pi pi-check-circle text-accent" }),
                            createVNode("div", { class: "text-sm" }, [
                              createVNode("p", { class: "text-accent font-semibold" }, toDisplayString(_ctx.$t("page.transfer.new.ready")), 1),
                              createVNode("p", { class: "text-xs text-accent-dark" }, toDisplayString(_ctx.$t("page.transfer.new.review")), 1)
                            ])
                          ]),
                          createVNode("div", { class: "grid xl:grid-cols-[1fr_auto] gap-5" }, [
                            createVNode("div", { class: "space-y-5" }, [
                              createVNode("div", { class: "bg-bg-main p-5 rounded-lg mt-5" }, [
                                createVNode("div", { class: "pt-2 pb-5 border-b border-border-main" }, [
                                  createVNode("p", { class: "flex items-center gap-2" }, [
                                    createVNode("i", { class: "pi pi-send text-accent" }),
                                    createVNode("span", { class: "font-semibold text-primary" }, toDisplayString(_ctx.$t("page.transfer.new.infos")), 1)
                                  ])
                                ]),
                                createVNode("ul", { class: "text-xs grid grid-cols-2 gap-5 mt-5" }, [
                                  createVNode("li", { class: "flex flex-col space-y-1" }, [
                                    createVNode("p", null, toDisplayString(_ctx.$t("page.transfer.new.debit_account")), 1),
                                    createVNode("p", { class: "flex flex-col" }, [
                                      createVNode("span", { class: "text-sm font-bold" }, toDisplayString(unref(form).account?.iBan), 1),
                                      createVNode("span", null, toDisplayString(_ctx.$t("page.transfer.new.account_num")) + " " + toDisplayString(unref(form).account?.accType) + " - " + toDisplayString(_ctx.$t("page.transfer.new.agency")) + " " + toDisplayString(unref(form).account?.agency), 1)
                                    ])
                                  ]),
                                  createVNode("li", { class: "flex flex-col space-y-1" }, [
                                    createVNode("span", null, toDisplayString(_ctx.$t("page.transfer.new.beneficiary")), 1),
                                    createVNode("p", { class: "flex flex-col" }, [
                                      createVNode("span", { class: "text-sm font-bold" }, toDisplayString(unref(form).beneficiary?.fullName), 1),
                                      createVNode("span", null, toDisplayString(_ctx.$t("page.transfer.new.iban")) + " : " + toDisplayString(unref(form).beneficiary?.iban), 1),
                                      createVNode("span", null, toDisplayString(unref(form).beneficiary?.bankName), 1)
                                    ])
                                  ]),
                                  createVNode("li", { class: "flex flex-col space-y-1" }, [
                                    createVNode("p", null, toDisplayString(_ctx.$t("page.transfer.new.amount")), 1),
                                    createVNode("p", { class: "text-sm font-bold space-x-1" }, [
                                      createVNode("span", null, toDisplayString(Intl.NumberFormat("en-US").format(
                                        Number(unref(form).amount)
                                      )), 1),
                                      createVNode("span", null, toDisplayString(unref(form).currency), 1)
                                    ])
                                  ]),
                                  createVNode("li", { class: "flex flex-col space-y-1" }, [
                                    createVNode("p", null, toDisplayString(_ctx.$t("page.transfer.new.execution_date")), 1),
                                    createVNode("p", { class: "text-sm font-bold" }, toDisplayString(("formatDate" in _ctx ? _ctx.formatDate : unref(formatDate))(unref(form).targetDate)), 1)
                                  ]),
                                  createVNode("li", { class: "flex flex-col space-y-1" }, [
                                    createVNode("p", null, toDisplayString(_ctx.$t("page.transfer.new.bank_fee")), 1),
                                    createVNode("p", { class: "text-sm font-bold" }, toDisplayString(("feeLabel" in _ctx ? _ctx.feeLabel : unref(feeLabel))(unref(form).supportFee)) + " - " + toDisplayString(_ctx.$t("page.transfer.new.shared_fee")), 1)
                                  ]),
                                  createVNode("li", { class: "flex flex-col space-y-1" }, [
                                    createVNode("p", null, toDisplayString(_ctx.$t("page.transfer.new.transfer_type")), 1),
                                    createVNode("p", { class: "text-sm font-bold" }, toDisplayString(unref(form).type?.name), 1)
                                  ]),
                                  createVNode("li", { class: "flex flex-col space-y-1" }, [
                                    createVNode("p", null, toDisplayString(_ctx.$t("page.transfer.new.motive")), 1),
                                    createVNode("p", { class: "text-sm font-bold" }, toDisplayString(unref(form).motive?.name), 1)
                                  ]),
                                  createVNode("li", { class: "flex flex-col col-span-2 space-y-1" }, [
                                    createVNode("p", null, toDisplayString(_ctx.$t("page.transfer.new.description")), 1),
                                    createVNode("p", { class: "max-w-1/2" }, toDisplayString(unref(form).description), 1)
                                  ])
                                ])
                              ]),
                              createVNode(_component_Accordion, {
                                value: unref(showEngagementNotice),
                                "onUpdate:value": ($event) => isRef(showEngagementNotice) ? showEngagementNotice.value = $event : null,
                                class: "col-span-2"
                              }, {
                                default: withCtx(() => [
                                  createVNode(_component_AccordionPanel, { value: "0" }, {
                                    default: withCtx(() => [
                                      createVNode(_component_AccordionContent, {
                                        "pt:content:style": "padding: 0 !important; ",
                                        "pt:content:class": "grid grid-cols-2 gap-2"
                                      }, {
                                        default: withCtx(() => [
                                          createVNode("p", { class: "text-xs text-text-secondary col-span-2 py-4 bg-accent-muted px-3 border border-accent-light rounded-lg" }, [
                                            createVNode("i", {
                                              class: "pi pi-check text-accent",
                                              style: { "font-size": "0.8rem" }
                                            }),
                                            createVNode("span", { class: "text-accent font-bold ml-1" }, toDisplayString(_ctx.$t("page.transfer.engagement.title")), 1),
                                            createTextVNode(" " + toDisplayString(_ctx.$t("page.transfer.engagement.message_01")) + " ", 1),
                                            createVNode("span", {
                                              onClick: ($event) => openPdf(unref(engagementLetter).link),
                                              class: "text-accent underline font-normal hover:font-semibold transition-all ease-linear duration-100 cursor-pointer lowercase"
                                            }, toDisplayString(unref(engagementLetter).name), 9, ["onClick"]),
                                            createTextVNode(" " + toDisplayString(_ctx.$t("page.transfer.engagement.message_02")), 1)
                                          ])
                                        ]),
                                        _: 1
                                      })
                                    ]),
                                    _: 1
                                  })
                                ]),
                                _: 1
                              }, 8, ["value", "onUpdate:value"])
                            ]),
                            createVNode("div", { class: "xl:w-64 space-y-5" }, [
                              createVNode("div", { class: "mt-5 bg-bg-main p-5 rounded-lg space-y-5" }, [
                                createVNode("p", { class: "pb-2 border-b border-border-main" }, toDisplayString(_ctx.$t("button.action")), 1),
                                createVNode("div", { class: "flex flex-col space-y-3" }, [
                                  unref(showEngagementNotice) === "1" && unref(form).engagement ? (openBlock(), createBlock(_component_button_secondary, {
                                    key: 0,
                                    type: "button",
                                    label: _ctx.$t("button.engagement_letter"),
                                    icon: "pi pi-cloud-download",
                                    iconPos: "left",
                                    loading: unref(isEngagementLetterLoading),
                                    onClick: withModifiers(fetchLetter, ["prevent"])
                                  }, null, 8, ["label", "loading"])) : createCommentVNode("", true),
                                  createVNode(_component_button_primary, {
                                    type: "button",
                                    label: _ctx.$t("button.save"),
                                    icon: "pi pi-save",
                                    iconPos: "left",
                                    onClick: withModifiers(handleCreateTransfer, ["prevent"])
                                  }, null, 8, ["label"])
                                ])
                              ]),
                              createVNode("div", { class: "flex items-center gap-2 text-xxs bg-bg-main p-3 rounded-lg" }, [
                                createVNode("i", {
                                  class: "pi pi-info-circle text-accent-dark",
                                  style: { "font-size": "0.8rem" }
                                }),
                                createVNode("p", { class: "text-accent-dark" }, toDisplayString(_ctx.$t("page.transfer.new.submit_confirm")), 1)
                              ])
                            ])
                          ])
                        ]),
                        createVNode("div", { class: "pt-6 grid justify-between grid-flow-col gap-3 mt-5 border-t border-border-main" }, [
                          createVNode(_component_Button, {
                            label: _ctx.$t("button.back"),
                            severity: "secondary",
                            icon: "pi pi-arrow-left",
                            pt: unref(buttonPt),
                            onClick: ($event) => stepNavigation(activateCallback, 4, "back")
                          }, null, 8, ["label", "pt", "onClick"]),
                          createVNode("div")
                        ])
                      ]),
                      _: 1
                    })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_StepList, null, {
                default: withCtx(() => [
                  createVNode(_component_Step, {
                    asChild: "",
                    value: 1
                  }, {
                    default: withCtx(({ activateCallback, value, a11yAttrs }) => [
                      createVNode("div", mergeProps({ class: "flex flex-row flex-auto gap-2" }, a11yAttrs.root), [
                        createVNode(_component_table_transfert_step, mergeProps({
                          value,
                          activeStep: unref(activeStep),
                          activateCallback,
                          icon: "pi pi-user"
                        }, a11yAttrs.header), null, 16, ["value", "activeStep", "activateCallback"]),
                        createVNode(_component_Divider)
                      ], 16)
                    ]),
                    _: 1
                  }),
                  createVNode(_component_Step, {
                    asChild: "",
                    value: 2
                  }, {
                    default: withCtx(({ activateCallback, value, a11yAttrs }) => [
                      createVNode("div", mergeProps({ class: "flex flex-row flex-auto gap-2 pl-2" }, a11yAttrs.root), [
                        createVNode(_component_table_transfert_step, mergeProps({
                          value,
                          activeStep: unref(activeStep),
                          activateCallback,
                          icon: "pi pi-upload"
                        }, a11yAttrs.header), null, 16, ["value", "activeStep", "activateCallback"]),
                        createVNode(_component_Divider)
                      ], 16)
                    ]),
                    _: 1
                  }),
                  createVNode(_component_Step, {
                    asChild: "",
                    value: 3
                  }, {
                    default: withCtx(({ activateCallback, value, a11yAttrs }) => [
                      createVNode("div", mergeProps({ class: "flex flex-row pl-2" }, a11yAttrs.root), [
                        createVNode(_component_table_transfert_step, mergeProps({
                          value,
                          activeStep: unref(activeStep),
                          activateCallback,
                          icon: "pi pi-book"
                        }, a11yAttrs.header), null, 16, ["value", "activeStep", "activateCallback"])
                      ], 16)
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              }),
              createVNode(_component_StepPanels, null, {
                default: withCtx(() => [
                  createVNode(_component_StepPanel, { value: 1 }, {
                    default: withCtx(({ activateCallback }) => [
                      createVNode("div", { class: "grid grid-cols-2 gap-3" }, [
                        createVNode("div", null, [
                          createVNode("label", {
                            for: "type",
                            class: "text-xs text-text-secondary"
                          }, [
                            createTextVNode(toDisplayString(_ctx.$t("page.transfer.new.type")) + " ", 1),
                            createVNode("span", { class: "text-white font-semibold text-xxs bg-status-error rounded px-1" }, toDisplayString(_ctx.$t("page.required")), 1)
                          ]),
                          createVNode(_component_input_select, {
                            name: "type",
                            modelValue: unref(form).type,
                            "onUpdate:modelValue": [($event) => unref(form).type = $event, (e2) => setTypeByCategory(e2)],
                            options: unref(transferTypeList).category,
                            loading: unref(isTransferTypeLoading),
                            "value-key": null,
                            filter: "",
                            placeholder: "Choose a transfer type"
                          }, null, 8, ["modelValue", "onUpdate:modelValue", "options", "loading"]),
                          unref(validErrorMsg).type.trim().length > 0 ? (openBlock(), createBlock(_component_input_error_msg, {
                            key: 0,
                            label: unref(validErrorMsg).type
                          }, null, 8, ["label"])) : createCommentVNode("", true)
                        ]),
                        createVNode("div", null, [
                          createVNode("label", {
                            for: "motive",
                            class: "text-xs text-text-secondary"
                          }, [
                            createTextVNode(toDisplayString(_ctx.$t("page.transfer.new.motive")) + " ", 1),
                            createVNode("span", { class: "text-white font-semibold text-xxs bg-status-error rounded px-1" }, toDisplayString(_ctx.$t("page.required")), 1)
                          ]),
                          createVNode(_component_input_select, {
                            name: "motive",
                            modelValue: unref(form).motive,
                            "onUpdate:modelValue": ($event) => unref(form).motive = $event,
                            options: unref(filteredTransferTypeList),
                            loading: unref(isTransferTypeLoading),
                            "value-key": null,
                            filter: "",
                            placeholder: "Choose a transfer motive"
                          }, null, 8, ["modelValue", "onUpdate:modelValue", "options", "loading"]),
                          unref(validErrorMsg).type.trim().length > 0 ? (openBlock(), createBlock(_component_input_error_msg, {
                            key: 0,
                            label: unref(validErrorMsg).type
                          }, null, 8, ["label"])) : createCommentVNode("", true)
                        ]),
                        createVNode("div", null, [
                          createVNode("label", {
                            for: "amount",
                            class: "text-xs text-text-secondary"
                          }, [
                            createTextVNode(toDisplayString(_ctx.$t("page.transfer.new.amount")) + " ", 1),
                            createVNode("span", { class: "text-white font-semibold text-xxs bg-status-error rounded px-1" }, toDisplayString(_ctx.$t("page.required")), 1)
                          ]),
                          createVNode(_component_input_custom_number, {
                            modelValue: unref(form).amount,
                            "onUpdate:modelValue": ($event) => unref(form).amount = $event,
                            identifier: "amount",
                            "max-fraction-digits": 3,
                            placeholder: "0.000",
                            autocomplete: "off",
                            onInput: (e2) => convertCurrency(e2.value),
                            onBlur: canOpenDomAccordion
                          }, null, 8, ["modelValue", "onUpdate:modelValue", "onInput"]),
                          unref(validErrorMsg).amount.trim().length > 0 ? (openBlock(), createBlock(_component_input_error_msg, {
                            key: 0,
                            label: unref(validErrorMsg).amount
                          }, null, 8, ["label"])) : createCommentVNode("", true)
                        ]),
                        createVNode("div", null, [
                          createVNode("label", {
                            for: "currency",
                            class: "text-xs text-text-secondary"
                          }, [
                            createTextVNode(toDisplayString(_ctx.$t("page.transfer.new.currency")) + " ", 1),
                            createVNode("span", { class: "text-white font-semibold text-xxs bg-status-error rounded px-1" }, toDisplayString(_ctx.$t("page.required")), 1)
                          ]),
                          createVNode(_component_input_select, {
                            modelValue: unref(form).currency,
                            "onUpdate:modelValue": [($event) => unref(form).currency = $event, setChosenCurrentRate],
                            options: unref(currencyList),
                            loading: unref(isTransferSettingLoading),
                            filter: "",
                            placeholder: "Choose an currency"
                          }, null, 8, ["modelValue", "onUpdate:modelValue", "options", "loading"]),
                          unref(validErrorMsg).currency.trim().length > 0 ? (openBlock(), createBlock(_component_input_error_msg, {
                            key: 0,
                            label: unref(validErrorMsg).currency
                          }, null, 8, ["label"])) : createCommentVNode("", true)
                        ]),
                        createVNode(_component_Accordion, {
                          value: unref(showAmountConversion),
                          "onUpdate:value": ($event) => isRef(showAmountConversion) ? showAmountConversion.value = $event : null,
                          class: "col-span-2"
                        }, {
                          default: withCtx(() => [
                            createVNode(_component_AccordionPanel, { value: "0" }, {
                              default: withCtx(() => [
                                createVNode(_component_AccordionContent, { "pt:content:style": "padding: 0 !important" }, {
                                  default: withCtx(() => [
                                    createVNode("ul", { class: "m-0 py-3 bg-bg-secondary px-2" }, [
                                      createVNode("li", { class: "flex items-center justify-between" }, [
                                        createVNode("p", null, toDisplayString(_ctx.$t("page.transfer.new.rate")) + ":", 1),
                                        createVNode("p", null, " 1 " + toDisplayString(unref(chosenRate)?.initCode) + " = " + toDisplayString(unref(chosenRate)?.value) + " " + toDisplayString(unref(chosenRate)?.finalCode), 1)
                                      ]),
                                      createVNode("li", { class: "flex items-center justify-between" }, [
                                        createVNode("p", null, toDisplayString(_ctx.$t("page.transfer.new.total_amount")) + ":", 1),
                                        createVNode("p", null, toDisplayString(Intl.NumberFormat("en-US").format(unref(convertedAmount))) + " " + toDisplayString(unref(chosenRate)?.finalCode), 1)
                                      ])
                                    ])
                                  ]),
                                  _: 1
                                })
                              ]),
                              _: 1
                            })
                          ]),
                          _: 1
                        }, 8, ["value", "onUpdate:value"]),
                        createVNode("div", null, [
                          createVNode("label", {
                            for: "account",
                            class: "text-xs text-text-secondary"
                          }, [
                            createTextVNode(toDisplayString(_ctx.$t("page.transfer.new.account_num")) + " ", 1),
                            createVNode("span", { class: "text-white font-semibold text-xxs bg-status-error rounded px-1" }, toDisplayString(_ctx.$t("page.required")), 1)
                          ]),
                          createVNode(_component_Select, {
                            modelValue: unref(form).account,
                            "onUpdate:modelValue": [($event) => unref(form).account = $event, (e2) => unref(form).account = e2],
                            options: unref(bankStore).accounts,
                            loading: unref(isTransferSettingLoading),
                            placeholder: _ctx.$t("placeholder.select_account"),
                            pt: unref(selectInputPt)
                          }, {
                            value: withCtx((slotProps) => [
                              slotProps.value ? (openBlock(), createBlock("div", { key: 0 }, [
                                createVNode("span", { class: "text-sm" }, toDisplayString(slotProps.value.iBan) + " - ", 1),
                                createVNode("span", { class: "text-sm" }, toDisplayString(slotProps.value.accType), 1)
                              ])) : (openBlock(), createBlock("span", { key: 1 }, toDisplayString(slotProps.placeholder), 1))
                            ]),
                            option: withCtx((slotProps) => [
                              createVNode("div", { class: "flex items-center gap-2" }, [
                                slotProps.option ? (openBlock(), createBlock("i", {
                                  key: 0,
                                  class: "pi pi-building-columns",
                                  style: { "font-size": "1.3rem" }
                                })) : createCommentVNode("", true),
                                createVNode("div", null, [
                                  createVNode("p", { class: "text-sm" }, toDisplayString(slotProps.option.iBan), 1),
                                  createVNode("div", { class: "text-xs" }, [
                                    createVNode("span", null, toDisplayString(slotProps.option.agency) + " - ", 1),
                                    createVNode("span", null, toDisplayString(slotProps.option.accType), 1)
                                  ])
                                ])
                              ])
                            ]),
                            _: 1
                          }, 8, ["modelValue", "onUpdate:modelValue", "options", "loading", "placeholder", "pt"]),
                          unref(validErrorMsg).account.trim().length > 0 ? (openBlock(), createBlock(_component_input_error_msg, {
                            key: 0,
                            label: unref(validErrorMsg).account
                          }, null, 8, ["label"])) : createCommentVNode("", true)
                        ]),
                        createVNode("div", null, [
                          createVNode("label", {
                            for: "targetDate",
                            class: "text-xs text-text-secondary"
                          }, toDisplayString(_ctx.$t("page.transfer.new.target_date")), 1),
                          createVNode(_component_input_date_picker, {
                            modelValue: unref(form).targetDate,
                            "onUpdate:modelValue": ($event) => unref(form).targetDate = $event,
                            showIcon: "",
                            fluid: "",
                            "icon-display": "input",
                            "min-date": /* @__PURE__ */ new Date()
                          }, null, 8, ["modelValue", "onUpdate:modelValue", "min-date"]),
                          unref(validErrorMsg).targetDate.trim().length > 0 ? (openBlock(), createBlock(_component_input_error_msg, {
                            key: 0,
                            label: unref(validErrorMsg).targetDate
                          }, null, 8, ["label"])) : createCommentVNode("", true)
                        ]),
                        createVNode("div", null, [
                          createVNode("label", {
                            for: "beneficiary",
                            class: "text-xs text-text-secondary"
                          }, [
                            createTextVNode(toDisplayString(_ctx.$t("page.transfer.new.beneficiary")) + " ", 1),
                            createVNode("span", { class: "text-white font-semibold text-xxs bg-status-error rounded px-1" }, toDisplayString(_ctx.$t("page.required")), 1)
                          ]),
                          createVNode(_component_Select, {
                            modelValue: unref(form).beneficiary,
                            "onUpdate:modelValue": [($event) => unref(form).beneficiary = $event, (e2) => unref(form).beneficiary = e2],
                            options: unref(beneficiaryList),
                            loading: unref(isTransferBenefLoading),
                            placeholder: _ctx.$t("placeholder.select_beneficiary"),
                            pt: unref(selectInputPt)
                          }, {
                            value: withCtx((slotProps) => [
                              slotProps.value ? (openBlock(), createBlock("div", { key: 0 }, [
                                createVNode("span", { class: "text-sm" }, toDisplayString(slotProps.value.fullName) + " - ", 1),
                                createVNode("span", { class: "text-sm" }, toDisplayString(("sliceIban" in _ctx ? _ctx.sliceIban : unref(sliceIban))(slotProps.value.iban)), 1)
                              ])) : (openBlock(), createBlock("span", { key: 1 }, toDisplayString(slotProps.placeholder), 1))
                            ]),
                            option: withCtx((slotProps) => [
                              createVNode("div", { class: "flex items-center gap-2" }, [
                                slotProps.option ? (openBlock(), createBlock("i", {
                                  key: 0,
                                  class: "pi pi-building-columns",
                                  style: { "font-size": "1.3rem" }
                                })) : createCommentVNode("", true),
                                createVNode("div", null, [
                                  createVNode("p", { class: "text-sm" }, toDisplayString(slotProps.option.fullName), 1),
                                  createVNode("p", { class: "text-xs" }, toDisplayString(slotProps.option.iban), 1)
                                ])
                              ])
                            ]),
                            _: 1
                          }, 8, ["modelValue", "onUpdate:modelValue", "options", "loading", "placeholder", "pt"]),
                          unref(validErrorMsg).beneficiary.trim().length > 0 ? (openBlock(), createBlock(_component_input_error_msg, {
                            key: 0,
                            label: unref(validErrorMsg).beneficiary
                          }, null, 8, ["label"])) : createCommentVNode("", true)
                        ]),
                        createVNode(_component_Accordion, {
                          value: unref(openDomTypeForm),
                          "onUpdate:value": ($event) => isRef(openDomTypeForm) ? openDomTypeForm.value = $event : null,
                          class: "col-span-2"
                        }, {
                          default: withCtx(() => [
                            createVNode(_component_AccordionPanel, { value: "0" }, {
                              default: withCtx(() => [
                                createVNode(_component_AccordionContent, { "pt:content:style": "padding: 0 !important;" }, {
                                  default: withCtx(() => [
                                    createVNode("p", { class: "text-xs text-text-secondary mb-0.5" }, [
                                      createTextVNode(toDisplayString(_ctx.$t("page.transfer.new.domiciliation")) + " ", 1),
                                      createVNode("span", { class: "text-white font-semibold text-xxs bg-status-error rounded px-1" }, toDisplayString(_ctx.$t("page.required")), 1)
                                    ]),
                                    createVNode("ul", { class: "grid grid-cols-3 gap-3" }, [
                                      createVNode("li", {
                                        class: [
                                          "flex items-center text-sm gap-2 py-2.5 px-4 rounded-md cursor-pointer border transition-colors ease-linear duration-200",
                                          {
                                            "border-accent bg-accent-muted": unref(chosenOption) === "create",
                                            "border-primary-light hover:bg-bg-secondary": unref(chosenOption) !== "create"
                                          }
                                        ],
                                        onClick: withModifiers(($event) => toggleDomExtraForm("create"), ["prevent"])
                                      }, [
                                        createVNode(_component_input_radio, {
                                          modelValue: unref(chosenOption),
                                          "onUpdate:modelValue": ($event) => isRef(chosenOption) ? chosenOption.value = $event : null,
                                          inputId: "create",
                                          name: "fee",
                                          value: "create",
                                          size: "small"
                                        }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                        createVNode("div", null, [
                                          createVNode("label", {
                                            for: "create",
                                            class: "font-semibold uppercase"
                                          }, toDisplayString(_ctx.$t("page.transfer.new.dom_options.create.title")), 1),
                                          createVNode("p", { class: "text-xs text-text-secondary" }, toDisplayString(_ctx.$t(
                                            "page.transfer.new.dom_options.create.description"
                                          )), 1)
                                        ])
                                      ], 10, ["onClick"]),
                                      createVNode("li", {
                                        class: [
                                          "flex items-center text-sm gap-2 py-2.5 px-4 rounded-md cursor-pointer border transition-colors ease-linear duration-200",
                                          {
                                            "border-accent bg-accent-muted": unref(chosenOption) === "select",
                                            "border-primary-light hover:bg-bg-secondary": unref(chosenOption) !== "select"
                                          }
                                        ],
                                        onClick: withModifiers(($event) => toggleDomExtraForm("select"), ["prevent"])
                                      }, [
                                        createVNode(_component_input_radio, {
                                          modelValue: unref(chosenOption),
                                          "onUpdate:modelValue": ($event) => isRef(chosenOption) ? chosenOption.value = $event : null,
                                          inputId: "select",
                                          name: "fee",
                                          value: "select",
                                          size: "small"
                                        }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                        createVNode("div", null, [
                                          createVNode("label", {
                                            for: "select",
                                            class: "font-semibold uppercase"
                                          }, toDisplayString(_ctx.$t("page.transfer.new.dom_options.select.title")), 1),
                                          createVNode("p", { class: "text-xs text-text-secondary" }, toDisplayString(_ctx.$t(
                                            "page.transfer.new.dom_options.select.description"
                                          )), 1)
                                        ])
                                      ], 10, ["onClick"]),
                                      createVNode("li", {
                                        class: [
                                          "flex items-center text-sm gap-2 py-2.5 px-4 rounded-md cursor-pointer border transition-colors ease-linear duration-200",
                                          {
                                            "border-accent bg-accent-muted": unref(chosenOption) === "done",
                                            "border-primary-light hover:bg-bg-secondary": unref(chosenOption) !== "done"
                                          }
                                        ],
                                        onClick: withModifiers(($event) => toggleDomExtraForm("done"), ["prevent"])
                                      }, [
                                        createVNode(_component_input_radio, {
                                          modelValue: unref(chosenOption),
                                          "onUpdate:modelValue": ($event) => isRef(chosenOption) ? chosenOption.value = $event : null,
                                          inputId: "done",
                                          name: "fee",
                                          value: "done",
                                          size: "small"
                                        }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                        createVNode("div", null, [
                                          createVNode("label", {
                                            for: "done",
                                            class: "font-semibold uppercase"
                                          }, toDisplayString(_ctx.$t("page.transfer.new.dom_options.done.title")), 1),
                                          createVNode("p", { class: "text-xs text-text-secondary" }, toDisplayString(_ctx.$t(
                                            "page.transfer.new.dom_options.done.description"
                                          )), 1)
                                        ])
                                      ], 10, ["onClick"])
                                    ])
                                  ]),
                                  _: 1
                                })
                              ]),
                              _: 1
                            })
                          ]),
                          _: 1
                        }, 8, ["value", "onUpdate:value"]),
                        createVNode(_component_Accordion, {
                          value: unref(showDomExtraForm),
                          "onUpdate:value": ($event) => isRef(showDomExtraForm) ? showDomExtraForm.value = $event : null,
                          class: "col-span-2"
                        }, {
                          default: withCtx(() => [
                            createVNode(_component_AccordionPanel, { value: "0" }, {
                              default: withCtx(() => [
                                createVNode(_component_AccordionContent, {
                                  "pt:content:style": "padding: 0 !important; ",
                                  "pt:content:class": "grid grid-cols-2 gap-2"
                                }, {
                                  default: withCtx(() => [
                                    createVNode("div", null, [
                                      createVNode("label", {
                                        for: "domNumber",
                                        class: "text-xs text-text-secondary"
                                      }, toDisplayString(_ctx.$t("page.transfer.new.dom_number")), 1),
                                      createVNode(_component_input_bg_normal, {
                                        modelValue: unref(form).domNumber,
                                        "onUpdate:modelValue": ($event) => unref(form).domNumber = $event,
                                        identifier: "domNumber",
                                        class: "uppercase"
                                      }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                      unref(validErrorMsg).domNumber.trim().length > 0 ? (openBlock(), createBlock(_component_input_error_msg, {
                                        key: 0,
                                        label: unref(validErrorMsg).domNumber
                                      }, null, 8, ["label"])) : createCommentVNode("", true)
                                    ]),
                                    createVNode("div", null, [
                                      createVNode("label", {
                                        for: "declareNum",
                                        class: "text-xs text-text-secondary"
                                      }, toDisplayString(_ctx.$t("page.transfer.new.declare_num")), 1),
                                      createVNode(_component_input_bg_normal, {
                                        modelValue: unref(form).declareNum,
                                        "onUpdate:modelValue": ($event) => unref(form).declareNum = $event,
                                        identifier: "declareNum",
                                        class: "uppercase"
                                      }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                      unref(validErrorMsg).declareNum.trim().length > 0 ? (openBlock(), createBlock(_component_input_error_msg, {
                                        key: 0,
                                        label: unref(validErrorMsg).declareNum
                                      }, null, 8, ["label"])) : createCommentVNode("", true)
                                    ])
                                  ]),
                                  _: 1
                                })
                              ]),
                              _: 1
                            }),
                            createVNode(_component_AccordionPanel, { value: "1" }, {
                              default: withCtx(() => [
                                createVNode(_component_AccordionContent, { "pt:content:style": "padding: 0 !important;" }, {
                                  default: withCtx(() => [
                                    createVNode("div", null, [
                                      createVNode("label", {
                                        for: "domNumber",
                                        class: "text-xs text-text-secondary mb-0.5"
                                      }, toDisplayString(_ctx.$t("page.transfer.new.domiciliation")), 1),
                                      createVNode(_component_Select, {
                                        modelValue: unref(form).domUnikCode,
                                        "onUpdate:modelValue": [($event) => unref(form).domUnikCode = $event, (e2) => unref(form).domUnikCode = e2],
                                        options: unref(domiciliationList),
                                        loading: unref(isDomLoading),
                                        placeholder: _ctx.$t("placeholder.select_domiciliation"),
                                        pt: unref(selectInputPt)
                                      }, {
                                        value: withCtx((slotProps) => [
                                          slotProps.value ? (openBlock(), createBlock("div", { key: 0 }, [
                                            createVNode("span", { class: "text-sm" }, toDisplayString(slotProps.value.beneficiary) + " - ", 1),
                                            createVNode("span", { class: "text-sm font-semibold" }, toDisplayString(Intl.NumberFormat("en-US", {
                                              style: "currency",
                                              currency: slotProps.value.benefCurrency
                                            }).format(Number(slotProps.value.balance))), 1)
                                          ])) : (openBlock(), createBlock("span", { key: 1 }, toDisplayString(slotProps.placeholder), 1))
                                        ]),
                                        option: withCtx((slotProps) => [
                                          createVNode("div", { class: "flex items-center gap-2" }, [
                                            slotProps.option ? (openBlock(), createBlock("i", {
                                              key: 0,
                                              class: "pi pi-id-card",
                                              style: { "font-size": "1.3rem" }
                                            })) : createCommentVNode("", true),
                                            createVNode("div", null, [
                                              createVNode("p", { class: "text-sm" }, toDisplayString(slotProps.option.beneficiary), 1),
                                              createVNode("p", { class: "text-xs font-bold" }, toDisplayString(Intl.NumberFormat("en-US", {
                                                style: "currency",
                                                currency: slotProps.option.benefCurrency
                                              }).format(Number(slotProps.option.balance))), 1)
                                            ])
                                          ])
                                        ]),
                                        _: 1
                                      }, 8, ["modelValue", "onUpdate:modelValue", "options", "loading", "placeholder", "pt"]),
                                      unref(validErrorMsg).domNumber.trim().length > 0 ? (openBlock(), createBlock(_component_input_error_msg, {
                                        key: 0,
                                        label: unref(validErrorMsg).domNumber
                                      }, null, 8, ["label"])) : createCommentVNode("", true)
                                    ])
                                  ]),
                                  _: 1
                                })
                              ]),
                              _: 1
                            })
                          ]),
                          _: 1
                        }, 8, ["value", "onUpdate:value"]),
                        createVNode("div", { class: "col-span-2" }, [
                          createVNode("label", {
                            for: "description",
                            class: "text-xs text-text-secondary"
                          }, toDisplayString(_ctx.$t("page.transfer.new.remittance_info")), 1),
                          createVNode(_component_Textarea, {
                            modelValue: unref(form).description,
                            "onUpdate:modelValue": ($event) => unref(form).description = $event,
                            rows: "5",
                            cols: "10",
                            class: "block w-full placeholder-accent-muted bg-bg-secondary",
                            placeholder: "State the reason for the transfer"
                          }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                          unref(validErrorMsg).description.trim().length > 0 ? (openBlock(), createBlock(_component_input_error_msg, {
                            key: 0,
                            label: unref(validErrorMsg).description
                          }, null, 8, ["label"])) : createCommentVNode("", true)
                        ]),
                        createVNode("div", { class: "col-span-2" }, [
                          createVNode("label", {
                            for: "handleCost",
                            class: "text-xs text-text-secondary"
                          }, [
                            createTextVNode(toDisplayString(_ctx.$t("page.transfer.new.handle_cost")) + " ", 1),
                            createVNode("span", { class: "text-white font-semibold text-xxs bg-status-error rounded px-1" }, toDisplayString(_ctx.$t("page.required")), 1)
                          ]),
                          createVNode("ul", { class: "grid grid-cols-3 gap-3" }, [
                            createVNode("li", {
                              class: [
                                "flex items-center text-sm gap-2 py-2.5 px-4 rounded-md cursor-pointer border transition-colors ease-linear duration-200",
                                {
                                  "border-accent bg-accent-muted": unref(form).supportFee === "client",
                                  "border-primary-light hover:bg-bg-secondary": unref(form).supportFee !== "client"
                                }
                              ],
                              onClick: withModifiers(() => unref(form).supportFee = "client", ["prevent"])
                            }, [
                              createVNode(_component_input_radio, {
                                modelValue: unref(form).supportFee,
                                "onUpdate:modelValue": ($event) => unref(form).supportFee = $event,
                                inputId: "client",
                                name: "fee",
                                value: "client",
                                size: "small"
                              }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                              createVNode("div", null, [
                                createVNode("label", {
                                  for: "client",
                                  class: "font-semibold"
                                }, " OUR "),
                                createVNode("p", { class: "text-xs text-text-secondary" }, toDisplayString(_ctx.$t("page.transfer.new.cover_cost.our")), 1)
                              ])
                            ], 10, ["onClick"]),
                            createVNode("li", {
                              class: [
                                "flex items-center text-sm gap-2 py-2.5 px-4 rounded-md cursor-pointer border transition-colors ease-linear duration-200",
                                {
                                  "border-accent bg-accent-muted": unref(form).supportFee === "beneficiary",
                                  "border-primary-light hover:bg-bg-secondary": unref(form).supportFee !== "beneficiary"
                                }
                              ],
                              onClick: withModifiers(() => unref(form).supportFee = "beneficiary", ["prevent"])
                            }, [
                              createVNode(_component_input_radio, {
                                modelValue: unref(form).supportFee,
                                "onUpdate:modelValue": ($event) => unref(form).supportFee = $event,
                                inputId: "beneficiary",
                                name: "fee",
                                value: "beneficiary",
                                size: "small"
                              }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                              createVNode("div", null, [
                                createVNode("label", {
                                  for: "beneficiary",
                                  class: "font-semibold"
                                }, " BEN "),
                                createVNode("p", { class: "text-xs text-text-secondary" }, toDisplayString(_ctx.$t("page.transfer.new.cover_cost.ben")), 1)
                              ])
                            ], 10, ["onClick"]),
                            createVNode("li", {
                              class: [
                                "flex items-center text-sm gap-2 py-2.5 px-4 rounded-md cursor-pointer border transition-colors ease-linear duration-200",
                                {
                                  "border-accent bg-accent-muted": unref(form).supportFee === "both",
                                  "border-primary-light hover:bg-bg-secondary": unref(form).supportFee !== "both"
                                }
                              ],
                              onClick: withModifiers(() => unref(form).supportFee = "both", ["prevent"])
                            }, [
                              createVNode(_component_input_radio, {
                                modelValue: unref(form).supportFee,
                                "onUpdate:modelValue": ($event) => unref(form).supportFee = $event,
                                inputId: "both",
                                name: "fee",
                                value: "both",
                                size: "small"
                              }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                              createVNode("div", null, [
                                createVNode("label", {
                                  for: "both",
                                  class: "font-semibold"
                                }, " SHA "),
                                createVNode("p", { class: "text-xs text-text-secondary" }, toDisplayString(_ctx.$t("page.transfer.new.cover_cost.sha")), 1)
                              ])
                            ], 10, ["onClick"])
                          ]),
                          unref(validErrorMsg).supportFee.trim().length > 0 ? (openBlock(), createBlock(_component_input_error_msg, {
                            key: 0,
                            label: unref(validErrorMsg).supportFee
                          }, null, 8, ["label"])) : createCommentVNode("", true)
                        ]),
                        createVNode("div", { class: "col-span-2 mt-2 pt-4 border-t border-border-main" }, [
                          createVNode("div", { class: "flex items-center text-sm gap-4 py-2.5 px-4 rounded-lg cursor-pointer border border-primary-light hover:bg-bg-secondary transition-colors ease-linear duration-200" }, [
                            createVNode("div", null, [
                              createVNode(_component_input_toggle, {
                                modelValue: unref(form).engagement,
                                "onUpdate:modelValue": ($event) => unref(form).engagement = $event
                              }, null, 8, ["modelValue", "onUpdate:modelValue"])
                            ]),
                            createVNode("div", { class: "space-y-1" }, [
                              createVNode("p", { class: "font-semibold" }, toDisplayString(_ctx.$t("page.transfer.new.doc_undertake")), 1),
                              createVNode("p", { class: "text-xs text-text-secondary" }, toDisplayString(_ctx.$t("page.transfer.new.doc_undertake_note")), 1)
                            ])
                          ])
                        ])
                      ]),
                      createVNode("div", { class: "grid pt-6 justify-end" }, [
                        createVNode(_component_button_primary, {
                          label: _ctx.$t("button.next"),
                          icon: "pi pi-arrow-right",
                          onClick: ($event) => stepNavigation(activateCallback, 2, "next")
                        }, null, 8, ["label", "onClick"])
                      ])
                    ]),
                    _: 1
                  }),
                  createVNode(_component_StepPanel, { value: 2 }, {
                    default: withCtx(({ activateCallback }) => [
                      createVNode("div", { class: "flex flex-col mt-5 mb-7 col-span-2" }, [
                        createVNode("div", { class: "flex justify-between items-center mb-4" }, [
                          createVNode("p", { class: "text-sm border-l-4 bg-accent-light pl-2 font-semibold" }, [
                            createTextVNode(toDisplayString(_ctx.$t("page.transfer.new.doc_submit")) + " ", 1),
                            !unref(form).engagement ? (openBlock(), createBlock("span", {
                              key: 0,
                              class: "text-white font-semibold text-xxs rounded px-1"
                            }, toDisplayString(_ctx.$t("page.required")), 1)) : createCommentVNode("", true)
                          ]),
                          createVNode("p", { class: "text-xs text-text-secondary" }, toDisplayString(unref(numUploadedFiles)) + "/" + toDisplayString(unref(totalNumFiles)) + " " + toDisplayString(_ctx.$t("page.transfer.new.uploaded")), 1)
                        ]),
                        unref(validErrorMsg).files.trim().length > 0 ? (openBlock(), createBlock(_component_input_error_msg, {
                          key: 0,
                          label: unref(validErrorMsg).files,
                          class: "mb-2"
                        }, null, 8, ["label"])) : createCommentVNode("", true),
                        createVNode("div", { class: "space-y-3" }, [
                          unref(fileListByType).length > 0 ? (openBlock(true), createBlock(Fragment, { key: 0 }, renderList(unref(fileListByType), (file) => {
                            return openBlock(), createBlock("div", {
                              key: file?.uuid,
                              class: "bg-bg-main border border-border-main px-2 py-1 rounded-md text-xs space-y-1"
                            }, [
                              createVNode("div", { class: "flex items-center space-x-2" }, [
                                createVNode("p", { class: "font-semibold" }, toDisplayString(file.name), 1),
                                file.isRequired && !unref(form).engagement || file.forExecution ? (openBlock(), createBlock("span", {
                                  key: 0,
                                  class: "text-white font-semibold text-xxs bg-accent-light rounded px-1"
                                }, toDisplayString(_ctx.$t("page.required")), 1)) : createCommentVNode("", true)
                              ]),
                              createVNode(_component_input_file_upload, {
                                type: file.code,
                                category: file.category,
                                onUpdateFile: (e2) => setUploadedFile(file.code, e2),
                                onRemovefile: ($event) => clearFile(file.code)
                              }, null, 8, ["type", "category", "onUpdateFile", "onRemovefile"])
                            ]);
                          }), 128)) : (openBlock(), createBlock("div", {
                            key: 1,
                            class: "grid grid-cols-2 border border-dashed rounded-lg bg-bg-main border-primary-dark h-28"
                          }, [
                            createVNode("div", { class: "grid items-center justify-center" }, [
                              createVNode("img", {
                                src: _imports_1,
                                class: "object-contain object-center size-12",
                                alt: "New manager Logo Svg"
                              })
                            ]),
                            createVNode("div", { class: "flex items-center justify-start p-4 text-sm text-right" }, [
                              createVNode("p", null, toDisplayString(_ctx.$t("page.transfer.new.no_file")), 1)
                            ])
                          ]))
                        ])
                      ]),
                      createVNode("div", { class: "grid grid-flow-row grid-cols-2 items-center pt-6 justify-between" }, [
                        createVNode("div", { class: "grid justify-start" }, [
                          createVNode(_component_Button, {
                            label: "Back",
                            severity: "secondary",
                            icon: "pi pi-arrow-left",
                            pt: unref(buttonPt),
                            onClick: ($event) => activateCallback(1)
                          }, null, 8, ["pt", "onClick"])
                        ]),
                        createVNode("div", { class: "grid justify-end" }, [
                          createVNode(_component_button_primary, {
                            label: _ctx.$t("button.next"),
                            icon: "pi pi-arrow-right",
                            iconPos: "right",
                            loading: unref(isLoading),
                            onClick: ($event) => stepNavigation(activateCallback, 3, "next")
                          }, null, 8, ["label", "loading", "onClick"])
                        ])
                      ])
                    ]),
                    _: 1
                  }),
                  createVNode(_component_StepPanel, { value: 3 }, {
                    default: withCtx(({ activateCallback }) => [
                      createVNode("div", { class: "mt-2" }, [
                        createVNode("div", { class: "flex flex-row items-center space-x-5 bg-accent-muted px-5 py-3 rounded-lg border-l-4 border-accent" }, [
                          createVNode("i", { class: "pi pi-check-circle text-accent" }),
                          createVNode("div", { class: "text-sm" }, [
                            createVNode("p", { class: "text-accent font-semibold" }, toDisplayString(_ctx.$t("page.transfer.new.ready")), 1),
                            createVNode("p", { class: "text-xs text-accent-dark" }, toDisplayString(_ctx.$t("page.transfer.new.review")), 1)
                          ])
                        ]),
                        createVNode("div", { class: "grid xl:grid-cols-[1fr_auto] gap-5" }, [
                          createVNode("div", { class: "space-y-5" }, [
                            createVNode("div", { class: "bg-bg-main p-5 rounded-lg mt-5" }, [
                              createVNode("div", { class: "pt-2 pb-5 border-b border-border-main" }, [
                                createVNode("p", { class: "flex items-center gap-2" }, [
                                  createVNode("i", { class: "pi pi-send text-accent" }),
                                  createVNode("span", { class: "font-semibold text-primary" }, toDisplayString(_ctx.$t("page.transfer.new.infos")), 1)
                                ])
                              ]),
                              createVNode("ul", { class: "text-xs grid grid-cols-2 gap-5 mt-5" }, [
                                createVNode("li", { class: "flex flex-col space-y-1" }, [
                                  createVNode("p", null, toDisplayString(_ctx.$t("page.transfer.new.debit_account")), 1),
                                  createVNode("p", { class: "flex flex-col" }, [
                                    createVNode("span", { class: "text-sm font-bold" }, toDisplayString(unref(form).account?.iBan), 1),
                                    createVNode("span", null, toDisplayString(_ctx.$t("page.transfer.new.account_num")) + " " + toDisplayString(unref(form).account?.accType) + " - " + toDisplayString(_ctx.$t("page.transfer.new.agency")) + " " + toDisplayString(unref(form).account?.agency), 1)
                                  ])
                                ]),
                                createVNode("li", { class: "flex flex-col space-y-1" }, [
                                  createVNode("span", null, toDisplayString(_ctx.$t("page.transfer.new.beneficiary")), 1),
                                  createVNode("p", { class: "flex flex-col" }, [
                                    createVNode("span", { class: "text-sm font-bold" }, toDisplayString(unref(form).beneficiary?.fullName), 1),
                                    createVNode("span", null, toDisplayString(_ctx.$t("page.transfer.new.iban")) + " : " + toDisplayString(unref(form).beneficiary?.iban), 1),
                                    createVNode("span", null, toDisplayString(unref(form).beneficiary?.bankName), 1)
                                  ])
                                ]),
                                createVNode("li", { class: "flex flex-col space-y-1" }, [
                                  createVNode("p", null, toDisplayString(_ctx.$t("page.transfer.new.amount")), 1),
                                  createVNode("p", { class: "text-sm font-bold space-x-1" }, [
                                    createVNode("span", null, toDisplayString(Intl.NumberFormat("en-US").format(
                                      Number(unref(form).amount)
                                    )), 1),
                                    createVNode("span", null, toDisplayString(unref(form).currency), 1)
                                  ])
                                ]),
                                createVNode("li", { class: "flex flex-col space-y-1" }, [
                                  createVNode("p", null, toDisplayString(_ctx.$t("page.transfer.new.execution_date")), 1),
                                  createVNode("p", { class: "text-sm font-bold" }, toDisplayString(("formatDate" in _ctx ? _ctx.formatDate : unref(formatDate))(unref(form).targetDate)), 1)
                                ]),
                                createVNode("li", { class: "flex flex-col space-y-1" }, [
                                  createVNode("p", null, toDisplayString(_ctx.$t("page.transfer.new.bank_fee")), 1),
                                  createVNode("p", { class: "text-sm font-bold" }, toDisplayString(("feeLabel" in _ctx ? _ctx.feeLabel : unref(feeLabel))(unref(form).supportFee)) + " - " + toDisplayString(_ctx.$t("page.transfer.new.shared_fee")), 1)
                                ]),
                                createVNode("li", { class: "flex flex-col space-y-1" }, [
                                  createVNode("p", null, toDisplayString(_ctx.$t("page.transfer.new.transfer_type")), 1),
                                  createVNode("p", { class: "text-sm font-bold" }, toDisplayString(unref(form).type?.name), 1)
                                ]),
                                createVNode("li", { class: "flex flex-col space-y-1" }, [
                                  createVNode("p", null, toDisplayString(_ctx.$t("page.transfer.new.motive")), 1),
                                  createVNode("p", { class: "text-sm font-bold" }, toDisplayString(unref(form).motive?.name), 1)
                                ]),
                                createVNode("li", { class: "flex flex-col col-span-2 space-y-1" }, [
                                  createVNode("p", null, toDisplayString(_ctx.$t("page.transfer.new.description")), 1),
                                  createVNode("p", { class: "max-w-1/2" }, toDisplayString(unref(form).description), 1)
                                ])
                              ])
                            ]),
                            createVNode(_component_Accordion, {
                              value: unref(showEngagementNotice),
                              "onUpdate:value": ($event) => isRef(showEngagementNotice) ? showEngagementNotice.value = $event : null,
                              class: "col-span-2"
                            }, {
                              default: withCtx(() => [
                                createVNode(_component_AccordionPanel, { value: "0" }, {
                                  default: withCtx(() => [
                                    createVNode(_component_AccordionContent, {
                                      "pt:content:style": "padding: 0 !important; ",
                                      "pt:content:class": "grid grid-cols-2 gap-2"
                                    }, {
                                      default: withCtx(() => [
                                        createVNode("p", { class: "text-xs text-text-secondary col-span-2 py-4 bg-accent-muted px-3 border border-accent-light rounded-lg" }, [
                                          createVNode("i", {
                                            class: "pi pi-check text-accent",
                                            style: { "font-size": "0.8rem" }
                                          }),
                                          createVNode("span", { class: "text-accent font-bold ml-1" }, toDisplayString(_ctx.$t("page.transfer.engagement.title")), 1),
                                          createTextVNode(" " + toDisplayString(_ctx.$t("page.transfer.engagement.message_01")) + " ", 1),
                                          createVNode("span", {
                                            onClick: ($event) => openPdf(unref(engagementLetter).link),
                                            class: "text-accent underline font-normal hover:font-semibold transition-all ease-linear duration-100 cursor-pointer lowercase"
                                          }, toDisplayString(unref(engagementLetter).name), 9, ["onClick"]),
                                          createTextVNode(" " + toDisplayString(_ctx.$t("page.transfer.engagement.message_02")), 1)
                                        ])
                                      ]),
                                      _: 1
                                    })
                                  ]),
                                  _: 1
                                })
                              ]),
                              _: 1
                            }, 8, ["value", "onUpdate:value"])
                          ]),
                          createVNode("div", { class: "xl:w-64 space-y-5" }, [
                            createVNode("div", { class: "mt-5 bg-bg-main p-5 rounded-lg space-y-5" }, [
                              createVNode("p", { class: "pb-2 border-b border-border-main" }, toDisplayString(_ctx.$t("button.action")), 1),
                              createVNode("div", { class: "flex flex-col space-y-3" }, [
                                unref(showEngagementNotice) === "1" && unref(form).engagement ? (openBlock(), createBlock(_component_button_secondary, {
                                  key: 0,
                                  type: "button",
                                  label: _ctx.$t("button.engagement_letter"),
                                  icon: "pi pi-cloud-download",
                                  iconPos: "left",
                                  loading: unref(isEngagementLetterLoading),
                                  onClick: withModifiers(fetchLetter, ["prevent"])
                                }, null, 8, ["label", "loading"])) : createCommentVNode("", true),
                                createVNode(_component_button_primary, {
                                  type: "button",
                                  label: _ctx.$t("button.save"),
                                  icon: "pi pi-save",
                                  iconPos: "left",
                                  onClick: withModifiers(handleCreateTransfer, ["prevent"])
                                }, null, 8, ["label"])
                              ])
                            ]),
                            createVNode("div", { class: "flex items-center gap-2 text-xxs bg-bg-main p-3 rounded-lg" }, [
                              createVNode("i", {
                                class: "pi pi-info-circle text-accent-dark",
                                style: { "font-size": "0.8rem" }
                              }),
                              createVNode("p", { class: "text-accent-dark" }, toDisplayString(_ctx.$t("page.transfer.new.submit_confirm")), 1)
                            ])
                          ])
                        ])
                      ]),
                      createVNode("div", { class: "pt-6 grid justify-between grid-flow-col gap-3 mt-5 border-t border-border-main" }, [
                        createVNode(_component_Button, {
                          label: _ctx.$t("button.back"),
                          severity: "secondary",
                          icon: "pi pi-arrow-left",
                          pt: unref(buttonPt),
                          onClick: ($event) => stepNavigation(activateCallback, 4, "back")
                        }, null, 8, ["label", "pt", "onClick"]),
                        createVNode("div")
                      ])
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</form></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/transfer/create.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=create-CcuISXY_.mjs.map
