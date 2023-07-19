import './index.scss'
import gift from "./gift.svg";

export default function OrgWishlistConfirmModal(props){
    return(
        <div className="modalConfirmatioWrapper">
             <img className="gift" src={gift} alt={"gift"}/>
            <h2>Congrats! Toy added to Wishlist.</h2>
            <p>Your new toy wishlist is successfully added.</p>
            <button className="go-dashboard" onClick={()=>{props.onReturnToDashboard()}}>Go to Dashboard</button>
            {/* <button className="go-wishlist">Add a new toy</button> */}
        </div>
    )
}

