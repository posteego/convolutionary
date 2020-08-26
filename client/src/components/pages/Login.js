import React, { Component } from 'react';
import { Redirect } from "react-router-dom";

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
    let { from } = this.props.location.state || { from: { pathname: "/" } };
    let { redirectToReferrer } = this.state;

    if (redirectToReferrer) return <Redirect to={from} />;

    if (from.pathname === '/dashboard') {
      return (
        <LoginForm redirect />
      );
    }

    return (
      <LoginForm />
    );
  }
}

export default (Login);