import React, { Component } from 'react';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';

import Main from './components/Main';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#0d47a1'
    },
    secondary: {
      main: '#00bcd4'
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
