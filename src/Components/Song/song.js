import React, {useState, useEffect} from "react";
import styles from "./song.module.css";
import axios from "../../services"
const Song = ({url}) => {
  const [songs, setSongs]=useState([])
  const [error, setError] = useState("")
  useEffect(()=>{
    loadSongs()
  })
  const loadSongs = () => {
    axios
      .get(url + "/songs.json")
      .then((response) => {
        setSongs(response.data);
        console.log(response)
      })
      .catch((error) => {
        setError(error.message);
      });
  };
  let song = null;
  const songArray = [];
  for (let key in songs) {
    songArray.push({
      id: key,
      data: songs[key]
    })}
  if (songs){
   song = songArray.map((songElem)=>(
     <div
     key={songElem.id}>
     {songElem.data.title}
     {songElem.data.length}
     </div>))
  } else {
    song = error;
  }

  return (
    <div className={styles.song}>
    {song}
    </div>
  );
};

export default Song;
