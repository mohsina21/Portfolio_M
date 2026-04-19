import React from "react";
import { motion } from "framer-motion";
import SocialLinks from "./SocialLinks";
import { SOCIAL_MEDIA } from "../config/constants";

const Hero = ({ projectRef, scrollToSection }) => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center text-center text-white relative px-4 sm:px-6 overflow-hidden">
      {/* Name with premium typography */}
      <motion.div
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="space-y-3 sm:space-y-5"
      >
        <h1 className="text-5xl sm:text-6xl md:text-8xl font-extrabold tracking-tight mt-4 sm:mt-6"
          style={{
            fontFamily: "'Orbitron', 'Courier New', monospace",
            background: "linear-gradient(135deg, #a855f7 0%, #ec4899 100%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
            textShadow: "0 0 30px rgba(168, 85, 247, 0.3)",
          }}
        >
          Mohsina Parveen
        </h1>

        <motion.p
          className="text-xl sm:text-2xl md:text-3xl tracking-wider text-purple-300"
          style={{ fontFamily: "'Courier New', 'Courier', monospace" }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          {"< "}
          <span className="text-violet-400">Full-Stack Developer</span>
          {" />"}
        </motion.p>

        <motion.p
          className="text-sm sm:text-base md:text-lg text-gray-300 max-w-md mx-auto leading-relaxed"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          Building beautiful, interactive experiences with modern web technologies
        </motion.p>
      </motion.div>

      {/* Social Links */}
      <div className="mt-10 sm:mt-12">
        <SocialLinks links={SOCIAL_MEDIA} />
      </div>

      {/* CTA Button */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1 }}
        className="mt-12 sm:mt-16"
      >
        <motion.button
          onClick={() => scrollToSection?.(projectRef)}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="group relative px-8 py-3 sm:px-10 sm:py-4 rounded-full font-semibold
                     bg-gradient-to-r from-purple-500 to-violet-600 text-white
                     shadow-lg shadow-purple-500/50 hover:shadow-purple-500/80
                     transition-all duration-300 overflow-hidden"
        >
          <span className="relative z-10">Explore My Work</span>
          <div className="absolute inset-0 bg-gradient-to-r from-violet-600 to-pink-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        </motion.button>
      </motion.div>
    </div>
  );
};

export default Hero;
