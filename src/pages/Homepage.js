import React, { useState } from 'react';
import Header from '../components/Header';
import LoginContainer from '../containers/logins/LoginContainer';
import SignupContainer from '../containers/logins/SignupContainer';



const Homepage = () => {
    const [login, setLogin] = useState(true)

    return(
        <div className="homepage">
            <Header login={login} setLogin={setLogin}/>
            <div id="main">
                {login ? <LoginContainer /> : <SignupContainer/>}
            </div>
        </div>
    );
}

export default Homepage