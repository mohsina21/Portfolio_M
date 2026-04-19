import React from "react";
import { FaGithub, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";
import { motion } from "framer-motion";

const ICON_COMPONENTS = {
  GitHub: FaGithub,
  Twitter: FaTwitter,
  LinkedIn: FaLinkedin,
  Instagram: FaInstagram,
};

const SocialLinks = ({ links, gap = "gap-4 sm:gap-6" }) => {
  return (
    <motion.div
      className={`flex flex-wrap justify-center ${gap}`}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.8 }}
    >
      {links.map((link) => {
        const IconComponent = ICON_COMPONENTS[link.name];
        return (
          <motion.a
            key={link.id}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative p-3 sm:p-4 rounded-xl transition-all duration-300
                       border border-purple-400/60 bg-purple-400/10 backdrop-blur-sm
                       hover:border-violet-300 hover:bg-purple-500/20 hover:shadow-lg 
                       hover:shadow-purple-500/30"
            whileHover={{ scale: 1.15, rotate: 5 }}
            whileTap={{ scale: 0.95 }}
          >
            {IconComponent && <IconComponent size={22} className="text-purple-300 group-hover:text-white transition-colors" />}
            {/* Glow effect */}
            <div className="absolute inset-0 rounded-xl bg-purple-500/20 blur-lg opacity-0 group-hover:opacity-100 transition-opacity -z-10" />
          </motion.a>
        );
      })}
    </motion.div>
  );
};

export default SocialLinks;
