import { useState } from "react";


interface PhoneDropdownProps {
  countryCode: string;
  setCountryCode: React.Dispatch<React.SetStateAction<string>>;
}

const PhoneDropdown: React.FC<PhoneDropdownProps> = ({
  countryCode,
  setCountryCode,
}) => {
  const [open, setOpen] = useState(false);
  const countryCodes = ["+966", "+1", "+44", "+20"];

  return (
    <div className="relative w-24">
      {/* Dropdown button */}
      <div
        className="w-full bg-white rounded-md shadow-sm p-2 cursor-pointer flex justify-between items-center"
        onClick={() => setOpen(!open)}
      >
        <span>{countryCode}</span>
        <svg
          className={`w-4 h-4 transition-transform ${open ? "rotate-180" : ""}`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </div>

      {/* Options */}
      {open && (
        <div className="absolute w-full bg-white shadow-lg rounded-md mt-1 z-10 max-h-60 overflow-auto">
          {countryCodes.map((code) => (
            <div
              key={code}
              className="p-2 hover:bg-gray-100 cursor-pointer"
              onClick={() => {
                setCountryCode(code);
                setOpen(false);
              }}
            >
              {code}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default PhoneDropdown;
