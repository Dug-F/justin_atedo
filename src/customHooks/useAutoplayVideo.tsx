"use client";

import { useEffect, useRef } from "react";

const useAutoplayVideo = (): React.RefObject<HTMLVideoElement> => {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    let observer: IntersectionObserver;

    if (video) {
      observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (!entry.isIntersecting) {
              video.pause();
            } else {
              if (video.autoplay) {
                video.play();
              }
            }
          });
        },
        { threshold: 0.25 }
      );

      observer.observe(video);
    }

    return () => {
      if (observer && video) {
        observer.unobserve(video);
      }
    };
  }, []);

  return videoRef;
};

export default useAutoplayVideo;
