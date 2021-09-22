/*
 * Copyright (c) 2020-present Sonatype, Inc. All rights reserved.
 * "Sonatype" is a trademark of Sonatype, Inc.
 */
import React from 'react';

import packageJson from '../../package.json';
import { NxPageHeader } from '@sonatype/react-shared-components';

function PageHeader() {
  const productInfo = {
    name: 'Sonatype Application Template',
    version: packageJson.version
  };

  return <NxPageHeader homeLink="#" productInfo={productInfo} />;
}

export default PageHeader;
