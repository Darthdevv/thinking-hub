import { HashLink as Link } from "react-router-hash-link";
import { useEffect } from "react";
import { useTranslation } from "react-i18next";

import GreenLogo from "../assets/icons/Footer/GreenLogo";
import InstagramIcon from "../assets/icons/Footer/Instgram";
import myLogo from "../assets/images/footer-logo.png";

const Footer = () => {
  const { t, i18n } = useTranslation();

  useEffect(() => {
    const dir = i18n.language === "ar" ? "rtl" : "ltr";
    document.documentElement.dir = dir;
    document.documentElement.lang = i18n.language;
  }, [i18n.language]);

  const scrollWithOffset = (el: HTMLElement) => {
    if (!el) return;
    const y = el.getBoundingClientRect().top + window.pageYOffset - 80;
    window.scrollTo({ top: y, behavior: "smooth" });
  };

  const links = [
    { label: t("designThinkingHubLink1"), to: "/#about-us" },
    { label: t("designThinkingHubLink2"), to: "/contact-us" },
    { label: t("designThinkingHubLink3"), to: "/how-we-work" },
  ];

  return (
    <footer className="w-full bg-[#0C0E12] border-t-[22px] border-[#57B3B9] px-4 sm:px-8 md:px-12 lg:px-[7.5rem] py-8">
      {/* ================= MIDDLE SECTION ================= */}
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row text-[#94979C] border-b border-[#22262F] mt-8 md:mt-16 pb-8 md:pb-16 gap-12 md:gap-17">
        {/* Column 1: Logo + Description */}
        <div className="flex flex-col gap-6 max-w-xs">
          <Link to="/" className="flex items-center">
            <GreenLogo className="mr-2" />
            <span className="text-white font-bold">{t("logo")}</span>
          </Link>

          <p className="text-base">{t("footerdesc")}</p>
        </div>

        {/* Column 2: Links */}
        <div className="flex flex-col gap-3">
          <h2 className="font-semibold text-sm">{t("footertitle1")}</h2>

          {links.map((link, index) => (
            <Link
              key={index}
              to={link.to}
              scroll={scrollWithOffset}
              className="font-semibold text-base hover:text-white transition-colors"
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Column 3: Partner Logo */}
        <div className="-mt-16 max-sm:-mt-0 max-sm:ml-0 flex justify-start ml-52">
          <img
            src={myLogo}
            alt="footer-logo"
            className="w-32 sm:w-40 md:w-44 lg:w-48 object-contain"
          />
        </div>
      </div>

      {/* ================= BOTTOM SECTION ================= */}
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row md:justify-between mt-8 gap-4 text-[#94979C]">
        <p className="text-base">
          © {new Date().getFullYear()} {t("copyrights")}
        </p>

        <a
          href="https://www.instagram.com/design_mafs/?igsh=MWh2ZGg5cWttYm83Ng%3D%3D#"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-white transition"
        >
          <InstagramIcon />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
