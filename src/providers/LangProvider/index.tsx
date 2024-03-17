import React, { createContext, useContext, useEffect } from "react";
import i18n from "i18next";
import useLocalStorage from "@rehooks/local-storage";

const LangContext = createContext<{
  lang: string;
  changeLanguage: (lang: string) => void;
}>({
  lang: i18n.language,
  changeLanguage: () => {},
});

const useLangBase = () => {
  const [lang, setLang] = useLocalStorage('appLang', i18n.language);

  useEffect(() => {
    const changeLang = async () => {
      await i18n.changeLanguage(lang);
    };
    changeLang();
  }, [lang]);

  const handleLanguageChange = (newLang: string) => {
    setLang(newLang);
  };

  return {
    lang,
    changeLanguage: handleLanguageChange,
  };
};

export const LangProvider = ({ children }: { children: React.ReactNode }) => {
  const value = useLangBase();
  return <LangContext.Provider value={value}>{children}</LangContext.Provider>;
};

// eslint-disable-next-line react-refresh/only-export-components
export const useLang = () => {
  const context = useContext(LangContext);
  if (!context) {
    throw new Error("useLang must be used within an LangProvider");
  }
  return context;
};
