import './index.scss'

export default function OrgWishlistConfirmModal(props){
    return(
        <div className="modalConfirmatioWrapper">
            <img src="https://picsum.photos/200/200?random=567" alt="" />
            <h2>Congrats! Toy added to Wishlist.</h2>
            <p>Your new toy wishlist is successfully added.</p>
            <button className="go-dashboard" onClick={()=>{props.onReturnToDashboard()}}>Go to Dashboard</button>
            {/* <button className="go-wishlist">Add a new toy</button> */}
        </div>
    )
}

