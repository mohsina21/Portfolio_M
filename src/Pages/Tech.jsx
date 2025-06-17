import React, { useState } from "react";
import { Browser } from "react-kawaii";
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaNodeJs,
  FaGitAlt,
  FaNpm,
} from "react-icons/fa";
import { SiFigma, SiTailwindcss } from "react-icons/si";
import Tilt from "react-parallax-tilt";

// Your tech stack icons + names
const techStack = [
  { icon: <FaHtml5 className="text-orange-500" />, name: "HTML5" },
  { icon: <FaCss3Alt className="text-blue-500" />, name: "CSS3" },
  { icon: <FaJs className="text-yellow-400" />, name: "JavaScript" },
  { icon: <FaReact className="text-blue-400" />, name: "React" },
  { icon: <FaNodeJs className="text-green-500" />, name: "Node.js" },
  { icon: <FaGitAlt className="text-red-500" />, name: "Git" },
  { icon: <SiFigma className="text-pink-500" />, name: "Figma" },
  { icon: <FaNpm className="text-red-500" />, name: "NPM" },
  { icon: <SiTailwindcss className="text-blue-400" />, name: "Tailwind CSS" },
 ];

const Tech = () => {
  const [mood, setMood] = useState("blissful");

  const changeMood = () => {
    const moods = ["blissful", "excited", "happy"];
    setMood(moods[Math.floor(Math.random() * moods.length)]);
  };

  return (
    <section className="w-full min-h-screen flex flex-col items-center -mt-5 justify-center relative text-white text-center overflow-x-hidden p-4">
      {/* Heading */}
      <h2 className="text-6xl  text-white drop-shadow-lg p-5 sm:block hidden font-orbitron font-bold mb-6">
        Tech Stack
      </h2>

      {/* Tilted Card */}
      <Tilt
        tiltMaxAngleX={6}
        tiltMaxAngleY={6}
        glareEnable={true}
        glareMaxOpacity={0.1}
        className="flex justify-center"
      >
        <div
          className="relative z-10 p-6 bg-purple-800/30 backdrop-blur-md rounded-2xl shadow-lg 
                     shadow-violet-500/30 border border-purple-500/50 max-w-4xl 
                     transition-all transform ease-in-out duration-500 
                     hover:shadow-violet-500/80 hover:border-violet-400 
                     hover:scale-105 flex flex-col sm:flex-row items-center space-y-6 sm:space-y-0 sm:space-x-10 justify-center "
          onMouseOver={changeMood}
        >
          {/* Cute Browser Buddy */}
          <div className="cursor-pointer">
            <Browser size={200} mood={mood} color="#c084fc" />
          </div>

          {/* Icon Grid */}
          <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-6 sm:gap-8 justify-center items-center">
            {techStack.map((tech, index) => (
              <div
                key={index}
                className="flex flex-col items-center text-white text-lg transition-all transform ease-in-out duration-500
                           hover:scale-125 hover:drop-shadow-[0_0_15px_#c084fc]"
              >
                <div className="text-4xl sm:text-5xl">{tech.icon}</div>
                <p className="text-xs sm:text-sm mt-2">{tech.name}</p>
              </div>
            ))}
          </div>
        </div>
      </Tilt>
    </section>
  );
};

export default Tech;
