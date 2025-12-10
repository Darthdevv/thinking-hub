
import backgroundPattern from "../assets/images/pattern.png";

const ContactFooter = () => {
  return (
    <footer className=" w-full relative bg-white overflow-hidden">
      {/* Full background image – your exact file */}
      <div
        className="absolute inset-0 opacity-50"
        style={{
          backgroundImage: `url(${backgroundPattern})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      />

      {/* Optional subtle emerald overlay for perfect match */}
      <div className="absolute inset-0 bg-emerald-50/20" />

      {/* Thick emerald top border
      <div className="absolute bottom-0 left-0 right-0 h-4 bg-emerald-600" /> */}

      <div className="relative max-w-7xl mx-auto px-6 py-20 md:py-28">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-20 items-start text-center md:text-left">
          {/* Left: Title */}
          <div>
            <p className="text-xs md:text-sm font-semibold text-emerald-700 uppercase tracking-widest mb-3">
              Contact Info
            </p>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-gray-900 leading-tight">
              We are always happy to
              <br />
              assist you
            </h2>
          </div>

          {/* Email */}
          <div className="space-y-4">
            <p className="text-xs md:text-sm font-semibold text-gray-600 uppercase tracking-widest">
              Email Address
            </p>
            <div className="flex items-center justify-center md:justify-start gap-6">
              <div className="w-12 h-px bg-gray-900" />
              <a
                href="mailto:help@info.com"
                className="text-lg md:text-xl font-medium text-gray-900 hover:text-emerald-600 transition-colors duration-200"
              >
                help@info.com
              </a>
            </div>
          </div>

          {/* Phone */}
          <div className="space-y-4">
            <p className="text-xs md:text-sm font-semibold text-gray-600 uppercase tracking-widest">
              Number
            </p>
            <div className="flex items-center justify-center md:justify-start gap-6">
              <div className="w-12 h-px bg-gray-900" />
              <a
                href="tel:+18089834256"
                className="text-lg md:text-xl font-medium text-gray-900 hover:text-emerald-600 transition-colors duration-200"
              >
                (808) 988-34256
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default ContactFooter;
