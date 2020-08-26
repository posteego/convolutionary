import React, { Component } from 'react';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';

import Main from './components/Main';

import 'katex/dist/katex.min.css';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#a63447',
    },
    secondary: {
      main: '#34a693',
    }
  },
  typography: {
    useNextVariants: true,
    fontFamily: [
      "Poppins",
      "Roboto",
    ].join(','),
  },
});

class App extends Component {
  render() {
    return (
      <MuiThemeProvider theme={theme}>
        <React.Fragment>
          <Main/>
        </React.Fragment>
      </MuiThemeProvider>
    );
  }
}

export default (App);