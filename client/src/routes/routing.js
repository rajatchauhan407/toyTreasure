import {Routes, Route} from "react-router-dom";
import UserRoutes from './userRoutes';
import LoginSignUp from '../pages/login-signup';
import Home from "../pages/home";
import Map from "../pages/map";
import Rewards from "../pages/rewards";
import Support from "../pages/support";
import PageNotFound from "../pages/pageNotFound";
import Login from "../pages/login";
import ProtectedRoutes from "./protectedRoutes";
import OrganizationRoutes from "./organizationRoutes";
import OrgProfile from "../pages/organization/profile";
import OrgDashboard from "../pages/organization/dashboard";
import OrgStories from "../pages/organization/stories";
import OrgSettings from "../pages/organization/settings";
import OrgVerification from "../pages/organization/verification";
import OrgVerificationRequest from "../pages/organization/verification/verification-request";
import DonorCharityProfilePage from "../pages/CharityProfile";
export default function Routing(){
    
return(
    
    <Routes>
        <Route element={<UserRoutes/>}>
            <Route path="/" element={<Home/>}/>
            <Route path="/map" element={<Map/>}/>
            <Route path="/rewards" element={<Rewards/>}/>
            <Route path="/support" element={<Support/>}/>
            <Route path="/home" element={<Home/>} />
            <Route path="/charity/profile" element={<DonorCharityProfilePage/>}/>
           
            

        </Route>
        <Route element={<ProtectedRoutes/>}>
            <Route path="/login-signup" element={<LoginSignUp/>} />
            <Route path="/login" element={<Login/>} />
        </Route>
        <Route element={<OrganizationRoutes/>}>
                <Route path="/organization/dashboard" element={<OrgDashboard/>}/>
                <Route path="/organization/profile" element={<OrgProfile/>}/>
                <Route path="/organization/stories" element={<OrgStories/>}/>
                <Route path="/organization/verification/:id" element={<OrgVerificationRequest/>}/>  
                <Route path="/organization/settings" element={<OrgSettings/>}/>
                <Route path="/organization/verification" element={<OrgVerification/>}/>
        </Route>
        <Route path="*" element={<PageNotFound/>} />
    </Routes>
)
}
