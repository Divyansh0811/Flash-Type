import React from "react";
import TestContainer from "../TestContainer/TestContainer";
import "./ChallengeSection.css";

const ChallengeSection = ({
  selectedParagraph,
  words,
  characters,
  wpm,
  timeRemaining,
  timerStarted,
  testInfo,
  onInputChange,
  startAgain,
}) => {
  return (
    <div className="challenge-section-container">
      <h1 data-aos="fade-down" className="challenge-section-header">
        Take a Speed test now!!
      </h1>
      <TestContainer
        selectedParagraph={selectedParagraph}
        words={words}
        characters={characters}
        wpm={wpm}
        timeRemaining={timeRemaining}
        timerStarted={timerStarted}
        testInfo={testInfo}
        onInputChange={onInputChange}
        startAgain={startAgain}
      />
    </div>
  );
};

export default ChallengeSection;
