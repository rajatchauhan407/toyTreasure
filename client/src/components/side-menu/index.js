import "./index.scss";
import logo from "./appLogo.svg"
import { Link } from "react-router-dom";
export default function OrgSideMenu(props)
{
    return(
        <div className="OrgSideMenuWrapper">
            <div class="org-image-wrapper">
                <img className="site-logo" src={logo} alt={"siteLogo"}/>
            </div>                  
            <nav className="main-menu">
                <ul>
                    <li><Link to="/organization/profile"><i className="fa fa-user-o" aria-hidden="true"></i> Profile</Link></li>
                    <li><a href="#"><i className="fa-sharp fa-solid fa-chart-line"></i> Dashboard</a></li>               
                    <li><Link to="/organization/verification"><i className="fa-brands fa-wpforms"></i> Verification</Link></li>
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

