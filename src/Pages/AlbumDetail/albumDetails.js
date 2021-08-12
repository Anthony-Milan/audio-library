import React, { Component } from "react";
import axios from "../../services";
import { withRouter } from "react-router-dom";
import Loader from "../../Components/Card/Loader/loader";
import styles from "./albumDetails.module.css";
import Pagination from "../../Components/Pagination/pagination";
import Song from "../../Components/Song/song"
class AlbumDetails extends Component {
  state = {
    fullAlbum: null,
    songs: [],
    error: "",
  };

  componentDidMount() {
    this.loadAlbum();
    this.loadSongs();
  }

  componentDidUpdate() {
    this.loadAlbum();
    console.log(this.state.fullAlbum)
    console.log(this.state.songs)
  }
  loadAlbum() {
    if (this.props.match.params.id) {
      if (
        !this.state.fullAlbum ||
        (this.state.fullAlbum &&
          this.state.fullAlbum.id !== +this.props.match.params.id)
      ) {
        axios
          .get(
            "https://audio-library-ed318-default-rtdb.europe-west1.firebasedatabase.app/albums/" +
              (this.props.match.params.id - 1) +
              ".json"
          )
          .then((res) => {
            this.setState({ fullAlbum: res.data });
          });
      }
    }
    
  }
  loadSongs() {
    axios.get(
      "https://audio-library-ed318-default-rtdb.europe-west1.firebasedatabase.app/albums/" +
        (this.props.match.params.id - 1) +
        "/songs.json"
    )
    .then((response) => {
        if (response.ok) return response.json();
        throw new Error('something went wrong while requesting posts');
      })
    .then((response)=>{
      this.setState({songs: response.data})
    })
    .catch((error)=>{
      this.setState({errors: error.message})
    })
  }

  render() {
    let Pagination = <h1>Album is empty, come back later!</h1>
    if(this.state.songs.length>0){
      Pagination = (
          <Pagination
            data={this.state.songs}
            RenderComponent={Song}
            pageLimit={2}
            dataLimit={3}
          />)
    }
    let album = <p style={{ textAlign: "center" }}>Please select a Post!</p>;
    if (this.props.match.params.id) {
      album = (
        <p style={{ textAlign: "center" }}>
          <Loader />
        </p>
      );
    }
    if (this.state.fullAlbum) {
      album = (
        <div className={styles.Wrapper}>
          <div className={styles.AlbumCover}>
            <img
              className={styles.AlbumCoverIMG}
              src={this.state.fullAlbum.pictureSrc}
              alt="Album Cover"
            />
          </div>
          <div className={styles.Title}>
            <h1>{this.state.fullAlbum.aname}</h1>
            <h2>
              {this.state.fullAlbum.band} - {this.state.fullAlbum.release}
            </h2>
            <h3>{this.state.fullAlbum.nbOfTracks} tracks</h3>
          </div>
          {Pagination}
        </div>
        
      );
    }
    
    return (
    <>
    {album}
    
    
    </>);
  }
}

export default withRouter(AlbumDetails);
