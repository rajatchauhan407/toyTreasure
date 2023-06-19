import React, {useState, useEffect} from "react";
import FireBaseAuthService from "../FirebaseAuthService";
const AuthContext = new React.createContext({
    isLoggedIn:''
});

export const AuthContextProvider = (props)=>{
    const [user, setUser] = useState(null);
    const [isLoggedIn, setIsLoggedIn] = useState(true);
    FireBaseAuthService.subscribeToAuthChanges(setUser);
    useEffect(()=>{
        if(user){
            setIsLoggedIn(true)
        }
    },[user]);
    let contextValue={
        isLoggedIn:isLoggedIn
    }
    return (<AuthContext.Provider value={contextValue}>
            {props.children}
    </AuthContext.Provider>)
}

export default AuthContext;