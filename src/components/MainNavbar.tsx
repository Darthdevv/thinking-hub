        "use client";

        import { useState } from "react";
        import { Menu, X, ChevronDown } from "lucide-react";
    import { Link } from "react-router";
    import GreenLogo from "../assets/icons/Footer/GreenLogo";

        export default function MainNavbar() {
        const [isOpen, setIsOpen] = useState(false);

        return (
        <>
            {/* ====================== DESKTOP & TABLET – PILL STYLE ====================== */}
            <nav className="hidden md:flex items-center justify-between bg-gray-900 text-white px-8 py-5 rounded-full w-full max-w-7xl mx-auto my-8">
            {/* Logo */}
            <div className="flex items-center gap-4">
                <div className=" p-2.5 rounded-lg">
                <Link to={"/"}>
                    <GreenLogo className="mr-2" />
                </Link>
                </div>
            </div>

            {/* Right side */}
            <div className="flex items-center gap-8">
                {/* Links */}
                <div className="flex items-center gap-12 text-sm">
                <a href="#" className="hover:text-green-400 transition">
                    How We Work
                </a>
                <a href="#" className="hover:text-green-400 transition">
                    Contact US
                </a>
                </div>
                {/* Language */}
                <button className="flex items-center gap-2 text-sm hover:text-green-400 transition">
                <img
                    src="https://flagcdn.com/20x15/gb.png"
                    alt="UK"
                    className="w-5 h-4"
                />
                <span>Eng</span>
                <ChevronDown className="w-4 h-4" />
                </button>

                {/* CTA */}
                <a
                href="#"
                className="bg-green-500 hover:bg-green-600 text-gray-900 font-semibold px-7 py-3.5 rounded-full flex items-center gap-2 transition"
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

            {/* ====================== MOBILE – EXACTLY LIKE YOUR LAST IMAGE ====================== */}
            <nav className="md:hidden bg-gray-900 text-white flex items-center justify-between px-5 py-4">
            {/* Logo + Text */}
            <div className="flex items-center gap-3">
                <div className=" p-2 rounded-lg">
                <Link to={"/"}>
                    <GreenLogo className="mr-2" />
                </Link>
                </div>
            </div>

            {/* Hamburger */}
            <button onClick={() => setIsOpen(!isOpen)} className="p-1">
                {isOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
            </button>
            </nav>

            {/* Mobile Menu Dropdown (appears below the bar) */}
            {isOpen && (
            <div className="md:hidden bg-gray-800 border-t border-gray-700">
                <div className="px-6 py-6 space-y-6">
                <a href="#" className="block text-lg hover:text-green-400">
                    How We Work
                </a>
                <a href="#" className="block text-lg hover:text-green-400">
                    Contact US
                </a>

                <div className="pt-4 border-t border-gray-700">
                    <button className="flex items-center gap-3 text-lg w-full">
                    <img
                        src="https://flagcdn.com/20x15/gb.png"
                        alt="UK"
                        className="w-5 h-4"
                    />
                    <span>English</span>
                    <ChevronDown className="w-5 h-5 ml-auto" />
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
            )}
        </>
        );
        }
