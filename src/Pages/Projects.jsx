import React from "react";
import { motion } from "framer-motion";
import Tilt from "react-parallax-tilt";

const projects = [
  {
    img: "/Flow4Life.png",
    title: "Flow4Life",
    desc: "Flow4Life is a smart blood donation platform with real-time alerts and location-based matching to help save lives faster.",
    url:"https://flow4life.vercel.app/"
  },
  {
    img: "/potterPedia.png",
    title: "DailyProphet",
    desc: "A magical encyclopedia for Harry Potter fans! Explore detailed information about characters, houses, and the wizarding world.",
    url: "https://dailyprophetonline.vercel.app/",
  },
  {
    img: "/ShelfMate.png",
    title: "ShelfMate",
    desc: "Shelfmate is a web app that provides personalized book recommendations based on your preferences and interests.",
    url: "https://shelf-mate-ten.vercel.app/",
  },
  {
    img: "/FashionGuide.png",
    title: "FashionGuide",
    desc: "Your ultimate style companion! Discover the latest fashion trends, styling tips, and outfit inspirations.",
    url: "https://fashion-guide.vercel.app/",
  },
];

const Projects = () => {
  return (
    <div className="min-h-screen w-full flex flex-col items-center justify-center py-16 px-4 sm:px-6 relative">
      <h1 className="text-4xl sm:text-5xl text-white mb-10 text-center drop-shadow-lg font-orbitron font-bold">
        My Projects
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 sm:gap-10 w-full max-w-5xl">
        {projects.map((project, index) => (
          <div key={index} className="w-full">
            <Tilt
              tiltMaxAngleX={5}
              tiltMaxAngleY={5}
              glareEnable={true}
              glareMaxOpacity={0.2}
              className="w-full"
            >
              <motion.div
                className="border border-purple-400/30 bg-purple-800/20 backdrop-blur-xl p-5 sm:p-6 rounded-2xl shadow-xl text-white text-center relative overflow-hidden hover:border-violet-300 hover:shadow-violet-500/30 transition-all duration-200"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 200 }}
              >
                <img
                  src={project.img}
                  alt={project.title}
                  className="w-full h-44 sm:h-52 object-cover rounded-xl mb-4 shadow-md shadow-purple-500/30"
                />
                <h2 className="text-xl sm:text-2xl font-semibold text-violet-300">
                  {project.title}
                </h2>
                <p className="text-sm sm:text-base mt-2 text-white/90 px-2">
                  {project.desc}
                </p>

                <a
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 inline-block bg-gradient-to-r from-purple-400 to-purple-600 text-white px-3 py-2 rounded-lg shadow-md hover:scale-105 transition-transform hover:shadow-pink-500/40 text-sm sm:text-base"
                >
                  Visit Project
                </a>
              </motion.div>
            </Tilt>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
