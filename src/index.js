import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import axios from "axios";
import {Provider} from "react-redux"
import {combineReducers, createStore, applyMiddleware, compose} from "redux";
import thunk from "redux-thunk"
import albumReducer from "./Store/reducers/albumReds";
import authReducer from"./Store/reducers/auth"
import {BrowserRouter} from "react-router-dom"


const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const rootReducer = combineReducers({
  album: albumReducer,
  auth: authReducer
})
const store = createStore(rootReducer, composeEnhancers(
    applyMiddleware(thunk)
));
axios.interceptors.request.use(
  (request) => {
    
    return request;
  },
  (error) => {
    
    return Promise.reject(error);
  }
);
axios.interceptors.response.use(
  (response) => {
    
    return response;
  },
  (error) => {
    
    return Promise.reject(error);
  }
);
const app= (
  <Provider store={store}>
            <BrowserRouter>
              < App />
            </BrowserRouter>
    </Provider>
)
ReactDOM.render(app, document.getElementById("root"));

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
