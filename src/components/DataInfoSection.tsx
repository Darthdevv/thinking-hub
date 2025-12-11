import { Link } from "react-router";
import myImg from "../assets/images/third-hero.png"
import { useTranslation } from "react-i18next";
import { useEffect } from "react";
import Rocket from "../assets/icons/Rocket";

export default function DataInfoSection() {
    const { t, i18n } = useTranslation();

    useEffect(() => {
      const dir = i18n.language === "ar" ? "rtl" : "ltr";
      document.documentElement.dir = dir;
      document.documentElement.lang = i18n.language;
    }, [i18n.language]);

  return (
    <section className="relative w-full h-[541px] md:h-[541px] lg:h-[541px] max-sm:px-4 py-24 lg:py-32 overflow-hidden">
      {/* Background Image */}
      <img
        src={myImg}
        alt="library background"
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/90 to-transparent" />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto h-full flex items-center">
        <div className="max-w-md text-white">
          <h2 className="text-5xl w-[400px] font-bold leading-snug mb-4">
            {t("bottomtitle")}
          </h2>

          <p className="text-sm text-gray-300 mb-6 leading-relaxed">
            {t("bottomdesc")}
          </p>

          <Link to={"/contact-us"}>
            <button className="bg-[#008346] hover:bg-[#008346] text-white text-sm font-medium px-12.5 py-4 rounded-lg flex items-center gap-2 transition">
              <span>{t("bottombtntext")}</span>
              <Rocket />
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
}
