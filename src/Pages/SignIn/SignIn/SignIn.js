import React, { Component } from "react";
import styles from "./signIn.module.css";
import {NavLink, withRouter, Redirect} from "react-router-dom";
import Input from "../../../Components/Card/Input/input";
import * as actionTypes from "../../../Store/actions/authentication";
import {connect} from "react-redux"
import Loader from "../../../Components/Card/Loader/loader"

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
      
    });
  };
  
  submissionHandler = (event) => {
    event.preventDefault();
    if (this.validateForm(this.state.errors)) {
      const user={
        email: this.state.email,
        password: this.state.password
      }
      this.setState({loading: true});
      this.props.onAuth(user.email, user.password);
      
    }
  };

  validateForm = (errors) => {
    let valid = true;
    Object.values(errors).forEach((val) => val.length > 1 && (valid = false));
    return valid;
  };
  render(){
    let form = (
      <>
    <h2>Sign in</h2>
          <Input
            label="Email: "
            inputtype="input"
            type="text"
            name="email"
            placeholder="Email address"
            required
            onChange={this.changeHandler}
            noValidate
          />
          
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
          
          <Input inputtype="submit" type="submit" value="Sign In" />
          </>
          )
    if (this.props.loading){
      form=<Loader/>
    }
    let errorMsg=null;
    if (this.props.error){
      errorMsg=(<p className={styles.error}>Invalid e-mail or password.</p>)
    }
    return (
      <div className={styles.Wrapper}>
        <form onSubmit={this.submissionHandler}>
          {form}
        </form>
        {errorMsg}
        <NavLink className={styles.redirect} to="/SignUp">
          New to Audio library? Sign Up here.
        </NavLink>
      </div>
    );
  }
}
const mapStateToProps = state =>{
  return{
     loading: state.auth.loading,
     error: state.auth.error
  }
}
const mapDispatchToProps = dispatch =>{
  return{
    onAuth: (email, password)=>dispatch(actionTypes.authenticateIn(email, password))
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(withRouter(SignIn));
