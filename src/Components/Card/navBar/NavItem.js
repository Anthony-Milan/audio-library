import React from 'react';
import styles from './navItem.module.css';
import {NavLink} from "react-router-dom";
const NavItem = ( {link, children, clicked} ) => (
    <li className={styles.NavItem}>
        <NavLink onClick={clicked} activeClassName='active' activeStyle={{color: "#bd3100", backgroundColor:"white"}} to={link}>{children}</NavLink>
    </li>
);

export default NavItem;