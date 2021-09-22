/*
 * Copyright (c) 2020-present Sonatype, Inc. All rights reserved.
 * "Sonatype" is a trademark of Sonatype, Inc.
 */
import { nxTextInputStateHelpers } from '@sonatype/react-shared-components';

// TODO Get this type in a cleaner way once its available from RSC in RSC-527
type StateProps = ReturnType<typeof nxTextInputStateHelpers.initialState>;

export interface ReduxState {
  labelState: StateProps;
  count: number;
}

export interface CounterProps {
  count: number;
  increase: () => void;
  decrease: () => void;
  labelState: StateProps;
  resetCounter: () => void;
  setLabel: (l: string) => void;
}
