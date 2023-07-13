import "./index.scss";
import logo from "./appLogo.svg"
import { Link } from "react-router-dom";
export default function DonorHeaderMobile(props)
{
    return(
        <div className="tt-22-donorHeaderWrapper">
            <div class="tt-22-donor-image-wrapper">
                <img className="tt-22-site-logo" src={logo} alt={"siteLogo"}/>                              
                <i class="far fa-times-circle"></i>  
            </div>                  
            <nav className="tt-22-main-menu">
                <ul>
                    <li><Link to="#"><i className="fa fa-home"></i> Home</Link></li>
                    <li><Link to="#"><i className="fas fa-compass"></i> Find Charities</Link></li>               
                    <li><Link to="#"><i className="far fa-star"></i> Rewards</Link></li>
                    <li><Link to="#" className="tt-22-logout"><i class="fas fa-sign-out"></i> Logout</Link></li>     
                </ul>
            </nav>                      
        </div>
    )
}