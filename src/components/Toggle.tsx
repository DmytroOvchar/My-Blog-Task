"use client";

import { useState } from "react";
import IconSunny from "./icons/IconSunny";

const Toggle = () => {
  const [darkMode, setDarkMode] = useState(false);

  const toggleTheme = () => {
    setDarkMode(!darkMode);
    document.body.classList.toggle("dark", !darkMode);
  };
  return (
    <div onClick={toggleTheme} className="relative cursor-pointer">
      <div className="w-12 h-[28px] bg-gray-300 rounded-full flex items-center p-[2px] transition-colors duration-300 ease-in-out">
        <div
          className={`w-6 h-6 bg-white rounded-full shadow-md transform ${
            darkMode ? "translate-x-[20px]" : "translate-x-0"
          } transition-transform duration-300 ease-in-out flex items-center justify-center p-[5px]`}
        >
          <IconSunny />
        </div>
      </div>
    </div>
  );
};

export default Toggle;
