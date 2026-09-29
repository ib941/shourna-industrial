"use client";

import React, { createContext, useContext, useState, useEffect } from "react";
import { Locale, Translations, content } from "@/types/content";

interface LanguageContextType {
  locale: Locale;
  setLocale: (locale: Locale) => void;
  toggleLocale: () => void;
  t: Translations;
  isRTL: boolean;
  dir: "rtl" | "ltr";
}

const LanguageContext = createContext<LanguageContextType>({
  locale: "ar",
  setLocale: () => {},
  toggleLocale: () => {},
  t: content.ar,
  isRTL: true,
  dir: "rtl",
});

export const useLanguage = () => useContext(LanguageContext);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>("ar");

  useEffect(() => {
    // Check saved preference on mount
    const saved = localStorage.getItem("sics_locale") as Locale | null;
    if (saved && (saved === "ar" || saved === "en")) {
      setLocaleState(saved);
      document.documentElement.lang = saved;
      document.documentElement.dir = saved === "ar" ? "rtl" : "ltr";
    } else {
      document.documentElement.lang = "ar";
      document.documentElement.dir = "rtl";
    }
  }, []);

  const setLocale = (newLocale: Locale) => {
    setLocaleState(newLocale);
    localStorage.setItem("sics_locale", newLocale);
    document.documentElement.lang = newLocale;
    document.documentElement.dir = newLocale === "ar" ? "rtl" : "ltr";
  };

  const toggleLocale = () => {
    const next = locale === "ar" ? "en" : "ar";
    setLocale(next);
  };

  const isRTL = locale === "ar";
  const dir: "rtl" | "ltr" = isRTL ? "rtl" : "ltr";
  const t = content[locale];

  return (
    <LanguageContext.Provider
      value={{
        locale,
        setLocale,
        toggleLocale,
        t,
        isRTL,
        dir,
      }}
    >
      <div dir={dir} className={`min-h-screen flex flex-col flex-1 ${isRTL ? "font-sans" : "font-sans font-english"}`}>
        {children}
      </div>
    </LanguageContext.Provider>
  );
}
