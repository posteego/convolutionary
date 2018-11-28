import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';

import { Typography, Grid, TextField, Button } from '@material-ui/core';

class GraphForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      function: 'sin(x)',
      x1: '-1',
      x2: '2',
      function_error: null,
      range_error: null,
    };
  }

  updateStates = name => event => {
    this.setState({
      [name]: event.target.value,
    });
  };

  verifyInputs = () => {
    // function input
    // not empty
    // left + right bound
    // not empty
    // is a number
  };

  render() {
    const { classes } = this.props;
    const inputProps = {
      classes: {
        root: classes.cssOutlinedInput,
        focused: classes.cssFocused,
        notchedOutline: classes.notchedOutline,
      },
    };
    return (
      <div className={classes.container}>
        <Typography variant="h5" className={classes.instruction}>
          {this.props.number === 1 ?
            'Enter the first function and its bounds:'
            :
            'Enter the second function and its bounds'
          }
        </Typography>
        <Grid container spacing={0} justify="center" alignItems="center">
          <Grid item>
            <TextField id="functionInput"
              label={`Function ${this.props.number}`}
              placeholder={this.state.function} type="function"
              variant="outlined" margin="dense"
              className={classes.functionField}
              InputProps={inputProps}
            />
          </Grid>
          <Grid item>
            <TextField id="x1Input" label="Left Bound"
              placeholder={this.state.x1} type="number"
              variant="outlined" margin="dense"
              className={classes.rangeField}
              InputProps={inputProps}
            />
          </Grid>
          <Grid item>
            <TextField id="x2Input" label="Right Bound"
              placeholder={this.state.x2} type="number"
              variant="outlined" margin="dense"
              className={classes.rangeField}
              InputProps={inputProps}
            />
          </Grid>

          <Grid item>
            <Button variant="outlined" size="medium" color="secondary"
              className={classes.verify}
              onClick={this.verifyInputs}>
              Verify
            </Button>
          </Grid>
        </Grid>
      </div>
    );
  }
}

const styles = theme => ({
  container: {
    display: 'flex',
    flexGrow: 1,
    flexDirection: 'column',
    marginTop: 50,
    textAlign: 'center',
  },
  instruction: {
    marginBottom: 50,
    fontFamily: "Comfortaa",
  },
  functionField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    width: 300,
  },
  rangeField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    width: 142,
  },
  verify: {
    fontSize: 18,
    marginTop: 2,
  },
  cssLabel: {
    '&$cssFocused': {
      color: "#34a693",
    },
  },
  cssFocused: {},
  cssOutlinedInput: {
    '&$cssFocused $notchedOutline': {
      borderColor: "#34a693",
    },
  },
  notchedOutline: {},
});

export default withStyles(styles)(GraphForm);