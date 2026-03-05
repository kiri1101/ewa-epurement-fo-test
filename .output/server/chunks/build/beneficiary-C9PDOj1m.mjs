import { c as useNuxtApp, b as useI18n, d as useRuntimeConfig } from './server.mjs';
import { u as useLoadingStore } from './loading-DepoijyK.mjs';
import { u as useNotify } from './notify-7jIrthPf.mjs';
import { h as handleApiError } from './api.errors-BfPdMj8S.mjs';

const useBeneficiaries = () => {
  const { $apiFetch } = useNuxtApp();
  const config = useRuntimeConfig();
  const { locale } = useI18n();
  const store = useLoadingStore();
  const { e } = useNotify();
  const getBeneficiaries = async () => {
    let output = {
      validationErr: [],
      response: null,
      error: ""
    };
    store.showBenefLoader();
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
      store.hideBenefLoader();
    }
    return output;
  };
  const deleteBenef = async (index) => {
    let output = {
      validationErr: [],
      response: null,
      error: ""
    };
    store.showDeletingBenef();
    try {
      const { apiResponse, validError } = await $apiFetch(
        config.public.api.beneficiary.delete,
        {
          method: "POST",
          body: {
            id: index,
            lang: locale.value
          }
        }
      );
      if (validError) {
        validError.forEach((err) => e(err?.message));
      }
      output.response = apiResponse;
    } catch (error) {
      const errorMsg = handleApiError(error);
      if (errorMsg.length > 0) {
        e(errorMsg);
      }
    } finally {
      store.hideDeletingBenef();
    }
    return output;
  };
  const getBenefDetails = async (id) => {
    let output = {
      validationErr: [],
      response: null,
      error: ""
    };
    store.showSearchingBenef();
    try {
      const { apiResponse, validError } = await $apiFetch(
        config.public.api.beneficiary.search,
        {
          method: "POST",
          body: {
            searchIndex: id,
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
      store.hideSearchingBenef();
    }
    return output;
  };
  const getBenefSettings = async () => {
    let output = {
      validationErr: [],
      response: null,
      error: ""
    };
    try {
      const { apiResponse, validError } = await $apiFetch(
        config.public.api.beneficiary.setting,
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
    }
    return output;
  };
  return {
    getBeneficiaries,
    deleteBenef,
    getBenefDetails,
    getBenefSettings
  };
};

export { useBeneficiaries as u };
//# sourceMappingURL=beneficiary-C9PDOj1m.mjs.map
