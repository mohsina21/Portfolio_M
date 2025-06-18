import React from "react";
import { FaGithub, FaLinkedin, FaXTwitter } from "react-icons/fa6";
import { motion } from "framer-motion";

const socialMedia = [
  {
    id: 1,
    name: "GitHub",
    icon: <FaGithub size={22} />,
    url: "https://github.com/mohsina21",
  },
  {
    id: 2,
    name: "Twitter",
    icon: <FaXTwitter size={22} />,
    url: "https://twitter.com/notmohsina",
  },
  {
    id: 3,
    name: "LinkedIn",
    icon: <FaLinkedin size={22} />,
    url: "https://www.linkedin.com/in/mohsina-parveen-577367203/",
  },
];

const Hero = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center text-center text-white relative px-4 sm:px-6 overflow-hidden">
      {/* Name + Title */}
      <motion.h1
        className="text-4xl sm:text-5xl md:text-7xl font-extrabold tracking-wide drop-shadow-lg mb-2 sm:mb-3 font-orbitron"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        style={{
          fontFamily: "Orbitron, sans-serif",
          color: "#ffffff",
          textShadow: "0 0 4px #a855f7, 0 0 8px #7e22ce",
        }}
      >
        Mohsina Parveen
      </motion.h1>

      <motion.h2
        className="text-base sm:text-lg md:text-2xl font-orbitron tracking-wider text-gray-300 mb-6 sm:mb-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
      >
        {"<"}Frontend Developer {" />"}
      </motion.h2>

      {/* Social Icons */}
      <motion.div
        className="flex gap-4 sm:gap-6 mt-2 flex-wrap justify-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
      >
        {socialMedia.map((item) => (
          <a
            key={item.id}
            href={item.url}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 sm:p-3 border border-purple-400 rounded-xl 
                       transition-transform hover:scale-110 hover:bg-purple-400 
                       hover:text-black"
          >
            {item.icon}
          </a>
        ))}
      </motion.div>
    </div>
  );
};

export default Hero;
