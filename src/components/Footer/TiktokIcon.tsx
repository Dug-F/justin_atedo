"use client";

import Image from "next/image";
import { useTheme } from "@/Contexts/ThemeContext";

const TiktokIcon = () => {
  const { theme } = useTheme();

  return (
    <a href="https://www.tiktok.com/@jamescourtenay" target="_blank" className="p-2">
      <Image src={theme == "light" ? "/icons/tiktok-dark-df.png" : "/icons/tiktok-light-df.png"} alt="Tiktok" width={50} height={50} />
    </a>
  );
};

export default TiktokIcon;
