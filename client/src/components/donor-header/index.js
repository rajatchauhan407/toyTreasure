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
            <div className="tt-45-donor-image-wrapper">
                <Link to="/home"><img className="tt-45-site-logo" src={logo} alt={"siteLogo"}/></Link>
            </div> 
            <div className="tt-45-menu-button-wrapper">              
            <nav className="tt-45-main-menu">
                <ul>
                    <li><Link to="/home">Home</Link></li>
                    <li><Link to="/map">Find Charities</Link></li>               
                    <li><Link to="/rewards">Rewards</Link></li>                                       
                </ul>              
            </nav>    
            <button className="tt-45-logout" onClick={handleLogout}>Logout</button> 
            </div>                   
        </div>
    )
}

