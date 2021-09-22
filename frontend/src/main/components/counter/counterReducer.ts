/*
 * Copyright (c) 2020-present Sonatype, Inc. All rights reserved.
 * "Sonatype" is a trademark of Sonatype, Inc.
 */
import { nxTextInputStateHelpers } from '@sonatype/react-shared-components';

import {
  INCREASE_COUNTER,
  DECREASE_COUNTER,
  RESET_COUNTER,
  SET_LABEL,
  CounterAction
} from './counterActions';
import { ReduxState } from './types';

const initialState: ReduxState = {
  labelState: nxTextInputStateHelpers.initialState('Bananas'),
  count: 0
};

export default function counterReducer(state = initialState, action: CounterAction) {
  const { count } = state;

  switch (action.type) {
    case INCREASE_COUNTER:
      return {
        ...state,
        count: count + 1
      };

    case DECREASE_COUNTER:
      return {
        ...state,
        count: count - 1
      };

    case RESET_COUNTER:
      return {
        ...state,
        count: 0
      };

    case SET_LABEL:
      return {
        ...state,
        labelState: nxTextInputStateHelpers.userInput(null, action.payload)
      };

    default:
      return state;
  }
}
