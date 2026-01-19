import { defineComponent, ref, unref, mergeProps, useSSRContext } from 'vue';
import { ssrRenderComponent } from 'vue/server-renderer';
import vueFilePond, { setOptions } from 'vue-filepond';
import FilePondPluginFileValidateType from 'filepond-plugin-file-validate-type';
import FilePondPluginImagePreview from 'filepond-plugin-image-preview';
import FilePondPluginFileValidateSize from 'filepond-plugin-file-validate-size';
import { a as useI18n, e as useRuntimeConfig } from './server.mjs';
import { u as useNotify } from './notify-ERv49H4P.mjs';
import { u as useAuthStore } from './auth-D4AyDg5h.mjs';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "FileUpload",
  __ssrInlineRender: true,
  props: {
    identifier: {},
    category: {},
    type: {}
  },
  emits: ["updateFile"],
  setup(__props, { emit: __emit }) {
    const FilePond = vueFilePond(
      FilePondPluginFileValidateType,
      FilePondPluginImagePreview,
      FilePondPluginFileValidateSize
    );
    const emit = __emit;
    const config = useRuntimeConfig();
    const myFiles = ref([]);
    const { t } = useI18n();
    const { s, e } = useNotify();
    const authStore = useAuthStore();
    const snapshot = authStore.getUserSnapShot();
    const fileUploaded = (jsonResp) => {
      const response = JSON.parse(jsonResp);
      if (String(response.pesake.code).length > 0) {
        e(response.pesake.details.pesakeDetail);
      } else {
        s(t("success.file_uploaded"));
        emit("updateFile", response.data.fileId);
      }
      return "okay";
    };
    const handleFilePondInit = () => {
      const uploadPath = `${config.public.fileUrl}${config.public.api.fileUpload}`;
      setOptions({
        server: {
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
              formData.append("docType", __props.type);
              formData.append("category", __props.category);
              formData.append("origin", config.public.origin.toUpperCase());
              return formData;
            },
            onerror: (errors) => {
              e(JSON.parse(errors).message.error[0]);
            }
          }
        }
      });
    };
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(unref(FilePond), mergeProps({
        name: "file",
        ref: `pond-${__props.identifier}`,
        "label-idle": "Drop file here...",
        "allow-multiple": false,
        files: unref(myFiles),
        onInit: handleFilePondInit,
        "min-file-size": "0.1MB",
        "max-file-size": "5MB",
        "accepted-file-types": ["image/*", "application/pdf"]
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
const __nuxt_component_11 = Object.assign(_sfc_main, { __name: "InputFileUpload" });

export { __nuxt_component_11 as _ };
//# sourceMappingURL=FileUpload-BF5hUIIc.mjs.map
