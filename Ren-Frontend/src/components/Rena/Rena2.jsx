import { useEffect, useRef, useState } from "react";
import ChatbotIcon from "./chatbotIcon";
import ChatForm from "./ChatForm";
import ChatMessage from "./ChatMessage";
import { renInfo } from "../../data/renInfo";
import './Rena.css'

const Rena = () => {
  const [chatHistory, setChatHistory] = useState([
    {
      hideInChat: true,
      role: "model",
      text: renInfo,
    },
    {
      role: "model",
      text: "Hello! I'm ReNa, your guide to the Renaissance event. What would you like to know more about? <br> 1. <a href='#' class='chat-option' data-option='About Renaissance'>About Renaissance</a> <br> 2. <a href='#' class='chat-option' data-option='About Events'>About Events</a> <br> 3. <a href='#' class='chat-option' data-option='Help'>Help</a>",
    },
  ]);
  const [showChatbot, setShowChatbot] = useState(false);
  const [showNotification, setShowNotification] = useState(true);
  const chatBodyRef = useRef();

  // Function to handle chatbot toggler click
  const handleTogglerClick = () => {
    setShowChatbot((prev) => !prev);
    setShowNotification(false);
  };

  // Function to handle button clicks
  const handleButtonClick = (option) => {
    // Add the user's selection to the chat history
    setChatHistory((prev) => [
      ...prev,
      { role: "user", text: option },
    ]);
  
    // Simulate the bot's response after a short delay
    setTimeout(() => {
      let botResponse = "";
      switch (option) {
        case "About Renaissance":
          botResponse = "Renaissance, the prestigious Annual Techno-Cultural Youth Fest of Jaipur Engineering College & Research Center (JECRC), is one of the largest college festivals in Rajasthan, spanning three exhilarating days each year. As a nationally recognized platform, it showcases exceptional talent in music, dance, drama, coding, and high-energy competitions, fostering creativity and innovation among students.Organized by students, for students, under the guidance of the Management Team and Student Council,<br> Renaissance requires over two months of dedication and effort to deliver an unforgettable experience. In 2025, the fest will take place from 6th March to 8th March, with 'Day Zero' set for 5th March for the second time.<br/>This grand festival boasts an average daily footfall of over 8,000 students, attracting participants from 97 premier institutions nationwide, making it a truly diverse and competitive platform. Over the years, Renaissance has welcomed more than 20 renowned personalities, including Lt. Jagjit Singh, Shubha Mudgal, Euphoria, Javed Ali, Grammy Award Winner Pt. Vishwa Mohan Bhatt, Nobel Laureate Kailash Satyarthi, Ranbir Kapoor, Abhishek Bachchan, Millind Gaba, Harsh Gujral, Arjun Kanungo, Parmish Verma, Ravi Gupta, and many more.The presence of such distinguished guests adds immense excitement and glamour, enriching the festival's legacy with each edition. Renaissance is not just a fest; it is a celebration of talent, passion, and excellence, making it a truly inspiring event for students across the country.";
          break;
        case "About Events":
          botResponse = "Here are the events you can learn more about: <br> 1. <a href='#' class='chat-option' data-option='Cultural Events'>Cultural Events</a> <br> 2. <a href='#' class='chat-option' data-option='Splash Events'>Splash Events</a> <br> 3. <a href='#' class='chat-option' data-option='Technical Events'>Technical Events</a>";
          break;
        case "Cultural Events":
          botResponse = "Cultural Events are a way to showcase your abilities in front of a crowd and win prizes. Here are some of the cultural events: <br> 1. Inaugural Ceremony <br> 2. Sarega (Prelims) <br> 3. Sarega (Finals) <br> 4. Masterchef Challenge <br> 5. RapZap Prelims <br> 6. Rockathon <br> 7. RapZap <br> 8. DJ War <br> 9. Guest DJ <br> 10. Beat The Beats <br> 11. Footloose <br> 12. Hunar <br> 13. Battle Mania <br> 14. Adaa <br> 15. Guest Band <br> 16. Navras <br> 17. Kavya <br> 18. Shor Bazzar <br> 19. Bootstrapping <br> 20. Celebrity Night";
          break;
        case "Splash Events":
          botResponse = "Splash Events are the events in which you can play games and win prizes. Here are some of the splash events: <br> 1. Gully Cricket <br> 2. Half Court Basketball (3V3) <br> 3. Beg Borrow Steal <br> 4. Treasure Hunt <br> 5. Lan Gaming <br> 6. IPL Auction <br> 7. Sac Race <br> 8. Game of Cinema <br> 9. Relay Race <br> 10. Tug of War <br> 11. Arm Wrestling <br> 12. Chess <br> 13. 3 Leg Race";
          break;
        case "Technical Events":
            botResponse = "Technical Events are the events in which you can showcase your technical skills and win prizes. Here are some of the technical events: <br> \
            1. Knowledge Knockout <br> \
            2. Hardware Bites <br> \
            3. Formula Zero <br> \
            4. Tech Probe <br> \
            5. Dexterity <br> \
            6. 3D Mania <br> \
            7. Campus Kart Clash <br> \
            8. Blind Code <br> \
            9. Cad Darshan <br> \
            10. Web3 Idea-thon & Build-a-thon <br> \
            11. Code Olympics <br> \
            12. Tech Hunt <br> \
            13. DSA Battle Ground <br> \
            14. Robo Soccer <br> \
            15  Slowest Roller Coaster with Paper \
            16. Programmer's Playground <br> \
            17. Technical Poster Making Competition <br> \
            18. Appie <br> \
            19. Puzzle Mania <br> \
            20. Web Crafters <br>  \
            21. JECRC Technoads <br> \
            22. Creative Pixels <br> \
            23. Technocrazy <br> \
            24. Brain Quest <br> \
            25. Best Out Of Waste <br> \
            26. Resin O'clock <br> \
            27. Game of Drones <br> \
            28. Situational Que <br> \
            29. Drishyam: The Poster Presentation <br> \
            30. Subito <br> \
            31. Robo Tug of War <br> \
            32. Electroquizzer <br> \
            33. Tech Spectrum <br> \
            34. Virtual Vision <br> \
            35. Flick (Short Film) <br>";
            break;
        case "Help":
          botResponse = "What kind of help do you need? <br> 1. <a href='#' class='chat-option' data-option='Website Related Issue'>Website Related Issue</a> <br> 2. <a href='#' class='chat-option' data-option='Event Related Issue'>Event Related Issue</a>";
          break;
        case "Website Related Issue":
          botResponse = "For website-related issues, please contact: <br>Akshat Bindal: +91 78774 00300 <br>Apeksh Gupta: +91 73579 29787 <br>Aryan Jain: +91 93528 17420";
          break;
        case "Event Related Issue":
          botResponse = "For event-related issues, please contact: <br> \
          1. <a href='#' class='chat-option' data-option='Splash Events Contact'>Splash Events</a> <br> \
          2. <a href='#' class='chat-option' data-option='Technical Events Contact'>Technical Events</a> <br> \
          3. <a href='#' class='chat-option' data-option='Operations Contact'>Operations</a> <br> \
          4. <a href='#' class='chat-option' data-option='Cultural Events Contact'>Cultural Events</a>";
          break;
        case "Splash Events Contact":
          botResponse = "For Splash Events, contact: <br>Anshul Verma: +91 63789 17672";
          break;
        case "Technical Events Contact":
          botResponse = "For Technical Events, contact: <br>Saksham Saraf: +91 97727 71754";
          break;
        case "Operations Contact":
          botResponse = "For Operations, contact: <br>Yatharth Rajvanshi: +91 80003 96600";
          break;
        case "Cultural Events Contact":
          botResponse = "For Cultural Events, contact: <br>Dev Saxena: +91 86022 55154";
          break;
        default:
          botResponse = "I'm sorry, I didn't understand that. Could you please clarify?";
      }
  
      // Add the bot's response to the chat history
      setChatHistory((prev) => [
        ...prev,
        { role: "model", text: botResponse },
      ]);
    }, 600); // 600ms delay to simulate thinking
  };

  // Add event listeners for button clicks
  useEffect(() => {
    const handleOptionClick = (event) => {
      event.preventDefault();
      const option = event.target.getAttribute("data-option");
      if (option) {
        handleButtonClick(option);
      }
    };

    // Attach event listeners to all buttons with the class 'chat-option'
    const buttons = document.querySelectorAll(".chat-option");
    buttons.forEach((button) => {
      button.addEventListener("click", handleOptionClick);
    });

    // Cleanup event listeners on component unmount
    return () => {
      buttons.forEach((button) => {
        button.removeEventListener("click", handleOptionClick);
      });
    };
  }, [chatHistory]); // Re-attach listeners when chat history changes

  const generateBotResponse = async (history, retries = 3) => {
    const updateHistory = (text, isError = false) => {
      setChatHistory((prev) => [
        ...prev.filter((msg) => msg.text !== "Thinking..."),
        { role: "model", text, isError },
      ]);
    };
  
    history = history.map(({ role, text }) => ({ role, parts: [{ text }] }));
  
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ contents: history }),
    };
  
    try {
      const response = await fetch(import.meta.env.VITE_API_URL, requestOptions);
      if (!response.ok) {
        if (response.status === 429 && retries > 0) {
          // Retry after a delay if rate-limited
          await new Promise((resolve) => setTimeout(resolve, 2000)); // 2-second delay
          return generateBotResponse(history, retries - 1);
        }
        throw new Error("API overloaded or unavailable");
      }
  
      const data = await response.json();
      const apiResponseText = data.candidates[0].content.parts[0].text.replace(/\*\*(.*?)\*\*/g, "$1").trim();
      updateHistory(apiResponseText);
    } catch (error) {
      updateHistory(error.message, true);
    }
  };

  useEffect(() => {
    // Auto-scroll whenever chat history updates
    chatBodyRef.current.scrollTo({ top: chatBodyRef.current.scrollHeight, behavior: "smooth" });
  }, [chatHistory]);

  useEffect(() => {
    const intervalTime = 3 * 60 * 1000; // 3 minutes
    let hideTimer; // Declare variable for hiding timeout

    const showNotificationFunc = () => {
      setShowNotification(true);

      // Set timeout to hide notification after 10 seconds
      hideTimer = setTimeout(() => {
        setShowNotification(false);
      }, 10000);
    };

    // Show first notification after 3 minutes
    const notificationInterval = setInterval(() => {
      showNotificationFunc();
    }, intervalTime);

    // Run the first notification immediately instead of waiting 3 minutes
    showNotificationFunc();

    return () => {
      clearInterval(notificationInterval);
      clearTimeout(hideTimer);
    };
  }, []);

  return (
    <div className={`containera ${showChatbot ? "show-chatbot" : ""}`}>
      {/* Notification Prompt */}
      {showNotification && (
        <div className="chatbot-notification">
          <p>ReNa reporting for duty! How can I assist?</p>
          <button onClick={handleTogglerClick} className="close-notification"></button>
        </div>
      )}

      {/* Chatbot Toggler Button */}
      <button onClick={handleTogglerClick} id="chatbot-toggler">
        <ChatbotIcon size={80} />
      </button>

      {/* Chatbot Popup */}
      <div className="chatbot-popup">
        {/* Chatbot Header */}
        <div className="chat-header">
          <div className="header-info">
            <ChatbotIcon size={50} />
            <h2 className="logo-text">RENA</h2>
          </div>
          <button onClick={handleTogglerClick} className="material-symbols-rounded">
            keyboard_arrow_down
          </button>
        </div>

        {/* Chatbot Body */}
        <div ref={chatBodyRef} className="chat-body" onWheel={(e) => {
          e.stopPropagation();
        }}>
          <div className="message bot-message">
            <ChatbotIcon />
            <p className="message-text">
              Hey There! <br /> How can I help you today?
            </p>
          </div>

          {/* Render the chat history dynamically */}
          {chatHistory.map((chat, index) => (
            <ChatMessage key={index} chat={chat} />
          ))}
        </div>

        {/* Chatbot Footer */}
        <div className="chat-footer">
          <ChatForm chatHistory={chatHistory} setChatHistory={setChatHistory} generateBotResponse={generateBotResponse} />
        </div>
      </div>
    </div>
  );
};

export default Rena;