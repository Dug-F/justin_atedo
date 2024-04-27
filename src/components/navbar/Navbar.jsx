"use client";

import Links from "./links/Links";
import { gsap } from "@/animations/gsap/gsap";
import { useEffect } from "react";
import toggleDarkMode from "@/functions/toggleDarkMode";
import { useTheme } from "@/Contexts/ThemeContext";

const Navbar = () => {
  const { toggleTheme } = useTheme();

  useEffect(() => {
    const element = document.querySelector("body");

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: element,
        start: "center center",
        end: "bottom center",
        scrub: true,
        // markers: true, // For debugging
        onEnter: () => {
          toggleDarkMode();
          toggleTheme();
        },
        onLeaveBack: () => {
          toggleDarkMode();
          toggleTheme();
        },
      },
    });

    return () => {
      // Cleanup
      if (tl.scrollTrigger) {
        tl.scrollTrigger.kill();
      }
      tl.kill();
    };
  }, []);

  return (
    // <div className="flex justify-end absolute h-[30px] w-full pt-4 pr-4">
    <div className="flex h-[50px] w-full sticky top-0 z-10 align-center bg-secondary-dark dark:bg-secondary-light text-primary-dark dark:text-primary-light p-3">
      <Links />
    </div>
  );
};

export default Navbar;
