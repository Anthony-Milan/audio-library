import React, { Component } from "react";
import styles from "./NavBar.module.css";
import { Route, Switch,NavLink} from "react-router-dom";
import DemoCarousel from "../Carousel/CarouselProvider";
import MobileToggle from "./Mobile/MobileToggle";
import Logo from "../Logo";
import asyncComp from "../../../hoc/asyncComp";
import NavigationItems from "./NavigationItems";
const AsyncSignIn = asyncComp(() => {
  return import("../../../Pages/SignIn/SignIn/SignIn");
});
const AsyncSignUp = asyncComp(() => {
  return import("../../../Pages/SignUp/SignUp");
});
const AsyncErrorSignIn = asyncComp(() => {
  return import("../../../Pages/Errors/Errors");
});
const AsyncErrorSignUp = asyncComp(() => {
  return import("../../../Pages/Errors/ErrorUp");
});
class NavBar extends Component {
  render() {
    return( <>
        <header className={styles.Overhead}>
          <MobileToggle clicked={this.props.drawerToggleClicked} />
          <div className={styles.Logo}>
          <NavLink to="/">
            <Logo/>
            </NavLink>
          </div>
          <nav className={styles.Desktop}>
            <NavigationItems />
          </nav>
        </header>
        <Switch>
          <Route path="/" exact component={DemoCarousel} />
          <Route path="/SignIn" exact component={AsyncSignIn} />
          <Route path="/SignUp" exact component={AsyncSignUp} />
          <Route path="/ErrorSignIn" component={AsyncErrorSignIn}/>
          <Route path="/ErrorSignUp" component={AsyncErrorSignUp}/>
          <Route
            exact
            render={() => <h1 className={styles.notFound}>Page not found.</h1>}
          />
        </Switch>
        </>
    )
  }
}
export default NavBar;
