import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import axios from "axios";
import {Provider} from "react-redux"
import {createStore, applyMiddleware, compose} from "redux";
import thunk from "redux-thunk"
import reducer from "./Store/reducers/reducer";
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducer, composeEnhancers(
    applyMiddleware(thunk)
));

axios.defaults.headers.post["Content-Type"] = "application/json";
axios.interceptors.request.use(
  (request) => {
    console.log(request);
    return request;
  },
  (error) => {
    console.log(error);
    return Promise.reject(error);
  }
);

axios.interceptors.response.use(
  (response) => {
    console.log(response);
    // Edit request config
    return response;
  },
  (error) => {
    console.log(error);
    return Promise.reject(error);
  }
);
const app= (
  <Provider store={store}>
            <App />
    </Provider>
)
ReactDOM.render(app, document.getElementById("root"));

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
