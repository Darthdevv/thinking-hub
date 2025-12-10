        "use client";

        import { useState, useEffect } from "react";
        import { Menu, X, ChevronDown } from "lucide-react";
        import videoSrc from "../assets/videos/Navbar/video.mp4";
    import { Link } from "react-router";
    import GreenLogo from "../assets/icons/Footer/GreenLogo";

        const slides = [
        {
            title: "Empowering Social Entrepreneurs",
            description:
            "We help purpose-driven founders build sustainable ventures that create positive impact at scale. Join our community of changemakers.",
            button1: "Join a Program",
            button2: "Learn More",
        },
        {
            title: "Innovate with Purpose",
            description:
            "Discover tools and resources to turn your ideas into impactful solutions. Start your journey today.",
            button1: "Explore Tools",
            button2: "Get Started",
        },
        ];

        export default function Navbar() {
        const [currentSlide, setCurrentSlide] = useState(0);
        const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

        useEffect(() => {
            const interval = setInterval(
            () => setCurrentSlide((prev) => (prev + 1) % slides.length),
            5000
            );
            return () => clearInterval(interval);
        }, []);

        return (
        <div className="relative w-screen min-h-screen text-white overflow-hidden">
            {/* Background Video */}
            <div className="absolute inset-0 -z-10 overflow-hidden">
            <video
                src={videoSrc}
                autoPlay
                muted
                loop
                playsInline
                className="absolute inset-0 w-full h-full object-cover scale-[1.2] max-sm:scale-[1.35]"
            />
            <div className="absolute inset-0 bg-black/65" />
            </div>

            {/* DESKTOP NAVBAR */}
            <nav className="hidden md:flex absolute top-8 left-1/2 -translate-x-1/2 z-50 items-center justify-between bg-gray-900/95 backdrop-blur-md px-10 py-5 rounded-full shadow-2xl w-full max-w-6xl">
            <div className="flex items-center gap-4">
                <div className=" p-2.5 rounded-lg">
                <Link to={"/"}>
                    <GreenLogo className="mr-2" />
                </Link>
                </div>
            </div>

            <div className="flex items-center gap-8">
                <div className="flex items-center gap-12 text-sm">
                <a href="#" className="hover:text-green-400 transition">
                    How We Work
                </a>
                <a href="#" className="hover:text-green-400 transition">
                    Contact US
                </a>
                </div>
                <button className="flex items-center gap-2 text-sm hover:text-green-400 transition">
                <img
                    src="https://flagcdn.com/20x15/gb.png"
                    alt="UK flag"
                    className="w-5 h-4"
                />
                <span>Eng</span>
                <ChevronDown className="w-4 h-4" />
                </button>

                <a
                href="#"
                className="bg-green-500 hover:bg-green-600 text-gray-900 font-semibold px-7 py-3.5 rounded-full flex items-center gap-2 transition shadow-md"
                >
                Submit Interest
                <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                >
                    <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={3}
                    d="M9 5l7 7-7 7"
                    />
                </svg>
                </a>
            </div>
            </nav>

            {/* MOBILE NAVBAR */}
            <nav className="md:hidden absolute top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-5 bg-gray-900">
            <div className="flex items-center gap-3">
                <div className=" p-2 rounded-lg">
                <Link to={"/"}>
                    <GreenLogo className="mr-2" />
                </Link>
                </div>
            </div>

            <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
                {isMobileMenuOpen ? (
                <X className="w-7 h-7" />
                ) : (
                <Menu className="w-7 h-7" />
                )}
            </button>
            </nav>

            {/* MOBILE MENU */}
            {isMobileMenuOpen && (
            <div className="md:hidden absolute top-20 left-1/2 -translate-x-1/2 z-50 w-[90%] max-w-md">
                <div className="bg-gray-900 rounded-3xl shadow-2xl border border-gray-800">
                <div className="p-8 space-y-6">
                    <a
                    href="#"
                    className="block text-lg hover:text-green-400 transition"
                    >
                    How We Work
                    </a>
                    <a
                    href="#"
                    className="block text-lg hover:text-green-400 transition"
                    >
                    Contact US
                    </a>

                    <div className="py-4 border-t border-gray-700">
                    <button className="flex w-full items-center justify-between text-lg">
                        <div className="flex items-center gap-3">
                        <img
                            src="https://flagcdn.com/20x15/gb.png"
                            alt="UK flag"
                            className="w-5 h-4"
                        />
                        <span>English</span>
                        </div>
                        <ChevronDown className="w-5 h-5" />
                    </button>
                    </div>

                    <a
                    href="#"
                    className="block text-center bg-green-500 hover:bg-green-600 text-gray-900 font-semibold py-4 rounded-full shadow-lg"
                    >
                    Submit Interest →
                    </a>
                </div>
                </div>
            </div>
            )}

            {/* HERO CONTENT */}
            <div className="relative z-10 flex flex-col justify-center min-h-screen px-8 md:px-[120px] pt-32 md:pt-0 text-center">
            <div className="max-w-full w-full text-center mx-auto">
                <h1 className="text-5xl md:text-[72px] font-bold leading-tight mb-6">
                {slides[currentSlide].title}
                </h1>

                <p className="text-lg md:text-xl mb-12">
                {slides[currentSlide].description}
                </p>

                <div className="flex items-center justify-center gap-6  text-center mx-auto w-full">
                <button className="bg-[#008A4A] hover:bg-[#006d3a] px-8 py-4 rounded-lg font-semibold transition shadow-lg">
                    {slides[currentSlide].button1}
                </button>

                <button className="border border-gray-300 hover:border-white px-8 py-4 rounded-lg font-semibold bg-white/10 backdrop-blur transition">
                    {slides[currentSlide].button2}
                </button>
                </div>

                {/* <div className="flex gap-3 mt-32 md:mt-48">
                {slides.map((_, index) => (
                    <button
                    key={index}
                    onClick={() => setCurrentSlide(index)}
                    className={`h-1 rounded-full transition-all duration-300 ${
                        currentSlide === index ? "bg-white w-12" : "bg-white/40 w-4"
                    }`}
                    />
                ))}
                </div> */}
            </div>
            </div>
        </div>
        );
        }
