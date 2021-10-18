import i18next from "i18next";
import { initReactI18next } from "react-i18next";
import detector from "i18next-browser-languagedetector";

import en from "./resources/en.json";
import fr from "./resources/fr.json";

import { defaultLanguage } from "./languages.json";

i18next
  .use(detector)
  .use(initReactI18next)
  .init({
    resources: { en, fr },
    fallbackLng: defaultLanguage,
    detection: {
      order: ["localStorage", "navigator"],
      lookupLocalStorage: "language",
      caches: ["localStorage"]
    }
  });
