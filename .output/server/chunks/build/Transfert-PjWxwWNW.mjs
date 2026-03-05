import { _ as __nuxt_component_0 } from './Search-DUB2NvYm.mjs';
import { _ as __nuxt_component_1, a as __nuxt_component_2 } from './ImageBlur-Cr_DWKbR.mjs';
import script$3 from './index-BRid2hRl.mjs';
import { defineComponent, ref, watch, mergeProps, unref, isRef, withCtx, createVNode, toDisplayString, createTextVNode, withDirectives, withModifiers, openBlock, createBlock, createCommentVNode, toHandlers, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate, ssrRenderStyle, ssrGetDirectiveProps, ssrRenderAttr, ssrRenderClass } from 'vue/server-renderer';
import { _ as __nuxt_component_10 } from './FileUpload-APGyD7h5.mjs';
import { _ as __nuxt_component_13 } from './Outline-DW3-Glvz.mjs';
import { _ as __nuxt_component_1$1 } from './Primary-DW1ITzn7.mjs';
import { c as useNuxtApp, b as useI18n, e as useRouter, T as Tooltip, d as useRuntimeConfig } from './server.mjs';
import script$2 from './index-B8K62pww.mjs';
import script$1 from './index-DqCQSLxI.mjs';
import script from './index-CQoIQu5i.mjs';
import { _ as _imports_0 } from './virtual_public-CioWCtL8.mjs';
import moment from 'moment';
import { u as useNotify } from './notify-7jIrthPf.mjs';
import { u as useTransferStore } from './transfer-BhCiLivd.mjs';
import { h as handleApiError } from './api.errors-BfPdMj8S.mjs';

