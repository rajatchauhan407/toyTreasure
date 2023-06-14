import logo from './logo.svg';
import './App.css';
import Card from './components/card-vertification-pending-donor';

function App() {
  const verification = [
    {orderNumber: 37890, name:"Greg Thomas", method: "drop-off", date: "05/05/2023", Qty: 6, donationStatus: "Pending"},
    {orderNumber: 37890, name:"Greg Thomas", method: "drop-off", date: "05/05/2023", Qty: 6, donationStatus: "Pending"},
    {orderNumber: 37890, name:"Greg Thomas", method: "drop-off", date: "05/05/2023", Qty: 6, donationStatus: "Pending"},
]

    <div className="Verification">
      {verification.map((el)=>{
                return <Card ={el.orderNumber} age={el.age}/>
            })}
      <Categories>
        <Button>Donate Now</Button>
      </Categories>
      {
        //  userIsLoggedIn?<Rewards/>:""
      }
      {
        users.map((el)=>{
         return userIsLoggedIn?(<Rewards
          name={el.name}
          rewardPoint={el.rewardPoints}
          />):""
        });
export default App;
