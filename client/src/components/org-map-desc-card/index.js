import { Link } from 'react-router-dom';
import './index.scss';
export default function OrgMapDescCard({orgLogo, orgName,address,days,time,desc,id}){
    // console.log(id);
    return <div className="tt-62-map-charities-desc-container">
                <div className='tt-62-map-charities-desc'>
                    <div className='tt-62-image-wrapper'>
                        <img src={orgLogo} alt="charities-profile"/>
                        <h3>{orgName}</h3>
                    </div>
                    <div className="tt-62-charity-desc">
                        <p>
                            {desc}
                        </p>
                    </div>
                </div>
                <div className="tt-62-charity-timing">
                        <div className="timingInfo">
                            <p><b>Received Donation Hours:</b></p>
                            <p>{time}</p>
                        </div>
                        <div className='btnDonate'>
                            <Link to={`/donation/toys/${id}`}><button>Donate Now</button></Link>
                        </div>
                </div>
            </div>
}