import './App.css';
// eslint-disable-next-line no-unused-vars
import firebase from './FirebaseConfig';

import Routing from "./routes/routing";
function App() {
  return (
    <div className="App">
        <Routing/>
    </div>
  );
}

export default App;
