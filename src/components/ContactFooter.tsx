import React, { useEffect } from "react";
import backgroundPattern from "../assets/images/pattern.png";
import { useTranslation } from "react-i18next";

const ContactFooter: React.FC = () => {
  const { t, i18n } = useTranslation();

  useEffect(() => {
    const dir = i18n.language === "ar" ? "rtl" : "ltr";
    document.documentElement.dir = dir;
    document.documentElement.lang = i18n.language;
  }, [i18n.language]);

  return (
    <footer className="relative w-full bg-white overflow-hidden">
      {/* Background pattern */}
      <div
        className="absolute inset-0 pointer-events-none z-0"
        style={{
          backgroundImage: `url(${backgroundPattern})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-16 md:py-20 flex flex-col md:flex-row items-start gap-12">
        {/* Left: Contact Info + Title */}
        <div className="flex-1 flex flex-col items-start">
          <span className="text-xs md:text-sm font-semibold text-black tracking-widest mb-3">
            {t("contactfootertitle")}
          </span>
          <h2 className="text-2xl md:text-4xl font-bold text-gray-900 leading-snug">
            {t("contactfooterdesc")}
          </h2>
        </div>

        {/* Email */}
        <div className="flex-1 flex flex-col items-start space-y-2">
          <span className="text-xs font-semibold text-gray-600 tracking-widest">
            {t("contactfootersubtitle1")}
          </span>
          <div className="flex flex-col items-start">
            <div className="w-6.5 h-1 my-6.5 bg-gray-900" />
            <a
              href="mailto:help@info.com"
              className="text-lg font-medium text-gray-900 hover:text-emerald-600 transition-colors duration-200"
            >
              {t("example1")}
            </a>
          </div>
        </div>

        {/* Phone */}
        <div className="flex-1 flex flex-col items-start space-y-2">
          <span className="text-xs font-semibold text-gray-600 tracking-widest">
            {t("contactfootersubtitle2")}
          </span>
          <div className="flex flex-col items-start gap-3">
            <div className="w-6.5 h-1 my-6.5 bg-gray-900" />
            <a
              href="tel:+18089834256"
              className="text-lg font-medium text-gray-900 hover:text-emerald-600 transition-colors duration-200"
            >
              {t("example2")}
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default ContactFooter;
