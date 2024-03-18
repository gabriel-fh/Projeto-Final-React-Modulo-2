import { createContext } from "react";

export const LangContext = createContext<{
    lang: string;
    setLang: (lang: string) => void;
  }>({
    lang: "en-US",
    setLang: () => {},
  });