import {Outlet,Navigate} from 'react-router-dom';
import AuthContext from '../services/auth-context';
import { useContext } from 'react';
import OrgSideMenu from "../components/org-side-menu";
import './routes.scss';
import OrgHeader from '../components/org-header';
export default function OrganizationRoutes(){
    let authCtx = useContext(AuthContext);
    console.log(authCtx);
    return(
        <>
        <div className="organization">
                <div className='side-menu-wrapper'>
                    <OrgSideMenu/>
                </div>
                <div className='organization-dashboard-side-menu-container'>
                <OrgHeader/>
                {
                    authCtx.isLoggedIn && authCtx.userType==="organization"?<Outlet/>:<Navigate to="/login"/>
                }
                <Outlet/>
                </div>
        </div>
        
        </>
    )
}