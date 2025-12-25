async function loadLocale(lang: 'en' | 'fr') {
  let output, locale
  try {
    locale =
      lang === 'en'
        ? await import('@@/i18n/locales/en.json')
        : await import('@@/i18n/locales/fr.json')
    output = locale.default.validation
  } catch (error) {
    const fallback = await import('@@/i18n/locales/en.json')
    output = fallback.default.validation
  }
  return output
}

export { loadLocale }
