"use client";

const isDarkMode = () => {
  if (typeof document !== "undefined" && document.documentElement.classList.contains("dark")) {
    return true;
  }
  return false;
};

export default isDarkMode;

