import React, { useState } from "react";
import { motion } from "framer-motion";
import clsx from "clsx";

const Navbar = ({ scrollToSection, refs }) => {
  const [activeSection, setActiveSection] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  const navItems = [
    { name: "Home", ref: refs?.heroRef },
    { name: "About", ref: refs?.aboutRef },
    { name: "Projects", ref: refs?.projectsRef },
  ];

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      className="fixed top-2 sm:top-4 left-2 right-2 sm:left-0 sm:right-0 z-50
  flex items-center justify-center
  w-fit px-3 sm:px-4 py-2 sm:py-2.5 gap-2 sm:gap-3 mx-auto
  backdrop-blur-2xl bg-gradient-to-r from-black/30 via-purple-900/20 to-black/30 
  border border-white/10 shadow-2xl shadow-purple-500/20
  rounded-full
  before:absolute before:inset-0 before:rounded-full
  before:bg-gradient-to-r before:from-purple-500/10 before:via-pink-500/10 before:to-purple-500/10
  before:blur-xl before:-z-10 before:opacity-0 hover:before:opacity-100
  before:transition-opacity before:duration-500
  max-w-[calc(100vw-1rem)] overflow-x-auto scrollbar-hide"

    >
      {/* Floating Particles */}
      <div className="absolute inset-0 overflow-hidden rounded-full pointer-events-none">
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-white/20 rounded-full"
            animate={{
              x: [0, Math.random() * 100 - 50],
              y: [0, Math.random() * 20 - 10],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
          />
        ))}
      </div>

      {/* Nav Buttons */}
      {navItems.map((item, index) => (
        <motion.button
          key={index}
          onClick={() => {
            scrollToSection?.(item.ref);
            setActiveSection(index);
          }}
          className={clsx(
            "relative px-3 sm:px-4 py-2 sm:py-2.5 text-white rounded-xl text-sm font-semibold",
            "transition-all duration-300 group overflow-hidden whitespace-nowrap",
            "focus:outline-none focus:ring-2 focus:ring-white",
            activeSection === index
              ? "bg-purple-500/90 shadow-lg shadow-purple-500/30"
              : "bg-purple-500/90 hover:bg-purple-600"
          )}
          whileHover={{
            scale: 1.05,
            rotateX: 5,
          }}
          whileTap={{ scale: 0.95 }}
          transition={{
            type: "spring",
            stiffness: 400,
            damping: 17,
          }}
        >
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-purple-500/50 to-pink-500/50 rounded-xl opacity-0 group-hover:opacity-100"
            transition={{ duration: 0.3 }}
          />
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12"
            initial={{ x: "-100%" }}
            whileHover={{ x: "100%" }}
            transition={{ duration: 0.6 }}
          />
          <span className="relative z-10">{item.name}</span>
        </motion.button>
      ))}

      {/* Resume Button */}
      <motion.a
        href="/MP_resume (1).pdf"
        download
        className="relative px-3 sm:px-4 py-2 sm:py-2.5 text-white rounded-xl text-sm font-semibold
          bg-purple-500/90 hover:bg-purple-600
          transition-all duration-300 group overflow-hidden
          focus:outline-none focus:ring-2 focus:ring-white
          shadow-lg shadow-purple-500/20 whitespace-nowrap"
        whileHover={{
          scale: 1.05,
          boxShadow: "0 10px 30px rgba(147, 51, 234, 0.3)",
        }}
        whileTap={{ scale: 0.95 }}
        transition={{
          type: "spring",
          stiffness: 400,
          damping: 17,
        }}
      >
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12"
          initial={{ x: "-100%" }}
          whileHover={{ x: "100%" }}
          transition={{ duration: 0.6 }}
        />
        <span className="relative z-10">Resume</span>
      </motion.a>

      {/* Glow Effect */}
      <motion.div
        className="absolute inset-0 rounded-2xl sm:rounded-full bg-gradient-to-r from-purple-500/10 via-pink-500/10 to-purple-500/10 blur-xl -z-10"
        animate={{
          opacity: isHovered ? 0.8 : 0.3,
          scale: isHovered ? 1.1 : 1,
        }}
        transition={{ duration: 0.5 }}
      />

      {/* Mobile Scrollbar + Extra Styles */}
      <style jsx="true">{`
        @keyframes wave {
          0%,
          100% {
            transform: scaleY(0.4);
          }
          50% {
            transform: scaleY(1.2);
          }
        }
        .animate-wave {
          animation: wave 0.8s infinite ease-in-out;
        }
        ::-webkit-scrollbar {
          width: 6px;
        }
        ::-webkit-scrollbar-track {
          background: rgba(255, 255, 255, 0.1);
          border-radius: 3px;
        }
        ::-webkit-scrollbar-thumb {
          background: rgba(168, 85, 247, 0.5);
          border-radius: 3px;
        }
        ::-webkit-scrollbar-thumb:hover {
          background: rgba(168, 85, 247, 0.7);
        }
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        ::-webkit-scrollbar-track {
          background: rgba(255, 255, 255, 0.1);
          border-radius: 3px;
        }
        ::-webkit-scrollbar-thumb {
          background: rgba(168, 85, 247, 0.5);
          border-radius: 3px;
        }
        ::-webkit-scrollbar-thumb:hover {
          background: rgba(168, 85, 247, 0.7);
        }
      `}</style>
    </motion.nav>
  );
};

export default Navbar;