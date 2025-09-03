import Card from "./Card";
import { useEffect, useRef } from "react";
import Lenis from "lenis";               // ✅ fixed import
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import "./css/Celebrity.css";

const cardData = [
  { id: "card-1", frontSrc: "/celebrity/day1.webp", backSrc: "/celebrity/HIMANI.webp", backAlt: "Card Back Image 1" },
  { id: "card-2", frontSrc: "/celebrity/day3.webp", backSrc: "/celebrity/paradox.webp", backAlt: "Card Back Image 2" },
  { id: "card-3", frontSrc: "/celebrity/day2.webp", backSrc: "/celebrity/dreamnote.webp", backAlt: "Card Back Image 3" },
];

gsap.registerPlugin(ScrollTrigger);

export default function Celebrity() {
  const container = useRef(null);
  const cardRefs = useRef([]);

  // ✅ Lenis smooth scroll init
  useEffect(() => {
    const lenis = new Lenis();

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);
  }, []);

  useGSAP(
    () => {
      if (!container.current) return;
      const cardsElement = cardRefs.current;
      const totalScrollHeight = window.innerHeight * 3;
      const positions = [25, 50, 75];
      const rotations = [-15, 0, 15];

      const verticalPositions = [40, 90, 140];
      const verticalOffsets = [0, 100, 200];

      // Pin section
      ScrollTrigger.create({
        trigger: container.current.querySelector(".cards"),
        start: "top top",
        end: `+=${totalScrollHeight}`,
        pin: true,
        pinSpacing: true,
      });

      const mediaQuery = gsap.matchMedia();

      // 📱 Mobile vertical spread
      mediaQuery.add("(max-width: 767px)", () => {
        cardsElement.forEach((card, index) => {
          if (!card) return;
          gsap.to(card, {
            top: `${verticalPositions[index]}%`,
            left: "50%",
            y: verticalOffsets[index],
            rotation: 0,
            ease: "none",
            scrollTrigger: {
              trigger: container.current.querySelector(".cards"),
              start: "top top",
              end: `+=${window.innerHeight}`,
              scrub: 1,
              id: `spread-vertical-${index}`,
            },
          });
        });
      });

      // 💻 Desktop horizontal spread
      cardsElement.forEach((card, index) => {
        if (!card) return;
        gsap.to(card, {
          left: `${positions[index]}%`,
          rotation: `${rotations[index]}`,
          ease: "none",
          scrollTrigger: {
            trigger: container.current.querySelector(".cards"),
            start: "top top",
            end: `+=${window.innerHeight}`,
            scrub: 1,
            id: `spread-${index}`,
          },
        });
      });

      // 🔄 Flip animations
      cardsElement.forEach((card, index) => {
        if (!card) return;
        const frontEl = card.querySelector(".flip-card-front");
        const backEl = card.querySelector(".flip-card-back");
        const staggerOffset = index * 0.05;
        const startOffset = 1 / 3 + staggerOffset;
        const endOffset = 2 / 3 + staggerOffset;

        ScrollTrigger.create({
          trigger: container.current.querySelector(".cards"),
          start: "top top",
          end: `+=${totalScrollHeight}`,
          scrub: 1,
          id: `rotate-flip-${index}`,
          onUpdate: (self) => {
            const progress = self.progress;
            if (progress >= startOffset && progress <= endOffset) {
              const animationProgress = (progress - startOffset) / (1 / 3);
              const frontRotation = -180 * animationProgress;
              const backRotation = 180 - 180 * animationProgress;
              const cardRotation = rotations[index] * (1 - animationProgress);

              gsap.to(frontEl, { rotateY: frontRotation, ease: "power1.out" });
              gsap.to(backEl, { rotateY: backRotation, ease: "power1.out" });
              gsap.to(card, {
                xPercent: -50,
                yPercent: -50,
                rotate: cardRotation,
                ease: "power1.out",
              });
            }
          },
        });
      });
    },
    { scope: container }
  );

  // cleanup
  useEffect(() => {
    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <div>
      <div className="absolute top-140 left-0 w-full h-32 bg-gradient-to-b 
      from-[#318b93] via-[#025e5eb0] to-[#00000000] 
      opacity-100 blur-3xl shadow-[0px_0px_40px_#00f0ff] pointer-events-none"></div>

      <div className="w-[100vw] h-[50vh] lg:h-[30vh] items-center mt-36 lg:mt-40 py-2">
        <h2 className="text-6xl md:text-8xl text-center drop-shadow-[0_0_15px_rgba(0,255,255,0.8)] font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent mb-4">
          Meet The Stars!
        </h2>
        <h3 className="text-2xl text-center text-cyan-600 drop-shadow-[0_0_10px_rgba(0,255,255,0.8)]">
          Scroll Down To reveal Stars!
        </h3>
      </div>

      <div className="container" ref={container}>
        <section className="cards">
          {cardData.map((card, index) => (
            <Card
              key={card.id}
              id={card.id}
              frontSrc={card.frontSrc}
              backSrc={card.backSrc}
              backAlt={card.backAlt}
              ref={(el) => (cardRefs.current[index] = el)}
            />
          ))}
        </section>
      </div>
    </div>
  );
}
