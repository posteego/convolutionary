import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import { NavBar } from './layout';
import Splash from './pages/Splash';
import Login from './pages/Login';
import PrivateRoute from './parts/PrivateRoute';
import FakeAuth from './test/FakeAuth';

const About = () => <h1>About</h1>
const Dash = () => <h1>Dashboard</h1>
const Register = () => <h1>Register</h1>

class Main extends Component {
  render() {
    return (
      <Router>
        <React.Fragment>
          <NavBar isLoggedIn={FakeAuth.isLoggedIn} />
          <Route exact path="/" component={Splash} />
          <Route path="/about" component={About} />
          <Route path="/login" component={Login} />
          <Route path="/register" component={Register} />
          <PrivateRoute path="/dashboard" component={Dash} />
        </React.Fragment>
      </Router>
    );
  }
}

export default (Main);