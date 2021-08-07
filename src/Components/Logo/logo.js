import React from "react";
import styles from "./logo.module.css";

const Logo = ({ height }) => {
  return (
    <div className={styles.Logo} style={{ height: height }}>
    
        <img src="Audio-Library Logo.png" alt="Audio Library Logo" />
   
    </div>
  );
};

export default Logo;
