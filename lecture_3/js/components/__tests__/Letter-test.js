'use strict';

jest.unmock('../Letter');

import React from 'react';
import ReactDOM from 'react-dom';
import TestUtils from 'react-addons-test-utils';
import Letter from '../Letter';

describe('Letter', () => {

  let Wrapper = React.createClass({
    render: function() {
      return (
        <div>{this.props.children}</div>
      );
    }
  });

  let buildLetter = ((color, children) => {
    let dom = TestUtils.renderIntoDocument(
      <Wrapper>
        <Letter color={color} >{children}</Letter>
      </Wrapper>
    );

    return TestUtils.findRenderedDOMComponentWithClass(dom, "letter")
  });

  it('sets class', () => {
    let letter = buildLetter("red", "S");
    expect(letter.className).toEqual("letter red");
  });

  it('sets children', () => {
    let letter = buildLetter("red", "S")
    let children = letter.childNodes[0];
    expect(children.textContent).toEqual('S');
  });
});
