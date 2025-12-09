
import { ArrowRight } from "lucide-react";

export default function WayOfWorking() {
  return (
    <section className="w-full py-20 px-6 md:px-12 lg:px-24 bg-white">
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
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="white"
                className="w-10 h-10 ml-1"
              >
                <path d="M8 5v14l11-7z" />
              </svg>
            </div>
          </div>
        </div>

        {/* Right: Content */}
        <div className="text-gray-800">
          <p className="text-green-600 font-semibold mb-2">How we work</p>
          <h2 className="text-3xl md:text-4xl font-extrabold mb-6 leading-snug">
            OUR WAY OF WORKING
          </h2>

          {/* Decorative curve */}
          <div className="w-40 h-3 mb-6">
            <svg
              viewBox="0 0 200 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M5 15C60 -5 140 -5 195 15"
                stroke="#15803d"
                strokeWidth="4"
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
