import HomeDashboardRewardsCard from "../donor-home-dashboard-rewards-card-wrapper";
import HomeDashboardBadgeHistory from "../donor-home-rewards-badge-history-Wrapper";
import DiscountCard from "../donor-rewards-discount-banner";
import "./index.scss";

import { Link } from "react-router-dom";
export default function DonorRewards(props)
{
    let discountData = [
        {
          url: 'https://picsum.photos/400/400?rand=431',
          discount: "20% off",
          info: "Super Sale",
          req:"Father's Day Offer"
        },
       
      ];
      const discountList = discountData.map((el) => (
        <DiscountCard 
        url={el.url} 
        info={el.info}
        discount={el.discount}
        req={el.req} />
      ));
    
    return(
        <div className="tt-101-DonorRewardsWrapper">
            <div className="tt-101-rewards-profile">
                <div className="tt-101-rewards-profile-and-points">
                    <h1>Rewards Profile</h1>
                    <h2 className="tt-101-points">Your Points : 600</h2>
                </div>
                <HomeDashboardBadgeHistory/>         
            </div>

            <div className="tt-101-redeem-rewards">
                <h1>Rewards</h1>
                <HomeDashboardRewardsCard/>
            </div>

            <div className="tt-101-special-discount">
                <h1>Special discount for you</h1>                
                {discountList}
            </div>
        </div>
    )
}

