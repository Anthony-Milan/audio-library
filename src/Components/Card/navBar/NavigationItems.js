import React, { Component } from "react";
import styles from "./NavigationItems.module.css";
import NavItem from "./NavItem";
export default class NavigationItems extends Component {
  render() {
    return (
      <div>
        <ul className={styles.Navigation}>
          <NavItem link="/SignUp">Sign Up</NavItem>
          <NavItem link="/SignIn">Sign in</NavItem>
        </ul>
      </div>
    );
  }
}
