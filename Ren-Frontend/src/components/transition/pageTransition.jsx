import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { gsap } from "gsap";
import { CSSRulePlugin } from "gsap/CSSRulePlugin";
import "./PageTransition.css";

gsap.registerPlugin(CSSRulePlugin);

const PageTransition = ({ children }) => {
  const location = useLocation();
  const [showContent, setShowContent] = useState(false);
  const [showBlackScreen, setShowBlackScreen] = useState(true);

  useEffect(() => {
    // Transition ke time scroll band kar diya
    document.body.style.overflow = "hidden"; 

    setShowContent(false);
    setShowBlackScreen(true);

    transition(() => {
      setShowContent(true);
      setTimeout(() => {
        setShowBlackScreen(false);
        document.body.style.overflow = "auto"; // Transition ke baad wapas scroll allow
      }, 300);
    });

    return () => {
      document.body.style.overflow = "auto"; // Cleanup jab component unmount ho
    };
  }, [location.pathname]);

  const transition = (onComplete) => {
    const tl = gsap.timeline({
      onComplete,
    });
    tl.set(".crunch-top", { y: "-100%" }) // Start position (top se upar)
    .set(".crunch-bottom", { y: "100%" }) // Start position (bottom se neeche)
  
    tl.to(CSSRulePlugin.getRule("body:before"), { duration: 0.6, cssRule: { top: "50%" }, ease: "power2.out" }, "close")
      .to(CSSRulePlugin.getRule("body:after"), { duration: 0.6, cssRule: { bottom: "50%" }, ease: "power2.out" }, "close")
      .to(".crunch-top", { y: "0%", duration: 0.5, ease: "power2.out" }, "crunch-in")
      .to(".crunch-bottom", { y: "0%", duration: 0.5, ease: "power2.out" }, "crunch-in")
      .to(".loader", { duration: 0.5, opacity: 1 })
      .to(".page-content", { opacity: 0, duration: 0.3 }) // Old content fade-out
      .to(".loader", { duration: 1, opacity: 1 }) // Loader jyada time tak dikhayenge
      .to(".loader", { duration: 0.4, opacity: 0 }) // Loader hide before new content

  
      // ✅ 1️⃣ Crunch In Effect - Screen close hogi
      .to(".crunch-top", { y: "0%", duration: 0.5, ease: "power2.out" }, "crunch-in")
      .to(".crunch-bottom", { y: "0%", duration: 0.5, ease: "power2.out" }, "crunch-in")
      .to(".crunch-top", { y: "-100%", duration: 0.5, ease: "power2.in" }, "crunch-out")
      .to(".crunch-bottom", { y: "100%", duration: 0.5, ease: "power2.in" }, "crunch-out")
      // Open new page
      .to(CSSRulePlugin.getRule("body:before"), { duration: 0.6, cssRule: { top: "0%" }, ease: "power2.out" }, "open")
      .to(CSSRulePlugin.getRule("body:after"), { duration: 0.6, cssRule: { bottom: "0%" }, ease: "power2.out" }, "-=0.6");
  };
  
  
  return (

      <div>
        {/* Crunch Effect - Top & Bottom Divs */}
        <div className="crunch-top"></div>
        <div className="crunch-bottom"></div>
    
        {/* Full-screen black overlay */}
        {showBlackScreen && <div className="black-screen"></div>}
    
        {/* Loader Centered */}
        <div className="loader">
          <div className="bar1"></div>
          <div className="bar2"></div>
          <div className="bar3"></div>
          <div className="bar4"></div>
          <div className="bar5"></div>
          <div className="bar6"></div>
        </div>
    
        {/* Page Content */}
        {showContent && <div className="page-content">{children}</div>}
      </div>
    
  );
};

export default PageTransition;
