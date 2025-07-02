// import { motion } from "framer-motion";
// import { useState } from "react";

// const cards = [
//   {
//     name: "Pikachu",
//     image: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/025.png",
//     type: "Electric",
//   },
//   {
//     name: "Charizard",
//     image: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/006.png",
//     type: "Fire/Flying",
//   },
//   {
//     name: "Bulbasaur",
//     image: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/001.png",
//     type: "Grass/Poison",
//   },
// ];

// const Card = ({ name, image, type, onSelect, isSelected, index }) => {
//   const [rotate, setRotate] = useState({ x: 0, y: 0 });

//   const handleMouseMove = (e) => {
//     const { left, top, width, height } = e.currentTarget.getBoundingClientRect();
//     const x = (e.clientX - left - width / 2) / 10; // Smoother tilt effect
//     const y = -(e.clientY - top - height / 2) / 10;
//     setRotate({ x, y });
//   };

//   const handleMouseLeave = () => {
//     setRotate({ x: 0, y: 0 });
//   };

//   const isSmallScreen = window.innerWidth < 768; // Check screen size
//   const positionOffsets = [
//     { x: isSmallScreen ? "0px" : "-120px", rotate: [-720, -540, -360, -180, 0] }, // More gap on large screens
//     { x: "0px", rotate: [0, 180, 360, 540, 720] }, // Middle card stays center
//     { x: isSmallScreen ? "0px" : "120px", rotate: [720, 540, 360, 180, 0] },
//   ];



// const finalX = isSmallScreen ? "0px" : positionOffsets[index].x;


//   return (
//     <motion.div
//     className="relative w-52 h-80 md:w-64 md:h-96 flex flex-col items-center justify-center cursor-pointer"
//     style={{
//       perspective: "1000px",
//       zIndex: isSelected ? 100 : index 
//     }}
//     onMouseMove={handleMouseMove}
//     onMouseLeave={handleMouseLeave}
//     onClick={onSelect}
//   >

//     <motion.div
// className="relative rounded-2xl overflow-hidden cursor-pointer
//            w-52 h-80 md:w-64 md:h-96 flex flex-col items-center justify-center"
// style={{
//   transformStyle: "preserve-3d",
//   zIndex: isSelected ? 10 : 1,
//   boxShadow: isSelected
//     ? "0px 20px 50px rgba(255, 255, 255, 0.4)" // Glow effect for selected card
//     : "0px 10px 30px rgba(0, 0, 0, 0.2)", // Soft shadow for depth
// }}
// animate={{
//   rotate: isSelected ? positionOffsets[index].rotate : 0,
//   x: isSelected ? 0 : positionOffsets[index].x,
//   zIndex: isSelected ? 100 : index,
//   scale: isSelected ? 1.3 : 1,
//   rotateX: rotate.y,
//   rotateY: rotate.x,
// }}
// transition={{
//   type: "spring",
//   stiffness: 120,
//   damping: 12, // Smoother animation
// }}
// onMouseMove={handleMouseMove}
// onMouseLeave={handleMouseLeave}
// onClick={onSelect}
// >
// <img
//   src={image}
//   alt={name}
//   className="w-full h-full object-cover rounded-3xl"
//   style={{ transform: "translateZ(40px)" }} // Adds a depth effect
// />
//        {/* 3D Border Sides */}
//   <div className="absolute w-full h-full " style={{ transform: "translateZ(-20px)" }}></div>
//   <div className="absolute -left-2 w-2 h-full rounded-l-xl" style={{ transform: "rotateY(90deg)" }}></div>
//   <div className="absolute -right-2 w-2 h-full rounded-r-xl" style={{ transform: "rotateY(-90deg)" }}></div>
//   <div className="absolute -top-2 w-full h-2  rounded-t-xl" style={{ transform: "rotateX(90deg)" }}></div>
//   <div className="absolute -bottom-2 w-full h-2  rounded-b-xl" style={{ transform: "rotateX(-90deg)" }}></div>

// <div
//   className="absolute inset-0 bg-black bg-opacity-30 flex flex-col justify-end p-4 text-white"
//   style={{ transform: "translateZ(30px)" }} // Further depth for text
// >
//   <h2 className="text-lg md:text-xl font-bold">{name}</h2>
//   <p className="text-sm">{type}</p>
// </div>
// </motion.div>

//   </motion.div>

//   );
// };

// export default function About1() {
//   const [selectedCard, setSelectedCard] = useState(null);

//   return (
//     <div
//       className="flex flex-wrap justify-center items-center gap-2 md:gap-4 p-6 md:p-10 min-h-screen"
//       onClick={() => setSelectedCard(null)}
//     >
//       {cards.map((card, index) => (
//         <Card
//           key={card.name}
//           {...card}
//           index={index}
//           onSelect={(e) => {
//             e.stopPropagation();
//             setSelectedCard(card.name);
//           }}
//           isSelected={selectedCard === card.name}
//         />
//       ))}
//     </div>
//   );
// }



