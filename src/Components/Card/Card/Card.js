import React from "react";
import styles from "./card.module.css";
const Card = ({source,release, cardTitle, band, name, numberOfTracks, show, clicked}) => {
  return (
    <div className={styles.card} onClick={clicked}>
      <img src={source} alt="Album Cover" />
      <div className={styles.cardTitle}>
        <p>
          {band} - {name} - {release}
        </p>
        <p>{show ? `Number Of Tracks: #${numberOfTracks}` : ""}</p>
      </div>
    </div>
  );
};
export default Card;
