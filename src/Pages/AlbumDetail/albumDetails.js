import React, { useState, useEffect } from "react";
import axios from "../../services";
import { withRouter } from "react-router-dom";
import Loader from "../../Components/Card/Loader/loader";
import styles from "./albumDetails.module.css";
import Song from "../../Components/Song/songList";
const AlbumDetails = (props) => {
  const [fullAlbum, setFullAlbum] = useState(null);
  useEffect(() => {
    loadAlbum();
    //eslint-disable-next-line
  }, []);
  let url =
    "https://audio-library-ed318-default-rtdb.europe-west1.firebasedatabase.app/albums/" +
    (props.match.params.id - 1);

  const loadAlbum = () => {
    if (props.match.params.id) {
      if (
        !fullAlbum ||
        (fullAlbum && fullAlbum.id !== +props.match.params.id)
      ) {
        axios.get(url + ".json").then((res) => {
          setFullAlbum(res.data);
        });
      }
    }
  };

  let album = <p>Please select an album!</p>;
  if (props.match.params.id) {
    album = <Loader />;
  }
  if (fullAlbum) {
    album = (
      <>
        <div className={styles.AlbumCover}>
          <img
            className={styles.AlbumCoverIMG}
            src={fullAlbum.pictureSrc}
            alt="Album Cover"
          />
        </div>
        <div className={styles.Title}>
          <h1>{fullAlbum.aname}</h1>
          <h2>
            {fullAlbum.band} - {fullAlbum.release}
          </h2>
          <h3>{fullAlbum.nbOfTracks} tracks</h3>
        </div>
      </>
    );
  }

  return (
    <div className={styles.Wrapper}>
      {album}
      <div className={styles.vertical}></div>
      <div className={styles.Songs}>
        <Song url={url} />
      </div>
    </div>
  );
};

export default withRouter(AlbumDetails);
