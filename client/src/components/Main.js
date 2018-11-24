import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import { NavBar, Footer } from './layout';
import Splash from './pages/Splash';
import About from './pages/About';
import Login from './pages/Login';
import Dash from './pages/Dash';
import PrivateRoute from './parts/PrivateRoute';

import { withStyles } from '@material-ui/core/styles';

import FakeAuth from './test/FakeAuth';

const Register = () => <h1>Register</h1>

class Main extends Component {
  render() {
    const { classes } = this.props;
    return (
      <Router>
        <div className={classes.layout}>
          <NavBar isLoggedIn={FakeAuth.isLoggedIn} />
          <div className={classes.main}>
            <Route exact path="/" component={Splash} />
            <Route path="/about" component={About} />
            <Route path="/login" component={Login} />
            <Route path="/register" component={Register} />
            <PrivateRoute path="/dashboard" component={Dash} />
          </div>
          <Footer />
        </div>
      </Router>
    );
  }
}

const styles = {
  layout: {
    display: 'flex',
    minHeight: '100vh',
    flexDirection: 'column'
  },
  main: {
    flex: '1 0 auto'
  }
};

export default withStyles(styles)(Main);