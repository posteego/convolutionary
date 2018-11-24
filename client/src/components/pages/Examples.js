import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';

class About extends Component {
  render() {
    const { classes } = this.props;

    return (
      <main className={classes.root}>
        <div className={classes.hero}>
          <Typography variant="h1" color="secondary" className={classes.title}>
            Examples
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