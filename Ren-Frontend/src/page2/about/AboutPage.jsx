import React from "react";

import { FaRobot, FaBrain } from "react-icons/fa";
import ScrollDownIndicator from "../../components/scrollDownIndicator/ScrollDownIndicator";

export default function About() {
  // SVG animation for heading with pixel-by-pixel drawing

  return (
    <div className="relative min-h-screen  text-white px-6 sm:px-10 md:px-16  overflow-hidden">
      <div className=" relative w-full h-screen">
        <img
          src="/pageHeading/About.png"
          alt="Itinerary Heading"
          className="w-full h-full object-contain"
        />
        <ScrollDownIndicator />
      </div>

      {/* Sub-section 1 */}
      <div className="relative max-w-4xl mx-auto p-6 sm:p-8 bg-gray-800/80 rounded-2xl shadow-xl backdrop-blur-md border border-cyan-500 group border-animation">
        <FaRobot className="absolute top-4 right-4 text-cyan-400 text-3xl sm:text-4xl group-hover:text-white transition-all duration-300" />
        <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-cyan-400 group-hover:text-white transition-all duration-300">
          About JECRC
        </h2>
        <p className="mt-4 text-gray-300 group-hover:text-gray-200 transition-all duration-300 text-sm sm:text-base">
          Jaipur Engineering College & Research Center (JECRC) stands as a beacon of academic excellence, innovation, and holistic development. With a legacy spanning over two decades, JECRC has established itself as one of Rajasthan’s premier institutions, known for its strong academic foundation, state-of-the-art infrastructure, and commitment to nurturing future leaders.
        </p>
        <p className="mt-4 text-gray-300 group-hover:text-gray-200 transition-all duration-300 text-sm sm:text-base">
          The institution takes pride in its vibrant student community, where education extends beyond classrooms, fostering creativity, research, and industry-driven learning. Guided by a vision of excellence, JECRC continuously evolves to meet the dynamic demands of the modern world, offering students a platform to excel in academics, technology, and cultural endeavors.
        </p>
        <p className="mt-4 text-gray-300 group-hover:text-gray-200 transition-all duration-300 text-sm sm:text-base">
          The college is home to various technical, cultural, and social clubs that provide students with opportunities to explore their passions and develop leadership skills. With a strong placement record and collaborations with top industries, JECRC ensures that its students are well-prepared to make a meaningful impact in their respective fields.
        </p>
        <p className="mt-4 text-gray-300 group-hover:text-gray-200 transition-all duration-300 text-sm sm:text-base">
          Recognized for its contributions to social causes, the institution encourages students to engage in initiatives that bring positive change to society. JECRC’s commitment to fostering a well-rounded educational experience makes it more than just a college—it is a place where aspirations turn into achievements and students transform into professionals equipped to lead the future.
        </p>
      </div>

      {/* Sub-section 2 with More Spacing */}
      <div className="relative my-24 max-w-4xl mx-auto p-6 sm:p-8 bg-gray-800/80 rounded-2xl shadow-xl backdrop-blur-md border border-cyan-500 group border-animation">
        <FaBrain className="absolute top-4 right-4 text-purple-400 text-3xl sm:text-4xl group-hover:text-white transition-all duration-300" />
        <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-cyan-400 group-hover:text-white transition-all duration-300">
          About Renaissance
        </h2>
        <p className="mt-4 text-gray-300 group-hover:text-gray-200 transition-all duration-300 text-sm sm:text-base">
          Renaissance, the prestigious Annual Techno-Cultural Youth Fest of Jaipur Engineering College & Research Center (JECRC), is one of the largest college festivals in Rajasthan, spanning three exhilarating days each year. As a nationally recognized platform, it showcases exceptional talent in music, dance, drama, coding, and high-energy competitions, fostering creativity and innovation among students.
        </p>
        <p className="mt-4 text-gray-300 group-hover:text-gray-200 transition-all duration-300 text-sm sm:text-base">
          Organized by students, for students, under the guidance of the Management Team and Student Council, Renaissance requires over two months of dedication and effort to deliver an unforgettable experience. In 2025, the fest will take place from 6th March to 8th March, with 'Day Zero' set for 5th March for the second time.
        </p>
        <p className="mt-4 text-gray-300 group-hover:text-gray-200 transition-all duration-300 text-sm sm:text-base">
          The presence of such distinguished guests adds immense excitement and glamour, enriching the festival's legacy with each edition. Renaissance is not just a fest; it is a celebration of talent, passion, and excellence, making it a truly inspiring event for students across the country.
        </p>
        <p className="mt-4 text-gray-300 group-hover:text-gray-200 transition-all duration-300 text-sm sm:text-base">
          The presence of such distinguished guests adds immense excitement and glamour, enriching the festival's legacy with each edition. Renaissance is not just a fest; it is a celebration of talent, passion, and excellence, making it a truly inspiring event for students across the country.
        </p>
      </div>

    </div>
  );
}