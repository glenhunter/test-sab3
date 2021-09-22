/*
 * Copyright (c) 2020-present Sonatype, Inc. All rights reserved.
 * "Sonatype" is a trademark of Sonatype, Inc.
 */
import React from 'react';
import { HashRouter as Router, Route, Redirect, Switch } from 'react-router-dom';

import PageHeader from './PageHeader';
import Sidebar from './Sidebar';
import State from './pages/State';
import Team from './pages/Team';
import UsingRSC from './pages/UsingRSC';
import Colophon from './pages/ColophonContainer';
import Home from './pages/Home';
import Routing from './pages/Routing';
import SpringBootPage from './pages/SpringBoot';
import Styling from './pages/Styling';

function Application() {
  return (
    <Router>
      <PageHeader />
      <div className="nx-page-content">
        <Sidebar />
        <Switch>
          <Route path="/pages/Colophon">
            <Colophon />
          </Route>
          <Route path="/pages/Team">
            <Team />
          </Route>
          <Route path="/pages/Routing">
            <Routing />
          </Route>
          <Route path="/pages/SpringBoot">
            <SpringBootPage />
          </Route>
          <Route path="/pages/Managing State">
            <State />
          </Route>
          <Route path="/pages/Using RSC">
            <UsingRSC />
          </Route>
          <Route path="/pages/Styling Your App">
            <Styling />
          </Route>
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
