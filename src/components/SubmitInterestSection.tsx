
import { Facebook, Instagram, Twitter, Send } from "lucide-react";

const SubmitInterestSection = () => {
  return (
    <section className="py-20 md:py-32 bg-gray-50 relative overflow-hidden">
      {/* Main Container */}
      <div className="max-w-7xl mx-auto px-6">
        {/* Top Text */}
        <div className="text-center md:text-left mb-12 md:mb-16">
          <p className="text-sm md:text-base text-gray-600 font-medium tracking-wider">
            Submit Interest
          </p>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-gray-900 mt-4 leading-tight">
            Get in touch with us. We're
            <br />
            here to assist you.
          </h2>
        </div>

        {/* Card with Curved Image */}
        <div className="relative bg-emerald-600 rounded-3xl overflow-hidden shadow-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-2">
            {/* Left: Form */}
            <div className="p-10 md:p-16 text-white">
              <h3 className="text-2xl md:text-3xl font-bold mb-4">
                Submit Interest
              </h3>
              <p className="text-emerald-100 mb-10 leading-relaxed">
                Fill out the form below, and our team will get back to you
                promptly. Let’s connect and create solutions together.
              </p>

              <form className="space-y-6">
                <input
                  type="text"
                  placeholder="Full name"
                  className="w-full px-5 py-4 bg-white/10 border border-white/20 rounded-xl placeholder-emerald-200 text-white focus:outline-none focus:border-white/50 transition"
                />
                <input
                  type="email"
                  placeholder="Email"
                  className="w-full px-5 py-4 bg-white/10 border border-white/20 rounded-xl placeholder-emerald-200 text-white focus:outline-none focus:border-white/50 transition"
                />
                <div className="flex gap-3">
                  <input
                    type="tel"
                    placeholder="+000"
                    className="w-24 px-5 py-4 bg-white/10 border border-white/20 rounded-xl placeholder-emerald-200 text-white focus:outline-none"
                  />
                  <input
                    type="tel"
                    placeholder="00000 00000"
                    className="flex-1 px-5 py-4 bg-white/10 border border-white/20 rounded-xl placeholder-emerald-200 text-white focus:outline-none"
                  />
                </div>
                <input
                  type="text"
                  placeholder="What is your domain? *"
                  className="w-full px-5 py-4 bg-white/10 border border-white/20 rounded-xl placeholder-emerald-200 text-white focus:outline-none focus:border-white/50 transition"
                />
                <textarea
                  rows={4}
                  placeholder="Add text"
                  className="w-full px-5 py-4 bg-white/10 border border-white/20 rounded-xl placeholder-emerald-200 text-white resize-none focus:outline-none focus:border-white/50 transition"
                />

                <button
                  type="submit"
                  className="group inline-flex items-center gap-3 bg-white text-emerald-600 font-bold px-8 py-4 rounded-full hover:bg-gray-100 transition-all duration-300 shadow-lg hover:shadow-xl"
                >
                  <Send className="w-5 h-5" />
                  Send
                </button>
              </form>
            </div>

            {/* Right: Curved Image */}
            <div className="relative h-96 lg:h-auto">
              <div className="absolute inset-0 bg-gradient-to-br from-emerald-500 to-emerald-700" />
              <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?w=1200&h=1200&fit=crop')] bg-cover bg-center bg-no-repeat rounded-tl-3xl lg:rounded-tl-[6rem] overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-t from-emerald-600/80 via-transparent to-transparent" />
              </div>
              {/* Curved cutout effect using clip-path */}
              <div className="absolute top-0 left-0 w-full h-full bg-emerald-600 lg:clip-path-person" />
            </div>
          </div>
        </div>

        {/* Social Icons - Floating Right */}
        <div className="fixed right-6 top-1/2 -translate-y-1/2 flex flex-col gap-4 z-10">
          <a
            href="#"
            className="w-10 h-10 rounded-full bg-white/50 border border-[#B7B7B7] backdrop-blur-sm flex items-center justify-center text-[#1a1a1a] hover:bg-white/20 transition"
          >
            <Facebook className="w-5 h-5" />
          </a>
          <a
            href="#"
            className="w-10 h-10 rounded-full bg-white/50 border border-[#B7B7B7] backdrop-blur-sm flex items-center justify-center text-[#1a1a1a] hover:bg-white/20 transition"
          >
            <Instagram className="w-5 h-5" />
          </a>
          <a
            href="#"
            className="w-10 h-10 rounded-full bg-white/50 border border-[#B7B7B7] backdrop-blur-sm flex items-center justify-center text-[#1a1a1a] hover:bg-white/20 transition"
          >
            <Twitter className="w-5 h-5" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default SubmitInterestSection;
