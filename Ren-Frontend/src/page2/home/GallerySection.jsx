import { useState, useEffect, useRef } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import imagesLoaded from "https://esm.sh/imagesloaded";

const slides = [
  { id: 1, image: "/gallerysection/ravi .webp", title: "Slide 1", subtitle: "Subtitle 1", description: "Description 1" },
  { id: 2, image: "/gallerysection/ladka .webp", title: "Slide 2", subtitle: "Subtitle 2", description: "Description 2" },
  { id: 3, image: "/gallerysection/parmish .webp", title: "Slide 3", subtitle: "Subtitle 3", description: "Description 3" },
  { id: 4, image: "/gallerysection/ladki .webp", title: "Slide 4", subtitle: "Subtitle 4", description: "Description 4" },
  { id: 5, image: "/gallerysection/modi .webp", title: "Slide 5", subtitle: "Subtitle 5", description: "Description 5" },
  { id: 6, image: "/gallerysection/image .webp", title: "Slide 6", subtitle: "Subtitle 6", description: "Description 6" },
  { id: 7, image: "/gallerysection/DJ .webp", title: "Slide 7", subtitle: "Subtitle 7", description: "Description 7" },
  { id: 8, image: "/gallerysection/ladki2 .webp", title: "Slide 8", subtitle: "Subtitle 8", description: "Description 8" },
];

export default function Slider() {
  const [current, setCurrent] = useState(0);
  const sliderRef = useRef(null);

  const autoplayRef = useRef(null);
  const touchStartX = useRef(0);

  useEffect(() => {
    startAutoplay();
    return () => clearInterval(autoplayRef.current);
  }, []);

  const startAutoplay = () => {
    clearInterval(autoplayRef.current);
    autoplayRef.current = setInterval(() => {
      nextSlide();
    }, 3000); 
  };

  const nextSlide = () => setCurrent((prev) => (prev + 1) % slides.length);
  const prevSlide = () => setCurrent((prev) => (prev - 1 + slides.length) % slides.length);

  const handleTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e) => {
    const deltaX = e.changedTouches[0].clientX - touchStartX.current;
    if (deltaX > 50) prevSlide(); // Swipe Right → Previous
    else if (deltaX < -50) nextSlide(); // Swipe Left → Next
    startAutoplay(); // Restart autoplay after swipe
  };

  return (
    <div className="flex items-center justify-center min-h-screen overflow-hidden relative"
    onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      
      {/* <button onClick={prevSlide} className="absolute left-5 p-2 text-cyan   hover:text-red-600 transition">
        <FaChevronLeft className="w-10 h-10 sm:w-10 sm:h-10" />
      </button> */}
      
      <div ref={sliderRef} className="relative flex items-center justify-center w-full max-w-4xl h-[70vh] sm:h-[80vh]">
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className={`absolute w-[35vw] sm:w-[25vw] max-w-[350px] sm:max-w-[300px] aspect-[2/3] transition-transform duration-700 ease-in-out transform ${
              index === current
              ? "scale-[1.7] lg:scale-110 z-10"
              : index === (current + 1) % slides.length
              ? "translate-x-[120%] sm:translate-x-full rotate-y-45 opacity-70"
              : index === (current - 1 + slides.length) % slides.length
              ? "-translate-x-[120%] sm:-translate-x-full -rotate-y-45 opacity-70"
              : index === (current + 2) % slides.length && window.innerWidth >= 640
              ? "translate-x-[240%] sm:translate-x-[200%] opacity-50"
              : index === (current - 2 + slides.length) % slides.length && window.innerWidth >= 640
              ? "-translate-x-[240%] sm:-translate-x-[200%] opacity-50"
              : "opacity-0"
            }`}
          >
            <div className="relative w-full h-full overflow-hidden rounded-2xl shadow-lg">
              <img loading="lazy" src={slide.image} alt={slide.title} className="w-full h-full object-cover" />
            </div>
          </div>
        ))}
      </div>
      
      {/* <button onClick={nextSlide} className="absolute right-5 p-2 text-cyan  hover:text-red-600 transition">
        <FaChevronRight className="w-10 h-10 sm:w-10 sm:h-10" />
      </button> */}
    </div>
  );
}

