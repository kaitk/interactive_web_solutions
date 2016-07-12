import React from 'react';

const Stats = (props) => {
  return (
    <div className="StatsContainer">
      <div className="StatDiv">Words per minute:</div>
      <div className="StatDiv">{(props.wordsPerMinute).toFixed(2)}</div>
      <div className="StatDiv">Accuracy:</div>
      <div className="StatDiv">{(props.accuracy * 100).toFixed(2)}%</div>
    </div>
  );
};

Stats.propTypes = {
  accuracy: React.PropTypes.number.isRequired,
  wordsPerMinute: React.PropTypes.number.isRequired
};

export {Stats as default};
