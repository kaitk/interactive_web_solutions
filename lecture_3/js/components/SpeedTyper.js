import React from "react";
import StatsContainer from "./StatsContainer";
import WordListContainer from "./WordListContainer";
import TypingContainer from "./TypingContainer";

const SpeedTyper = (props) => {
  return (
    <div className="SpeedTyper">
      <div className="wordsbox">
        <StatsContainer
          words={props.words}
          pastInput={props.pastInput}
          startTime={props.startTime}
        />
        <WordListContainer
          words={props.words}
          pastInput={props.pastInput}
          currentWord={props.currentWord}
        />
        <TypingContainer
          currentWord={props.currentWord}
          onTextChange={props.onTextChange}
        />
      </div>
    </div>
  );
};

SpeedTyper.propTypes = {
  startTime: React.PropTypes.number.isRequired,
  words: React.PropTypes.arrayOf(React.PropTypes.string),
  pastInput: React.PropTypes.arrayOf(React.PropTypes.string),
  currentWord: React.PropTypes.string,
  onTextChange: React.PropTypes.func
};

export { SpeedTyper as default };
