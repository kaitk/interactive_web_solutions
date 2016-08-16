'use strict';

jest.unmock('../SpeedTyper');

import React from 'react';
import ReactDOM from 'react-dom';
import TestUtils from 'react-addons-test-utils';
import SpeedTyper from '../SpeedTyper';
import StatsContainer from '../StatsContainer';
import WordListContainer from "../WordListContainer";
import TypingContainer from "../TypingContainer";


describe('SpeedTyper', () => {

/*
startTime: React.PropTypes.number.isRequired,
words: React.PropTypes.arrayOf(React.PropTypes.string),
pastInput: React.PropTypes.arrayOf(React.PropTypes.string),
currentWord: React.PropTypes.string,
onTextChange: React.PropTypes.func
*/
  let buildSpeedTyper = (() => {
    let startTime = new Date().getTime();
    let words = ["uno", "dos", "tres"];
    let pastInput = ["uno"];
    let currentWord = "do";
    let onTextChange = function() {};

    let renderer = TestUtils.createRenderer();

    renderer.render(
      <SpeedTyper
        startTime={startTime}
        words={words}
        pastInput={pastInput}
        currentWord={currentWord}
        onTextChange={onTextChange}
      />

    );
    return renderer.getRenderOutput();
  });

  it('renders the stats container', () => {
    let speedTyper = buildSpeedTyper()
    let container = speedTyper.props.children;
    let statsContainer = container.props.children[0];
    expect(statsContainer.type).toBe(StatsContainer);
  });

  it('renders the wordlist', () => {
    let speedTyper = buildSpeedTyper()
    let container = speedTyper.props.children;
    let wordListContainer = container.props.children[1];
    expect(wordListContainer.type).toBe(WordListContainer);
  });

  it('renders the typing container', () => {
    let speedTyper = buildSpeedTyper()
    let container = speedTyper.props.children;
    let typingContainer = container.props.children[2];
    expect(typingContainer.type).toBe(TypingContainer);
  });
});
