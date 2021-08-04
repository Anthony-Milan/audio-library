import React, { useState } from "react";
import {
  CarouselProvider,
  Slider,
  ButtonBack,
  ButtonNext,
} from "pure-react-carousel";
import "pure-react-carousel/dist/react-carousel.es.css";
import Carousel from "./Carousel";
import styles from "./Carousel.module.css";

const DemoCarousel = () => {
  // Variable used to track the current slider index
  const [currentIndex, setCurrentIndex] = useState(0);
  // Variable used to show/hide the track numbers
  const [show, setShow] = useState(false);

  /**
   * toggleTracksHandler
   *
   * function to toggle the text of the show tracks button
   */
  const toggleTracksHandler = () => {
    setShow((prev) => !prev);
  };

  return (
    <CarouselProvider
      className={styles.carousel}
      naturalSlideWidth={100}
      naturalSlideHeight={100}
      totalSlides={10}
      visibleSlides={3}
    >
      <button id="tracks" onClick={toggleTracksHandler}>
        {show ? "Hide Tracks" : "Show Tracks"}
      </button>
      <Slider className={styles.slider}>
        <Carousel currentIndex={currentIndex} show={show} />
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
  );
};
export default DemoCarousel;
