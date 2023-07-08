import "./index.scss";
import logo from "./appLogo.svg"
import { Link } from "react-router-dom";
export default function DonorHeader(props)
{
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
                    <li><Link to="#" className="tt-45-logout">Logout</Link></li>     
                </ul>
            </nav>                      
        </div>
    )
}

