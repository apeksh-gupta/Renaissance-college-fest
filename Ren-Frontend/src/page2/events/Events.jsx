import React, { useState, useEffect } from "react";
import { TiltCard } from "./TiltCard";
import { Modal } from "./Modals";
import { Box,Atom,Search,Blocks,Rocket,Clock,Navigation,Bot,Glasses,Megaphone,Paintbrush,Car,Radar,Power,Cpu,Move,Puzzle,Recycle,ChefHat, MicVocal,Drum ,Speaker,Guitar ,Drama,Sparkles ,Gem ,ScrollText ,Handshake,BicepsFlexed ,Film,PackageSearch ,Volleyball,Medal ,Crown ,MoveHorizontal ,FlagTriangleRight ,Trophy,  RotateCcw,Zap,Code,Brain  } from "lucide-react";
import cards from "../../data/Events.json";
import ScrollDownIndicator from "../../components/scrollDownIndicator/ScrollDownIndicator";


export default function Events() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [selectedCard, setSelectedCard] = useState(null);
  const [activeFilter, setActiveFilter] = useState(null);
  const [activeDay, setActiveDay] = useState(null);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  const iconMap = {
    MicVocal:MicVocal,
    ChefHat:ChefHat,
    Drum :Drum ,
    Clock:Clock,
    Blocks:Blocks,
    Car:Car,
    // Cube:Cube,
    Search:Search,
    Navigation:Navigation,
    Speaker :Speaker ,
    Guitar :Guitar ,
    Rocket:Rocket,
    Drama :Drama,
    Sparkles :Sparkles , 
    Gem :Gem ,
    Cpu:Cpu,
    Atom:Atom,
    Power:Power,
    Glasses:Glasses,
    ScrollText :ScrollText ,
    Handshake:Handshake,
    BicepsFlexed :BicepsFlexed ,
    Film :Film ,
    Bot:Bot,
    PackageSearch :PackageSearch ,
    Volleyball :Volleyball ,
    Medal :Medal ,
    Move:Move,
    Crown :Crown ,
    Megaphone:Megaphone,
    Paintbrush:Paintbrush,
    MoveHorizontal :MoveHorizontal ,
    FlagTriangleRight :FlagTriangleRight ,
    Trophy:Trophy,
    RotateCcw :RotateCcw ,
    Code:Code,
    Zap:Zap,
    Brain:Brain,
    Box:Box,
    Radar:Radar,
    Puzzle:Puzzle,
    Recycle:Recycle,
    
  };

 
const filteredCards = cards.filter((card) => {
    if (activeDay && activeFilter)
      return card.day === activeDay && card.category === activeFilter;
    if (activeDay) return card.day === activeDay;
    if (activeFilter) return card.category === activeFilter;
    return true;
  });

  return (
<div className="min-h-screen px-8 relative overflow-hidden">
  <div className=" relative w-full h-screen">
    <img 
      src="/pageHeading/Events.png" 
      alt="Itinerary Heading"
      className="relative w-full h-full object-contain"
    />
    <ScrollDownIndicator />
  </div>

  <div className="mx-auto max-w-6xl z-10">
    {/* Sticky Filter Buttons */}
    <div className="shadow-md ">
      <div className="grid grid-cols-2 gap-4 mb-8 sm:mb-4 md:flex md:flex-row md:justify-center md:gap-4">
        <button
          onClick={() => setActiveFilter(null)}
          className={`px-4 py-2 rounded-lg ${
            !activeFilter ? "bg-cyan-400 text-black" : "bg-slate-700 text-cyan-400"
          }`}
        >
          All
        </button>
        <button
          onClick={() => setActiveFilter("technical")}
          className={`px-4 py-2 rounded-lg ${
            activeFilter === "technical" ? "bg-cyan-400 text-black" : "bg-slate-700 text-cyan-400"
          }`}
        >
          Technical
        </button>
        <button
          onClick={() => setActiveFilter("splash")}
          className={`px-4 py-2 rounded-lg ${
            activeFilter === "splash" ? "bg-cyan-400 text-black" : "bg-slate-700 text-cyan-400"
          }`}
        >
          Splash
        </button>
        <button
          onClick={() => setActiveFilter("culture")}
          className={`px-4 py-2 rounded-lg ${
            activeFilter === "culture" ? "bg-cyan-400 text-black" : "bg-slate-700 text-cyan-400"
          }`}
        >
          Cultural
        </button>
      </div>
    </div>

    {/* Sticky Day Buttons */}
    <div className="sticky top-0 shadow-md mb-4">
      <div className="flex justify-center gap-4">
        <button
          onClick={() => setActiveDay("day1")}
          className={`px-4 py-2 rounded-lg ${
            activeDay === "day1" ? "bg-cyan-400 text-black" : "bg-slate-700 text-cyan-400"
          }`}
        >
          Day 1
        </button>
        <button
          onClick={() => setActiveDay("day2")}
          className={`px-4 py-2 rounded-lg ${
            activeDay === "day2" ? "bg-cyan-400 text-black" : "bg-slate-700 text-cyan-400"
          }`}
        >
          Day 2
        </button>
        <button
          onClick={() => setActiveDay("day3")}
          className={`px-4 py-2 rounded-lg ${
            activeDay === "day3" ? "bg-cyan-400 text-black" : "bg-slate-700 text-cyan-400"
          }`}
        >
          Day 3
        </button>
      </div>
    </div>

    {/* Cards display */}
    <div className="flex flex-wrap justify-center gap-8">
      {filteredCards.map((card, index) => {
        const IconComponent = iconMap[card.icon];
        return (
          <TiltCard
            key={index}
            {...card}
            icon={IconComponent ? <IconComponent className={card.iconColor} /> : null}
            mouseX={mousePosition.x}
            mouseY={mousePosition.y}
            image={card.image}
            onClick={() => setSelectedCard(card)}
          />
        );
      })}
    </div>
  </div>

  <Modal
    isOpen={selectedCard !== null}
    onClose={() => setSelectedCard(null)}
    title={selectedCard?.title ?? ""}
    description={selectedCard?.description ?? ""}
    image={selectedCard?.image ?? ""}
    actionLabel={selectedCard?.actionLabel ?? ""}
    eventID={selectedCard?.eventId ?? ""}
    onAction={() => {
      selectedCard?.onAction();
      setSelectedCard(null);
    }}
  />
</div>



  );
}