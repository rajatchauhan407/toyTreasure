import React, {useState, useEffect} from "react";
import FireBaseAuthService from "../FirebaseAuthService";
const AuthContext = new React.createContext({
    isLoggedIn:''
});

export const AuthContextProvider = (props)=>{
    const initialIsLoggedIn = sessionStorage.getItem('isLoggedIn');
    const [isLoggedIn, setIsLoggedIn] = useState(initialIsLoggedIn);
    useEffect(()=>{
        const unsubscribe = FireBaseAuthService.auth.onAuthStateChanged(
            (user)=>{
                if(user){
                    setIsLoggedIn(true);
                    sessionStorage.setItem('isLoggedIn', 'true');
                }else{
                    setIsLoggedIn(false);   
                    sessionStorage.removeItem('isLoggedIn');
                }
            }
        );
        return ()=>{
            unsubscribe();
        }
    },[setIsLoggedIn]);
    let contextValue={
        isLoggedIn:isLoggedIn
    }
    return (<AuthContext.Provider value={contextValue}>
            {props.children}
    </AuthContext.Provider>)
}

export default AuthContext;