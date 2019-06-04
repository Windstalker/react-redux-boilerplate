// @flow
import { combineReducers } from "redux";
import counter from "./counter";

const reducers = {
  counter
};

const rootReducer = combineReducers<typeof reducers>(reducers);

export default rootReducer;
