import logo from './logo.svg';
import './App.css';
import B1 from './Button1/button1';
import Card from './Card';
import Categories from './Categories';

function App() {
  const wishList = [
    {headers:"Stuffed animal", ageLimit:"1-4 years"},
    {headers:"Puzzle", ageLimit:"1-8 years"},
    {headers:"Stuffed toys", ageLimit:"1-3 years"},
    {headers:"Wooden toys", ageLimit:"1-7 years"},
    {headers:"Painting", ageLimit:"4-10 years"},
    {headers:"Barbie", ageLimit:"1-14 years"},
]
  return (
    <div className="App">
   <B1/>
   
   <Categories>
    {
   wishList.map((el,index)=>{
                console.log(`index : ${el.headers}`);
                return <Card heading={el.headers} agelimit={el.ageLimit}/>
   })}
  </Categories>
  <Categories>
    <B1>Hello</B1>
  </Categories>

 
    </div>
  );
}

export default App;
