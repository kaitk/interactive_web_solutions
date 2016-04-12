import React from "react";
import Word from "./Word";

const WordListContainer = (props) => {
  return (
    <div className="words-outer">
      <div className="words">
        { props.words.map((word, i) => { return <Word key={i} word={word} />; }) }
      </div>
    </div>
  );
};
 WordListContainer.propTypes = {
  words: React.PropTypes.array.isRequired
};

export { WordListContainer as default };
