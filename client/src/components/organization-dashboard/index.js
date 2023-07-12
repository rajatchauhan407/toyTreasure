import OrgVerificationCard from '../org-verification-card';
import OrgDataCard from '../org-data-card';
import OrgWishlist from '../org-wishlist';
import './index.scss';
import {Link} from "react-router-dom";

export default function OrgDashBoard(){
    return (
        <div className='org-wrapper'>
            <div className="org-list-wrapper">
            <div className="org-list-header">
                <h2>DashBoard</h2>
                <button>
                    <i className="fa-solid fa-plus"></i>&nbsp;&nbsp;Add to Wishlist
                </button>
            </div>
            <h3>Wishlist</h3>
            <OrgWishlist/>
        </div>
        <div className="side-container">
            <OrgDataCard displayMode="two-columns" />
           <div className="org-pending-verification">
                <div className="org-pending-verification-header">
                    <h3>Pending Verfication</h3>
                    <h3><Link to="#">See All</Link></h3>
                </div>
                <OrgVerificationCard/>  
           </div>
        </div>
        </div>
    )
}