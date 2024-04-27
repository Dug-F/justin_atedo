import HireUs from "@/components/HireUs/HireUs";
import MissionStatement from "@/components/MissionStatement/MissionStatement";
import Showreels from "@/components/Showreels/Showreels";
import Navbar from "@/components/navbar/Navbar";
import TopBannerVideo from "@/components/TopBannerVideo/TopBannerVideo";
import ClientLogos from "@/components/ClientCard/ClientCard";
import Footer from "@/components/Footer/Footer";
import { ThemeProvider } from "@/Contexts/ThemeContext";
import InstagramGallery from "@/components/InstagramGallery/InstagramGallery";
import FollowUs from "@/components/FollowUs/FollowUs";
import ContactUs from "@/components/ContactUs/ContactUs";

export default function Home() {
  return (
    <>
      <ThemeProvider>
        <Navbar />
        <main className="flex min-h-screenjustify-center flex-col items-center">
          <TopBannerVideo />
          <div className="h-10 sm:h-20"></div>
          <MissionStatement />
          <div className="h-10 sm:h-20"></div>
          <Showreels />
          <div className="h-10 sm:h-20"></div>
          <HireUs />
          <div className="h-20"></div>
          <InstagramGallery />
          <div className="h-10 sm:h-20"></div>
          <ClientLogos />
          <div className="h-10 sm:h-20"></div>
          <FollowUs />
          <div className="h-10 sm:h-20"></div>
          <ContactUs />
          <div className="h-10 sm:h-20"></div>
        </main>
        <Footer />
      </ThemeProvider>
    </>
  );
}
