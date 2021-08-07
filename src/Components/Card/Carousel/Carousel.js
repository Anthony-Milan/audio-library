import Card from "../Card/card";
import { Slide } from "pure-react-carousel";
import React from "react";
import styles from "./carousel.module.css";
import {Link} from "react-router-dom";
const Carousel =({album, clicked})=>{
        return (
          <Link to={"/"+album._id}>
          <Slide className={styles.slide} key={album._id}>
            <Card
              showNumberbOfTracks={album.showNbOfTracks}
              source={album.pictureSrc}
              band={album.band}
              name={album.aname}
              release={album.release}
              clicked={clicked}
            />
          </Slide>
          </Link>
        );
      };
  
export default Carousel;
