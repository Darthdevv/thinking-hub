import Facebook from "../assets/icons/Facebook";
import Instagram from "../assets/icons/Instagram";
import TwitterIcon from "../assets/icons/TwitterIcon";
import contactImage from "../assets/images/Rectangle 47 (2).png";

const ContactFormSection = () => {
  return (
    <section className="relative bg-white py-16 px-6 max-sm:px-0 md:py-24 md:px-12 lg:px-24 overflow-hidden">
      {/* Curved background */}
      <div className="relative max-w-7xl text-start mx-auto max-sm:pl-2 mb-[88px]">
        <h2 className="text-xl text-black mb-8">Submit Interest</h2>
        <p className="text-5xl font-bold text-black w-[659px] max-sm:w-full">
          Get in touch with us. We're here to assist you.
        </p>
      </div>

      <div className="max-w-7xl mx-auto relative z-10 flex flex-col lg:flex-row items-center gap-12">
        <div className="absolute -z-10 w-[1322px] max-sm:w-full h-[644px] inset-0 bg-[#047857] rounded-tr-[600px] max-sm:rounded-none"></div>

        {/* Form */}
        <div className="bg-[#056438] rounded-[32px] p-8 md:p-12 flex-1 w-[541px] max-sm:w-full max-sm:px-10 max-sm:h-[504px] h-[564px] shadow-lg ml-10 max-sm:ml-0 mt-10">
          <h2 className="text-white text-lg font-medium mb-4">
            Submit Interest
          </h2>
          <p className="text-green-100 mb-8">
            Fill out the form below, and our team will get back to you promptly.
            Let's connect and create solutions together.
          </p>
          <form className="flex flex-col gap-4">
            <input
              type="text"
              placeholder="Enter your full name"
              className="p-3 rounded-md focus:outline-none bg-white focus:ring-2 focus:ring-green-300"
            />
            <input
              type="email"
              placeholder="Enter your email address"
              className="p-3 rounded-md focus:outline-none bg-white focus:ring-2 focus:ring-green-300"
            />
            <div className="flex gap-2 flex-1">
              <select className="p-3 rounded-md focus:outline-none bg-white focus:ring-2 focus:ring-green-300 w-24">
                <option>+966</option>
              </select>
              <input
                type="tel"
                placeholder="5xxxx"
                className="p-3 rounded-md w-full  focus:outline-none bg-white focus:ring-2 focus:ring-green-300"
              />
            </div>
            <select className="p-3 rounded-md focus:outline-none focus:ring-2 bg-white focus:ring-green-300">
              <option>Choose your role</option>
              <option>Developer</option>
              <option>Designer</option>
              <option>Manager</option>
            </select>
            <button
              type="submit"
              className="mt-4 bg-[#008346] hover:bg-[#008346b2] text-white py-3 px-6 rounded-full flex items-center justify-center gap-2 transition-all"
            >
              Send
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M14 5l7 7m0 0l-7 7m7-7H3"
                />
              </svg>
            </button>
          </form>
        </div>

        {/* Image */}
        <div className="flex-1 w-full relative max-md:hidden">
          <div className="overflow-hidden rounded-[32px] mt-10">
            <img
              src={contactImage}
              alt="Contact"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>

      {/* Social Icons */}
      <div className="absolute top-16 right-36 max-sm:right-4 flex flex-col gap-4 z-20">
        <button className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-100 transition">
          <Facebook/>
        </button>
        <button className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-100 transition">
        <Instagram/>
        </button>
        <button className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-100 transition">
          <TwitterIcon/>
        </button>
      </div>
    </section>
  );
};

export default ContactFormSection;
