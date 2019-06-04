// @flow
import { takeEvery, select } from "redux-saga/effects";
import type { Saga } from "redux-saga";
import type { Action } from "../actions/contract";

export function* logAction(action: Action): Saga<*> {
  const state = yield select();

  console.log("Action dispatched", action);
  console.log("State after", state);
}

export function* logger(): Saga<*> {
  yield takeEvery("*", logAction);
}
