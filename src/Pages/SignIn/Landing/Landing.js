import React, { Component } from "react";
import NavBar from '../Components/Card/navBar/navBar';
import DemoCarousel from '../Components/Card/Carousel/CarouselProvider';

  class Landing extends Component{

    render(){
      return[
        
        <NavBar/>,
        <DemoCarousel/>
        
      ];
    }
};
export default Landing;
