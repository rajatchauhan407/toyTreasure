import CardOrgTT13 from '../card-vertification-pending-donor'

function App() {
    const verification = [
      {orderNumber: 37890, name:"Greg Thomas", method: "drop-off", date: "05/05/2023", Qty: 6, donationStatus: "Pending"},
      {orderNumber: 37890, name:"Greg Thomas", method: "drop-off", date: "05/05/2023", Qty: 6, donationStatus: "Pending"},
      {orderNumber: 37890, name:"Greg Thomas", method: "drop-off", date: "05/05/2023", Qty: 6, donationStatus: "Pending"},
  ];
  
      return <div className="Verification">
        
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
  export default App;