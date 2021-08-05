import React from 'react'
import Logo from "../../Logo";
import NavigationItems from "../NavigationItems";
import styles from "./MobileNav.module.css";
import Backdrop from "../../../../images/Backdrop.js";
import { NavLink } from "react-router-dom";
const MobileNav = ({open, closed}) => {
    let attachedClasses = [styles.MobileNav, styles.Closed];
    if(open){
        attachedClasses=[styles.MobileNav, styles.Open];
    }
    return [
        <Backdrop show={open} clicked={closed}/>,
        <div className={attachedClasses.join(' ')}>
            <div className={styles.Logo}>
            <NavLink to="/">
            <Logo/>
            </NavLink>
            </div>
            <nav>
            <NavigationItems style={{borderBottom: "1px solid black"}}/>
            </nav>
            
        </div>
    ]
    
};

export default MobileNav;
