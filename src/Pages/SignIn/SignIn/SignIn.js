import React, { Component } from "react";
import styles from "./SignIn.module.css";
import { NavLink } from "react-router-dom";
import Input from "../../../Components/Card/Input/Input";

class SignIn extends Component {
    state ={
        
    }
  render() {
    return (
      <div className={styles.SignInForm}>
        <form>
        <h2>Sign in</h2>
          <Input
            label="Email: "
            inputtype="input"
            type="email"
            name="email"
            placeholder="abc@xyz.com"
          />
          <Input
            label="Password: "
            inputtype="input"
            type="password"
            name="password"
            placeholder="Password"
          />
        </form>
        <NavLink className={styles.redirect} to="/SignUp">New to Audio library? Sign Up here.</NavLink>
      </div>
    );
  }
}
export default SignIn;
