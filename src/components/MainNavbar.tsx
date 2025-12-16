"use client";

import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { Link } from "react-router";
import GreenLogo from "../assets/icons/Footer/GreenLogo";
// import LanguageDropdown from "./LanguageSwitcher";
import Rocket from "../assets/icons/Rocket";
import { useTranslation } from "react-i18next";

export default function MainNavbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
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
              <span className="text-white font-bold">{t("logo")}</span>
            </Link>
          </div>
        </div>

        {/* Right side */}
        <div className="flex items-center gap-8">
          {/* Links */}
          <div className="flex items-center gap-8 text-sm">
            <Link
              to={"/how-we-work"}
              className="
    font-normal text-base text-current
    border-b-2 border-transparent
    transition-all duration-300 ease-in-out
    hover:border-[#57B3B9]
    hover:scale-105
  "
            >
              {t("navlink1")}
            </Link>
            <Link
              to={"/contact-us"}
              className="
    font-normal text-base text-current
    border-b-2 border-transparent
    transition-all duration-300 ease-in-out
    hover:border-[#57B3B9]
    hover:scale-105
  "
            >
              {t("navlink2")}
            </Link>
          </div>
          {/* Language */}
          {/* <LanguageDropdown /> */}

          {/* CTA */}
          <Link
            to={"/contact-us"}
            className="bg-[#57B3B9] hover:bg-[#54AAA9] text-white font-semibold px-7 py-3.5 rounded-full flex items-center gap-2 transition"
          >
            <Rocket />
            {t("navbtn")}
          </Link>
        </div>
      </nav>

      {/* ====================== MOBILE – FIXED NAVBAR ====================== */}
      <nav className="md:hidden fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-5 bg-[#000201CC]">
        <div className="flex items-center gap-3">
          <div className="p-2 rounded-lg">
            <Link to={"/"} className="flex items-center justify-center">
              <GreenLogo className="mr-2 rtl:ml-2" />
              <span className="text-white font-bold">{t("logo")}</span>
            </Link>
          </div>
        </div>

        <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
          {isMobileMenuOpen ? (
            <X className="w-7 h-7" />
          ) : (
            <Menu className="w-7 h-7" />
          )}
        </button>
      </nav>

      {/* MOBILE MENU */}
      {isMobileMenuOpen && (
        <div className="md:hidden fixed top-[64px] left-1/2 -translate-x-1/2 z-50 w-[90%] max-w-md">
          <div className="bg-[#000201CC] text-white rounded-3xl shadow-2xl border border-[#57B3B9]">
            <div className="p-8 space-y-6">
              <Link
                to={"/how-we-work"}
                className="
            block
            font-normal text-base text-current
            border-b-2 border-transparent
            transition-all duration-300 ease-in-out
            hover:border-[#57B3B9]
            hover:scale-105
          "
              >
                {t("navlink1")}
              </Link>
              <Link
                to={"/contact-us"}
                className="
            block
            font-normal text-base text-current
            border-b-2 border-transparent
            transition-all duration-300 ease-in-out
            hover:border-[#57B3B9]
            hover:scale-105
          "
              >
                {t("navlink2")}
              </Link>

              <Link
                to={"/contact-us"}
                className="text-center bg-[#57B3B9] hover:bg-[#54AAA9] text-white font-semibold py-4 rounded-full shadow-lg flex items-center justify-center gap-2"
              >
                <Rocket />
                {t("navbtn")}
              </Link>
            </div>
          </div>
        </div>
      )}

      {/* SPACER TO AVOID OVERLAP */}
      <div className="h-20 md:hidden" />
    </>
  );
}
