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
                <div>
                <OrgHeader/>
                {
                    authCtx.isLoggedIn?<Outlet/>:<Navigate to="/login"/>
                }
                </div>
        </div>
        
        </>
    )
}