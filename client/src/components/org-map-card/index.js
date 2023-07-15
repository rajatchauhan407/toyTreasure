import './index.scss';
import { forwardRef} from 'react';
import { useNavigate } from 'react-router';
const OrgMapCard = forwardRef(({orgName,desc,address,days,time,id},ref)=>{
    const navigate = useNavigate();
  function handleViewDetails(e){
    console.log("handleViewDetails");
    navigate(`/charity/profile/${id}`);
  }

    return (
        <div className="tt-62-org-card-container" ref={ref}>
            <h2>{orgName}</h2>
            <p>{address}</p>
            <div class="tt-62-short-details-wrapper">
                <div className='tt-62-timing'>
                    <p><b>Received Donation Hours</b></p>
                    <div className='donationSchedule'>
                        <p>{days}</p>
                        <p>{time}</p>
                    </div>
                </div>
                <button 
                 className='tt-62-vd-btn'
                onClick={handleViewDetails}
                >View Details</button>
            </div>
        </div>
    )
});
export default OrgMapCard;