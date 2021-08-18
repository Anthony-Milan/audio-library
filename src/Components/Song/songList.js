import React, { useState, useEffect } from "react";
import styles from "./songList.module.css";
import axios from "../../services";
const Song = ({ url }) => {
  const [songs, setSongs] = useState([]);
  const [pageNumber, setPageNumber] = useState(1);
  const [songPerPageNumber] = useState(2);
  const [error, setError] = useState("");
  const currentPageNumber = pageNumber * songPerPageNumber - songPerPageNumber;
  const paginatedSongs = songs.splice(currentPageNumber, songPerPageNumber);

  useEffect(() => {
    loadSongs();
    //eslint-disable-next-line
  }, [paginatedSongs]);

  const loadSongs = () => {
    axios
      .get(url + "/songs.json")
      .then((response) => {
        setSongs(response.data);
      })
      .catch((error) => {
        setError(error.message);
      });
  };

  const previousHandler = () => {
    if (pageNumber === 1) {
      return;
    }
    setPageNumber(pageNumber - 1);
  };

  const nextHandler = () => {
    setPageNumber(pageNumber + 1);
  };

  let song = null;
  if (songs) {
    song = paginatedSongs.map((Song, index) => (
      <li className={styles.songItem} key={index}>
        {Song.title} - {Song.length}
      </li>
    ));
  } else if (songs === null) {
    song = { error };
  }
  return (
    <div className={styles.songPage}>
      <ul className={styles.song}>{song}</ul>
      <div className={styles.pagination}>
        <div> Page {pageNumber} </div>
        <div>
          <button className={styles.listBtn} onClick={previousHandler}>
            {" "}
            <span>Previous</span>
          </button>
          <button className={styles.listBtn} onClick={nextHandler}>
            {" "}
            <span>Next</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Song;
