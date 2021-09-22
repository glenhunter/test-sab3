/*
 * Copyright (c) 2020-present Sonatype, Inc. All rights reserved.
 * "Sonatype" is a trademark of Sonatype, Inc.
 */
import { combineReducers } from 'redux';

// import reducers here
import counterReducer from './components/counter/counterReducer';
import colophonReducer from './components/colophon/colophonReducer';

const rootReducer = combineReducers({
  // add reducers here
  counter: counterReducer,
  colophon: colophonReducer
});

export default rootReducer;
export type RootReduxState = ReturnType<typeof rootReducer>;
