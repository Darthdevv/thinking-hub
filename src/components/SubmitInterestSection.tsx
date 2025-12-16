import { useEffect, useState } from "react";
// import Facebook from "../assets/icons/Facebook";
import Instagram from "../assets/icons/Instagram";
import Rocket from "../assets/icons/Rocket";
// import TwitterIcon from "../assets/icons/TwitterIcon";
import contactImage from "../assets/images/Rectangle 47 (2).png";
import RoleDropdown from "./RoleDropdown";
import PhoneDropdown from "./PhoneInput";
import { useTranslation } from "react-i18next";
import { Link } from "react-router";

const ContactFormSection = () => {
  const { t, i18n } = useTranslation();
  const [role, setRole] = useState<string | null>(null);
  const [countryCode, setCountryCode] = useState("+966");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const [messageType, setMessageType] = useState<"success" | "error" | "">("");
  const API_URL = import.meta.env.VITE_API;


  useEffect(() => {
    const dir = i18n.language === "ar" ? "rtl" : "ltr";
    document.documentElement.dir = dir;
    document.documentElement.lang = i18n.language;
  }, [i18n.language]);

const handleSubmit = async (e: { preventDefault: () => void }) => {
  e.preventDefault();

  if (!fullName || !email || !role) {
    setMessageType("error");
    setMessage(t("requiredfields"));
    return;
  }

  const formData = {
    Name: fullName,
    email,
    phone: `${countryCode}${phoneNumber}`,
    role,
  };

  // map app language → Accept-Language
  const acceptLanguage = i18n.language === "ar" ? "ar-SA" : "en-US";

  try {
    setLoading(true);
    setMessage("");

    const response = await fetch(`${API_URL}/contacts`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accept-Language": acceptLanguage,
      },
      body: JSON.stringify(formData),
    });

    if (!response.ok) {
      throw new Error();
    }

    setMessageType("success");
    setMessage(t("submitsuccess"));

    setFullName("");
    setEmail("");
    setPhoneNumber("");
    setRole(null);
  } catch {
    setMessageType("error");
    setMessage(t("submiterror"));
  } finally {
    setLoading(false);
  }
};




  return (
    <section className="relative bg-white py-16 px-6 max-sm:px-0 md:py-24 md:px-12 lg:px-24 sm:overflow-hidden">
      {/* Curved background */}
      <div className="relative max-w-7xl text-start max-md:text-center mx-auto max-sm:pl-2 mb-[88px]">
        <h2 className="text-xl text-black font-normal mb-8">
          {t("contactustitle")}
        </h2>
        <p className="text-5xl font-bold text-black w-[659px] max-sm:w-full">
          {t("contactusdesc")}
        </p>

        {/* Mobile-only social icons - placed here just like in the design */}
        <div className="flex sm:hidden justify-center gap-6 mt-10 mb-4">
          {/* <button className="w-12.5 h-12.5 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-100 transition">
            <Facebook />
          </button> */}
          <Link
            to={
              "https://www.instagram.com/design_mafs?igsh=MWh2ZGg5cWttYm83Ng=="
            }
          >
            <button className="w-12.5 h-12.5 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-100 transition">
              <Instagram />
            </button>
          </Link>
          {/* <button className="w-12.5 h-12.5 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-100 transition">
            <TwitterIcon />
          </button> */}
        </div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10 flex flex-col lg:flex-row items-center gap-12">
        <div className="absolute -z-10 w-[1322px] max-sm:w-full h-[644px] inset-0 bg-[#57B3B9] rounded-tr-[600px] max-sm:rounded-none rtl:rounded-tr-none max-sm:rtl:rounded-tl-none rtl:rounded-tl-[600px] "></div>

        {/* Form */}
        <div className="bg-[#0F8087] rounded-none p-8 md:p-12 flex-1 w-[541px] max-sm:w-[360px] max-sm:px-10 max-sm:h-[504px] h-[564px] shadow-lg ml-10 rtl:ml-0 max-sm:rtl:ml-10 rtl:mr-10 max-sm:ml-0 mt-10">
          <h2 className="text-white text-2xl font-semibold mb-2.5">
            {t("contactustitle")}
          </h2>
          <p className="text-white text-sm font-normal mb-4">{t("formdesc")}</p>

          {message && (
            <div
              className={`mb-2 ${
                messageType === "success" ? "text-[#01ff88]" : "text-[#FF3C00]"
              }`}
            >
              {message}
            </div>
          )}

          <form className="flex flex-col gap-2" onSubmit={handleSubmit}>
            {/* Full Name */}
            <label className="text-white text-xs font-normal">
              {t("fullname")}
              <span className="text-[#FF3C00]">*</span>
            </label>
            <input
              type="text"
              placeholder={t("placeholdername")}
              className="p-2 rounded-md focus:outline-none bg-white focus:ring-2 focus:ring-[#00eeff]"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
            />

            {/* Email */}
            <label className="text-white text-xs font-normal">
              {t("email")} <span className="text-[#FF3C00]">*</span>
            </label>
            <input
              type="email"
              placeholder={t("placeholderemail")}
              className="p-2 rounded-md focus:outline-none bg-white focus:ring-2 focus:ring-[#00eeff]"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />

            {/* Phone */}
            <label className="text-white text-xs font-normal">
              {t("phone")}
            </label>
            <div className="flex gap-2">
              <PhoneDropdown
                countryCode={countryCode}
                setCountryCode={setCountryCode}
              />
              <input
                type="tel"
                placeholder={t("placeholdernumber")}
                className="p-2 rounded-md w-full focus:outline-none bg-white focus:ring-2 focus:ring-[#00eeff] text-left rtl:text-right"
                dir="ltr"
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
              />
            </div>

            {/* Role */}
            <label className="text-white text-xs font-normal">
              {t("role")} <span className="text-[#FF3C00]">*</span>
            </label>
            <RoleDropdown
              selected={role}
              setSelected={setRole}
              placeholder={t("choose")}
            />

            {/* Button */}
            <button
              type="submit"
              disabled={loading}
              className="w-[116px] mt-2 bg-[#57B3B9] hover:bg-[#54AAA9] text-white py-3 px-6 rounded-full flex items-end self-end justify-end gap-2 transition-all disabled:opacity-50 font-semibold text-base"
            >
              <Rocket />
              {loading ? t("sending") : t("formbtn")}
            </button>
          </form>
        </div>

        {/* Image */}
        <div className="flex-1 w-full relative max-md:hidden">
          <div className="overflow-hidden rounded-[32px] mt-10">
            <img
              src={contactImage}
              alt="Contact"
              className="w-full h-full object-cover rtl:scale-x-[-1]"
            />
          </div>
        </div>
      </div>

      {/* Social Icons */}
      <div className="absolute top-16 right-36 max-sm:right-4 hidden lg:flex flex-col gap-4 z-20 rtl:right-auto rtl:left-36 rtl:max-sm:left-4">
        {/* <button className="w-12.5 h-12.5 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-100 transition">
          <Facebook />
        </button> */}
        <Link
          to={"https://www.instagram.com/design_mafs?igsh=MWh2ZGg5cWttYm83Ng=="}
        >
          <button className="w-12.5 h-12.5 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-100 transition">
            <Instagram />
          </button>
        </Link>

        {/* <button className="w-12.5 h-12.5 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-100 transition">
          <TwitterIcon />
        </button> */}
      </div>
    </section>
  );
};

export default ContactFormSection;
