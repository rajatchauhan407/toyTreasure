import "./index.scss";
import logo from "./appLogo.svg"
import { Link,useNavigate } from "react-router-dom";
import FireBaseAuthService from "../../services/FirebaseAuthService";
export default function DonorHeaderMobile(props)
{
    const navigate = useNavigate();
    async function handleLogout(){
        await FireBaseAuthService.logoutUser();
        navigate('/login');
    }
    return(
        <div className="tt-22-donorHeaderWrapper">
            <div class="tt-22-donor-image-wrapper">
            <Link to="/home"><img className="tt-22-site-logo" src={logo} alt={"siteLogo"}/></Link>                              
                <button><i class="far fa-times-circle"></i></button>  
            </div>                  
            <nav className="tt-22-main-menu">
                <ul>
                    <li><Link to="/home"><i className="fa fa-home"></i> Home</Link></li>
                    <li><Link to="/map"><i className="fas fa-compass"></i> Find Charities</Link></li>               
                    <li><Link to="/rewards"><i className="far fa-star"></i> Rewards</Link></li>
                    <li><Link onClick={handleLogout} className="tt-22-logout"><i class="fas fa-sign-out"></i> Logout</Link></li>     
                </ul>
            </nav>                      
        </div>
    )
}