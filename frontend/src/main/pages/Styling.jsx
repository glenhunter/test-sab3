/*
 * Copyright (c) 2020-present Sonatype, Inc. All rights reserved.
 * "Sonatype" is a trademark of Sonatype, Inc.
 */
import React from 'react';

export default function Styling() {
  return (
    <main className="nx-page-main">
      <div className="nx-page-title">
        <h1 className="nx-h1">Using custom SCSS styles in your project</h1>
      </div>
      <div className="nx-tile">
        <div className="nx-tile-content">
          <p className="nx-p">
            If you have styling needs that aren't covered by the styles included in React Shared Components (RSC),
            then you're going to have to create your own styles. This is easy to do and we've already set up this
            project with its own custom stylesheets that we can use as a demonstration.
          </p>
          <p className="nx-p">
            Most commonly, you'll have styles associated with particular pages or reusable React components. In this
            case, those styles can be written in component-specific stylesheets which live in SCSS files alongside
            the corresponding component. A side-effect-only import can be used to reference that SCSS file from
            its corresponding React component, and thanks to our webpack configuration, the styles in that SCSS
            file will automatically be included in the build output CSS. For example,
            observe <code className="nx-code">Home.scss</code>, which contains styles specific to the SAB example home
            page. You'll find that this SCSS file is imported in Home.jsx, which is how it makes its way into the
            webpack build.
          </p>
          <p className="nx-p">
            In addition to the pattern above, it is also possible that you'll have some reusable or general purpose
            styles that aren't owned by a particular page or component. In that scenario, you'll likely want to create
            an SCSS file (or files) near the top of your source code hierarchy, and import that file
            in <code className="nx-code">index.jsx</code>.
          </p>
          <p className="nx-p">
            You might have noticed lots of dashes and underscores in our class names. That's because we use BEM naming
            by default. BEM stands for "Block", "Element", and "Modifier".{' '}
            <a className="nx-text-link"
               rel="noreferrer"
               target="_blank"
               href="https://www.toptal.com/css/introduction-to-bem-methodology">
              Learn more about BEM
            </a>.
          </p>
          <p className="nx-p">
            Because the RSC styles are used by multiple apps we wanted to clearly distinguish between RSC styles and
            custom app styles. To that end we use a namespace prefix in our class names. In RSC that prefix
            is <code className="nx-code">.nx-</code>. In these SAB example pages we
            use <code className="nx-code">.sab-</code>, as our prefix in order to differentiate between classes in
            RSC and classes in our custom app. When you create your custom app you should create a simple unique
            prefix for your custom styles. IQ for example uses: <code className="nx-code">.iq-</code>.
          </p>
        </div>
      </div>
    </main>
  );
}
