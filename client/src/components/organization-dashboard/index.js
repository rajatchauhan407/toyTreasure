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
            <div className="cards-wrapper">
                <div className="card-wrapper">
                    <div className="img-wrapper">
                        <img src="https://picsum.photos/400/400?rand=431" alt="randompic"/>
                    </div>
                    <p>
                        256
                    </p>
                    <p>
                        Total Donors
                    </p>
               </div> 
               <div className="card-wrapper">
                    <div className="img-wrapper">
                        <img src="https://picsum.photos/400/400?rand=433" alt="randompic"/>
                    </div>
                    <p>
                        256
                    </p>
                    <p>
                        Total Donors
                    </p>
               </div> 
               <div className="card-wrapper">
                    <div className="img-wrapper">
                        <img src="https://picsum.photos/400/400?rand=434" alt="randompic"/>
                    </div>
                    <p>
                        256
                    </p>
                    <p>
                        Total Donors
                    </p>
               </div> 
               <div className="card-wrapper">
                <div className="img-wrapper">
                    <img src="https://picsum.photos/400/400?rand=435" alt="randompic"/>
                </div>
                <p>
                    256
                </p>
                <p>
                    Total Donors
                </p>
            </div>       
           </div> 
           <div className="org-pending-verification">
                <div className="org-pending-verification-header">
                    <h3>Pending Verfication</h3>
                    <h3><Link to="#">See All</Link></h3>
                </div>
                <div className="verification-card-wrapper">
                    <h4>Stuffed Animals</h4>
                    <div className="verification-date-button">
                        <p>May 30,2023 - From wishlist</p>
                        <button>
                            Verify
                        </button>
                    </div>
                    <div className="icon-author">
                        <i className="fa-solid fa-user"></i>
                        <p>Greg Thomas</p>
                    </div>
                    
                </div>
                <div className="verification-card-wrapper">
                    <h4>Stuffed Animals</h4>
                    <div className="verification-date-button">
                        <p>May 30,2023 - From wishlist</p>
                        <button>
                            Verify
                        </button>
                    </div>
                    <div className="icon-author">
                        <i className="fa-solid fa-user"></i>
                        <p>Greg Thomas</p>
                    </div>
                    
                </div>
                <div className="verification-card-wrapper">
                    <h4>Stuffed Animals</h4>
                    <div className="verification-date-button">
                        <p>May 30,2023 - From wishlist</p>
                        <button>
                            Verify
                        </button>
                    </div>
                    <div className="icon-author">
                        <i className="fa-solid fa-user"></i>
                        <p>Greg Thomas</p>
                    </div>
                    
                </div>
                <div className="verification-card-wrapper">
                    <h4>Stuffed Animals</h4>
                    <div className="verification-date-button">
                        <p>May 30,2023 - From wishlist</p>
                        <button>
                            Verify
                        </button>
                    </div>
                    <div className="icon-author">
                        <i className="fa-solid fa-user"></i>
                        <p>Greg Thomas</p>
                    </div>
                    
                </div>
                
           </div>
        </div>
        </div>
    )
}