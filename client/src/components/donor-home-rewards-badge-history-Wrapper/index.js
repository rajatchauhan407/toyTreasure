import "./index.scss";
import silverBadge from './badge-2.svg';
import WrapperHistoryOfDonations from '../donor-home-rewards-history-wrapper';
export default function HomeDashboardBadgeHistory(props){
    return (
            <div className="homeDashboardBadgeHistoryWrapper">
                <div className="homeDashboardBage">
                    <h3>Badge</h3>
                    <img src={silverBadge} alt="Silver Badge" />
                    <h4>Your Level: 4/20 </h4>
                    <h4>Total Donations: 4 </h4>
                </div>

                
                <div className="homeDashboardRewardsCardImgWrapper">
                <WrapperHistoryOfDonations/>
                 </div>

            </div>
    )
    }