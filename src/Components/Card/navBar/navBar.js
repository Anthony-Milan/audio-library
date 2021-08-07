import React, { Component } from "react";
import styles from "./navBar.module.css";
import {NavLink} from "react-router-dom";

import MobileToggle from "./Mobile/mobileToggle";
import Logo from "../../Logo/logo";

import NavigationItems from "./navigationItems";


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
        
        </>
    )
  }
}
export default NavBar;
