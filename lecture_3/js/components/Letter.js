import React from "react";

const Letter = (props) => {
  return (
    <span className={"letter " + props.color}>{props.children}</span>
  );
};

Letter.propTypes = {
  children: React.PropTypes.node.isRequired,
  color: React.PropTypes.string.isRequired
};

export { Letter as default };
