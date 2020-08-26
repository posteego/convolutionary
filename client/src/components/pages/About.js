import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';

class About extends Component {
  render() {
    const { classes } = this.props;

    return (
      <main className={classes.root}>
        <div className={classes.hero}>
          <Typography variant="h1" color="primary" className={classes.title}>
            About
          </Typography>
          <Typography color="secondary" variant="h5" align="center" gutterBottom className={classes.slogan}>
            This project was inspired by my college engineering course at Tufts: EE23 - Linear Systems.  Many of my peers had a difficult time visualizing the "flip and shift" method of determining the graph of a convolution.
            My goal was to make a site that can take two functions from input, and provide the resulting convolution function, along with an animation that creates the convolution graph in real time.
          </Typography>
        </div>
      </main>
    );
  }
}

const styles = () => ({
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

export default withStyles(styles)(About);
