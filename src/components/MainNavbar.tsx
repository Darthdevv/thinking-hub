"use client";

import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { Link } from "react-router";
import GreenLogo from "../assets/icons/Footer/GreenLogo";
import LanguageDropdown from "./LanguageSwitcher";
import Rocket from "../assets/icons/Rocket";
import { useTranslation } from "react-i18next";

export default function MainNavbar() {
  const [isOpen, setIsOpen] = useState(false);
  const { t, i18n } = useTranslation();

  useEffect(() => {
    const dir = i18n.language === "ar" ? "rtl" : "ltr";
    document.documentElement.dir = dir;
    document.documentElement.lang = i18n.language;
  }, [i18n.language]);

  return (
    <>
      {/* ====================== DESKTOP & TABLET – PILL STYLE ====================== */}
      <nav className="hidden md:flex items-center justify-between bg-[#000201CC] text-white px-8 py-5 rounded-full w-full max-w-7xl mx-auto my-8">
        {/* Logo */}
        <div className="flex items-center gap-4">
          <div className=" p-2.5 rounded-lg">
            <Link to={"/"} className="flex items-center justify-center">
              <GreenLogo className="mr-2 rtl:ml-2" />
              {t("logo")}
            </Link>
          </div>
        </div>

        {/* Right side */}
        <div className="flex items-center gap-8">
          {/* Links */}
          <div className="flex items-center gap-8 text-sm">
            <Link
              to={"/how-we-work"}
              className="hover:border-b-2 hover:border-[#57B3B9] transition"
            >
              {t("navlink1")}
            </Link>
            <Link
              to={"/contact-us"}
              className="hover:border-b-2 hover:border-[#57B3B9] transition"
            >
              {t("navlink2")}
            </Link>
          </div>
          {/* Language */}
          <LanguageDropdown />

          {/* CTA */}
          <Link
            to={"/contact-us"}
            className="bg-[#57B3B9] hover:bg-[#54AAA9] text-white font-semibold px-7 py-3.5 rounded-full flex items-center gap-2 transition"
          >
            {t("navbtn")} <Rocket />
          </Link>
        </div>
      </nav>

      {/* ====================== MOBILE – EXACTLY LIKE YOUR LAST IMAGE ====================== */}
      <nav className="md:hidden bg-[#000201CC] text-white flex items-center justify-between px-5 py-4">
        {/* Logo + Text */}
        <div className="flex items-center gap-3">
          <div className=" p-2 rounded-lg">
            <Link to={"/"} className="flex items-center justify-center">
              <GreenLogo className="mr-2 rtl:ml-2" />
              {t("logo")}
            </Link>
          </div>
        </div>

        {/* Hamburger */}
        <button onClick={() => setIsOpen(!isOpen)} className="p-1">
          {isOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
        </button>
      </nav>

      {/* Mobile Menu Dropdown (appears below the bar) */}
      {isOpen && (
        <div className="md:hidden bg-[#000201CC] text-white border-t border-[#57B3B9]">
          <div className="px-6 py-6 space-y-6">
            <Link
              to={"/how-we-work"}
              className="block text-lg hover:border-b-2 hover:border-[#57B3B9] transition"
            >
              {t("navlink1")}
            </Link>
            <Link
              to={"/contact-us"}
              className="block text-lg hover:border-b-2 hover:border-[#57B3B9] transition"
            >
              {t("navlink2")}
            </Link>

            <div className="pt-4 border-t border-[#57B3B9]">
              <LanguageDropdown />
            </div>

            <Link
              to={"/contact-us"}
              className="text-center bg-[#57B3B9] hover:bg-[#54AAA9] text-white font-semibold py-4 rounded-full shadow-lg flex items-center justify-center gap-2"
            >
              {t("navbtn")} <Rocket />
            </Link>
          </div>
        </div>
      )}
    </>
  );
}
