import { useRef, useState, useEffect } from "react";
import { motion } from "framer-motion";
import eyeclose from "/eyeclose.png";
import eyeopen from "/eyeopen.png";
import axios from "axios";
const TARGET_TEXT = "Login";
const CYCLES_PER_LETTER = 2;
const SHUFFLE_TIME = 50;
const CHARS = "!@#$%^&*():{};|,.<>/?";
const API_URL = "https://renmainbackend.onrender.com/api/students/login";

export default function Login() {
  const [isOpen, setIsOpen] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");
  const [error, setError] = useState("");
  const [email, setEmail] = useState("");
  const [tokenCount, setTokenCount] = useState(null); // ✅ Token Count State
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [token, setToken] = useState(localStorage.getItem("token")); // ✅ Manage token state


  useEffect(() => {
    setToken(localStorage.getItem("token")); // ✅ Update token state on change
  }, []);

  const handleLogin = async (e) => {
    e.preventDefault();
    setError("");
    setSuccessMessage(""); // Reset success message
    setIsLoading(true);

    try {
      const response = await axios.post(API_URL, {
        email: email.toLowerCase(),
        password,
      });

      if (response.status === 200) {
        const token = response.data.token;
        localStorage.setItem("token", `Bearer ${token}`);
        setToken(`Bearer ${response.data.student.token}`); // ✅ Update state immediately
        const tokenNo = response.data.student.token
        setSuccessMessage("✅ Login Successful!");
        setTokenCount(tokenNo); // ✅ Store Token Count
        setTimeout(() => setIsOpen(false), 2000); // ✅ Close modal after 2 sec
      } else {
        setError(response.data.message || "Invalid email or password.");
      }
    } catch (e) {
      setError("Wrong credentials. Please try again.");
    } finally {
      setIsLoading(false); // ✅ Stop loading
    }
  };


  const handleLogout = () => {
    localStorage.removeItem("token"); // ✅ Remove token from storage
    setToken(null); // ✅ Update state to reflect UI change
  };



  return (
    <>

      {/* ✅ Show Token Count If Logged In */}
      {/* {tokenCount !== null ? (
        <p className="text-white font-bold text-lg mr-2 py-2 rounded-lg shadow-lg border bg-blue-700 border-white/20 animate-pulse">
        {`🔑Token: ${tokenCount}`}
      </p>
      
      ) : (
        !isOpen && <EncryptButton onClick={() => setIsOpen(true)} />
      )} */}

      {/* ✅ Show Logout button if logged in */}
      {token ? (
        <button
          onClick={handleLogout}
          className="group relative overflow-hidden rounded-lg border-[1px] left-[1rem] top-1 border-cyan-400 bg-cyan-500 px-4 py-2 font-mono font-medium uppercase text-black transition-colors hover:text-black shadow-[0_0_10px_#00ffff] hover:brightness-110"
        >
          Logout
        </button>

      ) : (
        !isOpen && <EncryptButton onClick={() => setIsOpen(true)} />
      )}


      {isOpen && (
        <div
          className="fixed inset-0 backdrop-blur-2xl bg-black bg-opacity-40 flex justify-center items-center z-[50]"
          onClick={() => setIsOpen(false)}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.3 }}
            className="relative m-8 max-w-sm w-96 p-8 flex flex-col gap-y-4 border border-gray-300 shadow-2xl rounded-3xl 
                 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              className="absolute top-4 right-4 text-gray-400 hover:text-red-500 transition-all duration-300"
              onClick={() => setIsOpen(false)}
            >
              ✖
            </button>

            {/* Title */}
            <h2 className="text-3xl font-bold text-center text-cyan-300 tracking-wider">
              Login
            </h2>

            {/* Success Message */}
            {successMessage && (
              <p className="text-green-400 text-lg font-semibold text-center">
                {successMessage}
              </p>
            )}

            {/* Error Message */}
            {error && (
              <p className="text-red-400 text-lg font-semibold text-center">
                {error}
              </p>
            )}

            {/* Form */}
            <form className="space-y-6" onSubmit={handleLogin}>
              {/* Email Input */}
              <input
                type="email"
                name="email"
                placeholder="Email"
                className="w-full p-3 bg-gray-900 border border-gray-700 rounded-lg text-white focus:ring-2 focus:ring-cyan-400 outline-none transition"
                onChange={(e) => setEmail(e.target.value)}
                required
              />

              {/* Password Input */}
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  name="password"
                  placeholder="Password"
                  className="w-full p-3 bg-gray-900 border border-gray-700 rounded-lg text-white focus:ring-2 focus:ring-cyan-400 outline-none transition"
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
                <button
                  type="button"
                  className="absolute inset-y-0 right-3 flex items-center"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  <img
                    src={showPassword ? eyeopen : eyeclose}
                    alt="Toggle Password"
                    className="w-6 h-6 opacity-80 hover:opacity-100 transition "
                  />
                </button>
              </div>

              {/* Submit Button */}
              <button
                className="w-full py-3 mt-4 bg-cyan-500 text-black font-semibold text-lg rounded-xl shadow-lg 
                     hover:bg-cyan-600 transition-all duration-300 hover:shadow-cyan-500/50"
                disabled={isLoading}
              >
                {isLoading ? "Please wait..." : "Submit"}
              </button>
              <a href="https://forms.gle/kfdTxpwfVGPMRJbj9" target="_blank" rel="noopener noreferrer">
                <div
                  className="w-full py- mt-4 bg-cyan- text-cyan-500 font-semibold text-lg rounded-xl flex items-center justify-center text-center
                     hover:text-cyan-800 transition-all duration-300"
                >
                  Outside Registration
                </div>
              </a>
            </form>
          </motion.div>
        </div>
      )}

    </>
  );
}

export const EncryptButton = ({ onClick }) => {
  const intervalRef = useRef(null);
  const [text, setText] = useState(TARGET_TEXT);

  const scramble = () => {
    let pos = 0;
    intervalRef.current = setInterval(() => {
      const scrambled = TARGET_TEXT.split("")
        .map((char, index) =>
          pos / CYCLES_PER_LETTER > index
            ? char
            : CHARS[Math.floor(Math.random() * CHARS.length)]
        )
        .join("");

      setText(scrambled);
      pos++;

      if (pos >= TARGET_TEXT.length * CYCLES_PER_LETTER) stopScramble();
    }, SHUFFLE_TIME);
  };

  const stopScramble = () => {
    clearInterval(intervalRef.current || undefined);
    setText(TARGET_TEXT);
  };

  return (
    <motion.button
      whileHover={{ scale: 1.025 }}
      whileTap={{ scale: 0.975 }}
      onMouseEnter={scramble}
      onMouseLeave={stopScramble}
      onClick={onClick}
      className="group relative overflow-hidden rounded-lg border-[1px] left-[1rem] top-1 border-cyan-400 bg-cyan-500 px-4 py-2 font-mono font-medium uppercase text-black transition-colors hover:text-black shadow-[0_0_10px_#00ffff]"
    >
      <div className="relative z-10 flex items-center gap-2">
        <span>{text}</span>
      </div>
      <motion.span
        initial={{ y: "100%" }}
        animate={{ y: "-100%" }}
        transition={{
          repeat: Infinity,
          repeatType: "mirror",
          duration: 1,
          ease: "linear",
        }}
        className="duration-300 absolute inset-0 z-0 scale-125 bg-gradient-to-t from-cyan-400/0 from-40% via-cyan-500/100 to-cyan-400/0 to-60% opacity-0 transition-opacity group-hover:opacity-100"
      />
    </motion.button>
  );
};
