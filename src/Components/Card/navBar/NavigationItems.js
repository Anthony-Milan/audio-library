import React from "react";
import styles from "./navigationItems.module.css";
import NavItem from "./navItem";
const NavigationItems = ({clicked, isAuth}) => {
    return (
      <div className={styles.ulWrap} >
        <ul className={styles.Navigation} onClick={clicked}>
          {isAuth 
          ? <NavItem link="/Profile">My Profile</NavItem>:<NavItem link="/SignUp">Sign Up</NavItem>}
          {isAuth 
          ? <NavItem link="/Logout">Log Out</NavItem>:<NavItem link="/SignIn">Sign in</NavItem>}
        </ul>
      </div>
    );
  }
  export default NavigationItems;
