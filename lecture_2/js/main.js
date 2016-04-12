import React from "react";
import ReactDOM from "react-dom";
import CommentBox from "./components/CommentBox";

ReactDOM.render(
  React.createElement(CommentBox, {
    comments: [
      {author:'kait', text: 'Comment 1'},
      {author:'ylo', text: 'Comment 2'}
    ]
  }),
  document.getElementById('content')
);
