/*
 * Copyright (c) 2020-present Sonatype, Inc. All rights reserved.
 * "Sonatype" is a trademark of Sonatype, Inc.
 */
export const INCREASE_COUNTER = 'INCREASE_COUNTER';
export const DECREASE_COUNTER = 'DECREASE_COUNTER';
export const RESET_COUNTER = 'RESET_COUNTER';
export const SET_LABEL = 'SET_LABEL';

export function increase() {
  /*
   * `as const` tells TS to narrow the type down to the particular string literal rather than strings
   * in general. That is, it results in a type of `{ type: 'INCREASE_COUNTER'; }` instead of `{ type: string; }`.
   * This allows the switch statement in the reducer to act as a type guard so that the `payload` property is
   * accessible for actions in which `payload` is defined
   */
  return { type: INCREASE_COUNTER } as const;
}

export function decrease() {
  return { type: DECREASE_COUNTER } as const;
}

export function resetCounter() {
  return { type: RESET_COUNTER } as const;
}

export function setLabel(labelValue: string) {
  return {
    type: SET_LABEL,
    payload: labelValue
  } as const;
}

export type CounterAction =
    ReturnType<typeof increase> |
    ReturnType<typeof decrease> |
    ReturnType<typeof resetCounter> |
    ReturnType<typeof setLabel>;
