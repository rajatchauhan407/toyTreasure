import './index.scss';
import { Link } from 'react-router-dom';
import Heart from './heart.svg';
import QR from './QR.svg';

export default function DonorDonationModal(){
    return(
        <div className="modalCongrats">
            <img src={QR} alt="QR code sign" />

            <div className='ThankYouWrapper'>
            <h2>Thank You.</h2>
            <img src={Heart} alt="heart sign" />
            </div>
            
            <p>Your contribution is greatly appreciated and will bring joy and happiness to the children.</p>
            <div className='instructions'>
                <h5>Reward Instruction:</h5>
                <p>After your donation is completed in site, scan the provided QR code given by the organization to earn the rewards points.</p>
            </div>
                <button className="go-home"><Link to="/home">Return to Home</Link></button>
        </div>
    )
}