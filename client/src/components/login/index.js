// This component is sample login page for checking purpose.. It shall be deleted phir.

import { AiFillGoogleCircle } from 'react-icons/ai';
import "./index.scss";
import { useState } from "react";
import FireBaseAuthService from "../../services/FirebaseAuthService";
function LoginForm({existingUser}){
    const [userName, setUserName] = useState("");
    const [password, setPassword] = useState("");

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
        await FireBaseAuthService.loginWithGoogle();
        sessionStorage.setItem('isLoggedIn', 'true');
    } catch (error) {
        alert(error.message);
    }
}
    return (<>
        <div className="login-form-container">
        <button className="loginDonorButton">Donor</button> 
        <button className="loginOrgButton">Organization</button>
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
                        <button type="button" onClick={handleLoginWithGoogle}>
                            <AiFillGoogleCircle className="google-icon" />
                             Login With Google
                        </button>
                        </div>
                        <p>Don't have an account? <a href='#'>Join Now!</a></p>
                    </div>
            </form>
            }
        </div>
    </>);
}

export default LoginForm;