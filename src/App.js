import HomePage from "./homePage/homePage";
import "./App.css";
import DemoCarousel from "./Carousel/CarouselProvider";
import React, { Component } from "react";

class App extends Component {
  render() {
    return (
      <div className="App">
        <HomePage/>
        <DemoCarousel />
      </div>
    );
  }
}

export default App;
