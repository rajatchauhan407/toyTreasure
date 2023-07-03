import './index.scss';
import HistoryOfDonations from '../donor-home-rewards-history';

function WrapperHistoryOfDonations() {
  const donationHistory = [
    {toyType: "Stuffed Animal", Points:"30 Points"},
    {toyType: "Educational Toy", Points:"40 Points"},
    {toyType: "Stuffed Animal", Points:"10 Points"},
    {toyType: "Puzzle", Points:"40 Points"},
];

    return <div className="WrapperDonationHistory">
      <h4>History of Donations</h4>
      
      {donationHistory.map((el)=>{
          
                return <HistoryOfDonations
                          toyType={el.toyType}
                          points={el.points}
                          />
            })}
            </div>
          }
export default WrapperHistoryOfDonations;
