import React from 'react'
import {Switch, Route} from "react-router-dom"
const SignIn = React.lazy(() => import("./Pages/SignIn/SignIn/signIn"));
const SignUp = React.lazy(() => import("./Pages/SignUp/signUp"));
const AlbumDetails = React.lazy(() =>
  import("./Pages/AlbumDetail/albumDetails")
);
const AlbumCarousel = React.lazy(() =>
  import("./Pages/Carousel/carouselProvider")
);
const Logout = React.lazy(()=> import("./Pages/Logout/logout"))
const Routing=()=> {
    
    return (
        <Switch>
          <Route
            path="/"
            exact
            render={() => (
              <AlbumCarousel />
            )}
          />
          <Route
            path="/SignIn"
            exact
            render={() => (
                <SignIn />

            )}
          />
          <Route
            path="/SignUp"
            exact
            render={() => (
              
                <SignUp />
              
            )}
          />
          <Route
            path="/albums/:id"
            exact
            render={() => (
                
                <AlbumDetails />
            )}
          />
          <Route
            path="/Logout"
            exact
            render={() => (
              
                <Logout />
             
            )}/>
          <Route
            exact
            render={() => <h1 className="notFound">Page not found.</h1>}
          />
        </Switch>
    )
}

export default Routing;