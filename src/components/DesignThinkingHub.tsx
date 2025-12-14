// import patternImage from "../assets/images/About.png";
import Mission from "../assets/icons/Mission";
import Vision from "../assets/icons/Vision";
import Values from "../assets/icons/Values";
import { useEffect } from "react";
import { useTranslation } from "react-i18next";

export default function AboutSection() {
    const { t, i18n } = useTranslation();

    useEffect(() => {
      const dir = i18n.language === "ar" ? "rtl" : "ltr";
      document.documentElement.dir = dir;
      document.documentElement.lang = i18n.language;
    }, [i18n.language]);

  return (
    <section className="py-20 lg:py-32 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative">
        {/* Header + Pattern Image */}
        <div className="w-full flex flex-col lg:flex-row justify-between items-start gap-10">
          {/* Left Text */}
          <div className="max-w-7xl">
            <p className="text-[#57B3B9] font-semibold text-lg tracking-widest mb-4">
              {t("aboutheader")}
            </p>
            <h2 className="text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
              {t("abouttitle")}
            </h2>
            <p className="mt-6 text-lg text-gray-600 leading-relaxed">
              {t("aboutdesc")}
            </p>
          </div>

          {/* Right Pattern Image */}
          {/* <div className="hidden lg:block flex-shrink-0">
            <img
              src={patternImage}
              alt="Decorative pattern"
              className="w-[320px] lg:w-[450px] xl:w-[520px]"
            />
          </div> */}
        </div>

        {/* Mission | Vision | Values */}
        <div className="mt-20 grid grid-cols-1 lg:grid-cols-3 gap-16 lg:gap-8 relative">
          {/* Vertical Dividers */}
          <div className="hidden lg:block absolute left-1/3 top-0 bottom-0 w-px bg-gray-200"></div>
          <div className="hidden lg:block absolute left-2/3 top-0 bottom-0 w-px bg-gray-200"></div>

          {/* Mission */}
          <div className="flex flex-col items-center lg:items-start text-center lg:text-left rtl:lg:text-right px-4">
            <div className="w-13.5 h-13.5 bg-[#57B3B9] rounded-full flex items-center justify-center mb-8">
              <Mission />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              {t("mission")}
            </h3>
            <p className="text-gray-600 leading-relaxed">{t("missiondesc")}</p>
          </div>

          {/* Vision */}
          <div className="flex flex-col items-center lg:items-start text-center lg:text-left rtl:lg:text-right px-4">
            <div className="w-13.5 h-13.5 bg-[#57B3B9] rounded-full flex items-center justify-center mb-8">
              <Vision />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              {t("vision")}
            </h3>
            <p className="text-gray-600 leading-relaxed">{t("visiondesc")}</p>
          </div>

          {/* Values */}
          <div className="flex flex-col items-center lg:items-start text-center lg:text-left rtl:lg:text-right px-4">
            <div className="w-13.5 h-13.5 bg-[#57B3B9] rounded-full flex items-center justify-center mb-8">
              <Values />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              {t("values")}
            </h3>
            <p className="text-gray-600 leading-relaxed">{t("valuesdesc")}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
