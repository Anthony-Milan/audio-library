import React, { Component } from "react";
import { NavLink,withRouter } from "react-router-dom";
import Input from "../../Components/Card/Input/input";
import styles from "./signUp.module.css";
import {connect} from "react-redux"
import * as actionTypes from "../../Store/actions/authentication"
import Loader from "../../Components/Card/Loader/loader";
const validEmailRegex = RegExp(
  // eslint-disable-next-line no-useless-escape
  /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i
); // eslint-disable-next-line no-useless-escape
const validNameRegex = RegExp(/^[a-z ,.'-]+$/i);
class SignUp extends Component {
  state = {
    password: "",
    confirmPass: "",
    errors: {
      fname: "",
      lname: "",
      email: "",
      password: "",
      confirmPass: "",
      match: "",
    },
    loading:false,
    tooltip: false,
  };
  changeHandler = (event) => {
    event.preventDefault();
    const { name, value } = event.target;
    let errors = this.state.errors;
    
    
    switch (name) {
      case "fname":
        errors.fname = validNameRegex.test(value) ? "" : "First Name Invalid";
        break;
      case "lname":
        errors.lname = validNameRegex.test(value) ? "" : "Last Name Invalid";
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
      const user={
        email: this.state.email,
        password: this.state.password
      }
      this.setState({loading: true})
      this.props.onAuth(user.email, user.password);
    } else {
      this.props.authErr(this.state.errors.match)
    }
  };
  
  validateForm = (errors) => {
    let valid = true;
    if(this.state.password !== this.state.confirmPass){
      valid = false;
      this.setState(prevState=>({
        errors:{
          ...prevState.errors,
          match: "Passwords don't match"
        }
      }))
    }
    Object.values(errors).forEach((val) => val.length > 0 && (valid = false));
    return valid;
  };
  render() {
      let form =(
        <>
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
            onClick={this.showTooltip}
          />
          <p>Password must contain at least 8 characters.</p>
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
          </>
      )
      if (this.props.loading){
        form = <Loader/>
      }

      let errorMsg=null;
      if(this.state.errors.match){
        errorMsg=(<p className={styles.error}>{this.state.errors.match}</p>)
      }
    return (
      <div className={styles.Wrapper}>
        <form onSubmit={this.submissionHandler}>
          <h2>Sign Up</h2>
          {form}
          </form>
          {errorMsg}
        <NavLink className={styles.redirect} to="/SignIn">
          Already have an account? Sign In here.
        </NavLink>
      </div>
      
    );
  }
}
const mapStateToProps =state=>{
  return{
    loading: state.auth.loading,
    error:state.auth.error
  }
}
const mapDispatchToProps = dispatch =>{
  return{
    onAuth: (email, password)=>dispatch(actionTypes.authenticate(email, password)),
    authErr: (error)=>dispatch(actionTypes.authInvalid(error))
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(withRouter(SignUp))
