import React, { Component } from "react";
import styles from "./navBar.module.css";
import {Route, NavLink} from 'react-router-dom';
import SignIn from "../../../SignIn/SignIn";
import DemoCarousel from "../Carousel/CarouselProvider";
class NavBar extends Component {
  render() {
    return (
      <div className={styles.overhead}>
      <header>
      <nav>
        <ul className={styles.navigation}>
          <li>
          <NavLink to="/">
            <img
              className={styles.logoImg}
              src="Audio-Library Logo.png"
              alt="logo"
            ></img>
            </NavLink>
          </li>
          <li>
            <NavLink to ="/SignIn">Sign In</NavLink>
          </li>
          <li>
            <NavLink to="/SignUp">Sign Up </NavLink>
          </li>
        </ul>
        </nav>
        </header>
        <Route path="/" exact component={DemoCarousel}/>
        <Route path="/SignIn" exact component={SignIn}/>
      </div>
    );
  }
}
export default NavBar;
