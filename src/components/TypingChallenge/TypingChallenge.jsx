import React from "react";
import TestLetter from "../TestLetter/TestLetter";
import "./TypingChallenge.css";

const TypingChallenge = ({
  timeRemaining,
  timerStarted,
  testInfo,
  onInputChange,
}) => {
  return (
    <div className="typing-challenge">
      <div className="timer-container">
        <p className="timer">
          00:{timeRemaining >= 10 ? timeRemaining : `0${timeRemaining}`}
        </p>
        <p className="timer-info">
          {!timerStarted && "Start typing to start the test"}
        </p>
      </div>

      <div className="textarea-container">
        <div className="textarea-left">
          <div className="textarea test-paragraph">
            {/*{selectedParagraph} */}
            {testInfo.map((indiviualLetterInfo, index) => {
              return (
                <TestLetter
                  key={index}
                  indiviualLetterInfo={indiviualLetterInfo}
                />
              );
            })}
          </div>
        </div>

        <div className="textarea-right">
          <textarea
            onChange={(e) => onInputChange(e.target.value)}
            className="textarea"
            placeholder="start typing here.."
          ></textarea>
        </div>
      </div>
    </div>
  );
};

export default TypingChallenge;
