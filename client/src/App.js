import { useContext } from 'react';
import './App.css';

import Routing from "./routes/routing";
import AuthContext from './services/auth-context';
function App() {
let authCtx = useContext(AuthContext);
console.log(authCtx);
  return (
    <div className="App">
        <Routing/>
       
    </div>
    
  );
};
export default App;