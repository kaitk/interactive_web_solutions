import React from "react";

const TypingContainer = React.createClass({
  getInitialState: () => {
    return {text: ''};
  },
  handleTextChange: function(e) {
    this.setState({text: e.target.value});
  },
  render: function() {
    return (
      <div>
        <input
          type="text"
          className="typing-container"
          placeholder="Type words here..."
          value={this.state.text}
          onChange={this.handleTextChange}
        />
      </div>
    );
  }
});

export {TypingContainer as default};
