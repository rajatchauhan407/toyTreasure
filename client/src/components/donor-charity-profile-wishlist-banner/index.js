import "./index.scss";
import { Link } from "react-router-dom";


export default function DonorCharityProfileWishlistBanner({id}){
    return(
        <div className="WishlistBanner">
            <div className="WishlistBannerContent">
                <h2>Help us fulfill our wishlists</h2>
                <button><Link to={`/donation/toys/${id}`}>Donate to our wishlist now</Link></button>
            </div>
        </div>
    )
}