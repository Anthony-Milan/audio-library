import "./App.css";
import React, { Component, Suspense } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Layout from "./Pages/Layout/layout";
import Loader from "./Components/Card/Loader/loader";
const SignIn = React.lazy(() => import("./Pages/SignIn/SignIn/signIn"));
const SignUp = React.lazy(() => import("./Pages/SignUp/signUp"));
const AlbumDetails = React.lazy(() =>
  import("./Pages/AlbumDetail/albumDetails")
);
const AlbumCarousel = React.lazy(() =>
  import("./Pages/Carousel/carouselProvider")
);
const Logout = React.lazy(()=> import("./Pages/Logout/logout"))
class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route
            path="/"
            exact
            render={() => (
              <Suspense fallback={<Loader />}>
                <AlbumCarousel />
              </Suspense>
            )}
          />
          <Route
            path="/SignIn"
            exact
            render={() => (
              <Suspense fallback={<Loader />}>
                <SignIn />
              </Suspense>
            )}
          />
          <Route
            path="/SignUp"
            exact
            render={() => (
              <Suspense fallback={<Loader />}>
                <SignUp />
              </Suspense>
            )}
          />
          <Route
            path="/albums/:id"
            render={() => (
              <Suspense fallback={<Loader />}>
                <AlbumDetails />
              </Suspense>
            )}
          />
          <Route
            path="/Logout"
            exact
            render={() => (
              <Suspense fallback={<Loader />}>
                <Logout />
              </Suspense>
            )}/>
          <Route
            exact
            render={() => <h1 className="notFound">Page not found.</h1>}
          />
        </Switch>
        <div className="App">
          <Layout />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
