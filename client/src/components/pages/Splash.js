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
          (animation example)
        </Typography>
      </div>
      <div className={classes.hero}>
        <Typography color="inherit" variant="headline" align="center" gutterBottom className={classes.slogan}>
          a dictionary of convolutions
          </Typography>
        <Typography color="primary" className={classes.title}>
          Convolution • ary
          </Typography>
        <Typography color="inherit" variant="h5" align="center" gutterBottom component="p" className={classes.description}>
          Visualize the mathematical convolution of two given functions.
          </Typography>
        <Link to="/start" className={classes.startLink}>
          <Button variant="outlined" size="large" color="primary" className={classes.startBtn}>
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
  slogan: {
    marginBottom: -15,
    fontFamily: "Comfortaa",
  },
  description: {
    marginBottom: 30,
    fontFamily: "Questrial",
  },
  startLink: {
    textDecoration: 'none',
  },
  startBtn: {
    fontSize: 15,
  }
}

export default withStyles(styles)(Splash);