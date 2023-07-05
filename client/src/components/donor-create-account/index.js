import './index.scss';
import { Link } from 'react-router-dom';
export default function createAccountDonor(){
    return<>
    <form action="">
    <label htmlFor="">Your Fullname</label>
        <input type="text" placeholder='Enter Your Name'/>
        <label htmlFor="">Phone Number</label>
        <input type="contact" placeholder='Enter Your Phone Number'/>
        <label htmlFor="">Email</label>
        <input type="text" placeholder='Enter Your Email Adress'/>
        <label htmlFor="">Create Password</label>
        <input type="text" placeholder='Password'/>
        <label htmlFor="">Confirm Password</label>
        <input type="text" placeholder='Password'/>
        <input type="checkbox" value='I agree to terms and conditions'/>
        <button type="submit">Create account</button>
        <p>Already have an account?</p><Link to="/login">Sign In</Link>
    </form>
    </>
}