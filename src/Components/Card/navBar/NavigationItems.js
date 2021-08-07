import React from "react";
import styles from "./navigationItems.module.css";
import NavItem from "./navItem";
const NavigationItems = ({clicked}) => {
    return (
      <div className={styles.ulWrap} >
        <ul className={styles.Navigation} onClick={clicked}>
          <NavItem link="/SignUp">Sign Up</NavItem>
          <NavItem link="/SignIn">Sign in</NavItem>
        </ul>
      </div>
    );
  }
  export default NavigationItems;
