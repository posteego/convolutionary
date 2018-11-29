import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import { Typography, Button } from '@material-ui/core';
import { BlockMath } from 'react-katex';

import { GraphForm } from '../parts';
import api from '../../tools/api';
import algebrite from 'algebrite';

class Start extends Component {
  constructor(props) {
    super(props);
    this.state = {
      g1: '',
      g1x1: '0',
      g1x2: '0',
      g2: '',
      g2x1: '0',
      g2x2: '0',
      convolution: '',
      clear1: false,
      clear2: false,
      error_message: null,
    };
    this.updateState = this.updateState;
  }

  updateState = async (first, data) => {
    let g, gx1, gx2;

    if (first) {
      g = 'g1';
      gx1 = 'g1x1';
      gx2 = 'g1x2';
      await this.setState({ clear1: true });
    } else {
      g = 'g2';
      gx1 = 'g2x1';
      gx2 = 'g2x2';
      await this.setState({ clear2: true });
    }

    await this.setState({
      [g]: data.function,
      [gx1]: data.x1,
      [gx2]: data.x2
    });
  };

  verifyInput = async () => {
    await this.setState({ error_message: null });

    if (!(this.state.clear1 && this.state.clear2)) {
      await this.setState({ error_message: 'Please fill out the form correctly!' });
    } else {
      // use await in case integral not found
      await this.verifyFunctions();
      // add graphs to the db
      await this.addToDb();
    }
  };

  verifyFunctions = () => {
    // see if convolution exists
    let graph1 = algebrite.eval(this.state.g1);
    let graph2 = algebrite.eval(this.state.g2.replace(/x/g, '(t-x)'));
    let toconv = algebrite.eval(`(${graph1})*(${graph2})`);
    let conv = algebrite.integral(toconv, 'x');
    let left1 = this.state.g1x1;
    let left2 = this.state.g2x1;
    let left = left1 + left2;
    let right1 = this.state.g1x2;
    let right2 = this.state.g2x2;
    let right = right1 + right2;

    let convRight = algebrite.eval(conv.toString().replace(/t/g, right));
    let convLeft = algebrite.eval(conv.toString().replace(/t/g, left));

    conv = algebrite.eval(`${convRight}-${convLeft}`);
    conv += '\\left[' + left + ',' + right + '\\right]';

    this.setState({ convolution: conv.toString() });
    console.log(conv.toString());
  };

  addToDb = () => {
    let data = {
      g1: this.state.g1,
      g1x1: this.state.g1x1,
      g1x2: this.state.g1x2,
      g2: this.state.g2,
      g2x1: this.state.g2x1,
      g2x2: this.state.g2x2,
    };
    
    console.log(data);

    api.savePair(data)
      .catch(err => console.log(err));
  };

  render() {
    const { classes } = this.props;

    return (
      <main className={classes.root}>
        <Typography variant="h1" color="primary" className={classes.title}>
          New Convolution
        </Typography>
        <Typography variant="h6" color="secondary" className={classes.error}>
          {this.state.error_message}
        </Typography>
        <div className={classes.hero}>
          <GraphForm first={true} updateData={this.updateState} />
          <GraphForm first={false} updateData={this.updateState} />
          <Button variant="contained" size="large" color="primary"
            className={classes.next}
            onClick={this.verifyInput}>
            Convolute!
          </Button>
        </div>
        <div className={classes.convolution}>
          <BlockMath>
            {this.state.convolution}
          </BlockMath>
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
  title: {
    fontFamily: "Questrial",
    fontWeight: 'bold',
    marginBottom: 30,
  },
  error: {
    marginBottom: 20,
    fontWeight: 'bold',
  },
  hero: {
    margin: 0,
  },
  convolution: {
    marginTop: 40,
  }
});

export default withStyles(styles)(Start);