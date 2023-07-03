import './index.scss'
import CardOrgTT13 from '../card-vertification-pending-donor'

function WrapperCardOrgTT13() {
  const verification = [
    {orderNumber: 37890, name:"Greg Thomas", method: "drop-off", date: "05/05/2023", Qty: 6, donationStatus: "Pending"},
    {orderNumber: 37890, name:"Greg Thomas", method: "drop-off", date: "05/05/2023", Qty: 6, donationStatus: "Pending"},
    {orderNumber: 37890, name:"Greg Thomas", method: "drop-off", date: "05/05/2023", Qty: 6, donationStatus: "Pending"},
];

    return <div className="Verification">
      <h1>Verification</h1>
      <div className="org-verification-donation-req">
       <h2>Donation Requests</h2>
       <div id="org-verification-sort-container">
          <button id="org-vertification-sort-button">Sort By</button>
          {/* <ul id="org-verification-sort-options">
            <li data-sort="date">Date</li>
            <li data-sort="donationStatus">Donation Status</li>
          </ul> */}
        </div>
      </div>
      

      <div className="TitleCardOrgTT13">
              <ul>
                  <li>Order Number</li>
                  <li>Name</li>
                  <li>Method</li>
                  <li>Date</li>
                  <li>Qty</li>
                  <li>Donation Status</li>
                  <li>Action</li>
              </ul>
      </div>
      
      {verification.map((el)=>{
          
                return <CardOrgTT13 
                          orderNumber={el.orderNumber}
                          name={el.name}
                          method={el.method}
                          date={el.date}
                          Qty={el.Qty}
                          donationStatus={el.donationStatus}
                          />
            })}
            </div>
          }
export default WrapperCardOrgTT13;
