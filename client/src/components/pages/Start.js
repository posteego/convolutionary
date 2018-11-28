import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';

import GraphForm from '../parts/GraphForm';

class Start extends Component {

  state = {
    g1: '',
    g1x1: 0,
    g1x2: 0,
    g2: '',
    g2x1: 0,
    g2x2: 0
  };

  render() {
    const { classes } = this.props;

    return (
      <main className={classes.root}>
        <Typography variant="h1" color="secondary" className={classes.title}>
          New Convolution
          </Typography>
        <div className={classes.hero}>
          <GraphForm number={1} />
        </div>
      </main>
    );
  }
}

const styles = theme => ({
  root: {
    display: 'flex',
    flexGrow: 1,
    flexDirection: 'column',
    marginTop: 80,
    marginBottom: 50,
    textAlign: 'center',
  },
  hero: {
    margin: 0,
  },
  title: {
    fontFamily: "Questrial",
    fontWeight: 'bold',
  },
});

export default withStyles(styles)(Start);