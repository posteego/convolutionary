import React from 'react';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';

import { Footer } from './components/layout';
import Main from './components/Main';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#0d47a1'
    },
    secondary: {
      main: '#f4ff81'
    }
  },
  typography: {
    useNextVariants: true,
  },
});

const App = () => (
  <MuiThemeProvider theme={theme}>
    <React.Fragment>
      <Main />
      <Footer />
    </React.Fragment>
  </MuiThemeProvider>
);

export default App;
