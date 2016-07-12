import React from "react";
import SpeedTyper from "./SpeedTyper";

const SpeedTyperContainer = React.createClass({

  getDefaultProps: function() {
    return {
      startTime: Math.floor(Date.now(), 1000),
      words: ["the", "grey", "fox", "jumps", "over", "the", "lazy", "dog", "while", "being" ,"sober"]
    }
  },

  getInitialState: function() {
    return {
      pastInput: [],
      currentWord: ""
    };
  },

  handleTextChange: function(text) {
    let pastInput = this.state.pastInput;
    let lastWord = this.props.words[pastInput.length];
    let typedWord = text.trim();
    if(text[text.length - 1] == " " && typedWord) {
      pastInput.push(typedWord);
      this.setState({ currentWord: "", pastInput: pastInput });
    } else {
      this.setState({ currentWord: typedWord });
    }
  },

  render: function() {
    return (
      <SpeedTyper
        startTime={this.props.startTime}
        words={this.props.words}
        pastInput={this.state.pastInput}
        currentWord={this.state.currentWord}
        onTextChange={this.handleTextChange}
      />
    )
  }
});

export { SpeedTyperContainer as default };
