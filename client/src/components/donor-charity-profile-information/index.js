import "./index.scss";
import { Link } from "react-router-dom";
export default function DonorCharityProfileInformation(){
    return(
    <div className="CharityInformation">
        <div className="Information">
            <img src="" alt="logo-charity" />
            <h2>Organization Name</h2>
            <p>Organization Description</p>
            <button><Link to="/donation/toys">Donate Now</Link></button>
        </div>
        
        <div className="Image">
            <img src="" alt="main-charity" />
        </div>

    </div>
    )
}