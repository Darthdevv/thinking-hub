import { ArrowRight } from "lucide-react";
import rightBlob from "../assets/images/rightblob.png";
import leftBlob from "../assets/images/leftblob.png";
import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router";

const GoalCallToAction = () => {
    const { t, i18n } = useTranslation();

    useEffect(() => {
      const dir = i18n.language === "ar" ? "rtl" : "ltr";
      document.documentElement.dir = dir;
      document.documentElement.lang = i18n.language;
    }, [i18n.language]);

  return (
    <section className="relative py-20 md:py-28 lg:py-32">
      <div className="relative max-w-8xl mx-auto px-6 md:px-12 lg:px-16">
        {/* Outer Card (Clips EVERYTHING) */}
        <div className="bg-[#57B3B9] p-1 rounded-[40px] shadow-2xl overflow-hidden">
          {/* Inner Card (also needs overflow-hidden) */}
          <div className="relative bg-[#57B3B9] rounded-[39px] px-8 py-16 md:px-16 md:py-20 lg:px-24 lg:py-24 overflow-hidden">
            {/* Blobs (positioned behind content + clipped) */}
            <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
              {/* Left Blob */}
              <div className="absolute left-0 bottom-0 w-[260px] md:w-[380px] lg:w-[520px]">
                <img
                  src={leftBlob}
                  alt=""
                  className="w-full h-auto object-contain opacity-80"
                />
              </div>

              {/* Right Blob */}
              <div className="absolute right-0 top-0 w-[260px] md:w-[380px] lg:w-[520px]">
                <img
                  src={rightBlob}
                  alt=""
                  className="w-full h-auto object-contain opacity-80"
                />
              </div>
            </div>

            {/* Content */}
            <div className="relative z-10 max-w-7xl mx-auto text-center">
              <h2 className="text-4xl font-semibold text-white leading-normal mb-8">
                {t("ctatitle")}
              </h2>

              <p className="text-base text-white font-normal leading-relaxed w-full  mb-12">
                {t("ctadesc")}
              </p>

              <Link to={"/contact-us"}>
                <button className="group inline-flex items-center gap-4 bg-white text-[#323338] font-normal text-base px-10 py-6 rounded-full hover:-translate-y-1 transition-all duration-300">
                  {t("ctabtn")}
                  <ArrowRight className="w-4.5 h-4.5 group-hover:translate-x-3 transition-transform duration-300" />
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GoalCallToAction;
