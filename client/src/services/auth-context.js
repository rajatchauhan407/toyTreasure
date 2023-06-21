import React, {useState, useEffect} from "react";
import FireBaseAuthService from "../FirebaseAuthService";
const AuthContext = new React.createContext({
    isLoggedIn:''
});

export const AuthContextProvider = (props)=>{
    // const [user, setUser] = useState(FireBaseAuthService.subscribeToAuthChanges(setUser) || null);
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    useEffect(()=>{
        const unsubscribe = FireBaseAuthService.auth.onAuthStateChanged(
            (user)=>{
                if(user){
                    setIsLoggedIn(true);
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