/*
 * Copyright (c) 2020-present Sonatype, Inc. All rights reserved.
 * "Sonatype" is a trademark of Sonatype, Inc.
 */
import 'jest-enzyme';

import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import nodeCrypto from 'crypto';

// This is needed by RSC but doesn't exist in JSDOM
window.crypto = {
  getRandomValues: function(buffer) { return nodeCrypto.randomFillSync(buffer); }
};

Enzyme.configure({ adapter: new Adapter() });
