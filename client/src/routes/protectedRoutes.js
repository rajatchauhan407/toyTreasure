import { Navigate, Outlet, useLocation } from "react-router-dom";
import {useContext} from "react";
import AuthContext from '../services/auth-context';
export default function ProtectedRoutes(){
    let authCtx = useContext(AuthContext);
    console.log(authCtx);
    let location = useLocation();
    const currentUrl = location.pathname;
    return(
        <>
        {
            !authCtx.isLoggedIn? <Outlet/>
            : 
            <Navigate to="/organization/profile"/>
        }
        </>
        )
}