import React, { Component } from 'react';
import styles from './Layout.module.css';
import NavBar from '../../Components/Card/navBar/NavBar';
import MobileNav from '../../Components/Card/navBar/Mobile/MobileNav';

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
        return [
            
                <NavBar drawerToggleClicked={this.sideDrawerToggleHandler} />,
                <MobileNav
                    open={this.state.showSideDrawer}
                    closed={this.sideDrawerClosedHandler} />,
                <main className={styles.Content}>
                    {this.props.children}
                </main>
            
        ]
    }
}

export default Layout;
