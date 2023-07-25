import React, {useState, useEffect} from "react";
// import { database } from "../FirebaseConfig";
// import FireBaseAuthService from "./FirebaseAuthService";
// import { query,where,collection,getDocs} from 'firebase/firestore';
import FireBaseAuthService from "./FirebaseAuthService";
import {onAuthStateChanged} from "firebase/auth";
import { useNavigate } from "react-router-dom";
import FireBaseFirestoreService from "./Firebasefirestoreservice";
const AuthContext = new React.createContext({
    isLoggedIn:'',
    profilePic:'',
    displayName:'',
    email:'',
    emailVerified:'',
    user_type:'',
    setUserType:()=>{},
    uid:'',
    user_points: 0,
    userCartData:{},
    serUserCartData:()=>{}
});

export const AuthContextProvider = (props)=>{
    let navigate = useNavigate()
    const initialIsLoggedIn = localStorage.getItem('isLoggedIn');
    const [isLoggedIn, setIsLoggedIn] = useState(initialIsLoggedIn);
    const [profilePic, setProfilePic] = useState(localStorage.getItem('profile_pic')||'');
    const [displayName, setDisplayName] = useState(localStorage.getItem('displayName')||'');
    const [email,setEmail] = useState(localStorage.getItem('email')||'');
    const [emailVerified, setEmailVerified] = useState(localStorage.getItem('emailVerified') || '');
    const [uid,setUid] = useState(localStorage.getItem('uid')|| '');
    const [userType, setUserType] = useState(localStorage.getItem('userType')||'');
    const [userPoints, setUserPoints] = useState(0);
    const [toysQuantity, setToysQuantity] = useState(0);
    const [userCartData, setUserCartData] = useState({});
    
    
    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(FireBaseAuthService.auth,
            async (user)=>{
                if(user){
                    console.log(user.uid);
                    console.log(user);
                    let res = await FireBaseFirestoreService.getDocumentById('user',user.uid);
                    console.log(res.data());
                    const user_type = localStorage.getItem('userType');
                    setIsLoggedIn(true);
                    console.log(user);
                    setDisplayName(user.displayName);
                    setEmail(user.email);
                    setProfilePic(user.photoURL);
                    setEmailVerified(user.emailVerified);
                    setUid(user.uid);
                    localStorage.setItem('isLoggedIn', 'true');
                    localStorage.setItem('userType',user_type);
                }else{
                    setIsLoggedIn(false);   
                    localStorage.removeItem('isLoggedIn');
                    localStorage.removeItem('profile_pic');
                    localStorage.removeItem('displayName');
                    localStorage.removeItem('email');
                    localStorage.removeItem('emailVerified');
                    localStorage.removeItem('uid');
                    localStorage.removeItem('userType');
                    setUserType(null);
                    navigate('/signup');
                }
            }
        );
        return ()=>{
            unsubscribe();
        }
    },[]);
    let contextValue={
        isLoggedIn:isLoggedIn,
        profilePic:profilePic,
        displayName:displayName,
        email:email,
        emailVerified:emailVerified,
        uid:uid,
        userType:userType,
        setUserType,
        user_points: userPoints,
        setUserPoints,
        userCartData:userCartData,
        setUserCartData,
        toysQuantity:toysQuantity,
        setToysQuantity
    }
    
    
    return (<AuthContext.Provider value={contextValue}>
            {props.children}
    </AuthContext.Provider>);
}

export default AuthContext;