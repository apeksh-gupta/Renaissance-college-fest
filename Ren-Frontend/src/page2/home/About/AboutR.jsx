// import React, { Suspense, useEffect, useRef, useState } from "react";
// import { Canvas, useFrame, useLoader, useThree } from "@react-three/fiber";
// import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
// import { useAnimations } from "@react-three/drei";
// import { EffectComposer, Bloom } from "@react-three/postprocessing";
// import gsap from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";
// import { useGSAP } from "@gsap/react";

// gsap.registerPlugin(ScrollTrigger);


// const useIsMobile = () => window.innerWidth < 640;
// const useIsTablet = () => window.innerWidth < 780 && window.innerWidth >= 640;
// const useIsLLaptop = () => window.innerWidth > 1300
// export default function Scene({ animationName,
//   fovinitial,
//   fovfinal,
//   directionValue,
//   startA,
//   endA,
//   isfirst,
//   top }) {
//   const isLaptop = useIsLLaptop()
//   const isTablet = useIsTablet()
//   const isMobile = useIsMobile();
//   const containerRef = useRef();
//   const canvaRef = useRef();
//   const textRef = useRef();

//   const laptopOperator = isfirst ? 10 : -10
//   const mobileOperator = isfirst ? 50 : -50;
//   const tabletOperator = isfirst ? 25 : -20;
//   const textAlign = isfirst ? "right-[25%] bottom-[-20%]" : " bottom-[-20%] left-[25%]"


//   // ✅ Ensuring independent GSAP animation per Scene



//   useGSAP(() => {
//     gsap.to(textRef.current, {
//       yPercent: isMobile ? 0 : isTablet ? -20 : -40,
//       opacity: 1,
//       duration: 1,
//       ease: "power2.inOut",
//       scrollTrigger: {
//         trigger: containerRef.current,
//         start: startA,
//         end: endA,
//         scrub: 1,


//       },
//     });
//   }, { scope: containerRef });

//   function CameraController() {
//     const { camera } = useThree();
//     const cameraRef = useRef(camera);
//     useFrame(() => {

//       camera.position.x = 16 * Math.sin(Date.now() * 0.0005);
//       camera.position.z = 16 * Math.cos(Date.now() * 0.0005);
//       camera.lookAt(0, 1, 0);
//     });
//     useGSAP(() => {
//       const tl = gsap.timeline({
//         scrollTrigger: {
//           trigger: containerRef.current,
//           start: "top top",
//           end: "bottom top",
//           scrub: 1,
//           pin: true,
//         },
//       });

//       tl.to(canvaRef.current, { y: isMobile ? 0 : isLaptop ? -300 : 0, xPercent: isMobile ? directionValue + mobileOperator : isTablet ? directionValue + tabletOperator : isLaptop ? directionValue + laptopOperator : directionValue, duration: 4, ease: "power2.out" }, 0) // Move Canvas
//         .to(cameraRef.current, { fov: isLaptop ? fovfinal - 2 : fovfinal, onUpdate: () => cameraRef.current.updateProjectionMatrix() }, 0); // Change FOV Simultaneously
//     }, { scope: containerRef.current, dependencies: [canvaRef.current] });



//     return null;
//   }

//   function Model() {
//     const gltf = useLoader(GLTFLoader, animationName); // ✅ Load .glb file
//     const { animations } = gltf;
//     const { actions } = useAnimations(animations, gltf.scene);

//     useEffect(() => {
//       if (actions && animations.length > 0) {
//         actions[animations[0].name]?.play();
//       }
//     }, [actions, animations]);

//     return <primitive object={gltf.scene} />;
//   }

//   return (
//     <div ref={containerRef} className="w-screen h-[70vh] bg-transparent relative">
//       <div ref={canvaRef} className={`${isMobile ? '' : 'left-[25vw]'}  ${isMobile ? 'translate-[-200px] top-[5%]' : isLaptop ? 'translate-[-400px] top-[60%]' : 'translate-[-300px] top-[0%]'} absolute z-10`} >
//         <Canvas
//           camera={{ position: [0, 5, 20], fov: isLaptop ? fovinitial + 1 : fovinitial }}
//           style={{ width: isMobile ? '100vw' : isLaptop ? '800px' : '600px', height: isLaptop ? "700px" : "400px", background: "transparent" }}
//         >
//           <CameraController />
//           <ambientLight intensity={3} />
//           <pointLight position={[0, 5, 0]} intensity={3} color="white" />
//           <Suspense fallback={<Loading />}>
//             <Model />
//           </Suspense>
//           <EffectComposer>
//             <Bloom luminanceThreshold={0.2} luminanceSmoothing={1} intensity={2.5} />
//           </EffectComposer>
//         </Canvas>
//       </div>
//       <div
//         ref={textRef}
//         className={` bg-gradient-to-bl p-2 rounded-2xl from-gray-400  to-gray-800 ${isMobile ? "w-[300px]" : isLaptop ? "w-[600px]" : "w-[400px]"} absolute ${isMobile ? "bottom-[-10%] left-[50%] translate-x-[-50%]" : isTablet ? `bottom-[-10%] ${isfirst ? 'right-[30%]' : 'left-[-22%]'} translate-x-[50%]` : isLaptop ? `bottom-[-15%] ${isfirst ? 'right-[27%]' : 'left-[-10%]'} translate-x-[50%]` : textAlign} opacity-0 text-center z-50`}
//       >
//         <div className={`bg-black rounded-2xl p-3 text-wrap  `}>

