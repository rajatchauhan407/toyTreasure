import './App.css';
import DonorDonationProcessList from './components/donor-donation-process-list';

import Routing from "./routes/routing";
function App() {
  //Array Object Desturcturing
//   const details= {
//     name:"Jannet",
//     program:"WMDD",
//     course:"HTML"
//   }
// const {name,program}=details;

// const arr = ["Rajat",["Cindy","Raha","jannet"]]
// const [myName,teamMembers]=arr;
// console.log(myName);
// console.log(teamMembers);

  return (
    <div className="App">
        <Routing/>
       
    </div>
    
  );
};
export default App;