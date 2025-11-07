"use client";
import React, { createContext, useContext, useState, useEffect } from "react";
import en from "@/locales/en.json";
import hi from "@/locales/hi.json";

const LanguageContext = createContext();

export function LanguageProvider({ children }) {
  const [language, setLanguage] = useState("en");
  const [translations, setTranslations] = useState(en);

  const toggleLanguage = () => {
    const newLang = language === "en" ? "hi" : "en";
    setLanguage(newLang);
  };

  useEffect(() => {
    setTranslations(language === "en" ? en : hi);
  }, [language]);

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage, translations }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  return useContext(LanguageContext);
}
