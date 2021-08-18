import Card from "../Card/card";
import { Slide } from "pure-react-carousel";
import React from "react";
import styles from "./carousel.module.css";

const Carousel =({id, album, clicked, show})=>{
 
        return (
          
          <Slide className={styles.slide} key={album.id}>
            <Card
              id={id}
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
