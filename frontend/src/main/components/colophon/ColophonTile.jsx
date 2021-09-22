/*
 * Copyright (c) 2020-present Sonatype, Inc. All rights reserved.
 * "Sonatype" is a trademark of Sonatype, Inc.
 */
import React from 'react';
import * as PropTypes from 'prop-types';

import TechnologySection from './TechnologySection';

export default function ColophonTile({ title, technologies }) {
  return (
    <section className="nx-tile">
      <header className="nx-tile-header">
        <div className="nx-tile-header__title">
          <h2 className="nx-h2">{title}</h2>
        </div>
      </header>
      <div className="nx-tile-content">
        <p className="nx-p">
          The following frontend technologies are recommended.
        </p>
        { technologies.map(tech => <TechnologySection key={tech.name} { ...tech } />) }
      </div>
    </section>
  );
}

ColophonTile.propTypes = {
  title: PropTypes.string.isRequired,
  technologies: PropTypes.arrayOf(PropTypes.shape(TechnologySection.propTypes).isRequired).isRequired
};
