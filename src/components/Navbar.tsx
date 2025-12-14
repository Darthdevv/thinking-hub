    "use client";

    import { useState, useEffect } from "react";
    import { Menu, X } from "lucide-react";
    import videoSrc from "../assets/videos/Navbar/esign.mp4";
    import { Link } from "react-router";
    import GreenLogo from "../assets/icons/Footer/GreenLogo";
    import LanguageDropdown from "./LanguageSwitcher";
    import Rocket from "../assets/icons/Rocket";
    import { useTranslation } from "react-i18next";

    export default function Navbar() {
        const { t, i18n } = useTranslation();
        const [currentSlide, setCurrentSlide] = useState(0);
        const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

        useEffect(() => {
            const dir = i18n.language === "ar" ? "rtl" : "ltr";
            document.documentElement.dir = dir;
            document.documentElement.lang = i18n.language;
        }, [i18n.language]);

        const slides = [
            {
            title: t("herotitle1"),
            description: t("herodesc1"),
            button1: t("herobtn1"),
            button2: t("herosecondbtn1"),
            },
        ];

        useEffect(() => {
            const interval = setInterval(
            () => setCurrentSlide((prev) => (prev + 1) % slides.length),
            5000
            );
            return () => clearInterval(interval);
            // eslint-disable-next-line react-hooks/exhaustive-deps
        }, []);

        return (
          <div className="relative w-screen min-h-screen text-white overflow-hidden">
            {/* Background Video */}
            <div className="absolute inset-0 -z-10 overflow-hidden">
              <video
                src={videoSrc}
                autoPlay
                muted
                loop
                playsInline
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black/50" />
            </div>

            {/* DESKTOP NAVBAR */}
            <nav className="hidden md:flex absolute top-8 left-1/2 -translate-x-1/2 z-50 items-center justify-between bg-[#000201CC] backdrop-blur-md px-10 py-5 rounded-full shadow-2xl w-full max-w-6xl">
              <div className="flex items-center gap-4">
                <div className=" p-2.5 rounded-lg">
                  <Link to={"/"} className="flex items-center justify-center">
                    <GreenLogo className="mr-2 rtl:ml-2" />
                    {t("logo")}
                  </Link>
                </div>
              </div>

              <div className="flex items-center gap-8">
                <div className="flex items-center gap-8 text-sm">
                  <Link
                    to={"/how-we-work"}
                    className="hover:border-b-2 hover:border-[#57B3B9] transition"
                  >
                    {t("navlink1")}
                  </Link>
                  <Link
                    to={"/contact-us"}
                    className="hover:border-b-2 hover:border-[#57B3B9] transition"
                  >
                    {t("navlink2")}
                  </Link>
                </div>
                <LanguageDropdown />

                <Link
                  to={"/contact-us"}
                  className="bg-[#57B3B9] hover:bg-[#54AAA9] text-white font-semibold px-7 py-3.5 rounded-full flex items-center gap-2 transition shadow-md"
                >
                  {t("navbtn")} <Rocket />
                </Link>
              </div>
            </nav>

            {/* MOBILE NAVBAR */}
            <nav className="md:hidden absolute top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-5 bg-[#000201CC]">
              <div className="flex items-center gap-3">
                <div className=" p-2 rounded-lg">
                  <Link to={"/"} className="flex items-center justify-center">
                    <GreenLogo className="mr-2 rtl:ml-2" />
                    {t("logo")}
                  </Link>
                </div>
              </div>

              <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
                {isMobileMenuOpen ? (
                  <X className="w-7 h-7" />
                ) : (
                  <Menu className="w-7 h-7" />
                )}
              </button>
            </nav>

            {/* MOBILE MENU */}
            {isMobileMenuOpen && (
              <div className="md:hidden absolute top-20 left-1/2 -translate-x-1/2 z-50 w-[90%] max-w-md">
                <div className="bg-[#000201CC] text-white rounded-3xl shadow-2xl border border-[#57B3B9]">
                  <div className="p-8 space-y-6">
                    <Link
                      to={"/how-we-work"}
                      className="block text-lg hover:border-b-2 hover:border-[#57B3B9] transition"
                    >
                      {t("navlink1")}
                    </Link>
                    <Link
                      to={"/contact-us"}
                      className="block text-lg hover:border-b-2 hover:border-[#57B3B9] transition"
                    >
                      {t("navlink2")}
                    </Link>

                    <div className="py-4 border-t border-[#57B3B9]">
                      <LanguageDropdown />
                    </div>

                    <Link
                      to={"/contact-us"}
                      className=" text-center bg-[#57B3B9] hover:bg-[#54AAA9] text-white font-semibold py-4 rounded-full shadow-lg flex items-center justify-center gap-2"
                    >
                      {t("navbtn")} <Rocket />
                    </Link>
                  </div>
                </div>
              </div>
            )}

            {/* HERO CONTENT */}
            <div className="relative z-10 flex flex-col justify-center min-h-screen px-8 md:px-[120px] pt-32 md:pt-0 text-center">
              <div className="max-w-full w-full text-center mx-auto">
                <h1 className="text-5xl md:text-[72px] font-bold leading-tight mb-6">
                  {slides[currentSlide].title}
                </h1>

                <p className="text-lg md:text-xl mb-12">
                  {slides[currentSlide].description}
                </p>

                <div className="flex items-center justify-center gap-6  text-center mx-auto w-full">
                  <Link to={"/contact-us"}>
                    <button className="bg-[#57B3B9] hover:bg-[#54AAA9] px-8 py-4 rounded-lg font-semibold transition shadow-lg">
                      {slides[currentSlide].button1}
                    </button>
                  </Link>

                  <Link to={"/how-we-work"}>
                    <button className="border border-gray-300 hover:border-white px-8 py-4 rounded-lg font-semibold bg-white text-black backdrop-blur transition">
                      {slides[currentSlide].button2}
                    </button>
                  </Link>
                </div>

                {/* <div className="flex gap-3 mt-32 md:mt-48">
                        {slides.map((_, index) => (
                            <button
                            key={index}
                            onClick={() => setCurrentSlide(index)}
                            className={`h-1 rounded-full transition-all duration-300 ${
                                currentSlide === index ? "bg-white w-12" : "bg-white/40 w-4"
                            }`}
                            />
                        ))}
                        </div> */}
              </div>
            </div>
          </div>
        );
    }
