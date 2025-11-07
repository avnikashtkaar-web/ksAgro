"use client";
import { useState, useEffect } from "react";

export default function useTranslation(lang) {
  const [translations, setTranslations] = useState({});

  useEffect(() => {
    import(`../locales/${lang}.json`)
     .then((module) => setTranslations(module.default || module))
      .catch(() => setTranslations({}));
  }, [lang]);

  const t = (key) => translations[key] || key;

  return { t };
}
