import * as actionTypes from "./actionTypes";
import axios from "axios"
export const authStart = () => {
  return {
    type: actionTypes.AUTHENTICATE,
  };
};
export const authValid = (token, userId) => {
  return {
    type: actionTypes.AUTH_VALID,
    idToken: token,
    userId: userId
  };
};
export const authInvalid = (error) => {
  return {
    type: actionTypes.AUTH_INVALID,
    error: error
    
  };
  
};
export const logout =()=>{
  return{
    type: actionTypes.AUTH_LOGOUT
  }
}
export const checkAuthTimeout = (expTime)=>{
  return dispatch =>{
     setTimeout(() => {
       dispatch(logout( ))
     }, expTime * 1000);
  }
}
export const authenticate = (email, password) => {
  return dispatch => {
    dispatch(authStart());
    const authData ={
        email: email,
        password: password,
        returnSecureToken: true
    };
    axios.post('https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyCn5bopBDrdjxI-oMayj7MRzSmH6JvRfsc', authData)
    .then(response=>{
        
        dispatch(authValid(response.data.idToken, response.data.localId ))
        dispatch(checkAuthTimeout(response.data.expiresIn))
    })
    .catch(error=>{
        
        dispatch(authInvalid(error.response.data.error))
    })
  };
};
export const authenticateIn = (email, password)=>{
    return dispatch=>{
    dispatch(authStart());
    const authData ={
        email: email,
        password: password,
        returnSecureToken: true
    };
        axios.post("https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyCn5bopBDrdjxI-oMayj7MRzSmH6JvRfsc", authData)
        .then(response=>{
        
        dispatch(authValid(response.data.idToken, response.data.localId ));
        
    })
    .catch(error=>{
        
        dispatch(authInvalid(error.response.data.error))
    })
    }
}
