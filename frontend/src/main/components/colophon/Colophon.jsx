/*
 * Copyright (c) 2020-present Sonatype, Inc. All rights reserved.
 * "Sonatype" is a trademark of Sonatype, Inc.
 */
import React, { useEffect } from 'react';
import * as PropTypes from 'prop-types';
import { NxLoadWrapper } from '@sonatype/react-shared-components';

import ColophonTile from './ColophonTile';
import TechnologySection from './TechnologySection';

/**
 * A presentational component for rendering the colophon
 */
export default function Colophon({ load, loaded, error, techByStack }) {
  useEffect(function() {
    load();
  }, []);

  return (
    <main className="nx-page-main">
      <NxLoadWrapper loading={!loaded} error={error} retryHandler={load}>
        { () =>
          <>
            <div className="nx-page-title">
              <h1 className="nx-h1">Colophon</h1>
            </div>
            <ColophonTile title="Frontend Technologies" technologies={techByStack.FRONTEND} />
            <ColophonTile title="Backend Technologies" technologies={techByStack.BACKEND} />
          </>
        }
      </NxLoadWrapper>
    </main>
  );
}

Colophon.propTypes = {
  load: PropTypes.func.isRequired,
  loaded: PropTypes.bool.isRequired,
  error: PropTypes.string,
  techByStack: PropTypes.shape({
    FRONTEND: PropTypes.arrayOf(PropTypes.shape(TechnologySection.propTypes).isRequired),
    BACKEND: PropTypes.arrayOf(PropTypes.shape(TechnologySection.propTypes).isRequired)
  }).isRequired
};
