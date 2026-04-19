import React from "react";
import { motion } from "framer-motion";
import Tilt from "react-parallax-tilt";
import { PROJECTS } from "../config/constants";
import { FaExternalLinkAlt } from "react-icons/fa";

const Projects = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <div className="min-h-screen w-full flex flex-col items-center justify-center py-16 md:py-24 px-4 md:px-8 relative">
      {/* Section Heading */}
      <motion.h1
        className="text-4xl sm:text-5xl md:text-6xl font-bold mb-12 md:mb-20 text-center tracking-tight"
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
        Featured Projects
      </motion.h1>

      {/* Projects Grid */}
      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10 w-full max-w-6xl"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {PROJECTS.map((project, index) => (
          <motion.div
            key={index}
            variants={itemVariants}
          >
            <Tilt
              tiltMaxAngleX={6}
              tiltMaxAngleY={6}
              glareEnable={true}
              glareMaxOpacity={0.15}
              className="h-full"
            >
              <motion.div
                className="group h-full bg-gradient-to-br from-purple-900/30 via-black/20 to-violet-900/20 
                           backdrop-blur-xl rounded-2xl md:rounded-3xl overflow-hidden
                           border border-purple-500/30 hover:border-violet-400/60
                           shadow-lg hover:shadow-2xl hover:shadow-purple-500/20
                           transition-all duration-500 flex flex-col"
                whileHover={{ 
                  borderColor: "rgba(124, 58, 202, 0.8)",
                  y: -8 
                }}
              >
                {/* Image Container */}
                <div className="relative overflow-hidden h-48 md:h-56 bg-purple-900/30">
                  <motion.img
                    src={project.img}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    whileHover={{ scale: 1.15 }}
                  />
                  {/* Overlay Gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-60" />
                </div>

                {/* Content Container */}
                <div className="flex-1 p-6 md:p-7 flex flex-col">
                  {/* Title */}
                  <motion.h2
                    className="text-xl md:text-2xl font-bold text-transparent bg-clip-text 
                               bg-gradient-to-r from-violet-300 to-pink-300 mb-3"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 0.1 }}
                  >
                    {project.title}
                  </motion.h2>

                  {/* Description */}
                  <p className="text-sm md:text-base text-gray-300 leading-relaxed mb-4 flex-1">
                    {project.desc}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-5">
                    {project.tags.map((tag, i) => (
                      <motion.span
                        key={i}
                        className="px-2 py-1 text-xs md:text-sm rounded-full 
                                 bg-purple-500/20 border border-purple-400/30
                                 text-purple-300 hover:bg-purple-500/40 transition-colors"
                        whileHover={{ scale: 1.05 }}
                      >
                        {tag}
                      </motion.span>
                    ))}
                  </div>

                  {/* CTA Button */}
                  <motion.a
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group/btn inline-flex items-center justify-center gap-2
                             bg-gradient-to-r from-purple-500 to-violet-600 
                             text-white px-5 py-3 rounded-xl font-semibold
                             shadow-lg shadow-purple-500/30 hover:shadow-purple-500/60
                             transition-all duration-300 w-fit"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <span>View Project</span>
                    <FaExternalLinkAlt className="group-hover/btn:translate-x-1 transition-transform" />
                  </motion.a>
                </div>
              </motion.div>
            </Tilt>
          </motion.div>
        ))}
      </motion.div>

      {/* CTA Section */}
      <motion.div
        className="mt-16 md:mt-24 text-center"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
        viewport={{ once: true }}
      >
        <p className="text-gray-300 mb-6">Want to collaborate or see more?</p>
        <motion.a
          href="https://www.linkedin.com/in/mohsina-parveen-577367203/"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex gap-2 px-8 py-4 rounded-full 
                   bg-gradient-to-r from-purple-500 to-pink-500
                   text-white font-semibold shadow-lg shadow-purple-500/40
                   hover:shadow-purple-500/60 transition-all duration-300"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Get In Touch
        </motion.a>
      </motion.div>
    </div>
  );
};

export default Projects;
