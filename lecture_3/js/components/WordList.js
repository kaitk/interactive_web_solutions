import React from "react";

const WordList = (props) => {
  return (
    <div className="words-outer">
      <div className="words">
        {props.children}
      </div>
    </div>
  );
};
 WordList.propTypes = {
  children: React.PropTypes.node.isRequired
};

export { WordList as default };
