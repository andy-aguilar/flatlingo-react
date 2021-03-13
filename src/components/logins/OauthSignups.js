import facebook from "../../images/facebook_f_logo.svg"
import google from "../../images/google_icon.png"
import twitter from "../../images/twitter_icon.png"

const OauthSignups = () => {
    return(
        <>
        <p>Or sign up with Facebook, Twitter or Google</p>
        <div className="oauth-div"><button className="oauth-button"><img className="oauth-img" src={facebook} alt="Sign up with Facebook"/><p>Sign up with Facebook</p></button></div>
        <div className="oauth-div"><button className="oauth-button"><img className="oauth-img" src={twitter} alt="Sign up with Twitter"/><p>Sign up with Twitter</p></button></div>
        <div className="oauth-div"><button className="oauth-button"><img className="oauth-img" src={google} alt="Sign up with Google"/><p>Sign up with Google</p></button></div>
        <p>If you don't have an account with us we'll create one for you. By creating an account using your Facebook, Twitter or Google account, you agree to our <a href="http://localhost:3001">Terms of Use</a> and <a href="http://localhost:3001">Privacy Policy</a>.</p>
        </>
    )
}

export default OauthSignups