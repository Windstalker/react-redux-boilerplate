// @flow
import { INCREMENT, DECREMENT } from "../actions/counter";
import type { CounterState } from "./contract";
import type { Action } from "../actions/contract";

const initialState: CounterState = 0;

export default function counterReducer(
  state: CounterState = initialState,
  action: Action
): CounterState {
  if (action.type === INCREMENT) {
    return state + 1;
  }

  if (action.type === DECREMENT) {
    return state - 1;
  }

  return state;
}
