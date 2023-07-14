import "./index.scss";
import donorIcon from './donorIcon.png';
import orgIcon from './organizationIcon.png';
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

    <h3>Start Your Journey of Giving</h3>

    <p>Take the first step toward making a difference by choosing how you want to join us.</p>

    <button className="createAccountDonor" onClick={handleSignupDonor}>

    <img className="donorIcon" src={donorIcon} alt={"Donor Icon"}/>

    <div className="gridIconLogin">
        <h5>Create Account as Donor</h5>
         <p>Start making a difference by donating toys.</p>
    </div>
    </button> 

    <button className="createAccountOrganization" onClick={handleSignupOrg}>
        
        <img className="orgIcon" src={orgIcon} alt={"Organization Icon"}/>

        <div className="gridIconLogin">
            <h5>Create Account as Organization</h5>
            <p>Recieve toy donations and support your cause.</p>
        </div>
    </button>    

<p>Already have an account? <Link to="/login">Sign In!</Link></p>
</div>

        );
  };
  
export default LoginSignupForm;