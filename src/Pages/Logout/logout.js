import React, { Component } from "react";
import { connect } from "react-redux";
import {Redirect} from "react-router-dom"
import * as actionTypes from "../../Store/actions/authentication";
import NavItem from "../../Components/Card/navBar/navItem";
import styles from "./logout.module.css";
class Logout extends Component {
  render() {
    return (
      <>
      <Redirect to="/"/>
      <div className={styles.Wrapper}>
        <h3>Are you sure you want to Log out? We'd be sad to see you go.</h3>
        <ul className={styles.list}>
          <li>
            <NavItem
              className={styles.buttons}
              link="/"
              clicked={()=>{this.props.onLogout(); this.props.clicked()}}
              
            >
              Log Out
            </NavItem>
          </li>
          <li>
            <NavItem link= "/" clicked={this.props.clicked}>Cancel</NavItem>
          </li>
        </ul>
      </div>
      </>
    );
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    onLogout: () => dispatch(actionTypes.logout()),
  };
};
export default connect(null, mapDispatchToProps)(Logout);
