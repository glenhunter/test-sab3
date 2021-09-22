/*
 * Copyright (c) 2020-present Sonatype, Inc. All rights reserved.
 * "Sonatype" is a trademark of Sonatype, Inc.
 */
import React from 'react';
import SabNavLink from '../components/SabNavLink';

function SpringBootPage() {
  return (
    <main className="nx-page-main">
      <div className="nx-page-title">
        <h1 className="nx-h1">About SpringBoot</h1>
      </div>
      <div className="nx-tile">
        <div className="nx-tile-content">
          <p className="nx-p">
            Springboot is a Java Maven project start facilitator,
            aiming to provide simple and fast configuration of new Spring based projects.
          </p>
          <p className="nx-p">
            The most important part of starting with springboot is{' '}
            <a className="nx-text-link" href="https://start.spring.io/" target="_blank" rel="noreferrer">
              start.spring.io
            </a>.
          </p>
          <p className="nx-p">
            Here you are be able to choose the tools needed for your project, which allows an easy and fast start,
            and it will automatically generate a basic downloadable maven project with your selected configuration.
          </p>
          <p className="nx-p">
            All of the associated stack that we chose can be found in the "Backend Technologies" section
            of the <SabNavLink pageTitle="Colophon" />.
          </p>
        </div>
      </div>
    </main>
  );
}

export default SpringBootPage;
