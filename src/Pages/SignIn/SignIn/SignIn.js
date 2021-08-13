import React, { useState } from "react";
import styles from "./signIn.module.css";
import { NavLink, withRouter } from "react-router-dom";
import Input from "../../../Components/Card/Input/input";
import * as actionTypes from "../../../Store/actions/authentication";
import { connect } from "react-redux";
import Loader from "../../../Components/Card/Loader/loader";

const validEmailRegex = RegExp(
  // eslint-disable-next-line no-useless-escape
  /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i
);

const SignIn = (props) => {
  const [signInForm, setSignInForm] = useState({
    email: {
      
      inputType: "input",
      label: "Email",
      type: "email",
      placeholder: "Example@gmail.com",
      value: "",
      validation: {
        required: true,
        isEmail: true,
      },
      valid: false,
    },
    password: {
      
      inputType: "input",
      label: "Password",
      type: "password",
      placeholder: "Password",
      value: "",
      validation: {
        required: true,
        minLength: 8,
      },
      valid: false,
    }
  });

  const changeHandler = (event, identifier) => {
    event.preventDefault();
    const changedInput = ({...signInForm, 
    [identifier]:({...signInForm[identifier],
     value:event.target.value,
      valid:
      validateForm(event.target.value,
       signInForm[identifier].validation),
       })
       });
       setSignInForm(changedInput)
  }
  const submissionHandler = (event) => {
      event.preventDefault();
      props.onAuth(signInForm.email.value, signInForm.password.value);
    }

  const validateForm = (value, params) => {
    let valid = true;
    if ( !params ) {
        return true;
    }
    if ( params.required ) {
        valid = value.trim() !== '' && valid;
    }
    if ( params.minLength ) {
        valid = value.length >= params.minLength && valid
    }
    if ( params.isEmail ) {
        valid = validEmailRegex.test(value) && valid
    }
    return valid;
  };

  const SignInArray = [];
  for (let key in signInForm) {
    SignInArray.push({
      id: key,
      config: signInForm[key],
    });
  }
  let form = SignInArray.map((formElem) => (
    <Input
      key={formElem.id}
      inputtype={formElem.config.inputType}
      type={formElem.config.type}
      label={formElem.config.label}
      placeholder={formElem.config.placeholder}
      value={formElem.config.value}
      changed={event => changeHandler(event, formElem.id)}
    />
  ));
  if (props.loading) {
    form = <Loader />;
  }
  let errorMsg = null;
  if (props.error) {
    errorMsg = <p className={styles.error}>Invalid e-mail or password.</p>;
  }
  return (
    <div className={styles.Wrapper}>
      <form onSubmit={submissionHandler}>
        <h2>Sign in</h2>
        {form}
        <Input inputtype="submit" type="submit" value="Sign In" />
      </form>
      {errorMsg}
      <NavLink className={styles.redirect} to="/SignUp">
        New to Audio library? Sign Up here.
      </NavLink>
    </div>
  );
};
const mapStateToProps = (state) => {
  return {
    loading: state.auth.loading,
    error: state.auth.error,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    onAuth: (email, password) =>
      dispatch(actionTypes.authenticateIn(email, password)),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(withRouter(SignIn));
