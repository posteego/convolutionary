import React from 'react';
import { Route, Redirect } from 'react-router-dom';

import FakeAuth from '../test/FakeAuth';

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route {...rest} render={props => (
    FakeAuth.isLoggedIn === true
      ? <Component {...props} />
      : <Redirect to={{
        pathname: "/login",
        state: { from: props.location },
      }} />
  )} />
);

export default PrivateRoute;