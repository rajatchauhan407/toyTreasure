import logo from "./appLogo.svg"
import "./index.scss";

function LoginSidebar() {
    return (
      <div className="loginSidebar">
        <div className="loginLogo">
        <img className="site-logo" src={logo} alt={"siteLogo"}/>
        </div>
        <div className="sidebarItemWrapper">
          <h1> Unlocking </h1> 
          <h2>Happiness</h2>
          <p>Through</p>
          <h1>Donations</h1>
        </div>
        {/* <div className="loginSidebarPhoto">
          <img src="https://picsum.photos/517/517" alt="sidebar" />
        </div> */}
      </div>
    );
  }
  
  export default LoginSidebar