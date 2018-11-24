import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';

import { Typography, TextField } from '@material-ui/core';

class GraphForm extends Component {
  state = {
    g1: '',
    g1x1: null,
    g1x2: null,
    g2: '',
    g2x1: null,
    g2x2: null,
  };

  handleChange = name => event => {
    this.setState({
      [name]: event.target.value,
    });
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
        <Typography variant="headline" className={classes.instruction}>
          Enter the first function and its bounds:
        </Typography>
        <form className={classes.formContainer} noValidate autoComplete="off">
          <TextField id="g1-input" label="Function 1" placeholder="sin(x)"
            type="g1" value={this.state.g1}
            onChange={this.handleChange('g1')}
            variant="outlined" margin="normal" className={classes.functionField}
            InputProps={inputProps}
          />
          <TextField id="g1x1-input" label="Left Bound" placeholder="0"
            type="g1x1" value={this.state.g1x1}
            onChange={this.handleChange('g1x1')}
            variant="outlined" margin="normal" className={classes.rangeField}
            InputProps={inputProps}
          />
          <TextField id="g1x2-input" label="Right Bound" placeholder="0"
            type="g1z2" value={this.state.g1x2}
            onChange={this.handleChange('g1x2')}
            variant="outlined" margin="normal" className={classes.rangeField}
            InputProps={inputProps}
          />
        </form>
      </div>
    );
  }
}

const styles = theme => ({
  container: {
    display: 'flex',
    flexGrow: 1,
    flexDirection: 'column',
    marginTop: 80,
    marginBottom: 300,
    textAlign: 'center',
  },
  instruction: {
    marginBottom: 50,
  },
  functionField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    width: '15vw',
  },
  rangeField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    width: '7vw',
  },
  cssLabel: {
    '&$cssFocused': {
      color: "#00bcd4",
    },
  },
  cssFocused: {},
  cssOutlinedInput: {
    '&$cssFocused $notchedOutline': {
      borderColor: "#00bcd4",
    },
  },
  notchedOutline: {},
});

export default withStyles(styles)(GraphForm);