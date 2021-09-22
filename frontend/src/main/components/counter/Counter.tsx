/*
 * Copyright (c) 2020-present Sonatype, Inc. All rights reserved.
 * "Sonatype" is a trademark of Sonatype, Inc.
 */
import React from 'react';
import { NxFormGroup, NxButton, NxTextInput } from '@sonatype/react-shared-components';

import { CounterProps } from './types';

const Counter = (props: CounterProps) => {
  const {
    count,
    increase,
    decrease,
    labelState,
    resetCounter,
    setLabel
  } = props;

  return (
    <div className="nx-tile">
      <div className="nx-tile-header">
        <div className="nx-tile-header__title">
          <h2 className="nx-h2">Simple Counter</h2>
        </div>
      </div>
      <div className="nx-tile-content">
        <NxFormGroup label="Thing to Count" isRequired>
          <NxTextInput onChange={setLabel} { ...labelState } />
        </NxFormGroup>
        <div className="nx-form-row">
          <div className="nx-btn-bar">
            <NxButton onClick={increase}>Increase (+)</NxButton>
            <NxButton onClick={resetCounter}>Reset</NxButton>
            <NxButton onClick={decrease}>Decrease (-)</NxButton>
          </div>
        </div>
        <p className="nx-p">
          {labelState.trimmedValue}: {count}
        </p>
      </div>
    </div>
  );
};

export default Counter;
