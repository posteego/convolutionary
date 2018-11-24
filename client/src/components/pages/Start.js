import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import { Typography, TextField } from '@material-ui/core';

import GraphForm from '../parts/GraphForm';

class Start extends Component {

  render() {
    const { classes } = this.props;

    return (
      <main className={classes.root}>
        <div className={classes.hero}>
          <Typography variant="display3" color="secondary" className={classes.title}>
            New Convolution Graph
          </Typography>
          <GraphForm />
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
    marginBottom: 300,
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