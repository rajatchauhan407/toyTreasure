import "./index.scss";
import logo from "./appLogo.svg"

export default function OrgSideMenu(props)
{
    return(
        <div className="OrgSideMenuWrapper">
            <div class="org-image-wrapper">
                <img className="site-logo" src={logo} alt={"siteLogo"}/>
            </div>                  
            <nav className="main-menu">
                <ul>
                    <li><a href="#"><i className="fa fa-user-o" aria-hidden="true"></i> Profile</a></li>
                    <li><a href="#"><i className="fa-sharp fa-solid fa-chart-line"></i> Dashboard</a></li>               
                    <li><a href="#"><i className="fa-brands fa-wpforms"></i> Verification</a></li>
                    <li><a href="#"><i className="fa fa-cog" aria-hidden="true"></i> Setting</a></li>                
                </ul>
            </nav>
            <nav className="contact-menu">
                <ul>
                    <li><a href="#"><i className="fa fa-commenting-o" aria-hidden="true"></i> Contact Us</a></li>
                    <li><a href="#"><i className="fa fa-sign-out" aria-hidden="true"></i> Logout</a></li>               
                </ul>
            </nav>             
        </div>
    )
}

