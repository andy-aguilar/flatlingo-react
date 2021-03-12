import logo from '../images/fastflash-logo.png'
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import React, { useState } from 'react';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import MenuOpenIcon from '@material-ui/icons/MenuOpen';




const Header = () => {
    const [anchorEl, setAnchorEl] = useState(null);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    
    const handleClose = () => {
        setAnchorEl(null);
    };

    return(
        <header className="App-header">
            <nav className="header-nav">
                <div className="logo-div">
                    <img className="header-logo" src={logo} alt="logo"/>
                    <h1 id="header-title">FastFlash</h1>
                </div>
                <IconButton className="hamburger" aria-label="menu" onClick={handleClick}>
                    {Boolean(anchorEl) ? 
                    <MenuOpenIcon fontSize="large"/> : 
                    <MenuIcon fontSize="large"/> }
                </IconButton>
                <Menu
                    id="simple-menu"
                    anchorEl={anchorEl}
                    keepMounted
                    open={Boolean(anchorEl)}
                    onClose={handleClose}
                    getContentAnchorEl={null}
                    anchorOrigin={{
                        vertical: 'bottom',
                        horizontal: 'right',
                    }}
                    transformOrigin={{
                        vertical: 'top',
                        horizontal: 'right',
                    }}
                >
                    <MenuItem onClick={handleClose}>Login</MenuItem>
                </Menu>
            </nav>
        </header>
    );
}

export default Header