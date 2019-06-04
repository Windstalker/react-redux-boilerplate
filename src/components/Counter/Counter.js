// @flow
import React, { Component } from "react";

type DefaultProps = {|
  onIncrement: () => void,
  onDecrement: () => void
|};

type Props = {
  value: number,
  ...DefaultProps
};

class Counter extends Component<Props> {
  static defaultProps = {
    onIncrement: () => {},
    onDecrement: () => {}
  };

  render() {
    return (
      <div>
        <h2>{this.props.value}</h2>
        <button onClick={this.props.onIncrement}>Increase +</button>
        <button onClick={this.props.onDecrement}>Decrease -</button>
      </div>
    );
  }
}

export default Counter;
