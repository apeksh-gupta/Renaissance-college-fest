import React, { useState } from "react";
import teamData from "../../data/Teams.json"; // Importing JSON file
import {
  Bot,
  Linkedin,
  Mail,
  Phone,
} from "lucide-react";
import ScrollDownIndicator from "../../components/scrollDownIndicator/ScrollDownIndicator";

function Team({ team, description, teamdata }) {
  const [activeCard, setActiveCard] = useState(null);

  return (
    <div className="max-w-7xl mx-auto mt-10">
      <h1 className="text-[50px] font-bold text-center mt-12 z-10 text-white tracking-wider relative">
        {team}
      </h1>
      <div className="px-4 sm:px-6 md:px-12 lg:px-0">

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-y-16 gap-x-16 ">
          {teamdata.map((card, index) => (
            <div
              key={index}
              className="group relative h-[400px] transform transition-all duration-500 hover:scale-105 pt-12"
              onClick={() => setActiveCard(activeCard === index ? null : index)}
            >
              <div className="absolute inset-x-0 top-12 bottom-0 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-xl blur opacity-25 group-hover:opacity-40 transition-opacity duration-500"></div>
              <div className="relative h-full rounded-xl border border-blue-500/20 shadow-xl group-hover:shadow-2xl group-hover:border-blue-500/40 transition-all duration-500 neon-border">
                <div className="absolute -top-12 inset-x-0 h-[calc(100%+3rem)] overflow-hidden">
                  <img
                    src={card.image}
                    alt={card.title}
                    className={`w-auto h-fit object-fit transition-transform duration-500 ${activeCard === index ? "scale-110" : "group-hover:scale-110"
                      }`}
                  />
                </div>

                <div
                  className={`absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/80 to-transparent transition-opacity duration-500 ${activeCard === index
                      ? "opacity-90"
                      : "opacity-60 group-hover:opacity-90"
                    }`}
                ></div>

                <div className="absolute inset-0 flex flex-col justify-end p-6">
                  <div className="absolute top-4 right-4 p-3 bg-blue-500/10 backdrop-blur-sm rounded-full ring-2 ring-blue-500/30">
                    <Bot className="w-8 h-8 text-blue-400" />
                  </div>
                  <div
                    className={`transform transition-transform duration-500 ${activeCard === index
                        ? "translate-y-0 "
                        : "translate-y-8 group-hover:translate-y-0"
                      }`}
                  >
                    <h3 className="text-2xl font-bold text-blue-100 mb-2">
                      {card.title}
                    </h3>
                    <p
                      className={`text-blue-200/80 mb-6 transition-opacity duration-500 delay-100 ${activeCard === index
                          ? "opacity-100"
                          : "group-hover:opacity-100 opacity-0"
                        }`}
                    >
                      {card.description}
                    </p>

                    <div
                      className={`flex space-x-3 transition-opacity duration-500 delay-200 ${activeCard === index
                          ? "opacity-100"
                          : "opacity-0 group-hover:opacity-100"
                        }`}
                    >
                      <button
                        onClick={() =>
                          window.open(
                            `https://www.linkedin.com/in/${card.linkedin}`,
                            "_blank"
                          )
                        }
                        className="max-w-[100px] flex-1 py-2 bg-blue-500/10 hover:bg-blue-500/20 text-white rounded-lg border border-blue-500/30 transition-all duration-400 flex justify-center items-center neon-border"
                      >
                        <Linkedin className="w-6 h-6" />
                      </button>
                      <button
                        onClick={() => window.open(`mailto:${card.mail}`)}
                        className="max-w-[100px] flex-1 py-2 bg-blue-500/10 hover:bg-blue-500/20 text-white rounded-lg border border-blue-500/30 transition-all duration-400 flex justify-center items-center neon-border"
                      >
                        <Mail className="w-6 h-6" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
}

function Teams() {
  return (
    <div className="relative min-h-screen">
      <div className="relative w-full h-screen">
        <img
          src="/pageHeading/Teams.png"
          alt="Itinerary Heading"
          className="w-full h-full object-contain"
        />
        <ScrollDownIndicator />
      </div>
      {Object.entries(teamData).map(([teamname, teamdata]) => (
        <Team
          key={teamname}
          team={teamname}
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
          teamdata={teamdata}
        />
      ))}
    </div>
  );
}

export default Teams;
