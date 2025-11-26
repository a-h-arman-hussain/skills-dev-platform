"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const ArrowIcon = ({ rotate }) => (
  <motion.svg
    className="h-5 w-5 text-gray-500 ml-2"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 20 20"
    fill="currentColor"
    animate={{ rotate: rotate ? 180 : 0 }}
  >
    <path
      fillRule="evenodd"
      d="M5.23 7.21a.75.75 0 011.06.02L10 10.94l3.71-3.71a.75.75 0 111.08 1.04l-4.25 4.25a.75.75 0 01-1.08 0L5.25 8.27a.75.75 0 01-.02-1.06z"
      clipRule="evenodd"
    />
  </motion.svg>
);

const CustomDropdown = ({ options, value, onChange }) => {
  const [open, setOpen] = useState(false);
  const dropdownRef = useRef();

  // Close dropdown on click outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="relative w-60" ref={dropdownRef}>
      <div className="flex justify-end">
        <button
          onClick={() => setOpen(!open)}
          className="bg-white shadow-lg rounded-xl px-4 py-2 flex justify-between items-center hover:shadow-2xl transition duration-200"
        >
          {value} <ArrowIcon rotate={open} />
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.ul
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="absolute w-full bg-white rounded-xl shadow-xl mt-2 overflow-hidden z-20"
          >
            {options.map((opt) => (
              <li key={opt}>
                <button
                  onClick={() => {
                    onChange(opt); // Trigger parent change
                    setOpen(false); // Close dropdown
                  }}
                  className={`px-4 py-3 w-full text-left hover:bg-blue-500 hover:text-white transition ${
                    value === opt ? "bg-blue-500 text-white" : ""
                  }`}
                >
                  {opt}
                </button>
              </li>
            ))}
          </motion.ul>
        )}
      </AnimatePresence>
    </div>
  );
};

export default CustomDropdown;
