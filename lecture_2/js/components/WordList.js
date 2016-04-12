import React from "react";
import Word from "./Word";

const WordList = (props) => {
  return (
    <div className="words-outer">
      <div className="words">
        { props.words.map((word, i) => { return <Word key={i} word={word} />; }) }
      </div>
    </div>
  );
};

 WordList.propTypes= {
  words: React.PropTypes.array.isRequired
};

export { WordList as default };
