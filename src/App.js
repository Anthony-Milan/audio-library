import "./App.css";
import React, { Suspense, useEffect } from "react";
import Layout from "./Pages/Layout/layout";
import Loader from "./Components/Card/Loader/loader";
import Routing from "./routing"
import {connect} from "react-redux"
import {withRouter} from "react-router-dom"
import * as actions from "./Store/actions/authentication"
const App =(props)=>{
  useEffect(()=>{
    props.onTryAutoSignUp()
  },[])
    return (
      <>
      <Layout >
      <Suspense fallback={<Loader />}>
        <div className="App"/>
        <Routing/>
       </Suspense>
       </Layout>
     </>
    );
  }
const mapDispatchToProps = (dispatch)=>{
  return{
    onTryAutoSignUp: ()=> dispatch(actions.authCheckState())
  }
}
export default connect(null, mapDispatchToProps)(withRouter(App));
