import React, { useState, useEffect } from "react";
import { NavLink, withRouter } from "react-router-dom";
import Input from "../../Components/Card/Input/input";
import styles from "./signUp.module.css";
import { connect } from "react-redux";
import * as actionTypes from "../../Store/actions/authentication";
import Loader from "../../Components/Card/Loader/loader";
const validEmailRegex = RegExp(
  // eslint-disable-next-line no-useless-escape
  /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i
); // eslint-disable-next-line no-useless-escape
const validNameRegex = RegExp(/^[a-z ,.'-]+$/i);

const SignUp = (props) => {
  const [signUpForm, setSignUpForm] = useState({
    fname: {
      inputType: "input",
      label: "First Name:",
      type: "text",
      placeholder: "John",
      value: "",
      validation: {
        required: true,
        isName: true,
      },
      valid: false,
    },
    lname: {
      inputType: "input",
      label: "Last Name:",
      type: "text",
      placeholder: "Doe",
      value: "",
      validation: {
        required: true,
        isName: true,
      },
      valid: false,
    },

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
    },
    confirmPass: {
      inputType: "input",
      label: "Confirm Password:",
      type: "password",
      placeholder: "Confirm Password",
      value: "",
      validation: {
        required: true,
        minLength: 8,
      },
      valid: false,
    },
  });
  const [error, setError] = useState("");

  const changeHandler = (event, identifier) => {
    event.preventDefault();
    const changedInput = {
      ...signUpForm,
      [identifier]: {
        ...signUpForm[identifier],
        value: event.target.value,
        valid: validateForm(
          event.target.value,
          signUpForm[identifier].validation
        ),
      },
    };
    setSignUpForm(changedInput);
  };

  const submissionHandler = (event) => {
    event.preventDefault();
      props.onAuth(signUpForm.email.value, signUpForm.password.value);

  };

  const validateForm = (value, params) => {
    let valid = true;
    if (!params) {
      return true;
    }
    if (params.required) {
      valid = value.trim() !== "" && valid;
    }
    if (params.minLength) {
      valid = value.length >= params.minLength && valid;
    }
    if (params.isEmail) {
      valid = validEmailRegex.test(value) && valid;
    }

    if (params.isName) {
      valid = validNameRegex.test(value) && valid;
    }
    if (signUpForm.password.value !== signUpForm.confirmPass.value){
      setError("Passwords don't match")
        valid = false
    }
    return valid;
  };
  const SignUpArray = [];
  for (let key in signUpForm) {
    SignUpArray.push({
      id: key,
      config: signUpForm[key],
    });
  }
  let form = SignUpArray.map((formElem) => (
    <Input
      key={formElem.id}
      inputtype={formElem.config.inputType}
      type={formElem.config.type}
      label={formElem.config.label}
      placeholder={formElem.config.placeholder}
      value={formElem.config.value}
      changed={(event) => changeHandler(event, formElem.id)}
    />
  ));

  if (props.loading) {
    form = <Loader />;
  }
  let errorMsg = null;
  if (error) {
    errorMsg = <p className={styles.error}>{error}</p>;
  }
  return (
    <div className={styles.Wrapper}>
      <form onSubmit={submissionHandler}>
        <h2>Sign Up</h2>
        {form}
        <p>Password must contain a minimum of 8 characters.</p>
        <Input inputtype="submit" type="submit" value="Sign Up" />
      </form>
      {errorMsg}
      <NavLink className={styles.redirect} to="/SignIn">
        Already have an account? Sign In here.
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
      dispatch(actionTypes.authenticate(email, password)),
    authErr: (error) => dispatch(actionTypes.authInvalid(error)),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(withRouter(SignUp));
