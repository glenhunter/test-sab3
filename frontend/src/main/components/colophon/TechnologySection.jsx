/*
 * Copyright (c) 2020-present Sonatype, Inc. All rights reserved.
 * "Sonatype" is a trademark of Sonatype, Inc.
 */
import React from 'react';
import * as PropTypes from 'prop-types';

import TechnologyLinkLi from './TechnologyLinkLi';

const TechnologySection = ({ name, description, links }) =>
  <section className="nx-tile-subsection">
    <header className="nx-tile-subsection__header">
      <h3 className="nx-h3">{name}</h3>
    </header>
    <p className="nx-p">{description}</p>
    <ul className="nx-list--bulleted">
      { links.map(link => <TechnologyLinkLi key={link.title} { ...link } />) }
    </ul>
  </section>;

export default TechnologySection;

TechnologySection.propTypes = {
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  links: PropTypes.arrayOf(PropTypes.shape(TechnologyLinkLi.propTypes).isRequired).isRequired
};
