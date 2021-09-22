/*
 * Copyright (c) 2020-present Sonatype, Inc. All rights reserved.
 * "Sonatype" is a trademark of Sonatype, Inc.
 */
import React from 'react';

function RoutingPage() {
  return (
    <main className="nx-page-main">
      <div className="nx-page-title">
        <h1 className="nx-h1">Routing Explained</h1>
      </div>
      <div className="nx-tile">
        <div className="nx-tile-content">
          <p className="nx-p">
            The SAB uses <code className="nx-code">react-router</code> in order to render different "pages"
            under different frontend URL routes (specified via the Fragment Identifier section of the URL).
            The particular way that the routing structure should be defined is often dependent on the needs
            of the application in question. The SAB example pages have a small handful of statically routed pages,
            and the routes are set up such that the human-readable "name" can be converted into the page's route
            in a predictable manner.
          </p>
          <p className="nx-p">
            Within the SAB example page code, the routes are defined
            using <code className="nx-code">react-router</code>'s provided React components directly
            in <code className="nx-code">Application.jsx</code>.
            Note that this approach is not particularly scalable, and a more complex application may wish to break out
            the routing structure into a number of subcomponents defined in other files, or perhaps define the routing
            in a data structure
            from which the routing JSX is generated programmatically. The latter approach is particularly effective
            when there are a large number of different pages and their URL structures are uniform.
          </p>
          <p className="nx-p">
            Defining the routes themselves is only half of the battle; it is also typically necessary to construct
            links within the UI that navigate to the various routes. While many routing libraries provide the concept
            of a route "name", avoiding the need for link writers to know the exact paths of the pages to which they
            wish to navigate, <code className="nx-code">react-router</code> has no such capability. If such a concept is
            important to you, consider creating your own registry of route names
            (perhaps tying into the data structure approach described above). Alternatively, if URL structures
            are <em>very</em> consistent, you might create an application-specific link component which encapsulates
            the logic of determining the proper route based on a route name. This is the approach used here in the
            SAB example pages: see <code className="nx-code">SabNavLink.jsx</code>. Also note
            that <code className="nx-code">react-router</code> provides the{' '}
            <a className="nx-text-link" rel="noreferrer" target="_blank" href="https://reactrouter.com/web/api/Link">
              Link
            </a>
            {' '}and{' '}
            <a className="nx-text-link" rel="noreferrer" target="_blank" href="https://reactrouter.com/web/api/NavLink">
              NavLink
            </a>
            {' '}components which can assist with common link rendering needs, such as adding a class when the link
            points to the current page.
          </p>
        </div>
      </div>
    </main>
  );
}

export default RoutingPage;
