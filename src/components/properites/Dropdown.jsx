import { useRef, useState, useEffect } from "react";
import { Icon } from "@iconify/react";

const Dropdown = ({ label, options }) => {
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState(label);
  const dropdownRef = useRef(null);
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div
      ref={dropdownRef}
      className="relative mt-1 bg-light-white rounded-md px-2 py-2 hover:shadow-lg  w-min-fit "
    >
      {/* Trigger button */}
      <button
        onClick={() => setOpen(!open)}
        className="flex items-center w-full justify-between cursor-pointer text-primary transition"
      >
        <span>{selected}</span>
        <Icon
          icon="mdi:chevron-down"
          className={`text-gray-600 transition-transform duration-300 ${
            open ? "rotate-180" : ""
          }`}
        />
      </button>

      {/* Dropdown list */}
      {open && (
        <ul className="outline-none w-full absolute text-primary text-sm  z-20 bg-white  rounded-md shadow-lg overflow-hidden animate-fadeIn">
          {options.map((option, idx) => (
            <li
              key={idx}
              onClick={() => {
                setSelected(option);
                setOpen(false);
              }}
              className="px-4 py-2 bg-transparent hover:bg-light-white cursor-pointer transition"
            >
              {option}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Dropdown;