//           <p className=" btn-shine">Renaissance, the prestigious Annual Techno-Cultural Youth Fest of Jaipur Engineering College & Research Center (JECRC), is one of the largest college festivals in Rajasthan, spanning three exhilarating days each year. As a nationally recognized platform, it showcases exceptional talent in music, dance, drama, coding, and high-energy competitions, fostering creativity and innovation among students.</p>
//         </div>

//       </div>
//     </div>
//   );
// }

// function Loading() {
//   return <mesh>
//     <boxGeometry />
//     <meshStandardMaterial color="cyan" />
//   </mesh>;
// }



import React, { Suspense, useEffect, useRef, useState } from "react";
import { Canvas, useFrame, useLoader, useThree } from "@react-three/fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { useAnimations } from "@react-three/drei";
import { EffectComposer, Bloom } from "@react-three/postprocessing";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const useIsMobile = () => window.innerWidth < 640;
const useIsTablet = () => window.innerWidth < 780 && window.innerWidth >= 640;
const useIsLLaptop = () => window.innerWidth > 1300;

export default function Scene({ animationName, fovinitial, fovfinal, directionValue, startA, endA, isfirst, top }) {
  const isLaptop = useIsLLaptop();
  const isTablet = useIsTablet();
  const isMobile = useIsMobile();
  const containerRef = useRef();
  const canvaRef = useRef();
  const textRef = useRef();

  const laptopOperator = isfirst ? 10 : -10;
  const mobileOperator = isfirst ? 50 : -50;
  const tabletOperator = isfirst ? 25 : -20;
  const textAlign = isfirst ? "right-[25%] bottom-[-20%]" : " bottom-[-20%] left-[25%]";

  useGSAP(() => {
    gsap.to(textRef.current, {
      yPercent: isMobile ? 0 : isTablet ? -20 : -40,
      opacity: 1,
      duration: 1.5,
      ease: "power3.inOut",
      scrollTrigger: {
        trigger: containerRef.current,
        start: startA,
        end: endA,
        scrub: 2,
      },
    });
  }, { scope: containerRef });

  function CameraController() {
    const { camera } = useThree();
    const cameraRef = useRef(camera);
    useFrame(() => {
      camera.position.x = 16 * Math.sin(Date.now() * 0.0005);
      camera.position.z = 16 * Math.cos(Date.now() * 0.0005);
      camera.lookAt(0, 1, 0);
    });
    useGSAP(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          end: "bottom top",
          scrub: 2,
          pin: true,
        },
      });

      tl.to(canvaRef.current, {
        y: isMobile ? 0 : isLaptop ? -300 : 0,
        xPercent: isMobile ? directionValue + mobileOperator : isTablet ? directionValue + tabletOperator : isLaptop ? directionValue + laptopOperator : directionValue,
        duration: 5,
        ease: "power3.out"
      }, 0)
      .to(cameraRef.current, {
        fov: isLaptop ? fovfinal - 2 : fovfinal,
        onUpdate: () => cameraRef.current.updateProjectionMatrix()
      }, 0);
    }, { scope: containerRef.current, dependencies: [canvaRef.current] });

    return null;
  }

  function Model() {
    const gltf = useLoader(GLTFLoader, animationName);
    const { animations } = gltf;
    const { actions } = useAnimations(animations, gltf.scene);

    useEffect(() => {
      if (actions && animations.length > 0) {
        actions[animations[0].name]?.play();
      }
    }, [actions, animations]);

    return <primitive object={gltf.scene} />;
  }

  return (
    <div ref={containerRef} className="w-screen h-[70vh] bg-transparent relative">
      <div ref={canvaRef} className={`${isMobile ? '' : 'left-[25vw]'} absolute z-10 transition-transform duration-500 ease-in-out`}>
        <Canvas
          camera={{ position: [0, 5, 20], fov: isLaptop ? fovinitial + 1 : fovinitial }}
          style={{ width: isMobile ? '100vw' : isLaptop ? '800px' : '600px', height: isLaptop ? "700px" : "400px", background: "transparent" }}
        >
          <CameraController />
          <ambientLight intensity={3} />
          <pointLight position={[0, 5, 0]} intensity={3} color="white" />
          <Suspense fallback={<Loading />}>
            <Model />
          </Suspense>
          <EffectComposer>
            <Bloom luminanceThreshold={0.2} luminanceSmoothing={1} intensity={2.5} />
          </EffectComposer>
        </Canvas>
      </div>
      <div ref={textRef} className="bg-gradient-to-bl p-2 rounded-2xl from-gray-400 to-gray-800 opacity-0 text-center z-50 transition-opacity duration-700 ease-in-out">
        <div className="bg-black rounded-2xl p-3 text-wrap">
          <p className="btn-shine">Renaissance, the prestigious Annual Techno-Cultural Youth Fest of Jaipur Engineering College & Research Center (JECRC), is one of the largest college festivals in Rajasthan, spanning three exhilarating days each year. As a nationally recognized platform, it showcases exceptional talent in music, dance, drama, coding, and high-energy competitions, fostering creativity and innovation among students.</p>
        </div>
      </div>
    </div>
  );
}

function Loading() {
  return <mesh>
    <boxGeometry />
    <meshStandardMaterial color="cyan" />
  </mesh>;
}