// import { motion } from "framer-motion";
// import { useState } from "react";

// const cards = [
//   {
//     name: "Pikachu",
//     image: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/025.png",
//     type: "Electric",
//   },
//   {
//     name: "Charizard",
//     image: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/006.png",
//     type: "Fire/Flying",
//   },
//   {
//     name: "Bulbasaur",
//     image: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/001.png",
//     type: "Grass/Poison",
//   },
// ];

// const Card = ({ name, image, type, onSelect, isSelected }) => {
//   const [rotate, setRotate] = useState({ x: 0, y: 0 });

//   const handleMouseMove = (e) => {
//     const { left, top, width, height } = e.currentTarget.getBoundingClientRect();
//     const x = (e.clientX - left - width / 2) / 10; // Smoother tilt effect
//     const y = -(e.clientY - top - height / 2) / 10;
//     setRotate({ x, y });
//   };

//   const handleMouseLeave = () => {
//     setRotate({ x: 0, y: 0 });
//   };

//   return (
//     <motion.div
//       className="relative w-52 h-80 md:w-64 md:h-96 lg:w-72 lg:h-[400px] flex flex-col items-center justify-center cursor-pointer" // Increased size for large screens
//       style={{
//         perspective: "1000px",
//         zIndex: isSelected ? 100 : 1,
//       }}
//       onMouseMove={handleMouseMove}
//       onMouseLeave={handleMouseLeave}
//       onClick={onSelect}
//     >

//       <motion.div
//         className="relative rounded-2xl overflow-hidden w-52 h-80 md:w-64 md:h-96 lg:w-72 lg:h-[400px] flex flex-col items-center justify-center" // Increased size for large screens
//         style={{
//           transformStyle: "preserve-3d",
//           zIndex: isSelected ? 10 : 1,
//           boxShadow: isSelected
//             ? "0px 20px 50px rgba(255, 255, 255, 0.4)"
//             : "0px 10px 30px rgba(0, 0, 0, 0.2)",
//         }}
//         animate={{
//           rotateY: isSelected ? 180 : 0, // Flip animation
//           scale: isSelected ? 1.2 : 1, // Slight scale on select
//         }}
//         transition={{
//           type: "spring",
//           stiffness: 300,
//           damping: 15,
//         }}
//       >
//         <img
//           src={image}
//           alt={name}
//           className="w-full h-full object-cover rounded-3xl"
//           style={{ transform: "translateZ(40px)" }}
//         />
//         <div className="absolute w-full h-full" style={{ transform: "translateZ(-20px)" }}></div>
//         <div className="absolute -left-2 w-2 h-full rounded-l-xl" style={{ transform: "rotateY(90deg)" }}></div>
//         <div className="absolute -right-2 w-2 h-full rounded-r-xl" style={{ transform: "rotateY(-90deg)" }}></div>
//         <div className="absolute -top-2 w-full h-2 rounded-t-xl" style={{ transform: "rotateX(90deg)" }}></div>
//         <div className="absolute -bottom-2 w-full h-2 rounded-b-xl" style={{ transform: "rotateX(-90deg)" }}></div>

//         <div
//           className="absolute inset-0 bg-black bg-opacity-30 flex flex-col justify-end p-4 text-white"
//           style={{ transform: "translateZ(30px)" }}
//         >
//           <h2 className="text-lg md:text-xl font-bold">{name}</h2>
//           <p className="text-sm">{type}</p>
//         </div>
//       </motion.div>
//     </motion.div>
//   );
// };

// export default function About1() {
//   const [selectedCard, setSelectedCard] = useState(null);

//   const handleCardSelect = (cardName) => {
//     setSelectedCard((prev) => (prev === cardName ? null : cardName)); // Toggle selection
//   };

//   return (
//     <div
//       className="flex flex-wrap justify-center items-center gap-6 md:gap-8 p-6 md:p-10 min-h-screen" // Increased gap between cards
//     >
//       <div className="absolute top-140 left-0 w-full h-32 bg-gradient-to-b 
//       from-[#318b93] via-[#025e5eb0] to-[#00000000] 
//       opacity-100 blur-3xl shadow-[0px_0px_40px_#00f0ff] pointer-events-none"></div>
//       <div className="w-[100vw] h-[50vh] lg:h-[30vh]   items-center mt-36  lg:mt-40 py-2 ">
//         <h2 className="text-6xl md:text-8xl lg:text-9xl text-center drop-shadow-[0_0_15px_rgba(0,255,255,0.8)] font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent  text-wrap mb-4">
//           Meet The Stars!
//         </h2>
//         <h3 className="text-2xl lg:text-3xl text-center text-cyan-600 drop-shadow-[0_0_10px_rgba(0,255,255,0.8)] text-wrap">
//           Scroll Down To reveal Stars!
//         </h3>
//       </div>
//       {cards.map((card) => (
//         <Card
//           key={card.name}
//           {...card}
//           onSelect={() => handleCardSelect(card.name)} // Handle card selection
//           isSelected={selectedCard === card.name}
//         />
//       ))}
//     </div>
//   );
// }



