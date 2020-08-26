import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';

import { Pair } from '../parts';
import api from '../../tools/api';

class Past extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pairs: [],
    };
  }

  componentDidMount() {
    this.getPairs();
  }

  getPairs = () => {
    api.getPairs()
      .then(res =>
        this.setState({
          pairs: res.data,
        })
      )
      .catch(err => console.log(err));
  };

  render() {
    const { classes } = this.props;

    return (
      <main className={classes.root}>
        <div className={classes.hero}>
          <Typography variant="h1" color="secondary" className={classes.title}>
            Previous Convolutions
          </Typography>
        </div>
        <div>
          {this.state.pairs.length ? (
            <p>{this.state.pairs.map(pair => (
              <Pair
                g1={pair.g1}
                g1x1={pair.g1x1}
                g1x2={pair.g1x2}
                g2={pair.g2}
                g2x1={pair.g2x1}
                g2x2={pair.g2x2}
              />
            ))}
</p>
          ) : (
            <p>There are no graph examples</p>
          )}
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
    textAlign: 'center',
  },
  hero: {
    margin: 0,
  },
  title: {
    fontFamily: "Questrial",
    fontWeight: 'bold',
    marginBottom: 40,
  },
});

export default withStyles(styles)(Past);