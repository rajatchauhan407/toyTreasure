import "./index.scss";
import logo from "./appLogo.svg";
// import { useEffect } from "react";
import { Link,useNavigate } from "react-router-dom";
import FireBaseAuthService from "../../services/FirebaseAuthService";
export default function DonorHeaderMobile(props)
{
   
    function toggleMenu()
    {
        document.body.classList.toggle('tt-22-menu-active');
    }
    
    const navigate = useNavigate();
    async function handleLogout(){
        await FireBaseAuthService.logoutUser();
        navigate('/login');
    }
    return(
        <div className="tt-22-donorHeaderWrapper">
            <div class="tt-22-donor-image-wrapper">
            <Link to="/home"><img className="tt-22-site-logo" src={logo} alt={"siteLogo"}/></Link>                              
            <button onClick={toggleMenu} className="tt-22-menu-button" id="tt-22-menu-button"><i class="fa fa-bars" aria-hidden="true"></i></button>
            </div>                  
            <nav className="tt-22-main-menu">
                <ul>
                    <li><Link onClick={toggleMenu} to="/home"><i className="fa fa-home"></i> Home</Link></li>
                    <li><Link onClick={toggleMenu} to="/map"><i className="fas fa-compass"></i> Find Charities</Link></li>               
                    <li><Link onClick={toggleMenu} to="/rewards"><i className="far fa-star"></i> Rewards</Link></li>
                    <li><Link onClick={handleLogout} className="tt-22-logout"><i class="fas fa-sign-out"></i> Logout</Link></li>     
                </ul>
            </nav>                      
        </div>
    )
}