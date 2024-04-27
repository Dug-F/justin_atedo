"use client";

import useAutoplayVideo from "@/customHooks/useAutoplayVideo";

interface VideoPlayerProps {
  src: string;
  autoplay?: boolean;
  muted?: boolean;
  loop?: boolean;
  controls?: boolean; // Assuming you want to control the display of the default controls as well
}

const VideoPlayer: React.FC<VideoPlayerProps> = ({ src, autoplay = false, muted = true, loop = false, controls = true }) => {
  const videoRef = useAutoplayVideo();

  return (
    <div className="aspect-w-16 aspect-h-9 max-w-full">
      <video ref={videoRef} className="w-full h-auto" autoPlay={autoplay} muted={muted} loop={loop} controls={controls} controlsList="nodownload noplaybackrate nopictureinpicture">
        <source src={src} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

export default VideoPlayer;
