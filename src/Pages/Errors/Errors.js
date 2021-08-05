import React, { Component } from 'react';
import {NavLink} from "react-router-dom";
import styles from "./Errors.module.css";
class Errors extends Component {
    render() {
        return (
            <div className={styles.Invalid}>
                <h1>Email or Password invalid.</h1>
                <NavLink to="/SignIn"><p>Click here to try again.</p></NavLink>
            </div>
        )
    }
}
export default Errors;
