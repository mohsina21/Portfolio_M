import React, { useState } from "react";
import { Cat } from "react-kawaii";

const About = () => {
  const [mood, setMood] = useState("blissful");

  const changeMood = () => {
    const moods = ["blissful", "excited", "happy"];
    setMood(moods[Math.floor(Math.random() * moods.length)]);
  };

  return (
    <div className="w-full py-32 -mt-10 -pt-6 flex flex-col items-center text-gray-100 text-center overflow-visible">
      <h2 className="text-6xl font-bold font-orbitron drop-shadow-lg p-5 mb-6">
        About Me
      </h2>

      <div
        className="relative z-10 p-10 bg-gradient-to-br from-purple-900/60 to-black/60 backdrop-blur-md rounded-3xl 
                   shadow-2xl shadow-violet-500/30 border-2 border-purple-500/60 
                   max-w-full sm:max-w-4xl transition-all transform hover:shadow-violet-500/60 hover:scale-105 hover:border-violet-400 
                   flex flex-col sm:flex-row items-center space-y-6 sm:space-y-0 sm:space-x-10 min-h-[500px]"
        onMouseOver={changeMood}
      >
        <div className="cursor-pointer mb-6 sm:mb-0 transform transition-transform hover:rotate-6">
          <Cat size={300} mood={mood} color="#c084fc" />
        </div>

        <div className="flex-1 text-center sm:text-left p-6">
          <p className="text-lg sm:text-xl text-gray-100 leading-relaxed mb-6">
            Hi! I'm <span className="font-bold text-violet-400">
            Mohsina Parveen</span>, a passionate Front-End Developer and a dedicated student with a keen
            interest in crafting intuitive and visually appealing web experiences.
            I enjoy transforming ideas into interactive, user-friendly designs
            using technologies like HTML, CSS, JavaScript, and React. I'm always
            eager to learn new technologies and improve my coding abilities. Feel
            free to check out my work, and let's connect! 
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
