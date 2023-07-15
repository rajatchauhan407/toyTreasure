import { Link } from 'react-router-dom';
import './index.scss';
export default function OrgMapDescCard({orgName,address,days,time,desc}){
    return <div className="tt-62-map-charities-desc-container">
                <div className='tt-62-map-charities-desc'>
                    <div className='tt-62-image-wrapper'>
                        <img src="https://picsum.photos/100/100?random=234" alt="charities-profile"/>
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
                        <button><Link to="/donation/toys">Donate Now</Link></button>
                </div>
            </div>
}