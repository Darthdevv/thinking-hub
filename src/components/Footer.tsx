import { Link } from 'react-router';
import GreenLogo from '../assets/icons/Footer/GreenLogo';
import myLogo from "../assets/images/footer-logo.png"
// import XIcon from '../assets/icons/Footer/X';
// import LinkedInIcon from '../assets/icons/Footer/Linkedin';
// import FacebookIcon from '../assets/icons/Footer/Facebook';
// import SnapchatIcon from "../assets/icons/Footer/Snapchat";
import InstagramIcon from '../assets/icons/Footer/Instgram';
// import SoonBadge from '../assets/icons/Footer/SoonBadge';
import { useTranslation } from 'react-i18next';
import { useEffect } from 'react';

// const resourcesLinks = [
//     { label: 'Blog', to: '#' },
//     { label: 'Newsletter', to: '#' },
//     { label: 'Help centre', to: '#' },
//     { label: 'Support', to: '#' },
// ];

// const legalLinks = [
//     { label: 'Terms', to: '#' },
//     { label: 'Privacy', to: '#' },
//     { label: 'Cookies', to: '#' },
//     { label: 'Licenses', to: '#' },
// ];



const Footer = () => {
    const { t, i18n } = useTranslation();

    useEffect(() => {
      const dir = i18n.language === "ar" ? "rtl" : "ltr";
      document.documentElement.dir = dir;
      document.documentElement.lang = i18n.language;
    }, [i18n.language]);

  // Define link arrays for each section
  const designThinkingHubLinks = [
    { label: t("designThinkingHubLink1"), to: "/how-we-work" },
    { label: t("designThinkingHubLink2"), to: "/contact-us" },
    { label: t("designThinkingHubLink3"), to: "/how-we-work" },
  ];

  // const programTracksLinks = [
  //   { label: t("programTracksLink1"), to: "#", hasBadge: true },
  //   { label: t("programTracksLink2"), to: "#", hasBadge: true },
  //   { label: t("programTracksLink3"), to: "#", hasBadge: true },
  // ];

  const socialLinks = [
    // { Icon: XIcon, to: "#" },
    // { Icon: LinkedInIcon, to: "#" },
    // { Icon: FacebookIcon, to: "#" },
    { Icon: InstagramIcon, to: "#" },
    // { Icon: SnapchatIcon, to: "#" },
  ];
  return (
    <div className="w-full mt-auto bg-[#0C0E12] border-t-[22px] border-[#57B3B9] px-4 sm:px-8 md:px-12 lg:px-[7.5rem] py-8 min-h-[24rem]">
      {/* Top Section */}
      {/* <div className="border-b border-[#22262F] pb-8 md:pb-16">
                <div className="mb-3 md:mb-4">
                    <h1 className="font-semibold text-xl sm:text-2xl md:text-3xl text-white">
                        Ready to Build Your Impact?
                    </h1>
                </div>
                <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-4">
                    <h2 className="text-sm sm:text-base font-normal text-white max-w-md">
                        Join a track, explore a course, or connect with our team — your journey starts now.
                    </h2>
                    <div className="flex flex-col sm:flex-row gap-3">
                        <button className="border border-[#373A41] w-full sm:w-36 bg-[#0C0E12] h-12 rounded-lg text-white text-sm sm:text-base font-semibold hover:bg-[#1A1C22] transition">
                            Browse Courses
                        </button>
                        <button className="w-full sm:w-36 bg-[#008A4A] h-12 rounded-lg text-white text-sm sm:text-base font-semibold hover:bg-[#006C3A] transition">
                            Join a Program
                        </button>
                    </div>
                </div>
            </div> */}

      {/* Middle Section */}
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row md:justify-between gap-8 md:gap-12 text-[#94979C] border-b border-[#22262F] mt-8 md:mt-16 pb-8 md:pb-16">
        <div className="flex items-center justify-start gap-6 flex-wrap">
          {/* Logo and Description */}
          <div className="flex flex-col gap-6 md:gap-6 max-w-xs">
            <Link to={"/"} className="flex items-center justify-start">
              <GreenLogo className="mr-2 rtl:ml-2 rtl:mr-0" />
              <span className="text-white">{t("logo")}</span>
            </Link>
            <h1 className="text-sm sm:text-base font-normal">
              {t("footerdesc")}
            </h1>
          </div>

          {/* Design Thinking Hub Links */}
          <div className="rtl:w-full flex flex-col gap-2 md:gap-3 max-sm:mt-8 mr-auto">
            <h1 className="font-semibold text-xs sm:text-sm">
              {t("footertitle1")}
            </h1>
            {designThinkingHubLinks.map((link, index) => (
              <Link
                key={index}
                className="font-semibold text-sm sm:text-base hover:text-white transition"
                to={link.to}
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>

        {/* Program Tracks Links */}
        {/* <div className="flex flex-col gap-2 md:gap-3">
          <h1 className="font-semibold text-xs sm:text-sm">
            {t("footertitle2")}
          </h1>
          {programTracksLinks.map((link, index) => (
            <div key={index} className="flex items-center gap-2">
              <Link
                className="font-semibold text-sm sm:text-base hover:text-white transition"
                to={link.to}
              >
                {link.label}
              </Link>
              {link.hasBadge && <SoonBadge />}
            </div>
          ))}
        </div> */}

        {/* Logo */}
        <div className="flex justify-start md:justify-center max-sm:mt-8">
          <img
            src={myLogo}
            alt="footer-logo"
            className="w-32 sm:w-40 md:w-44 lg:w-48 max-w-full h-auto object-contain"
          />
        </div>

        {/* Resources Links */}
        {/* <div className="flex flex-col gap-2 md:gap-3">
                    <h1 className="font-semibold text-xs sm:text-sm">Resources</h1>
                    {resourcesLinks.map((link, index) => (
                        <Link key={index} className="font-semibold text-sm sm:text-base hover:text-white transition" to={link.to}>
                            {link.label}
                        </Link>
                    ))}
                </div> */}

        {/* Legal Links */}
        {/* <div className="flex flex-col gap-2 md:gap-3">
                    <h1 className="font-semibold text-xs sm:text-sm">Legal</h1>
                    {legalLinks.map((link, index) => (
                        <Link key={index} className="font-semibold text-sm sm:text-base hover:text-white transition" to={link.to}>
                            {link.label}
                        </Link>
                    ))}
                </div> */}
      </div>

      {/* Bottom Section */}
      <div className=" max-w-7xl mx-auto flex flex-col md:flex-row md:justify-between mt-8 gap-4 text-[#94979C]">
        <h1 className="font-normal text-sm sm:text-base">
          © {new Date().getFullYear()}
          {t("copyrights")}
        </h1>
        <div className="flex gap-4 md:gap-6">
          {socialLinks.map((link, index) => (
            <Link
              key={index}
              to={link.to}
              className="hover:text-white transition"
            >
              <link.Icon />
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Footer;