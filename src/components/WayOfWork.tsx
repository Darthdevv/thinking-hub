import { ArrowRight } from "lucide-react";
import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import PlayIcon from "../assets/icons/PlayIcon";

export default function WayOfWorking() {
  const { t, i18n } = useTranslation();

  useEffect(() => {
    const dir = i18n.language === "ar" ? "rtl" : "ltr";
    document.documentElement.dir = dir;
    document.documentElement.lang = i18n.language;
  }, [i18n.language]);

  return (
    <section className="w-full py-25 lg:py-32 px-6 md:px-12 lg:px-24 bg-white">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        {/* Left: Image with browser frame and play button */}
        <div className="relative w-full rounded-xl overflow-hidden shadow-md">
          {/* Fake browser bar */}
          <div className="bg-gray-100 h-10 flex items-center px-4 gap-2">
            <span className="w-3 h-3 bg-red-400 rounded-full"></span>
            <span className="w-3 h-3 bg-yellow-400 rounded-full"></span>
            <span className="w-3 h-3 bg-green-400 rounded-full"></span>
            <div className="mx-auto text-gray-400 text-sm">app.mrgxflow.co</div>
          </div>

          {/* Main Image */}
          <img
            src="https://images.pexels.com/photos/1181395/pexels-photo-1181395.jpeg"
            alt="team meeting"
            className="w-full h-80 object-cover"
          />

          {/* Play Button Overlay */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-24 h-24 bg-green-600/90 rounded-full flex items-center justify-center cursor-pointer transition hover:bg-green-700/90">
              <PlayIcon />
            </div>
          </div>
        </div>

        {/* Right: Content */}
        <div className="text-gray-800">
          <p className="text-green-600 font-semibold mb-2">{t("welcome")}</p>
          <h2 className="text-3xl md:text-4xl font-extrabold mb-6 leading-snug">
            {t("description")}
          </h2>

          {/* Decorative curve */}
          <div className="w-[476px] h-6 mb-6">
            <svg
              width={487}
              height={34}
              viewBox="0 0 487 34"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                opacity="0.8"
                d="M4.00098 30C73.6316 10.3798 266.915 -17.0885 483.001 30"
                stroke="#017A41"
                strokeWidth={8}
                strokeLinecap="round"
              />
            </svg>
          </div>

          <p className="text-gray-600 leading-relaxed mb-6">
            We begin by seeing every organization as a living system—people,
            practices, and purpose all shaping one another. This lens helps
            leaders spot what's working, surface what's missing, and uncover the
            possibilities waiting to be unlocked – in themselves, their ideas,
            and their organizations. Our dynamic approach integrates three
            dimensions that social innovators need to build for the long-term.
          </p>

          {/* Explore More */}
          <button className="flex items-center gap-2 text-green-700 font-semibold hover:underline">
            Explore More <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  );
}
