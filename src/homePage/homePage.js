import React, {Component} from 'react';
import styles from './homePage.module.css';
class HomePage extends Component{
    render(){
        return(
            <div className="">
            <ul className={styles.navigation}>
            <li><a href="https://euriskomobility.com/">Home</a></li>
            <li><a href="https://euriskomobility.com/web-development-website-design-services/">About</a></li>
            <li className={styles.Logo}><a>  Your Audio Library!</a></li>
            </ul>

          
            </div>
        )
    }
}
export default HomePage;