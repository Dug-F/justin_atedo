"use client";

import { useState } from "react";
import toggleDarkMode from "@/functions/toggleDarkMode";
import { useTheme } from "@/Contexts/ThemeContext";

const ToggleThemeButton = () => {
  const [open, setOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(true);
  const { toggleTheme, theme } = useTheme();

  const toggleMode = () => {
    setDarkMode((prev) => !prev);
    setOpen((prev) => !prev);
    toggleDarkMode();
    toggleTheme();
  };

  return (
    <button className="" onClick={toggleMode}>
      {/* {theme === "dark" ? "Dark" : "Light"} */}
      Theme
    </button>
  );
};

export default ToggleThemeButton;
