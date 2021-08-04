import React, { Component } from "react";
import styles from "./navBar.module.css";
import { Route, NavLink, Switch } from "react-router-dom";
import DemoCarousel from "../Carousel/CarouselProvider";
import asyncComp from "../../../hoc/asyncComp";

const AsyncSignIn = asyncComp(() => {
  return import("../../../Pages//SignIn/SignIn/SignIn");
});
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
                    alt="Logo"
                  />
                </NavLink>
              </li>
              <li>
                <NavLink to="/SignIn">Sign In</NavLink>
              </li>
              <li>
                <NavLink to="/SignUp">Sign Up </NavLink>
              </li>
            </ul>
          </nav>
        </header>
        <Switch>
          <Route path="/" exact component={DemoCarousel} />
          <Route path="/SignIn" exact component={AsyncSignIn} />
          <Route
            exact
            render={() => <h1 className={styles.notFound}>Page not found.</h1>}
          />
        </Switch>
      </div>
    );
  }
}
export default NavBar;
