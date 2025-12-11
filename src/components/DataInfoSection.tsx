import { Link } from "react-router";
import myImg from "../assets/images/third-hero.png"
import { ArrowRight } from "lucide-react";
import { useTranslation } from "react-i18next";
import { useEffect } from "react";

export default function DataInfoSection() {
    const { t, i18n } = useTranslation();

    useEffect(() => {
      const dir = i18n.language === "ar" ? "rtl" : "ltr";
      document.documentElement.dir = dir;
      document.documentElement.lang = i18n.language;
    }, [i18n.language]);

  return (
    <section className="relative w-full h-[541px] md:h-[541px] lg:h-[541px] py-24 lg:py-32 overflow-hidden">
      {/* Background Image */}
      <img
        src={myImg}
        alt="library background"
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/60" />

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 md:px-12 h-full flex items-center">
        <div className="max-w-md text-white">
          <h2 className="text-3xl md:text-4xl font-bold leading-snug mb-4">
            {t("bottomtitle")}
          </h2>

          <p className="text-sm text-gray-200 mb-6 leading-relaxed">
            {t("bottomdesc")}
          </p>

          <Link to={"/contact-us"}>
            <button className="bg-[#008346] hover:bg-[#008346] text-white text-sm font-medium px-5 py-2 rounded-md flex items-center gap-2 transition">
              <span>{t("bottombtntext")}</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
}
