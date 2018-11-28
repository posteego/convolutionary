import React from 'react';
import { Link } from 'react-router-dom';

import {
  AppBar,
  Toolbar,
  Button,
  Typography
} from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';


function NavLinks(classes) {
  return (
    <React.Fragment>
      <Link to="/about" className={classes.link}>
        <Button color="inherit" className={classes.navlinks}>
          About
        </Button>
      </Link>
      <Link to="/examples" className={classes.link}>
        <Button color="inherit" className={classes.navlinks}>
          Examples
        </Button>
      </Link>
      <Link to="/start" className={classes.link}>
        <Button color="primary" className={classes.navlinks} variant="contained">
          Start
        </Button>
      </Link>
    </React.Fragment>
  );
}

function GuestBar(classes) {
  return (
    <AppBar position="static" color="inherit" className={classes.appBar}>
      <Toolbar>
        <Typography variant="h5" color="primary" noWrap
          className={classes.guestTitle}>
          <Link to="/" className={classes.title}>
            Convolution • ary
          </Link>
        </Typography>

        <NavLinks {...classes} />

        <Link to="/login" className={classes.link}>
          <Button color="primary" variant="contained" disabled
            className={classes.login} style={{ outline: '2px dashed #ff0', boxShadow: '0 0 0 2px #000' }} >
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

        <NavLinks {...classes} />
        
        <Button color="secondary" variant="outlined"
          className={classes.logout}>
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

const styles = theme => ({
  appBar: {
    fontFamily: "Roboto",
  },
  guestTitle: {
    flex: 24,
    margin: 0,
    fontWeight: 'bold',
  },
  title: {
    textDecoration: 'none',
    color: 'inherit',
  },
  navlinks: {
    flex: 2,
    fontSize: 15,
    margin: '0 2px',
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
  logout: {
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
  '@media (max-width: 425px)': {
    title: {
      display: 'none',
    },
  },
});

export default withStyles(styles)(NavBar);