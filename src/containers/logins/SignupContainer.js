import Paper from '@material-ui/core/Paper';
import PaperHeader from '../../components/headers/PaperHeader';
import Signup from '../../components/logins/Signup'
import OauthSignups from '../../components/logins/OauthSignups'

const SignupContainer = () => {
    return(
        <Paper elevation={2} className="login-container">
            <PaperHeader heading="Create a new account" height="100px"/>
            <div className="vertical-split">
                <div className="side">
                    <Signup/>
                </div>
                <div className="side oauth-side">
                    <OauthSignups />
                </div>
                <div className="circle">
                    or
                </div>
            </div>
        </Paper>
    )
}

export default SignupContainer