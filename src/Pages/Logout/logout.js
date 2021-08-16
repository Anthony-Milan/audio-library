import React from "react";
import { connect } from "react-redux";
import {Redirect} from "react-router-dom"
import * as actionTypes from "../../Store/actions/authentication";
import NavItem from "../../Components/Card/navBar/navItem";
import styles from "./logout.module.css";
const Logout = (props)=>{
    return (
      <>
      <Redirect to="/"/>
      <div className={styles.Wrapper}>
        <h3>Are you sure you want to Log out? We'd be sad to see you go.</h3>
        <ul className={styles.list}>
          
            <NavItem style={{borderLeft:"none"}}
              className={styles.buttons}
              link="/"
              clicked={()=>{props.onLogout(); props.clicked()}}
            >
              Log Out
            </NavItem>
            <NavItem link= "/" clicked={props.clicked}>Cancel</NavItem>
          
        </ul>
      </div>
      </>
    );
  }
const mapDispatchToProps = (dispatch) => {
  return {
    onLogout: () => dispatch(actionTypes.logout()),
  };
};
export default connect(null, mapDispatchToProps)(Logout);
