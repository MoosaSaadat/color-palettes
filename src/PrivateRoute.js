import React from "react";
import { Route, Redirect } from "react-router-dom";

function PrivateRoute({ authUser, ...rest }) {
  const currPath = rest.path;
  if (authUser && (currPath == "/signin" || currPath == "/signup")) {
    return <Redirect to="/" />;
  } else if (!authUser && currPath != "/signin" && currPath != "/signup") {
    return <Redirect to="/signin" />;
  }
  console.log("Redirecting to ", authUser, currPath);
  return <Route {...rest} />;
}

export default PrivateRoute;
