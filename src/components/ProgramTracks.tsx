import React, { useEffect } from "react";
import RocketIcon from "../assets/icons/RocketIcon";
import ChartIcon from "../assets/icons/ChartIcon";
import ZapIcon from "../assets/icons/ZapIcon";
import { useTranslation } from "react-i18next";
// import RightArrow from "../assets/icons/RightArrow";
// import Pattern from "../assets/svgs/pattern.svg"


interface Track {
  icon: React.ReactNode;
  title: string;
  description: string;
  color: string;
  iconcolor: string;
}

const ProgramTracks: React.FC = () => {
  const { t, i18n } = useTranslation();

  useEffect(() => {
    const dir = i18n.language === "ar" ? "rtl" : "ltr";
    document.documentElement.dir = dir;
    document.documentElement.lang = i18n.language;
  }, [i18n.language]);

  const tracks: Track[] = [
    {
      icon: <RocketIcon />,
      title: t("programtitle1"),
      description: t("programdesc1"),
      color: "bg-[#F7D5C9]",
      iconcolor: "bg-[#D3624C]",
    },
    {
      icon: <ChartIcon />,
      title: t("programtitle2"),
      description: t("programdesc2"),
      color: "bg-[#D9D4F0]",
      iconcolor: "bg-[#7670B2]",
    },
    {
      icon: <ZapIcon />,
      title: t("programtitle3"),
      description: t("programdesc3"),
      color: "bg-[#B7E3E4]",
      iconcolor: "bg-[#00A1A1]",
    },
  ];

  return (
    <section className="bg-[#F5F5F5] min-h-screen px-4 py-12 md:px-8 lg:px-16 grid place-items-center">
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <h2 className="text-5xl max-md:text-4xl font-bold text-gray-900 mb-3">
          {t("programmaintitle")}
        </h2>
        <p className="text-[#414651] mt-2 mb-12 max-w-xl text-base">
          {t("programmaindesc")}
        </p>

        {/* Cards */}
        <div className="grid gap-6 md:grid-cols-3">
          {tracks.map((track, index) => (
            <div
              key={index}
              className={`${track.color} h-[480px] rounded-lg overflow-hidden shadow-sm flex flex-col`}
            >
              {/* Card Content */}
              <div className="p-10 flex-1 flex flex-col justify-center">
                {/* Icon */}
                <div
                  className={`${track.iconcolor} w-12 h-12 rounded-full flex items-center justify-center mb-5`}
                >
                  {track.icon}
                </div>

                {/* Title */}
                <h3 className="text-2xl font-bold text-[#181D27] mb-3">
                  {track.title}
                </h3>

                {/* Description */}
                <p className="text-[#252B37] text-base font-normal flex-1">
                  {track.description}
                </p>
              </div>

              {/* Know More with arrow */}
              {/* <div className="px-6 pb-4">
                <a
                  href="#"
                  className="inline-flex items-center gap-1 text-base font-medium text-[#414651] hover:underline"
                >
                  Know More
                  <RightArrow />
                </a>
              </div> */}

              {/* Footer pattern SVG */}
              {/* <div className="h-15 w-full">
                <img
                  src={Pattern}
                  alt="pattern"
                  className="h-full w-full object-cover"
                />
              </div> */}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProgramTracks;
