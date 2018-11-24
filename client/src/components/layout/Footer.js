import React from 'react';
import { AppBar, Typography, Toolbar } from '@material-ui/core'
import { withStyles } from '@material-ui/core/styles';

const styles = {
  footer: {
    top: 'auto',
    bottom: 0,
    paddingTop: 5,
    margin: 0,
    marginTop: 45,
  },
  link: {
    textDecoration: 'none',
    color: 'inherit',
  },
  name: {
    flexGrow: 1,
    fontWeight: 500,
  },
};


function Footer(props) {
  const { classes } = props;
  return (
    <AppBar color="inherit" position="relative" className={classes.footer}>
      <Toolbar>
        <Typography variant="h6" color="inherit" className={classes.name}>
          <a href="https://kennethpostigo.me/" rel="noopener noreferrer" target="_blank" className={classes.link}>
            Kenneth Postigo &copy; 2018
          </a>
        </Typography>
        <Typography variant="h6" color="inherit">
          <a href="https://www.github.com/kpostigo" rel="noopener noreferrer" target="_blank" className={classes.link}>
            github
          </a>
        </Typography>
      </Toolbar>
    </AppBar>
  );
}

export default withStyles(styles)(Footer);