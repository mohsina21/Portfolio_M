import React from "react";
import { FaGithub, FaLinkedin, FaXTwitter, FaEnvelope } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="bg-purple-900/30 backdrop-blur-md py-6 px-4 text-center text-purple-300 mt-10 shadow-inner shadow-purple-900/40">
      <div className="flex justify-center items-center gap-4 sm:gap-6 mb-4 flex-wrap">
        <a
          href="mailto:mohsinaparveen1418@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-white transition-colors duration-300"
        >
          <FaEnvelope size={22} />
        </a>
        <a
          href="https://github.com/mohsina21"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-white transition-colors duration-300"
        >
          <FaGithub size={22} />
        </a>
        <a
          href="https://twitter.com/notmohsina"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-white transition-colors duration-300"
        >
          <FaXTwitter size={22} />
        </a>
        <a
          href="https://www.linkedin.com/in/mohsina-parveen-577367203/"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-white transition-colors duration-300"
        >
          <FaLinkedin size={22} />
        </a>
      </div>

      <p className="text-xs sm:text-sm font-medium tracking-wide leading-snug">
        Made with 💜 by{" "}
        <span className="text-purple-400 font-semibold">Mohsina</span> © 2025
      </p>
    </footer>
  );
};

export default Footer;
