// @flow
import type { IncrementAction, DecrementAction } from "./contract";

export const INCREMENT = "INCREMENT";
export const DECREMENT = "DECREMENT";

export const increase = (): IncrementAction => ({ type: INCREMENT });
export const decrease = (): DecrementAction => ({ type: DECREMENT });
