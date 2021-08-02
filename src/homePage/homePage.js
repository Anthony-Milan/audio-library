import React, { Component } from "react";
import styles from "./homePage.module.css";


  class HomePage extends Component{
    render(){
    return (
    <div className={styles.overhead}>
      <ul className={styles.navigation}>
        <li>
          <a href="https://euriskomobility.com/">Home</a>
        </li>
        <li>
          <a href="https://euriskomobility.com/web-development-website-design-services/">
            About
          </a>
        </li>
        <li><img className={styles.logoImg} src="Audio-Library Logo.png" alt="logo"></img></li>
        <li><a>Your Audio Library!</a></li>
      </ul>
      <br/>
    </div>
  );
    }
};
export default HomePage;
