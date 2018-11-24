import React from 'react';
import { Link } from 'react-router-dom';

import {
  AppBar,
  Toolbar,
  Button,
  Typography
} from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';


function AboutLink(classes) {
  return (
    <Button color="inherit" className={classes.about}>
      About
    </Button>
  );
}

function GuestBar(classes) {
  return (
    <AppBar position="static" color="inherit" className={classes.appBar}>
      <Toolbar>
        <Typography variant="h6" color="inherit" noWrap
          className={classes.guestTitle}>
          <Link to="/" className={classes.link}>
            Convolutionary
          </Link>
        </Typography>
        <Link to="/about" className={classes.link}>
          <AboutLink {...classes} />
        </Link>
        <Link to="/login" className={classes.link}>
          <Button color="primary" variant="contained"
            className={classes.login}>
            Log In
          </Button>
        </Link>
      </Toolbar>
    </AppBar>
  );
}

function UserBar(classes) {
  return (
    <AppBar position="static" color="primary" className={classes.appBar}>
      <Toolbar>
        <Typography variant="h6" color="inherit" noWrap className={classes.userTitle}>
          <Link to="/dashboard" className={classes.link}>
            Convolutionary
          </Link>
        </Typography>
        <Link to="/dashboard" className={classes.link}>
          <Button color="inherit" className={classes.dash}>
            Dashboard
          </Button>
        </Link>
        <Link to="/about" className={classes.link}>
          <AboutLink {...classes} />
        </Link>
        <Button color="secondary" variant="outlined"
          className={classes.navlink}>
          Log Out
        </Button>
      </Toolbar>
    </AppBar>
  );
}

function NavBar(props) {
  const isLoggedIn = props.isLoggedIn;
  const { classes } = props;

  if (isLoggedIn) {
    return <UserBar {...classes} />
  }

  return <GuestBar {...classes} />
}

const styles = {
  appBar: {
    fontFamily: "Roboto",
  },
  guestTitle: {
    flex: 24,
    margin: 0,
    fontWeight: 'bold',
  },
  about: {
    flex: 2,
    fontSize: 15,
  },
  login: {
    flex: 2,
    margin: 5,
    color: '#fefefe',
    fontSize: 15,
  },
  userTitle: {
    flex: 17,
    margin: 0,
    fontWeight: 'bold',
  },
  navlink: {
    flex: 1,
    marginLeft: 5,
  },
  link: {
    textDecoration: 'none',
    color: 'inherit',
    fontSize: 24,
  },
  dash: {
    flex: 1,
    textDecoration: 'none',
    fontWeight: 'bold',
  },
};

export default withStyles(styles)(NavBar);