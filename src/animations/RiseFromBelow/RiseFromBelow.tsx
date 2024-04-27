"use client";
import { useEffect, useRef, ReactNode } from "react";
import { gsap } from "@/animations/gsap/gsap";

interface Animation1Props {
  children: ReactNode;
}

const RiseFromBelow: React.FC<Animation1Props> = ({ children }) => {
  const comp = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.set(comp.current, { opacity: 0, y: 100 });
    // Ensure the element is present
    let animation = gsap.to(comp.current, {
      y: 0,
      opacity: 1,
      duration: 1,
      ease: "Power1.easeIn",
    });

    return () => {
      animation.kill();
    };
  }, []);

  return <div ref={comp}>{children}</div>;
};

export default RiseFromBelow;
