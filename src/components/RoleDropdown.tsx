import { useState } from "react";
import { useTranslation } from "react-i18next";

interface RoleOption {
  value: string;
  label: string;
}

interface RoleDropdownProps {
  selected: string | null;
  setSelected: React.Dispatch<React.SetStateAction<string | null>>;
  placeholder: string;
}

const RoleDropdown: React.FC<RoleDropdownProps> = ({
  selected,
  setSelected,
  placeholder,
}) => {
  const [open, setOpen] = useState(false);
  const { t } = useTranslation();

  const options: RoleOption[] = [
    { value: "Student", label: t("option1") },
    { value: "Working in non-profit", label: t("option2") },
    { value: "Working in for-profit", label: t("option3") },
    { value: "Other", label: t("option4") },
  ];

  const selectedLabel =
    options.find((o) => o.value === selected)?.label || placeholder;

  return (
    <div className="relative w-full">
      {/* Dropdown button */}
      <div
        className="w-full bg-white rounded-lg shadow-sm p-3 cursor-pointer flex justify-between items-center"
        onClick={() => setOpen((prev) => !prev)}
      >
        <span className={!selected ? "text-gray-400" : ""}>
          {selectedLabel}
        </span>

        <svg
          className={`w-5 h-5 transition-transform ${open ? "rotate-180" : ""}`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
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
        <div className="absolute w-full bg-white shadow-lg rounded-lg mt-1 z-10 max-h-60 overflow-auto">
          {options.map((option) => (
            <div
              key={option.value}
              className="p-3 hover:bg-gray-100 cursor-pointer"
              onClick={() => {
                setSelected(option.value);
                setOpen(false);
              }}
            >
              {option.label}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default RoleDropdown;
