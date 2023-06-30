import { getFirestore } from 'firebase/firestore';
import {initializeApp,getApps} from "firebase/app";

// configuration for firebase app
const config = {
  apiKey:process.env.REACT_APP_API_KEY,
  authDomain:process.env.REACT_APP_AUTH_DOMAIN,
  projectId:process.env.REACT_APP_PROJECT_ID,
  storageBucket:process.env.REACT_APP_STORAGE_BUCKET,
  messagingSenderId:process.env.REACT_APP_MESSAGING_SENDER_ID,
  appId:process.env.REACT_APP_APP_ID,
  measurementId:process.env.REACT_APP_MEASUREMENT_ID
}

let database;
let app;
if(!getApps().length){
    app = initializeApp(config);
    database = getFirestore(app); 
}
export {database};

export default app;