import './App.css';
// eslint-disable-next-line no-unused-vars
import firebase from './FirebaseConfig';

import Routing from "./routes/routing";
function App() {
  let promise = new Promise((res, rej)=>{
let array = ["Cindy","Raha","Jannet"];
res(array);

  })
  promise.then((data)=>{
console.log(data);
  });
  console.log ("Hello World");
  setTimeout(()=> {
    console.log("Inside another world");
  },1000);
  console.log("Hello word 2")
  return (
    <div className="App">
        <Routing/>
    </div>
  );
};
export default App;
