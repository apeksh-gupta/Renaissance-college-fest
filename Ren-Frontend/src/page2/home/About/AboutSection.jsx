// import React from 'react'
// import About from "./About"
// import AboutR from "./AboutR"
// import './about.css'
// import { div } from 'three/src/nodes/TSL.js'
// const useIsLLaptop = () => window.innerWidth > 1300
// function AboutSection() {
//   const isLaptop = useIsLLaptop()
//   return (
//     <div className=' bg-transparent h-[400vh] w-[100vw]'>

//       <div className='overflow-hidden relative'>
//         <div className="w-[100vw] h-[15vh] lg:h-[30vh]   items-center mt-4 py-2 ">
//           <h2 className='mt-20 text-6xl  md:text-8xl  text-center font-bold bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500 drop-shadow-[0_0_20px_rgba(0,255,255,1)] text-transparent text-wrap mb-4'>
//             About JECRC
//           </h2>
//           <h3 className='text-2xl text-center text-cyan-600 drop-shadow-[0_0_10px_rgba(0,255,255,0.8)] text-wrap'>
//             Innovative Learning - Limitless Possibilities
//           </h3>
//         </div>
//         <About animationName={"/home/about1.glb"} fovinitial={15} fovfinal={20} directionValue={-50} startA={"19% 20%"} endA={"bottom top"} isfirst={true} />

//         <div className="w-[100vw] h-[15vh] lg:h-[30vh]   object-contain items-center mt-20  lg:mt-40 py-2">
//           <h2 className='mt-10 text-6xl md:text-8xl text-center drop-shadow-[0_0_15px_rgba(0,255,255,0.8)] bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent font-bold text-wrap'>
//             About Renaissance
//           </h2>
//           {/* <h3 className='text-2xl text-center text-cyan-600 drop-shadow-[0_0_10px_rgba(0,255,255,0.8)] text-wrap'>
//             Where Innovation Meets Tradition, and Creativity Knows No Bounds!
//           </h3> */}
//           {/* <img src="Gallery.png" alt="about" /> */}
//         </div>


//         <AboutR animationName={"/home/about2.glb"} fovinitial={8} fovfinal={15} directionValue={50} startA={"110% 10%"} endA={"150% top"} isfirst={false} />

//         {/* <section className='w-screen h-[10vh]'></section> */}
//         <div className="w-[100vw] h-[50vh] lg:h-[30vh]   items-center mt-36  lg:mt-40 py-2 ">
//           <h2 className='text-6xl md:text-8xl text-center drop-shadow-[0_0_15px_rgba(0,255,255,0.8)] font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent  text-wrap mb-4'>
//             Meet The Stars!
//           </h2>
//           <h3 className='text-2xl text-center text-cyan-600 drop-shadow-[0_0_10px_rgba(0,255,255,0.8)] text-wrap'>
//             Scroll Down To reveal Starts!
//           </h3>
//         </div>

//       </div>

//     </div>
//   )
// }

// export default AboutSection


// AboutSection.jsx

// import React from 'react'
// import About from "./About"
// import AboutR from "./AboutR"
// import './about.css'
// import { div } from 'three/src/nodes/TSL.js'
// const useIsLLaptop = () => window.innerWidth > 1300
// function AboutSection() {
//   const isLaptop = useIsLLaptop()
//   return (
//     <div className=' bg-transparent h-[400vh] w-[100vw]'>

//       <div className='overflow-hidden relative'>
//         <div className="w-[100vw] h-[15vh] lg:h-[30vh]   items-center mt-4 py-2 ">
//           <h2 className='mt-20 text-6xl  md:text-8xl  text-center font-bold bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500 drop-shadow-[0_0_20px_rgba(0,255,255,1)] text-transparent text-wrap mb-4'>
//             About JECRC
//           </h2>
//           <h3 className='text-2xl text-center text-cyan-600 drop-shadow-[0_0_10px_rgba(0,255,255,0.8)] text-wrap'>
//             Innovative Learning - Limitless Possibilities
//           </h3>
//         </div>
//         <About animationName={"/home/about1.glb"} fovinitial={15} fovfinal={20} directionValue={-50} startA={"19% 20%"} endA={"bottom top"} isfirst={true} />

