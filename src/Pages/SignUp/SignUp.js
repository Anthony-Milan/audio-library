import React, { Component } from "react";
import { NavLink,withRouter } from "react-router-dom";
import Input from "../../Components/Card/Input/input";
import styles from "./signUp.module.css";
import axios from "../../services";
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
    },
    loading:false,
    tooltip: false,
  };
  changeHandler = (event) => {
    event.preventDefault();
    const { name, value } = event.target;
    let errors = this.state.errors;
    const { password, confirmPass } = this.state;
    if (password !== confirmPass) {
      errors.password = "Passwords don't match";
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
    if (!this.validateForm(this.state.errors)) {
      const user={
        fname: this.state.fname,
        lname: this.state.lname,
        email: this.state.email,
        password: this.state.password
      }
      this.setState({loading: true})
      axios.post('https://audio-library-ed318-default-rtdb.europe-west1.firebasedatabase.app/users.json', user)
      .then(response=>{
        this.setState({loading: false})
      })
      .catch(error=>{
        this.setState({loading:false})
      })
      this.props.history.push("/");
    } else {
      this.showTooltip(true);
    }
  };
  showTooltip = (tooltip) => {
    if (tooltip) {
      this.setState((prevState) => {
        return { tooltip: !prevState.tooltip };
      });
    }
  };
  validateForm = (errors) => {
    let valid = true;
    Object.values(errors).forEach((val) => val.length > 0 && (valid = false));
    return valid;
  };
  render() {
    if(this.state.loading){
      <Loader/>
    }
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
            onClick={this.showTooltip}
          />{" "}
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
        </form>
        <NavLink className={styles.redirect} to="/SignIn">
          Already have an account? Sign In here.
        </NavLink>
      </div>
    );
  }
}
export default withRouter(SignUp)
