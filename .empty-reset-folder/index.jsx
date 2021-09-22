/*
 * Copyright (c) 2020-present Sonatype, Inc. All rights reserved.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { combineReducers } from 'redux';

import Application from './Application';
import configureStore from './storeConfig';
// import reducers here

// combined reducers
const rootReducer = combineReducers({
  // add reducers here
});

// create redux store with combined reducers
const store = configureStore(rootReducer);

// connect `Application` with the store
const ConnectedApp = () => (
  <Provider store={store}>
    <Application />
  </Provider>
);

ReactDOM.render(<ConnectedApp />, document.getElementById('ui'));
