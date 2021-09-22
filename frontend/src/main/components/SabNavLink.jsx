/*
 * Copyright (c) 2020-present Sonatype, Inc. All rights reserved.
 * "Sonatype" is a trademark of Sonatype, Inc.
 */
import React from 'react';
import { Link } from 'react-router-dom';
import classnames from 'classnames';

export default function SabNavLink({ pageTitle, className, ...otherProps }) {
  const classes = classnames('nx-text-link', className);

  return (
    <Link className={classes} to={`/pages/${pageTitle}`} { ...otherProps }>
      {pageTitle}
    </Link>
  );
}
