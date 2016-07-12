'use strict';

jest.unmock('../StatsContainer');

import React from 'react';
import ReactDOM from 'react-dom';
import TestUtils from 'react-addons-test-utils';
import StatsContainer from '../StatsContainer';
import Stats from '../Stats';

Stats.mockImplementation(() => <div />)

describe('StatsContainer', () => {

  var buildStatsContainer = (words, pastInput, startTime) => {
    let renderer = TestUtils.createRenderer();
    renderer.render(
      <StatsContainer words={words}
                       pastInput={pastInput}
                       startTime={startTime}/>
    )
    return renderer.getRenderOutput();
  }

  it('displays info correctly', () => {
    let now = new Date("2016","01","01").getTime();
    Date.now = jest.genMockFunction().mockReturnValue(now);

    let words = ["az", "cb", "ipsu"];
    let pastInput = ["az", "c"];
    let startTime =  Math.floor(now - (1000 * 60), 1000);
    let stats = buildStatsContainer(words, pastInput, startTime);
    expect(stats.props.accuracy).toBe(0.5);
    expect(stats.props.wordsPerMinute).toBe(2);
  });

});
