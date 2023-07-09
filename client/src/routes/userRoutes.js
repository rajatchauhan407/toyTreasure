import {Navigate,Outlet} from 'react-router-dom';
import {useContext} from "react";
import AuthContext from '../services/auth-context';
import DonorHeader from '../components/donor-header';
import DonorFooter from '../components/donor-footer';
export default function UserRoutes(){
  let authCtx = useContext(AuthContext);
  console.log(authCtx);
    return(
        <>
        <div className='tt-102-donor-wrapper'>
        <div className='tt-102-header-wrapper'>
          <DonorHeader/>
        </div>
        
        {
            !authCtx.isLoggedIn? <Navigate to="/login"/>
            : 
            <Outlet/>
        }
        <div className="tt-102-footer-wrapper">
          <DonorFooter/>
        </div>
        </div>
        </>
            )
}