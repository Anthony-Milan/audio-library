import React, { Component } from 'react';
import styles from './layout.module.css';
import NavBar from '../../Components/Card/navBar/navBar';
import MobileNav from '../../Components/Card/navBar/Mobile/mobileNav';
import {connect} from "react-redux";
class Layout extends Component {
    state = {
        showSideDrawer: false
    }

    sideDrawerClosedHandler = () => {
        this.setState( { showSideDrawer: false } );
    }

    sideDrawerToggleHandler = () => {
        this.setState( ( prevState ) => {
            return { showSideDrawer: !prevState.showSideDrawer };
        } );
    }

    render () {
        
        return (
                <>
                <NavBar isAuth={this.props.isAuth} drawerToggleClicked={this.sideDrawerToggleHandler} />
                <MobileNav
                isAuth={this.props.isAuth}
                    open={this.state.showSideDrawer}
                    closed={this.sideDrawerClosedHandler} />
                <main className={styles.Content}>
                    {this.props.children}
                </main>
                </>        
           )
    }
}
const mapStateToProps = state =>{
    return{
        isAuth: state.auth.token !== null
    }
}
export default connect(mapStateToProps)(Layout);
