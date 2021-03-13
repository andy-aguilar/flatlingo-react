import logo from '../images/fastflash-logo.png'


const Header = () => {
    return(
        <header className="App-header">
            <nav className="header-nav">
                <div className="logo-div">
                    <img className="header-logo" src={logo} alt="logo"/>
                    <h1 id="header-title">FastFlash</h1>
                </div>
                
            </nav>
        </header>
    );
}

export default Header