import React, {Component} from 'react';
import './SignIn.module.css'
class SignIn extends Component{
    render(){
        return(
            <div  className="SignInForm">
            <form>
            UserName <input type="text"/>
            Password <input type="password"/>
            </form>
            </div>
        );
    }
}
export default SignIn;