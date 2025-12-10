
import { ArrowRight } from "lucide-react";

export default function DataInfoSection() {
  return (
    <section className="relative w-full h-[350px] md:h-[420px] lg:h-[460px] py-24 lg:py-32 overflow-hidden">
      {/* Background Image */}
      <img
        src="https://images.pexels.com/photos/256559/pexels-photo-256559.jpeg"
        alt="library background"
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/60" />

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 md:px-12 h-full flex items-center">
        <div className="max-w-md text-white">
          <h2 className="text-3xl md:text-4xl font-bold leading-snug mb-4">
            Need more
            <br /> information about
            <br /> data analysis?
          </h2>

          <p className="text-sm text-gray-200 mb-6 leading-relaxed">
            Data analytics is important because it can help businesses optimize
            their performances. It can reduce costs & storing large amounts of
            data.
          </p>

          <button className="bg-green-600 hover:bg-green-700 text-white text-sm font-medium px-5 py-2 rounded-md flex items-center gap-2 transition">
            <span>Submit interest</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  );
}
