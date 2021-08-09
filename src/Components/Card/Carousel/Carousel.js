import Card from "../Card/card";
import { Slide } from "pure-react-carousel";
import React from "react";
import styles from "./carousel.module.css";

const Carousel =({album, clicked, show})=>{
 
        return (
          
          <Slide className={styles.slide} key={album._id}>
            <Card
              show={show}
              source={album.pictureSrc}
              band={album.band}
              name={album.aname}
              release={album.release}
              numberOfTracks={album.nbOfTracks}
              clicked={clicked}
            />
          </Slide>
        
        );
      };
  
export default Carousel;
