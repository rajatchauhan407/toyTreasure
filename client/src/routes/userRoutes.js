import {Outlet,useNavigate} from 'react-router-dom';
import {useContext} from "react";
import AuthContext from '../services/auth-context';
import DonorHeader from '../components/donor-header';
import DonorFooter from '../components/donor-footer';
export default function UserRoutes(){
  let authCtx = useContext(AuthContext);
  let navigate = useNavigate();
  console.log(authCtx);
    return(
        <>
        <div className='tt-102-donor-wrapper'>
        <div className='tt-102-header-wrapper'>
          <DonorHeader/>
        </div>
            <Outlet/>
        <div className="tt-102-footer-wrapper">
          <DonorFooter/>
        </div>
        </div>
        </>
            )
}