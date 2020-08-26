// React, React Router, Material UI
import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { withStyles } from '@material-ui/core/styles';

// Layout
import {
  NavBar,
  Footer
} from './layout';

// Pages
import {
  Splash,
  About,
  Past,
  Start,
  Login,
  Dash
} from './pages/';

// Parts/Tools
import {
  PrivateRoute
} from './parts';

// Testing
import {
  FakeAuth
} from './test';

const Register = () => <h1>Register</h1>;

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
            <Route path="/examples" component={Past} />
            <Route path="/start" component={Start} />
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