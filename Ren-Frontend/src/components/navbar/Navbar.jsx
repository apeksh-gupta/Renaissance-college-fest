




import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import Login from "../login/Login"

const clickSound = "https://assets.mixkit.co/active_storage/sfx/2570/2570-preview.mp3";
const hoverSound = "https://assets.mixkit.co/active_storage/sfx/2570/2570-preview.mp3";


const menuItems = ["Home",  "About" , "Sponsors", "Events", "Itinerary", "Teams", "Gallery" ];

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const clickAudioRef = useRef(new Audio(clickSound));
  const hoverAudioRef = useRef(new Audio(hoverSound));
  const lastScrollY = useRef(0);

  // Function to toggle the navbar visibility on scroll
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > lastScrollY.current) {
        // Scrolling Down → Hide Navbar
        setIsVisible(false);
      } else {
        // Scrolling Up → Show Navbar
        setIsVisible(true);
      }
      lastScrollY.current = window.scrollY;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleNavbar = () => {
    if (clickAudioRef.current) {
      clickAudioRef.current.volume = 0.5;
      clickAudioRef.current.currentTime = 0;
      clickAudioRef.current.play().catch((error) => console.error("Audio play failed:", error));
    }
    setIsOpen((prev) => !prev);
  };

  const playHoverSound = () => {
    if (hoverAudioRef.current) {
      hoverAudioRef.current.volume = 0.3;
      hoverAudioRef.current.currentTime = 0;
      hoverAudioRef.current.play().catch((error) => console.error("Audio play failed:", error));
    }
  };

  const navbarVariants = {
    hidden: { y: "-100vh", opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut",
        when: "beforeChildren",
        staggerChildren: 0.1,
      },
    },
  };

  const menuItemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  return (
<div className="relative z-50">
  {/* Navbar Wrapper */}
  <motion.div
    animate={isVisible || isOpen ? { y: 0, opacity: 1 } : { y: -100, opacity: 0 }}
    transition={{ duration: 0.3, ease: "easeInOut" }}
    className="fixed top-0 left-0 w-full bg-transparent z-50"
  >
    <div className="flex justify-between items-center w-full px-6 py-4 bg-transparent">
      {/* Left: Login Button */}
      <div
        className={`flex items-center mt-[-8px] mr-[14px] ml-[-15px] transition-opacity duration-300 ${isOpen ? "opacity-0" : "opacity-100"}`}
      >
        <Login onClick={() => setIsOpen(false)} />
      </div>

      {/* Center: Logos */}
      <div className={`flex items-center gap-2 transition-opacity duration-300 ${isOpen ? "opacity-0" : "opacity-100"}`}>
        <Link to={"/about"}>
          <img src="/footer/logo-01.png" alt="Left Logo" className="w-12 md:w-16 h-auto" />
        </Link>
        <Link to={"/about"}>
          <img src="/footer/jecrclogo.webp" alt="Right Logo" className="w-12 md:w-16 h-auto" />
        </Link>
      </div>

      {/* Right: Hamburger Menu */}
      <button
        onClick={toggleNavbar}
        className="flex items-center justify-center p-3 bg-transparent focus:outline-none flex-shrink-0"
        aria-label={isOpen ? "Close menu" : "Open menu"}
      >
        <motion.div
          animate={isOpen ? { rotate: 45 } : { rotate: 0 }}
          transition={{ duration: 0.5 }}
          className="h-6 w-6 flex flex-col justify-between items-center"
        >
          <span className={`block w-full h-[2px] bg-white transition-transform ${isOpen ? "translate-y-[7px]" : ""}`}></span>
          <span className={`block w-full h-[2px] bg-white ${isOpen ? "opacity-0" : "opacity-100"}`}></span>
          <span className={`block w-full h-[2px] bg-white transition-transform ${isOpen ? "-translate-y-[7px] -rotate-90" : ""}`}></span>
        </motion.div>
      </button>
    </div>
  </motion.div>

  {/* Fullscreen Navigation Menu */}
  <AnimatePresence>
    {isOpen && (
      <motion.div
        initial="hidden"
        animate="visible"
        exit="hidden"
        variants={navbarVariants}
        className="fixed inset-0 bg-black bg-opacity-95 z-40 flex items-center justify-center"
      >
        <nav>
          <motion.ul className="flex flex-col items-center justify-center h-full space-y-4 md:space-y-6 lg:space-y-2 text-center">
            {menuItems.map((item) => (
              <motion.li key={item} variants={menuItemVariants}>
                <Link
                  to={item.toLowerCase() === "home" ? "/" : `/${item.toLowerCase()}`}
                  onClick={() => {
                    toggleNavbar(); // Close navbar on item click
                  }}
                  className="transition-colors duration-300 font-[SilkScreen] tracking-wide text-gray-100 hover:text-[#00FFFB] text-5xl md:text-6xl font-bold block py-4"
                >
                  {item}
                </Link>
              </motion.li>
            ))}
          </motion.ul>
        </nav>
      </motion.div>
    )}
  </AnimatePresence>
</div>




  );
}

export default Navbar;


