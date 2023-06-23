import {Navigate,Outlet} from 'react-router-dom';
import {useContext} from "react";
import AuthContext from '../services/auth-context';
export default function UserRoutes(){
  let authCtx = useContext(AuthContext);
  
    return(
        <>
        {
            !authCtx.isLoggedIn? <Navigate to="/login"/>
            : 
            <Outlet/>
        }
        </>
            )
}