import moment from 'moment'

export const sliceIban = (iban: string) => {
  return iban.slice(0, 4) + '...' + iban.slice(-4)
}

export const formatNumber = (
  amount: string | number,
  multiplier: string | undefined,
) => {
  return multiplier ? Number(amount) * Number(multiplier) : 0
}

export const formatIban = (str: string) => {
  return str.replace(/(.{4})/g, '$1 ').trim()
}

export const getBaseFromForeign = (amount: string | number, rate: string) => {
  return Number(amount) / Number(rate)
}

export const feeLabel = (fee: string) => {
  let output = ''
  switch (fee) {
    case 'both':
      output = 'SHA'
      break
    case 'beneficiary':
      output = 'BEN'
      break
    case 'client':
      output = 'OUR'
      break
    default:
      break
  }
  return output
}

export const formatDate = (date: any) => {
  return moment(date).isValid() ? moment(date).format('DD MMMM YYYY') : 'N/A'
}

export const formatAmountWithCurrency = (
  amount: string | number,
  currency: string,
) => {
  return `${Intl.NumberFormat('en-US').format(Number(amount))} ${currency}`
}

export const removeSpaces = (str: string) => {
  return str.trim().replace(/\s/g, '')
}
