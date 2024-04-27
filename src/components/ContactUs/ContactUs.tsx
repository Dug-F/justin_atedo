//add footer that contains ready to get in touch - contact us which is an email link
// a section with icon links to instagram and tiktok and an email icon
// include a quick link back to top of page called home, a link to the projects section, where the videos are, a gallery link and an about section

import React from "react";
import ScrollIntoView from "@/animations/scrollIntoView/ScrollIntoView";
// import EmailIcon from "./EmailIcon";
import ContactForm from "./ContactForm";

const Footer = () => {
  return (
    <div className="mx-auto px-4">
      {/* <ScrollIntoView> */}
        <h2 className="text-3xl font-bold mt-4 mb-4">READY TO GET IN TOUCH?</h2>

        <h3 className="text-3xl font-bold mt-8 mb-4 text-center">
          <a href="/" className="text-2xl font-bold border-red-500 border-b-4">
            CONTACT US
          </a>
        </h3>
        <ContactForm />
      {/* </ScrollIntoView> */}
    </div>
  );
};

export default Footer;
