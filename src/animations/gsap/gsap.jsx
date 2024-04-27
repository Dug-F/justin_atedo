import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { useGSAP } from "@gsap/react"

// Register ScrollTrigger and other GSAP plugins you might use
gsap.registerPlugin(ScrollTrigger);

export { gsap, ScrollTrigger, useGSAP }; // Export them for use in your components
