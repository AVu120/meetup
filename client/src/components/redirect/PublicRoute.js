import React from "react";
import { Route, Redirect } from "react-router-dom";

const PublicRoute = ({ component: Component, isAuthenticated, ...rest }) => {
  return (
    <Route
      {...rest}
      render={(routeProps) =>
        isAuthenticated ? <Redirect to="/" /> : <Component {...routeProps} />
      }
    />
  );
};
export default PublicRoute;
