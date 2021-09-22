/*
 * Copyright (c) 2020-present Sonatype, Inc. All rights reserved.
 * "Sonatype" is a trademark of Sonatype, Inc.
 */
import { connect } from 'react-redux';

import Colophon from '../components/colophon/Colophon';
import { load } from '../components/colophon/colophonActions';

const mapStateToProps = ({ colophon }) => colophon;

/**
 * A container component which wraps the Colophon presentational component and manages the redux wiring
 */
export default connect(mapStateToProps, { load })(Colophon);
