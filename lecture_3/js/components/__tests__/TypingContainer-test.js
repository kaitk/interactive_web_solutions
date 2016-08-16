'use strict';

jest.unmock('../TypingContainer');

import React from 'react';
import ReactDOM from 'react-dom';
import TestUtils from 'react-addons-test-utils';
import TypingContainer from '../TypingContainer';


describe('TypingContainer', () => {

  let renderTypingContainer = (currentWord, onTextChange) => {
    let renderer = TestUtils.createRenderer();
    renderer.render(
      <TypingContainer onTextChange={onTextChange} currentWord={currentWord}/>
    )
    return renderer.getRenderOutput();
  }

  let Wrapper = React.createClass({
    render: function() {
      return (
        <div>{this.props.children}</div>
      );
    }
  });

  let renderTypingContainerIntoDocument = ((currentWord, onTextChange) => {
    return TestUtils.renderIntoDocument(
      <Wrapper>
  	   <TypingContainer onTextChange={onTextChange} currentWord={currentWord} />
      </Wrapper>
  	);
  });

  it('display placeholder when empty', () => {
    let onTextChange = jest.genMockFunction();
    let currentWord = "";
    let typingContainer = renderTypingContainer(currentWord, onTextChange);

    expect(typingContainer.props.value).toBe("");
    expect(typingContainer.props.placeholder).toBe("Type words here...");
  });

  it('calls onTextChange when user inputs data', () => {
    let onTextChange = jest.genMockFunction();
    let currentWord = "someWord";
    let typingContainer = renderTypingContainerIntoDocument(currentWord, onTextChange);
    let textInput = TestUtils.findRenderedDOMComponentWithTag(typingContainer, 'input');
    TestUtils.Simulate.change(textInput);

    expect(onTextChange.mock.calls[0][0]).toEqual("someWord");
  });

});
