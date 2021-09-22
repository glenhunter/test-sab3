/*
 * Copyright (c) 2020-present Sonatype, Inc. All rights reserved.
 * "Sonatype" is a trademark of Sonatype, Inc.
 */
import React from 'react';
import * as PropTypes from 'prop-types';

const TechnologyLinkLi = ({ url, title }) =>
  <li className="nx-list__item">
    <span className="nx-list__text">
      <a target="_blank" rel="noreferrer" className="nx-text-link" href={url}>{title}</a>
    </span>
  </li>;

export default TechnologyLinkLi;

TechnologyLinkLi.propTypes = {
  url: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired
};
