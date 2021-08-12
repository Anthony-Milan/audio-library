import React from "react";
import styles from "./song.module.css";
const Song = ({ length, title }) => {
  return (
    <div className={styles.song}>
      <ul>
        <li>
          <h4>{title}</h4>
        </li>
        <li>
          <p>{length}</p>
        </li>
      </ul>
    </div>
  );
};

export default Song;
