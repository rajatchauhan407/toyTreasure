// This component is sample login page for checking purpose.. It shall be deleted phir.

// import { AiFillGoogleCircle } from 'react-icons/ai';
// import googleIcon from './GoogleLogo.com.png';
import DonorIcon from './../loginsignupform/donorIcon.svg';
import OrgIcon from './../loginsignupform/organizationIcon.svg';
import GoogleIcon from './GoogleLogo.png';
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
            donorRef.current.style.background = "rgba(102, 34, 170, 1)";
            donorRef.current.style.color = "white";
            orgRef.current.style.background = "unset"
            orgRef.current.style.color = "unset"
        }
        if(e.target.value === "organization"){
            orgRef.current.style.background = "rgba(102, 34, 170, 1)"
            orgRef.current.style.color = "white";
            donorRef.current.style.background = "unset";
            donorRef.current.style.color = "unset";
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

        console.log(result);
        const document = {
            user_type:userType,
            email,
            emailVerified,
            displayName,
            phoneNumber,
            photoURL,
            user_points:0
        }
        console.log(document);
        // const q = query(collection(database, 'user'), where('uid','==',uid));
        // const data = await getDocs(q);
        let res = await FireBaseFirestoreService.getDocumentById('user',uid);
        console.log(res);
        if(res.exists()){
            console.log("exists")
            const data = res.data();
            console.log(data);
            localStorage.setItem('isLoggedIn', 'true');
            localStorage.setItem('profile_pic', photoURL);
            localStorage.setItem('displayName',displayName);
            localStorage.setItem('email',email);
            localStorage.setItem('emailVerified',emailVerified);
            localStorage.setItem('uid',uid);
            localStorage.setItem('userType',userType);
            authCtx.setUserType(userType);
        }else{
            console.log("newOne");
            let result = await FireBaseFirestoreService.settingDocument("user",uid,document); 
            console.log(result);  
            localStorage.setItem('isLoggedIn', 'true');
            localStorage.setItem('profile_pic', photoURL);
            localStorage.setItem('displayName',displayName);
            localStorage.setItem('email',email);
            localStorage.setItem('emailVerified',emailVerified);
            localStorage.setItem('uid',uid);
            localStorage.setItem('userType',userType);
            authCtx.setUserType(userType);
        }
        // if(res.docs.length === 0){
        //     await FireBaseFirestoreService.createDocument("user",document);
        // }
        
        // console.log(data);
            // sessionStorage.setItem('isLoggedIn', 'true');
            // sessionStorage.setItem('profile_pic', photoURL);
            // sessionStorage.setItem('displayName',displayName);
            // sessionStorage.setItem('email',email);
            // sessionStorage.setItem('emailVerified',emailVerified);
            // sessionStorage.setItem('uid',uid);
            // sessionStorage.setItem('userType',userType);
            // authCtx.setUserType(userType);

    } catch (error) {
        alert(error.message);
    }
}
    return (<>
        <div className="login-form-container">
            <div className='orgDonorButtonFlex'>
        <button 
            className="loginDonorButton" 
            value="donor" 
            onClick={handleUserType}
            ref={donorRef}
            >
                <img src={DonorIcon} alt='donor icon'/>
                Donor
        </button> 


        <button 
            className="loginOrgButton" 
            value="organization" 
            onClick={handleUserType}
            ref={orgRef}
            >
                 <img src={OrgIcon} alt='Organization icon'/>
                Organization
        </button>
        </div>
            <h1>Welcome back!</h1>
            <p>Log in to unlock the power of giving </p>
            <hr className="borderBottom" />
            
            {existingUser ? <div className="row">
            
                <h3>Welcome, {existingUser.email}</h3>
                <button type="button" className="primary-button" onClick={handleLogout}>Logout</button>
            </div> : <form onSubmit={handleSubmit} className="login-form">
                    <label className="input-label login-label">
                        Email*
                        <input type="email" 
                        placeholder='Enter email address'
                            required
                            value={userName}
                            onChange={(e)=>{setUserName(e.target.value)}}
                            className="email-input-text"
                        />
                    </label>
                    <label className="input-label login-label">
                        Password*
                        <input type="password" 
                        placeholder='Enter password'
                            required
                            value={password}
                            onChange={(e)=>{setPassword(e.target.value)}}
                            className="input-text"
                        />
                        </label>

                        <div className="loginRememberMe">
                        <label className='loginRememberMeCheckboxWrapper'>
                         <input type="checkbox" 
                         className='loginRememberMeCheckbox' />
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
                            {/* <AiFillGoogleCircle className="google-icon" /> */}
                            <img src={GoogleIcon} alt='Google Icon'/>
                             Login With Google
                        </button>
                        </div>
                        <p className='signInLinkText'>Don't have an account?  <Link to="/login-signup">Join Now!</Link></p>
                    </div>
            </form>
            }
        </div>
    </>);
}

export default LoginForm;