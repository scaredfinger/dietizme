import i18n from 'i18next'
import _ from 'lodash'
import { initReactI18next } from 'react-i18next'

import { flattenObject } from '@otiuming/utils-common'

const translations = {
  en: require('./localization/en/translation.json'),
  es: require('./localization/es/translation.json'),
  de: require('./localization/de/translation.json'),
  fr: require('./localization/fr/translation.json'),
}

const resources = _.mapValues(translations, (t) => ({
  translations: flattenObject(t),
}))

i18n
  .use(initReactI18next)
  .use({
    type: 'postProcessor',
    name: 'capitalize',
    process: function (value: string) {
      return value.toUpperCase()
    },
  })
  .use({
    type: 'postProcessor',
    name: 'lowercase',
    process: function (value: string) {
      return value.toLowerCase()
    },
  })
  .init({
    fallbackLng: 'en',
    lng: 'en',
    resources,
    ns: ['translations'],
    defaultNS: 'translations',
  })

i18n.languages = ['en', 'es', 'de', 'fr']

export default i18n
