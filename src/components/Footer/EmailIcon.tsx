"use client";

import Image from "next/image";
import { useTheme } from "@/Contexts/ThemeContext";

const EmailIcon = () => {
  const { theme } = useTheme();

  return (
    <a href="mailto:dougforbes@sky.com?subject=About Atedo&body=Body%20Text%20Here" className="p-2">
      <Image src={theme == "light" ? "/icons/email-dark-df.png" : "/icons/email-light-df.png"} alt="Email" width={50} height={50} />
    </a>
  );
};

export default EmailIcon;