import { motion } from "framer-motion";
import { useState, useEffect } from "react";

const cards = [
  {
    name: "Pikachu",
    image: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/025.png",
    type: "Electric",
  },
  {
    name: "Charizard",
    image: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/006.png",
    type: "Fire/Flying",
  },
  {
    name: "Bulbasaur",
    image: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/001.png",
    type: "Grass/Poison",
  },
];

const Card = ({ name, image, type, isSelected }) => {
  return (
    <motion.div
      className="relative w-64 h-96 md:w-72 md:h-108 lg:w-80 lg:h-128 flex flex-col items-center justify-center cursor-pointer" // Increased size for larger screens
      style={{
        perspective: "1000px",
        zIndex: isSelected ? 100 : 1,
      }}
    >
      <motion.div
        className="relative rounded-2xl overflow-hidden w-64 h-96 md:w-72 md:h-108 lg:w-80 lg:h-128 flex flex-col items-center justify-center" // Increased size for larger screens
        style={{
          transformStyle: "preserve-3d",
          zIndex: isSelected ? 10 : 1,
          boxShadow: isSelected
            ? "0px 20px 50px rgba(255, 255, 255, 0.4)"
            : "0px 10px 30px rgba(0, 0, 0, 0.2)",
        }}
        animate={{
          rotateY: isSelected ? 180 : 0, // Flip animation
          scale: isSelected ? 1.1 : 1, // Slight scale on select
        }}
        transition={{
          type: "spring",
          stiffness: 300,
          damping: 15,
        }}
      >
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover rounded-3xl"
          style={{ transform: "translateZ(40px)" }}
        />
        <div className="absolute w-full h-full" style={{ transform: "translateZ(-20px)" }}></div>
        <div className="absolute -left-2 w-2 h-full rounded-l-xl" style={{ transform: "rotateY(90deg)" }}></div>
        <div className="absolute -right-2 w-2 h-full rounded-r-xl" style={{ transform: "rotateY(-90deg)" }}></div>
        <div className="absolute -top-2 w-full h-2 rounded-t-xl" style={{ transform: "rotateX(90deg)" }}></div>
        <div className="absolute -bottom-2 w-full h-2 rounded-b-xl" style={{ transform: "rotateX(-90deg)" }}></div>

        <div
          className="absolute inset-0 bg-black bg-opacity-30 flex flex-col justify-end p-4 text-white"
          style={{ transform: "translateZ(30px)" }}
        >
          <h2 className="text-lg md:text-xl font-bold">{name}</h2>
          <p className="text-sm">{type}</p>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default function About1() {
  const [selectedCard, setSelectedCard] = useState(null);

  const handleScroll = () => {
    const cardElements = document.querySelectorAll('.card');
    const windowHeight = window.innerHeight;
    
    cardElements.forEach((card, index) => {
      const cardTop = card.getBoundingClientRect().top;
      if (cardTop < windowHeight / 2 && cardTop > -card.clientHeight / 2) {
        setSelectedCard(index); // Set selected card based on scroll position
      }
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll); // Cleanup
  }, []);

  return (
    <div
      className="flex flex-wrap justify-center items-center gap-6 md:gap-8 p-6 md:p-10 min-h-screen"
    >
      <div className="absolute top-140 left-0 w-full h-32 bg-gradient-to-b 
      from-[#318b93] via-[#025e5eb0] to-[#00000000] 
      opacity-100 blur-3xl shadow-[0px_0px_40px_#00f0ff] pointer-events-none"></div>
      <div className="w-[100vw] h-[50vh] lg:h-[30vh] items-center mt-36 lg:mt-40 py-2 ">
        <h2 className="text-6xl md:text-8xl text-center drop-shadow-[0_0_15px_rgba(0,255,255,0.8)] font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent text-wrap mb-4">
          Meet The Stars!
        </h2>
        <h3 className="text-2xl text-center text-cyan-600 drop-shadow-[0_0_10px_rgba(0,255,255,0.8)] text-wrap">
          Scroll Down To reveal Stars!
        </h3>
      </div>
      {cards.map((card, index) => (
        <div className="card" key={card.name}> {/* Added class 'card' for selection */}
          <Card
            {...card}
            isSelected={selectedCard === index} // Use index to determine selection
          />
        </div>
      ))}
    </div>
  );
}
