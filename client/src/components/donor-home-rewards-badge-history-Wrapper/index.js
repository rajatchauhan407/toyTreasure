import "./index.scss";
import silverBadge from './silverBadge.png';
import WrapperHistoryOfDonations from '../donor-home-rewards-history-wrapper';
export default function HomeDashboardBadgeHistory(props){
    return (
            <div className="homeDashboardBadgeHistoryWrapper">
                <div className="homeDashboardBage">
                    <h4>Badge</h4>
                    <img src={silverBadge} alt="Silver Badge" />
                    <p>Your Level: 4/20 </p>
                    <p>Total Donations: 4 </p>
                </div>

                
                <div className="homeDashboardRewardsCardImgWrapper">
                <WrapperHistoryOfDonations/>
                 </div>

            </div>
    )
    }