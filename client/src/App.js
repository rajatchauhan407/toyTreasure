import logo from './logo.svg';
import './App.css';
import Button from './components/button';
import Header from './header';
import Card from './components/card';

function App() {
  return (
    <div className="App">
    <Header/>
    <Button>
        Donate Now
    </Button>
    {/* <Card className="card"/> */}
    </div>
  );
}

export default App;
