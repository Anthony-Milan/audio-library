import React from "react";
import {useState} from "react"
import styles from "./navigationItems.module.css";
import NavItem from "./navItem";
import Modal from "../../Modal/modal"
import Logout from "../../../Pages/Logout/logout"
const NavigationItems = ({clicked, isAuth}) => {
  const [show, setShow]= useState(false)
  const showModal= ()=>{
    setShow(true)
  }
  const hideModal= ()=>{
    setShow(false)
  }
    return (
      <>
      <div className={styles.ulWrap} >
          {isAuth 
          ? <NavItem link="/Profile">My Profile</NavItem>:<NavItem link="/SignUp">Sign Up</NavItem>}
          {isAuth 
          ? <NavItem link ="/Logout" clicked={()=>showModal()}>Log Out</NavItem>:<NavItem link="/SignIn">Sign in</NavItem>}
      </div>
            <Modal open={show} closed={()=>hideModal()}>
            <Logout clicked={()=>hideModal()}/>
            </Modal>

      </>
    );
  }
  export default NavigationItems;
