import './index.scss';
import { Link } from 'react-router-dom';
import { useState, useContext } from "react";
import FireBaseAuthService from '../../services/FirebaseAuthService';
import AuthContext from '../../services/auth-context';
import FireBaseFirestoreService from '../../services/Firebasefirestoreservice';
export default function CreateAccountOrg(){


    const authContext = useContext(AuthContext);
    const [fullName, setFullName] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [agreeTerms, setAgreeTerms] = useState(false);

    const handleCreateAccount = async (signup)=>{
        signup.preventDefault();
        const userInfo = {
            displayName: fullName,
            phoneNumber: phoneNumber,
            email: email
        }
        FireBaseFirestoreService.createDocument("user", userInfo)

        if(!fullName || !phoneNumber || !email || !password || !confirmPassword || !agreeTerms){
            console.log('Please fill in all fields.');
            return;
        }

        if(password !== confirmPassword){
            console.log( 'Passwords do not match.');
            return;
        }

        try{
            await FireBaseAuthService.registerUser(email, password);
            console.log('account created sucessfully.');
        } catch (error){
            console.error('Error creating account', error)
        }
    };
    return<>
    <div className='tt-84-container'>
    <h1>Join as Organization</h1>
    <p>Sign up here to join us for great change</p>
    <form onSubmit={handleCreateAccount}>

        <label htmlFor="fullName">Your Fullname</label>
        <input 
         type="text" 
         placeholder='Enter Your Name'
         id="fullName"
         value={fullName}
         onChange={(signup)=> setFullName(signup.target.value)}
        />

        <label htmlFor="phoneNumber">Phone Number</label>
        <input 
        type="number" 
        placeholder='Enter Your Phone Number'
        id='phoneNumber'
        value={phoneNumber}
        onChange={(signup)=> setPhoneNumber(signup.target.value)}
        />

        <label htmlFor="email">Email</label>
        <input 
        type="text" 
        placeholder='Enter Your Email Adress'
        id='email'
        value={email}
        onChange={(signup)=> setEmail(signup.target.value)}
        />

        <label htmlFor="password">Create Password</label>
        <input 
        type="password" 
        placeholder='Password'
        id='password'
        value={password}
        onChange={(signup)=>setPassword(signup.target.value)}
        />

        <label htmlFor="confirmPassword">Confirm Password</label>
        <input 
        type="password" 
        placeholder='Password'
        id='confirmPassword'
        value={confirmPassword}
        onChange={(signup)=>setConfirmPassword(signup.target.value)}
        />

        <input 
        type="checkbox" 
        id='agreeTerms'
        checked={agreeTerms}
        onChange={(signup)=> setAgreeTerms(signup.target.checked)}
        />
        <label htmlFor='agreeTerms'>Agree to Terms and conditions.</label>


        <button 
        type="submit">Create account</button>

        <p>Already have an account?</p>
        <Link to="/login">Sign In</Link>
    </form>
    </div>
    
    </>
}