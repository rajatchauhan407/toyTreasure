// This component is sample login page for checking purpose.. It shall be deleted phir.

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
            {existingUser ? <div className="row">
                <h3>Welcome, {existingUser.email}</h3>
                <button type="button" className="primary-button" onClick={handleLogout}>Logout</button>
            </div> : <form onSubmit={handleSubmit} className="login-form">
                    <label className="input-label login-label">
                        Username(email):
                        <input type="email" 
                            required
                            value={userName}
                            onChange={(e)=>{setUserName(e.target.value)}}
                            className="input-text"
                        />
                    </label>
                    <label className="input-label login-label">
                        Password:
                        <input type="password" 
                            required
                            value={password}
                            onChange={(e)=>{setPassword(e.target.value)}}
                            className="input-text"
                        />
                    </label>
                    <div className="button-box">
                        <button className="primary-button">Login</button> 
                        <button type="button" onClick={handleLoginWithGoogle}> Login With Google</button>  
                    </div>
            </form>
            }
        </div>
    </>);
}

export default LoginForm;