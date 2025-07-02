

import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import renlogofinal from "/footer/logo-01.png";
import jecrcLogo from "/footer/jecrclogo.webp";
import { IoLogoInstagram } from "react-icons/io";
import { CiLinkedin, CiFacebook } from "react-icons/ci";
import DecryptedText from "../../utils/Decrypted";

const GlowingDot = () => (
  <motion.div
    className="absolute w-1 h-1 bg-blue-500 rounded-full"
    initial={{ opacity: 0 }}
    animate={{
      opacity: [0, 1, 0],
      scale: [0, 1.5, 0],
    }}
    transition={{
      duration: 2,
      repeat: Number.POSITIVE_INFINITY,
      repeatType: "loop",
      ease: "easeInOut",
    }}
  />
);

const Footer = () => {
  return (
    <footer className="bg-black text-white w-full relative overflow-hidden font-mono px-4 sm:px-6">

      {/* Animated Corner Borders */}
      {["top-2 right-2", "top-2 left-2", "bottom-2 right-2", "bottom-2 left-2"].map((pos, index) => (
        <motion.div
          key={index}
          className={`absolute ${pos} w-8 h-8 sm:w-12 sm:h-12 border-white/30 ${
            index < 2 ? "border-t-2" : "border-b-2"
          } ${index % 2 === 0 ? "border-r-2" : "border-l-2"}`}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.2 * (index + 1) }}
        />
      ))}

      {/* Floating Dots Animation */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <GlowingDot
            key={i}
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 2}s`,
            }}
          />
        ))}
      </div>

      {/* Main Content */}
      <div className=" mx-auto min-h-screen flex flex-col justify-between py-8 sm:py-12 lg:py-16">
        {/* Top Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16">
          {/* Left Column */}
          <motion.div
            className="space-y-6 sm:space-y-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {/* Logos */}
            <div className="flex items-center gap-6 justify-center lg:justify-start">
              {[jecrcLogo, renlogofinal].map((img, i) => (
                <Link to="/about" key={i}>
                  <motion.img
                    src={img}
                    alt="Logo"
                    width={100}
                    height={100}
                    className="brightness-200 w-[150px] h-[150px] cursor-pointer"
                    whileHover={{ scale: 1.1 }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                  />
                </Link>
              ))}
            </div>

            {/* Title */}
            <div className="text-center lg:text-left">
              <motion.h1
                className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-wider"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                RENAISSANCE{" "}
                <span className="text-transparent bg-clip-text text-white">
                  2025
                </span>
              </motion.h1>

              {/* Animated Decrypting Text */}
              <motion.p
                className="text-2xl sm:text-xl tracking-widest text-gray-400 mt-2"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
              >
                <DecryptedText
                  text="BIGGER & BEYOND!"
                  speed={100}
                  maxIterations={20}
                  characters="ABCD1234!?"
                />
              </motion.p>
            </div>
          </motion.div>

          {/* Right Column - Navigation & Contact */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 mt-8 lg:mt-0">
            {/* Quick Links */}
            <motion.div
              className="text-center sm:text-left"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <h2 className="text-sm tracking-[0.3em] text-gray-500 mb-4 sm:mb-6">NAVIGATION</h2>
              <ul className="space-y-3 sm:space-y-4 text-lg tracking-wider">
              {["HOME", "ABOUT", "EVENTS", "GALLERY", "ITINERARY", "OUR TEAM"].map((link) => {
                  let path = `/${link.toLowerCase()}`; // Default path

                  // Custom routes based on link
                  if (link === "HOME") path = "/";
                  if (link === "ABOUT") path = "/about";
                  if (link === "EVENTS") path = "/events";
                  if (link === "SCHEDULE") path = "/itinerary";
                  if (link === "OUR TEAM") path = "/teams";
                  if (link === "GALLERY") path = "/gallery";
                  
                  return (
                    <li key={link}>
                      <Link to={path} className="hover:text-blue-400 transition-colors inline-block">
                        {link}
                      </Link>
                    </li>
                  );
                })}

              </ul>
            </motion.div>

            {/* Contact Info */}
            <motion.div
              className="text-center sm:text-left"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <h2 className="text-sm tracking-[0.3em] text-gray-500 mb-4 sm:mb-6">CONTACT</h2>
              <ul className="space-y-4 text-lg">
                {[
                  { name: "ANSHUL VERMA", designation: "SPLASH HEAD", phone: "+91 6378917672" },
                  { name: "SAKSHAM SARAF", designation: "TECH HEAD", phone: "+91 9772771754" },
                  { name: "YATHARTH RAJVANSHI", designation: "OPERATION HEAD", phone: "+91 8000396600" },
                  { name: "DEV SAXENA", designation: "CULTURAL HEAD", phone: "+91 8602255154" },
                ].map((contact) => (
                  <li key={contact.name} className="space-y-1">
                    <p className="font-bold">{contact.name}</p>
                    <p className="text-gray-400">{contact.designation}</p>
                    <p className="text-blue-400">{contact.phone}</p>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>

        {/* Bottom Section - Social Links & Copyright */}
        <div className="flex flex-col sm:flex-row justify-between items-center border-t border-white/10 mb-1 pt-6">
          <div className="flex gap-6 mb-8 sm:mb-0">
            {[["Instagram", "https://www.instagram.com/jecrcrenaissance"], ["LinkedIn", "https://www.linkedin.com/school/jaipur-engineering-college-and-research-centre-jecrc-/?originalSubdomain=in"], ["Facebook", "https://www.facebook.com/JECRCfoundation/"]].map(([name, url], i) => (
              <a key={i} href={url} target="_blank" rel="noopener noreferrer">
                <motion.div whileHover={{ scale: 1.2, rotate: 10 }} whileTap={{ scale: 0.9 }}>
                  {name === "Instagram" ? <IoLogoInstagram className="text-4xl" /> : name === "LinkedIn" ? <CiLinkedin className="text-4xl" /> : <CiFacebook className="text-4xl" />}
                </motion.div>
              </a>
            ))}
          </div>

          <p className="mt-4 text-gray-500 text-xs sm:text-sm">© JECRC Foundation. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
