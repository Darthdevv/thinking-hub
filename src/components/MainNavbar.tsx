        "use client";

        import { useState } from "react";
        import { Menu, X } from "lucide-react";
    import { Link } from "react-router";
    import GreenLogo from "../assets/icons/Footer/GreenLogo";
import LanguageDropdown from "./LanguageSwitcher";
import Rocket from "../assets/icons/Rocket";

        export default function MainNavbar() {
        const [isOpen, setIsOpen] = useState(false);

        return (
        <>
            {/* ====================== DESKTOP & TABLET – PILL STYLE ====================== */}
            <nav className="hidden md:flex items-center justify-between bg-[#000201CC] text-white px-8 py-5 rounded-full w-full max-w-7xl mx-auto my-8">
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
                <div className="flex items-center gap-8 text-sm">
                <a href="/how-we-work" className="hover:border-b-2 hover:border-[#008346] transition">
                    How We Work
                </a>
                <a href="/contact-us" className="hover:border-b-2 hover:border-[#008346] transition">
                    Contact US
                </a>
                </div>
                {/* Language */}
                <LanguageDropdown/>

                {/* CTA */}
                <a
                href="/contact-us"
                className="bg-[#008346] hover:bg-[#008346] text-white font-semibold px-7 py-3.5 rounded-full flex items-center gap-2 transition"
                >
                Submit Interest <Rocket/>
                </a>
            </div>
            </nav>

            {/* ====================== MOBILE – EXACTLY LIKE YOUR LAST IMAGE ====================== */}
            <nav className="md:hidden bg-[#000201CC] text-white flex items-center justify-between px-5 py-4">
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
            <div className="md:hidden bg-[#000201CC] text-white border-t border-[#008346]">
                <div className="px-6 py-6 space-y-6">
                <a href="/how-we-work" className="block text-lg hover:border-b-2 hover:border-[#008346] transition">
                    How We Work
                </a>
                <a href="/contact-us" className="block text-lg hover:border-b-2 hover:border-[#008346] transition">
                    Contact US
                </a>

                <div className="pt-4 border-t border-[#008346]">
                    <LanguageDropdown/>
                </div>

                <a
                    href="/contact-us"
                    className="text-center bg-[#008346] hover:bg-[#008346] text-white font-semibold py-4 rounded-full shadow-lg flex items-center justify-center gap-2"
                >
                    Submit Interest <Rocket/>
                </a>
                </div>
            </div>
            )}
        </>
        );
        }
