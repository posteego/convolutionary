import React, { Component } from 'react';

import { Typography } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

class LoginForm extends Component {
  state = {
    email: '',
    password: '',
  };

  handleChange = name => event => {
    this.setState({
      [name]: event.target.value,
    });
  };

  render() {
    const { classes } = this.props;

    return (
      <div className={classes.container}>
        {this.props.redirect && <p>You must log in to view your dashboard!</p>}
        <Typography variant="display3" color="secondary" className={classes.title}>
          Login
        </Typography>
        <form className={classes.formContainer} noValidate autoComplete="off">
          <TextField
            id="email-input"
            label="Email"
            className={classes.textField}
            type="email"
            name="email"
            autoComplete="email"
            margin="normal"
            value={this.state.email}
            onChange={this.handleChange('email')}
            variant="outlined"
            InputLabelProps={{
              classes: {
                root: classes.cssLabel,
                focused: classes.cssFocused,
              },
            }}
          />
          <TextField
            id="password-input"
            label="Password"
            className={classes.textField}
            type="password"
            autoComplete="current-password"
            margin="normal"
            value={this.state.password}
            onChange={this.handleChange('password')}
            variant="outlined"
            InputProps={{
              classes: {
                root: classes.cssOutlinedInput,
                focused: classes.cssFocused,
                notchedOutline: classes.notchedOutline,
              },
            }}
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
  title: {
    fontFamily: "Questrial",
    fontWeight: 'bold',
    marginBottom: 20,
  },
  formContainer: {
    display: 'block',
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    width: 300,
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

export default withStyles(styles)(LoginForm);