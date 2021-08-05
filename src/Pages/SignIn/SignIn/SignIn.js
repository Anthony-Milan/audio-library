import React, { Component } from "react";
import styles from "./SignIn.module.css";
import { NavLink } from "react-router-dom";
import Input from "../../../Components/Card/Input/Input";
const validEmailRegex = RegExp(
  /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i
);
class SignIn extends Component {
  state = {
    email: null,
    password: null,
    errors: {
      email: "",
      password: "",
    },
  };
  handleSubmit = (event) => {
    event.preventDefault();
    const { input, value } = event.target;
    let errors = this.state.errors;

    switch (input) {
      case "email":
        errors.email = validEmailRegex.test(value)
          ? ""
          : "Email or Password Invalid";
        break;
      case "password":
        errors.password = value.length < 8 ? "Email or Password Invalid" : "";
        break;
      default:
        break;
    }

    this.setState({ errors, [input]: value }, () => {
      console.log(errors);
    });
  };

  submissionHandler = (event) => {
    event.preventDefault();
    if (this.validateForm(this.state.errors)) {
      console.info("Valid Form");
    } else {
      console.error("Invalid Form");
    }
  };
  validateForm = (errors) => {
    let valid = true;
    Object.values(errors).forEach(
      // if we have an error string set valid to false
      (val) => val.length > 0 && (valid = false)
    );
    return valid;
  };

  render() {
    const {errors} = this.state;
    return (
      <div className={styles.Wrapper}>
        <form onSubmit={this.submissionHandler}>
          <h2>Sign in</h2>
          <Input
            label="Email: "
            inputtype="input"
            type="email"
            name="email"
            placeholder="Email address"
            required
            onChange={this.changeHandler}
            noValidate
          />
          {errors.email.length > 0 && <span className="errors">{errors.email}</span>}
          <Input
            label="Password: "
            inputtype="input"
            type="password"
            name="password"
            placeholder="Password"
            required
            onChange={this.changeHandler}
            noValidate
          />
          {errors.password.length > 0 && <span className="errors">{errors.password}</span>}
          <Input inputtype="submit" type="submit" value="Sign In" />
        </form>
        <NavLink className={styles.redirect} to="/SignUp">
          New to Audio library? Sign Up here.
        </NavLink>
      </div>
    );
  }
}
export default SignIn;
