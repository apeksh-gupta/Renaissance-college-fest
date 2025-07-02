import React from "react";
import styled from "styled-components";
import { useLocation } from "react-router-dom";
import { div } from "three/src/nodes/TSL.js";
import ScrollDownIndicator from "../../../components/scrollDownIndicator/ScrollDownIndicator";

const sponsors = [
  { logo: "/sponsors/Enagic.png", text: "ENAGIC" },
  { logo: "/sponsors/imagine.png", text: "IMAGINE" },
  { logo: "/sponsors/TECHNICAL .png", text: "KRAFTON" },
  { logo: "/sponsors/Krafton.png", text: "KTM" },
];

const Sponsors = () => {
  return (
    <div className="min-h-screen px-8 relative overflow-hidden">
      <div className=" relative w-full h-screen">
        <img
          src="/pageHeading/sponsors.png"
          alt="Itinerary Heading"
          className="relative w-full h-full object-contain"
        />
        <ScrollDownIndicator />
      </div>
      <StyledWrapper id="sponsors">
        <div className="card-3d">
          {sponsors.map((sponsor, index) => (
            <div key={index} className={`card card-${index + 1}`}>
              <img src={sponsor.logo} alt={sponsor.text} />
            </div>
          ))}
        </div>
      </StyledWrapper>
    </div>
  );
};

const StyledWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;
  height: 60vh;
  margin-top: 15vh;

  @keyframes autoRun3d {
    from {
      transform: perspective(800px) rotateY(-360deg);
    }
    to {
      transform: perspective(800px) rotateY(0deg);
    }
  }

  .card-3d {
    position: relative;
    width: 400px;
    height: 200px;
    transform-style: preserve-3d;
    transform: perspective(800px);
    animation: autoRun3d 20s linear infinite;
    will-change: transform;
  }

  .card {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 5px;
    position: absolute;
    width: 300px;
    height: 220px;
    background-color: #111;
    border: solid 2px #ccc;
    border-radius: 0.5rem;
    transform-origin: center center;
    transition: transform 0.3s ease-in-out;
    text-align: center;
    backface-visibility: hidden; /* ✅ Back side hidden */
  }

  /* Glowing effects */
  .card-1 {
    transform: translate(-50%, -50%) rotateY(0deg) translateZ(200px);
    box-shadow: 0 0 10px #4169e1, 0 0 20px #4169e1;
  }
  .card-1 img {
    filter: brightness(160%);
  }
  .card-2 {
    transform: translate(-50%, -50%) rotateY(90deg) translateZ(200px);
    box-shadow: 0 0 10px #00ffff, 0 0 20px #00ffff;
  }
  .card-3 {
    transform: translate(-50%, -50%) rotateY(180deg) translateZ(200px);
    box-shadow: 0 0 10px #ffcc00, 0 0 20px #ffcc00;
    background-color: black; /* ✅ Back is black */
  }
  .card-4 {
    transform: translate(-50%, -50%) rotateY(270deg) translateZ(200px);
    box-shadow: 0 0 10px #00ff00, 0 0 20px #00ff00;
    background-color: black; /* ✅ Back is black */
  }

  /* Hover effect - increase glow */
  .card:hover {
    box-shadow: 0 0 20px white, 0 0 30px white;
  }

  /* Styling for logo and text */
  .card img {
    max-width: 80%;
    min-width: 60%;
    max-height: 80%;
    object-fit: contain;
    margin-bottom: 5px;
  }

  /* Responsive adjustments */
  @media (max-width: 768px) {
    .card-3d {
      width: 250px;
      height: 120px;
    }

    .card {
      width: 80px;
      height: 110px;
    }

    .neon-text {
      font-size: 2rem;
    }
  }

  @media (max-width: 480px) {
    height: 30vh;

    .card-3d {
      width: 200px;
      height: 100px;
    }

    .card {
      width: 200px;
      height: 150px;
    }

   
    .card img {
      width: 100vw;
      height: 100vh;
    }
    .card-1 {
      transform: translate(-50%, -50%) rotateY(0deg) translateZ(140px);
    }
    .card-2 {
      transform: translate(-50%, -50%) rotateY(90deg) translateZ(140px);
    }
    .card-3 {
      transform: translate(-50%, -50%) rotateY(180deg) translateZ(140px);
    }
    .card-4 {
      transform: translate(-50%, -50%) rotateY(270deg) translateZ(140px);
    }
  }
`;

export default Sponsors;
