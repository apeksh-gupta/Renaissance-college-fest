import React, { useEffect, useRef, useState } from "react";
import { usePreloader } from "../../context/PreloaderContext";

const Preloader = () => {
  const { setShowHero } = usePreloader();
  const videoRef = useRef(null);
  const heroVideoRef = useRef(null);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 640); // ✅ Correct initial value

  useEffect(() => {
    const video = videoRef.current;
  
    if (video) {
      video.muted = true; // Start muted to allow autoplay
      video.play().then(() => {
        setTimeout(() => {
          video.muted = false; // Unmute after 1 second
          video.volume = 1;
        }, 100);
      }).catch(err => console.log("Autoplay with sound blocked:", err));
    }
  }, [isMobile]);
  

  useEffect(() => {
    // ✅ Detect screen size
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth <= 640);
    };

    window.addEventListener("resize", checkScreenSize);
    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

  useEffect(() => {
    const handleVideoEnd = () => {
      setShowHero(true);
    };

    const video = videoRef.current;
    if (video) {
      video.addEventListener("ended", handleVideoEnd);
      video.load(); // ✅ Forces video reload when source changes
    }

    return () => {
      if (video) {
        video.removeEventListener("ended", handleVideoEnd);
      }
    };
  }, [setShowHero, isMobile]); // ✅ Runs again when `isMobile` updates

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black z-50">
      {/* ✅ Corrected Video Handling */}
      <video
        ref={videoRef}
        key={isMobile} // ✅ Forces re-render when `isMobile` changes
        className="w-full h-full object-cover"
        autoPlay
        muted
        playsInline
      >
        <source
          src={isMobile ? "/home/preloaderphone.webm" : "/home/desktoppreloader.mp4"}
          type={isMobile ? "video/webm" : "video/mp4"} // ✅ Corrected format
        />
      </video>

      {/* ✅ Preloading the hero video in the background */}
      <video ref={heroVideoRef} src={isMobile ? "/home/phoneloop.webm" : "/home/robotloop1.mp4"} className="hidden" />
    </div>
  );
};

export default Preloader;
