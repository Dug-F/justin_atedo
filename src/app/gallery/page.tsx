import Navbar from "@/components/navbar/Navbar";
import { ThemeProvider } from "@/Contexts/ThemeContext";

const GalleryPage = () => {
  return (
    <>
      <ThemeProvider>
        <Navbar />
        <div className="mt-3 h-screen">Gallery</div>
      </ThemeProvider>
    </>
  );
};

export default GalleryPage;
