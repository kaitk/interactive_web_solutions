'use strict';

jest.unmock('../SpeedTyperContainer');

import React from 'react';
import ReactDOM from 'react-dom';
import TestUtils from 'react-addons-test-utils';
import SpeedTyperContainer from '../SpeedTyperContainer';
import SpeedTyper from '../SpeedTyper';

SpeedTyper.mockImplementation(() => <div />)

describe('SpeedTyperContainer', () => {

  let renderSpeedTyperContainerIntoDocument = () => {
    return TestUtils.renderIntoDocument(
      <SpeedTyperContainer/>
    );
  }

  it('displays initial info', () => {
    let speedTyperContainer = renderSpeedTyperContainerIntoDocument();
    expect(speedTyperContainer.state).toEqual({currentWord: "", pastInput: []});
  });

  describe('handleTextChange', () => {
    it('updates currentWord', () => {
      let speedTyperContainer = renderSpeedTyperContainerIntoDocument();
      speedTyperContainer.handleTextChange("ab");
      expect(speedTyperContainer.state).toEqual({currentWord: "ab", pastInput: []});
    });

    it('updates the pastInput if last letter is space', () => {
      let speedTyperContainer = renderSpeedTyperContainerIntoDocument();
      speedTyperContainer.handleTextChange("ab ");
      expect(speedTyperContainer.state).toEqual({currentWord: "", pastInput: ["ab"]});
      speedTyperContainer.handleTextChange("c");
      expect(speedTyperContainer.state).toEqual({currentWord: "c", pastInput: ["ab"]});
    });

  });

});
