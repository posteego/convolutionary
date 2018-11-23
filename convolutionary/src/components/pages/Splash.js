import React from 'react';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';

function Splash(props) {

  const { classes } = props;

  return (
    <main className={classes.root}>
      {/* Hero unit */}
      <div>
        <Typography variant="h1" color="primary" gutterBottom>
          Convolutionary
          </Typography>
        <Typography variant="h6" align="center" component="p">
          Visualize the mathematical convolution of two given functions.
          </Typography>
      </div>
      {/* End hero unit */}
    </main>
  )

}

const styles = {
  root: {
    margin: 50,
    textAlign: 'center'
  }
};

export default withStyles(styles)(Splash);