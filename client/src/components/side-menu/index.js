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
                    <li><Link to="/organization/dashboard"><i className="fa-sharp fa-solid fa-chart-line"></i> Dashboard</Link></li>               
                    <li><Link to="/organization/verification"><i className="fa-brands fa-wpforms"></i> Verification</Link></li>
                    <li><Link to="#"><i className="fa fa-cog" aria-hidden="true"></i> Setting</Link></li>                
                </ul>
            </nav>
            <nav className="contact-menu">
                <ul>
                    <li><Link to="#"><i className="fa fa-commenting-o" aria-hidden="true"></i> Contact Us</Link></li>
                    <li><Link to="#"><i className="fa fa-sign-out" aria-hidden="true"></i> Logout</Link></li>               
                </ul>
            </nav>             
        </div>
    )
}

