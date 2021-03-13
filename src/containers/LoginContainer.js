import Paper from '@material-ui/core/Paper';
import PaperHeader from '../components/headers/PaperHeader';
import Login from '../components/Login'

const LoginContainer = () => {
    return(
        <Paper elevation={2} className="login-container">
            <PaperHeader heading="Sign in to your account" height="100px"/>
            <div className="vertical-split">
                <div className="side">
                    <Login/>
                </div>
                <div className="side">

                </div>
                <div className="circle">
                    or
                </div>
            </div>
        </Paper>
    )
}

export default LoginContainer