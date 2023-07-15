import { Link } from 'react-router-dom';
import './index.scss';
export default function OrgMapDescCard({orgPicture, orgName,address,days,time,desc,id}){
    // console.log(id);
    return <div className="tt-62-map-charities-desc-container">
                <div className='tt-62-map-charities-desc'>
                    <div className='tt-62-image-wrapper'>
                        <img src={orgPicture} alt="charities-profile"/>
                        <h3>{orgName}</h3>
                    </div>
                    <div className="tt-62-charity-desc">
                        <p>
                            {desc}
                        </p>
                    </div>
                </div>
                <div className="tt-62-charity-timing">
                        <p><b>Received Donation Hours:</b></p>
                        <p>{time}</p>
                        <Link to={`/donation/toys/${id}`}><button>Donate Now</button></Link>
                </div>
            </div>
}