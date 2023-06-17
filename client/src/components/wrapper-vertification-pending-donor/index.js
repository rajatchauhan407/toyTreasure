import './index.scss';
// import CardOrgTT13 from '../card-vertification-pending-donor';

function WrapperCardOrgTT13() {
  // Defined the card component here only for titles problem
  function CardOrgTT13(props){
        return(
                <div className="listInfoCardOrgTT13">
                    <ul> 
                        <li>{props.orderNumber}</li>
                        <li>{props.method}</li>
                        <li>{props.date}</li>
                        <li>{props.Qty}</li>
                        <li>{props.donationStatus}</li>
                    </ul>
                </div>
        )}
  const verification = [
    {orderNumber: 37890, name:"Greg Thomas", method: "drop-off", date: "05/05/2023", Qty: 6, donationStatus: "Pending"},
    {orderNumber: 37890, name:"Greg Thomas", method: "drop-off", date: "05/05/2023", Qty: 6, donationStatus: "Pending"},
    {orderNumber: 37890, name:"Greg Thomas", method: "drop-off", date: "05/05/2023", Qty: 6, donationStatus: "Pending"},
];

    return <div className="Verification">
      <h1>Verification</h1>
      <h2>Donation Requests</h2>

      <div className="TitleCardOrgTT13">
          <h3>
              <ul>
                  <li>Order Number</li>
                  <li>Method</li>
                  <li>Date</li>
                  <li>Qty</li>
                  <li>Donation Status</li>
              </ul>
          </h3>
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