import myImg from "../assets/images/second-hero.jpg"
import pic1 from "../assets/images/Picture.png"
import pic2 from "../assets/images/Picture (1).png";
import pic3 from "../assets/images/Picture (2).png";
import Leadership from "../assets/icons/Leadership";
import Organizational from "../assets/icons/Organizational";
import Innovation from "../assets/icons/Innovation";
import { useEffect } from "react";
import { useTranslation } from "react-i18next";

export default function IntroSection() {
    const { t, i18n } = useTranslation();
  
    useEffect(() => {
      const dir = i18n.language === "ar" ? "rtl" : "ltr";
      document.documentElement.dir = dir;
      document.documentElement.lang = i18n.language;
    }, [i18n.language]);

  const items = [
    {
      title: t("introtitle1"),
      text: t("introdesc1"),
      icon: <Leadership />,
    },
    {
      title: t("introtitle2"),
      text: t("introdesc2"),
      icon: <Organizational />,
    },
    {
      title: t("introtitle3"),
      text: t("introdesc3"),
      icon: <Innovation />,
    },
  ];

  return (
    <section className="relative w-full px-6 md:px-12 py-24 lg:py-32 overflow-hidden">
      {/* Background image with green overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={myImg}
          alt="background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#025D32]/85 to-[#008346]/85" />
      </div>

      {/* Content Wrapper */}
      <div className="relative z-10 max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
        {/* Left Text Section */}
        <div>
          <h2 className="text-3xl font-semibold text-white mb-8">
            {t("intromaintext")}
          </h2>

          <div className="space-y-8 text-white">
            {items.map((item, idx) => (
              <div key={idx} className="flex items-start gap-4">
                <div className="w-[32.5px] h-[32.5px] bg-white rounded-sm shrink-0 flex items-center justify-center">
                  {item.icon}
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-1">{item.title}</h3>
                  <p className="text-white/60 leading-relaxed font-normal">
                    {item.text}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right Images */}
        <div className="grid grid-cols-3 md:grid-cols-3 gap-4">
          {/* Pic 1 */}
          <div className="flex flex-col mt-20">
            <img
              src={pic1}
              alt="person1"
              className="rounded-xl object-cover w-full h-full"
            />
          </div>

          {/* Pic 2 with extra spacing UNDER it */}
          <div className="flex flex-col mb-20 max-sm:mb-15">
            {" "}
            {/* <-- spacing here */}
            <img
              src={pic2}
              alt="person2"
              className="rounded-xl object-cover w-full h-full"
            />
          </div>

          {/* Pic 3 */}
          <div className="flex flex-col mt-10">
            <img
              src={pic3}
              alt="person3"
              className="rounded-xl object-cover w-full h-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
