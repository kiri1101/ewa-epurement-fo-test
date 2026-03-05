import moment from 'moment';

const sliceIban = (iban) => {
  return iban.slice(0, 4) + "..." + iban.slice(-4);
};
const formatNumber = (amount, multiplier) => {
  return multiplier ? Number(amount) * Number(multiplier) : 0;
};
const formatIban = (str) => {
  return str.replace(/(.{4})/g, "$1 ").trim();
};
const feeLabel = (fee) => {
  let output = "";
  switch (fee) {
    case "both":
      output = "SHA";
      break;
    case "beneficiary":
      output = "BEN";
      break;
    case "client":
      output = "OUR";
      break;
  }
  return output;
};
const formatDate = (date) => {
  return moment(date).isValid() ? moment(date).format("DD MMMM YYYY") : "N/A";
};
const formatAmountWithCurrency = (amount, currency) => {
  return `${Intl.NumberFormat("en-US").format(Number(amount))} ${currency}`;
};

export { formatDate as a, feeLabel as b, formatNumber as c, formatAmountWithCurrency as d, formatIban as f, sliceIban as s };
//# sourceMappingURL=str.helpers-C9LGWfpH.mjs.map
