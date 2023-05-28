import logo from './logo.svg';
import './App.css';
import Vali from './validate';
import {Greeting} from './validate';
import Button from './components/button';

function App() {
  Vali();
  Greeting();
  return (
    <div className="App">
      <Button>
        Verify Donation
      </Button>
      
    </div>
  );
}

export default App;
