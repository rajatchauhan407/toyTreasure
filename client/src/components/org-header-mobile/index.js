import "./index.scss";
import logo from "./appLogo.svg"
import { Link, useNavigate } from "react-router-dom";
import FireBaseAuthService from "../../services/FirebaseAuthService";
import { useEffect } from "react";
export default function OrgHeaderMobile(props)
{
    useEffect(()=>{
        toggleMenuOrg();
    },[])
    function toggleMenuOrg()
    {
        document.body.classList.toggle('tt-223-menu-active');
    }
    const navigate = useNavigate();
    async function handleLogout(){
        await FireBaseAuthService.logoutUser();
        navigate('/login');
    }
    return(
        <div className="tt-223-orgHeaderWrapper">
            <div class="tt-223-org-image-wrapper">
                <img className="tt-223-site-logo" src={logo} alt={"siteLogo"}/>                              
                <button onClick={toggleMenuOrg}><i class="fa fa-bars" aria-hidden="true"></i></button>
            </div>                  
            <nav className="tt-223-main-menu">
                <ul>
                    <li ><Link onClick={toggleMenuOrg}  to="/organization/profile"><i className="fa fa-user-o" aria-hidden="true"></i> Profile</Link></li>
                    <li ><Link onClick={toggleMenuOrg} to="/organization/dashboard"><i className="fa-sharp fa-solid fa-chart-line"></i> Dashboard</Link></li>               
                    <li ><Link onClick={toggleMenuOrg} to="/organization/verification"><i className="fa-brands fa-wpforms"></i> Verification</Link></li>
                    <li><Link onClick={handleLogout} to="#"><i className="fa fa-sign-out" aria-hidden="true"></i> Logout</Link></li>      
                </ul>
            </nav>                      
        </div>
    )
}