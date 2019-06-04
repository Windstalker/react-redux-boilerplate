// @flow
import { all } from "redux-saga/effects";
import type { Saga } from "redux-saga";
import { logger } from "./logger";

export default function* rootSaga(): Saga<*> {
  yield all([logger()]);
}
