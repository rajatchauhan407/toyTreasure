import logo from './logo.svg';
import './App.css';
import Button from './components/button';
import Header from './header';

function App() {
  return (
    <div className="App">
    <Header/>
    <Button>
        Donate Now
    </Button>
    </div>
  );
}

export default App;
