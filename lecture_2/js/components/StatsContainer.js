import React from 'react';

const StatsContainer = (props) => {
  return (
    <div className="StatsContainer">
      <div className="StatDiv">Words per minute:</div>
      <div className="StatDiv">{props.stats.wordsPerMinute}</div>
      <div className="StatDiv">Accuracy:</div>
      <div className="StatDiv">{(props.stats.accuracy * 100).toFixed(2)}%</div>
    </div>
  );
};

StatsContainer.propTypes = {
  stats: React.PropTypes.object.isRequired
};

export {StatsContainer as default};
