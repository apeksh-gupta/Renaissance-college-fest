// import React, { createContext, useState, useContext, useEffect } from "react";
// import { useLocation } from "react-router-dom";

// const PreloaderContext = createContext();

// export const PreloaderProvider = ({ children }) => {
//   const location = useLocation();
//   const [showHero, setShowHero] = useState(true); // Always start with preloader

//   useEffect(() => {
//     if (location.pathname === "/") {
//       setShowHero(false); // Show preloader initially
//       setTimeout(() => {
//         setShowHero(true);
//       }, 2000); // 2s delay for preloader
//     } else {
//       setShowHero(true); // No preloader for other pages
//     }
//   }, [location.pathname]);

//   return (
//     <PreloaderContext.Provider value={{ showHero }}>
//       {children}
//     </PreloaderContext.Provider>
//   );
// };

// export const usePreloader = () => useContext(PreloaderContext);





import React, { createContext, useState, useContext, useEffect } from "react";
import { useLocation } from "react-router-dom";

const PreloaderContext = createContext();

export const PreloaderProvider = ({ children }) => {
  const location = useLocation();
  const [showHero, setShowHero] = useState(false); // Preloader shows first

  useEffect(() => {
    if (location.pathname === "/") {
      setShowHero(false); // Show preloader initially
    } else {
      setShowHero(true); // No preloader for other pages
    }
  }, [location.pathname]);

  return (
    <PreloaderContext.Provider value={{ showHero, setShowHero }}>
      {children}
    </PreloaderContext.Provider>
  );
};

export const usePreloader = () => useContext(PreloaderContext);