//         <div className="w-[100vw] h-[15vh] lg:h-[30vh]   object-contain items-center mt-20  lg:mt-40 py-2">
//           <h2 className='mt-10 text-6xl md:text-8xl text-center drop-shadow-[0_0_15px_rgba(0,255,255,0.8)] bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent font-bold text-wrap'>
//             About Renaissance
//           </h2>
//           <h3 className="text-2xl text-center mt-1 text-cyan-600 drop-shadow-[0_0_10px_rgba(0,255,255,0.8)] text-wrap">
//             BIGGER AND BEYOND !....
//           </h3>
//         </div>


//         <AboutR animationName={"/home/about2.glb"} fovinitial={8} fovfinal={15} directionValue={50} startA={"110% 10%"} endA={"150% top"} isfirst={false} />

//         <section className='w-screen h-[10vh]'></section>
//       </div>

//     </div>
//   )
// }

// export default AboutSection



import React, { useState, useEffect, Suspense, lazy, useCallback, useMemo } from 'react';
import './about.css';
import ReactLenis from "@studio-freight/react-lenis";

// Lazy loading components
const About = lazy(() => import("./About"));
const AboutR = lazy(() => import("./AboutR"));

const useIsLaptop = () => {
  const [isLaptop, setIsLaptop] = useState(window.innerWidth > 1300);

  useEffect(() => {
    const handleResize = () => setIsLaptop(window.innerWidth > 1300);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return isLaptop;
};

function AboutSection() {
  const isLaptop = useIsLaptop();

  return (
    <ReactLenis root>
      <div className='bg-transparent h-[400vh] w-[100vw]'>
        <div className='overflow-hidden relative'>

          {/* About JECRC Section */}
          <div className="w-[100vw] h-[15vh] lg:h-[30vh] items-center mt-4 py-2">
            <h2 className='mt-20 text-6xl md:text-8xl text-center font-bold bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500 drop-shadow-[0_0_20px_rgba(0,255,255,1)] text-transparent text-wrap mb-4'>
              About JECRC
            </h2>
            <h3 className='text-2xl text-center text-cyan-600 drop-shadow-[0_0_10px_rgba(0,255,255,0.8)] text-wrap'>
              Innovative Learning - Limitless Possibilities
            </h3>
          </div>

          {/* Lazy Loaded About Component */}
          <Suspense fallback={<div className="w-full h-96 flex items-center justify-center text-white">Loading...</div>}>
            <About 
              animationName={"/home/about1.glb"} 
              fovinitial={15} 
              fovfinal={20} 
              directionValue={-50} 
              startA={"19% 20%"} 
              endA={"bottom top"} 
              isfirst={true} 
            />
          </Suspense>

          {/* About Renaissance Section */}
          <div className="w-[100vw] h-[15vh] lg:h-[30vh] object-contain items-center mt-20 lg:mt-40 py-2">
            <h2 className='mt-10 text-6xl md:text-8xl text-center drop-shadow-[0_0_15px_rgba(0,255,255,0.8)] bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent font-bold text-wrap'>
              About Renaissance
            </h2>
            <h3 className="text-2xl text-center mt-1 text-cyan-600 drop-shadow-[0_0_10px_rgba(0,255,255,0.8)] text-wrap">
              BIGGER AND BEYOND !....
            </h3>
          </div>

          {/* Lazy Loaded AboutR Component */}
          <Suspense fallback={<div className="w-full h-96 flex items-center justify-center text-white">Loading...</div>}>
            <AboutR 
              animationName={"/home/about2.glb"} 
              fovinitial={8} 
              fovfinal={15} 
              directionValue={50} 
              startA={"110% 10%"} 
              endA={"150% top"} 
              isfirst={false} 
            />
          </Suspense>

          <section className='w-screen h-[10vh]'></section>
        </div>
      </div>
    </ReactLenis>
  );
}

export default AboutSection;
