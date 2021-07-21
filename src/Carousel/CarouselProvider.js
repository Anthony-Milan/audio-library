import React from 'react';
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext } from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';
import Carousel from './Carousel';
const DemoCarousel = (props) => {
    return (
      <CarouselProvider
        naturalSlideWidth={100}
        naturalSlideHeight={100}
        totalSlides={10}
        visibleSlides={3}>
        <Slider>
        <Carousel/>
        </Slider>
        <ButtonBack onClick={props.clicked}>Back</ButtonBack>

        <ButtonNext onClick={props.clicked}>Next</ButtonNext>
      </CarouselProvider>
    );
  }
export default DemoCarousel;