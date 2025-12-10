import { ArrowRight } from "lucide-react";
import rightBlob from "../assets/images/Vector.png";
import leftBlob from "../assets/images/Vector (1).png";

const GoalCallToAction = () => {
  return (
    <section className="relative py-20 md:py-28 lg:py-32">
      <div className="relative max-w-8xl mx-auto px-6 md:px-12 lg:px-16">
        {/* Outer Card (Clips EVERYTHING) */}
        <div className="bg-[#00854D] p-1 rounded-[40px] shadow-2xl overflow-hidden">
          {/* Inner Card (also needs overflow-hidden) */}
          <div className="relative bg-[#00854D] rounded-[39px] px-8 py-16 md:px-16 md:py-20 lg:px-24 lg:py-24 overflow-hidden">
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
            <div className="relative z-10 max-w-5xl mx-auto text-center">
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-8">
                Our goal is simple
              </h2>

              <p className="text-lg md:text-xl lg:text-2xl text-emerald-50 leading-relaxed max-w-4xl mx-auto mb-12">
                Accelerate your ability to create lasting change by creating a
                more adaptive, inspired organization — one that moves fluidly
                from insight to innovation to action and deliver meaningful
                progress for the communities you serve.
              </p>

              <button className="group inline-flex items-center gap-4 bg-white text-emerald-800 font-bold text-lg lg:text-xl px-10 py-6 rounded-full shadow-2xl hover:shadow-3xl hover:-translate-y-1 transition-all duration-300">
                Submit Interest
                <ArrowRight className="w-6 h-6 group-hover:translate-x-3 transition-transform duration-300" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GoalCallToAction;
