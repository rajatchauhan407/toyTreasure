import './index.scss';
import { useState, useContext } from "react";
import FireBaseAuthService from '../../services/FirebaseAuthService';
import AuthContext from '../../services/auth-context';
import FireBaseFirestoreService from '../../services/Firebasefirestoreservice';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';

export default function CreateAccountDonor(){


    const authCtx = useContext(AuthContext);
    const [fullName, setFullName] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [agreeTerms, setAgreeTerms] = useState(false);

    const navigate = useNavigate();

    const handleCreateAccount = async (signup)=>{
        signup.preventDefault();

        if(!fullName || !phoneNumber || !email || !password || !confirmPassword || !agreeTerms){
            console.log('Please fill in all fields.');
            return;
        }

        if(password !== confirmPassword){
            console.log( 'Passwords do not match.');
            return;
        }
        try{
        let result  = await FireBaseAuthService.registerUser(email,password);
            const {uid} = result.user;
            const userInfo = {
                displayName: fullName,
                phoneNumber: phoneNumber,
                email: email,
                uid: uid,
                user_type:"donor"
            }
            
            FireBaseFirestoreService.createDocument("user", userInfo);
            sessionStorage.setItem('isLoggedIn', 'true');
            sessionStorage.setItem('displayName',userInfo.displayName);
            sessionStorage.setItem('email',email);
            sessionStorage.setItem('userType',userInfo.user_type);
            authCtx.setUserType(userInfo.user_type);

            navigate('/login');
        }catch(error){
            console.error('Error creating account', error)
        }
    };
    return<>
    <div className='tt-84-container'>
    <h1>Join as Donor</h1>
    <p className='body1'>sign up here to join us for great change</p>
    <form onSubmit={handleCreateAccount}>
    <label htmlFor="fullName">Your Fullname</label>
        <input
        type="text" 
        placeholder='Enter Your Name'
        id='fullName'
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

        <div className='agreeTermsWrapper'>
        <input 
        type="checkbox" 
        id='agreeTerms'
        checked={agreeTerms}
        onChange={(signup)=> setAgreeTerms(signup.target.checked)}
        />
        <label htmlFor='agreeTerms'> Agree to Terms and conditions. </label>
        </div>

        <button type="submit">Create account</button>
    
        <p>Already have an account?<span><Link to="/login">Sign In</Link></span></p>
    </form>
    </div>
    
    </>
}