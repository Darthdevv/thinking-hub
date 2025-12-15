"use client";

import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import usa from "../assets/images/usa.png";

export default function LanguageDropdown() {
  const { i18n } = useTranslation();

  useEffect(() => {
    if (i18n.language !== "en") {
      i18n.changeLanguage("en");
    }
  }, [i18n]);

  return (
    <div className="flex items-center gap-2 text-base font-normal">
      <img
        src={usa}
        className="w-4.5 h-4.5 rounded-full object-cover"
        alt="English"
      />
      <span>Eng</span>
    </div>
  );
}
