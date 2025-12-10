import { Users, Flag, Lightbulb } from "lucide-react";
import patternImage from "../assets/images/About.png";

export default function AboutSection() {
  return (
    <section className="py-20 lg:py-32 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative">
        {/* Header + Pattern Image */}
        <div className="flex flex-col lg:flex-row justify-between items-start gap-10">
          {/* Left Text */}
          <div className="max-w-3xl">
            <p className="text-green-600 font-medium text-sm tracking-widest mb-4">
              About
            </p>
            <h2 className="text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
              Design Thinking Hub
            </h2>
            <p className="mt-6 text-lg text-gray-600 leading-relaxed">
              The Design Thinking Hub is an innovation catalyst that unlocks the
              potential of non-profit organizations.
            </p>
          </div>

          {/* Right Pattern Image */}
          <div className="hidden lg:block flex-shrink-0">
            <img
              src={patternImage}
              alt="Decorative pattern"
              className="w-[320px] lg:w-[450px] xl:w-[520px]"
            />
          </div>
        </div>

        {/* Mission | Vision | Values */}
        <div className="mt-20 grid grid-cols-1 lg:grid-cols-3 gap-16 lg:gap-8 relative">
          {/* Vertical Dividers */}
          <div className="hidden lg:block absolute left-1/3 top-0 bottom-0 w-px bg-gray-200"></div>
          <div className="hidden lg:block absolute left-2/3 top-0 bottom-0 w-px bg-gray-200"></div>

          {/* Mission */}
          <div className="flex flex-col items-center lg:items-start text-center lg:text-left px-4">
            <div className="w-20 h-20 bg-green-600 rounded-full flex items-center justify-center shadow-xl mb-8">
              <Users className="w-10 h-10 text-white" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">MISSION</h3>
            <p className="text-gray-600 leading-relaxed">
              Develop Social Innovators and Organizations to help transform and
              create vibrant lasting community impact.
            </p>
          </div>

          {/* Vision */}
          <div className="flex flex-col items-center lg:items-start text-center lg:text-left px-4">
            <div className="w-20 h-20 bg-green-600 rounded-full flex items-center justify-center shadow-xl mb-8">
              <Flag className="w-10 h-10 text-white" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">VISION</h3>
            <p className="text-gray-600 leading-relaxed">
              Become the region’s leading catalyst for social innovation,
              collaboration and sustainable growth.
            </p>
          </div>

          {/* Values */}
          <div className="flex flex-col items-center lg:items-start text-center lg:text-left px-4">
            <div className="w-20 h-20 bg-green-600 rounded-full flex items-center justify-center shadow-xl mb-8">
              <Lightbulb className="w-10 h-10 text-white" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">VALUES</h3>
            <p className="text-gray-600 leading-relaxed">
              We unlock potential, act on ideas, support each other, learn by
              experimenting, and empathize deeply with those we serve.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
