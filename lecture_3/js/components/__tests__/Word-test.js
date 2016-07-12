'use strict';

jest.unmock('../Word');

import React from 'react';
import ReactDOM from 'react-dom';
import TestUtils from 'react-addons-test-utils';
import Word from '../Word';

describe('Word', () => {

  var Wrapper = React.createClass({
    render: function() {
      return (
        <div>{this.props.children}</div>
      );
    }
  });

  var buildWord = ((color, children) => {
    let dom = TestUtils.renderIntoDocument(
      <Wrapper>
        <Word color={color} >{children}</Word>
      </Wrapper>
    );

    return TestUtils.findRenderedDOMComponentWithClass(dom, "word")
  });

  it('sets class', () => {
    let word = buildWord("green", "midagi");
    expect(word.className).toEqual("word green");
  });

  it('sets children', () => {
    let word = buildWord("green", "midagi")
    let children = word.childNodes[0];
    expect(children.textContent).toEqual('midagi');
  });
});
