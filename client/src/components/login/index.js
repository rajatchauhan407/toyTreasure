// This component is sample login page for checking purpose.. It shall be deleted phir.

import { AiFillGoogleCircle } from 'react-icons/ai';
import "./index.scss";
import { useContext, useRef, useState } from "react";
import FireBaseAuthService from "../../services/FirebaseAuthService";
import {Link} from "react-router-dom";
import { query,where,collection,getDocs} from 'firebase/firestore';
import {database} from "../../FirebaseConfig";
import AuthContext from '../../services/auth-context';
import FireBaseFirestoreService from '../../services/Firebasefirestoreservice';
function LoginForm({existingUser}){
    let authCtx = useContext(AuthContext);
    const [userName, setUserName] = useState("");
    const [password, setPassword] = useState("");
    const [userType, setUserType] = useState("");
    const donorRef = useRef(null);
    const orgRef = useRef(null);
// handling the userType
    function handleUserType(e){
        setUserType(e.target.value);
        if(e.target.value === "donor"){
            donorRef.current.style.background = "orange";
            orgRef.current.style.background = "unset"
        }
        if(e.target.value === "organization"){
            donorRef.current.style.background = "unset";
            orgRef.current.style.background = "orange"
        }
    }
    async function handleSubmit(event){
        event.preventDefault();
        try {
            await FireBaseAuthService.registerUser(userName,password);
            setUserName("");
            setPassword("");
              
        } catch (error) {
            alert(error.message);
        }
    }
    function handleLogout(){
        FireBaseAuthService.logoutUser();
    }

    
// async function handleSendResetPasswordEmail(){
//     if(!userName){
//         alert("Missing Username!");
//         return
//     }
//     try{
//         await FireBaseAuthService.sendPasswordResetEmail(userName);
//         alert('Password to reset account has been sent to your email');
//     }catch(error){
//         alert(error.message);
//     }
 // }
async function handleLoginWithGoogle(){
    try {
        let result = await FireBaseAuthService.loginWithGoogle();
        const {email,emailVerified, displayName, phoneNumber, photoURL, uid} = result.user;
        
        const document = {
            user_type:userType,
            uid,
            email,
            emailVerified,
            displayName,
            phoneNumber,
            photoURL
        }
        console.log(document);
        const q = query(collection(database, 'user'), where('uid','==',uid));
        const data = await getDocs(q);
        
        if(data.docs.length === 0){
            await FireBaseFirestoreService.createDocument("user",document);
        }
        // console.log(data);
            sessionStorage.setItem('isLoggedIn', 'true');
            sessionStorage.setItem('profile_pic', photoURL);
            sessionStorage.setItem('displayName',displayName);
            sessionStorage.setItem('email',email);
            sessionStorage.setItem('emailVerified',emailVerified);
            sessionStorage.setItem('uid',uid);
            sessionStorage.setItem('userType',userType);
            authCtx.setUserType(userType);

    } catch (error) {
        alert(error.message);
    }
}
    return (<>
        <div className="login-form-container">
        <button 
            className="loginDonorButton" 
            value="donor" 
            onClick={handleUserType}
            ref={donorRef}
            >Donor</button> 
        <button 
            className="loginOrgButton" 
            value="organization" 
            onClick={handleUserType}
            ref={orgRef}
            >Organization</button>
            <h1>Welcome back!</h1>
            <hr className="borderBottom" />
            <p>Log in to unlock the powere of giving </p>
            {existingUser ? <div className="row">
            
                <h3>Welcome, {existingUser.email}</h3>
                <button type="button" className="primary-button" onClick={handleLogout}>Logout</button>
            </div> : <form onSubmit={handleSubmit} className="login-form">
                    <label className="input-label login-label">
                        Email:
                        <input type="email" 
                        placeholder='Enter email address'
                            required
                            value={userName}
                            onChange={(e)=>{setUserName(e.target.value)}}
                            className="input-text"
                        />
                    </label>
                    <label className="input-label login-label">
                        Password:
                        <input type="password" 
                        placeholder='Enter password'
                            required
                            value={password}
                            onChange={(e)=>{setPassword(e.target.value)}}
                            className="input-text"
                        />
                        </label>
                        <div className="loginRememberMe">
                        <label >
                         <input type="checkbox" className='loginRememberMeCheckbox' />
                         Keep signed in
                         </label>
                         </div>
                        
                    <div className="button-box">
                        <button className="primary-button">Login</button> 
                        <div className="or-separator">
                        <hr className="or-line" />
                        <p className="or-text">OR</p>
                        <hr className="or-line" />
                        </div>
                        <div className='google-Facebook-Button'>
                        <button type="button" disabled={!userType} onClick={handleLoginWithGoogle}>
                            <AiFillGoogleCircle className="google-icon" />
                             Login With Google
                        </button>
                        </div>
                        <p>Don't have an account?  <Link to="/login-signup">Join Now!</Link></p>
                    </div>
            </form>
            }
        </div>
    </>);
}

export default LoginForm;