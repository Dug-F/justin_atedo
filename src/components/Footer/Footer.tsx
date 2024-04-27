//add footer that contains ready to get in touch - contact us which is an email link
// a section with icon links to instagram and tiktok and an email icon
// include a quick link back to top of page called home, a link to the projects section, where the videos are, a gallery link and an about section

import React from "react";
import ScrollIntoView from "@/animations/scrollIntoView/ScrollIntoView";
// import EmailIcon from "./EmailIcon";
import ContactCard from "../ContactUs/ContactForm";

const Footer = () => {
  return (
      <footer className="footer flex items-center justify-center mx-auto px-4">
      <ScrollIntoView>
        <section className="grid grid-cols-1  sm:grid-cols-4 sm:gap-y-4 align-middle text-center gap-y-4 gap-x-0 sm:gap-x-6 items-center text-xl border-none p-8">
          <a href="/" className="text-center">Home</a>
          <a href="#showreels" className="text-center">Projects</a>
          <a href="/gallery" className="text-center">Gallery</a>
          <a href="#about" className="text-center">About</a>
        </section>
      </ScrollIntoView>
    </footer>
  );
  
};

export default Footer;
