// @flow
import React from "react";
import "./Logo.css";

import type { Props } from "./contract";

export default function Logo(props: Props) {
  return <img src={props.logo} className="App-logo" alt="logo" />;
}
