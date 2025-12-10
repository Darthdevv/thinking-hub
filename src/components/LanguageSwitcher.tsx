"use client";

import { useEffect } from "react";
import { useTranslation } from "react-i18next";

export default function LanguageSwitcher() {
  const { i18n } = useTranslation();

  const changeLanguage = (lang: "en" | "ar") => {
    i18n.changeLanguage(lang);
  };

  // Switch page direction (RTL for Arabic)
  useEffect(() => {
    const dir = i18n.language === "ar" ? "rtl" : "ltr";
    document.documentElement.dir = dir;
    document.documentElement.lang = i18n.language;
  }, [i18n.language]);

  return (
    <div className="flex gap-3 items-center">
      <button
        onClick={() => changeLanguage("en")}
        className={`px-3 py-1 rounded-md border ${
          i18n.language === "en"
            ? "bg-blue-600 text-white"
            : "bg-white text-black"
        }`}
      >
        EN
      </button>

      <button
        onClick={() => changeLanguage("ar")}
        className={`px-3 py-1 rounded-md border ${
          i18n.language === "ar"
            ? "bg-blue-600 text-white"
            : "bg-white text-black"
        }`}
      >
        AR
      </button>
    </div>
  );
}
