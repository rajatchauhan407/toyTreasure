import './App.css';
// eslint-disable-next-line no-unused-vars
import firebase from './FirebaseConfig';
import OrgVerificationDetails from './components/org-verification-details';
import OrgSideMenu from './components/side-menu';

import Routing from "./routes/routing";
function App() {
  return (
    <div className="App">
        {/* <Routing/> */}
      <OrgVerificationDetails/>
    </div>
    
  );
};
export default App;
