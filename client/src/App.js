import './App.css';
import {useState, useEffect} from 'react';
import NoInternetComponent from './components/no-internet';
import Routing from "./routes/routing";
function App() {

  const [isOnline, setIsOnline] = useState(window.navigator.onLine);

  useEffect(() => {
    const handleOnline = () => {
      setIsOnline(true);
    };

    const handleOffline = () => {
      setIsOnline(false);
    };

    window.addEventListener('online', handleOnline);
    window.addEventListener('offline', handleOffline);

    return () => {
      window.removeEventListener('online', handleOnline);
      window.removeEventListener('offline', handleOffline);
    };
  }, []);

  return (
    
      isOnline ? (<div className="App">
      <Routing/>
  </div>):<NoInternetComponent/>
  );
};
export default App;