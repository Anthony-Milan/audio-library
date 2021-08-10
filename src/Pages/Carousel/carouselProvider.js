import React, { useState, useEffect } from "react";
import {
  CarouselProvider,
  Slider,
  ButtonBack,
  ButtonNext,
} from "pure-react-carousel";
import axios from "../../services";
import "pure-react-carousel/dist/react-carousel.es.css";
import Carousel from "../../Components/Card/Carousel/carousel";
import styles from "./carouselProvider.module.css";
import {withRouter} from "react-router-dom"
import {connect } from "react-redux";
import * as albumActions from "../../Store/actions/albumActions";

const AlbumCarousel = (props) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [show, setShow] = useState(false );
  const [albums, setAlbums] = useState([]);


  useEffect(() => {
    props.onInitAlbums()
  }, [])

  const toggleTracksHandler = () => {
    setShow((prev) => !prev);
    console.log(show)
  };
  const getAlbumDetailsHandler=(id)=>{
    props.history.push('/albums/' + (id))
  };
  return (
    <>
    <CarouselProvider
      className={styles.carousel}
      naturalSlideWidth={100}
      naturalSlideHeight={100}
      totalSlides={10}
      visibleSlides={3}
    >
      <button className={styles.Tracks} onClick={toggleTracksHandler}>
        {show ? "Hide Tracks" : "Show Tracks"}
      </button>
      <Slider className={styles.slider}>
        {albums.map((albums, index) => (
          <Carousel
            current={currentIndex}
            show={show}
            album={albums}
            key={albums.num}
            clicked={()=>getAlbumDetailsHandler(albums.num)}
          />
        ))}
      </Slider>
      <ButtonBack
        className={styles.buttonPrev}
        onClick={() => setCurrentIndex(currentIndex - 1)}
      >
        <span>Previous</span>
      </ButtonBack>

      <ButtonNext
        className={styles.buttonNext}
        onClick={() => setCurrentIndex(currentIndex + 1)}
      >
        <span>Next</span>
      </ButtonNext>
    </CarouselProvider>
    </>
  );
};
const mapStateToProps = state => {
    return {
        albums: state.albums,
        error: state.error
    };
}
const mapDispatchToProps = dispatch => {
  return{
    onInitAlbums: ()=> dispatch(albumActions.initializeAlbums())
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(withRouter(AlbumCarousel));
