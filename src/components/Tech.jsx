import React, { memo, useMemo } from "react";
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

// Memoized BallCanvas to prevent unnecessary re-renders
const MemoizedBallCanvas = memo(BallCanvas);

const Tech = () => {
  const isMobile = window.matchMedia("(max-width: 500px)").matches;

  // Shuffle technologies once and limit the number of rendered items
  const shuffledTechnologies = useMemo(() => shuffleArray(technologies), []);
  const limitedTechnologies = useMemo(
    () => (isMobile ? shuffledTechnologies.slice(0, 5) : shuffledTechnologies.slice(0, 10)),
    [isMobile, shuffledTechnologies]
  );

  return (
    <div className="flex flex-row flex-wrap justify-center gap-10">
      {limitedTechnologies.map((technology) => (
        <div className="w-28 h-28" key={technology.name}>
          <MemoizedBallCanvas icon={technology.icon} />
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
