import React from "react";
import ChallengeDetailsCard from "../ChallengeDetailsCard/ChallengeDetailsCard";
import TypingChallenge from "../TypingChallenge/TypingChallenge";
import "./TypingChallengeContainer.css";

const TypingChallengeContainer = ({
  selectedParagraph,
  words,
  characters,
  wpm,
  timeRemaining,
  timeStarted,
  testInfo,
  onInputChange,
}) => {
  return (
    <div className="typing-challenge-container">
      {/* Details Section */}
      <div className="details-container">
        {/* words typed */}
        <ChallengeDetailsCard cardName="words" cardValue={words} />

        {/* characters typed */}
        <ChallengeDetailsCard cardName="characters" cardValue={characters} />

        {/* Speed */}
        <ChallengeDetailsCard cardName="speed" cardValue={wpm} />
      </div>

      {/* REAL challenge Section */}
      <div className="typewritter-container">
        <TypingChallenge
          onInputChange={onInputChange}
          testInfo={testInfo}
          timeRemaining={timeRemaining}
          timeStarted={timeStarted}
          selectedParagraph={selectedParagraph}
        />
      </div>
    </div>
  );
};

export default TypingChallengeContainer;
