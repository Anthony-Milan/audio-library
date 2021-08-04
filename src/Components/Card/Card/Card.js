import React from "react";
import styles from "./Card.module.css";
const Card = ({source, cardTitle, band, name, numberOfTracks, showNumberOfTracks}) => {
  return (
    <div className={styles.card}>
      <img src={source} alt="Album Cover" />
      <div className={styles.cardTitle}>
        <p>
          {band} - {name}
        </p>
        <p>{showNumberOfTracks ? `Number Of Tracks: #${numberOfTracks}` : ""}</p>
      </div>
    </div>
  );
};
export default Card;
