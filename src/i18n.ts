import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import translationRu from "./locales/ru/translation.json";
import translationUz from "./locales/uz/translation.json";
import translationEn from "./locales/en/translation.json";

i18n.use(initReactI18next).init({
  keySeparator: "|",
  resources: {
    uz: {
      translation: translationUz,
    },
    en: {
      translation: translationEn,
    },
    ru: {
      translation: translationRu,
    },
  },
  fallbackLng: window.localStorage.getItem("locale") || "uz",
  detection: {
    order: ["localStorage"],
  },
  react: {
    useSuspense: false,
  },
});

export default i18n;
