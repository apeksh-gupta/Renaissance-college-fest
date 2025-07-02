import React, { useRef, useEffect, useState } from "react";
import { Video } from "./Video";

export function VideoSection() {
  const videoRef = useRef(null);
  const [videoSrc, setVideoSrc] = useState(""); // State for video source

  // Function to handle video click (Play/Pause)
  const handleVideoClick = () => {
    if (videoRef.current) {
      if (videoRef.current.paused) {
        videoRef.current.play(); // Play if paused
      } else {
        videoRef.current.pause(); // Pause if playing
      }
    }
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (videoRef.current) {
          if (entry.isIntersecting) {
            setVideoSrc("/home/renvideo.mp4"); // Set video source when in viewport
            videoRef.current.muted = false; // Unmute the video
            videoRef.current.play().catch(() => {}); // Play when in viewport
          } else {
            videoRef.current.pause(); // Pause when out of viewport
            videoRef.current.muted = true; // Mute when out of viewport
            setVideoSrc(""); // Clear video source when out of viewport
          }
        }
      },
      { threshold: 0.5 }
    );

    if (videoRef.current) {
      observer.observe(videoRef.current);
    }

    return () => {
      if (videoRef.current) {
        observer.unobserve(videoRef.current);
      }
    };
  }, []);

  return (
    <div className="flex flex-col overflow-hidden w-full mt-28">
      <Video
        titleComponent={
          < >
            <h1 className="text-4xl font-semibold text-white dark:text-white md:mb-20">
              Unleash the power of <br />
              <span className="text-4xl md:text-[6rem] font-bold mt-2 mb-8 leading-none">
                RENAISSANCE
              </span>
            </h1>
          </>
        }
      >
        <video
          ref={videoRef}
          src={videoSrc} // Use videoSrc state
          autoPlay
          preload="metadata"
          poster="/home/video-placeholder.jpg"
          loop
          playsInline
          className="mx-auto rounded-2xl object-fill w-full h-full object-left-top cursor-pointer"
          onClick={handleVideoClick}
        >
          <source src="/home/renvideo.mp4" type="video/mp4" />
          {/* <source src="/home/renvideo.webm" type="video/webm" /> */}
        </video>
      </Video>
    </div>
  );
}
