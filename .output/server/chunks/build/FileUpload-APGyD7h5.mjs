import { defineComponent, ref, computed, unref, mergeProps, useSSRContext } from 'vue';
import { ssrRenderComponent } from 'vue/server-renderer';
import FilePondPluginFileValidateType from 'filepond-plugin-file-validate-type';
import FilePondPluginFileValidateSize from 'filepond-plugin-file-validate-size';
import { c as useNuxtApp, b as useI18n, d as useRuntimeConfig, w as useCookie, n as navigateTo } from './server.mjs';
import { u as useNotify } from './notify-7jIrthPf.mjs';
import { u as useAuthStore } from './auth-uLpXCxdh.mjs';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "FileUpload",
  __ssrInlineRender: true,
  props: {
    category: {},
    type: {},
    demandId: {}
  },
  emits: ["updateFile"],
  setup(__props, { emit: __emit }) {
    const emit = __emit;
    const { $filePond } = useNuxtApp();
    const FilePond = $filePond(
      FilePondPluginFileValidateType,
      FilePondPluginFileValidateSize
    );
    const config = useRuntimeConfig();
    const myFiles = ref([]);
    const { t } = useI18n();
    const { s, e } = useNotify();
    const authStore = useAuthStore();
    const snapshot = authStore.getUserSnapShot();
    const fileUploaded = (jsonResp) => {
      const response = JSON.parse(jsonResp);
      if (response.pesake?.code) {
        const message = response.pesake.details?.pesakeDetail ?? t("error.unknown");
        e(message);
        throw new Error(message);
      }
      s(t("success.file_uploaded"));
      emit("updateFile", response.data.fileId);
      return response.data.fileId;
    };
    const handleFilePondInit = async () => {
      const authStoreRef = useCookie("authUser");
      if (!authStoreRef.value) {
        navigateTo(config.public.page.login);
      }
    };
    const serverOptions = computed(() => {
      const uploadPath = `${config.public.fileUrl}${config.public.api.fileUpload}`;
      return {
        process: {
          url: uploadPath,
          method: "POST",
          headers: {
            Authorization: `Bearer ${snapshot?.token.bearer}`
          },
          onload: fileUploaded,
          ondata: (formData) => {
            const files = formData.getAll("file");
            formData.delete("file");
            files.forEach((file) => {
              if (file instanceof Blob) {
                formData.append("file", file);
              }
            });
            if (__props.demandId) {
              formData.append("dmdeSlug", __props.demandId);
            }
            formData.append("docType", __props.type);
            formData.append("category", __props.category);
            formData.append("origin", config.public.origin.toUpperCase());
            return formData;
          },
          onerror: (rawResponse) => {
            try {
              const parsed = JSON.parse(rawResponse);
              if (parsed.pesake?.code) {
                e(parsed.pesake.details?.pesakeDetail ?? t("error.unknown"));
              } else if (parsed.message?.error?.[0]) {
                e(parsed.message.error[0]);
              } else {
                e(t("error.unknown"));
              }
            } catch {
              e(t("error.unknown"));
            }
          }
        }
      };
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(unref(FilePond), mergeProps({
        name: "file",
        ref: "pond",
        "label-idle": _ctx.$t("placeholder.upload"),
        "allow-multiple": false,
        files: unref(myFiles),
        onInit: handleFilePondInit,
        server: unref(serverOptions),
        "min-file-size": "0.1MB",
        "max-file-size": "5MB",
        "accepted-file-types": ["application/pdf", "image/*"]
      }, _attrs), null, _parent));
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Input/FileUpload.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __nuxt_component_10 = Object.assign(_sfc_main, { __name: "InputFileUpload" });

export { __nuxt_component_10 as _ };
//# sourceMappingURL=FileUpload-APGyD7h5.mjs.map
