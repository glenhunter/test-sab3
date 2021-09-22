/*
 * Copyright (c) 2020-present Sonatype, Inc. All rights reserved.
 * "Sonatype" is a trademark of Sonatype, Inc.
 */
import {
  COLOPHON_LOAD_REQUESTED,
  COLOPHON_LOAD_FULFILLED,
  COLOPHON_LOAD_FAILED
} from './colophonActions';

const initialState = Object.freeze({
  loaded: false,
  error: null,
  techByStack: {}
});

// In a real app you'd likely want to use a utility library for this, for instance
// ramda's groupBy function.
function groupByTechStack(technologies) {
  const retval = {};

  for (const tech of technologies) {
    const { techStack } = tech;

    if (!retval[techStack]) {
      retval[techStack] = [];
    }

    retval[techStack].push(tech);
  }

  return retval;
}

export default function colophonReducer(state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case COLOPHON_LOAD_REQUESTED:
      return {
        ...state,
        loaded: false
      };
    case COLOPHON_LOAD_FULFILLED:
      return {
        loaded: true,
        error: null,
        techByStack: groupByTechStack(payload)
      };
    case COLOPHON_LOAD_FAILED:
      return {
        ...state,
        loaded: true,
        error: payload
      };
    default:
      return state;
  }
}
