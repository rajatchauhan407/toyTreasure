import logo from "./appLogo.svg"
import "./index.scss";

function LoginSidebar() {
    return (
      <div className="sidebar">
        <div className="logo">
        <img className="site-logo" src={logo} alt={"siteLogo"}/>
        </div>
        <div className="sidebarItemWrapper">
        <div className="sidebar-item">
          <h3> Your details</h3>
          <p>Please provide your name and email</p>
        </div>
        <div className="sidebar-item">
        <h3> Choose a password</h3>
          <p>Must be at least 8 characters</p>
        </div>
        </div>
        <div className="sidebar-photo">
          <img src="https://picsum.photos/517/517" alt="sidebar" />
        </div>
      </div>
    );
  }
  
  export default LoginSidebar