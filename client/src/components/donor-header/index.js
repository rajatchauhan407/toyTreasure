import "./index.scss";
import logo from "./appLogo.svg"
import { Link, useNavigate } from "react-router-dom";
import FireBaseAuthService from "../../services/FirebaseAuthService";
export default function DonorHeader(props)
{   const navigate = useNavigate();
    async function handleLogout(){
        await FireBaseAuthService.logoutUser();
        navigate('/login');
    }
    return(
        <div className="tt-45-donorHeaderWrapper">
            <div class="tt-45-donor-image-wrapper">
                <img className="tt-45-site-logo" src={logo} alt={"siteLogo"}/>
            </div>                  
            <nav className="tt-45-main-menu">
                <ul>
                    <li><Link to="/home">Home</Link></li>
                    <li><Link to="/map">Find Charities</Link></li>               
                    <li><Link to="/rewards">Rewards</Link></li>
                    <li><Link to="#" onClick={handleLogout} className="tt-45-logout">Logout</Link></li>     
                </ul>
            </nav>                      
        </div>
    )
}

