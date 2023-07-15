import { Link } from 'react-router-dom';
import './index.scss';
export default function OrgMapDescCard({orgName,address,days,time,id}){
    // console.log(id);
    return <div className="tt-62-map-charities-desc-container">
                <div className='tt-62-map-charities-desc'>
                    <div className='tt-62-image-wrapper'>
                        <img src="https://picsum.photos/100/100?random=234" alt="charities-profile"/>
                    </div>
                    <div className="tt-62-charity-desc">
                        <h3>{orgName}</h3>
                        <p>
                            {address}
                        </p>
                    </div>
                </div>
                <div className="tt-62-charity-timing">
                        <p>Received Donation Hours:</p>
                        <p>{time}</p>
                        <button><Link to={`/donation/toys/${id}`}>Donate Now</Link></button>
                </div>
            </div>
}