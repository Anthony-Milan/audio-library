import React from "react";
import styles from "./navBar.module.css";
import {NavLink} from "react-router-dom";

import MobileToggle from "./Mobile/mobileToggle";
import Logo from "../../Logo/logo";

import NavigationItems from "./navigationItems";


const NavBar = ({drawerToggleClicked, isAuth})=> {
    return( 
      <>
        <header className={styles.Overhead}>
          <MobileToggle clicked={drawerToggleClicked} />
          <div className={styles.Logo}>
          <NavLink to="/">
            <Logo/>
            </NavLink>
          </div>
          <nav className={styles.Desktop}>
            <NavigationItems isAuth={isAuth}/>
          </nav>
        </header>
        
        </>
    )
}
export default NavBar;
