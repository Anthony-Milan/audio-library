import React from "react";
import styles from "./MobileToggle.module.css";
const MobileToggle = ({clicked}) => (
  <div className={styles.MobileToggle} onClick={clicked}>
    <div></div>
    <div></div>
    <div></div>
  </div>
);

export default MobileToggle;
