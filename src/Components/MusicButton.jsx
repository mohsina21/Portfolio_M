import React, { useRef, useState } from "react";
import { FaMusic, FaPause } from "react-icons/fa";

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
    <div className="fixed bottom-6 right-6 z-50">
      <button
        onClick={toggleMusic}
        className={`bg-purple-600 hover:bg-purple-800 text-white p-4 rounded-full shadow-lg transition-all duration-300 focus:outline-none`}
        aria-label={playing ? "Pause music" : "Play music"}
      >
        {playing ? <FaPause size={24} /> : <FaMusic size={24} />}
      </button>
      <audio ref={audioRef} src="./Kendrick Lamar - DNA. (Instrumental).mp3" loop />
    </div>
  );
};

export default MusicButton;