const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "LightVariant",
  __ssrInlineRender: true,
  props: {
    identifier: {}
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_input_otp = script$3;
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Input/Otp/LightVariant.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_3 = Object.assign(_sfc_main$1, { __name: "InputOtpLightVariant" });
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "Transfert",
  __ssrInlineRender: true,
  setup(__props) {
    const config = useRuntimeConfig();
    const { $apiFetch } = useNuxtApp();
    const { e, s } = useNotify();
    const { t, locale } = useI18n();
    const router = useRouter();
    const transferStore = useTransferStore();
    const transferList = ref([]);
    const filteredTransferList = ref([]);
    const isSubmitOtp = ref(false);
    const isRequestingOtp = ref(false);
    const isListLoading = ref(false);
    const isSearching = ref(false);
    const showOtpModal = ref(false);
    const searchIndex = ref("");
    const searchTimeout = ref();
    const activeTransfer = ref({
      amount: "",
      beneficiaryName: "",
      code: "",
      isEngaged: false
    });
    const validatingOtpForm = ref({
      otp: "",
      lang: locale.value,
      files: {
        engagement: ""
      }
    });
    const validOtpErrorMsg = ref({
      otp: "",
      files: {
        engagement: false
      }
    });
    const showListLoader = () => isListLoading.value = true;
    const hideListLoader = () => isListLoading.value = false;
    const showOtpRequestLoader = () => isRequestingOtp.value = true;
    const hideOtpRequestLoader = () => isRequestingOtp.value = false;
    const showSearchLoader = () => isSearching.value = true;
    const hideSearchLoader = () => isSearching.value = false;
    const showSubmitOtpLoader = () => isSubmitOtp.value = true;
    const hideSubmitOtpLoader = () => isSubmitOtp.value = false;
    const openOtpModal = () => {
      showOtpModal.value = true;
    };
    const closingOtpModal = () => {
      validatingOtpForm.value = {
        otp: "",
        lang: locale.value,
        files: {
          engagement: ""
        }
      };
      resetOtpValidErrorMsg();
      showOtpModal.value = false;
      list();
    };
    const resetOtpValidErrorMsg = () => {
      validOtpErrorMsg.value = {
        otp: "",
        files: {
          engagement: false
        }
      };
    };
    const setEngagementFile = (fileId) => {
      validatingOtpForm.value.files.engagement = fileId;
    };
    const clearEngagemenFile = () => {
      validatingOtpForm.value.files.engagement = "";
    };
    const list = async () => {
      showListLoader();
      try {
        const { apiResponse } = await $apiFetch(config.public.api.transfer.list, {
          method: "POST",
          body: {
            lang: locale.value
          }
        });
        transferList.value = apiResponse;
        filteredTransferList.value = apiResponse;
      } catch (error) {
        const errorMsg = handleApiError(error);
        if (errorMsg.length > 0) {
          e(errorMsg);
        }
      } finally {
        hideListLoader();
      }
    };
    const sendTransfer = async (transfer) => {
      activeTransfer.value = {
        amount: transfer.amount,
        beneficiaryName: transfer.beneficiaryName,
        code: transfer.code,
        isEngaged: transfer.isEngaged
      };
      openOtpModal();
      showOtpRequestLoader();
      try {
        const { apiResponse, validError } = await $apiFetch(
          config.public.api.transfer.otp.request,
          {
            method: "POST",
            body: {
              fileCode: transfer.code,
              lang: locale.value
            }
          }
        );
        if (validError) {
          validError.forEach((err) => e(err?.message));
        }
      } catch (error) {
        const errorMsg = handleApiError(error);
        if (errorMsg.length > 0) {
          e(errorMsg);
        }
      } finally {
        hideOtpRequestLoader();
      }
    };
    const searchTransfer = () => {
      showSearchLoader();
      filteredTransferList.value = transferList.value.filter((transfer) => {
        let index = searchIndex.value.toLowerCase();
        return transfer.code.toLowerCase().includes(index) || transfer.beneficiaryName.toLowerCase().includes(index) || transfer.status.toLowerCase().includes(index) || transfer.amount.toLowerCase().includes(index) || transfer.createdAt.toLowerCase().includes(index) || transfer.type.toLowerCase().includes(index);
      });
      hideSearchLoader();
    };
    const submitOtpTransfer = async () => {
      resetOtpValidErrorMsg();
      if (activeTransfer.value.isEngaged && validatingOtpForm.value.files.engagement.trim().length === 0) {
        validOtpErrorMsg.value.files.engagement = true;
        setTimeout(() => {
          validOtpErrorMsg.value.files.engagement = false;
        }, 5e3);
        e(t("validation.engagement_file"));
      } else {
        showSubmitOtpLoader();
        try {
          const { apiResponse, validError } = await $apiFetch(
            config.public.api.transfer.otp.validate,
            {
              method: "POST",
              body: {
                demandCode: activeTransfer.value.code,
                fileCode: validatingOtpForm.value.files.engagement,
                otp: validatingOtpForm.value.otp,
                lang: locale.value
              }
            }
          );
          if (validError) {
            validError.forEach((err) => e(err?.message));
          } else {
            s(apiResponse);
            closingOtpModal();
          }
        } catch (error) {
          const errorMsg = handleApiError(error);
          if (errorMsg.length > 0) {
            e(errorMsg);
          }
        } finally {
          hideSubmitOtpLoader();
        }
      }
    };
    const showDetails = (uuid) => {
      let result = filteredTransferList.value.find(
        (transfer) => transfer.uuid === uuid
      );
      if (result) {
        transferStore.updateChosenTransfer(result);
        router.push(`/transfer/${uuid}/details`);
      } else {
        transferStore.resetChosenTransfer();
      }
    };
    watch(
      () => searchIndex.value,
      (newIndex) => {
        clearTimeout(searchTimeout.value);
        if (newIndex.trim().length >= 2) {
          searchTimeout.value = setTimeout(() => {
            searchTransfer();
          }, 500);
        } else {
          filteredTransferList.value = transferList.value;
        }
      }
    );
    return (_ctx, _push, _parent, _attrs) => {
      const _component_gadget_search = __nuxt_component_0;
      const _component_DataTable = script;
      const _component_Column = script$1;
      const _component_Dialog = script$2;
      const _component_gadget_banner = __nuxt_component_1;
      const _component_gadget_image_blur = __nuxt_component_2;
      const _component_input_otp_light_variant = __nuxt_component_3;
      const _component_input_file_upload = __nuxt_component_10;
      const _component_button_outline = __nuxt_component_13;
      const _component_button_primary = __nuxt_component_1$1;
      const _directive_tooltip = Tooltip;
      let _temp0, _temp1;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "space-y-6" }, _attrs))}><div class="flex flex-row space-x-6">`);
      _push(ssrRenderComponent(_component_gadget_search, {
        modelValue: unref(searchIndex),
        "onUpdate:modelValue": ($event) => isRef(searchIndex) ? searchIndex.value = $event : null,
        "is-loading": unref(isSearching),
        onSearch: searchTransfer
      }, null, _parent));
      _push(`<div></div></div>`);
      _push(ssrRenderComponent(_component_DataTable, {
        value: unref(filteredTransferList),
        loading: unref(isListLoading),
        paginator: "",
        rows: 10,
        rowsPerPageOptions: [10, 20, 50],
        pt: {
          root: "text-xs",
          row: {
            headerRow: "bg-border-main"
          }
        },
        resizableColumns: "",
        columnResizeMode: "fit",
        showGridlines: ""
      }, {
        empty: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="grid items-center h-40 text-text-secondary text-center"${_scopeId}><p class="flex flex-col space-y-1"${_scopeId}><i class="pi pi-inbox" style="${ssrRenderStyle({ "font-size": "2rem" })}"${_scopeId}></i><span class="font-semibold"${_scopeId}>No data</span></p></div>`);
          } else {
            return [
              createVNode("div", { class: "grid items-center h-40 text-text-secondary text-center" }, [
                createVNode("p", { class: "flex flex-col space-y-1" }, [
                  createVNode("i", {
                    class: "pi pi-inbox",
                    style: { "font-size": "2rem" }
                  }),
                  createVNode("span", { class: "font-semibold" }, "No data")
                ])
              ])
            ];
          }
        }),
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_Column, {
              header: unref(t)("table.date_time"),
              pt: {
                columnTitle: "text-xs",
                columnHeaderContent: "flex justify-center"
              },
              style: { "border-right": "1px solid var(--color-border-main)" }
            }, {
              body: withCtx((slotProps, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<div class="text-left w-full"${_scopeId2}>${ssrInterpolate(unref(moment)(slotProps.data.createdAt).format("YYYY-MM-DD"))}</div>`);
                } else {
                  return [
                    createVNode("div", { class: "text-left w-full" }, toDisplayString(unref(moment)(slotProps.data.createdAt).format("YYYY-MM-DD")), 1)
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_Column, {
              header: unref(t)("table.transaction_id"),
              pt: {
                columnTitle: "text-xs",
                columnHeaderContent: "flex justify-center"
              },
              style: { "border-right": "1px solid var(--color-border-main)" }
            }, {
              body: withCtx((slotProps, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`${ssrInterpolate(slotProps.data.code)}`);
                } else {
                  return [
                    createTextVNode(toDisplayString(slotProps.data.code), 1)
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_Column, {
              header: unref(t)("table.beneficiary"),
              pt: {
                columnTitle: "text-xs",
                headerCell: "bg-border-main",
                columnHeaderContent: "flex justify-center"
              },
              style: { "border-right": "1px solid var(--color-border-main)" }
            }, {
              body: withCtx((slotProps, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`${ssrInterpolate(slotProps.data.beneficiaryName)}`);
                } else {
                  return [
                    createTextVNode(toDisplayString(slotProps.data.beneficiaryName), 1)
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_Column, {
              header: unref(t)("table.type"),
              pt: {
                columnTitle: "text-xs",
                columnHeaderContent: "flex justify-center"
              },
              style: { "border-right": "1px solid var(--color-border-main)" }
            }, {
              body: withCtx((slotProps, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<div class="w-52 text-wrap"${_scopeId2}>${ssrInterpolate(slotProps.data.type)}</div>`);
                } else {
                  return [
                    createVNode("div", { class: "w-52 text-wrap" }, toDisplayString(slotProps.data.type), 1)
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_Column, {
              header: unref(t)("table.amount"),
              pt: {
                columnTitle: "text-xs",
                headerCell: "bg-border-main",
                columnHeaderContent: "flex justify-center"
              },
              style: { "border-right": "1px solid var(--color-border-main)" }
            }, {
              body: withCtx((slotProps, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`${ssrInterpolate(Intl.NumberFormat("en-US", {
                    style: "currency",
                    currency: slotProps.data.currency
                  }).format(Number(slotProps.data.amount)))}`);
                } else {
                  return [
                    createTextVNode(toDisplayString(Intl.NumberFormat("en-US", {
                      style: "currency",
                      currency: slotProps.data.currency
                    }).format(Number(slotProps.data.amount))), 1)
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_Column, {
              header: unref(t)("table.status"),
              pt: {
                columnTitle: "text-xs",
                columnHeaderContent: "flex justify-center"
              },
              style: { "border-right": "1px solid var(--color-border-main)" }
            }, {
              body: withCtx((slotProps, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<div class="flex justify-center"${_scopeId2}><div class="inline-flex w-full items-center justify-self-center rounded-md border px-2.5 py-0.5 space-x-1.5 bg-primary text-white" style="${ssrRenderStyle({ "font-size": "0.7rem" })}"${_scopeId2}><button type="button" class="rounded-full bg-accent-light size-1.5"${_scopeId2}></button><span${_scopeId2}>${ssrInterpolate(slotProps.data.status)}</span></div></div>`);
                } else {
                  return [
                    createVNode("div", { class: "flex justify-center" }, [
                      createVNode("div", {
                        class: "inline-flex w-full items-center justify-self-center rounded-md border px-2.5 py-0.5 space-x-1.5 bg-primary text-white",
                        style: { "font-size": "0.7rem" }
                      }, [
                        createVNode("button", {
                          type: "button",
                          class: "rounded-full bg-accent-light size-1.5"
                        }),
                        createVNode("span", null, toDisplayString(slotProps.data.status), 1)
                      ])
                    ])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_Column, {
              header: unref(t)("table.action")
            }, {
              body: withCtx((slotProps, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<div class="flex items-center gap-2"${_scopeId2}><i${ssrRenderAttrs(_temp0 = mergeProps({
                    class: "pi pi-eye cursor-pointer hover:scale-110 hover:text-accent-light transition-transform duration-200 ease-linear",
                    style: { "font-size": "1rem" }
                  }, ssrGetDirectiveProps(_ctx, _directive_tooltip, "View Details", void 0, { left: true })))}${_scopeId2}>${"textContent" in _temp0 ? ssrInterpolate(_temp0.textContent) : _temp0.innerHTML ?? ""}</i>`);
                  if (slotProps.data.canValidate) {
                    _push3(`<i${ssrRenderAttrs(_temp1 = mergeProps({ class: "pi pi-send hover:text-accent-light cursor-pointer hover:scale-110 transition-transform duration-200 ease-linear" }, ssrGetDirectiveProps(_ctx, _directive_tooltip, "Send", void 0, { left: true })))}${_scopeId2}>${"textContent" in _temp1 ? ssrInterpolate(_temp1.textContent) : _temp1.innerHTML ?? ""}</i>`);
                  } else {
                    _push3(`<!---->`);
                  }
                  _push3(`</div>`);
                } else {
                  return [
                    createVNode("div", { class: "flex items-center gap-2" }, [
                      withDirectives(createVNode("i", {
                        class: "pi pi-eye cursor-pointer hover:scale-110 hover:text-accent-light transition-transform duration-200 ease-linear",
                        style: { "font-size": "1rem" },
                        onClick: withModifiers(($event) => showDetails(slotProps.data.uuid), ["prevent"])
                      }, null, 8, ["onClick"]), [
                        [
                          _directive_tooltip,
                          "View Details",
                          void 0,
                          { left: true }
                        ]
                      ]),
                      slotProps.data.canValidate ? withDirectives((openBlock(), createBlock("i", {
                        key: 0,
                        class: "pi pi-send hover:text-accent-light cursor-pointer hover:scale-110 transition-transform duration-200 ease-linear",
                        onClick: withModifiers(($event) => sendTransfer(slotProps.data), ["prevent"])
                      }, null, 8, ["onClick"])), [
                        [
                          _directive_tooltip,
                          "Send",
                          void 0,
                          { left: true }
                        ]
                      ]) : createCommentVNode("", true)
                    ])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_Column, {
                header: unref(t)("table.date_time"),
                pt: {
                  columnTitle: "text-xs",
                  columnHeaderContent: "flex justify-center"
                },
                style: { "border-right": "1px solid var(--color-border-main)" }
              }, {
                body: withCtx((slotProps) => [
                  createVNode("div", { class: "text-left w-full" }, toDisplayString(unref(moment)(slotProps.data.createdAt).format("YYYY-MM-DD")), 1)
                ]),
                _: 1
              }, 8, ["header"]),
              createVNode(_component_Column, {
                header: unref(t)("table.transaction_id"),
                pt: {
                  columnTitle: "text-xs",
                  columnHeaderContent: "flex justify-center"
                },
                style: { "border-right": "1px solid var(--color-border-main)" }
              }, {
                body: withCtx((slotProps) => [
                  createTextVNode(toDisplayString(slotProps.data.code), 1)
                ]),
                _: 1
              }, 8, ["header"]),
              createVNode(_component_Column, {
                header: unref(t)("table.beneficiary"),
                pt: {
                  columnTitle: "text-xs",
                  headerCell: "bg-border-main",
                  columnHeaderContent: "flex justify-center"
                },
                style: { "border-right": "1px solid var(--color-border-main)" }
              }, {
                body: withCtx((slotProps) => [
                  createTextVNode(toDisplayString(slotProps.data.beneficiaryName), 1)
                ]),
                _: 1
              }, 8, ["header"]),
              createVNode(_component_Column, {
                header: unref(t)("table.type"),
                pt: {
                  columnTitle: "text-xs",
                  columnHeaderContent: "flex justify-center"
                },
                style: { "border-right": "1px solid var(--color-border-main)" }
              }, {
                body: withCtx((slotProps) => [
                  createVNode("div", { class: "w-52 text-wrap" }, toDisplayString(slotProps.data.type), 1)
                ]),
                _: 1
              }, 8, ["header"]),
              createVNode(_component_Column, {
                header: unref(t)("table.amount"),
                pt: {
                  columnTitle: "text-xs",
                  headerCell: "bg-border-main",
                  columnHeaderContent: "flex justify-center"
                },
                style: { "border-right": "1px solid var(--color-border-main)" }
              }, {
                body: withCtx((slotProps) => [
                  createTextVNode(toDisplayString(Intl.NumberFormat("en-US", {
                    style: "currency",
                    currency: slotProps.data.currency
                  }).format(Number(slotProps.data.amount))), 1)
                ]),
                _: 1
              }, 8, ["header"]),
              createVNode(_component_Column, {
                header: unref(t)("table.status"),
                pt: {
                  columnTitle: "text-xs",
                  columnHeaderContent: "flex justify-center"
                },
                style: { "border-right": "1px solid var(--color-border-main)" }
              }, {
                body: withCtx((slotProps) => [
                  createVNode("div", { class: "flex justify-center" }, [
                    createVNode("div", {
                      class: "inline-flex w-full items-center justify-self-center rounded-md border px-2.5 py-0.5 space-x-1.5 bg-primary text-white",
                      style: { "font-size": "0.7rem" }
                    }, [
                      createVNode("button", {
                        type: "button",
                        class: "rounded-full bg-accent-light size-1.5"
                      }),
                      createVNode("span", null, toDisplayString(slotProps.data.status), 1)
                    ])
                  ])
                ]),
                _: 1
              }, 8, ["header"]),
              createVNode(_component_Column, {
                header: unref(t)("table.action")
              }, {
                body: withCtx((slotProps) => [
                  createVNode("div", { class: "flex items-center gap-2" }, [
                    withDirectives(createVNode("i", {
                      class: "pi pi-eye cursor-pointer hover:scale-110 hover:text-accent-light transition-transform duration-200 ease-linear",
                      style: { "font-size": "1rem" },
                      onClick: withModifiers(($event) => showDetails(slotProps.data.uuid), ["prevent"])
                    }, null, 8, ["onClick"]), [
                      [
                        _directive_tooltip,
                        "View Details",
                        void 0,
                        { left: true }
                      ]
                    ]),
                    slotProps.data.canValidate ? withDirectives((openBlock(), createBlock("i", {
                      key: 0,
                      class: "pi pi-send hover:text-accent-light cursor-pointer hover:scale-110 transition-transform duration-200 ease-linear",
                      onClick: withModifiers(($event) => sendTransfer(slotProps.data), ["prevent"])
                    }, null, 8, ["onClick"])), [
                      [
                        _directive_tooltip,
                        "Send",
                        void 0,
                        { left: true }
                      ]
                    ]) : createCommentVNode("", true)
                  ])
                ]),
                _: 1
              }, 8, ["header"])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_Dialog, {
        visible: unref(showOtpModal),
        "onUpdate:visible": ($event) => isRef(showOtpModal) ? showOtpModal.value = $event : null,
        modal: "",
        style: { width: "30rem" },
        onHide: closingOtpModal
      }, {
        container: withCtx(({ closeCallback }, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="p-1 rounded-xl"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_gadget_banner, null, {
              default: withCtx((_, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<div class="grid grid-cols-[auto_1fr]"${_scopeId2}><div class="grid justify-center ml-2 text-sm text-white lg:text-base"${_scopeId2}><div class="ml-5 space-y-1 translate-y-6"${_scopeId2}><h3 class="font-semibold"${_scopeId2}>${ssrInterpolate(_ctx.$t("page.transfer.send.title1"))}</h3><h4 class="text-xs"${_scopeId2}>${ssrInterpolate(_ctx.$t("page.transfer.send.title2"))}</h4></div></div><div class="flex justify-end"${_scopeId2}>`);
                  _push3(ssrRenderComponent(_component_gadget_image_blur, null, {
                    default: withCtx((_2, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<img${ssrRenderAttr("src", _imports_0)} class="z-30 object-cover object-center translate-x-5 translate-y-3 size-18" alt="Create User Logo"${_scopeId3}>`);
                      } else {
                        return [
                          createVNode("img", {
                            src: _imports_0,
                            class: "z-30 object-cover object-center translate-x-5 translate-y-3 size-18",
                            alt: "Create User Logo"
                          })
                        ];
                      }
                    }),
                    _: 2
                  }, _parent3, _scopeId2));
                  _push3(`</div></div>`);
                } else {
                  return [
                    createVNode("div", { class: "grid grid-cols-[auto_1fr]" }, [
                      createVNode("div", { class: "grid justify-center ml-2 text-sm text-white lg:text-base" }, [
                        createVNode("div", { class: "ml-5 space-y-1 translate-y-6" }, [
                          createVNode("h3", { class: "font-semibold" }, toDisplayString(_ctx.$t("page.transfer.send.title1")), 1),
                          createVNode("h4", { class: "text-xs" }, toDisplayString(_ctx.$t("page.transfer.send.title2")), 1)
                        ])
                      ]),
                      createVNode("div", { class: "flex justify-end" }, [
                        createVNode(_component_gadget_image_blur, null, {
                          default: withCtx(() => [
                            createVNode("img", {
                              src: _imports_0,
                              class: "z-30 object-cover object-center translate-x-5 translate-y-3 size-18",
                              alt: "Create User Logo"
                            })
                          ]),
                          _: 1
                        })
                      ])
                    ])
                  ];
                }
              }),
              _: 2
            }, _parent2, _scopeId));
            _push2(`<form${_scopeId}><div class="space-y-4 px-3 py-5 h-auto"${_scopeId}><div class="col-span-2"${_scopeId}><div class="flex justify-center p-2 rounded-lg w-86 mx-auto"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_input_otp_light_variant, {
              identifier: "otp",
              modelValue: unref(validatingOtpForm).otp,
              "onUpdate:modelValue": ($event) => unref(validatingOtpForm).otp = $event,
              size: "large",
              "pt:root": "mx-auto",
              integerOnly: ""
            }, null, _parent2, _scopeId));
            _push2(`</div><p class="text-xs text-text-secondary mt-2.5"${_scopeId}>${ssrInterpolate(_ctx.$t("page.transfer.send.otp_message"))}</p></div>`);
            if (unref(activeTransfer).isEngaged) {
              _push2(`<div class="mt-5 col-span-2"${_scopeId}><div class="${ssrRenderClass([
                "bg-bg-main border px-2 py-1 rounded-md text-xs space-y-1",
                {
                  "border-border-main": !unref(validOtpErrorMsg).files.engagement,
                  "border-accent-muted ring-4 ring-accent-muted ring-offset-2": unref(validOtpErrorMsg).files.engagement
                }
              ])}"${_scopeId}><div class="flex items-center space-x-2"${_scopeId}><p class="${ssrRenderClass([
                "font-semibold",
                {
                  "text-accent": unref(validOtpErrorMsg).files.engagement
                }
              ])}"${_scopeId}>${ssrInterpolate(_ctx.$t("page.transfer.send.file"))}</p><span class="font-semibold rounded-xs text-[0.5rem] px-1.5 py-[0.05rem] uppercase bg-status-error text-white"${_scopeId}>${ssrInterpolate(_ctx.$t("page.required"))}</span></div>`);
              _push2(ssrRenderComponent(_component_input_file_upload, {
                type: unref(activeTransfer).code,
                category: "DEMANDE-ENG",
                onUpdateFile: (e2) => setEngagementFile(e2),
                onRemovefile: clearEngagemenFile
              }, null, _parent2, _scopeId));
              _push2(`</div></div>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`</div><div class="grid justify-end grid-flow-col gap-3 p-2 border-t border-border-main"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_button_outline, {
              label: unref(t)("button.cancel"),
              onClick: closeCallback
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_button_primary, {
              type: "submit",
              label: unref(t)("button.send_request"),
              loading: unref(isSubmitOtp)
            }, null, _parent2, _scopeId));
            _push2(`</div></form></div>`);
          } else {
            return [
              createVNode("div", { class: "p-1 rounded-xl" }, [
                createVNode(_component_gadget_banner, null, {
                  default: withCtx(() => [
                    createVNode("div", { class: "grid grid-cols-[auto_1fr]" }, [
                      createVNode("div", { class: "grid justify-center ml-2 text-sm text-white lg:text-base" }, [
                        createVNode("div", { class: "ml-5 space-y-1 translate-y-6" }, [
                          createVNode("h3", { class: "font-semibold" }, toDisplayString(_ctx.$t("page.transfer.send.title1")), 1),
                          createVNode("h4", { class: "text-xs" }, toDisplayString(_ctx.$t("page.transfer.send.title2")), 1)
                        ])
                      ]),
                      createVNode("div", { class: "flex justify-end" }, [
                        createVNode(_component_gadget_image_blur, null, {
                          default: withCtx(() => [
                            createVNode("img", {
                              src: _imports_0,
                              class: "z-30 object-cover object-center translate-x-5 translate-y-3 size-18",
                              alt: "Create User Logo"
                            })
                          ]),
                          _: 1
                        })
                      ])
                    ])
                  ]),
                  _: 1
                }),
                createVNode("form", {
                  onSubmit: withModifiers(submitOtpTransfer, ["prevent"])
                }, [
                  createVNode("div", { class: "space-y-4 px-3 py-5 h-auto" }, [
                    createVNode("div", { class: "col-span-2" }, [
                      createVNode("div", { class: "flex justify-center p-2 rounded-lg w-86 mx-auto" }, [
                        createVNode(_component_input_otp_light_variant, {
                          identifier: "otp",
                          modelValue: unref(validatingOtpForm).otp,
                          "onUpdate:modelValue": ($event) => unref(validatingOtpForm).otp = $event,
                          size: "large",
                          "pt:root": "mx-auto",
                          integerOnly: ""
                        }, null, 8, ["modelValue", "onUpdate:modelValue"])
                      ]),
                      createVNode("p", { class: "text-xs text-text-secondary mt-2.5" }, toDisplayString(_ctx.$t("page.transfer.send.otp_message")), 1)
                    ]),
                    unref(activeTransfer).isEngaged ? (openBlock(), createBlock("div", {
                      key: 0,
                      class: "mt-5 col-span-2"
                    }, [
                      createVNode("div", {
                        class: [
                          "bg-bg-main border px-2 py-1 rounded-md text-xs space-y-1",
                          {
                            "border-border-main": !unref(validOtpErrorMsg).files.engagement,
                            "border-accent-muted ring-4 ring-accent-muted ring-offset-2": unref(validOtpErrorMsg).files.engagement
                          }
                        ]
                      }, [
                        createVNode("div", { class: "flex items-center space-x-2" }, [
                          createVNode("p", {
                            class: [
                              "font-semibold",
                              {
                                "text-accent": unref(validOtpErrorMsg).files.engagement
                              }
                            ]
                          }, toDisplayString(_ctx.$t("page.transfer.send.file")), 3),
                          createVNode("span", { class: "font-semibold rounded-xs text-[0.5rem] px-1.5 py-[0.05rem] uppercase bg-status-error text-white" }, toDisplayString(_ctx.$t("page.required")), 1)
                        ]),
                        createVNode(_component_input_file_upload, {
                          type: unref(activeTransfer).code,
                          category: "DEMANDE-ENG",
                          onUpdateFile: (e2) => setEngagementFile(e2),
                          onRemovefile: clearEngagemenFile
                        }, null, 8, ["type", "onUpdateFile"])
                      ], 2)
                    ])) : createCommentVNode("", true)
                  ]),
                  createVNode("div", { class: "grid justify-end grid-flow-col gap-3 p-2 border-t border-border-main" }, [
                    createVNode(_component_button_outline, {
                      label: unref(t)("button.cancel"),
                      onClick: withModifiers(closeCallback, ["prevent"])
                    }, null, 8, ["label", "onClick"]),
                    createVNode(_component_button_primary, {
                      type: "submit",
                      label: unref(t)("button.send_request"),
                      loading: unref(isSubmitOtp)
                    }, null, 8, ["label", "loading"])
                  ])
                ], 32)
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Table/Transfert.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __nuxt_component_6 = Object.assign(_sfc_main, { __name: "TableTransfert" });

export { __nuxt_component_6 as _ };
//# sourceMappingURL=Transfert-PjWxwWNW.mjs.map
