import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import en from "./locales/en/translation.json";
import bn from "./locales/bn/translation.json";

const savedLng = localStorage.getItem("lang") || "en";

i18n
  .use(initReactI18next)
  .init({
    resources: {
      en: { translation: en },
      bn: { translation: bn },
    },
    lng: savedLng,
    fallbackLng: "en",
    interpolation: {
      escapeValue: false,
    },
  });

// Sync <html lang="..."> and persist to localStorage on every language change
i18n.on("languageChanged", (lng) => {
  document.documentElement.lang = lng;
  localStorage.setItem("lang", lng);
});

// Set initial html lang on load
document.documentElement.lang = savedLng;

export default i18n;