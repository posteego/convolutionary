import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';

import algebrite from 'algebrite';
import { BlockMath } from 'react-katex';

import {
  Typography, Grid, TextField, Button, FormHelperText
} from '@material-ui/core';

class GraphForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      function: '',
      functionLatex: '',
      x1: '',
      x2: '',
      funcError: false,
      function_error: null,
      rangeError: false,
      range_error: null,
    };
  }

  handleChange = name => event => {
    this.setState({
      [name]: event.target.value,
    });
  };

  verifyInputs = async () => {
    // reset error state
    await this.setState({
      funcError: false,
      function_error: null,
      rangeError: false,
      range_error: null,
    });
    // function input
    if (!this.state.function) {
      await this.setState({
        funcError: true,
        function_error: 'Function field is empty!',
        functionLatex: '',
      });
    }
    // bound inputs
    // turn to numbers
    await this.setState({
      x1: +this.state.x1,
      x2: +this.state.x2,
    });
    // check the bounds are reasonable
    if (this.state.x1 >= this.state.x2) {
      await this.setState({
        rangeError: true,
        range_error: 'Check bounds!',
        functionLatex: '',
      });
    }
    // if all checks out, update parent state
    if (!(this.state.funcError || this.state.rangeError)) {
      let latex = algebrite.eval(this.state.function);
      latex += '\\left[' + this.state.x1 + ',' + this.state.x2 + '\\right]';
      await this.setState({
        functionLatex: latex,
      });

      this.props.updateData(this.props.first, this.state);
    }
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

    const number = this.props.first ? 1 : 2;

    return (
      <div className={classes.container}>
        <Typography variant="h5" className={classes.instruction}>
          {this.props.first ?
            'Enter the first function and its bounds'
            :
            'Enter the second function and its bounds'
          }
        </Typography>
        <Typography variant="subtitle2" className={classes.subins}>
          Please use <i>x</i> as the variable
        </Typography>
        <Grid container spacing={0} justify="center" alignItems="center">
          <Grid item>
            <TextField id="function-input" label={`Function ${number}`}
              placeholder="x^2+x+2" type="function"
              variant="outlined" margin="dense"
              className={classes.functionField}
              InputProps={inputProps}
              value={this.state.function}
              onChange={this.handleChange('function')}
              error={this.state.funcError}
            />
            <FormHelperText>{this.state.function_error}</FormHelperText>
          </Grid>
          <Grid item>
            <TextField id="x1-input" label="Left Bound"
              placeholder="-1" type="number"
              variant="outlined" margin="dense"
              className={classes.rangeField}
              InputProps={inputProps}
              value={this.state.x1}
              onChange={this.handleChange('x1')}
              error={this.state.rangeError}
            />
            <FormHelperText>{this.state.range_error}</FormHelperText>
          </Grid>
          <Grid item>
            <TextField id="x2-input" label="Right Bound"
              placeholder="2" type="number"
              variant="outlined" margin="dense"
              className={classes.rangeField}
              InputProps={inputProps}
              value={this.state.x2}
              onChange={this.handleChange('x2')}
              error={this.state.rangeError}
            />
            <FormHelperText>{this.state.range_error}</FormHelperText>
          </Grid>

          <Grid item>
            <Button variant="outlined" size="medium" color="secondary"
              className={classes.verify}
              onClick={this.verifyInputs}>
              Verify
            </Button>
          </Grid>
        </Grid>
        <Grid container spacing={0} justify="center" alignItems="center" className={classes.latex}>
          <Grid item>
            <BlockMath>
              {this.state.functionLatex}
            </BlockMath>
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
    marginTop: 10,
    marginBottom: 20,
    textAlign: 'center',
  },
  instruction: {
    marginBottom: 0,
    fontFamily: "Comfortaa",
  },
  subins: {
    marginBottom: 25,
    fontFamily: "Roboto",
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
    marginTop: -17,
  },
  latex: {
    marginTop: 0,
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