import React, { useState, useEffect } from "react";
import axios from "../../services";
import { withRouter } from "react-router-dom";
import Loader from "../../Components/Card/Loader/loader";
import styles from "./albumDetails.module.css";
import Song from "../../Components/Song/song";
const AlbumDetails = (props) => {
  const [fullAlbum, setFullAlbum] = useState(null);
  const [songs, setSongs] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    loadAlbum();
  }, []);

  useEffect(() => {
    loadAlbum();
  });
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
  // const loadSongs = () => {
  //   axios
  //     .get(
  //       "https://audio-library-ed318-default-rtdb.europe-west1.firebasedatabase.app/albums/" +
  //         (props.match.params.id - 1) +
  //         "/songs.json"
  //     )
  //     .then((response) => {
  //       if (response.ok) return response.json();
  //       throw new Error("something went wrong while requesting posts");
  //     })
  //     .then((responseData) => {
  //       const tmpSongArray = [];
  //       for (const key in responseData) {
  //         tmpSongArray.push({
  //           id: key,
  //           title: responseData[key].title,
  //           length: responseData[key].length,
  //         });
  //         setSongs(tmpSongArray);
  //       }
  //     })
  //     .catch((error) => {
  //       setError(error.message);
  //     });
  // };

  let album = <p>Please select a Post!</p>;
  if (props.match.params.id) {
    album = (
      <p>
        <Loader />
      </p>
    );
  }
  if (fullAlbum) {
    album = (
      <div className={styles.Wrapper}>
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
      </div>
    );
  }

  return { album };
};

export default withRouter(AlbumDetails);
