import React from "react";
import { Route, Redirect } from "react-router-dom";

const PrivateRouter = ({component: Component, ...rest}) => {
  

  return (
      <Route
        {...rest}
        render = {(routeProps) => (
            localStorage.getItem('token') ? <Component {...routeProps} /> : <Redirect to={
              {
                pathname: '/'
              }
            } />
        )}
      ></Route>
  )
};

export default PrivateRouter