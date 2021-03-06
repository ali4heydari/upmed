import i18n from "i18next"
import { initReactI18next } from "react-i18next"
import { enumToValueArray } from "../utils/functions/enum-to-value-array"
import { Languages, Namespaces } from "../utils/enums"

const languages = enumToValueArray(Languages).filter(
  lng => lng !== Languages.CI_MODE
)
const namespaces = enumToValueArray(Namespaces)

i18n.use(initReactI18next).init({
  lng: Languages.PERSIAN, // FIXME: remove this
  resources: languages.reduce((prevLngs, currentLng) => {
    return {
      ...prevLngs,
      [currentLng]: namespaces.reduce(
        (prevNamespaces, currentNamespace) => ({
          ...prevNamespaces,
          [currentNamespace]: require(`../locales/${currentLng}/${currentNamespace}.json`),
        }),
        {}
      ),
    }
  }, {}),
  // have a common namespace used around the full app
  ns: namespaces,
  defaultNS: Namespaces.TRANSLATIONS,
  returnObjects: true,
  debug: process.env.NODE_ENV !== "production",
  interpolation: {
    escapeValue: false, // not needed for react!
  },
  react: {
    wait: true,
  },
})

export default i18n
