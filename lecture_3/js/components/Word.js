import React from "react";

const Word = (props) => {
  return (
    <div className={'word ' + props.color}>{props.children}</div>
  );
};

Word.propTypes = {
  children: React.PropTypes.node.isRequired,
  color: React.PropTypes.string.isRequired
};

export { Word as default };
