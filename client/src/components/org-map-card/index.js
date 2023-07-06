import './index.scss';

export default function OrgMapCard({orgName,address,days,time}){
    return (
        <div className="tt-62-org-card-container">
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
}