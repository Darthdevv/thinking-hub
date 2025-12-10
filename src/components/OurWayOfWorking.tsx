import myImg from "../assets/images/IMG.png";
import iMac from '../assets/images/imac.jpg'
import { useTranslation } from "react-i18next";
import { useEffect } from "react";
import PlayIcon from "../assets/icons/PlayIcon";

const OurWayOfWorking = () => {
  const { t, i18n } = useTranslation();

  useEffect(() => {
    const dir = i18n.language === "ar" ? "rtl" : "ltr";
    document.documentElement.dir = dir;
    document.documentElement.lang = i18n.language;
  }, [i18n.language]);
  return (
    <section className="py-12 md:py-20 lg:py-32 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Heading */}
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center text-gray-900 mb-8 md:mb-12 tracking-tight">
          {t("ourwayofworking")}
        </h2>

        {/* Paragraph */}
        <div className="max-w-4xl mx-auto text-center mb-16 md:mb-24">
          <p className="text-base md:text-lg lg:text-xl text-gray-700 leading-relaxed">
            {t("ourdesc")}
          </p>
        </div>

        {/* Images Container */}
        <div className="relative mx-auto max-w-6xl">
          {/* Main Large Image - 4 people standing */}
          <div className="rounded-3xl overflow-hidden shadow-2xl">
            <img
              src={myImg}
              alt="Team collaborating"
              className="w-full h-auto object-cover"
            />
          </div>

          {/* Video Thumbnail - Bottom Left, hanging out */}
          <div className="absolute -bottom-10 md:-bottom-14 lg:-bottom-20 left-4 md:left-8 lg:left-12 w-72 md:w-96 lg:w-[480px] rounded-3xl overflow-hidden shadow-2xl z-10">
            <div className="relative group cursor-pointer">
              <div className="bg-white border-b border-[#eee] h-10 flex items-center px-4 gap-2">
                <span className="w-3 h-3 bg-red-400 rounded-full"></span>
                <span className="w-3 h-3 bg-yellow-400 rounded-full"></span>
                <span className="w-3 h-3 bg-green-400 rounded-full"></span>
              </div>
              <img
                src={iMac}
                alt="Person presenting on tablet"
                className="w-full h-full bg-white rounded-br-3xl rounded-bl-3xl object-cover transition-transform duration-500 group-hover:scale-105 p-2"
              />
              <div className="absolute inset-0 bg-black/20 flex items-center justify-center">
                <div className="w-16 h-16 md:w-20 md:h-20 lg:w-24 lg:h-24 bg-[#17b26ada] rounded-full flex items-center justify-center shadow-2xl transition-transform duration-300 group-hover:scale-110">
                  <PlayIcon />
                </div>
              </div>
            </div>
          </div>

          {/* Small Meeting Photo - Bottom Right, overlapping with white border */}
          {/* <div
            className="absolute -bottom-6 md:-bottom-10 lg:-bottom-14 right-4 md:right-8 lg:right-12 
                          w-64 md:w-80 lg:w-96 rounded-2xl overflow-hidden shadow-2xl 
                          ring-8 ring-white z-20"
          >
            <img
              src={myImg}
              alt="Team meeting around table"
              className="w-full h-full object-cover"
            />
          </div> */}
        </div>
      </div>
    </section>
  );
};

export default OurWayOfWorking;
