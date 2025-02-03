import React, { useMemo } from "react";
import { BallCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";

// Function to shuffle an array
const shuffleArray = (array) => {
  let shuffledArray = array.slice(); // Create a copy of the array
  for (let i = shuffledArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
  }
  return shuffledArray;
};

const Tech = () => {
  const isMobile = window.matchMedia("(max-width: 500px)").matches;

  // Shuffle technologies ONCE and store in memory
  const shuffledTechnologies = useMemo(() => shuffleArray(technologies), []);

  return (
    <div className="flex flex-row flex-wrap justify-center gap-10">
      {shuffledTechnologies.map((technology, index) => (
        <div className="w-28 h-28" key={technology.name}>
          {index < 20 ? (
            <BallCanvasMemoized icon={technology.icon} />
          ) : (
            <p className="flex justify-center text-white font-bold">
              {technology.name}
            </p>
          )}
        </div>
      ))}
    </div>
  );
};

// ✅ Memoized version of BallCanvas to avoid unnecessary re-renders
const BallCanvasMemoized = React.memo(BallCanvas);

export default SectionWrapper(Tech, "");
