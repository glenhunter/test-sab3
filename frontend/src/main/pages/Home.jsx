/*
 * Copyright (c) 2020-present Sonatype, Inc. All rights reserved.
 * "Sonatype" is a trademark of Sonatype, Inc.
 */
import React from 'react';

import './Home.scss';

import pushBtnImage from '../assets/images/example-images/9001SKR9G-Push-Button-Operator-30MM-SK--Options.jpg';

const Home = () =>
  <main className="nx-page-main">
    <div className="nx-page-title">
      <h1 className="nx-h1">Welcome to the Sonatype Application Builder</h1>
    </div>
    <div className="nx-tile">
      <img src={pushBtnImage} id="sab-cta-image"/>
      <div className="nx-tile-header">
        <div className="nx-tile-header__title"><h2 className="nx-h2">Getting started</h2></div>
      </div>
      <div className="nx-tile-content">
        <p className="nx-p">
          Now that you've got the project up and running there are a few things you should do (if you haven't already).
        </p>
        <ul className="nx-list nx-list--bulleted">
          <li className="nx-list__item">
            <span className="nx-list__text">Rename the Git repo to match your project and change its path</span>
            <ul className="nx-list nx-list--bulleted">
              <li className="nx-list__item">
                <span className="nx-list__text">
                  <code className="nx-code">git remote set-url origin &lt;new-url&gt;</code>
                </span>
              </li>
            </ul>
          </li>
          <li className="nx-list__item">
            <span className="nx-list__text">In <code className="nx-code">./backend/pom.xml</code> change:</span>
            <ul className="nx-list nx-list--bulleted">
              <li className="nx-list__item">
                <span className="nx-list__text">
                  <code className="nx-code">groupId</code>
                </span>
              </li>
              <li className="nx-list__item">
                <span className="nx-list__text">
                  <code className="nx-code">artifactId</code>
                </span>
              </li>
              <li className="nx-list__item">
                <span className="nx-list__text">
                  <code className="nx-code">version</code>
                </span>
              </li>
              <li className="nx-list__item">
                <span className="nx-list__text">
                  <code className="nx-code">name</code>
                </span>
              </li>
              <li className="nx-list__item">
                <span className="nx-list__text">
                  <code className="nx-code">description</code>
                </span>
              </li>
            </ul>
          </li>
          <li className="nx-list__item">
            <span className="nx-list__text">
              In <code className="nx-code">./frontend/package.json</code> change:
            </span>
            <ul className="nx-list nx-list--bulleted">
              <li className="nx-list__item">
                <span className="nx-list__text">
                  <code className="nx-code">name</code>
                </span>
              </li>
              <li className="nx-list__item">
                <span className="nx-list__text">
                  <code className="nx-code">version</code>
                </span>
              </li>
              <li className="nx-list__item">
                <span className="nx-list__text">
                  <code className="nx-code">description</code>
                </span>
              </li>
              <li className="nx-list__item">
                <span className="nx-list__text">
                  <code className="nx-code">repository URL</code>
                </span>
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
    <div className="nx-tile">
      <div className="nx-tile-header">
        <div className="nx-tile-header__title"><h2 className="nx-h2">What is this?</h2></div>
      </div>
      <div className="nx-tile-content">
        <p className="nx-p">
          We think that folks shouldn't have to spend a whole bunch of time assembling a bunch of disparate parts just
          to create a proof of concept. We also think that it should be possible to shorten the prototype to
          deliverable product cycle by making it as easy as possible to prototype in our deployment stack. This takes
          care of all of the heavy lifting leaving you free to create something awesome.
        </p>
        <p className="nx-p">
          You're looking to build an app, maybe it's Improvement Day and you want a quick and dirty prototype, maybe
          it's a new project and you need a good start. You want to use all the latest and greatest technologies.
          You want the Sonatype look and feel, plus access to the React Shared Components. This application Builder
          gives you all that plus backend technologies like Java 11, Springboot, and a basic API to tie them together.
        </p>
      </div>
    </div>
  </main>;

export default Home;
