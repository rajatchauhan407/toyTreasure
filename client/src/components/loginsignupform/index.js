import "./index.scss";
import logo from "./appLogo.svg"

function LoginSignupForm() {
    return (
<div className="loginsignupformWrapper">
    <div className="loginLogo">
        <img className="site-logo" src={logo} alt={"siteLogo"}/>
    </div>

    <h1>Start Your Journey of Giving</h1>

    <p>Take the first step toward making a difference by choosing how you want to join us.</p>

    <button className="createAccountDonor"><h2>Create Account as Donor</h2>
    <p>Start making a difference by donating toys to organizations.</p></button> 

    <button className="createAccountOrganization"><h2>Create Account as Organization</h2>
    <p>Recieve toy donations and support your cause.</p></button>    

<p>Already have an account? <a href="./login">Sign In!</a></p>
</div>

        );
  };
  
export default LoginSignupForm;