/*
 * Copyright (c) 2020-present Sonatype, Inc. All rights reserved.
 * "Sonatype" is a trademark of Sonatype, Inc.
 */
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import Application from './Application';
import configureStore from './storeConfig';
import rootReducer from './rootReducer';

// create redux store with combined reducers
const store = configureStore(rootReducer);

// connect `Application` with the store
const ConnectedApp = () => (
  <Provider store={store}>
    <Application />
  </Provider>
);

ReactDOM.render(<ConnectedApp />, document.getElementById('ui'));
