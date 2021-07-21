import HomePage from './homePage/homePage';
import './App.css';
import DemoCarousel from './Carousel/CarouselProvider';

function App() {
  return (
    <div className="App">
      <HomePage/>
      <DemoCarousel/>
    </div>
  );
}

export default App;
