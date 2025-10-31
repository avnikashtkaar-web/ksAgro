"use client";
import { createContext, useContext, useState } from "react";
import useTranslation from "@/components/useTranslation";

const LanguageContext = createContext();

export function LanguageProvider({ children }) {
  const [lang, setLang] = useState("en");
  const { t } = useTranslation(lang);

  function changeLang(newLang) {
    setLang(newLang);
  }

  return (
    <LanguageContext.Provider value={{ t, lang, changeLang }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  return useContext(LanguageContext);
}
