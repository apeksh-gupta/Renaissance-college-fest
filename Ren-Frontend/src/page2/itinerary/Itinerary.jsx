

import React, { useState } from "react";
import timelineData from "../../data/Timeline.json";
import { useEffect, useRef } from "react";
import { MapPin } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
// import pageHeading from "/Itinerary.webp"

gsap.registerPlugin(ScrollTrigger);

const VerticalTimeline = ({ events }) => {
  const timelineRef = useRef(null);
  const sectionsRef = useRef([]);
  const lineRef = useRef(null);
  const dotRefs = useRef([]);

  useEffect(() => {
    if (!events.length) return;

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: timelineRef.current,
        start: "top 70%",
        end: "bottom bottom",
        scrub: true,
        markers: false,
      },
    });

    tl.fromTo(
      lineRef.current,
      { height: "0%" },
      { height: "100%", ease: "none", duration: 1 }
    );

    sectionsRef.current.forEach((section, index) => {
      const dot = dotRefs.current[index];

      gsap.fromTo(
        section,
        { opacity: 0, y: 100, scale: 1 },
        {
          opacity: 1,
          y: 50,
          scale: 1,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: section,
            start: "top 75%",
            end: "top 40%",
            toggleActions: "play none none reverse",
            scrub: 1.5,
          },
        }
      );

      gsap.to(section, {
        opacity: 0,
        y: 50, // Move slightly upwards for a smooth exit effect
        ease: "power3.out",
        scrollTrigger: {
          trigger: section,
          start: "top 20%", // Start fading earlier for a smoother transition
          end: "top 10%",   // Fully disappear at top 10%
          scrub: 1.5,         // Slows down fade-out animation
        },
      });

      gsap.fromTo(
        dot,
        { opacity: 0, scale: 0.5, rotation: -180 },
        {
          opacity: 1,
          scale: 1,
          rotation: 0,
          duration: 0.8,
          ease: "back.out(1.7)",
          scrollTrigger: {
            trigger: section,
            start: "top 75%",
            end: "top 40%",
            toggleActions: "play none none reverse",
            scrub: 1.5,
          },
        }
      );

      // gsap.to(dot, {
      //   opacity: 0,
      //   scale: 0.5,
      //   duration: 0.5,
      //   ease: "power3.out",
      //   scrollTrigger: {
      //     trigger: section,
      //     start: "top 16%",
      //     end: "top 10%",
      //     scrub: 1.5,
      //   },
      // });



    });

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, [events]);

  return (
    <div className="min-h-screen  px-4 sm:px-8 py-16">
      <div className="max-w-4xl mx-auto relative pb-64" ref={timelineRef}>
        <div
          ref={lineRef}
          className="absolute left-4 sm:left-1/2 top-0 h-0 w-[3px] bg-gradient-to-b from-cyan-500 to-purple-500 transform sm:-translate-x-1/2"
        />

        {events.map((event, index) => (
          <div
            key={index}
            ref={(el) => (sectionsRef.current[index] = el)}
            className="relative flex items-center mb-10 opacity-0"
          >
            <div
              className={`flex w-full items-center ${index % 2 === 0
                  ? "justify-start sm:justify-end"
                  : "justify-start"
                }`}
            >
              <div
                className={`w-full pl-12 sm:pl-0 sm:w-1/2 p-4 ${index % 2 === 0 ? "sm:pr-0" : "sm:pl-0"
                  }`}
              >
                <div className="bg-gray-800/50 backdrop-blur-lg border border-cyan-500/40 rounded-xl p-6 hover:shadow-[0_0_30px_#0ff] transition-all duration-300 sm:ml-12 sm:mr-12">
                  <h2 className="text-xl sm:text-2xl font-bold text-cyan-300 mb-2">
                    {event.title}
                  </h2>
                  <p className="text-cyan-100/80 text-sm sm:text-base">
                    {event.content}
                  </p>
                  {event.location && (
                    <div className="flex items-center gap-2 text-cyan-300 mt-3">
                      <MapPin className="w-4 h-4" />
                      {event.location}
                    </div>
                  )}
                </div>
              </div>
            </div>

            <div
              ref={(el) => (dotRefs.current[index] = el)}
              className="absolute left-4 sm:left-1/2 w-5 h-5 bg-cyan-500 rounded-full shadow-[0_0_20px_#0ff] transform sm:-translate-x-1/2 opacity-0"
            />
          </div>
        ))}
      </div>
    </div>
  );
};



const Itinerary = () => {
  const [selectedDay, setSelectedDay] = useState("Day 1");

  const menuItems = ["Day 1", "Day 2", "Day 3"];

  return (
    <div className="relative min-h-screen text-white">

      {/* Full-Screen Image Section */}
      <div className="w-full h-screen">
        <img
          src="/pageHeading/Itinerary.png"
          alt="Itinerary Heading"
          className="w-full h-full object-contain"
        />
      </div>

      {/* Content Section */}
      <div className="relative z-5 -mt-[100vh] pt-[100vh]">

        {/* Navbar */}
        <nav className="sticky top-12 left-0 w-full p-4 flex justify-center sm:gap-10 gap-4 z-10">
          {menuItems.map((day) => (
            <button
              key={day}
              onClick={() => setSelectedDay(day)}
              className={`relative px-2 lg:px-[120px] py-1 lg:py-4 rounded-md text-lg  font-semibold transition-all duration-300
        ${selectedDay === day
                  ? "bg-[#008b8b] text-black shadow-[0_0_10px_#0ff,0_0_20px_#00f0ff,0_0_30px_#0ff]" // Dark cyan on click
                  : "bg-gray-800 text-white hover:bg-[#80eaff] hover:text-black hover:shadow-[0_0_5px_#80eaff,0_0_10px_#00f0ff,0_0_15px_#0ff]" // Light blue on hover
                }`}
              style={{
                position: "relative",
                overflow: "hidden",
              }}
            >
              {day}

              {/* Click Ripple Effect */}
              <span className="absolute inset-0 w-full h-full bg-[#008b8b] opacity-0 scale-50 transition-transform duration-300 ease-out active:opacity-40 active:scale-150"></span>
            </button>
          ))}
        </nav>

        {/* Timeline Component */}
        <div className="pt-20 z-10">
          <VerticalTimeline events={timelineData[selectedDay] || []} />
        </div>

      </div>

    </div>

  );
};

export default Itinerary;

