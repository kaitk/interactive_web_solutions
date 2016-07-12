import React from "react";
import Stats from "./Stats";

const StatsContainer =  React.createClass({
  propTypes:{
    words: React.PropTypes.arrayOf(React.PropTypes.string).isRequired,
    pastInput: React.PropTypes.arrayOf(React.PropTypes.string).isRequired,
    startTime: React.PropTypes.number.isRequired

  },
  correctWords: function() {
    return this.props.pastInput.reduce(
      (correctWords, word, idx) => {
        if(word == this.props.words[idx]) {
          correctWords += 1;
        }
        return correctWords;
      },
    0);
  },

  accuracy: function() {
    let wordsTyped = this.props.pastInput.length;
    if(wordsTyped == 0) {
      return 0;
    }
    return this.correctWords() / wordsTyped;
  },

  wordsPerMinute: function() {
    let now = Math.floor(Date.now(), 1000);
    let minutesPassed = (now - this.props.startTime) / (60 * 60)
    return  this.props.pastInput.length / minutesPassed;
  },

  render: function() {
    return (
      <Stats
        accuracy={this.accuracy()}
        wordsPerMinute={this.wordsPerMinute()}
      />
    );
  }
});

export {StatsContainer as default};
