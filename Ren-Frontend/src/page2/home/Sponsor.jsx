import React from 'react';
import styled from 'styled-components';
import { useLocation } from "react-router-dom";

const sponsors = [
    { logo: "/sponsors/Enagic.png", text: "ENAGIC" },
    { logo: "/sponsors/imagine.png", text: "IMAGINE" },
    { logo: "/sponsors/TECHNICAL .png", text: "KRAFTON" },
    { logo: "/sponsors/Krafton.png", text: "KTM" }
];

const Sponsor = () => {
    return (
        <StyledWrapper id="sponsors">
            {/* <h1 className="neon-text z-[9]">OUR SPONSORS</h1> */}
            <h2 className="text-6xl md:text-8xl text-center drop-shadow-[0_0_15px_rgba(0,255,255,0.8)] font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent  text-wrap mb-80">
            OUR SPONSORS
</h2>
            <div className="card-3d">
                {sponsors.map((sponsor, index) => (
                    <div key={index} className={`card card-${index + 1}`}>
                        <img src={sponsor.logo} alt={sponsor.text} />
                    </div>
                ))}
            </div>
        </StyledWrapper>
    );
};

const StyledWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;
  height: 100vh;
  background-color: #000;

  .neon-text {
    font-size: 3.5rem;
    font-weight: bold;
    color: #fff;
    text-shadow: 0 0 5px #0ff, 0 0 10px #0ff, 0 0 15px #0ff, 0 0 20px #00f;
    margin-bottom: 150px;
    text-align: center;
  }

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
    transform: perspective(800px) ;
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
    box-shadow: 0 0 10px #4169E1, 0 0 20px #4169E1;
  }
   .card-1 img {
    filter: brightness(160%);}
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
  min-width:60%;
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
    height:50vh;
    .card-3d {
      width: 200px;
      height: 100px;
    }

    .card {
      width: 200px;
      height: 150px;
    }

    .neon-text {
      margin-bottom: 0px;
      position:relative;
      top: -40%;
      font-size: 3rem;
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

export default Sponsor;
