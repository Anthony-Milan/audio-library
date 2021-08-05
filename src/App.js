import "./App.css";
import React, { Component } from "react";
import {BrowserRouter} from 'react-router-dom';
import DemoCarousel from "./Components/Card/Carousel/CarouselProvider";
import Layout from "./Pages/Layout/Layout";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
      <div className="App">
      <Layout/>
      
    
      </div>
      </BrowserRouter>
    );
  }
}

export default App;
