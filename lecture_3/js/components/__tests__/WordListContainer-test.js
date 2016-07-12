'use strict';

jest.unmock('../WordListContainer');

import React from 'react';
import ReactDOM from 'react-dom';
import TestUtils from 'react-addons-test-utils';
import WordListContainer from '../WordListContainer';
import WordList from '../WordList';
import Word from '../Word';

// Pure functions need to be mocked to return some DOM
// We give it a classname to test that it is rendered
WordList.mockImplementation(() => <div />)

describe('WordListContainer', () => {
  it('renders WordListContainer correctly with no input', () => {
   let words = ["lorem", "ipsum"];
   let pastInput = [];
   let currentWord = "";

    let renderer = TestUtils.createRenderer();
    renderer.render(
      <WordListContainer words={words} pastInput={pastInput} currentWord={currentWord}/>
    )
    let output = renderer.getRenderOutput();
    expect(output.type).toBe(WordList);

    let first = output.props.children[0];
    expect(first.length).toBe(5);
    expect(first[0].props).toEqual({color: "none", children: "l"});

    let second = output.props.children[1];
    expect(second.props).toEqual({color: "none", children: "ipsum"});
  });

  it('renders WordListContainer with input', () => {
   let words = ["az", "cb", "ipsu"];
   let pastInput = ["az", "c"];
   let currentWord = "ixs";

    let renderer = TestUtils.createRenderer();
    renderer.render(
      <WordListContainer words={words} pastInput={pastInput} currentWord={currentWord}/>
    )

    let output = renderer.getRenderOutput();
    expect(output.type).toBe(WordList);

    let first = output.props.children[0];
    expect(first.props).toEqual({color: "green", children: "az"});

    let second = output.props.children[1];
    expect(second.props).toEqual({color: "red", children: "cb"});
 
    let third = output.props.children[2];
    expect(third.length).toBe(4);
    expect(third[0].props).toEqual({color: "green", children: "i"});
    expect(third[1].props).toEqual({color: "red", children: "p"});
    expect(third[2].props).toEqual({color: "green", children: "s"});
    expect(third[3].props).toEqual({color: "none", children: "u"});
  });

});
