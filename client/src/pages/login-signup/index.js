import './index.scss';
import { useRef, useState } from "react";
import LoginSignupForm from '../../components/loginsignupform';
import CreateAccountDonor from '../../components/donor-create-account';
export default function LoginSignUp() {
  const loginSignUpRef = useRef(null);
 
  const [user,setUser] = useState(null);
    function handleSignUp(selectedUser){
        setUser(selectedUser); 
    }
    return (
      <div className='loginsignupwrapper'>
        <img
          className='loginsignupimage'
          src='https://picsum.photos/500/1000'
          alt=''
        />
        {
          !user?<LoginSignupForm getSignupInfo={handleSignUp} ref={loginSignUpRef}/>:user==="donor"?<CreateAccountDonor/>:""
        }
      </div>
    );
  }