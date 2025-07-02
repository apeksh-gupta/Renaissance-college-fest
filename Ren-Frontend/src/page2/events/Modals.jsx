import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';
import axios from "axios";
import paidEvents from "../../data/PaidEvents.json";


export const Modal = ({
  eventID,
  subtitle,
  isOpen,
  onClose,
  title,
  description,
  image = getDefaultImage(title),
  actionLabel
}) => {
  const [tokenCount, setTokenCount] = useState(null);
const [showTokenPop, setShowTokenPop] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const [isPaid, setIsPaid] = useState(false);

  useEffect(() => {
    if (eventID) {
      const event = paidEvents.find(event => event._id.$oid === eventID);
      setIsPaid(event ? event.Paid : false);
    }
  }, [eventID]);

  const buttonColor = {
    TECHNICAL: "bg-purple-500",
    CULTURAL: "bg-yellow-500",
    SPLASH: "bg-cyan-500"
  };
  
  const colorMapTitle = {
    TECHNICAL: "text-purple-500",
    CULTURAL: "text-yellow-500",
    SPLASH: "text-cyan-500",
    DEFAULT: "text-white",
  };
  
  const colorMap = {
    TECHNICAL: "text-purple-300",
    CULTURAL: "text-yellow-300",
    SPLASH: "text-cyan-300",
    DEFAULT: "text-white",
  };

  const titleColor = colorMapTitle[subtitle] || colorMapTitle.DEFAULT;
  const bgColor = buttonColor[subtitle] || "bg-gray-500";

  useEffect(() => {
    if (success || error) {
      const timer = setTimeout(() => {
        setShowTokenPop(false);
        setSuccess("");
        setError("");
      }, 3000); // Remove after 3 seconds
  
      return () => clearTimeout(timer); // Cleanup if component unmounts
    }
  }, [success, error , showTokenPop]);

  useEffect(() => {
    if (isOpen) {
      document.body.classList.add('overflow-hidden');
    } else {
      document.body.classList.remove('overflow-hidden');
    }
    return () => document.body.classList.remove('overflow-hidden');
  }, [isOpen]);

  const registerForEvent = async (eventId) => {
    setError("");
    setIsLoading(true);
  
    const token = localStorage.getItem("token"); // Check stored token
    if (!token) {
      setError("User not authenticated. Please log in first.");
      setIsLoading(false);
      return;
    }
  
    try {
      console.log("Making API request to:", "https://renmainbackend.onrender.com/api/event/register");
      const response = await axios.post(
        "https://renmainbackend.onrender.com/api/events/register",
        { eventId }, // Sending event ID
        {
          headers: {
            Authorization: `Bearer ${token.replace("Bearer ", "")}`,
          },
        }
      );
      setSuccess(response.data.message);
      setTokenCount(response.data.student.token); // Assuming API returns remaining tokens
      setShowTokenPop(true); // Show the pop-up

      // setTimeout(() => {
      //   setShowTokenPop(false); // Hide after 1 sec
      //   setError("");
      //   setSuccess("");
      // }, 4000);
    } catch (error) {
      // Handling backend errors properly
      if (error.response) {
        const errorMessage = error.response.data.message;
  
        if (errorMessage === "No tokens left for free events.") {
          setError("You do not have enough tokens to register for this free event.");
        } else if (errorMessage === "You have already registered for this event.") {
          setError("You are already registered for this event.");
        } else if (errorMessage === "You can only register for one technical event.") {
          setError("You can only register for one technical event.");
        } else if (errorMessage === "You can only register for one splash event.") {
          setError("You can only register for one splash event.");
        } else {
          setError(errorMessage || "Error registering for the event.");
        }
      } else {
        setError("Network error. Please try again later.");
      }
    }
    setIsLoading(false);
  };

  const handleRegister = () => {
    if (!eventID) {
      setError("Event ID is missing.");
      return;
    }
    registerForEvent(eventID);
  };

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/50 backdrop-blur-sm"
          onClick={onClose}
        />
        <motion.div
          initial={{ scale: 0.8, opacity: 0, rotateX: -15 }}
          animate={{ scale: 1, opacity: 1, rotateX: 0 }}
          exit={{ scale: 0.8, opacity: 0, rotateX: 15 }}
          style={{ perspective: 1000 }}
          className="relative z-50 w-full max-w-lg max-h-[90vh] overflow-y-auto scrollbar-hide hide-scrollbar rounded-2xl bg-gradient-to-br from-slate-900 to-slate-800 p-6 shadow-[0_0_30px_rgba(0,0,0,0.3)]"
          onClick={(e) => e.stopPropagation()}
        >
          <button
            onClick={onClose}
            className="absolute right-4 top-4 rounded-full p-4 z-[101] text-red-500 hover:bg-gray-400/60 hover:text-red-600"
          >
            <X size={20} />
          </button>

          <div className="relative w-full rounded-lg overflow-hidden">
            <img src={image} alt={title} className="w-full object-contain" />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/50 to-transparent" />
          </div>

          <div className="mt-4 overflow-hidden">
            <h2 className={`text-2xl font-bold ${titleColor}`}>{title}</h2>
            <div className="text-white mt-2 space-y-2">
              {description.split("\n").map((line, index) => {
                if (line.trim() === "") return null;
                const headingColor = colorMap[subtitle] || colorMap.DEFAULT;
                return line.endsWith(":") ? (
                  <h3 key={index} className={`font-bold text-lg mt-3 ${headingColor}`}>
                    {line}
                  </h3>
                ) : (
                  <ul key={index} className="list-disc ml-6">
                    <li>{line.trim()}</li>
                  </ul>
                );
              })}
            </div>
          </div>

          {error && (
            <div className="mb-1 p-3 mt-3 rounded-lg bg-red-500/10 border border-red-500 text-red-400">
              {error}
            </div>
          )}

          {success && (
            <div className="mb-1 p-3 mt-3 rounded-lg bg-green-500/10 border border-green-500 text-green-400">
              {success}
            </div>
          )}
          {showTokenPop && (
          <div
            className="mb-1 p-3 mt-3 rounded-lg bg-green-500/10 border border-green-500 text-green-400"
          >
            Tokens Left: {tokenCount}
          </div>
        )}
    <div>
      {isPaid ? (
        <div className="mt-6 w-full text-center text-lg font-semibold text-yellow-400">
          Contact at Registration Desk
        </div>
      ) : (
        <button
          onClick={handleRegister}
          disabled={isLoading}
          className={`mt-6 w-full rounded-lg px-4 py-2 font-semibold text-white shadow-[0_0_15px_rgba(34,211,238,0.3)] transition-all hover:bg-cyan-400 hover:shadow-[0_0_25px_rgba(34,211,238,0.5)] ${bgColor} 
            ${isLoading ? 'opacity-50 cursor-not-allowed' : ''}`}
        >
          {isLoading ? "Registering..." : actionLabel}
        </button>
      )}
    </div>


        </motion.div>
      </div>
    </AnimatePresence>
  );
};

function getDefaultImage(title) {
  const imageMap = {
    'CORE CPU': 'https://images.unsplash.com/photo-1618495038459-7b019f1c1723?auto=format&fit=crop&w=800&q=80',
    'TECHNICAL': 'https://images.unsplash.com/photo-1600783245891-47e5b36a5a8b?auto=format&fit=crop&w=800&q=80',
    'NETWORK': 'https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?auto=format&fit=crop&w=800&q=80',
    'TERMINAL': 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=800&q=80',
  };
  return imageMap[title] || imageMap['NETWORK'];
}
