import VideoPlayerClipped from "@/components/VideoPlayer/VideoPlayerClipped";

const TopBannerVideo = () => {
  return (
    <div className="flex mt-5 w-full flex-col">
      <div className="relative">
        <VideoPlayerClipped src="/video/atedo_banner.mp4" autoplay={true} loop={true} controls={false} />
        <div className="absolute top-0 left-0 right-0 bottom-0 flex justify-center self-center">
          <h1 className="tracking-wider text-white text-6xl lg:text-9xl md:text-8xl">ATEDO.</h1>
        </div>
      </div>
    </div>
  );
};

export default TopBannerVideo;
