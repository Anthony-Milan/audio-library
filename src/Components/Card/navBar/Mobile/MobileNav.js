import React from 'react'
import Logo from "../../../Logo/logo";
import NavigationItems from "../navigationItems";
import styles from "./mobileNav.module.css";
import Backdrop from "../../../../images/Backdrop.js";
import { NavLink } from "react-router-dom";
const MobileNav = ({open, closed}) => {
    let attachedClasses = [styles.MobileNav, styles.Closed];
    if(open){
        attachedClasses=[styles.MobileNav, styles.Open];
    }
    return (
        <>
        <Backdrop show={open} clicked={closed}/>
        <div className={attachedClasses.join(' ')}>
            <div onClick={closed} className={styles.Logo}>
            <NavLink to="/">
            <Logo/>
            </NavLink>
            </div>
            <nav>
            <NavigationItems id="mobileNavItems" clicked={closed} className={styles.MobileNavItem}/>
            </nav>
            
        </div>
        </>
    )
    
};

export default MobileNav;
