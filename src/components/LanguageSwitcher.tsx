"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { useTranslation } from "react-i18next";

export default function LanguageDropdown() {
  const { i18n } = useTranslation();
  const [open, setOpen] = useState(false);

  const changeLanguage = (lang: "en" | "ar") => {
    i18n.changeLanguage(lang);
    setOpen(false);
  };

  const languages = [
    {
      code: "en",
      label: "English",
      flag: "https://flagcdn.com/24x18/gb.png",
    },
    {
      code: "ar",
      label: "العربية",
      flag: "https://flagcdn.com/24x18/sa.png",
    },
  ];

  const active = languages.find((l) => l.code === i18n.language);

  return (
    <div className="relative">
      {/* Trigger button */}
      <button
        onClick={() => setOpen(!open)}
        className="flex items-center gap-2 text-sm  hover:border-b-2 hover:border-[#008346] transition"
      >
        <img
          src={active?.flag}
          className="w-5 h-4 rounded-sm object-cover"
          alt=""
        />
        <span>{active?.code === "en" ? "English" : "العربية"}</span>
        <ChevronDown className="w-4 h-4" />
      </button>

      {/* Dropdown */}
      {open && (
        <div className="absolute right-0 mt-2 w-36 bg-[#000201CC] border border-[#008346] rounded-lg shadow-lg py-2 z-50">
          {languages.map((lang) => (
            <button
              key={lang.code}
              onClick={() => changeLanguage(lang.code as "en" | "ar")}
              className="w-full flex items-center gap-3 px-3 py-2 hover:bg-zinc-800 text-left"
            >
              <img
                src={lang.flag}
                className="w-5 h-4 rounded-sm object-cover"
                alt=""
              />
              <span>{lang.label}</span>
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
