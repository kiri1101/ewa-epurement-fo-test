import { currencies } from '~/db/schema'

export const saveCurrency = async () => {
  await db.transaction(async tx => {
    const currencyCount = await tx.select().from(currencies)

    if (currencyCount.length === 0) {
      await tx.insert(currencies).values([
        {
          uuid: crypto.randomUUID(),
          code: 'XAF',
          labelEn: 'XAF',
          labelFr: 'XAF',
          symbol: 'XAF',
        },
        {
          uuid: crypto.randomUUID(),
          code: 'USD',
          labelEn: 'US Dollar',
          labelFr: 'Dollar américain',
          symbol: '$',
        },
        {
          uuid: crypto.randomUUID(),
          code: 'EUR',
          labelEn: 'Euro',
          labelFr: 'Euro',
          symbol: '€',
        },
        {
          uuid: crypto.randomUUID(),
          code: 'JPY',
          labelEn: 'Japanese Yen',
          labelFr: 'Yen japonais',
          symbol: '¥',
        },
        {
          uuid: crypto.randomUUID(),
          code: 'GBP',
          labelEn: 'British Pound Sterling',
          labelFr: 'Pound sterling britannique',
          symbol: '£',
        },
        {
          uuid: crypto.randomUUID(),
          code: 'AUD',
          labelEn: 'Australian Dollar',
          labelFr: 'Dollar australien',
          symbol: 'A$',
        },
        {
          uuid: crypto.randomUUID(),
          code: 'CAD',
          labelEn: 'Canadian Dollar',
          labelFr: 'Dollar canadien',
          symbol: 'C$',
        },
        {
          uuid: crypto.randomUUID(),
          code: 'CHF',
          labelEn: 'Swiss Franc',
          labelFr: 'Franc suisse',
          symbol: 'CHF',
        },
        {
          uuid: crypto.randomUUID(),
          code: 'CNY',
          labelEn: 'Chinese Yuan',
          labelFr: 'Yuan chinois',
          symbol: '¥',
        },
        {
          uuid: crypto.randomUUID(),
          code: 'INR',
          labelEn: 'Indian Rupee',
          labelFr: 'Roupie indienne',
          symbol: '₹',
        },
        {
          uuid: crypto.randomUUID(),
          code: 'HKD',
          labelEn: 'Hong Kong Dollar',
          labelFr: 'Dollar de Hong Kong',
          symbol: 'HK$',
        },
      ])
    }
  })
}

export const getCurrency = async () => {
  return await db
    .select({
      uuid: currencies.uuid,
      value: currencies.code,
      name: {
        en: currencies.labelEn,
        fr: currencies.labelFr,
      },
    })
    .from(currencies)
}
