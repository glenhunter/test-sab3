/*
 * Copyright (c) 2020-present Sonatype, Inc. All rights reserved.
 * "Sonatype" is a trademark of Sonatype, Inc.
 */
import React from 'react';

import SidebarNav from './SidebarNav';

import './Sidebar.scss';

function Sidebar() {
  return (
    <aside className="nx-page-sidebar" id="page-sidebar">
      <SidebarNav />
    </aside>
  );
}

export default Sidebar;
