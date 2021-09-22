/*
 * Copyright (c) 2020-present Sonatype, Inc. All rights reserved.
 * "Sonatype" is a trademark of Sonatype, Inc.
 */
import { connect } from 'react-redux';

import { RootReduxState } from '../../rootReducer';
import Counter from './Counter';
import * as counterActions from './counterActions';

function mapStateToProps({ counter }: RootReduxState) {
  return { ...counter };
}

export default connect(mapStateToProps, counterActions)(Counter);
