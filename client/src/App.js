import logo from './logo.svg';
import './App.css';
import Button from './components/button';
import Header from './header';
import Card from './components/card';
import Categories from './components/categories';
import Rewards from './components/rewards';

function App() {
  let users = [{name:'Cindy',rewardPoints:500},
  {name:'Raha',rewardPoints:300},
  {name:"Jannet", rewardPoints:600},
  {name:"Rajat", rewardPoints:200}  
    ];
    let userIsLoggedIn = true;
    // if(userIsLoggedIn){
    //   console.log("User is logged in !!!")
    // }else{
    //   console.log("user is not logged in!!!")
    // }
    let result = (userIsLoggedIn===true)?"User is logged in !!!":"user is not logged in!!!";

    console.log(result);
  return (
    <div className="App">
    
    {/* <Header/>
    <Button>
        Donate Now
    </Button> */}
    {/* <Card className="card"/> */}
    {/* <Categories/> */}
    {/* {
      userIsLoggedIn?<Rewards name="Salman" rewardPoints="400"/>:""
    } */}
    {
      users.map((el)=>{ 
        return userIsLoggedIn?(<Rewards 
      name={el.name}
      rewardPoints={el.rewardPoints}
    />):""
      })
    }
  
    
    </div>
  );
}

export default App;
