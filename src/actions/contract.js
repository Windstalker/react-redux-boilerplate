// @flow

export type BaseAction<ActionType> = {
  +type: ActionType
};

export type PayloadAction<ActionType, PayloadType> = {
  ...BaseAction<ActionType>,
  +payload: PayloadType
};

export type IncrementAction = BaseAction<"INCREMENT">;
export type DecrementAction = BaseAction<"DECREMENT">;

export type Action = IncrementAction | DecrementAction;
