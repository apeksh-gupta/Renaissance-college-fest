// import React, { useEffect, useState, useRef } from "react";
// import { usePreloader } from "../../context/PreloaderContext";

// function Hero() {
//   const { showHero } = usePreloader();
//   const [isMobile, setIsMobile] = useState(false);
//   const videoRef = useRef(null);

//   useEffect(() => {
//     // Detect screen size
//     const checkScreenSize = () => {
//       setIsMobile(window.innerWidth <= 640);
//     };

//     checkScreenSize();
//     window.addEventListener("resize", checkScreenSize);
//     return () => window.removeEventListener("resize", checkScreenSize);
//   }, []);

//   useEffect(() => {
//     if (videoRef.current) {
//       videoRef.current.load(); // Ensure the video starts loading
//     }
//   }, []);

//   return (
//     <>
//       {showHero && (
//         <section className="relative h-screen w-screen overflow-hidden">
//           <video
//             ref={videoRef}
//             src={isMobile ? "/home/phoneloop.webm" : "/home/robotloop1.mp4"}
//             type={isMobile ? "video/webm" : "video/mp4"} // ✅ Corrected format
//             autoPlay
//             loop
//             muted
//             playsInline
//             className="absolute top-0 left-0 w-full h-full object-cover"
//           />
//         </section>
//       )}
//     </>
//   );
// }

// export default Hero;


import React, { useEffect, useState, useRef } from "react";
import { usePreloader } from "../../context/PreloaderContext";
import { motion } from "framer-motion";
import ReactLenis from "@studio-freight/react-lenis";

function Hero() {
  const { showHero } = usePreloader();
  const [isMobile, setIsMobile] = useState(false);
  const [videoLoaded, setVideoLoaded] = useState(false);
  const videoRef = useRef(null);

  useEffect(() => {
    // Detect screen size
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth <= 640);
    };

    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);
    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.oncanplaythrough = () => setVideoLoaded(true);
      videoRef.current.load();
    }
  }, []);

  return (

    <div className="relative w-full h-screen">
    <ReactLenis root>
      {showHero && (
        <motion.section
          initial={{ opacity: 0 }}
          animate={{ opacity: videoLoaded ? 1 : 0 }}
          transition={{ duration: 1, ease: "easeInOut" }}
          className="relative h-screen w-screen overflow-hidden"
        >
          <motion.video
            ref={videoRef}
            src={isMobile ? "/home/phoneloop.webm" : "/home/robotloop1.mp4"}
            type={isMobile ? "video/webm" : "video/mp4"}
            autoPlay
            loop
            muted
            playsInline
            className="absolute top-0 left-0 w-full h-full object-cover"
          />
        </motion.section>
      )}
    </ReactLenis>



    </div>

  );
}

export default Hero;
