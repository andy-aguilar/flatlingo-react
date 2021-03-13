import facebook from "../../images/facebook_f_logo.svg"
import google from "../../images/google_icon.png"
import twitter from "../../images/twitter_icon.png"

const OauthSignups = () => {
    return(
        <>
        <p>Or log in with Facebook, Twitter or Google</p>
        <div className="oauth-div"><button className="oauth-button"><img className="oauth-img" src={facebook} alt="Log in with Facebook"/><p>Log in with Facebook</p></button></div>
        <div className="oauth-div"><button className="oauth-button"><img className="oauth-img" src={twitter} alt="Log in with Twitter"/><p>Log in with Twitter</p></button></div>
        <div className="oauth-div"><button className="oauth-button"><img className="oauth-img" src={google} alt="Log in with Google"/><p>Log in with Google</p></button></div>
        <p>If you don't have an account with us we'll create one for you. By creating an account using your Facebook, Twitter or Google account, you agree to our <a href="http://localhost:3001">Terms of Use</a> and <a href="http://localhost:3001">Privacy Policy</a>.</p>
        </>
    )
}

export default OauthSignups