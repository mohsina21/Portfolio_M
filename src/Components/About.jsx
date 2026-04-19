import React from "react";
import { Cat } from "react-kawaii";
import { motion } from "framer-motion";
import { useKawaiiMood } from "../hooks/useCustomHooks";

const About = () => {
  const { mood, changeMood } = useKawaiiMood();

  return (
    <div className="w-full px-4 py-20 sm:py-32 flex flex-col items-center text-gray-100 text-center overflow-visible">
  
      <motion.h2
        className="text-4xl sm:text-6xl font-bold tracking-tight mb-12 sm:mb-16"
        style={{
          background: "linear-gradient(135deg, #a855f7 0%, #ec4899 100%)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          backgroundClip: "text",
        }}
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        About Me
      </motion.h2>

      <motion.div
        className="relative z-10 p-6 sm:p-10 md:p-12 bg-gradient-to-br from-purple-900/40 via-black/20 to-violet-900/30 
                   backdrop-blur-xl rounded-3xl sm:rounded-4xl shadow-2xl 
                   border border-purple-500/40 hover:border-violet-400/60
                   w-full max-w-5xl transition-all duration-500
                   flex flex-col sm:flex-row items-center gap-8 sm:gap-12"
        onMouseEnter={changeMood}
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        whileHover={{ borderColor: "rgba(124, 58, 202, 0.8)" }}
      >
        <div className="cursor-pointer transform transition-transform hover:rotate-6">
          <Cat size={200} className="sm:size-[300px]" mood={mood} color="#c084fc" />
        </div>

        <div className="flex-1 text-center sm:text-left px-2 sm:p-6">
          <p className="text-base sm:text-lg leading-relaxed text-gray-100">
            Hi! I'm{" "}
            <span className="font-bold text-violet-400">Mohsina Parveen</span>, a Front-End Developer and student, currently working as an intern at UIX Lab where I contribute to real-world projects and collaborate with teams to build impactful solutions. I specialize in creating intuitive, user-friendly web and mobile experiences using Next.js, React, and React Native, with a basic understanding of Python. Alongside development, I enjoy roles involving communication, coordination, and problem-solving, and I’m passionate about turning ideas into functional products while continuously learning and improving.
          </p>
        </div>
      </motion.div>
    </div>
  );
};

export default About;
