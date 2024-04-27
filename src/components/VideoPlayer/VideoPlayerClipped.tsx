"use client";

import useAutoplayVideo from "@/customHooks/useAutoplayVideo";

interface VideoPlayerProps {
  src: string;
  autoplay?: boolean;
  muted?: boolean;
  loop?: boolean;
  controls?: boolean; // Assuming you want to control the display of the default controls as well
}

const translateValue = 0;
const translate = `-translate-y-${translateValue}/10`;

const VideoPlayerClipped: React.FC<VideoPlayerProps> = ({ src, autoplay = false, muted = true, loop = false, controls = true }) => {
  const videoRef = useAutoplayVideo();

  return (
    <div className="relative h-[210px] sm:h-[300px] overflow-hidden max-w-full">
      <video className={`absolute top-0 left-0 w-full ${translate}`} autoPlay muted loop controls controlsList="nodownload noplaybackrate nopictureinpicture">
        <source src={src} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

export default VideoPlayerClipped;
