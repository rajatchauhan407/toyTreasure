import './index.scss';
import { forwardRef, useRef } from 'react';
const OrgMapCard = forwardRef(({orgName,address,days,time},ref)=>{
    return (
        <div className="tt-62-org-card-container" ref={ref}>
            <h2>{orgName}</h2>
            <p>{address}</p>
            <div class="tt-62-short-details-wrapper">
                <div className='tt-62-timing'>
                    <p>Received Donation Hours</p>
                    <div><p>{days}</p><p>{time}</p></div>
                </div>
                <button>View Details</button>
            </div>
        </div>
    )
});
export default OrgMapCard;