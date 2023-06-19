import { Navigate, Outlet } from "react-router-dom";
import {useContext} from "react";
import AuthContext from '../services/auth-context';
export default function ProtectedRoutes(){
    let authCtx = useContext(AuthContext);
    console.log(authCtx);
    return(
        <>
        {
            !authCtx.isLoggedIn? <Outlet/>
            : 
            <Navigate to="/home"/>
        }
        </>
        )
}