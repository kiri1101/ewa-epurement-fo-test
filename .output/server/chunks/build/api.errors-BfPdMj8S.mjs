const handleApiError = (error) => {
  let output = "";
  if (error && typeof error === "object" && "status" in error) {
    const err = error;
    output = err.data?.statusMessage || err.statusText;
  }
  return output;
};

export { handleApiError as h };
//# sourceMappingURL=api.errors-BfPdMj8S.mjs.map
