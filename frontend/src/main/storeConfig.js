/*
 * Copyright (c) 2020-present Sonatype, Inc. All rights reserved.
 * "Sonatype" is a trademark of Sonatype, Inc.
 */
import { applyMiddleware, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import logger from 'redux-logger';

/**
 * Configures and creates a redux store that uses the given reducer
 */
export default function configureStore(rootReducer) {
  const middlewares = [thunk, logger];
  const middleWareEnhancer = applyMiddleware(...middlewares);
  const composedEnhancers = composeWithDevTools(middleWareEnhancer);

  return createStore(rootReducer, undefined, composedEnhancers);
}
