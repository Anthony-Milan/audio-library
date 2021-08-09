import React, { Component } from "react";
import styles from "./signIn.module.css";
import {NavLink, withRouter} from "react-router-dom";
import axios from "../../../services";
import Input from "../../../Components/Card/Input/input";

const validEmailRegex = RegExp( // eslint-disable-next-line no-useless-escape
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
    loading: false
  };
  changeHandler = (event) => {
    event.preventDefault();
    const { name, value } = event.target;
    let errors = this.state.errors;

    switch (name) {
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

    this.setState({ errors, [name]: value }, () => {
      console.log(errors);
    });
  };

  submissionHandler = (event) => {
    event.preventDefault();
    if (this.validateForm(this.state.errors)) {
      this.props.history.push('/')
    } else {
      this.props.history.push('/ErrorSignIn');
    }
  };
  validateForm = (errors) => {
    let valid = true;
    Object.values(errors).forEach((val) => val.length > 0 && (valid = false));
    return valid;
  };
  render(){
    const { errors } = this.state;
    
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
          {errors.email.length > 0}
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
          {errors.password.length > 0}
          <Input inputtype="submit" type="submit" value="Sign In" />
          
        </form>
        <NavLink className={styles.redirect} to="/SignUp">
          New to Audio library? Sign Up here.
        </NavLink>
      </div>
    );
  }
}
export default withRouter(SignIn);
