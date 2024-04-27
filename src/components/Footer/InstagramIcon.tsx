"use client";

import Image from "next/image";
import { useTheme } from "@/Contexts/ThemeContext";

const InstagramIcon = () => {
  const { theme } = useTheme();

  return (
    <a href="https://www.instagram.com/p/CCvyMbCJdlT/" target="_blank" className="p-2">
      <Image src={theme == "light" ? "/icons/instagram-dark-df.png" : "/icons/instagram-light-df.png"} alt="Instagram" width={50} height={50} />
    </a>
  );
};

export default InstagramIcon;
