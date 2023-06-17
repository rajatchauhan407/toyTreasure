import './index.css';
import {useState} from "react";
import FireBaseAuthService from '../../FirebaseAuthService';
import LoginForm from '../../components/login'
export default function Home(){
    const [user, setUser] = useState(null);
  FireBaseAuthService.subscribeToAuthChanges(setUser);
    return(<>
            <h1>{user.displayName}</h1>
            <LoginForm 
          existingUser={user}
        />
    </>);
}