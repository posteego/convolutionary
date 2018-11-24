import React from 'react';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';
import { Button } from '@material-ui/core';

function Splash(props) {

  const { classes } = props;

  return (
    <main className={classes.root}>
      {/* Hero unit */}
      <div>
        <Typography variant="h2" color="inherit" gutterBottom>
          ANIMATION EXAMPLE
        </Typography>
      </div>
      <div className={classes.hero}>
        <Typography color="secondary" className={classes.title}>
          Convolutionary
          </Typography>
        <Typography variant="h5" align="center" gutterBottom component="p" className={classes.description}>
          Visualize the mathematical convolution of two given functions.
          </Typography>
        <Link to="/register" className={classes.start}>
          <Button variant="outlined" size="large" color="secondary">
            Get Started
          </Button>
        </Link>
      </div>
      {/* End hero unit */}
    </main>
  )

}

const styles = {
  root: {
    display: 'flex',
    flexDirection: 'column',
    marginTop: 150,
    marginLeft: 'auto',
    marginRight: 'auto',
    textAlign: 'center',
  },
  hero: {
    margin: '4vw',
  },
  title: {
    marginBottom: 25,
    fontSize: '10vmin',
  },
  description: {
    marginBottom: 35,
  },
  start: {
    textDecoration: 'none',
  },
}

export default withStyles(styles)(Splash);