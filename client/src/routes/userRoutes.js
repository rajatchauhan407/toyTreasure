import {Navigate,Outlet} from 'react-router-dom';
import {useState} from "react";
import FireBaseAuthService from '../FirebaseAuthService';

export default function UserRoutes(){
    const [user, setUser] = useState(null);
  FireBaseAuthService.subscribeToAuthChanges(setUser);
    return(
        <>
        {
            !user? <Navigate to="/login"/>
            : 
            <Outlet/>
        }
        </>
            )
}