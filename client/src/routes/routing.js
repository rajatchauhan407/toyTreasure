import {Routes, Route} from "react-router-dom";
import UserRoutes from './userRoutes';
import Home from "../pages/home";
import Map from "../pages/map";
import Rewards from "../pages/rewards";
import Support from "../pages/support";
import PageNotFound from "../pages/pageNotFound";
import Login from "../pages/login";
export default function Routing(){
    
return(
    <Routes>
        <Route element={<UserRoutes/>}>
            <Route path="/" element={<Home/>}/>
            <Route path="/home" element={<Home/>}/>
            <Route path="/map" element={<Map/>}/>
            <Route path="/rewards" element={<Rewards/>}/>
            <Route path="/support" element={<Support/>}/>
        </Route>
        <Route path="/login" element={<Login/>} />
        <Route path="*" element={<PageNotFound/>} />
    </Routes>
)
}