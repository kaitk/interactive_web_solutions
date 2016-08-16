'use strict';

jest.unmock('../Stats');

import React from 'react';
import ReactDOM from 'react-dom';
import TestUtils from 'react-addons-test-utils';
import Stats from '../Stats';

describe('Stats', () => {

  let buildStats = (accuracy, wordsPerMinute) => {
    let renderer = TestUtils.createRenderer();
    renderer.render(<Stats accuracy={accuracy} wordsPerMinute={wordsPerMinute}/>)
    return renderer.getRenderOutput();
  }

  it('displays info correctly', () => {
    let stats = buildStats(0.43254, 2.45653);
    expect(stats.props.children.length).toBe(4);
    let wordsPerMinute = stats.props.children[1];
    let accuracy = stats.props.children[3];

    expect(wordsPerMinute.props.children).toEqual("2.46");
    expect(accuracy.props.children).toEqual(["43.25", "%"]);
  });

});
