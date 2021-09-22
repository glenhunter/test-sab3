/*
 * Copyright (c) 2020-present Sonatype, Inc. All rights reserved.
 * "Sonatype" is a trademark of Sonatype, Inc.
 */
import React from 'react';
import { shallow } from 'enzyme';
import { NxTextInput, NxButton } from '@sonatype/react-shared-components';

import Counter from '../Counter';

describe('Counter', function() {
  const minimalProps = {
    count: 0,
    labelState: { trimmedValue: '', isPristine: true, value: '' }
  };

  it('renders a text input with the labelState', function() {
    const labelState = { trimmedValue: 'foo', value: ' foo', isPristine: false },
        component = shallow(<Counter { ...minimalProps } labelState={labelState} />),
        textInput = component.find(NxTextInput);

    expect(textInput).toHaveProp('value', ' foo');
    expect(textInput).toHaveProp('isPristine', false);
  });

  it('calls setLabel in response to text input changes', function() {
    const setLabel = jest.fn(),
        component = shallow(<Counter { ...minimalProps } setLabel={setLabel} />),
        textInput = component.find(NxTextInput);

    expect(setLabel).not.toHaveBeenCalled();

    textInput.simulate('change', 'asdf');

    expect(setLabel).toHaveBeenCalledWith('asdf');
  });

  describe('first button', function() {
    it('fires increase when clicked', function() {
      const increase = jest.fn(),
          component = shallow(<Counter { ...minimalProps } increase={increase} />),
          button = component.find(NxButton).at(0);

      expect(increase).not.toHaveBeenCalled();

      button.simulate('click');

      expect(increase).toHaveBeenCalled();
    });
  });

  describe('second button', function() {
    it('fires resetCounter when clicked', function() {
      const resetCounter = jest.fn(),
          component = shallow(<Counter { ...minimalProps } resetCounter={resetCounter} />),
          button = component.find(NxButton).at(1);

      expect(resetCounter).not.toHaveBeenCalled();

      button.simulate('click');

      expect(resetCounter).toHaveBeenCalled();
    });
  });

  describe('third button', function() {
    it('fires decrease when clicked', function() {
      const decrease = jest.fn(),
          component = shallow(<Counter { ...minimalProps } decrease={decrease} />),
          button = component.find(NxButton).at(2);

      expect(decrease).not.toHaveBeenCalled();

      button.simulate('click');

      expect(decrease).toHaveBeenCalled();
    });
  });

  it('renders a paragraph with the label trimmed value and count', function() {
    const labelState = { ...minimalProps.labelState, trimmedValue: 'asdf' },
        component = shallow(<Counter { ...minimalProps} labelState={labelState} count={5} />),
        paragraph = component.find('p');

    expect(paragraph).toHaveText('asdf: 5');
  });
});
