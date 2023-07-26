import './index.scss';
import congrats from './congrats.svg'
import { Link } from 'react-router-dom';
export default function UserRewardsModal(props){
    return(
        <div className="modalWrapper">
            <img src={congrats} alt="congrats-icon" />
            <h2>Congratulations</h2>
            <p>Here’s the code for your coupon. Use this to redeem your discount on the product website.</p>
            <h4>Coupon Code</h4>
            <div className="coupon-desc">
                <h3>ZPHY TYRK DCHO</h3>
            </div>
            <button className="redeem-now">
                <Link to="https://jimsbouncycastles.com/" target="_blank" rel="noopener noreferrer">
                    Redeem on Website
                </Link>
            </button>        
        </div>
    )
}