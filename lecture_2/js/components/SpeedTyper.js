import React from "react";
import StatsContainer from "./StatsContainer";
import WordListContainer from "./WordListContainer";
import TypingContainer from "./TypingContainer";

const SpeedTyper = React.createClass({

  getDefaultProps: function() {
    return {
      stats: {
        accuracy: 0.533416,
        wordsPerMinute: 25
      },
      words: ["the", "grey", "fox", "jumps", "over", "the", "lazy", "dog", "while", "being" ,"sober"],
    }
  },

  render: function() {
    return (
      <div className="SpeedTyper">
        <div className="wordsbox">
          <StatsContainer stats={this.props.stats}/>
          <WordListContainer words={this.props.words}/>
        <TypingContainer />
        </div>
      </div>
    );
  }
});

export { SpeedTyper as default };
