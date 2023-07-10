import React, {useState, useEffect} from "react";
// import FireBaseAuthService from "./FirebaseAuthService";
import FireBaseAuthService from "./FirebaseAuthService";
import {onAuthStateChanged} from "firebase/auth";
import { useNavigate } from "react-router-dom";
const AuthContext = new React.createContext({
    isLoggedIn:'',
    profilePic:'',
    displayName:'',
    email:'',
    emailVerified:'',
    user_type:'',
    setUserType:()=>{}
});

export const AuthContextProvider = (props)=>{
    let navigate = useNavigate()
    const initialIsLoggedIn = sessionStorage.getItem('isLoggedIn');
    const [isLoggedIn, setIsLoggedIn] = useState(initialIsLoggedIn);
    const [profilePic, setProfilePic] = useState(sessionStorage.getItem('profile_pic')||'');
    const [displayName, setDisplayName] = useState(sessionStorage.getItem('displayName')||'');
    const [email,setEmail] = useState(sessionStorage.getItem('email')||'');
    const [emailVerified, setEmailVerified] = useState(sessionStorage.getItem('emailVerified') || '');
    const [uid,setUid] = useState(sessionStorage.getItem('uid')|| '');
    const [userType, setUserType] = useState(sessionStorage.getItem('userType')||'');
    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(FireBaseAuthService.auth,
            (user)=>{
                if(user){
                    console.log(user)
                    setIsLoggedIn(true);
                    console.log(user);
                    setDisplayName(user.displayName);
                    setEmail(user.email);
                    setProfilePic(user.photoURL);
                    setEmailVerified(user.emailVerified);
                    setUid(user.uid);
                    sessionStorage.setItem('isLoggedIn', 'true');
                    sessionStorage.setItem('userType',userType);
                }else{
                    setIsLoggedIn(false);   
                    sessionStorage.removeItem('isLoggedIn');
                    sessionStorage.removeItem('profile_pic');
                    sessionStorage.removeItem('displayName');
                    sessionStorage.removeItem('email');
                    sessionStorage.removeItem('emailVerified');
                    sessionStorage.removeItem('uid');
                    sessionStorage.removeItem('userType');
                    setUserType(null);
                    navigate('/login');
                }
            }
        );
        return ()=>{
            unsubscribe();
        }
    },[setIsLoggedIn,userType]);
    let contextValue={
        isLoggedIn:isLoggedIn,
        profilePic:profilePic,
        displayName:displayName,
        email:email,
        emailVerified:emailVerified,
        uid:uid,
        userType:userType,
        setUserType
    }
    return (<AuthContext.Provider value={contextValue}>
            {props.children}
    </AuthContext.Provider>);
}

export default AuthContext;