import './App.css';
<<<<<<< HEAD
// import B1 from './Button1/button1';
// import Card from './Card';
// import Categories from './Categories';
// import Rewards from './Rewards';
import OrgSideMenu from './side_menu';
=======
// eslint-disable-next-line no-unused-vars
import firebase from './FirebaseConfig';
>>>>>>> 5d87b9be2f262be6bfcf620a415087335db1535d

import Routing from "./routes/routing";
function App() {
  const wishList = [
    {headers:"Stuffed animal", ageLimit:"1-4 years"},
    {headers:"Puzzle", ageLimit:"1-8 years"},
    {headers:"Stuffed toys", ageLimit:"1-3 years"},
    {headers:"Wooden toys", ageLimit:"1-7 years"},
    {headers:"Painting", ageLimit:"4-10 years"},
    {headers:"Barbie", ageLimit:"1-14 years"},
]

let users=[
  {name:'Cindy',rewardPoints:300},
  {name:'Raha',rewardPoints:400},
  {name:'Jannet',rewardPoints:500},
  {name:'Rajat',rewardPoints:600}
 
]

let userIsLoggedIn = true;
if(userIsLoggedIn)
{
  console.log("User is logged in !!!");
}
else
{
  console.log("User is not logged in !!!");
}

let result= userIsLoggedIn?"User is logged in !!!":"User is not logged in !!!";

  return (
    <div className="App">
<<<<<<< HEAD
   {/* <B1/>
   
   <Categories>
    {
   wishList.map((el,index)=>{
                console.log(`index : ${el.headers}`);
                return <Card heading={el.headers} agelimit={el.ageLimit}/>
   })}
  </Categories>
  <Categories>
    <B1>Hello</B1>
  </Categories> */}
  {
    //  userIsLoggedIn?<Rewards name="Salmaan" rewardPoints="400"/>:"sdfdf"
  }
{
 
  // users.map((el) => {
  //  return userIsLoggedIn? <Rewards name={el.name} rewardPoints={el.rewardPoints}/>:"nothin";

  // })
}
   <OrgSideMenu/>
   
 
=======
        <Routing/>
>>>>>>> 5d87b9be2f262be6bfcf620a415087335db1535d
    </div>
  );
}

export default App;
