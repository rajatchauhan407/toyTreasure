import logo from './logo.svg';
import './App.css';
import Card from './components/card';
import Button from './components/buttons';
import Categories from './components/categories';

function App() {
  const wishList = [
    {heading:"stuffed toys", age:"1-4 years"},
    {heading:"puzzle", age:"5-10 years"},
    {heading:"toys", age:"8year"},
    {heading:"painting", age:"5+"},
    {heading:"toys", age:"8year"},
    {heading:"small puzzle", age:"10+ year"},
]
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
    </div>
  );
}

export default App;
