import React from "react";
import styles from "./input.module.css";
const Input = (props) => {
  let inputElem = null;
  switch (props.inputtype) {
    case "input":
      inputElem = (
        <input
          className={styles.InputElem}
          {...props}
          onChange={props.changed}
        />
      );
      break;
    case "textarea":
      inputElem = (
        <textarea
          className={styles.InputElem}
          {...props}
          onChange={props.changed}
        />
      );
      break;
    case "submit":
      inputElem = (
        <input
          className={styles.Submit}
          onClick={props.checkTooltip}
          {...props}
          onChange={props.changed}
        />
      );
      break;
    default:
      inputElem = (
        <input
          className={styles.InputElem}
          {...props}
          onChange={props.changed}
        />
      );
      break;
  }
  return (
    <div className={styles.Input}>
      <label className={styles.Label}>{props.label}</label>
      <br />
      {inputElem}
    </div>
  );
};

export default Input;
