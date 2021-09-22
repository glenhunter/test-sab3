/*
 * Copyright (c) 2020-present Sonatype, Inc. All rights reserved.
 * "Sonatype" is a trademark of Sonatype, Inc.
 */
import React from 'react';

const Team = () => {
  return (
    <main className="nx-page-main">
      <div className="nx-tile">
        <div className="nx-tile-header">
          <div className="nx-tile-header__title"><h2 className="nx-h2">The SAB Team</h2></div>
        </div>
        <div className="nx-tile-content">
          The SAB is maintained by the Plaid Team. You can contact us in the{' '}
          <a className="nx-text-link"
             rel="noreferrer"
             target="_blank"
             href="https://sonatype.slack.com/archives/CJUF9G7T2">
            #react-components
          </a>
          {' '}channel on Slack if you need help with anything.
        </div>
      </div>
    </main>
  );
};

export default Team;
