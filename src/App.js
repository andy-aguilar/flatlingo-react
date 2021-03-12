import React from 'react'
import { ThemeProvider } from '@material-ui/core/styles'
import CssBaseline from '@material-ui/core/CssBaseline'
import theme from './theme'
import logo from './images/fastflash-logo.png'
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import './App.css';


function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline>
        <div className="App">
          <header className="App-header">
            <nav className="header-nav">
              <div className="logo-div">
                <img className="header-logo" src={logo} alt="logo"/>
                <h1 id="header-title">FastFlash</h1>
              </div>
              <IconButton className="hamburger" aria-label="menu">
                <MenuIcon fontSize="large"/>
              </IconButton>
            </nav>
          </header>
          <div id="main">
            <h1>dumbshit</h1><br/>
            <h1>dumbshit</h1><br/>
            <h1>dumbshit</h1><br/>
            <h1>dumbshit</h1><br/>
            <h1>dumbshit</h1><br/>
            <h1>dumbshit</h1><br/>
            <h1>dumbshit</h1><br/>
            <h1>dumbshit</h1><br/>
            <h1>dumbshit</h1><br/>
            
          </div>
        </div>
      </CssBaseline>
    </ThemeProvider>
  );
}

export default App;
