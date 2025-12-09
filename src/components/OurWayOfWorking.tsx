import { Play } from "lucide-react";
import myImg from '../assets/images/IMG.png';

const OurWayOfWorking = () => {
  return (
    <section className="py-12 md:py-20 lg:py-32 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Heading */}
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center text-gray-900 mb-8 md:mb-12 tracking-tight">
          OUR WAY OF WORKING
        </h2>

        {/* Paragraph */}
        <div className="max-w-4xl mx-auto text-center mb-16 md:mb-24">
          <p className="text-base md:text-lg lg:text-xl text-gray-700 leading-relaxed">
            We begin by seeing every organization as a living system—people,
            practices, and purpose all shaping one another. This lens helps
            leaders spot what’s working, surface what’s missing, and uncover the
            possibilities waiting to be unlocked— in themselves, their ideas,
            and their organizations. Our dynamic approach integrates three
            dimensions that social innovators need to build for the long-term.
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
          <div
            className="absolute -bottom-10 md:-bottom-14 lg:-bottom-20 left-4 md:left-8 lg:left-12 w-72 md:w-96 lg:w-[480px] 
                          rounded-2xl overflow-hidden shadow-2xl z-10"
          >
            <div className="relative group cursor-pointer">
              <img
                src={myImg}
                alt="Person presenting on tablet"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                <div
                  className="w-16 h-16 md:w-20 md:h-20 lg:w-24 lg:h-24 bg-white rounded-full flex items-center justify-center 
                                shadow-2xl transition-transform duration-300 group-hover:scale-110"
                >
                  <Play
                    className="w-8 h-8 md:w-10 md:h-10 lg:w-12 lg:h-12 text-teal-600 ml-1 md:ml-2"
                    fill="currentColor"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Small Meeting Photo - Bottom Right, overlapping with white border */}
          <div
            className="absolute -bottom-6 md:-bottom-10 lg:-bottom-14 right-4 md:right-8 lg:right-12 
                          w-64 md:w-80 lg:w-96 rounded-2xl overflow-hidden shadow-2xl 
                          ring-8 ring-white z-20"
          >
            <img
              src={myImg}
              alt="Team meeting around table"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurWayOfWorking;
