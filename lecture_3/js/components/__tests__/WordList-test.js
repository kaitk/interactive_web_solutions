'use strict';

jest.unmock('../WordList');

import React from 'react';
import ReactDOM from 'react-dom';
import TestUtils from 'react-addons-test-utils';
import WordList from '../WordList';

describe('WordList', () => {

  var buildWordList = ((children) => {
    let renderer = TestUtils.createRenderer();
    renderer.render(
      <WordList >{children}</WordList>
    );
    return renderer.getRenderOutput();
  });

  it('renders the children', () => {
    let wordList = buildWordList("midagi")
    let children = wordList.props.children.props.children;
    expect(children).toEqual('midagi');
  });
});
