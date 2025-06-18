import React, { useState } from "react";
import { Cat } from "react-kawaii";

const About = () => {
  const [mood, setMood] = useState("blissful");

  const changeMood = () => {
    const moods = ["blissful", "excited", "happy"];
    setMood(moods[Math.floor(Math.random() * moods.length)]);
  };

  return (
    <div className="w-full px-4 py-20 sm:py-32 flex flex-col items-center text-gray-100 text-center overflow-visible">
      <h2 className="text-4xl sm:text-6xl font-bold font-orbitron drop-shadow-lg p-2 sm:p-5 mb-4 sm:mb-6">
        About Me
      </h2>

      <div
        className="relative z-10 p-6 sm:p-10 bg-gradient-to-br from-purple-900/60 to-black/60 backdrop-blur-md 
                   rounded-2xl sm:rounded-3xl shadow-xl sm:shadow-2xl shadow-violet-500/30 
                   border border-purple-500/50 sm:border-2 sm:border-purple-500/60 
                   w-full max-w-full sm:max-w-4xl transition-all transform 
                   hover:shadow-violet-500/60 hover:scale-[1.02] sm:hover:scale-105 
                   hover:border-violet-400 flex flex-col sm:flex-row items-center 
                   space-y-6 sm:space-y-0 sm:space-x-10 min-h-[450px]"
        onMouseOver={changeMood}
      >
        <div className="cursor-pointer transform transition-transform hover:rotate-6">
          <Cat size={200} className="sm:size-[300px]" mood={mood} color="#c084fc" />
        </div>

        <div className="flex-1 text-center sm:text-left px-2 sm:p-6">
          <p className="text-base sm:text-lg leading-relaxed text-gray-100">
            Hi! I'm{" "}
            <span className="font-bold text-violet-400">Mohsina Parveen</span>, a 
            Front-End Developer and a dedicated student with a keen interest in crafting
            intuitive and visually appealing web experiences. I enjoy transforming ideas
            into interactive, user-friendly designs using technologies like HTML, CSS,
            JavaScript, and React. I'm always eager to learn new tech and improve my skills.
            Feel free to check out my work — let’s connect!
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
