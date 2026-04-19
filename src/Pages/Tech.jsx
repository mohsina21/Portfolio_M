import React from "react";
import { Browser } from "react-kawaii";
import { motion } from "framer-motion";
import Tilt from "react-parallax-tilt";
import { TECH_STACK } from "../config/constants";
import { useKawaiiMood } from "../hooks/useCustomHooks";

const Tech = () => {
  const { mood, changeMood } = useKawaiiMood();

  return (
    <section className="w-full min-h-screen flex flex-col items-center justify-center relative text-white text-center overflow-hidden p-4 md:p-8">
      {/* Heading */}
      <motion.h2
        className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight mb-12 md:mb-16"
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
        Tech Stack
      </motion.h2>

      
      <Tilt
        tiltMaxAngleX={8}
        tiltMaxAngleY={8}
        glareEnable={true}
        glareMaxOpacity={0.15}
        className="w-full flex justify-center"
      >
        <motion.div
          className="relative z-10 p-8 md:p-12 bg-gradient-to-br from-purple-900/40 via-black/20 to-violet-900/30 
                     backdrop-blur-xl rounded-3xl md:rounded-4xl shadow-2xl 
                     border border-purple-500/40 hover:border-violet-400/60
                     max-w-5xl transition-all duration-500 
                     flex flex-col md:flex-row items-center gap-10 md:gap-14 justify-center"
          onMouseEnter={changeMood}
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          whileHover={{ borderColor: "rgba(124, 58, 202, 0.8)" }}
        >
          
          <motion.div
            className="flex-shrink-0 cursor-pointer"
            whileHover={{ rotate: 8, scale: 1.05 }}
            transition={{ type: "spring", stiffness: 200 }}
          >
            <Browser size={220} mood={mood} color="#c084fc" />
          </motion.div>

          
          <motion.div
            className="grid grid-cols-3 md:grid-cols-4 gap-6 md:gap-8 justify-center items-center"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            viewport={{ once: true }}
          >
            {TECH_STACK.map((tech, index) => {
              const IconComponent = tech.icon;
              return (
                <motion.div
                  key={index}
                  className="flex flex-col items-center gap-3 group"
                  whileHover={{ y: -8 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <div className={`text-4xl md:text-5xl transition-all duration-300 ${tech.color} group-hover:scale-125 group-hover:drop-shadow-[0_0_20px_#c084fc]`}>
                    <IconComponent />
                  </div>
                  <p className="text-xs md:text-sm font-medium text-purple-300">{tech.name}</p>
                </motion.div>
              );
            })}
          </motion.div>
        </motion.div>
      </Tilt>


      <motion.div
        className="mt-16 md:mt-20 grid grid-cols-3 gap-6 md:gap-10 text-center max-w-3xl"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.4, duration: 0.6 }}
        viewport={{ once: true }}
      >
        {[
          { label: "Technologies", value: "11+" },
          { label: "Frameworks", value: "5+" }
        ].map((stat, i) => (
          <motion.div key={i} whileHover={{ scale: 1.05 }}>
            <p className="text-2xl md:text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">
              {stat.value}
            </p>
            <p className="text-xs md:text-sm text-purple-300 mt-2">{stat.label}</p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default Tech;
