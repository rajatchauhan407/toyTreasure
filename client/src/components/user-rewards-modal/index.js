import './index.scss';
import { MdCancel } from 'react-icons/md';
export default function UserRewardsModal(props){
    return(
        <div className="modalWrapper">
            <MdCancel className='cancelIcon'/>
            <img src="https://picsum.photos/200/200?random=567" alt="" />
            <h2>Congratulations</h2>
            <p>Here’s the code for your coupon. Use this to redeem your discount on the product website.</p>
            <p>Coupon Code</p>
            <div className="coupon-desc">
                ZPHY TYRK DCHO
            </div>
            <button className="redeem-now">Redeem on Website</button>
        </div>
    )
}