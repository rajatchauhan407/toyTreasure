import './index.scss';
import HistoryOfDonations from '../donor-home-rewards-history';

function WrapperHistoryOfDonations() {
  const donationHistory = [
    {toyType: "Stuffed Animal", Points:"20 Points"},
    {toyType: "Educational Toy", Points:"50 Points"},
    {toyType: "Stuffed Animal", Points:"20 Points"},
    {toyType: "Puzzle", Points:"20 Points"},
];

    return <div className="WrapperDonationHistory">
      <h3>History of Donations</h3>
      
      {donationHistory.map((el)=>{
          
                return <HistoryOfDonations
                          toyType={el.toyType}
                          points={el.Points}
                          />
            })}
            </div>
          }
export default WrapperHistoryOfDonations;
