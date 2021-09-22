/*
 * Copyright (c) 2020-present Sonatype, Inc. All rights reserved.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import React from 'react';
import { HashRouter as Router, Route, Redirect, Switch } from 'react-router-dom';

import PageHeader from './PageHeader';
import Home from './pages/Home';

function Application() {
  return (
    <Router>
      <PageHeader />
      <div className="nx-page-content">
        <Switch>
          <Route path="/pages/Home">
            <Home />
          </Route>
          <Redirect to="/pages/Home" />
        </Switch>
      </div>
    </Router>
  );
}

export default Application;
