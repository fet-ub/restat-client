import React from "react";
import styles from "./loader.module.css";

const ButtonLoader = () => {
  return (
    <svg viewBox="25 25 50 50" className={styles.circle__svg}>
      <circle r="20" cy="50" cx="50" className={styles.circle}></circle>
    </svg>
  );
};

export default ButtonLoader;
