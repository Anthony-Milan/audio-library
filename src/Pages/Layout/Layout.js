import React, { Component } from 'react';
import styles from './layout.module.css';
import NavBar from '../../Components/Card/navBar/navBar';
import MobileNav from '../../Components/Card/navBar/Mobile/mobileNav';

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
                <NavBar drawerToggleClicked={this.sideDrawerToggleHandler} />
                <MobileNav
                    open={this.state.showSideDrawer}
                    closed={this.sideDrawerClosedHandler} />
                <main className={styles.Content}>
                    {this.props.children}
                </main>
                </>        
           )
    }
}

export default Layout;
