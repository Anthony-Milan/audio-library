import React from "react";
import styles from "./homePage.module.css";

const HomePage = (props) => {
  return (
    <div>
      <ul className={styles.navigation}>
        <li>
          <a href="https://euriskomobility.com/">Home</a>
        </li>
        <li>
          <a href="https://euriskomobility.com/web-development-website-design-services/">
            About
          </a>
        </li>
        <li className={styles.Logo}><a>Your Audio Library!</a></li>
      </ul>
      <br />
      <p className={styles.intro}>Welcome to your Audio Library!</p>
    </div>
  );
};
export default HomePage;
