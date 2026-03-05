import { c as useNuxtApp, b as useI18n, d as useRuntimeConfig } from './server.mjs';
import { shallowRef, computed } from 'vue';
import { h as handleApiError } from './api.errors-BfPdMj8S.mjs';

const useEncrypt = () => {
  const { $apiFetch } = useNuxtApp();
  const config = useRuntimeConfig();
  const { locale } = useI18n();
  const isEncrypting = shallowRef(false);
  const encryptStatus = computed(() => isEncrypting.value);
  const getEncrypt = async (url, type) => {
    let output = {
      validationErr: [],
      response: null,
      error: ""
    };
    isEncrypting.value = true;
    try {
      const { apiResponse, validError } = await $apiFetch(
        config.public.api.encrypt,
        {
          method: "POST",
          body: {
            key: {
              url
            },
            branch: type,
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
      isEncrypting.value = false;
    }
    return output;
  };
  return {
    encryptStatus,
    getEncrypt
  };
};

export { useEncrypt as u };
//# sourceMappingURL=encrypt-DrRgFiWK.mjs.map
