
import { ArrowRight } from "lucide-react";

const GoalCallToAction = () => {
  return (
    <section className="py-16 md:py-24 lg:py-32 px-6">
      <div className="relative max-w-7xl mx-auto">
        {/* Background decorative waves (exactly like your design) */}
        {/* <div className="absolute -bottom-20 -left-20 w-96 h-96 bg-emerald-400/30 rounded-full blur-3xl" />
        <div className="absolute -bottom-32 -right-20 w-80 h-80 bg-emerald-500/20 rounded-full blur-3xl" /> */}

        {/* Main CTA Card */}
        <div className="relative bg-gradient-to-r from-[#059669] via-[#10b981] to-[#34d399] p-1 rounded-[40px] shadow-2xl">
          <div className="bg-gradient-to-r from-[#065f46] via-[#047857] to-[#059669] rounded-[39px] px-8 py-12 md:px-16 md:py-20 lg:px-24 lg:py-24">
            <div className="max-w-6xl mx-auto flex flex-col md:items-center md:justify-between gap-10 lg:gap-16">
              {/* Text */}
              <div className="text-white text-center">
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
                  Our goal is simple
                </h2>
                <p className="text-lg md:text-xl lg:text-2xl leading-relaxed text-emerald-50 max-w-4xl">
                  Accelerate your ability to create lasting change by creating a
                  more adaptive, inspired organization — one that moves fluidly
                  from insight to innovation to action and delivers meaningful
                  progress for the communities you serve.
                </p>
              </div>

              {/* Button */}
              <div className="flex justify-center md:justify-end">
                <button className="group inline-flex items-center bg-white text-emerald-700 font-bold text-lg lg:text-xl px-10 py-6 rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-1">
                  Submit Interest
                  <ArrowRight className="ml-4 w-6 h-6 group-hover:translate-x-2 transition-transform duration-300" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GoalCallToAction;
