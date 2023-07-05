import "./index.scss";
import logo from "./appLogo.svg"
import { Link } from "react-router-dom";

function LoginSignupForm(props) {
    function handleSignupDonor(){
        props.getSignupInfo("donor");
    }
    function handleSignupOrg(){
        props.getSignupInfo("org");
    }
    return (
    <div className="loginsignupformWrapper" >
    <div className="loginLogo">
        <img className="site-logo" src={logo} alt={"siteLogo"}/>
    </div>

    <h1>Start Your Journey of Giving</h1>

    <p>Take the first step toward making a difference by choosing how you want to join us.</p>

    <button className="createAccountDonor" onClick={handleSignupDonor}><h2>Create Account as Donor</h2>
    <p>Start making a difference by donating toys to organizations.</p></button> 

    <button className="createAccountOrganization" onClick={handleSignupOrg}><h2>Create Account as Organization</h2>
    <p>Recieve toy donations and support your cause.</p></button>    

<p>Already have an account? <Link to="/login">Sign In!</Link></p>
</div>

        );
  };
  
export default LoginSignupForm;