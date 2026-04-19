import React, { useRef, useState } from "react";
import { FaMusic, FaPause } from "react-icons/fa";
import { motion } from "framer-motion";

const MusicButton = ({ src = "/your-music.mp3" }) => {
  const audioRef = useRef(null);
  const [playing, setPlaying] = useState(false);

  const toggleMusic = () => {
    if (!audioRef.current) return;
    if (playing) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setPlaying(!playing);
  };

  return (
    <motion.div
      className="fixed bottom-6 right-6 z-50"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 1, duration: 0.5 }}
    >
      <motion.button
        onClick={toggleMusic}
        className={`relative group p-4 rounded-full font-semibold transition-all duration-300
                   ${playing 
                     ? 'bg-gradient-to-r from-pink-500 to-red-500' 
                     : 'bg-gradient-to-r from-purple-500 to-violet-600'
                   } text-white shadow-lg hover:shadow-2xl`}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        aria-label={playing ? "Pause music" : "Play music"}
      >
        <motion.div
          animate={{ rotate: playing ? 360 : 0 }}
          transition={{ duration: playing ? 3 : 0, repeat: playing ? Infinity : 0, ease: "linear" }}
        >
          {playing ? <FaPause size={24} /> : <FaMusic size={24} />}
        </motion.div>

        {/* Glow Effect */}
        <div className={`absolute inset-0 rounded-full bg-gradient-to-r 
                       ${playing ? 'from-pink-500 to-red-500' : 'from-purple-500 to-violet-600'}
                       opacity-0 group-hover:opacity-50 blur-lg transition-opacity -z-10`} />
      </motion.button>

      {/* Audio Element */}
      <audio
        ref={audioRef}
        src="./Kendrick Lamar - DNA. (Instrumental).mp3"
        loop
        onEnded={() => setPlaying(false)}
      />
    </motion.div>
  );
};

export default MusicButton;