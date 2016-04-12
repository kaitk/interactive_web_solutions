import React from "react";

const Word = (props) => {
  return (
    <div className="word">{props.word}</div>
  );
};

Word.propTypes= {
  word: React.PropTypes.string.isRequired
};

export { Word as default };
