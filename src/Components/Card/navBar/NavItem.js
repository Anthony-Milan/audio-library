import React from 'react';
import styles from './NavItem.module.css';
import {NavLink} from "react-router-dom";
const NavItem = ( {link, children} ) => (
    <li className={styles.NavItem}>
        <NavLink to={link}>{children}</NavLink>
    </li>
);

export default NavItem;