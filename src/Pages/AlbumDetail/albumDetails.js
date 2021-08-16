import React, { useState, useEffect } from "react";
import axios from "../../services";
import { withRouter } from "react-router-dom";
import Loader from "../../Components/Card/Loader/loader";
import styles from "./albumDetails.module.css";
import Song from "../../Components/Song/song";
import ReactPaginate from "react-paginate"
const AlbumDetails = (props) => {
  const [fullAlbum, setFullAlbum] = useState(null);
  const [songs, setSongs] = useState([]);
  const [error, setError] = useState("");
  const [page, setPage] = useState(0)
  const [pages, setPages] = useState(0)
  const [perPage, setPerPage]= useState(1)

  useEffect(() => {
    loadAlbum();
    loadSongs();
  }, []);

  useEffect(() => {
    loadAlbum();
  });
  const loadSongs = () => {
    axios
      .get(url + "/songs.json")
      .then((response) => {
        setSongs(response.data);
        setPages(Math.ceil(songs.length/perPage))
        console.log(response)
      })
      .catch((error) => {
        setError(error.message);
      });
  };
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
  const handlePageClick = (event)=>{
    let page=event.selected;

  }
  let album = <p>Please select a Post!</p>;
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
  

  return  (
    <div className={styles.Wrapper}>
    {album}
    <div className={styles.vertical}>
    </div>
    <div className={styles.Songs}>
    <Song url={url}/>
    <ReactPaginate
    previousLabel={'Previous'}
    nextLabel={'Next'}
    breakLabel={'...'}
    pageCount={3}
    containerClassName={'pagination'}
    onPageChange={handlePageClick}
    pageRangeDisplayed={1}
    marginPageDisplayed={0}
    />
    </div>
    </div>
     );
};

export default withRouter(AlbumDetails);
