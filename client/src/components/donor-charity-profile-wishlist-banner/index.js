import "./index.scss";
import { Link } from "react-router-dom";


export default function DonorCharityProfileWishlistBanner(props){
    return(
        <div className="WishlistBanner">
            <div className="WishlistBannerContent">
                <h2>Help us fulfill our wishlists</h2>
                <button><Link to="/donation/toys">Donate to our wishlist now</Link></button>
            </div>
        </div>
    )
}