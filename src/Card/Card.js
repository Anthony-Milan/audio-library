import React from "react";
import styles from "./Card.module.css";
const Card = (props) => {
  return (
    <div className={styles.card}>
      <img src={props.source} alt="Album Cover" />
      <div className={styles.cardTitle}>
        <p>
          {props.band} - {props.name} <span>{props.release}</span>
        </p>
        <p>{props.showNumberOfTracks ? `Number Of Tracks: #${props.numberOfTracks}` : ""}</p>
      </div>
    </div>
  );
};
export default Card;
