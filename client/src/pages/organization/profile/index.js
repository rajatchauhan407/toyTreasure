import OrgProfileForm from "../../../components/org-profile-form";
import {useContext} from "react";
import AuthContext from "../../../services/auth-context";
import {Navigate} from "react-router-dom";
export default function OrgProfile(){
    let authCtx = useContext(AuthContext);
    console.log(authCtx.isLoggedIn);
    if(authCtx.isLoggedIn){
        return (<>
            <OrgProfileForm/>
    </>);  
    }else{
        return (<>
        <Navigate to="/login"/>
        </>
           
        )
    }
     
}