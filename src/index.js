import React from "react";
import classnames from "classnames";
import styles from "./index.less";

export default function(props) {
  return (
    <button
      className={classnames(styles.small, styles.redBg)}
      style={{
        color: "bule"
      }}
    >
      {props.children}
    </button>
  );
}
