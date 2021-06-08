import React from "react";
import "./TestLetter.css";

const TestLetter = ({ indiviualLetterInfo }) => {
  const { status } = indiviualLetterInfo;

  const statusClass = {
    correct: "test-letter-correct",
    incorrect: "test-letter-incorrect",
    notAttempted: "test-letter-not-attempted",
  }[status];

  return (
    <span className={`test-letter ${statusClass}`}>
      {indiviualLetterInfo.testLetter}
    </span>
  );
};

export default TestLetter;
