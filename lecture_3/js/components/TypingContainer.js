import React from "react";

const TypingContainer = (props) => {
  return (
    <input
      type="text"
      className="typing-container"
      placeholder="Type words here..."
      value={props.currentWord}
      onChange={(e) => { props.onTextChange(e.target.value) }}
    />
  );
}

TypingContainer.propTypes = {
  currentWord: React.PropTypes.string.isRequired,
  onTextChange: React.PropTypes.func.isRequired
};

export {TypingContainer as default};
