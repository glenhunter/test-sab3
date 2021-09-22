/*
 * Copyright (c) 2020-present Sonatype, Inc. All rights reserved.
 * "Sonatype" is a trademark of Sonatype, Inc.
 */
import axios from 'axios';

export const COLOPHON_LOAD_REQUESTED = 'COLOPHON_LOAD_REQUESTED';
export const COLOPHON_LOAD_FULFILLED = 'COLOPHON_LOAD_FULFILLED';
export const COLOPHON_LOAD_FAILED = 'COLOPHON_LOAD_FAILED';

const colophonResourceUrl = 'http://localhost:8080/colophon';

const loadRequested = () => ({ type: COLOPHON_LOAD_REQUESTED });
const loadFulfilled = (payload) => ({ type: COLOPHON_LOAD_FULFILLED, payload });
const loadFailed = (payload) => ({ type: COLOPHON_LOAD_FAILED, payload });

export function load() {
  return async function(dispatch) {
    dispatch(loadRequested());

    try {
      const { data } = await axios.get(colophonResourceUrl);
      dispatch(loadFulfilled(data));
    }
    catch (e) {
      dispatch(loadFailed(e.message));
    }
  };
}
