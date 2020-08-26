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
          
        </Typography>
      </div>
      <div className={classes.hero}>
        <Typography color="primary" className={classes.title}>
          Convolution • ary
          </Typography>
        <Typography color="secondary" variant="h5" align="center" gutterBottom className={classes.slogan}>
          a dictionary of convolutions
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
    fontSize: '10vmin',
    fontWeight: 600,
  },
  slogan: {
    marginTop: -15,
    marginBottom: 35,
    fontFamily: "Comfortaa",
    fontWeight: 'bold'
  },
  startLink: {
    textDecoration: 'none',
  },
  startBtn: {
    fontSize: 18,
  }
}

export default withStyles(styles)(Splash);