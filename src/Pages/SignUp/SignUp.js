import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import Input from "../../Components/Card/Input/Input";
import styles from "./SignUp.module.css";
export default class SignUp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fullName: null,
      email: null,
      password: null,
      errors: {
        fullName: "",
        email: "",
        password: "",
      },
    };
  }
  handle
  render() {
    return (
      <div className={styles.Wrapper}>
        <form onSubmit={this.signInHandler}>
          <h2>Sign Up</h2>
          <Input
            label="Name: "
            inputtype="input"
            type="text"
            name="email"
            placeholder="Bob"
            required
          />
          <Input
            label="Email: "
            inputtype="input"
            type="email"
            name="email"
            placeholder="Email address"
            required
          />
          <Input
            label="Password: "
            inputtype="input"
            type="password"
            name="password"
            placeholder="Password"
            required
          />
          <Input
            label="Confirm Password: "
            inputtype="input"
            type="password"
            name="password"
            placeholder="Confirm Password"
            required
          />
          <Input inputtype="submit" type="submit" value="Sign Up" />
        </form>
        <NavLink className={styles.redirect} to="/SignIn">
          Already have an account? Sign In here.
        </NavLink>
      </div>
    );
  }
}
