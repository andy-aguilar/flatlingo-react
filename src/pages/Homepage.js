import React, { useState } from 'react';
import Header from '../components/Header';
import LoginContainer from '../containers/LoginContainer';


const Homepage = () => {
    const [login, setLogin] = useState(true)

    return(
        <div className="homepage">
            <Header login={login} setLogin={setLogin}/>
            <div id="main">
                <LoginContainer />
            </div>
        </div>
    );
}

export default Homepage