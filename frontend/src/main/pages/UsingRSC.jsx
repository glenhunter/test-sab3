/*
 * Copyright (c) 2020-present Sonatype, Inc. All rights reserved.
 * "Sonatype" is a trademark of Sonatype, Inc.
 */
import React from 'react';

import { NxWarningAlert } from '@sonatype/react-shared-components';
import SabNavLink from '../components/SabNavLink';

export default function UsingRSC() {
  return (
    <main className="nx-page-main">
      <div className="nx-page-title">
        <h1 className="nx-h1">How to use the Sonatype React Shared Components in your Project</h1>
      </div>
      <section className="nx-tile">
        <header className="nx-tile-header">
          <div className="nx-tile-header__title">
            <h2 className="nx-h2">Importing Components</h2>
          </div>
        </header>
        <div className="nx-tile-content">
          <p className="nx-p">
            Importing components from Sonatype's OSS React Shared Components library is very easy because we have baked
            usage of the RSC into the SAB.
          </p>
          <p className="nx-p">
            Use an <code className="nx-code">import</code> statement to load a component as seen below.
            You can then use its custom tag and any needed props in your JSX.
          </p>
          <pre className="nx-pre">import {'{'} NxAlert {'}'} from '@sonatype/react-shared-components';</pre>
          <NxWarningAlert id="this-id-ends-up-on-the-div">
            This is an example <code className="nx-code">warning</code> message rendered using a reusable component
            from RSC.
          </NxWarningAlert>
        </div>
      </section>
      <section className="nx-tile">
        <header className="nx-tile-header">
          <div className="nx-tile-header__title">
            <h2 className="nx-h2">Using Styles</h2>
          </div>
        </header>
        <div className="nx-tile-content">
          <p className="nx-p">
            RSC's styles can be broken into two categories: the base styles and the component styles.
            The base styles are loaded automatically whenever any part of RSC is used. Consuming applications are
            free to use these styles directly, and documentation for them can be found in the  Styles - HTML Elements
            section of the <a className="nx-text-link" href="https://gallery.sonatype.dev/">RSC Gallery</a>. The
            component styles, on the other hand, get included whenever you use their respective component. These
            styles and classes are not meant to be used directly within consuming applications, but only through
            the components that they are built for.
          </p>
          <p className="nx-p">
            To learn about using custom styles for your own app please
            see <SabNavLink pageTitle="Styling your app" />.
          </p>
        </div>
      </section>
    </main>
  );
}
