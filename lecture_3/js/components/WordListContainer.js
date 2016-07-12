import React from "react";
import WordList from "./WordList";
import Word from "./Word";
import Letter from "./Letter";

const WordListContainer = React.createClass({
  propTypes: {
    words: React.PropTypes.arrayOf(React.PropTypes.string).isRequired,
    pastInput: React.PropTypes.arrayOf(React.PropTypes.string).isRequired,
    currentWord: React.PropTypes.string.isRequired
  },

  getColor: function(correct, typed) {
    if(!typed) {
      return "none";
    }
    return correct == typed ? "green" : "red";
  },

  buildLetters: function(word) {
    return word.split('').map((letter, idx) => {
       let match = this.props.currentWord[idx];
       return <Letter key={idx} color={this.getColor(letter, match)}>{letter}</Letter>;
    })
  },

  buildWords: function() {
    {
      return this.props.words.map((word, idx) => {
        if(this.props.pastInput.length == idx) {
          return this.buildLetters(word);
        }
        let match = this.props.pastInput[idx];
        return <Word key={idx} color={this.getColor(word, match)}>{word}</Word>;
      })
    }
  },

  render: function() {
    return (
      <WordList>{this.buildWords()}</WordList>
    )
  }
});

export { WordListContainer as default };
