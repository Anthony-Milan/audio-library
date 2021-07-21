import React, { useState } from "react";
import {
  CarouselProvider,
  Slider,
  ButtonBack,
  ButtonNext,
} from "pure-react-carousel";
import "pure-react-carousel/dist/react-carousel.es.css";
import Carousel from "./Carousel";

const DemoCarousel = (props) => {
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
    setShow(!show);
    let toggle = document.getElementById("tracks");
    toggle.innerHTML = show ? "Show Tracks" : "Hide Tracks";
  };

  return (
    <CarouselProvider
      naturalSlideWidth={100}
      naturalSlideHeight={100}
      totalSlides={10}
      visibleSlides={3}
    >
      <button id="tracks" onClick={toggleTracksHandler}>
        {" "}
        Show Tracks{" "}
      </button>
      <Slider>
        <Carousel currentIndex={currentIndex} show={show} />
      </Slider>
      <ButtonBack onClick={() => setCurrentIndex(currentIndex - 1)}>
        Back
      </ButtonBack>

      <ButtonNext onClick={() => setCurrentIndex(currentIndex + 1)}>
        Next
      </ButtonNext>
    </CarouselProvider>
  );
};
export default DemoCarousel;
