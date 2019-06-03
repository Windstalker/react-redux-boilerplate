// @flow
import React from "react";
import styles from "./Logo.module.scss";

import type { Props } from "./contract";

export default function Logo(props: Props) {
  return <img src={props.logo} className={styles.appLogo} alt="logo" />;
}
