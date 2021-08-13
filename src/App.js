import "./App.css";
import React, { Suspense } from "react";
import Layout from "./Pages/Layout/layout";
import Loader from "./Components/Card/Loader/loader";
import Routing from "./routing"
const app =()=>{
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

export default app;
