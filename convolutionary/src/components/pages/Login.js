import React, { Component } from 'react';
import { Redirect } from "react-router-dom";
import { withStyles } from '@material-ui/core/styles';

import FakeAuth from '../test/FakeAuth';
import LoginForm from '../parts/LoginForm';

class Login extends Component {
  state = {
    redirectToReferrer: false
  };

  login = () => {
    FakeAuth.authenticate(() => {
      this.setState({ redirectToReferrer: true });
    });
  };

  render() {
    const { classes } = this.props;
    let { from } = this.props.location.state || { from: { pathname: "/" } };
    let { redirectToReferrer } = this.state;

    if (redirectToReferrer) return <Redirect to={from} />;

    if (from.pathname === '/dashboard') {
      return (
        <div>
          <p>You must log in to view your dashboard!</p>
          <h1>Login</h1>
        </div>
      );
    }

    return (
      <React.Fragment>
        <div className={classes.center}>
          <h1>Login</h1>
          <LoginForm />
        </div>
      </React.Fragment>
    );
  }
}

const styles = () => ({
  center: {
    textAlign: 'center',
  }
});


export default withStyles(styles)(Login);