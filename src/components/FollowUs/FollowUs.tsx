//add footer that contains ready to get in touch - contact us which is an email link
// a section with icon links to instagram and tiktok and an email icon
// include a quick link back to top of page called home, a link to the projects section, where the videos are, a gallery link and an about section

import React from "react";
import ScrollIntoView from "@/animations/scrollIntoView/ScrollIntoView";
import InstagramIcon from "../Footer/InstagramIcon";
import TiktokIcon from "../Footer/TiktokIcon";

const Footer = () => {
  return (
    <div className="mx-auto px-4">
        <ScrollIntoView>
        <h3 className="text-3xl font-bold mt-8 mb-4 text-center">
          <a href="/" className="text-2xl font-bolD">
            FOLLOW US
          </a>
        </h3>
        <section className="flex justify-center items-center space-x-3 ">
          <InstagramIcon />
          <TiktokIcon />
        </section>
    </ScrollIntoView>
      </div>
  );
};

export default Footer;
