import { useState, useCallback, useEffect } from "react";
import { KAWAII_MOODS } from "../config/constants";


export const useKawaiiMood = (initialMood = KAWAII_MOODS[0]) => {
  const [mood, setMood] = useState(initialMood);

  const changeMood = useCallback(() => {
    setMood(KAWAII_MOODS[Math.floor(Math.random() * KAWAII_MOODS.length)]);
  }, []);

  return { mood, changeMood };
};

export const useResponsiveSquareSize = () => {
  const [squareSize, setSquareSize] = useState(24);

  useEffect(() => {
    const initialSize = window.innerWidth < 640 ? 16 : 24;
    setSquareSize(initialSize);

    const handleResize = () => {
      setSquareSize(window.innerWidth < 640 ? 16 : 24);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return squareSize;
};
