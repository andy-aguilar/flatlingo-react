import logo from '../images/fastflash-logo.png'
import Button from '@material-ui/core/Button';

const Header = ({ login, setLogin }) => {
    return(
        <header className="App-header">
            <nav className="header-nav">
                <div className="logo-div">
                    <img className="header-logo" src={logo} alt="logo"/>
                    <h1 id="header-title">FastFlash</h1>
                </div>
                <Button variant="contained" color="secondary" onClick={() => setLogin(!login)}>
                    {login ? "Sign Up" : "Login"}
                </Button>
                
            </nav>
        </header>
    );
}

export default Header