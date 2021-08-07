import React, { Component } from 'react';
import {NavLink} from "react-router-dom";
import styles from "./errors.module.css";
class Errors extends Component {
    render() {
        return (
            <div className={styles.Invalid}>
                <h1>Error creating your account</h1>
                <NavLink to="/SignUp"><p>Click here to try again.</p></NavLink>
            </div>
        )
    }
}
export default Errors;
