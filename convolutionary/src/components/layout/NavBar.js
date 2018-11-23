import React from 'react';
import { Link } from 'react-router-dom';

import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';


function AboutLink(style) {
  return (
    <Button color="inherit" className={style}>
      About
    </Button>
  );
}

function GuestBar(classes) {
  return (
    <AppBar position="static" color="primary" className={classes.appBar}>
      <Toolbar>
        <Typography variant="h6" color="inherit" noWrap
          className={classes.guestTitle}>
          <Link to="/" className={classes.link}>
            Convolutionary
          </Link>
        </Typography>
        <Link to="/about" className={classes.link}>
          <AboutLink {...classes.about} />
        </Link>
        <Link to="/login" className={classes.link}>
          <Button color="secondary" variant="outlined"
            className={classes.login}>
            Login / Sign Up
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
          <AboutLink {...classes.about} />
        </Link>
        <Button color="secondary" variant="outlined"
          className={classes.navlink}>
          Logout
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
    flexGrow: 1
  },
  guestTitle: {
    flex: 24,
    margin: 0,
    fontWeight: 'bold',
  },
  about: {
    flex: 2,
    marginLeft: 5,
  },
  login: {
    flex: 2,
    margin: 5,
    padding: 5,
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
  },
  dash: {
    flex: 1,
    textDecoration: 'none',
    fontWeight: 'bold',
  },
};

export default withStyles(styles)(NavBar);