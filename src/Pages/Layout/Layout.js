import React, {useState} from 'react';
import styles from './layout.module.css';
import NavBar from '../../Components/Card/navBar/navBar';
import MobileNav from '../../Components/Card/navBar/Mobile/mobileNav';
import {connect} from "react-redux";
    const Layout = (props)=>{
    const [show, setShow] = useState(false)

    const sideDrawerClosedHandler = () => {
        setShow(false);
    }

    const sideDrawerToggleHandler = () => {
        setShow( ( prevState ) => !prevState);
    }


        return (
                <>
                <NavBar isAuth={props.isAuth} drawerToggleClicked={sideDrawerToggleHandler} />
                <MobileNav
                isAuth={props.isAuth}
                    open={show}
                    closed={sideDrawerClosedHandler} />
                <main className={styles.Content}>
                    {props.children}
                </main>
                </>        
           )
    }
const mapStateToProps = state =>{
    return{
        isAuth: state.auth.token !== null
    }
}
export default connect(mapStateToProps)(Layout);
