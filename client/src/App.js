import logo from './logo.svg';
import './App.css';
import Card from './components/card';
import Button from './components/buttons';
import Categories from './components/categories';
import Rewards from './components/rewards';

function App() {
  const wishList = [
    {heading:"stuffed toys", age:"1-4 years"},
    {heading:"puzzle", age:"5-10 years"},
    {heading:"toys", age:"8year"},
    {heading:"painting", age:"5+"},
    {heading:"toys", age:"8year"},
    {heading:"small puzzle", age:"10+ year"},
]

let users = [
  {name:'Cindy', rewardPoints: 500},
{name: 'Raha', rewardPoints: 300},
{name: 'Jannet', rewardPoints: 600},
{name: 'Rajat', rewardPoints: 200}
];

let userIsLoggedIn = false;
// if (userIsLoggedIn){
//   console.log("user is logged in");
// }
// else{
//   console.log("user is not logged in!!");
// }

let result = userIsLoggedIn?console.log("Logged in"):console.log("Not logged in")
  return (
    <div className="App">
      <Button>
        cancel
      </Button>
      {/* <Card className="card"/> */}
      <Categories>
      {wishList.map((el)=>{
                return <Card heading={el.heading} age={el.age}/>
            })}
      </Categories>
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
        })
      }


    </div>
  );
}

export default App;
