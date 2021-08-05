import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import Input from "../../Components/Card/Input/Input";
import styles from "./SignUp.module.css";

const validEmailRegex = RegExp(
  /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i
);
const validNameRegex = RegExp(/^[a-z ,.'-]+$/i);
export default class SignUp extends Component {
  state = {
    password:"",
    confirmPass:"",

    errors: {
      fname: "",
      lname: "",
      email: "",
      password: "",
      confirmPass: "",
    },
  };
  changeHandler = (event) => {
    event.preventDefault();
    const { name, value } = event.target;
    let errors = this.state.errors;
    const { password, confirmPass } = this.state;
    if (password !== confirmPass) {
      errors.password = "Passwords don't match";
      errors.confirmPass = "Passwords don't match";
    }
    switch (name) {
      case "fname":
        errors.fname = validNameRegex.test(value) ? "" : "First Name Invalid";
        break;
      case "lname":
        errors.fname = validNameRegex.test(value) ? "" : "Last Name Invalid";
        break;
      case "email":
        errors.email = validEmailRegex.test(value) ? "" : "Email Invalid";
        break;
      case "password":
        errors.password = value.length < 8 ? "Password Invalid" : "";
        break;
      case "confirmPass":
        errors.confirmPass = value.length < 8 ? "Password Invalid" : "";
        break;
      default:
        break;
    }

    this.setState({ errors, [name]: value }, () => {
      console.log(errors);
    });
  };

  submissionHandler = (event) => {
    event.preventDefault();
    if (this.validateForm(this.state.errors)) {
      this.props.history.push("/");
    } else {
      this.props.history.push("/ErrorSignUp");
    }
  };
  validateForm = (errors) => {
    let valid = true;
    Object.values(errors).forEach((val) => val.length > 0 && (valid = false));
    return valid;
  };
  render() {
    return (
      <div className={styles.Wrapper}>
        <form onSubmit={this.submissionHandler}>
          <h2>Sign Up</h2>
          <Input
            label="First Name: "
            inputtype="input"
            type="text"
            name="fname"
            placeholder="John"
            required
            noValidate
            onChange={this.changeHandler}
          />
          <Input
            label="Last Name: "
            inputtype="input"
            type="text"
            name="lname"
            placeholder="Doe"
            required
            noValidate
            onChange={this.changeHandler}
          />
          <Input
            label="Email: "
            inputtype="input"
            type="email"
            name="email"
            placeholder="Email address"
            required
            noValidate
            onChange={this.changeHandler}
          />
          <Input
            label="Password: "
            inputtype="input"
            type="password"
            name="password"
            placeholder="Password"
            value={this.state.password}
            required
            noValidate
            onChange={this.changeHandler}
          />
          <Input
            label="Confirm Password: "
            inputtype="input"
            type="password"
            name="confirmPass"
            placeholder="Confirm Password"
            value={this.state.confirmPass}
            required
            noValidate
            onChange={this.changeHandler}
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
