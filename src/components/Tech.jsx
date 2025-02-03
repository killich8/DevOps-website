import React, { useState, useEffect, useMemo } from "react";
import { BallCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";

// Function to shuffle an array
const shuffleArray = (array) => {
  let shuffledArray = [...array]; // Create a copy of the array
  for (let i = shuffledArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
  }
  return shuffledArray;
};

const Tech = () => {
  const [isMobile, setIsMobile] = useState(false);

  // Effect to detect screen width
  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 500px)");
    setIsMobile(mediaQuery.matches);

    const handleResize = () => setIsMobile(mediaQuery.matches);
    mediaQuery.addEventListener("change", handleResize);

    return () => mediaQuery.removeEventListener("change", handleResize);
  }, []);

  // Shuffle technologies only once using useMemo
  const shuffledTechnologies = useMemo(() => shuffleArray(technologies), []);

  return (
    <div className="flex flex-row flex-wrap justify-center gap-10">
      {shuffledTechnologies.slice(0, isMobile ? 5 : shuffledTechnologies.length).map((technology) => (
        <div className="w-28 h-28" key={technology.name}>
          <BallCanvas icon={technology.icon} />
          {isMobile && (
            <p className="flex justify-center text-white font-bold">
              {technology.name}
            </p>
          )}
        </div>
      ))}
    </div>
  );
};

export default SectionWrapper(Tech, "");
