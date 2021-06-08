import React from "react";
import ChallengeSection from "../ChallengeSection/ChallengeSection";
import Footer from "../Footer/Footer";
import Landing from "../Landing/Landing";
import Nav from "../Nav/Nav";
import { SAMPLE_PARAGRAPHS } from "./../../data/sampleParagraphs";
import "./App.css";

const TotalTime = 60;
// const serviceUrl = "http://metaphorpsum.com/paragraphs/1/9";
const defaultState = {
  selectedParagraph: "",
  timerStarted: false,
  timeRemaining: TotalTime,
  words: 0,
  characters: 0,
  wpm: 0,
  testInfo: [],
};

class App extends React.Component {
  state = defaultState;

  fetchNewParagraphFallback = () => {
    const data =
      SAMPLE_PARAGRAPHS[Math.floor(Math.random() * SAMPLE_PARAGRAPHS.length)];

    const selectedParagraphArray = data.split("");
    const testInfo = selectedParagraphArray.map((selectedLetter) => {
      return {
        testLetter: selectedLetter,
        status: "notAttempted",
      };
    });

    // Update the testInfo in state
    this.setState({
      ...defaultState,
      selectedParagraph: data,
      testInfo,
    });
  };

  // fetchNewparagraph = () => {
  //   fetch(serviceUrl)
  //     .then((response) => response.text())
  //     .then((data) => {
  //       const selectedParagraphArray = data.split("");

  //       const testInfo = selectedParagraphArray.map((selectedLetter) => {
  //         return {
  //           testLetter: selectedLetter,
  //           status: "notAttempted",
  //         };
  //       });
  //       this.setState({ ...defaultState, testInfo, selectedParagraph: data });
  //     });
  // };

  componentDidMount() {
    this.fetchNewParagraphFallback();
  }

  startTimer = () => {
    this.setState({ timerStarted: true });
    const timer = setInterval(() => {
      if (this.state.timeRemaining > 0) {
        //changing wpm
        const timeSpent = TotalTime - this.state.timeRemaining;

        const wpm =
          timeSpent > 0 ? (this.state.words / timeSpent) * TotalTime : 0;
        this.setState({
          timeRemaining: this.state.timeRemaining - 1,
          wpm: parseInt(wpm),
        });
      } else {
        clearInterval(timer);
      }
    }, 1000);
  };

  startAgain = () => this.fetchNewParagraphFallback();

  handleUserInput = (inputValue) => {
    if (!this.state.timerStarted) this.startTimer();

    /**
     * 1. Handle Underflow case
     *     -> all the characters should be shown as not-attempted
     * 2.Handle the overflow case
     *     -> early exit
     * 3.Handle the backspace case
     *     -> Mark the [index + 1]  element as not-attempted  (irrespective of whether index is less than zero)
     *        But, dont foreget to check for the overflow case  here (index + 1 -> out of bound, when the index === length - 1)
     * 4.Update the status in the test info
     *    -> Find out the last character in the input value and its index
     *    -> Check if the character at the same index in  testInfo(state) matches
     *    -> yes -> correct else -> incorrect
     * 5. irrespective of the case the characters the words and the speed in wpm should be updated
     *
     * */

    const characters = inputValue.length;
    const words = inputValue.split(" ").length;
    const index = characters - 1;

    if (index < 0) {
      this.setState({
        testInfo: [
          {
            testLetter: this.state.testInfo[0].testLetter,
            status: "notAttempted",
          },
          ...this.state.testInfo.slice(1),
        ],
        characters,
        words,
      });
      return;
    }

    if (index >= this.state.selectedParagraph.length) {
      this.setState({ characters, words });
      this.setState({ timeRemaining: 0 });
      return;
    }

    //Make a copy of tesInfo
    const testInfo = this.state.testInfo;
    if (!(index === this.state.selectedParagraph.length - 1)) {
      testInfo[index + 1].status = "notAttempted";
    }

    //check for correct typed input
    const isCorrect = inputValue[index] === testInfo[index].testLetter;

    //Update the testInfo
    testInfo[index].status = isCorrect ? "correct" : "incorrect";

    //Update the state
    this.setState({
      testInfo,
      words,
      characters,
    });
  };

  render() {
    return (
      <div className="app">
        {/* Nav Section  */}
        <Nav />

        {/* Landing Page  */}
        <Landing />

        {/* challenge Section  */}
        <ChallengeSection
          selectedParagraph={this.state.selectedParagraph}
          words={this.state.words}
          characters={this.state.characters}
          wpm={this.state.wpm}
          timeRemaining={this.state.timeRemaining}
          timerStarted={this.state.timerStarted}
          testInfo={this.state.testInfo}
          onInputChange={this.handleUserInput}
          startAgain={this.startAgain}
        />

        {/* Footer */}
        <Footer />
      </div>
    );
  }
}

export default App;
