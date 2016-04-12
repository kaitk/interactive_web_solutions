import React from "react";
import WordList from "./WordList";
import TypingArea from "./TypingArea";

const SpeedTyper = React.createClass({

  getDefaultProps: function() {
    return {
      words: ["the", "grey", "fox", "jumps", "over", "the", "lazy", "dog", "while", "being" ,"sober"],
    }
  },

  render: function() {
    /* <!-- TODO stats --> */
    return (
      <div className="SpeedTyper">
        <div className="wordsbox">
          <div className="StatsContainer">
            <div className="StatDiv">Words per minute: </div>
            <div className="StatDiv">30</div>
          </div>
          <WordList words={this.props.words}/>
        <TypingArea />
        </div>
      </div>
    );
  }
});

export { SpeedTyper as default };
