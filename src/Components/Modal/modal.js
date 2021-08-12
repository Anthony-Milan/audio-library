import React from "react";

import styles from "./modal.module.css";
import Backdrop from "../../images/Backdrop";

const Modal = ({ closed, open, children }) => {
  return (
    <>
      <Backdrop show={open} clicked={closed} />
      <div
        className={styles.Modal}
        style={{
          transform: open ? "translateY(0)" : "translateY(-100vh)",
          opacity: open ? "1" : "0",
        }}
      >
        >{children}
      </div>
    </>
  );
};
export default Modal;
