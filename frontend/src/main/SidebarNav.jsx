/*
 * Copyright (c) 2020-present Sonatype, Inc. All rights reserved.
 * "Sonatype" is a trademark of Sonatype, Inc.
 */
import React from 'react';

import SabNavLink from './components/SabNavLink';

function SidebarNav() {
  return (
    <nav className="nx-sidebar-navigation">
      <dl className="sab-sidebar-navigation-links">
        <dt className="sab-sidebar-navigation__group">Frontend</dt>
        <dd className="sab-sidebar-navigation__link"><SabNavLink pageTitle="Routing" /></dd>
        <dd className="sab-sidebar-navigation__link"><SabNavLink pageTitle="Using RSC" /></dd>
        <dd className="sab-sidebar-navigation__link"><SabNavLink pageTitle="Styling your app" /></dd>
        <dd className="sab-sidebar-navigation__link"><SabNavLink pageTitle="Managing State" /></dd>
      </dl>
      <dl className="sab-sidebar-navigation-links">
        <dt className="sab-sidebar-navigation__group">Backend</dt>
        <dd className="sab-sidebar-navigation__link"><SabNavLink pageTitle="SpringBoot" /></dd>
        <dd className="sab-sidebar-navigation__note">(see Colophon for more info)</dd>
      </dl>
      <dl className="sab-sidebar-navigation-links">
        <dt className="sab-sidebar-navigation__group">Misc</dt>
        <dd className="sab-sidebar-navigation__link"><SabNavLink pageTitle="Colophon" /></dd>
        <dd className="sab-sidebar-navigation__link"><SabNavLink pageTitle="Team" /></dd>
      </dl>
    </nav>
  );
}

export default SidebarNav;
