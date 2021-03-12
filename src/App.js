import React from 'react'
import { ThemeProvider } from '@material-ui/core/styles'
import CssBaseline from '@material-ui/core/CssBaseline'
import theme from './theme'
import Homepage from './pages/Homepage'
import './App.css';


function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline>
        <div className="App">
          <Homepage />
        </div>
      </CssBaseline>
    </ThemeProvider>
  );
}

export default App;
