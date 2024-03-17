import enUs from "./en-US.json";
import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import ptBR from "./pt-BR.json";

export function setupI18n() {
  i18n
    .use(initReactI18next)
    .init({
      resources: {
        "pt-BR": {
          translation: ptBR,
        },
        en: {
          translation: enUs,
        },
      },
      lng: "en", 
      fallbackLng: "en",

      interpolation: {
        escapeValue: false, 
      },
    });
}