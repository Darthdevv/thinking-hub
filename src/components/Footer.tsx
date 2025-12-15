/* eslint-disable @typescript-eslint/no-explicit-any */
import { HashLink as Link } from "react-router-hash-link";
import GreenLogo from "../assets/icons/Footer/GreenLogo";
import myLogo from "../assets/images/footer-logo.png";
import InstagramIcon from "../assets/icons/Footer/Instgram";
import { useTranslation } from "react-i18next";
import { useEffect } from "react";


const Footer = () => {
  const { t, i18n } = useTranslation();

  useEffect(() => {
    const dir = i18n.language === "ar" ? "rtl" : "ltr";
    document.documentElement.dir = dir;
    document.documentElement.lang = i18n.language;
  }, [i18n.language]);

  // Function to scroll with offset (for fixed headers)
const scrollWithOffset = (el: HTMLElement) => {
  if (!el) return;
  const yCoordinate = el.getBoundingClientRect().top + window.pageYOffset;
  const yOffset = -40;
  window.scrollTo({ top: yCoordinate + yOffset, behavior: "smooth" });
};


  const designThinkingHubLinks = [
    { label: t("designThinkingHubLink1"), to: "/#about-us" },
    { label: t("designThinkingHubLink2"), to: "/contact-us" },
    { label: t("designThinkingHubLink3"), to: "/how-we-work" },
  ];

  const socialLinks = [
    {
      Icon: InstagramIcon,
      to: "https://www.instagram.com/design_mafs/?igsh=MWh2ZGg5cWttYm83Ng%3D%3D#",
    },
  ];

  return (
    <div className="w-full mt-auto bg-[#0C0E12] border-t-[22px] border-[#57B3B9] px-4 sm:px-8 md:px-12 lg:px-[7.5rem] py-8 min-h-[24rem]">
      {/* Middle Section */}
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row md:justify-between gap-8 md:gap-12 text-[#94979C] border-b border-[#22262F] mt-8 md:mt-16 pb-8 md:pb-16">
        <div className="flex flex-col md:flex-row items-start gap-16 max-sm:gap-6 w-full">
          {/* Logo + Description */}
          <div className="flex flex-col gap-6 max-w-xs w-full">
            <Link to="/" className="flex items-center">
              <GreenLogo className="mr-2" />
              <span className="text-white text-bold">{t("logo")}</span>
            </Link>
            <p className="text-base font-normal">{t("footerdesc")}</p>
          </div>

          {/* Links */}
          <div className="flex flex-col gap-2 md:gap-3 max-sm:mt-8 w-full">
            <h1 className="font-semibold text-sm">{t("footertitle1")}</h1>
            {designThinkingHubLinks.map((link, index) => (
              <Link
                key={index}
                to={link.to}
                scroll={(el: any) => scrollWithOffset(el)} // handle smooth manually
                className="font-semibold text-base hover:text-white transition"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>

        {/* Footer Logo */}
        <div className="flex justify-start md:justify-center max-sm:mt-8 w-full">
          <img
            src={myLogo}
            alt="footer-logo"
            className="w-32 sm:w-40 md:w-44 lg:w-48 object-contain"
          />
        </div>
      </div>

      {/* Bottom Section */}
      <div className=" max-w-7xl mx-auto flex flex-col md:flex-row md:justify-between mt-8 gap-4 text-[#94979C]">
        <h1 className="font-normal text-base">
          © {new Date().getFullYear()}
          {t("copyrights")}
        </h1>
        <div className="flex gap-4 md:gap-6">
          {socialLinks.map((link, index) => (
            <a
              key={index}
              href={link.to}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition"
            >
              <link.Icon />
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Footer;
