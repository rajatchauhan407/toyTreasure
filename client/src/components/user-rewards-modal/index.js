import './index.scss';

export default function UserRewardsModal(props){
    return(
        <div className="modalWrapper">
            <img src="https://picsum.photos/200/200?random=567" alt="" />
            <h2>Congratulations</h2>
            <p>Here's the code for your coupon. Use this to redeem your discount.</p>
            <p>Coupon Code</p>
            <div className="coupon-desc">
                ZPHY TYRK DCHO
            </div>
            <button className="redeem-now">Redeem Now</button>
        </div>
    )
}